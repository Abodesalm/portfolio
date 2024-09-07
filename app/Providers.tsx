"use client";

import { ThemeProvider } from "next-themes";
import {} from "next/font/local";

/* const roboto = Roboto({ subsets: ["latin"], weight: "400" });
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-dark dark:text-white bg-[url('../img/light-bg.jpg')] dark:bg-[url('../img/dark-bg.jpg')] transition-all bg-cover bg-no-repeat bg-fixed">
        {children}
      </div>
    </ThemeProvider>
  );
}
