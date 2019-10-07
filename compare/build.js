import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import urlResolve from 'rollup-plugin-url-resolve'

const build = (sufix) => ({
  input: ['src/bundles/compare', sufix, 'js'].filter(Boolean).join('.'),

  output: {
    name: 'ucare',
    format: 'umd',
    file: ['compare/builded-compare', sufix, 'js'].filter(Boolean).join('.')
  },

  plugins: [
    resolve(),
    urlResolve(),
    commonjs({
      namedExports: { 'deep-object-diff': ['detailedDiff'] }
    })
  ]
})

export default [
  build('api'),
  build('full'),
  build(''),
  build('lang.en')
]
