import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import { cards } from "../../../data/cards";
import GitHubIcon from "@/components/Icons/GitHubIcon";

export default function FlashCardApp() {
  const project = cards[2];

  return (
    <div className="project">
      <Section title="Introduction">
        <div className="flex-row gap-small align-center py-small">
          <Link
            href={project.hosting ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Test here</button>
          </Link>
          <GitHubIcon gitHubHref={project.github ?? "#"} />
        </div>
        <div>
          <h3>Main goal</h3>
          <p>
            English learning app with maximal time efficiency ratio. For me to
            improve pronunciation, for others to learn way faster.
          </p>
          <h3>Main Principles</h3>
          <ul>
            <li>
              Listening and speaking
              <li>repeat after audio</li>
              <li>maximize daily repetitions</li>
            </li>
            <li>
              Maximize daily repetitions
              <li>flashcards</li>
              <li>daily blocks</li>
            </li>
            <li>
              Consistent progress
              <li>small chuncks</li>
              <li>dense repetitions</li>
              <li>no daily limits</li>
            </li>
          </ul>
        </div>
      </Section>
      <Section title="Database">
        <p>
          <strong>Technologies:</strong> PostgreSQL, Supabase for hosting
        </p>
        <h3>Tables</h3>
        <p>majority of database structure is self-explanatory</p>
        <div className="grid">
          <p>user_blocks</p>
          <p>tracks user progress in blocks</p>
          <p>user_items</p>
          <p>tracks user progress in items</p>
          <p>user_score</p>
          <p>counts daily practice blocks</p>
          <p>block_items</p>
          <p>
            items are organized into practice blocks via items.block_id with
            relation 1:N, block_items organizas them into helper blocks
            (determined by block category) with relation N:N, helper blocks for
            examples groups items with similar pronunciation, similar root word
            etc.
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
      <Section title="Data">
        <p>
          <strong>Technologies:</strong> Python, Google APIs
        </p>
        <p>
          Translation, pronunciation, and audio files are all generated using
          the Google Translate API and other tools.
        </p>
      </Section>
      <Section title="Frontend">
        <p>
          <strong>Technologies:</strong> React, React Router, TypeScript,
          Tailwind CSS, Vercel for hosting, Firebase for authentication
        </p>
        <ul>
          <li>Contextul guide</li>
          <li>Practice flow</li>
          <li>
            Testing
            <p>React Testing Library</p>
          </li>
        </ul>
      </Section>
      <Section title="Backend">
        <p>
          <strong>Technologies:</strong> React, React Router, TypeScript,
          Tailwind CSS, Vercel for hosting, Winston logger, Railway for hosting
        </p>
        <ul>
          <li>Testing</li>
          <li>Authentication</li>
          <li>API routes</li>
          <li>Database connection</li>
          <li>Data validation</li>
          <li>Error handling</li>
        </ul>
      </Section>
    </div>
  );
}
