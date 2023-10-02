"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    return currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      className="z-50 rounded-full p-2 text-xl shadow-lg"
      onClick={() => {
        changeTheme();
      }}
    >
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeSwitcher;
