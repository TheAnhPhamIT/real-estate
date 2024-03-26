import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@i18n": path.resolve(__dirname, "./src/i18n/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@contexts": path.resolve(__dirname, "./src/contexts/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
});
