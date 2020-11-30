import ResizeObserver from './components/ResizeObserver.vue'

// Install the components
export function install (Vue) {
  Vue.component('ResizeObserver', ResizeObserver)
}

export {
  ResizeObserver,
}

// Plugin
const plugin = {
  version: '0.0.1',
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
