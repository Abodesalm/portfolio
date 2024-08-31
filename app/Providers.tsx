"use client";

import { ThemeProvider } from "next-themes";
import {} from "next/font/local";

/* const roboto = Roboto({ subsets: ["latin"], weight: "400" });
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-dark dark:text-white dark:bg-dark transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
