"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import { cards } from "../../../data/cards";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ImageCarousel from "@/components/common/ImageCarousel";
import LinkButton from "@/components/icons/LinkButton";
import StrongParagraph from "@/components/common/StrongParagraph";

export default function FlashCardApp() {
  const project = cards[2];

  return (
    <div>
      <Section>
        <div className="@container">
          <div className="flex flex-col @sm:flex-row justify-between mb-12 gap-6 items-end ">
            <h1 className="self-start">English App</h1>
            <div className="flex gap-4 items-center">
              <GitHubIcon href={project.github} />
              <LinkButton
                href={project.hosting ?? "#"}
                title={project.hosting ?? "#"}
                className="btn-rec btn-green"
              >
                try it here
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="clm-2">
          <StrongParagraph label="Intro">
            I couldn&#39;t find a suitable app for myself, so I created one.
            It&#39;s designed to help me improve my pronunciation and help
            others learn more efficiently.
          </StrongParagraph>
          <p>
            <strong>Main</strong> – Fast-paced speaking and listening practice,
            designed to maximize daily repetitions.
          </p>
          <p>
            <strong>Languages</strong> – Currently Czech to English, but ready
            for expansion.
          </p>
          <p>
            <strong>Flashcards</strong> – Vocabulary and grammar are mixed
            together in one continuous practice flow. No need to worry about
            what to learn next.
          </p>
          <p>
            <strong>Listening and Speaking</strong> – These are the most
            challenging skills for everyone, so why not focus on them from the
            start?
          </p>
          <p>
            <strong>Spaced Repetition</strong> – The algorithm is time-dense,
            with at least 5 repetitions on the first day.
          </p>
          <p>
            <strong>Anytime</strong> – No daily limit. You can practice for 5
            minutes or 5 hours.
          </p>
          <p>
            <strong>Simple Feedback</strong> – Tracks daily items learned and
            practice blocks completed.
          </p>
          <p>
            <strong>Pronunciation Check</strong> – Originally tested APIs for
            automatic pronunciation recognition, but they weren&#39;t accurate
            enough. Simple repetition after listening works slowly but surely.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-12">Summary</h2>
        <div className="clm-2">
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
            easier than it seems. Figuring out which features are useful is way
            harder.
          </p>
          <p>
            <strong>What&#39;s next</strong> – I. fill the data, II. convert to
            offline mobile app
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-12">Database</h2>
        <div className="clm-2 mb-12">
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
          src="/images/02/02-dat-01.png"
          alt="0.7.0 Database Scheme"
          width={560}
          height={995}
          layout="responsive"
        />
      </Section>
      <Section>
        <h2 className="mb-12">English Data</h2>
        <div className="clm-2">
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
        <h2 className="mb-12">Backend</h2>
        <div className="clm-2 mb-12">
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
          src="/images/02/02-rep-01.png"
          alt="0.7.0 Database Scheme"
          width={560}
          height={995}
          layout="responsive"
        />
      </Section>
      <Section>
        <h2 className="mb-12">Frontend</h2>
        <div className="clm-2 mb-12">
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
        <div className="flex justify-center items-center mb-12">
          <ImageCarousel
            images={project.images ?? []}
            alt="screenshots"
            maxHeight={570}
          />
        </div>
      </Section>
    </div>
  );
}
