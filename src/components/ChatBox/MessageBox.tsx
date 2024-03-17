import "./MessageBox.scss";

type messageBoxProps = {
  message: string;
};

export default function MessageBox({ message }: messageBoxProps) {
  return <div className="message-box">{message}</div>;
}
