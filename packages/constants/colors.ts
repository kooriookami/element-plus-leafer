import { defineMap, isDark } from '@element-plus-leafer/utils';

export const Color = defineMap(() => ({
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  error: '#f56c6c',
  info: '#909399',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
}), 'primary');

export const TextColor = defineMap(() => ({
  primary: isDark() ? '#e5eaf3' : '#303133',
  regular: isDark() ? '#cfd3dc' : '#606266',
  secondary: isDark() ? '#a3a6ad' : '#909399',
  placeholder: isDark() ? '#8d9095' : '#a8abb2',
  disabled: isDark() ? '#6c6e72' : '#c0c4cc',
}), 'primary');

export const BorderColor = defineMap(() => ({
  darker: isDark() ? '#636466' : '#cdd0d6',
  dark: isDark() ? '#58585b' : '#d4d7de',
  base: isDark() ? '#4c4d4f' : '#dcdfe6',
  light: isDark() ? '#414243' : '#e4e7ed',
  lighter: isDark() ? '#363637' : '#ebeef5',
  extraLight: isDark() ? '#2b2b2c' : '#f2f6fc',
}), 'base');

export const FillColor = defineMap(() => ({
  darker: isDark() ? '#424243' : '#e6e8eb',
  dark: isDark() ? '#39393a' : '#ebedf0',
  base: isDark() ? '#303030' : '#f0f2f5',
  light: isDark() ? '#262727' : '#f5f7fa',
  lighter: isDark() ? '#1d1d1d' : '#fafafa',
  extraLight: isDark() ? '#191919' : '#fafcff',
  blank: isDark() ? 'transparent' : '#ffffff',
}), 'blank');

export const BackgroundColor = defineMap(() => ({
  page: isDark() ? '#0a0a0a' : '#f2f3f5',
  base: isDark() ? '#141414' : '#ffffff',
  overlay: isDark() ? '#1d1e1f' : '#ffffff',
}), 'base');
