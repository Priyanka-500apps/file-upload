import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `tailwind-ui-500.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        preserveModules: true,
        exports: "named",
      },
    },
  },
});
