"use client";

import "../Projects.css";
import Image from "next/image";
import { useState } from "react";

export default function FlashCardApp() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const images = [
    "/images/00_01.png",
    "/images/00_02.png",
    "/images/00_03.png",
    "/images/00_04.png",
    "/images/00_05.png",
  ];

  const handleImageClick = (src: string, index: number) => {
    setModalImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      const nextIndex = currentIndex + 1;
      setModalImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setModalImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <main className="project-page">
      <h3>Introduction</h3>
      <hr />
      <p>
        This is my English learning app, designed to significantly improve my
        pronunciation and help beginners learn as quickly as possible.
      </p>
      <p>
        It focuses on maximizing the number of daily repetitions, by focusing on
        most time effective approaches. With this app, it is possible to achieve
        500 to 1000 repetitions per hour of practice.
      </p>
      <h3>How it works</h3>
      <hr />
      <h4>Flashcards</h4>
      <p>
        The app uses the most time-efficient method of learning: flashcards.
        Everything in the app—words, grammar, sentences, word connections—is
        taught by this method.
      </p>
      <h4>Seamless progression</h4>
      <p>
        There are no lessons or chapters, just one continuous flow of practice.
        It starts with individual words and gradually introduces grammar
        principles. Grammar is explained in small chunks and practiced through
        numerous examples.
      </p>
      <h4>No writing, focus on listening and speaking</h4>
      <p>
        Writing is too slow and reduces the number of repetitions. Every word
        and sentence has an audio file, and the user listens and immediately
        repeats it in a fast sequence.
      </p>
      <h3>Screenshots</h3>
      <hr />
      <div className="pictures">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={560}
            height={995}
            className="custom-image"
            onClick={() => handleImageClick(src, index)}
            style={{ cursor: "pointer" }}
          />
        ))}
        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <span
              className="arrow left-arrow"
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
            >
              &#9664;
            </span>
            <Image
              src={modalImage}
              width={560}
              height={995}
              className="full-image"
              alt="Zoomed"
            />
            <span
              className="arrow right-arrow"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              &#9654;
            </span>
          </div>
        )}
      </div>
      <h3>Links</h3>
      <hr />
      <p>You can try the app below. A demo account is prepared.</p>

      <div className="links">
        <a
          href="https://github.com/zdebar/020-flash-card-app-typescript"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          View the Flash Card App source code on GitHub
        </a>
        <a
          href="https://020-flash-card-app-typescript.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Try the Flash Card App live on Vercel
        </a>
      </div>
      <h3>Features tested, but discarded</h3>
      <hr />
      <h4>Automatic pronunciation feedback</h4>
      <p>
        Tested several tools (Vosk, Gentle, Google Speech-to-Text API). So far,
        they are not worth it.
      </p>
      <h4>Vocabulary overview</h4>
      <p>
        Tested a vocabulary overview page with filters, etc. It is unnecessary
        and distracting.
      </p>
      <h4>Progress feedback</h4>
      <p>
        Tested multiple progress overviews, from learned words to daily practice
        repetition. None worked as I imagined so far.
      </p>
      <h3>Technical</h3>
      <hr />
      <h4>Authentication</h4>
      <p>Firebase (Google Auth, Demo Account)</p>
      <h4>Frontend</h4>
      <p>React, React Router, TypeScript, Vercel for hosting</p>
      <p>
        PracticeCard.tsx is the core component responsible for the entire
        practice logic. It employs useStates, useEffects, useCallbacks, useRefs,
        and custom hooks to manage the practice flow.
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
      <h4>Backend</h4>
      <p>Node.js, Express.js, Winston Logger, Railway for hosting</p>
      <p>
        The function getItemsRepository is crucial for incorporating individual
        words and grammar blocks.
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
      <h4>Database</h4>
      <p>PostgreSQL, Supabase for hosting</p>
      <p>The database schema is quite simple, with just a few tables.</p>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Image
          src="/images/DatabaseScheme.jpg"
          alt="Zoomed"
          width={560}
          height={995}
          layout="responsive"
          className="image-container"
        />
      </div>
      <h4>Scripts</h4>
      <p>Python, Google API</p>
      <p>
        I downloaded the 10k most frequent English words, and with Google API
        and others, generated Czech translations, pronunciations, and audio
        files.
      </p>
      <h4>Testing</h4>
      <p>Vitest, Jest, React Testing</p>
      <p>
        I initially created tests during the design phase, only to realize that
        it was inefficient. As I was constantly changing features, I ended up
        spending about 50% of my time rewriting the tests. Once the app
        stabilizes, I plan to add comprehensive tests to cover all necessary
        cases.
      </p>
      <h3>What&#39;s next?</h3>
      <hr />
      <p>
        I am quite satisfied with the technical state of the app, but the data
        still require a lot of work. So far, there are about 10k words, but very
        little grammar. In the coming weeks, I will continue testing the app and
        adding content.
      </p>
      <p>
        I will keep adding testing results here on this page, including the
        effects on my pronunciation and the learning progress of testing
        subjects (all the kids from my extended family).
      </p>
    </main>
  );
}
