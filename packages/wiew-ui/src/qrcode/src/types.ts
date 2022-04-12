// import type { QRCodeRenderersOptions } from "qrcode";

// export type QRcodePropType = {
//   value: string;
//   options?: QRCodeRenderersOptions;
//   width?: number;
//   logo?: string;
// };
import props from "./props";
import { ExtractPropTypes } from "vue";
import type { QRCodeRenderersOptions } from "qrcode";

export type QRcodePropType = ExtractPropTypes<typeof props>;

export type RenderQrcodeType = {
  canvas: any;
  width?: number;
  logo?: any;
  content?: string;
  options?: QRCodeRenderersOptions;
};
