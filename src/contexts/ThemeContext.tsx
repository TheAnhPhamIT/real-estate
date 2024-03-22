import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type Theme = "dark" | "light";

type Props = {
  children: ReactNode;
};

type ThemeProviderValue = {
  theme: Theme;
  setTheme: ((theme: Theme) => void) | null;
};

const ThemeContext = createContext<ThemeProviderValue>({
  theme: "light",
  setTheme: null,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

  useEffect(() => {
    if (theme === "light") return;
    if (document.body.classList.contains("dark")) return;
    document.body.classList.add("dark");
  }, []);

  function handleThemeChange(theme: Theme) {
    setTheme(theme);
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
