import ResizeObserver from './components/ResizeObserver.vue'
import { version } from '../package.json'

// Install the components
export function install (app) {
  const name = 'ResizeObserver'

  if (app.use) {
    app.use(name, ResizeObserver)
  } else {
    app.component(name, ResizeObserver)
  }
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
