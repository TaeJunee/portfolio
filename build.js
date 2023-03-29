import esbuild from 'esbuild'

const args = process.argv.slice(2)
const watch = args.includes('--watch')

const context = await esbuild
  .context({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    minify: true,
    loader: {
      '.gltf': 'file'  
    },
    tsconfig: 'tsconfig.json',
  })

if (watch) {
  context.watch()
  console.log('watching ...')
} else {
  context.rebuild()
  context.dispose()
}
