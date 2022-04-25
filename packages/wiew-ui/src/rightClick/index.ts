import rightClick from "./src/rightClick";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component(rightClick.name, rightClick);
  },
};
