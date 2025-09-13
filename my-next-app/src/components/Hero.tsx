"use client";

import { useState } from "react";
import AnimatedSvgWave from "./AnimatedSvgWave";
import skillGroups from "../data/skills";
import type { SkillGroup } from "../data/skills";

export default function Hero() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="int relative overflow-hidden pnl">
      <AnimatedSvgWave widthPx={1000} />
      <div className="cnt z-intro relative">
        <div className="pb-12">
          <h1>
            <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
          </h1>
          <h1>
            <span>Full Stack</span> <span>Web Developer</span>
          </h1>
        </div>
        <p className="pb-4">
          I am a Full Stack Web Developer with knowledge in both frontend and
          backend development.
          {/* <Link href="/projects/AboutMe" className="link" title="more about me" >
            .. about me
          </Link> */}
        </p>
        <p className="pb-4">
          <strong>React</strong>, Tailwind CSS, Node.js, Express.js, Next.js,
          PostgreSQL, SQLite, Typescript, Python
          <button
            type="button"
            className="btn-lnk"
            title="show more skills"
            onClick={() => setShowSkills((prev) => !prev)}
          >
            {showSkills ? "..less" : "..more"}
          </button>
        </p>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            showSkills ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          {showSkills && (
            <div>
              {skillGroups.map((group: SkillGroup) => (
                <div key={group.title}>
                  <strong className="w-30 inline-block">{group.title}</strong>
                  <span>{group.items.join(", ")}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
