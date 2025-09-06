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
}

export default function ImageCarousel({
  images,
  alt,
  maxWidth = 400,
  maxHeight = 400,
}: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageWidth, setImageWidth] = useState<number>(maxWidth);
  const [imageHeight, setImageHeight] = useState<number>(maxHeight);
  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    setImageWidth(target.naturalWidth);
    setImageHeight(target.naturalHeight);
  };

  return (
    <div
      className="flex-row align-center self-center"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: `${imageWidth}px`, // max natural width
        aspectRatio: `${imageWidth} / ${imageHeight}`, // keep aspect ratio
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
