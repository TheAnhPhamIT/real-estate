import SearchForm from "../../components/SearchForm/SearchForm";
import StatCard from "../../components/StatCard/StatCard";
import { generalStat } from "../../constants/stats";
import "./Home.scss";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <div className="left">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
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
