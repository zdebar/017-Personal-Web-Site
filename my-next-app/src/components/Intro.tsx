"use client";

import { useState } from "react";
import "./Intro.css";
import Link from "next/link";

export default function Intro() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="w-main py-large">
      <div className="pb-large">
        <h1>
          <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
        </h1>
        <h1>
          <span>Full Stack</span> <span>Web Developer</span>
        </h1>
      </div>
      <p className="pb-small">
        I am a Full Stack Web Developer with knowledge in both frontend and
        backend development.{" "}
        <Link href="/projects/AboutMe" className="link" title="About Me">
          .. more
        </Link>
      </p>
      <p>
        <strong>React</strong>, Tailwind, Node.js, Next.js, PostgreSQL,
        Typescript, Python
        <button
          type="button"
          className="link"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            marginLeft: "5px",
          }}
          onClick={() => setShowSkills((prev) => !prev)}
        >
          {showSkills ? "..less" : "..more"}
        </button>
      </p>
      {showSkills && (
        <div className="skills">
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
          <p>Next.js, Node.js, Express.js, SQL, PostgreSQL, SQLite, RestAPI</p>
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
        </div>
      )}
    </div>
  );
}
