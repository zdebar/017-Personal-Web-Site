"use client";

import { useState } from "react";
import "./Intro.css";

export default function Intro() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="intro">
      <section className="w-intro">
        <div className="intro-title">
          <h1 className="nowrap">
            <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
          </h1>
          <h1 className="nowrap">
            <span>Full Stack</span> <span>Web Developer</span>
          </h1>
        </div>
        <article className="intro-text flex-col">
          <p>
            I am a Full Stack Web Developer with knowledge in both frontend and
            backend development. Selected projects are listed below. Rest is on
            my{" "}
            <a
              href="https://github.com/zdebar"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub.
            </a>
          </p>
          <p>
            <strong>React</strong>, Tailwind, Node.js, Next.js, PostgreSQL,
            Typescript, Python
          </p>
          <button
            type="button"
            className="link"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            onClick={() => setShowSkills((prev) => !prev)}
          >
            {showSkills ? "..less" : "..more"}
          </button>
        </article>
        {showSkills && (
          <article className="skills">
            <p>
              <strong>Coding</strong>
            </p>
            <p>Javascript, Typescript, Python</p>
            <p>
              <strong>Frontend</strong>
            </p>
            <p>HTML, CSS, Tailwind CSS, React, Vite, Vitest, Wordpress</p>
            <p>
              <strong>Backend</strong>
            </p>
            <p>
              Next.js, Node.js, Express.js, SQL, PostgreSQL, SQLite, RestAPI
            </p>
            <p>
              <strong>General</strong>
            </p>
            <p>Git, Github, Bash, VS Code, Docker, DBeaver, Postman</p>
            <p>
              <strong>Cloud, Hosting</strong>
            </p>
            <p>Google Cloud, Supabase, Firebase, Vercel, Railway</p>
            <p>
              <strong>Graphical</strong>
            </p>
            <p>Figma, Photoshop, Autocad, Revit, 3ds Max</p>
            <p>
              <strong>Languages</strong>
            </p>
            <p>Czech - native speaker, English - C1</p>
            <p>
              <strong>Other</strong>
            </p>
            <p>Touch typing, Driving license B</p>
          </article>
        )}
      </section>
    </div>
  );
}
