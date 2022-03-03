import { defineComponent } from "vue";
import props from "./props";

export default defineComponent({
  name: 'WDatePicker',
  props,
  setup(props, { attrs, slots, emit, expose }) {
    return () => {
      return (
        <div></div>
      )
    }
  }
})