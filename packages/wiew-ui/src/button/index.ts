import type { App } from "vue";
import Button from "./src/button";

export default {
  install: function (app: App) {
    app.component(Button.name, Button);
  },
};
