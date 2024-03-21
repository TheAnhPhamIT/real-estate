import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./layout.scss";
import ChatBoxes from "../components/ChatBoxes/ChatBoxes";

export default function Layout() {
  return (
    <div className="layout">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
        <ChatBoxes />
      </main>
    </div>
  );
}
