/// <reference types="vite/client" />

// Reference: https://vitejs-kr.github.io/guide/env-and-mode.html

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string; // Can use this in source code like "import.meta.env.VITE_SERVER_URL"
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
