import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useUserUpdate } from "@contexts/UserContext";
import { userData } from "@/lib/dummyData";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// type loginFormData = {
//   email: string;
//   password: string;
// };

const emailPatt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
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

          <span>{t("home:title")}</span>
        </div>
        <div className="login-form">
          <h2>{t("login")}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-item">
              <label htmlFor="email">
                {t("email")} ({t("required")})
              </label>
              <input
                type="email"
                {...register("email", { required: true, pattern: emailPatt })}
                placeholder={t("enter-your-email")}
              />
              {errors.email?.type === "required" && (
                <p>{t("validation:email-required")}</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>{t("validation:email-pattern")}</p>
              )}
            </div>
            <div className="input-item">
              <label htmlFor="password">
                {t("password")} ({t("required")})
              </label>
              <input
                type="password"
                placeholder={t("enter-your-password")}
                {...register("password", { required: true })}
              />
              {errors.password && <p>{t("validation:password-required")}</p>}
            </div>
            <button className="login-btn" type="submit">
              {t("login")}
            </button>
          </form>
          <div className="other-options">
            <p>
              {t("dont-have-account")} <a href="#">{t("sign-up")}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
