import { userData } from "../../lib/dummyData";
import "./ChatBox.scss";

const user = userData;

export default function ChatBox() {
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
      <div className="footer"></div>
    </div>
  );
}
