import { defineConfig, presetAttributify, presetWind3, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    presetWind3(),
  ],
  transformers: [transformerDirectives()]
});
