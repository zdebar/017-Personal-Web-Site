import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Links">
        <div className="links">
          <a
            href="https://github.com/zdebar/020-flash-card-app-typescript"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Flash Card App source code on GitHub
          </a>
          <a
            href="https://020-flash-card-app-typescript.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the Flash Card App live on Vercel
          </a>
        </div>
      </Section>

      <Section title="Introduction">
        <p>
          I needed a simple language learning app to improve my vocabulary and
          pronunciation. None of the apps I tested fit my needs, so I decided to
          make one myself.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          In my opinion, language learning is about the sheer amount of practice
          and repetition. Personally, I prefer to get these repetitions in a
          fast-paced 20-minute drill rather than an hour-long learning game. It
          is entirely possible to practice 400 words or 200 sentences in 20
          minutes.
        </p>
        <br />
        <p>Basic principles:</p>
        <h4>Flashcards</h4>
        <li>
          Flashcards are the most time-efficient method, enabling fast-paced
          practice. Both vocabulary and grammar are taught in one continuous
          flow of flashcards. No time is wasted on methods like crosswords or
          games. These may be more fun, but with flashcards, you get more
          practice in the same amount of time.
        </li>
        <h4>Listening and speaking</h4>
        <li>
          There is an exclusive emphasis on listening and speaking. Writing
          slows down practice and is relatively easy compared to speaking.
        </li>
      </Section>
      <Section title="User Dashboard">
        <h4>Procvičovat / Practice</h4>
        <p>
          The only practice button. Will provide a continuous practice flow,
          eliminating the need to switch focus between tasks.
        </p>
        <h4>Přehled pokroku / Progress Overview</h4>
        <p>
          The User Dashboard also shows progress in two areas. The first is
          progress in the last four levels based on learned words or sentences.
          Currently, these are CEFR levels, but I plan to change this to about
          100 generic progress levels. The second is progress in daily
          repetition blocks. At the moment, it shows about 40 daily blocks per
          10 items, which equals 400 repetitions per day and about 20 minutes of
          practice. Essentially, the first is linked to overall progress, and
          the second to daily practice. In the grand scheme, it’s just about
          providing motivating feedback to the user.
        </p>

        <Image
          src="/images/001.png"
          alt="User Dashboard"
          width={560}
          height={995}
          className="screenshot"
          style={{ borderRadius: "0px" }}
        />
        <h4>Přehled / Overview</h4>
        <p>
          The overview allows you to look up any already unlocked word or
          grammar block and reset its progress if needed.
        </p>
        <div className="flex-container">
          <Image
            src="/images/004.png"
            alt="Word Overview"
            width={560}
            height={995}
            className="screenshot"
            style={{ borderRadius: "0px" }}
          />
          <Image
            src="/images/005.png"
            alt="Grammar Overview"
            width={560}
            height={995}
            className="screenshot"
            style={{ borderRadius: "0px" }}
          />
        </div>
      </Section>
      <Section title="Practice Card">
        <h4>Context guide</h4>
        <p>
          Separate help pages are rarely read, so I generally use contextual
          help whenever possible.
        </p>

        <h4>Practice flow</h4>
        <p>
          You are presented with a word or sentence, alternating between written
          Czech and listening to English for each word. When you reveal the
          translation, the full translation is displayed.
        </p>
        <br />
        <p>
          Using the plus or minus buttons, you evaluate your knowledge. Plus
          increases the interval for the next repetition, while minus decreases
          it. The app automatically adjusts the algorithm based on your input.
        </p>

        <div className="flex-container">
          <Image
            src="/images/002.png"
            alt="Practice Card 1"
            width={560}
            height={995}
            className="screenshot"
            style={{ borderRadius: "0px" }}
          />
          <Image
            src="/images/003.png"
            alt="Practice Card 2"
            width={560}
            height={995}
            className="screenshot"
            style={{ borderRadius: "0px" }}
          />
        </div>
      </Section>
      <Section title="Features tested, but discarded">
        <h4>Automatic pronunciation feedback</h4>
        <p>
          I tested several tools (Vosk, Gentle, Google Speech-to-Text API). All
          are too inaccurate to be truly useful. It would be great to get
          immediate feedback on my pronunciation, but for now, listening and
          immediately repeating works quite well.
        </p>
      </Section>
      <Section title="Technical">
        {/* Scripts */}
        <article>
          <h4>Scripts</h4>
          <p>Python, Google API</p>
          <p>
            Translation, pronunciation, and audio files are all generated using
            the Google Translate API and other tools.
          </p>
        </article>
        {/* Authentication */}
        <article>
          <h4>Authentication</h4>
          <p>Firebase (Google Auth, Demo Account)</p>
        </article>
        {/* Database */}
        <article>
          <h4>Database</h4>
          <p>PostgreSQL, Supabase for hosting</p>
          <p>
            The SQL database schema is quite simple, with just a few tables, but
            it provides significant flexibility in organizing the practice flow.
            Generally, some items are grouped together in various grammar blocks
            and inserted into the basic practice sequence.
          </p>
          <Image
            src="/images/007.png"
            alt="Database Scheme"
            width={560}
            height={995}
            layout="responsive"
            className="image-container"
          />
        </article>
        {/* Backend */}
        <article>
          <h4>Backend</h4>
          <p>Node.js, Express.js, Winston Logger, Railway for hosting</p>
          <p>
            The function getItemsRepository is crucial for combining individual
            words and sentences.
          </p>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image
              src="/images/008.png"
              alt="Backend Logic"
              width={560}
              height={995}
              layout="responsive"
              className="image-container"
            />
          </div>
        </article>
        {/* Frontend */}
        <article>
          <h4>Frontend</h4>
          <p>React, React Router, TypeScript, Vercel for hosting</p>
          <p>
            PracticeCard.tsx is the core component responsible for the entire
            frontend practice logic. It employs useStates, useEffects,
            useCallbacks, useRefs, and custom hooks to manage the practice flow.
          </p>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image
              src="/images/009.png"
              alt="Practice Card Logic"
              width={560}
              height={995}
              layout="responsive"
              className="image-container"
            />
          </div>
        </article>

        {/* Testing */}
        <article>
          <h4>Testing</h4>
          <p>Vitest, Jest, React Testing</p>
          <p>
            I initially created numerous tests but realized that constant
            feature changes required rewriting them, which consumed about 50% of
            my time. Once the app stabilizes, I plan to add comprehensive tests
            to cover all necessary cases.
          </p>
        </article>
      </Section>
      <Section title="What I've learned">
        <section className="group">
          <ol>
            <li>
              The technical solution is the easy part; the real challenge lies
              in properly defining the desired features. Start with a
              &quot;minimum viable product.&quot; Even if you have a plan, it
              will likely change as soon as you begin testing.
            </li>
            <br />
            <li>
              Writing clean code saves a lot of time in the long run. It&apos;s
              worth taking the time to think things through and redo work
              properly instead of rushing.
            </li>
          </ol>
        </section>
      </Section>
      <Section title="version v0.1.0">
        <ul>
          <h4>Changes</h4>
          <li>Added multiple languages support</li>
          <li>Added skip button</li>
        </ul>
        <h4>Testing</h4>
        <p>
          I have added support for multiple languages for testing purposes.
          Since I already know English too well, I cannot properly test myself
          on it. Therefore, I added Spanish to test the app on myself. It works
          well if the user is disciplined in evaluating his knowledge.
        </p>
      </Section>
      <Section title="version v0.2.0">
        <h4>Changes</h4>
        <ul>
          <li>UI changes - more information on Practice Card</li>
          <li>Winston logger changes</li>
        </ul>
        <h4>Missing data</h4>
        <p>
          he app just needs to be filled with more data. I have already added
          some English and Spanish words, but in the future, I will look for
          cooperation with someone who specializes in specific languages.
        </p>
      </Section>
      <Section title="version v0.3.0">
        <h4>Changes</h4>
        <ul>
          <li>
            Added options to reset progress of - language, grammar block,
            individual vocabulary
          </li>
        </ul>
      </Section>
      <Section title="version v0.4.0">
        <h4>Changes</h4>
        <ul>
          <li>Added userDashboard help</li>
          <li>Complete refactor of backend and frontend</li>
        </ul>
      </Section>
      <Section title="version v0.5.0">
        <h4>Changes</h4>
        <ul>
          <li>Added User Avator Picture from Google Accounts</li>
          <li>Added word count information to WordList</li>
          <li>UI - multiple small changes</li>
        </ul>
      </Section>
      <Section title="version v0.6.0">
        <h4>Changes</h4>
        <ul>
          <li>Added WordCard - new component for individual WordList items</li>
          <li>
            Added HelpOverlay - moved help icon just outside of card outline
          </li>
          <li>
            Disabled language options - for now focus only on English language
          </li>
          <li>UserRestart - moved to UserOverview from UserSettings</li>
          <li>Changes to - UserAvatar, Light mode colors, UserDashboard </li>
        </ul>
      </Section>
      <Section
        barColor="inactive-bar-color"
        containerColor="inactive-text-container"
        title="version v0.7.0"
      >
        <p>Big changes. Still not quite finished</p>
        <h4>To Do</h4>
        <ul>
          <li>
            Completely replace data. Previous solution was more about finding
            10k most common words. Use common lecture approach instead.{" "}
          </li>
          <li>Find better IPA pronunciatio function</li>
          <li>
            Find better audio creation service - so far using Google
            text-to-speech and sometimes it is hard to understand, it is weird
            because when checking Google Translate for individual words, it is
            much better. Would have assumed it is the same.
          </li>
          <li>Distinguish versions with added date.</li>
        </ul>
        <h4>Changes</h4>
        <ul>
          <li>
            Improved database structure
            <Image
              src="/images/010.png"
              alt="v0.7.0 Database Scheme"
              width={560}
              height={995}
              layout="responsive"
              className="image-container"
            />
          </li>
          <li>Organized vocabulary into blocks</li>
          <li>Organized blocks into levels</li>
          <li>
            Changed levels from CEFR to smaller numbered levels
            <Image
              src="/images/011.png"
              alt="v0.7.0 User Dashboard"
              width={560}
              height={995}
              className="screenshot"
              style={{ borderRadius: "0px" }}
            />
          </li>
          <li>
            Added new table user_blocks, all grammar blocks will be at first
            presented at once
          </li>
          <li>
            Separated block explanation to new table notes. Enables to utilizes
            explanation notes accross multiple blocks and therefore separate
            grammar practice into multiple smaller practice blocks.
          </li>
          <li>
            Changed daily blocks organization from array to object. To have more
            consistent style.
          </li>
        </ul>
      </Section>
    </main>
  );
}
