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
        'w-button-wrapper',
        'button-preset',
        `size-${size}`,
        `type-${type}`,
        `status-${status}`
      ]
    })

    return () => (
      <button class={classes.value}>
        { slots.default?.() }
      </button>
    )
  }
})