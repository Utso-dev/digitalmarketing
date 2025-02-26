"use client";
import { ThemeContext } from "@/context/DarkMode";
import { useState } from "react";
import NightMode from "../NightMode";

function DarkMode({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`w-full h-full ${isDark ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <NightMode />
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default DarkMode;
