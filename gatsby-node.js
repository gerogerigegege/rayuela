exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query Chapters {
      allMdx {
        nodes {
          slug
          frontmatter {
            capitulo
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {
    const current = node.frontmatter.capitulo
    createPage({
      path: "capitulo/" + node.slug,
      component: require.resolve(`./src/templates/chapter.js`),
      context: {
        ...node,
        limit: current !== 0 ? current : 1,
      },
    })
  })
}
