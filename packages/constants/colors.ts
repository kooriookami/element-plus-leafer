import { defineMap, isDark } from '@element-plus-leafer/utils';

const dark = isDark();

export const Color = defineMap({
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  error: '#f56c6c',
  info: '#909399',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
}, 'white');

export const TextColor = defineMap({
  primary: dark ? '#e5eaf3' : '#303133',
  regular: dark ? '#cfd3dc' : '#606266',
  secondary: dark ? '#a3a6ad' : '#909399',
  placeholder: dark ? '#8d9095' : '#a8abb2',
  disabled: dark ? '#6c6e72' : '#c0c4cc',
}, 'primary');

export const BorderColor = defineMap({
  darker: dark ? '#636466' : '#cdd0d6',
  dark: dark ? '#58585b' : '#d4d7de',
  base: dark ? '#4c4d4f' : '#dcdfe6',
  light: dark ? '#414243' : '#e4e7ed',
  lighter: dark ? '#363637' : '#ebeef5',
  extraLight: dark ? '#2b2b2c' : '#f2f6fc',
}, 'base');

export const FillColor = defineMap({
  darker: dark ? '#424243' : '#e6e8eb',
  dark: dark ? '#39393a' : '#ebedf0',
  base: dark ? '#303030' : '#f0f2f5',
  light: dark ? '#262727' : '#f5f7fa',
  lighter: dark ? '#1d1d1d' : '#fafafa',
  extraLight: dark ? '#191919' : '#fafcff',
  blank: dark ? 'transparent' : '#ffffff',
}, 'blank');

export const BackgroundColor = defineMap({
  page: dark ? '#0a0a0a' : '#f2f3f5',
  base: dark ? '#141414' : '#ffffff',
  overlay: dark ? '#1d1e1f' : '#ffffff',
}, 'base');
