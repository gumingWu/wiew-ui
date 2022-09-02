import prompts from 'prompts'
import {
  reset
} from 'kolorist'

export const DEFAULT_CLI_FUNC_ACTION = [
  'component',
  'project'
]

export async function rootAction() {
  let result = {}
  console.log(1);
  
  try {
    chooseAction = await prompts([
      {
        type: 'select',
        name: 'action',
        message: reset('choose an action'),
        choices: DEFAULT_CLI_FUNC_ACTION.map(item => ({
          title: `create ${item}`,
          value: item
        }))
      }
    ])
  } catch(e) {}

  if(chooseAction.action === 'component') {
    // TODO 创建组件流程
  }

  if(chooseAction.action === 'project') {
    // TODO 创建模板流程
  }
}