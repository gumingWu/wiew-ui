import { RightMenuProps } from "./props"
import type { ExtractPropTypes } from 'vue'

export type RightMenuPropsType = ExtractPropTypes<typeof RightMenuProps>

export type RightMenuType = {
  title: string
  callback: (...args: any[]) => any
}