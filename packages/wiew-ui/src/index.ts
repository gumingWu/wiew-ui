import type { App } from "vue";
import Button from "./button";
import DatePicker from "./datePicker";
import Input from "./input";
import PhotoView from "./phtotView";

const installModule = [Button, DatePicker, Input, PhotoView];

export default {
  install(app: App) {
    installModule.forEach((item) => app.use(item));
  },
};
