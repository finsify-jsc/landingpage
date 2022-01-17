const path = require('path');

module.exports = {
  title: 'Drill4J',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j.github.io',
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
          to: 'how-to-start/',
          label: 'About us',
        },
        {
          to: 'test-career/',
          label: 'Career',
        },
        {
          to: '/',
          label: 'English',
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
              href: '/docs/installation/drill-admin',
            },
            {
              label: 'Privacy policy',
              href: '/docs/installation/java-agent',
            },
            {
              label: 'Career',
              href: '/docs/installation/autotest-agent',
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
