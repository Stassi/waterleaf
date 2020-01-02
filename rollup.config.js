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
  input: 'src/index.js'
}))

export default rollupConfig
