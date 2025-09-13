import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";
import CogIcon from "../Icons/CogIcon";

interface ThemeSwitchButtonProps {
  theme: "light" | "dark" | "system";
  toggleTheme: () => void;
}

export default function ThemeSwitchButton({
  theme,
  toggleTheme,
}: ThemeSwitchButtonProps) {
  const getIcon = () => {
    if (theme === "dark") return <MoonIcon />;
    if (theme === "light") return <SunIcon />;
    return <CogIcon />;
  };

  const getTitle = () => {
    if (theme === "dark") return "Switch to system theme";
    if (theme === "system") return "Switch to light theme";
    return "Switch to dark theme";
  };

  return (
    <button onClick={toggleTheme} className="themeIcn icn" title={getTitle()}>
      {getIcon()}
    </button>
  );
}
