import { Label } from "@/shared/components/shadcn-ui/label";
import { Switch } from "@/shared/components/shadcn-ui/switch";
import { useThemeStore } from "@/shared/stores/theme.stores";

const HomeHeader = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <header>
      <div className="flex items-center space-x-2">
        <Switch
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
    </header>
  );
};

export default HomeHeader;
