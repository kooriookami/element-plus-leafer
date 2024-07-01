import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import jsonfile from 'jsonfile';
import path from 'path';

function editPackageJson() {
  return {
    name: 'edit-package-json',
    closeBundle() {
      const file = 'dist/package.json';
      jsonfile.readFile(file, (err, obj) => {
        if (!err) {
          obj.main = 'umd/index.js';
          obj.module = 'es/index.mjs';
          jsonfile.writeFile(file, obj, { spaces: 2, EOL: '\r\n' });
        }
      });
    },
  };
}

const buildLib = {
  lib: {
    entry: path.resolve(__dirname, 'packages/element-plus-leafer'),
    name: 'ElementPlusLeafer',
    fileName: (format: string) => {
      if (format === 'es') {
        return `${format}/index.mjs`;
      }
      return `${format}/index.js`;
    },
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['leafer-ui', '@leafer-in/flow', '@leafer-in/state'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        'leafer-ui': 'LeaferUI',
        '@leafer-in/flow': 'LeaferIN.flow',
        '@leafer-in/state': 'LeaferIN.state',
      },
    },
    plugins: [
      copy({
        targets: [
          { src: 'LICENSE', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
          { src: 'packages/element-plus-leafer/package.json', dest: 'dist' },
        ],
        hook: 'writeBundle',
      }),
      editPackageJson(),
    ],
  },
};

const buildWebsite = {
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
    },
  },
  build: process.argv.includes('lib') ? buildLib : buildWebsite,
});
