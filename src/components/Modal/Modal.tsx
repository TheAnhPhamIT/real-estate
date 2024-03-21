import { ReactNode } from "react";
import "./Modal.scss";

type ModalProps = {
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
  className?: string;
};

export default function Modal({
  children,
  onClose,
  isOpen = false,
  className,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div
      className={
        className ? `dialog-container ${className}` : "dialog-container"
      }
    >
      <div className="header">
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
}
