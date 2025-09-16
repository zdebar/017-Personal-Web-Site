"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

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
  const [aspectRatio, setAspectRatio] = useState<number>(maxWidth / maxHeight);
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
      className={`flex justify-center items-center relative w-full h-auto ${className}`}
      style={{
        maxWidth: `${imageWidth}px`,
        aspectRatio: `${aspectRatio}`,
      }}
    >
      {hasMultipleImages && (
        <button
          className="btn-car "
          style={{
            left: 0,
            transform: "translate(50%, -50%)",
          }}
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="icn fill-err" />
          <p>A</p>
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
          className="btn-car"
          style={{
            right: 0,
            transform: "translate(-50%, -50%)",
          }}
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRightIcon className="icn fill-err" />
        </button>
      )}
    </div>
  );
}
