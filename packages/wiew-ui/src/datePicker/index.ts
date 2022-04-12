import type { App } from "vue";
import datePicker from "./src/datePicker";

export default {
  install: function (app: App) {
    app.component(datePicker.name, datePicker);
  },
};
