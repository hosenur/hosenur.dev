import { useTheme } from "next-themes";
import React from "react";

export default function ThemeSelector() {
  const { theme,setTheme } = useTheme();
  return (
    <div className="max-w-5xl mx-auto p-5 flex justify-between text-xs md:text-sm">
      <div className={`cursor-pointer ${theme==="lofi"&&"underline"}`} onClick={() => setTheme("lofi")}>
        <div>lofi</div>
      </div>
      <div className={`cursor-pointer ${theme==="retro"&&"underline"}`} onClick={() => setTheme("retro")}>
        <div>retro</div>
      </div>
      <div className={`cursor-pointer ${theme==="black"&&"underline"}`} onClick={() => setTheme("black")}>
        <div>black</div>
      </div>
      <div className={`cursor-pointer ${theme==="cyberpunk"&&"underline"}`} onClick={() => setTheme("cyberpunk")}>
        <div>cyberpunk</div>
      </div>
    </div>
  );
}
