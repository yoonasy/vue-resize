module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    'syntax-dynamic-import',
    ['@vue/babel-plugin-jsx'],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  env: {
    utils: {
      presets: [
        [
          'env',
          {
            loose: true,
            modules: 'commonjs',
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
            },
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['element-ui'],
            alias: {
              'element-ui/src': 'element-ui/lib',
            },
          },
        ],
      ],
    },
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
    },
  },
}
