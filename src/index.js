import ResizeObserver from './components/ResizeObserver.vue'
import { version } from '../package.json'

// Install the components
export function install (app) {
  const name = 'ResizeObserver'
  app.component(name, ResizeObserver)

  app.config.isCustomElement = name
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
