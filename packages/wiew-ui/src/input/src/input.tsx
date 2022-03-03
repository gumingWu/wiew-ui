import { defineComponent } from "vue";
import props from "./props";

export default defineComponent({
  name: 'WInput',
  props,
  setup(props, { attrs, slots, emit, expose }) {
    return () => {
      return (
        <div>
          <input type="text" />
        </div>
      )
    }
  }
})