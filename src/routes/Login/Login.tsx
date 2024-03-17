import { SyntheticEvent } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main className="login-page">
      <section className="login">
        <div className="logo-container">
          <figure>
            <img src="/assets/logo.png" alt="logo" />
            <figcaption>
              <h2>RealEstate</h2>
            </figcaption>
          </figure>

          <span>Find Real Estate & Get Your Dream Place</span>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="email" />
            <input type="password" />
            <button className="login-btn" onClick={onSubmit}>
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
