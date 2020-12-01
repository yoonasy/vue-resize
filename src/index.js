import ResizeObserver from './components/ResizeObserver'
import { version } from '../package.json'

// Install the components
const install = (app, options = {}) => {
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
