import "./Section.css";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <div className="w-main py-big">
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
