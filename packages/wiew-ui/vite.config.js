import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import rollupPluginVisualizer from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [vue(), vueJsx(), rollupPluginVisualizer()],
});
