import { BuildOptions, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import jsonfile from 'jsonfile';
import path from 'path';
import dts from 'vite-plugin-dts';

function editPackageJson() {
  return {
    name: 'edit-package-json',
    closeBundle() {
      const file = 'dist/package.json';
      jsonfile.readFile(file, (err, obj) => {
        if (!err) {
          Object.assign(obj, {
            main: 'umd/index.js',
            module: 'es/index.mjs',
            types: 'types/index.d.ts',
            exports: {
              '.': {
                'types': './types/index.d.ts',
                'import': './es/index.mjs',
                'require': './umd/index.js',
              },
            },
          });
          jsonfile.writeFile(file, obj, { spaces: 2, EOL: '\r\n' });
        }
      });
    },
  };
}

const buildLib: BuildOptions = {
  lib: {
    entry: path.resolve(__dirname, 'packages'),
    name: 'ElementPlusLeafer',
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['leafer-ui', '@leafer-in/flow', '@leafer-in/state', '@ctrl/tinycolor'],
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
      dts(),
      copy({
        targets: [
          { src: './node_modules/.tmp/types/*', dest: 'dist/types' },
          { src: 'LICENSE', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
          { src: 'packages/package.json', dest: 'dist' },
        ],
        hook: 'writeBundle',
      }),
      editPackageJson(),
    ],
  },
  sourcemap: true,
};

const buildWebsite: BuildOptions = {
  outDir: 'docs',
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@element-plus-leafer': path.resolve(__dirname, 'packages'),
    },
  },
  build: process.argv.includes('lib') ? buildLib : buildWebsite,
});
