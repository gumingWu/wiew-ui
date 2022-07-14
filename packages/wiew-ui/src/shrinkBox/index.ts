import type { App } from "vue";
import ShrinkBox from "./src/shrinkBox";

ShrinkBox.install = function(app: App) {
  app.component(ShrinkBox.name, ShrinkBox)
}

export default ShrinkBox