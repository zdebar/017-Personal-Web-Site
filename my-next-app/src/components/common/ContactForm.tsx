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
    const endpoint = form.getAttribute("action");

    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify(data),
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
    <div className="panel bg-A-200 absolute w-screen z-10 ">
      <form
        id="contactForm"
        action="https://formspree.io/f/xdkazldg"
        method="POST"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-1 py-2 content"
      >
        <div className="flex justify-between items-end gap-4">
          <p>sent to: {config.contactMail}</p>
          {copied && <p className="success">email copied to clipboard</p>}
          <button
            type="button"
            className="button-rectangular shadow button-blue"
            onClick={() => {
              navigator.clipboard.writeText(config.contactMail); // TODO: what this means?
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
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
        <div className="items-end flex gap-4 justify-end">
          {responseMessage && (
            <p
              id="responseMessage"
              className="items-end"
              style={{
                visibility: responseMessage ? "visible" : "hidden",
                color:
                  responseMessage === "Message sent successfully!"
                    ? "success"
                    : "fail",
              }}
            >
              {responseMessage}
            </p>
          )}
          <button
            type="submit"
            className="button-rectangular shadow button-green "
            title={`send mail to ${config.contactMail}`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
