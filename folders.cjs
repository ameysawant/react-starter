const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

const modules = ["shop", "auth", "hotels", "flights", "experiences", "admin", "account"];

const directories = [
  "src/config",
  "src/lib",
  "src/lib/api-helpers",
  "src/router/routes",
  "src/shared/assets/logos",
  "src/shared/components/feedback",
  "src/shared/components/shadcn-ui",
  "src/shared/components/skeleton",
  "src/shared/constants",
  "src/shared/flexbox-grid",
  "src/shared/layouts",
  "src/shared/stores",
  "src/shared/styles",
  "src/shared/types",
  "src/shared/utils",
  // Module directories
  ...modules.flatMap((module) => [
    `src/modules/${module}/components`,
    `src/modules/${module}/hooks`,
    `src/modules/${module}/pages`,
    `src/modules/${module}/services`,
    `src/modules/${module}/stores`,
    `src/modules/${module}/types`,
    `src/modules/${module}/utils`,
    `src/modules/${module}/schema`,
    `src/modules/${module}/layout`,
    `src/modules/${module}/query-hooks`,
  ]),
];

// Create Directories
const createDirectories = () => {
  directories.forEach((dir) => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Build Router.tsx content dynamically
const routerImports = modules
  .map((m) => `import { ${m}Routes } from "@/router/routes/${capitalize(m)}Routes";`)
  .join("\n");
const routerSpreads = modules.map((m) => `...${m}Routes`).join(",\n  ");

// Build AppRoutes.tsx content based on the first module
const firstModule = modules[0];
const firstModUpper = capitalize(firstModule);
const appRoutesContent = `import { APP_ROUTES } from "@/shared/constants/routes";
import ${firstModUpper}Index from "@/modules/${firstModule}/Index";
import ${firstModUpper}Layout from "@/shared/layouts/${firstModUpper}Layout";

export const AppRoutes = [
  {
    path: APP_ROUTES.base,
    element: <${firstModUpper}Layout />,
    children: [
      {
        index: true,
        element: <${firstModUpper}Index />,
      },
    ],
  },
];
`;

// Build routes.ts content dynamically
const routesContent = `export const APP_ROUTES = {
  base: "/",
  shop: "/shop",
};

${modules
  .map((m) => {
    const mUpper = m.toUpperCase();
    const basePath = m === "shop" ? "/" : `/${m}`;
    return `export const ${mUpper}_ROUTES = {\n  base: "${basePath}",\n  ${m}: "/${m}",\n};`;
  })
  .join("\n\n")}
`;

// Global boilerplate files
const globalFiles = [
  {
    path: "src/config/configuration.ts",
    content: 'export const configuration = {\n  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",\n};\n',
  },
  {
    path: "src/lib/apiClient.ts",
    content:
      'import type { ApiResponse } from "@/shared/types/api.types";\n\nconst apiClient = async <T>(\n  url: string,\n  options?: Omit<RequestInit, "body"> & { body?: unknown },\n): Promise<ApiResponse<T>> => {\n  const config: RequestInit = {\n    method: options?.method || "GET",\n    headers: {\n      "Content-Type": "application/json",\n      ...options?.headers,\n    },\n    credentials: "include",\n    ...options,\n  } as RequestInit;\n\n  if (options?.body) {\n    config.body = JSON.stringify(options.body);\n  }\n\n  const response = await fetch(url, config);\n\n  if (!response.ok) {\n    throw new Error(`API Error: ${response.statusText}`);\n  }\n\n  return response.json() as Promise<ApiResponse<T>>;\n};\n\nexport default apiClient;\n',
  },
  {
    path: "src/shared/types/api.types.ts",
    content: "export interface ApiResponse<T> {\n  data: T;\n  message: string;\n  status: number;\n}\n",
  },
  {
    path: "src/lib/api-helpers/api-helpers.ts",
    content:
      'export const apiHelpers = {\n  handleError: (error: unknown) => {\n    console.error("API Error:", error);\n  },\n};\n',
  },
  {
    path: "src/shared/components/feedback/Loading.tsx",
    content: "const Loading = () => {\n  return (\n    <div>Loading...</div>\n  );\n};\n\nexport default Loading;\n",
  },
  {
    path: "src/shared/components/feedback/Error.tsx",
    content:
      "const Error = () => {\n  return (\n    <div>Something went wrong.</div>\n  );\n};\n\nexport default Error;\n",
  },
  {
    path: "src/shared/components/feedback/PageNotFound.tsx",
    content:
      "const PageNotFound = () => {\n  return (\n    <div>404 - Page Not Found</div>\n  );\n};\n\nexport default PageNotFound;\n",
  },
  {
    path: "src/shared/constants/routes.ts",
    content: routesContent,
  },
  {
    path: "src/shared/constants/endpoints.ts",
    content: 'export const ENDPOINTS = {\n  auth: {\n    login: "/auth/login",\n  },\n};\n',
  },
  {
    path: "src/App.tsx",
    overwrite: true,
    content:
      'import { RouterProvider } from "react-router";\nimport { router } from "@/router/routes/Router";\n\nconst App = () => {\n  return <RouterProvider router={router} />;\n};\n\nexport default App;\n',
  },
  {
    path: "src/router/routes/Router.tsx",
    content: `import { createBrowserRouter } from "react-router";\nimport { AppRoutes } from "@/router/routes/AppRoutes";\n${routerImports}\nimport PageNotFound from "../../shared/components/feedback/PageNotFound";\n\nexport const router = createBrowserRouter([\n  ...AppRoutes,\n  ${routerSpreads},\n  { path: "*", element: <PageNotFound /> }\n]);\n`,
  },
  {
    path: "src/router/routes/AppRoutes.tsx",
    content: appRoutesContent,
  },
  {
    path: "src/shared/styles/global.css",
    overwrite: false,
    content:
      "@import \"tailwindcss\";\n\n:root {\n  --background: #ffffff;\n  --foreground: #0f172a;\n}\n\nbody {\n  background-color: var(--background);\n  color: var(--foreground);\n  font-family: 'Inter', sans-serif;\n}\n",
  },
  {
    path: "src/main.tsx",
    overwrite: true,
    content: `import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport "./shared/styles/global.css";\nimport App from "./App.tsx";\n\nconst queryClient = new QueryClient();\n\ncreateRoot(document.getElementById("root")!).render(\n  <StrictMode>\n    <QueryClientProvider client={queryClient}>\n      <App />\n    </QueryClientProvider>\n  </StrictMode>,\n);\n`,
  },
];

// Execution
const run = async () => {
  console.log("🚀 Initializing project structure...");

  createDirectories();

  // Create Global Files
  let overwriteAll = false;
  const filesToOverwrite = globalFiles.filter((f) => fs.existsSync(path.join(process.cwd(), f.path)) && f.overwrite);

  if (filesToOverwrite.length > 0) {
    const answer = await askQuestion(
      `⚠️  ${filesToOverwrite.length} file(s) already exist and are marked to be overwritten. Proceed with all? (y/N): `,
    );
    if (answer.toLowerCase() !== "y") {
      console.log(`❌  Operation aborted by user.`);
      rl.close();
      return;
    }
    overwriteAll = true;
  }

  for (const file of globalFiles) {
    const fullPath = path.join(process.cwd(), file.path);
    const exists = fs.existsSync(fullPath);

    if (!exists || (file.overwrite && overwriteAll)) {
      fs.writeFileSync(fullPath, file.content);
      console.log(`📝 ${exists ? "Updated" : "Created"} global file: ${file.path}`);
    }
  }

  // Create Boilerplate Files for each module
  modules.forEach((module) => {
    const modUpper = capitalize(module);

    const files = [
      {
        path: `src/modules/${module}/Index.tsx`,
        content: `const Index = () => {\n  return <div>${modUpper} Index</div>;\n};\n\nexport default Index;\n`,
      },
      {
        path: `src/router/routes/${modUpper}Routes.tsx`,
        content: `import ${modUpper}Layout from "../../shared/layouts/${modUpper}Layout";\nimport ${modUpper}Page from "../../modules/${module}/pages/${modUpper}Page";\n\nexport const ${module}Routes = [\n  {\n    path: "/${module}",\n    element: <${modUpper}Layout />,\n    children: [\n      {\n        index: true,\n        element: <${modUpper}Page />,\n      },\n    ],\n  },\n];\n`,
      },
      {
        path: `src/shared/layouts/${modUpper}Layout.tsx`,
        content: `import { Outlet } from "react-router-dom";\nimport ${modUpper}Header from "../../modules/${module}/layout/${modUpper}Header";\nimport ${modUpper}Footer from "../../modules/${module}/layout/${modUpper}Footer";\n\nconst ${modUpper}Layout = () => {\n  return (\n    <div>\n      <${modUpper}Header />\n      <main>\n        <Outlet />\n      </main>\n      <${modUpper}Footer />\n    </div>\n  );\n};\n\nexport default ${modUpper}Layout;\n`,
      },
      {
        path: `src/modules/${module}/layout/${modUpper}Header.tsx`,
        content: `const ${modUpper}Header = () => {\n  return <header>${modUpper} Header</header>;\n};\n\nexport default ${modUpper}Header;\n`,
      },
      {
        path: `src/modules/${module}/layout/${modUpper}Footer.tsx`,
        content: `const ${modUpper}Footer = () => {\n  return <footer>${modUpper} Footer</footer>;\n};\n\nexport default ${modUpper}Footer;\n`,
      },
      {
        path: `src/modules/${module}/components/${modUpper}Component.tsx`,
        content: `const ${modUpper}Component = () => {\n  return <div>${modUpper} Component</div>;\n};\n\nexport default ${modUpper}Component;\n`,
      },
      {
        path: `src/modules/${module}/hooks/use${modUpper}.ts`,
        content: `export const use${modUpper} = () => ({});\n`,
      },
      {
        path: `src/modules/${module}/pages/${modUpper}Page.tsx`,
        content: `const ${modUpper}Page = () => {\n  return <div>${modUpper} Page</div>;\n};\n\nexport default ${modUpper}Page;\n`,
      },
      {
        path: `src/modules/${module}/services/${module}.service.ts`,
        content: `export const ${module}Service = {};\n`,
      },
      {
        path: `src/modules/${module}/stores/${module}.stores.ts`,
        content: `import { create } from "zustand";\n\nexport interface ${modUpper}State {\n  [key: string]: unknown;\n}\n\nexport const use${modUpper}Store = create<${modUpper}State>(() => ({}));\n`,
      },
      {
        path: `src/modules/${module}/types/${module}.types.ts`,
        content: `// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- scaffold placeholder\nexport interface ${modUpper}Data {}\n`,
      },
      {
        path: `src/modules/${module}/utils/${module}.utils.ts`,
        content: `export const ${module}Utils = {};\n`,
      },
      {
        path: `src/modules/${module}/schema/${module}.schema.ts`,
        content: `import { z } from "zod";\n\nexport const ${module}Schema = z.object({});\n`,
      },
      {
        path: `src/modules/${module}/query-hooks/use${modUpper}Queries.ts`,
        content: `export const use${modUpper}Queries = () => ({});\n`,
      },
    ];

    files.forEach((file) => {
      const fullPath = path.join(process.cwd(), file.path);
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, file.content);
        console.log(`📝 Created module file: ${file.path}`);
      }
    });
  });

  console.log("\n✨ Folder structure and all boilerplate files are ready!");
  rl.close();
  process.exit(0);
};

run();
