module.exports = {
  siteMetadata: {
    title: `Rayuela`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/capitulos`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
  ],
}
