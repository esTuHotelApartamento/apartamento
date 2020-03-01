module.exports = {
  pathPrefix: "/apartamento",
  siteMetadata: {
    title: `Es tu Hotel Apartamento`,
    description: `Reserva una habitación y disfruta de unas vacaciones unicas . Realizada para un proyecto en la universidad,`,
    author: `@avicdro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: false,
        displayName: false,
        minify: false,
      },
    },
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
        name: `es-tu-hotel-apartamento`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rgba(237,242,92, 1)`,
        theme_color: `rgba(237,242,92, 1)`,
        display: `minimal-ui`,
        icon: `src/images/logoHotelApartamento.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
