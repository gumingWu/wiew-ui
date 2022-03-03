import Theme from "vitepress/dist/client/theme-default";
import { registerComponents } from "./register-components";
import "vitepress-theme-demoblock/theme/styles/index.css";

import Button from "../../../wiew-ui/src/button";
import Input from "../../../wiew-ui/src/input";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Button);
    app.use(Input);
    registerComponents(app);
  },
};
