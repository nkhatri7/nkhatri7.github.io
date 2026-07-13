// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  site: 'https://neilkhatri.com',
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@features": path.resolve("./src/features"),
        "@layouts": path.resolve("./src/layouts"),
        "@styles": path.resolve("./src/styles"),
        "@assets": path.resolve("./src/assets"),
      },
    },
  },
});
