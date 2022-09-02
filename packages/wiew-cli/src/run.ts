import cac from 'cac'
import { loadWiewConfig } from './config'
import { rootAction, componentsAction, projectAction } from './actions'

const cli = cac('wiew-cli')

export function getCleanCliOptions(options) {
  const ret = { ...options }
  delete ret['--']
  delete ret.n
  return ret
}

export function run() {
  // loadWiewConfig(process.cwd())
  cli.command('[root]', 'choose methods', {
    ignoreOptionDefaultValue: true,
  })
    .action(rootAction)

  cli.command('component', 'create a component')
    .option('-n, --name <name>', '[string] component name')
    .action(options => {
      const cleanCliOptions = getCleanCliOptions(options)
      componentsAction(cleanCliOptions)
    })
  
  cli.command('project', 'create a project using wiew-ui')
    .option('-n, --name <name>', '[string] project name')
    .action(options => {
      const cleanCliOptions = getCleanCliOptions(options)

      projectAction(cleanCliOptions)
    })
    
  cli.help()
  cli.version('1.0.0')
  cli.parse()
}