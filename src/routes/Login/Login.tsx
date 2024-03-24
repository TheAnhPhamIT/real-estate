import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useUserUpdate } from "../../contexts/UserContext";
import { userData } from "../../lib/dummyData";
import { FieldValues, useForm } from "react-hook-form";

// type loginFormData = {
//   email: string;
//   password: string;
// };

const emailPatt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const updateUser = useUserUpdate();

  function hasFormErrors(data: FieldValues) {
    return Object.keys(data).length > 0;
  }

  function onSubmit(data: FieldValues) {
    console.log(data);
    if (hasFormErrors(errors)) return;
    if (updateUser) {
      updateUser(userData);
      navigate("/");
    }
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-item">
              <label htmlFor="email">Email (required)</label>
              <input
                type="email"
                {...register("email", { required: true, pattern: emailPatt })}
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p>Please enter your email</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>Your email is not valid format</p>
              )}
            </div>
            <div className="input-item">
              <label htmlFor="password">Password (required)</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Please enter your password</p>}
            </div>
            <button className="login-btn" type="submit">
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
