module.exports = {
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Contribute', link: 'https://github.com/thrivera/wf2-document-center' },
      { text: 'Contact Us!', link: '/contact' }
    ],
    sidebar: [
      '/',
      {
        title: 'Crowdfunding',
        collapsable: false,
        children: [
          '/cf/cfhistory',
          '/cf/crowdfunding'
        ]
      },
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