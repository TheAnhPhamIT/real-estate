import { ChangeEvent, SyntheticEvent, useState } from "react";
import { userData } from "../../lib/dummyData";
import "./ChatBox.scss";

const user = userData;

type chatData = {
  message: string;
};

export default function ChatBox() {
  const [data, setData] = useState<chatData>({ message: "" });

  const handleMessageInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newData = { ...data, message: e.currentTarget.value };
    setData(newData);
  };

  const onSubmitMessage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!data.message) return;
  };
  return (
    <div className="chat-box">
      <div className="header">
        <div className="user">
          <img src={user.img} alt={user.name} />
          <span>{user.name}</span>
        </div>
        <button className="close-btn">x</button>
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
