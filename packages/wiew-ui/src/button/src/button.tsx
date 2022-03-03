import { defineComponent, ref, computed } from 'vue'
import ButtonProps from './props'
import './button.scss'
// import foo from 'wiew-tools'

export default defineComponent({
  name: 'WButton',
  props: ButtonProps,
  setup(props, { attrs, slots, emit, expose }) {
    const buttonContent = ref<HTMLElement | null>(null)

    const onClick = (e: MouseEvent) => {
      props.onClick?.(e);
    }

    const btnClass = computed(() => {
      const { size, variant } = props;
      const origin = `wiewui-btn wiewui-btn-${size} wiewui-btn-${variant}`
      return origin
    })
    // console.log(foo.add(1, 2));

    return () => {
      const { disabled, width } = props

      return (
        <div class="wiewui-btn-host" {...attrs}>
          <button
            class={btnClass.value}
            disabled={disabled}
            style={{width}}
          >
            {slots.default?.()}
          </button>
        </div>
      )
    }
  }
})