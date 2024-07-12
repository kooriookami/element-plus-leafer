import { defineMap } from '@element-plus-leafer/utils';

export const Color = defineMap({
  white: '#ffffff',
  black: '#000000',
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  error: '#f56c6c',
  info: '#909399',
}, 'white');

export const TextColor = defineMap({
  primary: '#303133',
  regular: '#606266',
  secondary: '#909399',
  placeholder: '#a8abb2',
  disabled: '#c0c4cc',
}, 'primary');

export const BorderColor = defineMap({
  default: '#dcdfe6',
  light: '#e4e7ed',
  lighter: '#ebeef5',
  extraLight: '#f2f6fc',
  dark: '#d4d7de',
  darker: '#cdd0d6',
});
