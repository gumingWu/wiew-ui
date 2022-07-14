import { defineComponent, computed } from 'vue';
import props from './props';
import type { ShrinkBoxPropTypes } from './types';
import './shrinkBox.scss'

export default defineComponent({
  name: 'WShrinkBox',
  props,
  setup(props: ShrinkBoxPropTypes, { slots }) {
    const width = props.width
    // const dynamicStyle = computed(() => {
    //   return {
    //     width
    //   }
    // })

    return () => (
      <div class="wrapper" style={{width}}>
      <input id="exp1" class="exp"  type="checkbox" />
      <div class="text">
          <label class="btn" for="exp1"></label>
          { slots.default?.() ?? '默认' }
      </div>
    </div>
    )
  }
})