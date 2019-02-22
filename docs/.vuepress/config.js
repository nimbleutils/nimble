module.exports = {
  title: 'Nimble-utils',
  description: 'Probably the best design utility package in the world.',
  head: [['link', {rel: 'icon', href: `/logo.png`}]],
  base: '/',
  dest: './dist',

  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Documentation', link: '/documentation/'},
      {text: 'News', link: '/news/'},
      {text: 'GitHub ⤴', link: 'https://github.com/goa-codebet/nimble-utils'},
    ],
    sidebar: {
      '/documentation/': genSidebarConfig ('Documentation'),
    },
    lastUpdated: 'Last Updated',

    repo: 'goa-codebet/nimble',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    serviceWorker: {
      updatePopup: true,
    },
  },

  ga: 'UA-135043232-1',

  serviceWorker: true,

  markdown: {
    // options for markdown-it-anchor!
    anchor: {permalink: false},
    config: md => {
      md.use (require ('markdown-it-katex'));
    },
  },
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'components',
        'classes',
        'directives',
        'theme',
        'about',
      ],
    },
  ];
}
