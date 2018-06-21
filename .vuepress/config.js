module.exports = {
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'About', link: '/sub/about' },
      { text: 'Contribute', link: 'https://github.com/thrivera/wf2-document-center' },
      { text: 'Contact Us!', link: '/sub/contact' }
    ],
    sidebar: [
      '/',
      {
        title: 'Crowdfunding',
        collapsable: false,
        children: [
          '/sub/history',
          '/sub/crowdfunding'
        ]
      },
      {
        title: 'FAQs',
        collapsable: false,
        children: [
          '/sub/investor',
          '/sub/issuer'
        ]
      },
      {
        title: 'Legal',
        collapsable: false,
        children: [
          '/sub/terms',
          '/sub/policy',
          '/sub/investoragreement',
          '/sub/startupagreement'
        ]
      }
    ]
  }
}