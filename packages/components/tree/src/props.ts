import type { TreeItem } from "./types";
import { PropType } from "vue";

export const TreeProps = {
  data: {
    type: Array as PropType<TreeItem[]>,
    default: () => [],
  },
};
