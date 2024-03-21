import { ReactNode, createContext, useContext, useState } from "react";

type ChatsProviderProps = {
  children: ReactNode;
};

type ChatsUpdateContextValue = {
  addChat: ((chatId: number) => void) | null;
  deleteChat: ((chatId: number) => void) | null;
};

const ChatsContext = createContext<number[]>([]);
const ChatsUpdateContext = createContext<ChatsUpdateContextValue>({
  addChat: null,
  deleteChat: null,
});

export function useChats() {
  return useContext(ChatsContext);
}

export function useChatsUpdate() {
  return useContext(ChatsUpdateContext);
}

export function ChatsProvider({ children }: ChatsProviderProps) {
  const [chats, setChats] = useState<number[]>([]);

  function deleteChat(chatId: number) {
    setChats((prev) => prev.filter((userId) => userId !== chatId));
  }

  function addChat(chatId: number) {
    const chatFound = chats.find((userId) => userId === chatId);
    if (chatFound) return;
    setChats((prev) => [...prev, chatId]);
  }

  const chatsUpdateProviderValue: ChatsUpdateContextValue = {
    addChat,
    deleteChat,
  };
  return (
    <ChatsContext.Provider value={chats}>
      <ChatsUpdateContext.Provider value={chatsUpdateProviderValue}>
        {children}
      </ChatsUpdateContext.Provider>
    </ChatsContext.Provider>
  );
}
