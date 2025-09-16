import SvgWave from "../ui/SvgWave";

export default function Hero() {
  return (
    <div className="int relative overflow-hidden pnl">
      <SvgWave widthPx={1000} />
      <div className="cnt z-intro relative">
        <div className="pb-12">
          <h1>
            <span className="nowrap">Hi, I&apos;m</span>
            <span className="nowrap">Zdeněk Barth</span>
          </h1>
          <h1>
            <span className="nowrap">Full Stack</span>
            <span className="nowrap">Web Developer</span>
          </h1>
        </div>
        <p className="pb-4">
          I am a Full Stack Web Developer with knowledge in both frontend and
          backend development.
        </p>
        <p className="pb-4">
          <strong>React</strong>, Tailwind CSS, Node.js, Express.js, Next.js,
          PostgreSQL, SQLite, Typescript, Python
        </p>
      </div>
    </div>
  );
}
