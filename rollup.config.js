import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const rollupConfig = [
  {
    file: 'lib/waterleaf.esm.js',
    format: 'esm',
    sourcemap: true
  },
  {
    file: 'lib/waterleaf.umd.js',
    format: 'umd',
    name: 'waterleaf',
    sourcemap: true
  }
].map((output) => ({
  output,
  input: 'src/index.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}))

export default rollupConfig
