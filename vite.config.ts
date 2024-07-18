import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import packageJson from './packages/package.json';

const baseConfig = defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

const buildFullConfig = defineConfig({
  ...baseConfig,
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages'),
      name: 'ElementPlusLeafer',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['leafer-ui', '@leafer-in/flow', '@leafer-in/state'],
      output: [
        {
          format: 'umd',
          dir: 'dist/dist',
          name: 'ElementPlusLeafer',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            'leafer-ui': 'LeaferUI',
            '@leafer-in/flow': 'LeaferIN.flow',
            '@leafer-in/state': 'LeaferIN.state',
          },
          entryFileNames: '[name].js',
        },
      ],
    },
    sourcemap: true,
  },
});

const buildLibConfig = defineConfig({
  ...baseConfig,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages'),
      name: 'ElementPlusLeafer',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: Object.keys(packageJson.dependencies),
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: '[name].cjs',
        },
      ],
    },
    sourcemap: true,
  },
});

let config = baseConfig;
if (process.argv.includes('full')) {
  config = buildFullConfig;
} else if (process.argv.includes('lib')) {
  config = buildLibConfig;
}

export default config;
