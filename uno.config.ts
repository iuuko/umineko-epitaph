import { defineConfig } from "unocss";
import { presetAttributify } from 'unocss'
import { presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    presetWind3(),
  ],
});
