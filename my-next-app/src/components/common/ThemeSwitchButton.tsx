import Image from "next/image";

interface ThemeSwitchButtonProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeSwitchButton({
  theme,
  toggleTheme,
}: ThemeSwitchButtonProps) {
  return (
    <button
      onClick={toggleTheme}
      className="icon"
      title="switch theme"
      style={{ color: "var(--color)" }}
    >
      {theme === "dark" ? (
        <Image
          src="/icons/moon.svg"
          alt="dark icon"
          width={24}
          height={24}
          title="dark theme"
        />
      ) : (
        <Image
          src="/icons/sun.svg"
          alt="light icon"
          width={24}
          height={24}
          title="light theme"
        />
      )}
    </button>
  );
}
