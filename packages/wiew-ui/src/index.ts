import type { App } from "vue";
import Button from "./button";
import DatePicker from "./datePicker";
import DigitalNum from "./digitalNum";
import { Fullscreen } from "./fullscreen";
import Input from "./input";
import PhotoView from "./phtotView";
import QRcode from "./qrcode";
import RightClick from "./rightClick";
import ShrinkBox from "./shrinkBox";
import VirtualScroll from "./virtualScroll";

const installModule = [
  Button,
  DatePicker,
  DigitalNum,
  Input,
  PhotoView,
  QRcode,
  RightClick,
  ShrinkBox,
  VirtualScroll,
];

export {
  Fullscreen
}

export default {
  install(app: App) {
    installModule.forEach((item) => app.use(item));
  },
};
