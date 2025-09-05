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
        <div className="flex-row-col justify-between mb-big gap-medium align-right text-left">
          <h2>English App</h2>
          <div className="flex-row gap-small align-center">
            <GitHubIcon gitHubHref={project.github ?? "#"} />
            <Link
              href={project.hosting ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">try it here</button>
            </Link>
          </div>
        </div>
        <div className="multi-column-text">
          <p>
            <strong>Intro</strong> – I don&#39;t like long explanations; no one
            reads them anyway. I&#39;ll just describe my English learning app.
            If you want to know more, you can find links to the hosting and
            GitHub repository above.
          </p>
          <p>
            <strong>Main goal</strong> – I couldn&#39;t find a suitable app for
            myself, so I made one. It&#39;s designed to help me improve my
            pronunciation, and for others to learn faster.
          </p>
          <p>
            <strong>Languages</strong> – So far, it&#39;s only Czech to English.
            Due to multiple changes during development, the app is ready to be
            adapted for learning other languages too.
          </p>
          <p>
            <strong>Continuous flow</strong> – Vocabulary and grammar are mixed
            together. Just one practice button—no need to decide what&#39;s
            next. Just practice.
          </p>
          <p>
            <strong>Small chunks</strong> – Learning is done in small chunks of
            10 items. No need to reserve time for learning. Got a minute?
            Practice!
          </p>
          <p>
            <strong>Spaced repetition</strong> – The app automatically gives you
            items to practice based on your previous performance. No need to
            think about what&#39;s next. Just practice!
          </p>
          <p>
            <strong>Listening and speaking</strong> – Exclusive focus on
            listening and speaking. No writing. Everyone wants to speak, so why
            start with writing?
          </p>
          <p>
            <strong>Maximized daily repetitions</strong> – Flashcards for dense
            practice. Why waste time with games? Have self-discipline and
            practice.
          </p>
          <p>
            <strong>Simple feedback</strong> – The app immediately shows your
            progress in terms of learned items. No games are necessary. Anyone
            using the app is already self-motivated, so just showing small
            progress is best.
          </p>
          <p>
            <strong>Daily Start</strong> – Sometimes it&#39;s hard to start. The
            app tracks your daily practice count. The UserDashboard shows a
            track of 40 practice blocks, which is roughly equivalent to 20
            minutes of practice a day. This is only a recommended minimum—you
            can and should practice more.
          </p>
          <p>
            <strong>Pronunciation check</strong> – I originally intended to use
            a tool to automatically check pronunciation. They are all
            terrible—barely recognize speech, and pronunciation is completely
            unreliable.
          </p>
          <p>
            <strong>Pronunciation repeat</strong> – Luckily, simply repeating
            after audio works surprisingly well. I tried it myself and it really
            helps.
          </p>
          <p>
            <strong>App name</strong> - English App is a working title. But as I
            read this page after me, maybe it will be &quot;Just practice&quot;.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Summary</h2>
        <div className="multi-column-text">
          <p>
            <strong>Overall</strong> – Fast flashcard practice, speaking and
            listening, any time of day, in small chunks.
          </p>
          <p>
            <strong>Technologies</strong> – React, TypeScript, Tailwind CSS,
            Node.js, PostgreSQL, and more.
          </p>
          <p>
            <strong>What have I learned</strong> – The technical side is much
            easier than it seems. Figuring out which features are useful is
            hard.
          </p>
          <p>
            <strong>What&#39;s next</strong> – Fill in the data, test it, polish
            the app, then probably rewrite it as a downloadable mobile app with
            React Native and SQLite. Finally, rewrite this incoherent mess
            pretending to be a project page.
          </p>
          <p>
            <strong>When</strong> – Ideally, all this in the next 2 months. I
            already have other pet projects waiting for me, but I like to finish
            things first—one after another. Just be patient.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Database</h2>
        <div className="multi-column-text mb-big">
          <p>
            <strong>Technologies</strong> – PostgreSQL, DBeaver, PgAdmin,
            Supabase for hosting.
          </p>
          <p>
            <strong>Structure</strong> – The database structure is pretty
            self-explanatory. The only confusing part could be the double
            connection between the items and blocks tables. The 1:N connection
            between items.block_id = blocks.id is the main connection; it
            ensures that items belong to only one learning block. Learning
            blocks are for grammar or vocabulary. The N:N connection via
            block_items is for grouping items into helper blocks—for grouping
            similar sounding words, or words with the same root (run, running,
            ran, runner, etc.). Helper groups are not yet used in the app, and
            maybe never will be.
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
            <strong>Technologies</strong> – Python for scripting, Google APIs,
            and various other tools.
          </p>
          <p>
            <strong>Scripting</strong> – I generally use Python for scripting.
            It&#39;s simple and fast to write.
          </p>
          <p>
            <strong>API generation</strong> – Translation, pronunciation, and
            audio are all generated with various APIs and tools. IPA
            pronunciation and audio from Google Text-to-Speech are not
            great—especially the audio, which is sometimes hard to understand. I
            will try to find something better.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-big">Backend</h2>
        <div className="multi-column-text">
          <p>
            <strong>Technologies</strong> – TypeScript, Node.js, Express.js,
            Winston logger, Vitest, Railway for hosting.
          </p>
          <p>
            <strong>Server, Routes, Controllers, Services</strong> – All quite
            simple: a few routes, a few controllers, and a few services that
            utilize multiple repositories.
          </p>
          <p>
            <strong>Repositories</strong> – As much as possible, I leveraged the
            capabilities of SQL and PostgreSQL. It&#39;s surprising how complex
            behavior is possible with just pure SQL.
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
            <strong>Technologies</strong> – React, React Router, TypeScript,
            Tailwind CSS, Vercel for hosting, Firebase for authentication.
          </p>
          <p>
            <strong>Pages</strong> – Just a few pages. UserDashboard and
            PracticeCard are the crucial ones.
          </p>
          <p>
            <strong>UserDashboard</strong> – With Practice Button, Overview
            Button, and User Overview. Serves as the main hub of the app.
          </p>
          <p>
            <strong>PracticeCard</strong> – The only practice feature of the
            app. Fast-flowing flashcards. Fetches practice items in small chunks
            of 10. After finishing a chunk, it posts progress to the backend and
            fetches a new chunk.
          </p>
        </div>
        <div className="flex-col justify-center align-center mb-big">
          <ImageCarousel images={project.images ?? []} alt="screenshots" />
        </div>
      </Section>
    </div>
  );
}
