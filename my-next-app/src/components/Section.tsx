import "./Section.css";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div
      style={{
        paddingTop: "var(--gap-large)",
        paddingBottom: "var(--gap-large)",
      }}
    >
      <section>
        <h3>{title}</h3>

        <div>{children}</div>
      </section>
    </div>
  );
};

export default Section;
