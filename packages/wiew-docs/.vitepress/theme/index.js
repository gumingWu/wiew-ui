import Theme from 'vitepress/theme'
import { registerComponents } from "./register-components";
import "vitepress-theme-demoblock/theme/styles/index.css";

import WiewUI from "../../../wiew-ui/src/index";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WiewUI);
    registerComponents(app);
  },
};
