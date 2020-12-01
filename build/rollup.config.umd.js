import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue3-resize',
    file: 'dist/vue3-resize.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
