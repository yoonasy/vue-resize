import '../../dist/vue3-resize.css'
import { createApp } from 'vue'
import Resize from '../../src/components/ResizeObserver'
import App from './App.vue'

const app = createApp(App)

app.component(Resize.name, Resize)

app.mount('#app')
