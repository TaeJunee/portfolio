const esbuild = require('esbuild')
const { dependencies, peerDependencies } = require('./package.json')

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/bundle.js',
        bundle: true,
        minify: true,
    })
    .catch(() => process.exit(1));