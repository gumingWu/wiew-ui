import { defineComponent } from 'vue';
import { prefix } from '@wiew-ui/utils';

export default defineComponent({
  name: `${prefix}Button`,
  setup(props, { slots }) {
    return () => (
      <div class="wrapper">
        <button>
          { slots.default?.() }
        </button>
      </div>
    )
  }
})