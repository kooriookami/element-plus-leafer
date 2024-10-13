import { defineMap, isDark } from '@element-plus-leafer/utils';

const dark = isDark();

export const FontFamily = 'Inter, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif';

export const ComponentSize = defineMap({
  'large': 40,
  'default': 32,
  'small': 24,
});

export const FontSize = defineMap({
  'large': 14,
  'default': 14,
  'small': 12,
});

export const BorderRadius = defineMap({
  'base': 4,
  'small': 2,
  'round': 20,
  'circle': 100,
}, 'base');

export const BoxShadow = defineMap({
  'base': [
    { x: 0, y: 12, blur: 34, spread: 4, color: dark ? 'rgba(0, 0, 0, 0.36)' : 'rgba(0, 0, 0, 0.04)' },
    { x: 0, y: 8, blur: 20, color: dark ? 'rgba(0, 0, 0, 0.72)' : 'rgba(0, 0, 0, 0.08)' },
  ],
  'light': { x: 0, y: 0, blur: 12, color: dark ? 'rgba(0, 0, 0, 0.72)' : 'rgba(0, 0, 0, 0.12)' },
  'lighter': { x: 0, y: 0, blur: 6, color: dark ? 'rgba(0, 0, 0, 0.72)' : 'rgba(0,0,0,0.12)' },
  'dark': [
    { x: 0, y: 16, blur: 48, spread: 16, color: dark ? 'rgba(0, 0, 0, 0.72)' : 'rgba(0, 0, 0, 0.08)' },
    { x: 0, y: 12, blur: 32, color: dark ? '#000000' : 'rgba(0, 0, 0, 0.12)' },
    { x: 0, y: 8, blur: 16, spread: -8, color: dark ? '#000000' : 'rgba(0, 0, 0, 0.16)' },
  ],
});
