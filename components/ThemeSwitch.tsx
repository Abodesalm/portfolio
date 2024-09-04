"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-center items-center">
      {mounted &&
        (currentTheme === "dark" ? (
          <BiSun
            className=" cursor-pointer hover:text-accent text-[22px] "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BiMoon
            className=" cursor-pointer hover:text-accent text-[22px] "
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
