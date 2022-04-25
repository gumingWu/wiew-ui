import type { App } from "vue";
import Button from "./button";
import DatePicker from "./datePicker";
import Input from "./input";
import PhotoView from "./phtotView";
import QRcode from "./qrcode";
import RightClick from "./rightClick";

const installModule = [
  Button,
  DatePicker,
  Input,
  PhotoView,
  QRcode,
  RightClick,
];

export default {
  install(app: App) {
    installModule.forEach((item) => app.use(item));
  },
};
