import "./Intro.css";

export default function Intro() {
  return (
    <section>
      <h1 className="title" id="intro">
        <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
      </h1>
      <h1 className="title">
        <span>Full Stack</span> <span>Web Developer</span>
      </h1>
      <br />

      <p className="intro">
        I am a Full Stack Web Developer with experience in developing both
        frontend and backend, predominantly with React, TypeScript, Nodejs and
        PostgreSQL.
      </p>
      <p>
        <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, React, JavaScript,
        TypeScript, Next.js
      </p>
      <p>
        <strong>Backend:</strong> Node.js, Express.js, SQL, PostgreSQL, SQLite,
        Python, RestAPI
      </p>
      <p>
        <strong>General:</strong> Docker, Github, Vite, Vitest, Jest, DBeaver
      </p>
      <p>
        <strong>Cloud:</strong> Google Cloud, Supabase, Firebase, Vercel,
        Railway
      </p>
      <p>
        <strong>Graphical:</strong> Figma, Photoshop, Autocad, Revit, 3ds Max
      </p>
      <p>
        <strong>Other:</strong> Czech native speaker, English C1, Touch typing,
        Driving license B
      </p>
      <hr></hr>
    </section>
  );
}
