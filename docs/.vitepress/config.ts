import {defineConfig} from 'vitepress'
import {getThemeConfig} from "./config/theme-config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Element Plus Leafer",
  description: "A VitePress Site",
  locales: {
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: getThemeConfig('zh-CN')
    },
  },
})
