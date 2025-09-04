"use client";

import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import MailingForm from "./ContactForm";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <>
      <header>
        <Link href="/">home</Link>
        <div>
          <a href="#" onClick={toggleForm} id="emailAddress">
            zdebarth@gmail.com
          </a>
        </div>
      </header>
      {formVisible && <MailingForm />}
    </>
  );
}
