import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vue3-resize',
    file: 'dist/vue3-resize.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    // Additional externals here
  ],
})

export default config
