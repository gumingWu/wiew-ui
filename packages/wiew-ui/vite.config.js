import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import rollupPluginVisualizer from "rollup-plugin-visualizer";

const path = require("path");

export default defineConfig({
  plugins: [vue(), vueJsx(), rollupPluginVisualizer()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "WiewUI",
      filename: (format) => `WiewUI-${format}.js`,
    },
  },
});
