import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({ 
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
