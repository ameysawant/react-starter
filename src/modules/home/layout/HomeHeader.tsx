import { Label } from "@/shared/components/shadcn-ui/label";
import { Switch } from "@/shared/components/shadcn-ui/switch";
import { useThemeStore } from "@/shared/stores/theme.stores";
import { MoonIcon, SunIcon } from "lucide-react";

const HomeHeader = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const themeLabel = theme === "dark" ? "Dark" : "Light";
  const themeIcon = theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />;

  return (
    <header>
      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={toggleTheme} />
        <Label htmlFor="dark-mode">
          {themeIcon} {themeLabel} Mode
        </Label>
      </div>
    </header>
  );
};

export default HomeHeader;
