"use client";

import { useState } from "react";
import ContactForm from "../ui/ContactForm";
import Link from "next/link";
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
            <Link href="/projects/AboutMe" className="lnk">
              about
            </Link>
            <Link href="/projects/AboutMe" className="lnk">
              blog
            </Link>
            <ThemeSwitchButton theme={theme} toggleTheme={toggleTheme} />
            <GitHubIcon href="https://github.com/zdebar" />
            <button
              onClick={toggleForm}
              id="emailAddress"
              className="btn-beh btn-green my-4 w-[var(--height-btn)] h-[var(--height-btn)] min-[420px]:w-[var(--width-btn)] p-0"
              title="open contact form"
            >
              <span className="block min-[420px]:hidden pb-0.5 text-lg">@</span>
              <span className="hidden min-[420px]:block">
                {formVisible ? "close contact form" : "contact me"}
              </span>
            </button>
          </div>
        </nav>
        {formVisible && <ContactForm />}
      </header>
    </div>
  );
}
