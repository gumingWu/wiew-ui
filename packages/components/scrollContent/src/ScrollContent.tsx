import { defineComponent } from 'vue'
import './ScrollContent.less'

export default /*#__PURE__*/ defineComponent({
  name: 'WScrollContent',
  setup(props, { slots }) {
    return () => (
      <div class="scroll-content-box">
        <div class="scroll-wrap">
          <div class="scroll-item">
            { slots.default?.() }
          </div>
        </div>
      </div>
    )
  }
})