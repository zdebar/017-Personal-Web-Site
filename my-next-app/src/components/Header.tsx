"use client";

import { useState } from "react";
import "./Header.css";
import ContactForm from "./ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";
import HomeIcon from "./Icons/HomeIcon";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <>
      <header>
        <section>
          <div className="flex-row justify-between align-center">
            <HomeIcon color="black" strokeWidth={1.8} />
            <div
              className="justify-between flex-row align-center gap-small"
              id="contactArea"
            >
              <GitHubIcon />
              <button onClick={toggleForm} id="emailAddress" className="button">
                zdebarth@gmail.com
              </button>
            </div>
          </div>
          {formVisible && <ContactForm />}
        </section>
      </header>
    </>
  );
}
