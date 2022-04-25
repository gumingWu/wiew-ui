import props from "./props";
import { ExtractPropTypes } from "vue";

export type IRightClickPropsType = ExtractPropTypes<typeof props>;

export type IRightClickMenuItem = {
  label?: string;
  handler?: (...args: any[]) => {};
};
