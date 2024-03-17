import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./layout.scss";
// import ChatBox from "../components/ChatBox/ChatBox";

export default function Layout() {
  return (
    <div className="layout">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
      {/* <ChatBox /> */}
    </div>
  );
}
