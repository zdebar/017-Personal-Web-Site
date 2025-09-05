import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import { cards } from "../../../data/cards";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import ImageCarousel from "@/components/ImageCarousel";

export default function FlashCardApp() {
  const project = cards[2];

  return (
    <div className="project">
      <Section>
        <div className="flex-row justify-between mb-big">
          <h2>English Learning App</h2>
          <div className="flex-row gap-small align-center">
            <GitHubIcon gitHubHref={project.github ?? "#"} />
            <Link
              href={project.hosting ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">test here</button>
            </Link>
          </div>
        </div>
        <div className="multi-column-text">
          <p>
            <strong>Intro</strong> - I don't like long explanations. No one
            reads them anyway. I wil just describe my English learning app. If
            you want to know more, above you can find links to hosting and
            github repository.
          </p>
          <p>
            <strong>Main goal</strong> - I just couldn&#39;t find suitable app
            for myself, so I made one. For me to improve pronunciation, for
            others to learn faster.
          </p>
          <p>
            <strong>Languages</strong> - So far from czech to english only. Due
            to multiple changes during development, the app is ready to be
            modified for learnign other languages too.
          </p>
          <p>
            <strong>Continuous flow</strong> - Vocabulary and grammar is mixed
            together. Just one practice button, no need to think what is next.
            Just practice.
          </p>
          <p>
            <strong>Small chunks</strong> - Learning is done in small chunks of
            10 items. No need to reserve time for learning. Do you a have
            minute? Practice!
          </p>

          <p>
            <strong>Spaced repetition</strong> - App wil automatically gives you
            items to practice based on your previous performance. No need to
            think what next. Just practice!
          </p>
          <p>
            <strong>Listening and speaking</strong> - Exclusive focus on
            listening and speaking. No writing. Everyone wants to speak, then
            why start with writing?
          </p>
          <p>
            <strong>Maximized daily repetitions</strong> - Flashcard for dense
            practice. Why to lose time with games. Have a self-discipline and
            practice.
          </p>
          <p>
            <strong>Simple feedback</strong> - App immediately shows progress in
            terms of learned items. No game is necessary. Anyone who will use
            the map is already self-motivated so just showing small progress is
            best.
          </p>
          <p>
            <strong>Daily Started</strong> - Sometimes is hard to start. App
            tracks daily practice count. UserDashboard shows track of 40
            practice blocks. This is roughly equivalent to 20 minutes of
            practice a day. But this is only a recommended minimum. You can and
            should practice more.
          </p>
          <p>
            <strong>Pronunciation check</strong> - I originally intended to use
            some tool to automatically check pronunciation. They are all
            horrible. Barely recognize speech, pronunciation is completely out
            of question.
          </p>
          <p>
            <strong>Pronunciation repeat</strong> - Luckily simply repeating
            after audio works suprisiingly well. I tried it myself and it really
            helps.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Summary</h2>
        <div className="multi-column-text">
          <p>
            <strong>Overall</strong> - Fast flashcard practice, speaking and
            listening, any time of the day, by small chunks,
          </p>
          <p>
            <strong>Technologies</strong> - React, TypeScript, Tailwind CSS,
            Node.js, PostgreSQL and more
          </p>
          <p>
            <strong>What have I learned</strong> - Technical side is way easier
            than it looks like. Realising which features are usefull is hard.
          </p>
          <p>
            <strong>What's next</strong> - Filling the data, then testing it,
            then polishing the app, then probably rewriting it as downloadable
            mobile app with React Native and SQLite, then finally rewriting this
            incoherent mess pretending to be project page.
          </p>
          <p>
            <strong>When</strong> - Ideally all this in next 2 months, I have
            already another pet projects waiting for me. But I like finish
            things first.One after another. Just be patient.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Database</h2>
        <div className="multi-column-text mb-big">
          <p>
            <strong>Technologies</strong> - PostgreSQL, DBeaver, PgAdmin,
            Supabase for hosting
          </p>
          <p>
            <strong>Structure</strong> - Database structure is pretty
            self-explanatory. Only confusing part could be double connection
            between tables items and blocks. Connection 1:N between
            items.block_id = blocks.id is the main connection, it ensures that
            items belong only to one learning blocks. Learning blocks are for
            gramamar or vocabulary. Connetion N:N via block_items serves for
            grouping items into helper blocks. For grouping similar sounding
            words, or for grouping words with same root words (run, running,
            ran, runner etc.). Helper groups are yet not used in the app, and
            maybe will not be at all.
          </p>
        </div>
        <Image
          src="/images/010.png"
          alt="v0.7.0 Database Scheme"
          width={560}
          height={995}
          layout="responsive"
          className="image-container"
        />
      </Section>
      <Section>
        <h2 className="mb-big">English Data</h2>
        <div className="multi-column-text">
          <p>
            <strong>Technologies</strong> - Python for scripting, Google APIs,
            various other tools
          </p>
          <p>
            <strong>Scripting</strong> - I generally use Python for scripting.
            It is simple and fast to write.
          </p>
          <p>
            <strong>API generation</strong> - Translation, pronunciation and
            audio are all generated with various APIs and tools. IPA
            pronunciation and audio from Google Text to Speech are not great.
            Especially audio is sometimes hard to understand. I will try to find
            something better
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Backend</h2>
        <div className="multi-column-text">
          <p>
            <strong>Technologies</strong> - TypeScript, Node.js, Express.js,
            Winston logger, Vitest, Railway for hosting
          </p>
          <p>
            <strong>Server, Routes, Controllers, Services</strong> - All quite
            simple, few routes, few controllers, few services that are utilizing
            multiple repositories.
          </p>
          <p>
            <strong>Repositories</strong> - As much as it was possible I
            leveraged possibilites of SQL and PostgreSQL. It is suprising how
            complex behavior is possible with jsut pure SQL.
          </p>
        </div>
        <Image
          src="/images/02-008.png"
          alt="v0.7.0 Database Scheme"
          width={560}
          height={995}
          layout="responsive"
          className="image-container"
        />
      </Section>
      <Section>
        <h2 className="mb-big">Frontend</h2>
        <div className="multi-column-text mb-big">
          <p>
            <strong>Technologies:</strong> - React, React Router, TypeScript,
            Tailwind CSS, Vercel for hosting, Firebase for authentication.
          </p>
          <p>
            <strong>Pages</strong> - Just a few pages. UserDashboard and
            PracticeCard are the crucial ones.
          </p>
          <p>
            <strong>UserDashboard</strong> - With Practice Button, Overview
            Button and User Overview. Serves as main hub of the app.
          </p>
          <p>
            <strong>PracticeCard</strong> - Only practice feature of the app.
            Fast flowing flashcard. Fetches practice items by small chunks of 10
            items. After finishing this chunk, it will post progress to backend
            and fetches new chunk.
          </p>
        </div>
        <div className="flex-col justify-center align-center mb-big">
          <ImageCarousel images={project.images ?? []} alt="screenshots" />
        </div>
      </Section>
    </div>
  );
}
