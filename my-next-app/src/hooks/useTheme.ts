// useTheme.ts
import { useState, useEffect } from "react";
type ThemeType = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      setTheme(stored as ThemeType);
    }
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const updateTheme = () => setResolvedTheme(getSystemTheme());
      updateTheme();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", updateTheme);
      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", updateTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    document.body.className = resolvedTheme;
    document.documentElement.className = resolvedTheme;
    localStorage.setItem("theme", theme);
  }, [resolvedTheme, theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : prev === "light" ? "system" : "dark"
    );
  };

  return { theme, resolvedTheme, toggleTheme };
}
