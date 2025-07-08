import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Introduction">
        <p>
          Like most people, I haven&#39;t learned English at school but rather
          by being exposed to it online. This has led to a situation that is
          quite common: I understand everything, but my pronunciation is subpar
          at best.
        </p>
        <br />
        <p>
          This app is my attempt to improve my pronunciation and help others
          master English in a more natural way.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          Ultimately, learning is about the sheer amount of practice repetition
          to fully automate knowledge. This app is designed to maximize the
          number of words spoken and listened to each day.
        </p>
        <br />
        <p>
          The app is intentionally designed to be as simple as possible, with
          focus on just time efficient approach. Using the flashcard method for
          both words and grammar, you can practice at a fast pace—up to 1,000
          repetitions per hour.
        </p>
        <p></p>
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
        <p>
          Contains basic user management. Currently, only Logout and theme
          settings are available.
        </p>
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
            and inserted into the basic practice flow.
          </p>
          <Image
            src="/images/007.jpg"
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
              src="/images/008.jpg"
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
              src="/images/009.jpg"
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
        <p>
          I am quite satisfied with the technical state of the app, but the data
          still require a lot of work. Currently, there are about 10,000 words
          but very little grammar. In the coming weeks, I will just continue
          adding content.
        </p>
        <br />
        <p>
          In the future, I plan to add more languages, probably Spanish and
          German.
        </p>
        <br />
        <p>
          If application will prove itself useful (to me and my friends), I
          might consider releasing it for public.
        </p>
      </Section>
    </main>
  );
}
