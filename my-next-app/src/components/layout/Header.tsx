"use client";

import React from "react";
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
    <div className="sticky z-bar top-0 bg-base-200 w-full sm:py-3">
      <header className="relative w-full">
        <nav className="flex justify-between items-center cnt">
          <HomeIcon />
          <div className="flex gap-2 items-center my-1">
            <Link href="/about" className="lnk" title="learn more about me">
              about
            </Link>
            <Link
              href="/blog"
              className="lnk disabled"
              tabIndex={-1}
              aria-disabled="true"
            >
              blog
            </Link>
            <ThemeSwitchButton theme={theme} toggleTheme={toggleTheme} />
            <GitHubIcon href="https://github.com/zdebar" />
            <button
              onClick={toggleForm}
              id="emailAddress"
              className="btn-beh btn-green w-[var(--height-btn)] h-[var(--height-btn)] min-[420px]:w-[var(--width-btn)] p-0"
              title={formVisible ? "close contact form" : "open contact form"}
            >
              <span className="block min-[420px]:hidden text-lg">@</span>
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
