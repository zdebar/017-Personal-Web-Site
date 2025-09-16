"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

export default function ImageCarousel({
  images,
  alt,
  className = "",
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [naturalSize, setNaturalSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!images[currentImage]) return;
    const img = new window.Image();
    img.src = images[currentImage];
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
      setNaturalSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  }, [images, currentImage]);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio: aspectRatio,
        maxWidth: naturalSize.width ? `${naturalSize.width}px` : undefined,
        maxHeight: naturalSize.height ? `${naturalSize.height}px` : undefined,
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
        style={{
          objectFit: "contain",
        }}
        sizes="100vw"
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
