import { VirtualScrollProps } from './props'
import type { ExtractPropTypes } from 'vue'

export type ListDataType = {
  id?: number,
  value?: number,
}

export type VirtualScrollPropsType = ExtractPropTypes<typeof VirtualScrollProps>