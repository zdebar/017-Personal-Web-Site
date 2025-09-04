import Icon from "./Icon";
import Link from "next/link";

export default function HomeIcon({
  size = 24,
  color = "black", // transparent
  strokeWidth = 1.5,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Link href="/">
      <Icon size={size} color="white">
        <svg
          width={size}
          height={size}
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
      </Icon>
    </Link>
  );
}
