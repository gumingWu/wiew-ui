import { capitalize } from "lodash-es";

export default (options) => {
  const { name } = options;

  return `
    import { ExtractPropTypes } from "vue";
    import props from "./props";

    export type ${capitalize(name)}PropType = ExtractPropTypes<typeof props>;
  `;
};
