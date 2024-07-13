import {defineConfig} from 'vitepress'
import {getThemeConfig} from "./config/theme-config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Element Plus Leafer",
  description: "基于 Element Plus 外观的 Leafer UI 组件库",
  base: '/element-plus-leafer-docs/',
  locales: {
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: getThemeConfig('zh-CN')
    },
  },
})
