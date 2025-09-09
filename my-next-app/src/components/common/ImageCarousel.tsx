"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  alt,
  maxWidth = 400,
  maxHeight = 400,
  className = "",
}: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageWidth, setImageWidth] = useState<number>(maxWidth);
  const [aspectRatio, setAspectRatio] = useState<number>(maxWidth / maxHeight); // width / height
  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const naturalWidth = target.naturalWidth;
    const naturalHeight = target.naturalHeight;
    const ratio = naturalWidth / naturalHeight;

    let displayWidth = naturalWidth;
    let displayHeight = naturalHeight;

    // Pokud je obrázek větší než max, zmenši ho při zachování poměru stran
    if (naturalWidth > maxWidth || naturalHeight > maxHeight) {
      if (ratio > 1) {
        // Širší než vyšší
        displayWidth = Math.min(naturalWidth, maxWidth);
        displayHeight = displayWidth / ratio;
        if (displayHeight > maxHeight) {
          displayHeight = maxHeight;
          displayWidth = displayHeight * ratio;
        }
      } else {
        // Vyšší než širší
        displayHeight = Math.min(naturalHeight, maxHeight);
        displayWidth = displayHeight * ratio;
        if (displayWidth > maxWidth) {
          displayWidth = maxWidth;
          displayHeight = displayWidth / ratio;
        }
      }
    }

    setAspectRatio(ratio);
    setImageWidth(displayWidth);
  };

  return (
    <div
      className={`flex-row align-center self-center ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: `${imageWidth}px`, // max natural width
        aspectRatio: `${aspectRatio}`, // keep aspect ratio
        height: "auto",
      }}
    >
      {hasMultipleImages && (
        <button
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translate(50%, -50%)",
            zIndex: 2,
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "inherit",
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
        sizes={`(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`}
        onLoad={handleImageLoad}
      />
      {hasMultipleImages && (
        <button
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "inherit",
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
