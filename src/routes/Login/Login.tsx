import { FormEvent, SyntheticEvent, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utilities/validate";

type loginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<loginFormData>({
    email: "",
    password: "",
  });

  // have to replace with other option
  const validateDataForm = (data: loginFormData): boolean => {
    return isValidEmail(data.email) && data.password?.length > 0;
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const newData = {
      ...loginData,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setLoginData(newData);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const isValidData = validateDataForm(loginData);

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
            <div className="input-item">
              <label htmlFor="email">Email (required)</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="password">Password (required)</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
            <button
              className="login-btn"
              onClick={onSubmit}
              disabled={isValidData}
            >
              Login
            </button>
          </form>
          <div className="other-options">
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
