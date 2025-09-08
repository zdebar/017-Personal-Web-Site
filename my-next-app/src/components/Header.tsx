"use client";

import { useState, useEffect } from "react";
import ContactForm from "./common/ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";
import HomeIcon from "./Icons/HomeIcon";
import Image from "next/image";

type ThemeType = "light" | "dark" | "system";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  // Helper to get system theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      setTheme(stored as ThemeType);
    }
  }, []);

  // Listen for system theme changes if "system" is selected
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

  // Apply theme to body and save to localStorage
  useEffect(() => {
    document.body.className = resolvedTheme;
    localStorage.setItem("theme", theme);
  }, [resolvedTheme, theme]);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  // Cycle through themes: dark -> light -> system -> dark ...
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : prev === "light" ? "system" : "dark"
    );
  };

  return (
    <div
      className="bg-color-1 "
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <header className="py-medium bg-color-1" style={{ position: "relative" }}>
        <div className="w-main">
          <div
            className="flex-row justify-between align-center"
            style={{ overflow: "hidden" }}
          >
            <HomeIcon color="var(--color)" strokeWidth={1.8} />
            <div className="flex-row justify-between align-center gap-small">
              <button
                onClick={toggleTheme}
                className="icon"
                title="switch theme"
                style={{ color: "var(--color)" }}
              >
                {theme === "system" ? (
                  <Image
                    src="/icons/system.svg"
                    alt="system icon"
                    width={24}
                    height={24}
                    style={{ color: "var(--color)" }}
                    title="system theme"
                  />
                ) : theme === "dark" ? (
                  <Image
                    src="/icons/dark.svg"
                    alt="dark icon"
                    width={24}
                    height={24}
                    title="dark theme"
                  />
                ) : (
                  <Image
                    src="/icons/light.svg"
                    alt="light icon"
                    width={24}
                    height={24}
                    title="light theme"
                  />
                )}
              </button>
              <GitHubIcon gitHubHref="https://github.com/zdebar" />

              <button
                onClick={toggleForm}
                id="emailAddress"
                className="button bg-gradient-secondary shadow my-small"
                title="contact form"
              >
                <span>contact me</span>
              </button>
            </div>
          </div>
        </div>
        {formVisible && <ContactForm />}
      </header>
    </div>
  );
}
