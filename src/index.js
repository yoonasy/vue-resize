import ResizeObserver from './package/ResizeObserver'
import { version } from '../package.json'

// Install the components
const install = (app) => {
  app.use(ResizeObserver)
}

// Plugin
const Vue3Resize = {
  version,
  install,
}

export {
  ResizeObserver,
  install,
}

export default Vue3Resize
