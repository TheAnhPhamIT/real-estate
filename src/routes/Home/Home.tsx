import { useTranslation } from "react-i18next";
import SearchForm from "../../components/SearchForm/SearchForm";
import StatCard from "../../components/StatCard/StatCard";
import { generalStat } from "../../constants/stats";
import "./Home.scss";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="homepage-wrapper">
      <div className="left">
        <div className="wrapper">
          <h1 className="title">{t("home:title")}</h1>
          <p className="info">{t("home:main-content")}</p>
          <SearchForm />
          <div className="stats">
            {generalStat.map((stat) => (
              <StatCard key={stat.name} {...stat} />
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/assets/bg.png" alt="homepage background" />
      </div>
    </div>
  );
}
