import type { App } from "vue";
import digitalNum from "./src/digitalNum";

export default {
  install(app: App) {
    app.component(digitalNum.name, digitalNum);
  },
};
