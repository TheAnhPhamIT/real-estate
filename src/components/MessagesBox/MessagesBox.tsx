import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageBox.scss";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { User, users } from "../../lib/dummyData";
import { useState } from "react";
import { useChatsUpdate } from "../../contexts/ChatContext";

type MessageItemProps = {
  user: User;
  lastMessage?: string;
  onClick: () => void;
};

function MessageItem({ user, lastMessage, onClick }: MessageItemProps) {
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
    <div className="message-item" onClick={onClick}>
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
  const { addChat } = useChatsUpdate();
  const unread = 4;

  function handleChatItemClick(userId: number) {
    addChat && addChat(userId);
    setShowMessages(false);
  }
  return (
    <div className="messages-container">
      <button
        className="message-icon"
        onClick={() => setShowMessages((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faMessage} />
        {unread > 0 && <span className="unread-amount">{unread}</span>}
      </button>
      {showMessages && (
        <div className="messages-box-wrap">
          <div className="messages-wrap">
            <div className="header">
              <h3>Messages</h3>
            </div>
            <div className="message-list">
              {users.map((user) => (
                <MessageItem
                  key={user.id}
                  user={user}
                  onClick={() => handleChatItemClick(user.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
