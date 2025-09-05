"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CardData } from "../data/cards";
import GitHubIcon from "./Icons/GitHubIcon";

export default function Card({
  title,
  version,
  texts,
  technologies,
  images,
  link,
  github,
  hosting,
}: CardData) {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = images && images.length > 1;

  const handlePrev = () => {
    if (images) {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };
  const handleNext = () => {
    if (images) {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section>
      <article className="w-main py-large flex-row-col gap-large justify-between">
        <div className="w-column">
          <h2>{title}</h2>
          {version && <p>version: {version}</p>}

          <div className="flex-col gap-tiny my-medium">
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          {technologies && (
            <div className="my-medium">
              <p>
                <strong>Technologies:</strong>
              </p>
              <p>{technologies}</p>
            </div>
          )}

          {link && (
            <div className="my-small">
              <Link href={link}>
                <button className="button">..more</button>
              </Link>
            </div>
          )}
          <div className="flex-row align-center gap-small">
            {hosting && (
              <Link href={hosting} target="_blank" rel="noopener noreferrer">
                <button className="button">Test here</button>
              </Link>
            )}
            {github && <GitHubIcon gitHubHref={github} />}
          </div>
        </div>
        {images && (
          <div
            className="flex-row align-center self-center"
            style={{
              position: "relative",
              width: "300px",
              maxWidth: "400px",
              height: "400px",
            }}
          >
            {hasMultipleImages && (
              <button
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                &#60;
              </button>
            )}
            <Image
              src={images[currentImage]}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
            />
            {hasMultipleImages && (
              <button
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                onClick={handleNext}
                aria-label="Next image"
              >
                &#62;
              </button>
            )}
          </div>
        )}
      </article>
    </section>
  );
}
