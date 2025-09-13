"use client";

import { useState } from "react";
import ContactForm from "../ui/ContactForm";
import GitHubIcon from "../icons/GitHubIcon";
import HomeIcon from "../icons/HomeIcon";
import { useTheme } from "@/hooks/useTheme";
import ThemeSwitchButton from "../common/ThemeSwitchButton";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div className="sticky z-bar top-0 bg-base-200 w-full ">
      <header className="relative w-full">
        <nav className="flex justify-between items-center overflow-hidden cnt">
          <HomeIcon />
          <div className="flex gap-2 items-center">
            <ThemeSwitchButton theme={theme} toggleTheme={toggleTheme} />
            <GitHubIcon href="https://github.com/zdebar" />
            <button
              onClick={toggleForm}
              id="emailAddress"
              className="btn-rec btn-green my-4"
              title="open contact form"
            >
              <span>{!formVisible ? "contact me" : "close contact form"}</span>
            </button>
          </div>
        </nav>
        {formVisible && <ContactForm />}
      </header>
    </div>
  );
}
