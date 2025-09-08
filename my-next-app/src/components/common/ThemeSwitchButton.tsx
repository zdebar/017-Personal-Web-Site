import Image from "next/image";

interface ThemeSwitchButtonProps {
  theme: "light" | "dark" | "system";
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
      {theme === "system" ? (
        <Image
          src="/icons/system.svg"
          alt="system icon"
          width={24}
          height={24}
          title="system theme"
        />
      ) : theme === "dark" ? (
        <Image
          src="/icons/dark.svg"
          alt="dark icon"
          width={24}
          height={24}
          title="dark theme"
        />
      ) : (
        <Image
          src="/icons/light.svg"
          alt="light icon"
          width={24}
          height={24}
          title="light theme"
        />
      )}
    </button>
  );
}
