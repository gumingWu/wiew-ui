import { defineComponent } from "vue"
import { LoadBoxProps as props } from "./props"
import type { LoadBoxPropsType } from "./types"
import './LoadBox.css'

export default defineComponent({
  name: 'WLoadBox',
  props,
  setup(props: LoadBoxPropsType) {
    return () => (
      <div class="w-loadBox">我是WLoadBox</div>
    )
  }
})
