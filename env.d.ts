/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_THEME: string,
  readonly VITE_TITLE: string,
  readonly VITE_COLOR: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
