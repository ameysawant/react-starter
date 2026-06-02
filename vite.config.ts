import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const _dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // Log optimization stats in the terminal
      logStats: true,

      // PNG settings
      png: {
        quality: 80,
        compressionLevel: 9,
      },

      // JPEG settings
      jpeg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
      },

      // WebP settings (lossy for smaller files)
      webp: {
        quality: 80,
        lossless: false,
      },

      // AVIF settings (newest format, best compression)
      avif: {
        quality: 70,
        lossless: false,
      },

      // SVG settings
      svg: {
        multipass: true,
        plugins: ["preset-default", "sortAttrs"],
      },
    }),
  ],
  build: {
    assetsInlineLimit: 0, // Disables base64 inlining - all images get optimized
  },
  resolve: {
    alias: {
      "@": path.resolve(_dirname, "./src"),
    },
  },
});
