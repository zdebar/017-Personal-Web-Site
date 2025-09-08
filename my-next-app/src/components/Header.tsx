"use client";

import { useState } from "react";
import ContactForm from "./common/ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";
import HomeIcon from "./Icons/HomeIcon";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div
      className="bg-color-1 "
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <header className="py-medium">
        <div className="w-main ">
          <div className="flex-row justify-between align-center">
            <HomeIcon color="var(--color)" strokeWidth={1.8} />
            <div className="flex-row justify-between align-center gap-small">
              <GitHubIcon gitHubHref="https://github.com/zdebar" />

              <button
                onClick={toggleForm}
                id="emailAddress"
                className="button bg-gradient-primary shadow"
                title="contact form"
              >
                <span>contact me</span>
              </button>
            </div>
          </div>
          {formVisible && <ContactForm />}
        </div>
      </header>
    </div>
  );
}
