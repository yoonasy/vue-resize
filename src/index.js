import ResizeObserver from './components/ResizeObserver.vue'
import { version } from '../package.json'

// Install the components
export function install (app) {
  const name = 'ResizeObserver'

  app.use(name, ResizeObserver)
}

export {
  ResizeObserver,
}

// Plugin
const plugin = {
  version,
  install,
}

export default plugin
