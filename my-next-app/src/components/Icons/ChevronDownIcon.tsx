import React from "react";

export default function ChevronDownIcon({
  className = "icn",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="12 20.1 0.1 8.2 2.9 5.3 12 14.4 21.1 5.3 23.9 8.2 12 20.1"></polygon>
    </svg>
  );
}
