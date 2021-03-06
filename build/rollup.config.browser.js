import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'Vue3Resize',
    file: 'dist/vue3-resize.min.js',
    format: 'iife',
    sourcemap: true,
    externalLiveBindings: false,
    globals: {
      vue: 'Vue',
    },
  },
})

config.plugins.push(terser({}))

export default config
