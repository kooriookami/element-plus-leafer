import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import packageJson from './packages/package.json';
import type { BuildOptions } from 'vite';

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

const baseBuildConfig: BuildOptions = {
  lib: {
    entry: path.resolve(__dirname, 'packages'),
    name: 'ElementPlusLeafer',
  },
  sourcemap: true,
  copyPublicDir: false,
};

const buildFullConfig = defineConfig({
  ...baseConfig,
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      outDir: 'dist/types',
    }),
  ],
  build: {
    ...baseBuildConfig,
    rollupOptions: {
      external: ['leafer-ui', '@leafer-in/flow', '@leafer-in/state', '@leafer-in/animate'],
      output: [
        {
          name: 'ElementPlusLeafer',
          format: 'umd',
          dir: 'dist/dist',
          globals: {
            'leafer-ui': 'LeaferUI',
            '@leafer-in/flow': 'LeaferIN.flow',
            '@leafer-in/state': 'LeaferIN.state',
            '@leafer-in/animate': 'LeaferIN.animate',
          },
          entryFileNames: '[name].full.js',
        },
        {
          format: 'esm',
          dir: 'dist/dist',
          entryFileNames: '[name].full.mjs',
        },
      ],
    },
  },
});

const buildModulesConfig = defineConfig({
  ...baseConfig,
  build: {
    ...baseBuildConfig,
    rollupOptions: {
      external: Object.keys(packageJson.dependencies),
      output: [
        {
          format: 'esm',
          dir: 'dist/es',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: chunkInfo => {
            if (chunkInfo.name.endsWith('.svg')) {
              const name = chunkInfo.name.split('/').pop();
              return `icons/${name}.mjs`;
            }
            return '[name].mjs';
          },
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          entryFileNames: chunkInfo => {
            if (chunkInfo.name.endsWith('.svg')) {
              const name = chunkInfo.name.split('/').pop();
              return `icons/${name}.cjs`;
            }
            return '[name].cjs';
          },
        },
      ],
    },
  },
});

let config = baseConfig;
if (process.argv.includes('full')) {
  config = buildFullConfig;
} else if (process.argv.includes('modules')) {
  config = buildModulesConfig;
}

export default config;
