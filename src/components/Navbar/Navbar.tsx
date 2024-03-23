import { useTranslation } from "react-i18next";
import { useUser } from "../../contexts/UserContext";
import LocaleSelectInput from "../LocaleSelectInput/LocaleSelectInput";
import MessagesBox from "../MessagesBox/MessagesBox";
import NavMenu from "../NavMenu/NavMenu";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Navbar.scss";

export default function Navbar() {
  const user = useUser();
  const { t } = useTranslation();

  let rightEle = (
    <>
      <a className="nav-item" href="/login">
        {t("nav.sign-in")}
      </a>
      <a className="nav-item" href="/">
        {t("nav.sign-in")}
      </a>
    </>
  );

  if (user) {
    rightEle = (
      <div className="nav-user">
        <div className="messages">
          <MessagesBox />
        </div>
        <a href="/my-profile">
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
        <a href="/" className="logo nav-item">
          <img src="/assets/logo.png" alt="logo" />
          <span>RealEstate</span>
        </a>
        <a className="nav-item" href="/">
          {t("nav.home")}
        </a>
        <a className="nav-item" href="/">
          {t("nav.about")}
        </a>
        <a className="nav-item" href="/">
          {t("nav.contact")}
        </a>
        <a className="nav-item" href="/">
          {t("nav.agent")}
        </a>
      </div>
      <div className="right">{rightEle}</div>
      <NavMenu />
    </nav>
  );
}
