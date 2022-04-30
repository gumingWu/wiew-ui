const prompts = require("prompts");
import { bgRed, reset } from "kolorist";
import type { IComponentCommandOptionType } from "../types/component";

export default async (options: IComponentCommandOptionType) => {
  let result: Record<string, any> = {};
  const { name, chinese } = options;

  try {
    result = await prompts(
      [
        {
          type: !!name ? null : "text",
          name: "name",
          message: reset("Component Name:"),
          // validate: (val: string) => /[A-Z]/.test(val.charAt(0)) ? true : 'the first char must be capital',
        },
        {
          type: !!chinese ? null : "text",
          name: "chinese",
          message: reset("Component Chinese Name(docs used):"),
        },
      ],
      {
        onCancel: () => {
          throw new Error(bgRed("Operation Cancelled"));
        },
      }
    );
  } catch (err) {
    console.log(bgRed(err));
    return;
  }

  Object.assign(options, result); // 合并初始值和后来输入的值
  console.log(options);
};
