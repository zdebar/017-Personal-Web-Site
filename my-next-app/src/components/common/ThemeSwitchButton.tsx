import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import CogIcon from "../icons/CogIcon";

interface ThemeSwitchButtonProps {
  theme: "light" | "dark" | "system";
  toggleTheme: () => void;
}

export default function ThemeSwitchButton({
  theme,
  toggleTheme,
}: ThemeSwitchButtonProps) {
  const iconClass = "icn-theme icn";

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <MoonIcon className={iconClass} />;
      case "light":
        return <SunIcon className={iconClass} />;
      default:
        return <CogIcon className={iconClass} />;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case "dark":
        return "Switch to system theme";
      case "system":
        return "Switch to light theme";
      case "light":
      default:
        return "Switch to dark theme";
    }
  };

  return (
    <button onClick={toggleTheme} className="icn-theme icn" title={getTitle()}>
      {getIcon()}
    </button>
  );
}
