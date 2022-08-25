import type { ListDataType } from "./types"
import type { PropType } from 'vue'

export const VirtualScrollProps = {
  data: {
    type: Array as PropType<ListDataType[]>,
    default: () => []
  },
  startIndex: {
    type: Number,
    default: 0
  },
  endIndex: {
    type: Number,
    default: 10
  },
  listItemHeight: {
    type: Number,
    default: 60
  },
  containerHeight: {
    type: Number,
    default: 500
  }
}