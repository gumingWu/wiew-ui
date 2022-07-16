import { defineComponent, computed } from 'vue';
import props from './props';
import type { ShrinkBoxPropTypes } from './types';
import './shrinkBox.scss'

export default defineComponent({
  name: 'WShrinkBox',
  props,
  setup(props: ShrinkBoxPropTypes, { slots }) {
    const { line, width } = props
    const wrapperDynamicStyle = computed(() => {
      return {
        width,
      }
    })
    const textDynamicStyle = computed(() => {
      return {
        'display': '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
      }
    })

    return () => (
      <div class="wrapper" style={wrapperDynamicStyle.value}>
      <input id="exp1" class="exp"  type="checkbox" />
      <div class="text" style={textDynamicStyle.value}>
          <label class="btn" for="exp1"></label>
          { slots.default?.() ?? '默认' }
      </div>
    </div>
    )
  }
})