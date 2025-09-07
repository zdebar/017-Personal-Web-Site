"use client";

import { useState, useEffect } from "react";
import ContactForm from "./common/ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";
import HomeIcon from "./Icons/HomeIcon";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const ensureScrolled = () => {
      if (window.scrollY === 0) {
        window.scrollTo({ top: 1, behavior: "instant" });
      }
    };
    window.addEventListener("scroll", ensureScrolled);
    ensureScrolled(); // check on mount
    return () => window.removeEventListener("scroll", ensureScrolled);
  }, []);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div
      className="header bg-color-1"
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <header className="py-small ">
        <div className="w-main">
          <div className="flex-row  justify-between align-center">
            <HomeIcon color="var(--color)" strokeWidth={1.8} />
            <div className="flex-row justify-between align-center gap-small">
              <GitHubIcon gitHubHref="https://github.com/zdebar" />

              <button
                onClick={toggleForm}
                id="emailAddress"
                className="button bg-gradient-primary shadow"
                title="contact form"
              >
                <span>zdebarth@gmail.com</span>
              </button>
            </div>
          </div>
          {formVisible && <ContactForm />}
        </div>
      </header>
    </div>
  );
}
