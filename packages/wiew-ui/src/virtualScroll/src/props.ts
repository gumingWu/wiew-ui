import { PropType } from "vue";

type NumberOrString = PropType<number | string | undefined>;

export default {
  itemHeight: {
    type: [Number, String] as NumberOrString,
    required: true,
  },
  height: {
    type: [Number, String] as NumberOrString,
    required: true,
  },
  width: {
    type: [Number, String] as NumberOrString,
    default: 0,
  },
  items: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  bench: {
    type: [Number, String] as NumberOrString,
    default: 0,
  },
};
