import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-presentation",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/presentacion-main.tsx"),
      output: {
        entryFileNames: "presentacion.js",
        chunkFileNames: "assets/presentation-[name]-[hash].js",
        assetFileNames: (info) => {
          if (info.name && info.name.endsWith(".css")) {
            return "presentacion.css";
          }
          return "assets/presentation-[name]-[hash][extname]";
        },
      },
    },
  },
});
