module.exports = {
  siteMetadata: {
    title: `Słoik sukcesów`,
    description: `See your successes in one place!`,
    author: `@wakeupandcode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `success-jar`,
        short_name: `success-jar`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6A0B21`,
        display: `minimal-ui`,
        icon: `src/images/wakeup_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `amatic+SC`,
          `josefin+sans`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
