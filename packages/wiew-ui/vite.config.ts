import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import vueDtsPlugin from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vuePlugin(),
    vueJsxPlugin(),
    vueDtsPlugin({ include: "../components" }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: "index.ts",
      name: "wiew-ui",
      fileName: "wiew-ui",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
