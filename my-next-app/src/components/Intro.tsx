import "./Intro.css";

export default function Intro() {
  return (
    <section>
      <div className="title">
        <h1 className="nowrap">
          <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
        </h1>
        <h1 className="nowrap">
          <span>Full Stack</span> <span>Web Developer</span>
        </h1>
      </div>

      <article className="block">
        <p>
          I am a Full Stack Web Developer with knowledge in both frontend and
          backend development. I am currently looking for more work, so feel
          free to contact me via email atop.
        </p>
        <br />
        <p>
          Latest projects are listed below. Rest is on my{" "}
          <a
            href="https://github.com/zdebar"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub.
          </a>
        </p>
      </article>
      <article className="technologies">
        <p>
          <strong>Programming languages</strong>
        </p>
        <p>Javascript, Typescript, Python</p>
        <p>
          <strong>Frontend tools</strong>
        </p>
        <p>HTML, CSS, Tailwind CSS, React, Vite, Vitest, Wordpress</p>
        <p>
          <strong>Backend tools</strong>
        </p>
        <p>Next.js, Node.js, Express.js, SQL, PostgreSQL, SQLite, RestAPI</p>
        <p>
          <strong>General tools</strong>
        </p>
        <p>Git, Github, Bash, VS Code, Docker, DBeaver, Postman</p>
        <p>
          <strong>Cloud and hosting</strong>
        </p>
        <p>Google Cloud, Supabase, Firebase, Vercel, Railway</p>
        <p>
          <strong>Graphical tools</strong>
        </p>
        <p>Figma, Photoshop, Autocad, Revit, 3ds Max</p>
        <p>
          <strong>Languages</strong>
        </p>
        <p>Czech - native speaker, English - C1</p>
        <p>
          <strong>Other</strong>
        </p>
        <p>Touch typing, Driving license B</p>
      </article>
    </section>
  );
}
