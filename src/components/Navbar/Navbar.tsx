import NavMenu from "../NavMenu/NavMenu";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo nav-item">
          <img src="/assets/logo.png" alt="logo" />
          <span>RealEstateApp</span>
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
      <div className="right">
        <a className="nav-item" href="/">
          Sign in
        </a>
        <a className="nav-item" href="/">
          Sign up
        </a>
      </div>
      <NavMenu />
    </nav>
  );
}
