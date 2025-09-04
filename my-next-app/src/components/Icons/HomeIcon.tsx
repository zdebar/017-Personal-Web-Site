import Link from "next/link";
import "./Icon.css";

export default function HomeIcon({
  color = "black", // transparent
  strokeWidth = 1.5,
}: {
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Link href="/" className="icon" title="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke={color}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M3 9.5L12 4L21 9.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
