import { capitalize } from "lodash-es";

export default (options) => {
  const { name } = options;

  return `
    import { defineComponent } from 'vue'
    import props from './props'
    import type { ${capitalize(name)}PropType } from './type'

    export default defineComponent({
      name: W${name},
      props,
      setup(props: ${capitalize(name)}PropType) {
        return () => (
          <div></div>
        )
      }
    })
  `;
};
