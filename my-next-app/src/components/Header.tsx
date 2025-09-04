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
        <div className="flex-row justify-between align-center">
          <HomeIcon size={28} color="black" strokeWidth={1.8} />
          <div
            className="justify-between flex-row align-center"
            id="contactArea"
          >
            <GitHubIcon size={28} color="black" />

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
