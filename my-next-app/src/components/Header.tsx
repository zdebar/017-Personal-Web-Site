"use client";

import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import ContactForm from "./ContactForm";
import GitHubIcon from "./Icons/GitHubIcon";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="flex-row justify-between">
          <Link href="/">home</Link>
          <div className="justify-between flex-row">
            <GitHubIcon size={30} color="black" />
            <a href="#" onClick={toggleForm} id="emailAddress">
              zdebarth@gmail.com
            </a>
          </div>
        </div>
        {formVisible && <ContactForm />}
      </header>
    </>
  );
}
