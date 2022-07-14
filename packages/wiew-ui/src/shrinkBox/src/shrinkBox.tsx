import { defineComponent } from 'vue';
import props from './props';

export default defineComponent({
  name: 'WShrinkBox',
  props,
  setup() {
    return () => (
      <div>hi</div>
    )
  }
})