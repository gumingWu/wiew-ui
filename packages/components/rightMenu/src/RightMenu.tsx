import { defineComponent } from "vue"
import { RightMenuProps as props } from "./props"
import type { RightMenuPropsType } from "./types"
import './RightMenu.css'

const defaultMenu = defineComponent({
  setup() {
    return () => (
      <div>我是default</div>
    )
  }
})

export default defineComponent({
  name: 'WRightMenu',
  props,
  setup(props: RightMenuPropsType, { slots }) {
    return () => (
      <div class="w-right-menu">
        我是WRightMenu
        { slots.menu ? slots.menu() : <defaultMenu /> }
        { slots.default ? slots.default() : null }
      </div>
    )
  }
})
