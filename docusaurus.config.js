/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  title: 'MoneyLover',
  tagline: 'MoneyLover',
  url: 'https://landy.moneylover.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'finsify-be',
  projectName: 'landingpage',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: { label: 'English' },

      vi: { label: 'Tiếng Việt' },
    },
  },
  themeConfig: {
    gtag: {
      trackingID: 'G-7KTM9RQ65E',
      anonymizeIP: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['java'],
    },
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          to: 'https://finsify.com/',
          label: 'About us',
        },
        {
          to: '/career',
          label: 'Career',
        },
      ],
    },
    footer: {
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'About us',
              href: 'https://finsify.com/',
            },
            {
              label: 'Privacy policy',
              href: 'https://moneylover.me/policy.html',
            },
            {
              label: 'Career',
              href: '/career',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/career',
          showReadingTime: true,
          blogTitle: 'Tuyển dụng',
          blogDescription: 'MoneyLover tuyển dụng',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Blogasaurus by Palash Shrivastava`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components/index.ts'),
          '@static': path.resolve(__dirname, './static'),
        },
      },
    ],
  ],
  scripts: [
    {
      id: 'Cookiebot',
      src: 'https://consent.cookiebot.com/uc.js',
      'data-cbid': '96433548-46bc-4310-afc0-3c3c8933a3b5',
      async: true,
    },
  ],
  
  // headTags: [
  //   {
  //     tagName: 'script',
  //     attributes: {
  //       id: 'Cookiebot',
  //       src: 'https://consent.cookiebot.com/uc.js',
  //       'data-cbid': '96433548-46bc-4310-afc0-3c3c8933a3b5',
  //       async: true,
  //     },
  //   }
  // ],
};
