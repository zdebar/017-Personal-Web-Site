"use client";

import { useState } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const JSONdata = JSON.stringify(data);

    const endpoint = form.getAttribute("action");

    const options: RequestInit = {
      method: "POST",
      body: JSONdata,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (typeof endpoint === "string") {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        form.reset();
      } else {
        setResponseMessage(result.errors?.[0]?.message || "An error occurred.");
      }
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
