"use client";

import { useState } from "react";
import "./Header.css";
import Link from "next/link";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        form.reset();
      } else {
        setResponseMessage("Error sending message.");
      }
    } catch (error) {
      setResponseMessage(`Error sending message: ${error}`);
    }
  };

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <>
      <header>
        <Link href="/">home</Link>
        <a href="#" className="tooltip" onClick={toggleForm} id="emailAddress">
          zdebarth@gmail.com
          <span className="tooltip-text" id="tooltip-text">
            {formVisible
              ? "Click to hide contact form"
              : "Click to reveal contact form"}
          </span>
        </a>
      </header>
      <section>
        <form
          id="contactForm"
          action="https://formspree.io/f/xdkazldg"
          method="POST"
          onSubmit={handleFormSubmit}
          style={{ display: formVisible ? "flex" : "none" }}
        >
          <label htmlFor="email">
            your email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </label>

          <label htmlFor="subject">
            subject:
            <input type="text" id="subject" name="subject" required />
          </label>

          <label htmlFor="message">
            message:
            <textarea name="message" id="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>

        {responseMessage && (
          <p
            id="responseMessage"
            style={{
              visibility: responseMessage ? "visible" : "hidden",
              color:
                responseMessage === "Message sent successfully!"
                  ? "green"
                  : "red",
            }}
          >
            {responseMessage}
          </p>
        )}
      </section>
    </>
  );
}
