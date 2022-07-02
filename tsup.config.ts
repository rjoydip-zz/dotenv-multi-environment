import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['main.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: true,
    minify: false,
    platform: 'node',
    format: ['cjs', 'esm', 'iife'],
    external: ['require', 'fs', 'path'],
    tsconfig: './tsconfig.node.json',
    onSuccess: "node dist/main.cjs"
})