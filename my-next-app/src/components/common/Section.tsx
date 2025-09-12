import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="panel">
      <div className="content py-12">{children}</div>
    </section>
  );
};

export default Section;
