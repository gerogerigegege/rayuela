module.exports = {
  pathPrefix: `/rayuela`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-catch-links",
  ],
}
