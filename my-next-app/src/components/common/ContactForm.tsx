"use client";

import { useState } from "react";
import config from "../../../app.config";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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
    <div
      style={{ position: "absolute", width: "100%", zIndex: 10 }}
      className="w-background bg-color-1"
    >
      <form
        id="contactForm"
        action="https://formspree.io/f/xdkazldg"
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex-col gap-tiny my-tiny content"
      >
        <div className="flex-row justify-between  gap-small">
          <p className="align-end ">sent to: {config.contactMail}</p>
          {copied && (
            <p className="align-end success-message">
              email copied to clipboard
            </p>
          )}
          <button
            type="button"
            className="button align-end shadow bg-gradient-primary"
            onClick={() => {
              navigator.clipboard.writeText(config.contactMail);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // Hide after 2s
            }}
            title={`copy ${config.contactMail} to clipboard`}
          >
            copy email to clipboard
          </button>
        </div>
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
        <div className="align-end flex-row gap-small justify-end">
          {responseMessage && (
            <p
              id="responseMessage"
              className="align-end"
              style={{
                visibility: responseMessage ? "visible" : "hidden",
                color:
                  responseMessage === "Message sent successfully!"
                    ? "var(--success-color)"
                    : "var(--error-color)",
              }}
            >
              {responseMessage}
            </p>
          )}
          <button
            type="submit"
            className="button shadow button-green "
            title={`send mail to ${config.contactMail}`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
