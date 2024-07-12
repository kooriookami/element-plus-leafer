import { defineMap } from '@element-plus-leafer/utils';

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
