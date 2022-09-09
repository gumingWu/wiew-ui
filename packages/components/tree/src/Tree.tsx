import { defineComponent } from "vue"
import { TreeProps as props } from "./props"
import type { TreePropsType } from "./types"
import './Tree.css'

export default defineComponent({
  name: 'WTree',
  props,
  setup(props: TreePropsType) {
    return () => (
      <div class="w-tree">我是WTree</div>
    )
  }
})
