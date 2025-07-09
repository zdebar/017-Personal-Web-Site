import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Introduction">
        <p>
          Like many others, I didn&#39;t learn English at school but rather by
          being exposed to it online. Schools often fail to provide enough
          practice for most students. Despite years spent in school, the amount
          of practice is simply insufficient.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          Ultimately, learning languages is about the sheer amount of practice
          repetition to fully automate knowledge. This app is designed to
          maximize the amount of practice you can manage per hour. It is easily
          achievable to practice 1,000 words or 500 sentences per hour.
        </p>
        <br />
        <p>This is achiever by several key principles:</p>
        <h4>Fast pace of practice</h4>
        <li>
          The greater the amount of daily repetition, the faster the learning
          process.
        </li>
        <h4>Speaking and listening</h4>
        <li>
          Listening and especially speaking are the hardest parts of language
          learning. Focus exclusively on these from the start. Practicing
          writing is slower and limits the number of daily repetitions, thereby
          slowing down the learning process.
        </li>
        <h4>Continuous flow of practice</h4>
        <li>
          Vocabulary and grammar are learned in one continuous flow. Stress is
          reduced by removing options—just follow what the app provides.
        </li>
        <h4>Flexible schedule</h4>
        <li>
          Although there is a recommended amount of daily practice, there is no
          strict limit. You can practice for one minute or 10 hours per day.
        </li>
        <h4>Visual Feedback</h4>
        <li>
          The app visualizes progress across individual CEFR levels (Common
          European Framework of Reference for Languages) from A1 (beginner) to
          C2 (proficient). This motivates users to practice more and achieve
          their goals sooner.
        </li>
        <br />
        <p>Achieved through:</p>
        <h4>Flashcards</h4>
        <li>
          Using only most time efficient methods. For me it is
          &quot;flashcard&quot; method. It is very fast, can alternate
          translation direction (EN to CZ, CZ to EN) , and incorporates both
          vocabulary and grammar into single flow.
        </li>
      </Section>
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
      <Section title="Home Screen">
        <Image
          src="/images/001.png"
          alt="Image 1"
          width={560}
          height={995}
          className="screenshot"
        />
      </Section>
      <Section title="User Dashboard">
        <h4>Procvičovat / Practice</h4>
        <p>
          The app provides a continuous practice flow, eliminating the need to
          switch focus between tasks. Simply click the button to start
          practicing, and the app will handle the rest.
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
          1,000 repetitions per day.
        </p>
      </Section>
      <Section title="Practice Card">
        <p>
          This is the core of the app. Every word and sentence is practiced the
          same way, in one continuous flow without chapters, levels, or lessons.
          You can practice for a minute or an entire day.
        </p>
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
          are too inaccurate to be really useful.
        </p>
        <h4>Vocabulary overview</h4>
        <p>
          Tested a vocabulary overview page with filters, etc. It was
          unnecessary. It just overwhelmed users with too much information.
        </p>
      </Section>
      <Section title="Technical">
        {/* Scripts */}
        <article>
          <h4>Scripts</h4>
          <p>Python, Google API</p>
          <p>
            I downloaded the 10,000 most frequent English words and, using
            various APIs, generated Czech translations, pronunciations, and
            audio files.
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
            The database schema is quite simple, with just a few tables, but it
            provides significant flexibility in organizing the practice flow.
            Generally, some items are grouped together in various grammar blocks
            and inserted into the basic practice sequence.
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
            I initially created plethora of tests, only to realize that as I was
            constantly changing features, I ended up spending about 50% of my
            time rewriting the tests. Once the app stabilizes, I plan to add
            comprehensive tests to cover all necessary cases.
          </p>
        </article>
      </Section>
      <Section title="What I've learned">
        <section className="group">
          <p>
            Technical solution is the easy part. You just need to read the
            manual and apply it. Developing the desired user experience is the
            hard part. You need to try and test a lot. It’s good to start with
            the &quot;minimum viable product&quot; and develop from there.
          </p>
        </section>
      </Section>
      <Section title="What&#39;s next?">
        <ol>
          <li>Fill english data.</li>
          <li>Adding more languages - Spanish and German</li>
          <li>Release for public</li>
        </ol>
      </Section>
    </main>
  );
}
