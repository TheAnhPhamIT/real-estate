import { useUser } from "../../contexts/UserContext";
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
      <a href="/my-profile" className="nav-user">
        <img src={user.img} alt={user.name} />
        <span>{user.name}</span>
      </a>
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
