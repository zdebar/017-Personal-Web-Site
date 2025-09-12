import Link from "next/link";

export default function GitHubIcon({
  title = "Link",
  className = "icon",
  href,
  children,
}: {
  title: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </Link>
  );
}
