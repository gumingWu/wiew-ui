import { PropType } from "vue"
import { RightMenuType } from "./types"

export const RightMenuProps = {
  menu: {
    type: Array as PropType<RightMenuType[]>,
    required: true,
  }
}

export const DefaultRightMenuProps = {
  menu: {
    type: Array as PropType<RightMenuType[]>,
    required: true,
  }
}