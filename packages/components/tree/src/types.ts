import { TreeProps } from "./props";
import type { ExtractPropTypes } from "vue";

export type TreeItem = {
  label: string;
  level?: number;
  open?: boolean;
  children?: TreeItem[];
  [key: string]: any;
};

export type TreePropsType = ExtractPropTypes<typeof TreeProps>;
