"use client";

import { useState } from "react";
import AnimatedSvgWave from "../ui/AnimatedSvgWave";

export default function Hero() {
  const [animateWave, setAnimateWave] = useState(false);

  return (
    <div className="int relative overflow-hidden pnl">
      <AnimatedSvgWave widthPx={1000} animate={animateWave} />
      <button
        type="button"
        id="btnAnimateWave"
        className=" absolute bottom-2 left-2 text-xs btn-lnk z-10 text-black"
        onClick={() => setAnimateWave((prev) => !prev)}
        title={animateWave ? "pause animation" : "unpause animation"}
      >
        {animateWave ? "stop animation" : "start animation"}
      </button>
      <div className="cnt z-intro relative">
        <div className="pb-12">
          <h1>
            <span className="nowrap">Hi, I&apos;m</span>
            <span className="nowrap">Zdeněk Barth</span>
          </h1>
          <h1>
            <span className="nowrap">Full Stack</span>
            <span className="nowrap">Web Developer</span>
          </h1>
        </div>
        <p className="pb-4">
          I am a Full Stack Web Developer with knowledge in both frontend and
          backend development.
        </p>
        <p className="pb-4">
          <strong>React</strong>, Tailwind CSS, Node.js, Express.js, Next.js,
          PostgreSQL, SQLite, Typescript, Python
        </p>
      </div>
    </div>
  );
}
