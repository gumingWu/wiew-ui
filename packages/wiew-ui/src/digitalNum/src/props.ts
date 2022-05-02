import { looseDigitalValidator } from "./helper";

export default {
  value: {
    default: undefined,
    validator: looseDigitalValidator,
    required: true,
  },
  dislocation: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 500,
  },
  useGrouping: {
    type: Boolean,
    default: false,
  },
};
