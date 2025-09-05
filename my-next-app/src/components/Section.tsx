import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <div className="w-main py-big">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
