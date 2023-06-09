import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { apiServerPlugin } from "./scripts/api-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    apiServerPlugin({
      "/api/upload": async function (req) {
        if (!req.file) return { url: "" };
        return {
          url: '/' + req.file.path.replace(/\\/gi, '/')
        }
      },
    }),
  ],
});
