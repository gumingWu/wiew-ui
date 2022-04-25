import { PropType } from "vue";
import type { IRightClickMenuItem } from "./types";

export default {
  menu: {
    type: Array as PropType<IRightClickMenuItem[]>,
    default: () => [],
  },
};
