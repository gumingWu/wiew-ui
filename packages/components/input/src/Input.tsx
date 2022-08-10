import { defineComponent } from 'vue';
import { prefix } from '@wiew-ui/utils';

export default defineComponent({
  name: `${prefix}Input`,
  setup() {
    return () => (
      <div class="wrapper">
        <input type="text" placeholder="我是input111" />
      </div>
    )
  }
})