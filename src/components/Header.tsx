import { useTheme } from "next-themes";
import React from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "lofi" ? "black" : "lofi");
  };

  return (
    <div className="flex justify-between max-w-5xl mx-auto p-5">
      <div className="font-bold text-xl">hosenur.io</div>
      <div onClick={toggleTheme}>
        {theme === "lofi" ? "light" : "dark"}
      </div>
    </div>
  );
}
