import { useEffect } from "react";

import { useThemeStore } from "@/shared/stores/theme.stores";

const ThemeInitializer = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return null;
};

export default ThemeInitializer;
