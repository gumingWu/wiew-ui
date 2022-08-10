import type { PropType } from 'vue';
import type { Size, Status, Type } from './types';

export const ButtonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'middle'
  },
  type: {
    type: String as PropType<Type>,
    default: 'default'
  },
  status: {
    type: String as PropType<Status>,
    default: 'default'
  }
}