import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="version v0.1.0">
        <ul>
          <h4>Changes</h4>
          <li>Added multiple languages support (added Spanish vocabulary)</li>
          <li>Added skip button</li>
        </ul>
        <h4>Testing</h4>
        <p>
          Testing new version was quite a wake-up call. All flashcard approach
          works very well for correcting my english pronunctiation, but when I
          tried it for initial learning of Spanish, memory retention of new
          words was terrible.
        </p>
        <h4>Future changes</h4>
        <ul>
          <li>
            Keep flashcard for longtem memory inprint, but it won&#39;t be used
            for initial learning. Shuffle character of flashcards is great for
            inprinting words in different context, but bad for initial learning.
          </li>
          <li>
            Create smaller blocks of vocabulary and grammar, that will be first
            drilled in isolation, before being further practiced with
            flashcards.
          </li>
        </ul>
        <h4>Next steps</h4>
        <ol>
          <li>
            Finish my own english pronunciation correction - create and practice
            at least 20k english words.
          </li>
          <li>
            Create &quot;drill lesson&quot; for grammar and vocabulary. Because
            I am the first tester, and I need to test it on language I don&#39;t
            know, it probably would be or Spanish or German.
          </li>
        </ol>
        <br />
        <p>
          Also I want to finish some Leetcode practice. I have done
          datastructure and algorithms course, it is easy, but I need practice.
          So, 20k english words and Leetcode would take me about 2 months, after
          that I will create new version and continue with development.
        </p>
      </Section>
      <Section title="Introduction">
        <p>
          I was dissatisfied with existing language learning apps and wanted to
          create a simple app that focuses only on the features I find useful.
          Just focus on most important features and ideally lower time to
          passive knowledge to minimum.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          Ultimately, learning languages is about the sheer amount of practice
          repetition to fully internalize knowledge. With fast pace it is easily
          achievable to practice 1,000 words or 500 sentences per hour.
        </p>
        <br />
        <p>
          Basis structure is similar to common language learning approaches, so
          I will only emphasize key differences:
        </p>
        <h4>Flashcards</h4>
        <li>
          The most time-efficient method, enabling a fast-paced practice. Both
          vocabulary and grammar is taught in one continuous flow of flashcards.
        </li>
        <h4>No fix schedule</h4>
        <li>
          Although there is a recommended amount of daily practice, there is no
          strict limit. You can practice for one minute or 10 hours per day.
          This makes it easy to start practicing at any time of the day. Overall
          daily practice time will quickly start to pile up.
        </li>
        <h4>Listening and speaking</h4>
        <li>
          Exclusive emphasis on listening and speaking. Writing slows down
          practice, and most people do not struggle with it.
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
          1,000 repetitions per day.
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
          <p>
            Technical solution is the easy part. You just need to read the
            manual and apply it. Developing the desired user experience is the
            hard part.
          </p>
          <br />
          <h4>Next time I will continue this way:</h4>
          <ol>
            <li>Start with planning as much as possible on paper.</li>
            <li>
              Even though planned still work in iteration from &quot;minimum
              viable product&quot; and get to user testing as fast as possible.
              Having original plan is great to limit scope, but it will for sure
              change.
            </li>
          </ol>
        </section>
      </Section>
      <Section title="What&#39;s next?">
        <ol>
          <li>Fill english, spanish, and later german data.</li>
          <li>Test on myself, friends and relatives.</li>
          <li>
            If it will prove useful, I will consider finishing it and releasing
            to public.
          </li>
        </ol>
      </Section>
    </main>
  );
}
