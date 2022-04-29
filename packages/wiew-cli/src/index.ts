import { cac } from "cac";
import path from "path";

const cli = cac();

cli
  .command("component")
  .option("component", "Create Component")
  .action((dir, options) => {
    console.log(dir, options);
  });

cli
  .command("project")
  .option("project", "Create Project")
  .action((dir, options) => {
    console.log(dir, options);
  });

cli.help();
cli.version = require(path.resolve(__dirname, "../package.json")).version;
cli.parse();
