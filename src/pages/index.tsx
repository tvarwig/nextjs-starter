import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        canonical={process.env.SITE_URL}
        openGraph={{
          url: process.env.SITE_URL,
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: `${process.env.SITE_URL}/og-image-01.jpg`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: `${process.env.SITE_URL}/og-image-02.jpg`,
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: `${process.env.SITE_URL}/og-image-03.jpg` },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <h1>Template</h1>
    </div>
  )
}
