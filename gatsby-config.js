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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standolone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
