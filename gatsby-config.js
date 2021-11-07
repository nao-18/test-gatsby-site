module.exports = {
  siteMetadata: {
    title: 'ESSENTIALS',
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `http://localhost:8000`,
    locale: `ja_JP`,
    fbappid: ``,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
