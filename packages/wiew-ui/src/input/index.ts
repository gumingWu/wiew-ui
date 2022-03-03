import type { App } from "vue";
import Input from "./src/input";

Input.install = function (app: App) {
  app.component(Input.name, Input);
};

export default Input;
