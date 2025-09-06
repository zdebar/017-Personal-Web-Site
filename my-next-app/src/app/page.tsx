import React from "react";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import "../styles/index.css";

export default function HomePage() {
  return (
    <main>
      <Intro />
      <ProjectList />
    </main>
  );
}
