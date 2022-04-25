import { defineComponent } from 'vue'
import props from './props';
import { IRightClickPropsType } from './types';

export default defineComponent({
  name: 'WRightClick',
  props,
  setup(props: IRightClickPropsType, { slots }) {
    console.log(props);

    const handleMenu = (e: MouseEvent) => {
      e.preventDefault();
      console.log(e);
      
      console.log(1);
    }

    return () => (
      <span onContextmenu={handleMenu}>
        { slots.default ? slots.default() : <w-button>按钮</w-button> }
      </span>
    )
  }
})