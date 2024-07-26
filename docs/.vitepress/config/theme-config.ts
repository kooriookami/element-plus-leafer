import type { DefaultTheme } from 'vitepress';

export function getThemeConfig(lang: string): DefaultTheme.Config {
  const prefix = `/${lang}`;
  return {
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
      },
    ],
    sidebar: {
      [`${prefix}/guide/`]: [
        {
          text: '指南',
          items: [
            {
              text: '简介',
              link: `${prefix}/guide/`,
            },
            {
              text: '快速开始',
              link: `${prefix}/guide/start`,
            },
          ],
        },
      ],
      [`${prefix}/component/`]: [
        {
          text: '组件',
          items: [
            {
              text: '简介',
              link: `${prefix}/component/`,
            },
            {
              text: 'Button 按钮',
              link: `${prefix}/component/button`,
            },
            {
              text: 'Icon 图标',
              link: `${prefix}/component/icon`,
            },
          ],
        },
      ],
    },
  };
}
