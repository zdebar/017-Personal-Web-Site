import "../Projects.css";
import Image from "next/image";
import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Introduction">
        <p>
          I have always been dissatisfied with how languages are taught. The
          school approach is overcomplicated and a massive waste of time. This
          is my attempt to try something more straightforward.
        </p>
      </Section>
      <Section title="Main Idea">
        <p>
          In the end it is just about the sheer amount of repetition to
          completely automatize some knowledge. This app is designed to maximize
          amount of progressively harder repetitions per day.
        </p>
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
        <p>
          The app is intentionally designed to be as simple as possible, with a
          primary focus on mobile devices and a responsive layout to ensure a
          seamless user experience across all screen sizes.
        </p>

        <Image
          src="/images/00_01.png"
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

        <h4>Přehled gramatiky / Grammar Overview</h4>
        <p>
          Contextual help is always available for any grammar item. You can also
          review all unlocked grammar concepts here.
        </p>
        <h4>Blocks Overview Dashboard</h4>
        <p>
          Track your practice over the last seven days. Each bar represents 100
          practice blocks, with 10 items per block. The recommended goal is
          1,000 repetitions per day.
        </p>
        <Image
          src="/images/00_02.png"
          alt="Image 2"
          width={560}
          height={995}
          className="screenshot"
        />
      </Section>
      <Section title="Practice Card">
        <p>
          This is the core of the app. Entire app is designed aroung this
          flashcard, every word, every grammar block, every sentence is practice
          the same way. Just one continuous flow without chapters, levels, or
          lesson. You can practice for a minute, or for entire day. This
          seamless approach will maximize amount of repetition in a given time.
        </p>
        <h4>Context guide</h4>
        <p>
          No one actually reads separate help pages, so I generally use
          contextual help whenever possible.
        </p>
        <div className="flex-container">
          <Image
            src="/images/00_03.png"
            alt="Image 3"
            width={560}
            height={995}
            className="screenshot"
          />
          <Image
            src="/images/00_04.png"
            alt="Image 4"
            width={560}
            height={995}
            className="screenshot"
          />
        </div>
        <h4>Practice flow</h4>
        <p>
          You are presented with a hidden word, alternating between Czech and
          English for each word. When you reveal the translation (odhalit
          překlad), the card is displayed.
        </p>
        <p>
          Using the plus or minus buttons, you evaluate your knowledge. Plus
          increases the interval for the next repetition, while minus decreases
          it. The app automatically adjusts the algorithm based on your input.
        </p>

        <div className="flex-container">
          <Image
            src="/images/00_03.png"
            alt="Image 3"
            width={560}
            height={995}
            className="screenshot"
          />
          <Image
            src="/images/00_04.png"
            alt="Image 4"
            width={560}
            height={995}
            className="screenshot"
          />
        </div>
      </Section>
      <Section title="User Settings">
        <p>
          Contains basic user management. So far, only Logout and theme settings
          are available.
        </p>
        <Image
          src="/images/00_05.png"
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
          are too inaccurate to be really useful. Maybe will try again in the
          future.
        </p>
        <h4>Vocabulary overview</h4>
        <p>
          Tested a vocabulary overview page with filters, etc. It was
          unnecessary. It just overwhelmed users with too much information.
        </p>
        <h4>Progress feedback</h4>
        <p>
          Tested multiple progress overviews, from learned words to daily
          practice repetition. None worked as I imagined so far, but I plan to
          keep on testing.
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
            src="/images/DatabaseScheme.jpg"
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
            individual words and grammar blocks.
          </p>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image
              src="/images/getItemsRepository.jpg"
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
              src="/images/PracticeCard.jpg"
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
            I initially created plethora of tests, only to realize that I was
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
          still require a lot of work. So far, there are about 10,000 words but
          very little grammar. In the coming weeks, I will continue with testing
          and adding content.
        </p>
      </Section>
    </main>
  );
}
