"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageCarousel({
  images,
  alt,
  className = "",
}: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);

  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    setAspectRatio(target.naturalWidth / target.naturalHeight);
  };

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      {hasMultipleImages && (
        <button
          className="btn-car absolute left-0 top-1/2 -translate-y-1/2"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="icn fill-err" />
        </button>
      )}
      <Image
        src={images[currentImage]}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        sizes="100vw"
        onLoad={handleImageLoad}
      />
      {hasMultipleImages && (
        <button
          className="btn-car absolute right-0 top-1/2 -translate-y-1/2"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRightIcon className="icn fill-err" />
        </button>
      )}
    </div>
  );
}
