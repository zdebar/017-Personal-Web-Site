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
    <div className="sticky z-100 top-0 bg-A-100 panel">
      <header className="relative">
        <div className="py-4">
          <div className="flex justify-between items-center overflow-hidden content">
            <HomeIcon />
            <div className="flex justify-between items-center gap-4">
              <ThemeSwitchButton theme={theme} toggleTheme={toggleTheme} />
              <GitHubIcon href="https://github.com/zdebar" />
              <button
                onClick={toggleForm}
                id="emailAddress"
                className="button-rectangular button-green shadow"
                title="contact form"
              >
                <span>
                  {!formVisible ? "contact me" : "close contact form"}
                </span>
              </button>
            </div>
          </div>
          {formVisible && <ContactForm />}
        </div>
      </header>
    </div>
  );
}
