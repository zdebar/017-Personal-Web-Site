import "./Section.css";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="group">
      <div className="bar">
        <h3>{title}</h3>
      </div>
      <div className="text-container">{children}</div>
    </section>
  );
};

export default Section;
