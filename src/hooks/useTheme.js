import { useEffect, useState } from "react";

const lightModeStart = 7;
const darkModeStart = 19;

const STORAGE_KEY = "theme";

function getTimeTheme() {
  const hour = new Date().getHours();

  return hour >= lightModeStart && hour < darkModeStart ? "light" : "dark";
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const saved = sessionStorage.getItem(STORAGE_KEY);

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return getTimeTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    sessionStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
