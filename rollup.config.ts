import packageJson from './packages/package.json';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';

const getExternal = () => {
  const { dependencies } = packageJson;
  return Object.keys(dependencies);
};

const config: RollupOptions[] = [
  {
    input: 'packages/index.ts',
    external: getExternal(),
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
      typescript(),
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
];

export default config;
