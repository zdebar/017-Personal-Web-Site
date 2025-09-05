"use client";

import { useState } from "react";
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
      <header className="py-small w-main">
        <div className="flex-row justify-between align-center">
          <HomeIcon color="black" strokeWidth={1.8} />
          <div className="flex-row justify-between align-center gap-small">
            <GitHubIcon gitHubHref="https://github.com/zdebar" />
            <button onClick={toggleForm} id="emailAddress" className="button">
              zdebarth@gmail.com
            </button>
          </div>
        </div>
        {formVisible && <ContactForm />}
      </header>
    </>
  );
}
