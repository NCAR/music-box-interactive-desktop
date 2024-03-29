import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: true,
  },
  define: {
    "process.env.VITE_APP_VERSION": JSON.stringify(
      require("./package.json").version,
    ),
  },
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/renderer/index.html', // Entry for the main page
      }
    },
    outDir: "dist"
  }

});
