import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFile } from "fs/promises";
import { existsSync } from "fs";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const ghPagesFallback = () => ({
  name: "github-pages-fallback",
  async closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    const indexPath = path.join(distDir, "index.html");
    const notFoundPath = path.join(distDir, "404.html");
    
    if (existsSync(indexPath)) {
      await copyFile(indexPath, notFoundPath);
      console.log("Created 404.html for GitHub Pages");
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Base path for deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ghPagesFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
}));
