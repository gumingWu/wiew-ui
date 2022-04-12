import { PropType } from "vue";
import type { QRCodeRenderersOptions } from "qrcode";

export default {
  value: {
    type: String,
    default: "",
  },
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: null,
  },
  width: {
    type: Number,
    default: 200,
  },
  logo: {
    type: String,
    default: "",
  },
};
