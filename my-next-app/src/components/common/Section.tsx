import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section>
      <div className="w-main py-big">{children}</div>
    </section>
  );
};

export default Section;
