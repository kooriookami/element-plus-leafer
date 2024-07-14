import type {DefaultTheme} from "vitepress";

export function getThemeConfig(lang: string): DefaultTheme.Config {
  const prefix = `/${lang}`
  return {
    logo: '/images/element-plus-logo-small.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '指南',
        link: `${prefix}/guide`,
        activeMatch: `${prefix}/guide/`,
      },
      {
        text: '组件',
        link: `${prefix}/component`,
        activeMatch: `${prefix}/component/`,
      }
    ],
    sidebar: {
      [`${prefix}/guide/`]: [
        {
          text: '指南',
          link: `${prefix}/guide`,
        },
      ],
      [`${prefix}/component/`]: [
        {
          text: '组件',
          link: `${prefix}/component`,
          items: [
            {
              text: 'Button 按钮',
              link: `${prefix}/component/button`
            },
          ]
        }
      ]
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/kooriookami/element-plus-leafer'}
    ],
  }
}
