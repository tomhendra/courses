const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/post.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
