/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kesch.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://kesch.dev/sitemap.xml',
    ],
  },
} 