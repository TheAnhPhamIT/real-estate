import { useTranslation } from "react-i18next";
import { useUser, useUserUpdate } from "@/contexts/UserContext";
import LocaleSelectInput from "../LocaleSelectInput/LocaleSelectInput";
import MessagesBox from "../MessagesBox/MessagesBox";
import NavMenu from "../NavMenu/NavMenu";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
    const user = useUser();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const updateUser = useUserUpdate();

    function handleLogout() {
        updateUser && updateUser(null);
        navigate("/login");
    }

    let rightEle = (
        <div className="nav-right">
            <a className="nav-item" onClick={() => navigate("/login")}>
                {t("sign-in")}
            </a>
            <a className="nav-item">{t("sign-up")}</a>
            <div className="theme-control">
                <ThemeButton />
            </div>
            <div className="locale-control">
                <LocaleSelectInput />
            </div>
        </div>
    );

    if (user) {
        rightEle = (
            <div className="nav-user">
                <div className="messages">
                    <MessagesBox />
                </div>
                <div
                    className="user-control"
                    onClick={() => setIsOpenUserMenu((prev) => !prev)}
                >
                    <img src={user.img} alt={user.name} />
                    <span>{user.name}</span>
                    <ul
                        className={`user-menu ${
                            isOpenUserMenu ? "show" : null
                        }`}
                    >
                        <li>
                            <Link to="#">{t("my-profile")}</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout}>{t("log-out")}</a>
                        </li>
                    </ul>
                </div>
                <div className="theme-control">
                    <ThemeButton />
                </div>
                <div className="locale-control">
                    <LocaleSelectInput />
                </div>
            </div>
        );
    }
    return (
        <nav>
            <div className="left">
                <a onClick={() => navigate("/")} className="logo nav-item">
                    <img src="/assets/logo.png" alt="logo" />
                    <span>RealEstate</span>
                </a>
                <a className="nav-item" onClick={() => navigate("/")}>
                    {t("home")}
                </a>
                <a href="#" className="nav-item">
                    {t("about")}
                </a>
                <a href="#" className="nav-item">
                    {t("contact")}
                </a>
                <a href="#" className="nav-item">
                    {t("agent")}
                </a>
            </div>
            <div className="right">{rightEle}</div>
            <NavMenu />
        </nav>
    );
}
