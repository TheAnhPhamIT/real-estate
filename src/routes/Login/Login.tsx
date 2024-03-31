import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useUserUpdate } from "@contexts/UserContext";
import { userData } from "@/lib/dummyData";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ProcessingBtn from "@/components/ProcessingBtn/ProcessingBtn";
import { useState } from "react";

// type loginFormData = {
//   email: string;
//   password: string;
// };

const emailPatt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const updateUser = useUserUpdate();

    function hasFormErrors(data: FieldValues) {
        return Object.keys(data).length > 0;
    }

    function onSubmit(data: FieldValues) {
        console.log(data);
        if (hasFormErrors(errors)) return;
        setIsLoading(true);
        if (updateUser) {
            setTimeout(() => {
                updateUser(userData);
                navigate("/");
            }, 4000);
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
                    <form>
                        <div className="input-item">
                            <label htmlFor="email">{t("email")}</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: true,
                                    pattern: emailPatt,
                                })}
                                placeholder={t("enter-your-email")}
                            />
                            {errors.email?.type === "required" && (
                                <p className="error">
                                    {t("validation:email-required")}
                                </p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="error">
                                    {t("validation:email-pattern")}
                                </p>
                            )}
                        </div>
                        <div className="input-item">
                            <label htmlFor="password">{t("password")}</label>
                            <input
                                type="password"
                                placeholder={t("enter-your-password")}
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <p className="error">
                                    {t("validation:password-required")}
                                </p>
                            )}
                        </div>
                        {/* <button className="login-btn" type="submit">
                            {t("login")}
                        </button> */}
                        <ProcessingBtn
                            label={t("login")}
                            isLoading={isLoading}
                            onClick={handleSubmit(onSubmit)}
                        />
                    </form>
                    <em>For testing, you can type any email and password</em>
                    <div className="other-options">
                        <p>
                            {t("dont-have-account")}{" "}
                            <a href="#">{t("sign-up")}</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
