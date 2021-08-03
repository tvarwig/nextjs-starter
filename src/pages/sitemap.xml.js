import fs from 'fs'
import sitemapConfig from '../../sitemap.config'

const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const staticPages = fs
    .readdirSync('src/pages')
    .filter((staticPage) => !['_app.tsx', '_document.tsx', '_error.tsx', 'sitemap.xml.js', 'api', 'robots.txt.js'].includes(staticPage))
    .map((staticPagePath) => staticPagePath.split('.').slice(0, -1).join('.'))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
            <url>
              <loc>${sitemapConfig.siteUrl}/${page === 'index' ? '' : page}</loc>
              <lastmod>${sitemapConfig.pages[page].lastmod || new Date().toISOString()}</lastmod>
              <changefreq>${sitemapConfig.pages[page].changeFreq || sitemapConfig.default.changeFreq}</changefreq>
              <priority>${sitemapConfig.pages[page].priority || sitemapConfig.default.priority}</priority>
            </url>
          `,
        )
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
