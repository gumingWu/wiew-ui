import { defineComponent } from 'vue';
import { prefix } from '@wiew-ui/utils';

export default defineComponent({
  name: `${prefix}Button`,
  setup() {
    return (
      <div class="wrapper">
        <button>哈哈哈</button>
      </div>
    )
  }
})