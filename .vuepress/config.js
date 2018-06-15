module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/crowdfunding',
      '/cfhistory',
      {
        title: 'FAQs',
        collapsable: false,
        children: [
          '/faq/investor',
          '/faq/issuer'
        ]
      },
      {
        title: 'Legal',
        collapsable: false,
        children: [
          '/legal/terms',
          '/legal/policy'
        ]
      }
    ]
  }
}