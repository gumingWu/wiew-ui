import type { App } from "vue";
import Button from "./button";
import DatePicker from "./datePicker";
import Input from "./input";
import PhotoView from "./phtotView";
import QRcode from "./qrcode";
import RightClick from "./rightClick";
import VirtualScroll from "./virtualScroll";

const installModule = [
  Button,
  DatePicker,
  Input,
  PhotoView,
  QRcode,
  RightClick,
  VirtualScroll,
];

export default {
  install(app: App) {
    installModule.forEach((item) => app.use(item));
  },
};
