const path = require('path');

module.exports = {
  title: 'MoneyLover',
  tagline: 'MoneyLover',
  url: 'https://MoneyLover.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'MoneyLover',
  projectName: 'MoneyLoverLandingPage',
  themeConfig: {
    algolia: {
      apiKey: '6893440cddb296d0faf1399850200fc6',
      indexName: 'drill4j',
    },
    gtag: {
      trackingID: 'UA-147653671-1',
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
          to: '/',
          label: 'About us',
        },
        {
          to: 'test-career/',
          label: 'Career',
        },
        {
          to: '/',
          label: 'Docs',
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
              href: '/',
            },
            {
              label: 'Privacy policy',
              href: '/',
            },
            {
              label: 'Career',
              href: '/',
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-NGTZFW2', // GTM Container ID
      },
    ],
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
};
