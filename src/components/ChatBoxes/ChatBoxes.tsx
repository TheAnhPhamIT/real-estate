import { useChats, useChatsUpdate } from "../../contexts/ChatContext";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatBoxes.scss";

export default function ChatBoxes() {
  const chats = useChats();
  const { deleteChat } = useChatsUpdate();

  return (
    <div className="chat-boxes">
      {chats.map((chatId) => (
        <ChatBox
          key={chatId}
          userId={chatId}
          onClose={() => deleteChat && deleteChat(chatId)}
        />
      ))}
    </div>
  );
}
