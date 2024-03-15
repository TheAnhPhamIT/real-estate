import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/assets/logo.png" alt="logo" />
          <span>RealEstateApp</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div>
    </nav>
  );
}
