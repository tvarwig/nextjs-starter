module.exports = {
  siteUrl: 'https://www.example.com',
  default: {
    changeFreq: 'monthly',
    priority: 0.2,
  },
  pages: {
    index: {
      changeFreq: 'monthly',
      priority: 0.9,
      lastmod: '2021-08-03',
    },
    contact: {
      changeFreq: 'yearly',
      priority: 0.1,
      lastmod: '2021-08-03',
    },
  },
}
