import { cac } from "cac";
import path from "path";
import createComponent from "./commander/createComponent";

const cli = cac();

/**
 * cac tips
 * 括号的使用
 * 在command和option中都可以使用括号获取参数
 * <>表示必填
 * []表示可选
 * 输入的参数都会在action中的回调函数的options中，是一个对象，{ '--': [], name: 'aaa' }
 * 其中，可以在命令中，通过--继续传入不同的值，都可以在--: []中获取
 * npx wiew-cli component --name hhh -- aaa bbb
 * { '--': [ 'aaa', 'bbb' ], name: 'hhh' }
 * 
 * <>的值必填，不填会报错：CACError: missing required args for command `component <test>`
 * command的括号值(<>/[])，可以在action中直接获取到
 * .command("component <test>/[test]")
 * .action((test, options) => {
      console.log(test, options);
    });
 */

cli
  .command("component")
  .option("--name [name]", "Component Name")
  .option("--chinese [chinese]", "Component Chinese Name(docs used)")
  .action(createComponent);

cli
  .command("project")
  .option("project", "Create Project")
  .action((options) => {
    console.log(options);
  });

cli.help();
cli.version = require(path.resolve(__dirname, "../package.json")).version;
cli.parse();
