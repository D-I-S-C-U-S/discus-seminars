/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DISCUS PhD Seminar',
  tagline: 'Dinosaurs are cool, sharing your interests is cooler.',
  url: 'https://www.brighton.ml',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'D-I-S-C-U-S', // Usually your GitHub org/user name.
  projectName: 'discus-seminars', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DISCUS Seminars',
      logo: {
        alt: 'DISCUS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/D-I-S-C-U-S',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/fYfDgHvRxb',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/D-I-S-C-U-S',
            },
            {
              label: 'Join our mailing list',
              href: 'https://forms.gle/XbpPhnZd4adPD7nWA',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DISCUS.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'DISCUS Seminar Series',
          blogDescription: 'A collection of talks by PhD students who work with data.',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} DISCUS`,
          },
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/D-I-S-C-U-S/discus-seminars/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
