module.exports = {
  title: "karl-cli",
  description: "vuepress-template",
  base: "/", 
  head: [
    [
      'link', { rel: 'icon', href: '/images/common/logo.png' }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2,
    logo: '/images/common/logo.png', 
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          {
            text: '分支1',
            items: [
              { text: 'branch1', link: '/guide/branch1' },
            ]
          },
          {
            text: '分支2',
            items: [
              { text: 'branch2', link: '/guide/branch2' },
            ]
          }
        ]
      },
      { text: 'Github', link: 'https://github.com/ox4f5da2' }
    ],
    sidebar: {
      '/': [
        '模板介绍',
        '使用文档'
      ]
    }
  }
}