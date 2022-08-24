import { defineComponent, computed } from 'vue';
import { prefix } from '@wiew-ui/utils';
import { ButtonProps } from './props';
import type { ButtonPropsType } from './types'
import './Button.less'

export default /*#__PURE__*/ defineComponent({
  name: `${prefix}Button`,
  props: ButtonProps,
  setup(props: ButtonPropsType, { slots }) {
    const classes = computed(() => {
      const { size, status, type } = props
      return [
        'button-preset',
        `size-${size}`,
        `type-${type}`,
        `status-${status}`
      ]
    })

    return () => (
      <div class="w-button-wrapper">
        <button class={classes.value}>
          { slots.default?.() }
        </button>
      </div>
    )
  }
})