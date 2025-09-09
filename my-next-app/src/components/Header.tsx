"use client";

import { useState } from "react";
import ContactForm from "./common/ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";
import HomeIcon from "./Icons/HomeIcon";
import { useTheme } from "@/hooks/useTheme";
import ThemeSwitchButton from "./common/ThemeSwitchButton";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div
      className="bg-color-1 "
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <header className="py-small bg-color-1" style={{ position: "relative" }}>
        <div className="w-main">
          <div
            className="flex-row justify-between align-center"
            style={{ overflow: "hidden" }}
          >
            <HomeIcon color="var(--color)" strokeWidth={1.8} />
            <div className="flex-row justify-between align-center gap-small">
              <ThemeSwitchButton theme={theme} toggleTheme={toggleTheme} />
              <GitHubIcon gitHubHref="https://github.com/zdebar" />

              <button
                onClick={toggleForm}
                id="emailAddress"
                className="button bg-gradient-secondary shadow my-small"
                title="contact form"
              >
                <span>
                  {!formVisible ? "contact me" : "close contact form"}
                </span>
              </button>
            </div>
          </div>
        </div>
        {formVisible && <ContactForm />}
      </header>
    </div>
  );
}
