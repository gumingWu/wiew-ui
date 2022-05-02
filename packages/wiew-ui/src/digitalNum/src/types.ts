import { ExtractPropTypes } from "vue";
import props from "./props";

export type DigitalTransformPropType = ExtractPropTypes<typeof props>;
