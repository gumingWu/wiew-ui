import type { PropType } from "vue";
import type { ButtonSize, ButtonVariant } from "./types";

export default {
  size: {
    type: String as PropType<ButtonSize>,
    default: "md",
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "",
  },
};
