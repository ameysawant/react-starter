## Install React using Vite -

npm create vite@latest
npm i

## Install React Router Dom -

npm install react-router-dom
npm install --save-dev @types/react-router-dom

## Install Styled Components -

npm install styled-components
npm install --save-dev @types/styled-components

## Install Redux Toolkit -

npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux

## Install React Hook Form -

npm install react-hook-form
npm install zod
npm install @hookform/resolvers

## Install Swiper -

npm install swiper
npm install --save-dev @types/swiper

## Install React Datepicker -

npm install react-datepicker
npm install --save-dev @types/react-datepicker

## Install Zustand

npm install zustand

## Install Shadcn -

npm install tailwindcss @tailwindcss/vite

create global.css in src/shared/styles/ and add below code.
@import "tailwindcss";

tsconfig.json
"compilerOptions": {
"paths": {
"@/*": ["./src/*"]
}
}

tsconfig.app.json
"paths": {
"@/*": ["./src/*"]
},

vite.config.ts
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

npx shadcn@latest init

Choose options like this from the list provided by shadcn:
Radix
Nova

after this shadcn will install folder like this:
src/components/ui
src/lib/utils.ts

delete src/components/ui

move src/lib/utils.ts to src/shared/utils/utils.ts

then just replace below aliases in components.json file
"aliases": {
"components": "@/shared/components",
"utils": "@/shared/utils",
"ui": "@/shared/components/shadcn-ui",
"lib": "@/shared/utils",
"hooks": "@/hooks"
},

then add any component from shadcn like below:
npx shadcn@latest add badge

now it will correctly install in src/shared/components/shadcn-ui/badge.tsx
