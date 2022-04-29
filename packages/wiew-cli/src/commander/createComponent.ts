const prompts = require("prompts");
import { bgRed, reset } from "kolorist";

export default async (dir, options) => {
  let result: Record<string, any> = {};

  try {
    result = await prompts(
      [
        {
          type: "text",
          name: "componentName",
          message: reset("Component Name:"),
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

  console.log(1, result);
};
