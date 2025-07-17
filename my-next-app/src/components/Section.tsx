import "./Section.css";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  barColor?: string;
  containerColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  barColor = "default-bar-color",
  containerColor = "text-container",
}) => {
  return (
    <section className="group">
      <div className={`bar ${barColor}`}>
        <h3>{title}</h3>
      </div>
      <div className={`text-container ${containerColor}`}>{children}</div>
    </section>
  );
};

export default Section;
