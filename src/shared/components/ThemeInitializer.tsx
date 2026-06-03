import { useEffect } from "react";

import { useThemeStore } from "@/shared/stores/theme.stores";

const ThemeInitializer = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
};

export default ThemeInitializer;
