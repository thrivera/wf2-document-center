module.exports = {
  title: 'Wunderfund',
  description: 'Equity Crowdfunding in the Midwest',
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/sub/about' },
      { text: 'Jobs', link: '/sub/job' },
      { text: 'Contact Us!', link: '/sub/contact' },
      { text: 'Contribute', link: 'https://github.com/thrivera/wf2-document-center' }
    ],
    sidebar: [
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
          '/sub/offering',
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
          '/sub/startupagreement',
          '/sub/econtent'
        ]
      }
    ]
  }
}