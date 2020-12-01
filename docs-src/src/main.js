import '../../dist/vue3-resize.css'
import { createApp } from 'vue'
import ResizeObserver from '../..'
import App from './App.vue'

const app = createApp(App)

app.use(ResizeObserver)

app.mount('#app')
