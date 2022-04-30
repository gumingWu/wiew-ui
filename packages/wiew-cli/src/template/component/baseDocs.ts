export default (options) => {
  const { name, chinese } = options;
  return `
    # ${name} ${chinese}

    ## 何时使用

    ## 基本使用
  `;
};
