import '../../dist/vue3-resize.css'
import { createApp } from 'vue'
import Resize, { install, ResizeObserver } from '../../'
import App from './App.vue'

console.log(Resize, install, ResizeObserver)

const app = createApp(App)

app.use(Resize)

app.mount('#app')
