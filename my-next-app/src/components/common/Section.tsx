import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <article className="pnl">
      <div className="cnt py-12">{children}</div>
    </article>
  );
};

export default Section;
