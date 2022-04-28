#! /usr/bin/env node
const prompts = require("prompts");
import { bgRed, reset } from "kolorist";

async function init() {
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

  console.log(result);
}

init().catch((err) => {
  console.log(bgRed(err));
});
