import { useTranslation } from "react-i18next";
import { useUser } from "../../contexts/UserContext";
import LocaleSelectInput from "../LocaleSelectInput/LocaleSelectInput";
import MessagesBox from "../MessagesBox/MessagesBox";
import NavMenu from "../NavMenu/NavMenu";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();

  let rightEle = (
    <>
      <a className="nav-item" onClick={() => navigate("/login")}>
        {t("nav.sign-in")}
      </a>
      <a className="nav-item">{t("nav.sign-in")}</a>
    </>
  );

  if (user) {
    rightEle = (
      <div className="nav-user">
        <div className="messages">
          <MessagesBox />
        </div>
        <a onClick={() => navigate("/my-profile")}>
          <img src={user.img} alt={user.name} />
          <span>{user.name}</span>
        </a>
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
          {t("nav.home")}
        </a>
        <a className="nav-item">{t("nav.about")}</a>
        <a className="nav-item">{t("nav.contact")}</a>
        <a className="nav-item">{t("nav.agent")}</a>
      </div>
      <div className="right">{rightEle}</div>
      <NavMenu />
    </nav>
  );
}
