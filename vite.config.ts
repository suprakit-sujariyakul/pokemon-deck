import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atomic": path.resolve(__dirname, "./src/components/atomic"),
      "@utilities": path.resolve(__dirname, "./src/utilities"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  }
});
