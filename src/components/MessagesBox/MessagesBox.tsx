import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageBox.scss";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { User, users } from "../../lib/dummyData";
import { useState } from "react";

type MessageItemProps = {
  user: User;
  lastMessage?: string;
};

function MessageItem({ user, lastMessage }: MessageItemProps) {
  const maxMessageLength = 30;
  const defaultMessage =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit!";
  function formatMessage(message: string): string {
    return (
      message.slice(0, maxMessageLength) +
      (message?.length > maxMessageLength ? "..." : "")
    );
  }

  const shortMessage = formatMessage(lastMessage || defaultMessage);
  return (
    <div className="message-item">
      <div className="avatar">
        <img src={user.img} alt={user.name} />
      </div>
      <div className="text-container">
        <h5 className="user-name">{user.name}</h5>
        <p>{shortMessage}</p>
      </div>
    </div>
  );
}

export default function MessagesBox() {
  const [showMessages, setShowMessages] = useState(false);
  return (
    <div className="messages-box-wrap">
      <button
        className="message-icon"
        onClick={() => setShowMessages((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faMessage} />
      </button>
      {showMessages && (
        <div className="messages-wrap">
          <div className="header">
            <h5>Messages</h5>
          </div>
          <div className="message-list">
            {users.map((user) => (
              <MessageItem key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
