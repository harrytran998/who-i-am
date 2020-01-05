const {
  getFinanceSideBar,
  getInvestingSideBar,
  getLeadershipSideBar,
  getOtherSideBar,
} = require('./link/sidebar')

module.exports = {
  title: `Tri thức là sức mạnh`,
  description: '💎 are created under fucking pressure',
  plugins: [
    'element-tabs',
    // [
    //   '@vuepress/google-analytics',
    //   // {
    //   //   ga: 'UA-154598962-1',
    //   // },
    // ],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'Nội dung mới đã được cập nhật',
          buttonText: 'Refresh lại trang',
        },
      },
    ],
  ],
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    smoothScroll: true,
    editLinks: true,
    repo: 'jetaimefrc/who-i-am',
    repoLabel: 'Vào Github',
    editLinkText: 'Cải thiện trang này',
    displayAllHeaders: true,
    searchPlaceholder: 'Tìm kiếm...',
    lastUpdated: 'Cập nhật cuối cùng',
    sidebarDepth: 3,
    search: true,
    searchMaxSuggestions: 5,
    algolia: {
      apiKey: '',
      indexName: '',
      appId: '',
    },
    serviceWorker: true,
    nav: require('./link/nav'),
    sidebar: {
      '/leadership/': getLeadershipSideBar(),
      '/finance/': getFinanceSideBar(),
      '/investing/': getInvestingSideBar(),
      '/other/': getOtherSideBar(),
    },
  },
}
