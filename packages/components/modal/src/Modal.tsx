// step1. 创建组件.tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WModal',
  setup() {

    return () => (
      <div>我是Modal</div>
    )
  }
})