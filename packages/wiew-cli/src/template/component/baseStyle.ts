import { kebabCase } from "lodash-es";

export default (options) => {
  const { name } = options;

  return `
    .w-${kebabCase(name)}-container {}
  `;
};
