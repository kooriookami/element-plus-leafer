import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      outDir: 'dist/types',
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages'),
      name: 'ElementPlusLeafer',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'leafer-ui',
        '@leafer-in/flow',
        '@leafer-in/state',
        '@ctrl/tinycolor',
      ],
      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: 'es/[name].mjs',
        },
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: 'lib/[name].cjs',
        },
        {
          format: 'umd',
          name: 'ElementPlusLeafer',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            'leafer-ui': 'LeaferUI',
            '@leafer-in/flow': 'LeaferIN.flow',
            '@leafer-in/state': 'LeaferIN.state',
          },
          entryFileNames: 'dist/[name].js',
        },
      ],
      plugins: [
        copy({
          targets: [
            { src: 'LICENSE', dest: 'dist' },
            { src: 'README.md', dest: 'dist' },
            { src: 'packages/package.json', dest: 'dist' },
          ],
          hook: 'writeBundle',
        }),
      ],
    },
    sourcemap: true,
  },
});
