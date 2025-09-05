"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
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
          <ChevronLeftIcon />
        </button>
      )}
      <Image
        src={images[currentImage]}
        alt={alt}
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
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
}
