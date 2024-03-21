import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { User, users } from "../../lib/dummyData";
import "./ChatBox.scss";

type chatData = {
  message: string;
};

type Props = {
  userId: number;
  onClose: () => void;
};

export default function ChatBox({ userId, onClose }: Props) {
  const [data, setData] = useState<chatData>({ message: "" });
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // create chat connection to userId
    const userFound = users.find((user) => user.id === userId);
    if (!userFound) return;
    setUser(userFound);
    console.log(`connecting to user id ${userId}`);
    // disconnect when component unmount
    return () => {
      console.log(`disconnect to user id ${userId}`);
    };
  }, [userId]);

  function handleMessageInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const newMessage = e.currentTarget.value;
    setData((prev) => ({ ...prev, message: newMessage }));
  }

  function onSubmitMessage(e: SyntheticEvent) {
    e.preventDefault();
    if (!data.message) return;
  }

  function handleCloseChat() {
    //disconnect chat;
    console.log();
    onClose();
  }
  return (
    <div className="chat-box">
      <div className="header">
        <div className="user">
          <img src={user?.img} alt={user?.name} />
          <span>{user?.name}</span>
        </div>
        <button className="close-btn" onClick={handleCloseChat}>
          x
        </button>
      </div>
      <div className="content"></div>
      <div className="footer">
        <form className="chat-form">
          <textarea
            name="message"
            id="message"
            value={data.message}
            onChange={handleMessageInputChange}
            placeholder="Typing something..."
          ></textarea>
          <button
            className="send-btn"
            onClick={onSubmitMessage}
            disabled={data.message.length <= 0}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
