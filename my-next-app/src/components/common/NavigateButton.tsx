import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigateButton({
  title = "Navigate",
  className = "icn",
  href,
  children,
}: {
  title: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };
  return (
    <Link href={href} className={className} title={title} onClick={handleClick}>
      {children}
    </Link>
  );
}
