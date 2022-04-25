import virtualScroll from "./src/virtualScroll";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component(virtualScroll.name, virtualScroll);
  },
};
