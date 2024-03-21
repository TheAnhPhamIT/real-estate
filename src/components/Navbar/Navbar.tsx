import { useUser } from "../../contexts/UserContext";
import MessagesBox from "../MessagesBox/MessagesBox";
import NavMenu from "../NavMenu/NavMenu";
import "./Navbar.scss";

export default function Navbar() {
  const user = useUser();

  let rightEle = (
    <>
      <a className="nav-item" href="/login">
        Sign in
      </a>
      <a className="nav-item" href="/">
        Sign up
      </a>
    </>
  );

  if (user) {
    rightEle = (
      <div className="nav-user">
        <a href="/my-profile">
          <img src={user.img} alt={user.name} />
          <span>{user.name}</span>
        </a>
        <div className="messages">
          <MessagesBox />
        </div>
      </div>
    );
  }
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo nav-item">
          <img src="/assets/logo.png" alt="logo" />
          <span>RealEstate</span>
        </a>
        <a className="nav-item" href="/">
          Home
        </a>
        <a className="nav-item" href="/">
          About
        </a>
        <a className="nav-item" href="/">
          Contact
        </a>
        <a className="nav-item" href="/">
          Agents
        </a>
      </div>
      <div className="right">{rightEle}</div>
      <NavMenu />
    </nav>
  );
}
