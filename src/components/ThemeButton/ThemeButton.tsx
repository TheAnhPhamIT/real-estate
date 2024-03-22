import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../contexts/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import "./ThemeButton.scss";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function handleOnClick() {
    if (!setTheme) return;
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <button className="theme-btn" onClick={handleOnClick}>
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
}
