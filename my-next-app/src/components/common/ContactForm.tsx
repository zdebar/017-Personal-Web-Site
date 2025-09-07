"use client";

import { useState } from "react";

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
    <div>
      <form
        id="contactForm"
        action="https://formspree.io/f/xdkazldg"
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex-col gap-tiny"
      >
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your email"
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="your subject"
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            required
            placeholder="your message"
            style={{ minHeight: "48px" }}
          ></textarea>
        </label>
        <button
          type="submit"
          className="button align-end shadow bg-gradient-secondary"
        >
          Send
        </button>
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
    </div>
  );
}
