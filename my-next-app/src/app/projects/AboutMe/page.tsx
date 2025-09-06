"use client";
import "../Projects.css";
import Section from "@/components/common/Section";

export default function AboutMe() {
  return (
    <>
      <div className="project">
        <Section>
          <h3>Will finish later, right now you can download CV.</h3>
          <a href="/zdenek_barth_cv.pdf" download>
            Download CV (PDF, 0,3 MB)
          </a>
        </Section>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
