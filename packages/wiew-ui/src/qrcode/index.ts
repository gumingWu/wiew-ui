import type { App } from "vue";
import qrcode from "./src/qrcode";

export default {
  install(app: App) {
    app.component(qrcode.name, qrcode);
  },
};
