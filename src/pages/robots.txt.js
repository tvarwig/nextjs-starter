const Robots = () => {}

export const getServerSideProps = ({ res }) => {
  const robots = `# *
User-agent: *
Allow: /

# *
User-agent: *
Disallow: /api

# Host
Host: ${process.env.SITE_URL}

# Sitemaps
Sitemap: ${process.env.SITE_URL}/sitemap.xml
  `

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()

  return {
    props: {},
  }
}

export default Robots
