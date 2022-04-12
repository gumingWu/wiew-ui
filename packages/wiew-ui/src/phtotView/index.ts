import type { App } from "vue";
import phtotView from "./src/phtotView";

export default {
  install: function (app: App) {
    app.component(phtotView.name, phtotView);
  },
};
