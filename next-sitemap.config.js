/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://careers-vgrow.netlify.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };