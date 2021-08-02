module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api'],
      },
    ],
  },
  transform: async (config, path) => {
    let priority
    let changefreq
    if (path.startsWith('/privacy') || path.startsWith('/terms')) {
      priority = 0.2
      changefreq = 'yearly'
    } else if (path.startsWith('/programs')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/classes')) {
      priority = 0.7
      changefreq = 'daily'
    } else if (path.startsWith('/gallery')) {
      priority = 0.7
      changefreq = 'daily'
    } else if (path.startsWith('/sitemap')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path.startsWith('/employment')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/') {
      priority = 0.9
      changefreq = 'monthly'
    } else {
      priority = 0.7
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
    }
  },
}
