"use client";

import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
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

  return (
    <section>
      <form
        id="contactForm"
        action="https://formspree.io/f/xdkazldg"
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex-col"
      >
        <label htmlFor="email">
          your email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
          />
        </label>
        <label htmlFor="subject">
          subject
          <input type="text" id="subject" name="subject" required />
        </label>
        <label htmlFor="message">
          message
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
  );
}
