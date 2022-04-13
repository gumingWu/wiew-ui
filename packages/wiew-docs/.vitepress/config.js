import sidebar from "../sidebar";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

module.exports = {
  title: "Wiew-UI",
  description: "Wiew-UI组件库文档",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin, {
        scriptReplaces: [
          {
            searchValue: /import ({.*}) from "vue"/g,
            replaceValue: (s, s1) => `const ${s1} = Vue`,
          },
        ],
      });
    },
  },
};
