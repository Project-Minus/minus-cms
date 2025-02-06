import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: [
      { find: "@app", replacement: "/src/app" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@widgets", replacement: "/src/widgets" },
    ],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
