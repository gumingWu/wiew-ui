import type { InputType } from "./types";
import type { PropType } from "vue";

export default {
  size: {
    type: String as PropType<InputType>,
    default: "middle",
  },
};
