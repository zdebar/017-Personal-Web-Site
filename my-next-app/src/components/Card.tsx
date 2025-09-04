"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CardData } from "../data/cards";
import "./Card.css";
import GitHubIcon from "./Icons/GitHubIcon";

export default function Card({
  title,
  version,
  description,
  images,
  link,
  github,
  hosting,
  color = "white",
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
    <section style={{ backgroundColor: color }} className="card">
      <div className="flex-row justify-center">
        <div>
          <h2>{title}</h2>
          {version && <p>version: {version}</p>}
          <p>{description}</p>

          {link && <Link className="card" href={link} />}
          <div className="flex-row align-center">
            {github && <GitHubIcon gitHubHref={github} color="black" />}
            {hosting && <button className="button">Test here</button>}
          </div>
        </div>
        {images && (
          <div
            className="flex-row align-center"
            style={{
              position: "relative",
              width: "300px",
              aspectRatio: "16/9",
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
      </div>
    </section>
  );
}
