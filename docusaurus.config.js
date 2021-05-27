module.exports = {
  title: 'Deta Docs',
  tagline: 'Deta Library and HTTP API docs.',
  url: 'https://docs.deta.sh',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'g3thq',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Deta',
      logo: {
        alt: 'Deta Logo',
        src: 'img/logo.svg',
        target: '/docs/home',
      },
      items: [
        {
          to: 'docs/home',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/deta/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '4b3aaec0466a855ce8ec420d3baedde3',
      indexName: 'deta',
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://deta-hq.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/detahq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.deta.sh/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/deta/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abstract Computing UG (haftungsbeschränkt). `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/g3thq/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Karla&display=swap',
  ],
};
