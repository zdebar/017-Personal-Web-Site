import "./Intro.css";

export default function Intro() {
  return (
    <section>
      <div className="title">
        <h1 className="nowrap" id="intro">
          <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
        </h1>
        <h1 className="nowrap">
          <span>Full Stack</span> <span>Web Developer</span>
        </h1>
      </div>

      <article className="block">
        <p>
          I am a Full Stack Web Developer with experience in both frontend and
          backend development. I am currently looking for more work, so feel
          free to contact me.
        </p>
        <br />
        <p>
          Latest project is below. Rest is on my{" "}
          <a
            href="https://github.com/zdebar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            GitHub.
          </a>
        </p>
      </article>

      <article className="block">
        <p>
          <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript,
          TypeScript, React, Vite, Vitest, Next.js
        </p>
        <p>
          <strong>Backend:</strong> Node.js, Express.js, SQL, PostgreSQL,
          SQLite, Python, RestAPI
        </p>
        <p>
          <strong>General:</strong> Git, Github, Bash, VS Code, Docker, DBeaver,
          Postman
        </p>
        <p>
          <strong>Cloud:</strong> Google Cloud, Supabase, Firebase, Vercel,
          Railway
        </p>
        <p>
          <strong>Graphical:</strong> Figma, Photoshop, Autocad, Revit, 3ds Max
        </p>
        <p>
          <strong>Other:</strong> Czech native speaker, English C1, Touch
          typing, Driving license B
        </p>
      </article>
    </section>
  );
}
