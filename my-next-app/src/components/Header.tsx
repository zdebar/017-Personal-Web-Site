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
    <section className="header">
      <header className="py-small ">
        <div className="w-main">
          <div className="flex-row   justify-between align-center">
            <HomeIcon color="var(--color)" strokeWidth={1.8} />
            <div className="flex-row justify-between align-center gap-small">
              <GitHubIcon gitHubHref="https://github.com/zdebar" />

              <button onClick={toggleForm} id="emailAddress" className="button">
                <span style={{ userSelect: "text" }}>zdebarth@gmail.com</span>
              </button>
            </div>
          </div>
          {formVisible && <ContactForm />}
        </div>
      </header>
    </section>
  );
}
