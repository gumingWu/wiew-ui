import type { ListDataType } from "./types"
import type { PropType } from 'vue'

export const VirtualScrollProps = {
  listData: {
    type: Array as PropType<ListDataType[]>,
    default: () => []
  },
  itemSize: {
    type: Number,
    default: 200
  }
}