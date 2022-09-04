import { defineComponent } from "vue"
import { LoadContainerProps as props } from "./props"
import type { LoadContainerPropsType } from "./types"
import './LoadContainer.css'

export default defineComponent({
  name: 'WLoadContainer',
  props,
  setup(props: LoadContainerPropsType) {
    return () => (
      <div class="w-loadContainer">我是WLoadContainer</div>
    )
  }
})
