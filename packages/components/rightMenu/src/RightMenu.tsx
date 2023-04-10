import { defineComponent, Teleport, ref, withModifiers } from "vue"
import { RightMenuProps as props, DefaultRightMenuProps } from "./props"
import type { RightMenuPropsType } from "./types"
import './RightMenu.css'

const defaultMenu = defineComponent({
  props: DefaultRightMenuProps,
  setup(props) {
    const visible = ref(false)

    return () => (
      <Teleport to="body">
        { visible ? 
          <div class="default-menu">
            { (props.menu || []).map(item => (
              <div>{item.title}</div>
            )) }
          </div> :
          null }
      </Teleport>
    )
  }
})

export default defineComponent({
  name: 'WRightMenu',
  props,
  setup(props: RightMenuPropsType, { slots }) {
    const rightClick = (e) => {
      console.log(e);
    }

    return () => (
      <div class="w-right-menu">
        <div>
          { slots.menu ? slots.menu() : <defaultMenu menu={props.menu} /> }
        </div>
        <div onContextmenu={withModifiers(rightClick, ['prevent'])}>
          { slots.default ? slots.default() : null }
        </div>
      </div>
    )
  }
})
