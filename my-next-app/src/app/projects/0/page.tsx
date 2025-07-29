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
          I just need simple language learning app to improve my vocabulary and
          pronunciation. No app that I tested fits my demands. Therefore I&#39;m
          making one myself.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          In my opinion, learning languages is about the sheer amount of
          practice repetition. And I personally prefer to get these repetitions
          in fast paced 10 min drill than in hour long learning game. With fast
          pace it is easily achievable to practice 200 words or 10 sentences in
          10 minutes.
        </p>
        <br />
        <p>
          Basic approach is similar to common language learning approaches, so I
          will only emphasize key differences:
        </p>
        <h4>Flashcards</h4>
        <li>
          Flascard is most time-efficient method, enabling a fast-paced
          practice. Both vocabulary and grammar is taught in one continuous flow
          of flashcards. No time is wasted on methods like crosswords or games.
          They may be more fun, but with flashcards you will get the better
          practice and in shorter span of time.
        </li>
        <h4>Listening and speaking</h4>
        <li>
          Exclusive emphasis on listening and speaking. Writing slows down
          practice, and it is relatively easy compared to speaking.
        </li>
      </Section>

      <Section title="Home Screen">
        <Image
          src="/images/001.png"
          alt="Image 1"
          width={560}
          height={995}
          className="screenshot"
        />
      </Section>
      <Section title="Language Selection">
        <Image
          src="/images/010.png"
          alt="Image 1"
          width={560}
          height={995}
          className="screenshot"
        />
      </Section>
      <Section title="User Dashboard">
        <h4>Procvičovat / Practice</h4>
        <p>
          The only practice button. Will provide a continuous practice flow,
          eliminating the need to switch focus between tasks.
        </p>
        <Image
          src="/images/002.png"
          alt="Image 2"
          width={560}
          height={995}
          className="screenshot"
        />

        <h4>Přehled gramatiky / Grammar Overview</h4>
        <p>
          Contextual help is always available for any practiced sentence. You
          can also review all already unlocked grammar principles.
        </p>
        <Image
          src="/images/005.png"
          alt="Image 5"
          width={560}
          height={995}
          className="screenshot"
        />
        <h4>Blocks Overview Dashboard</h4>
        <p>
          Tracks your progress over the last two CEFR levels and monitors
          repetition blocks for the past five days. Each bar represents 100
          practice blocks, with 10 items per block. The recommended goal is
          1,000 repetitions per day. Split it throughout the day anyway you
          like.
        </p>
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
          translation (odhalit překlad), the full translation is displayed.
        </p>
        <br />
        <p>
          Using the plus or minus buttons, you evaluate your knowledge. Plus
          increases the interval for the next repetition, while minus decreases
          it. The app automatically adjusts the algorithm based on your input.
        </p>

        <div className="flex-container">
          <Image
            src="/images/003.png"
            alt="Image 3"
            width={560}
            height={995}
            className="screenshot"
          />
          <Image
            src="/images/004.png"
            alt="Image 4"
            width={560}
            height={995}
            className="screenshot"
          />
        </div>
      </Section>
      <Section title="User Settings">
        <p>Contains basic user management.</p>
        <Image
          src="/images/006.png"
          alt="Image 5"
          width={560}
          height={995}
          className="screenshot"
        />
      </Section>
      <Section title="Features tested, but discarded">
        <h4>Automatic pronunciation feedback</h4>
        <p>
          I tested several tools (Vosk, Gentle, Google Speech-to-Text API). All
          are too inaccurate to be really useful. It would be great if can I get
          immediate feedback about my pronunciation, but at least listening and
          immediately repeating works also quite well.
        </p>
      </Section>
      <Section title="Technical">
        {/* Scripts */}
        <article>
          <h4>Scripts</h4>
          <p>Python, Google API</p>
          <p>
            Translation, pronunciation, and audio files are all generated using
            Google Translate API and other.
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
            Basic SQL database schema. It is quite simple, with just a few
            tables, but it provides significant flexibility in organizing the
            practice flow. Generally, some items are grouped together in various
            grammar blocks and inserted into the basic practice sequence.
          </p>
          <Image
            src="/images/007.png"
            alt="Zoomed"
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
            The function getItemsRepository is crucial for incorporating
            individual words and sentences together.
          </p>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image
              src="/images/008.png"
              alt="Zoomed"
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
              alt="Zoomed"
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
            feature changes required rewriting them, consuming about 50% of my
            time. Once the app stabilizes, I plan to add comprehensive tests to
            cover all necessary cases.
          </p>
        </article>
      </Section>
      <Section title="What I've learned">
        <section className="group">
          <ol>
            <li>
              The technical solution is the easy part. The real challenge lies
              in properly defining the desired features.
            </li>
            <br />
            <li>
              Start with a &quot;minimum viable product.&quot; Even if you have
              a plan, it will likely change as soon as you begin testing.
            </li>
            <br />
            <li>
              Writing clean code saves a lot of time in the long run. It&#39;s
              worth taking the time to think things through and redo work
              properly instead of rushing. Haste is probably my biggest
              weakness.
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
          The app just needs to be filled with more data. I already did some
          english and spanish words, but in the future I will look for
          cooperation with someone who specialize in specific languages.
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
        <h4>What&#39;s next?</h4>
        <p>
          I am stopping with constant subtle improvement. Features creep is
          real. Next goal is fill english data with about 10k words and 10k
          sentences.
        </p>
      </Section>
    </main>
  );
}
