import Section from "@/components/common/Section";

export default function AboutMe() {
  return (
    <Section>
      <a
        href="/zdenek_barth_cv.pdf"
        download
        className="lnk"
        title="download personal resume"
      >
        Download CV (CZ, PDF, 0,3 MB)
      </a>
    </Section>
  );
}
