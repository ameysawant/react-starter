# React Starter — Installation Guide

Step-by-step commands and setup notes for bootstrapping this project.

---

## Install React using Vite

```bash
npm create vite@latest
npm i
```

---

## Install React Router Dom

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

---

## Install Styled Components

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

---

## Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux
```

---

## Install React Hook Form

```bash
npm install react-hook-form
npm install zod
npm install @hookform/resolvers
```

---

## Install Swiper

```bash
npm install swiper
npm install --save-dev @types/swiper
```

---

## Install React Datepicker

```bash
npm install react-datepicker
npm install --save-dev @types/react-datepicker
```

---

## Install Zustand

```bash
npm install zustand
```

---

## Install Tanstack Query

```bash
npm install @tanstack/react-query
```

---

## Install Shadcn

1. ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

2. Create `global.css` in `src/shared/styles/` and add below code.

   ```css
   @import "tailwindcss";
   ```

3. `tsconfig.json`

   ```json
   "compilerOptions": {
     "paths": {
       "@/*": ["./src/*"]
     }
   }
   ```

4. `tsconfig.app.json`

   ```json
   "paths": {
     "@/*": ["./src/*"]
   },
   ```

5. `vite.config.ts`

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   import path from "path";
   import { fileURLToPath } from "url";

   const _dirname = path.dirname(fileURLToPath(import.meta.url));

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     resolve: {
       alias: {
         "@": path.resolve(_dirname, "./src"),
       },
     },
   });
   ```

6. ```bash
   npx shadcn@latest init
   ```

   Choose options like this from the list provided by shadcn:

   - Radix
   - Nova

7. After this shadcn will install folder like this:

   ```
   src/components/ui
   src/lib/utils.ts
   ```

8. Delete `src/components/ui`

9. Move `src/lib/utils.ts` to `src/shared/utils/utils.ts`

10. Then just replace below aliases in `components.json` file

    ```json
    "aliases": {
      "components": "@/shared/components",
      "utils": "@/shared/utils",
      "ui": "@/shared/components/shadcn-ui",
      "lib": "@/shared/utils",
      "hooks": "@/hooks"
    },
    ```

11. Then add any component from shadcn like below:

    ```bash
    npx shadcn@latest add button
    ```

12. Now it will correctly install in `src/shared/components/shadcn-ui/button.tsx`

13. In `button.tsx` change the import path to:

    ```ts
    import { cn } from "@/shared/utils/utils";
    ```

---

## Install Vite Image Optimizer Packages

```bash
npm install -D vite-plugin-image-optimizer
npm install -D sharp
npm install -D svgo
```

And then copy paste below code in `vite.config.ts` file.

**Code:**

```ts
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
```
