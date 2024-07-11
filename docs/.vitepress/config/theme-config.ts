import type {DefaultTheme} from "vitepress";

export function getThemeConfig(lang: string): DefaultTheme.Config {
  const prefix = `/${lang}`
  return {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '指南', link: `${prefix}/guide`},
      {text: '组件', link: `${prefix}/component`}
    ],
    sidebar: [
      {
        text:'指南',
      },
      {
        text: '组件',
        items: [
          {text: '按钮', link: `${prefix}/component/button`},
        ]
      }
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/kooriookami/element-plus-leafer'}
    ],
  }
}
