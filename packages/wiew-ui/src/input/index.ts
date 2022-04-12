import type { App } from "vue";
import Input from "./src/input";

export default {
  install: function (app: App) {
    app.component(Input.name, Input);
  },
};
