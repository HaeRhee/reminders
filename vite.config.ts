import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@src", replacement: "/src" },
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@queryKey", replacement: "/src/queryKey" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
