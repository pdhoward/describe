const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
/*
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
*/
  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
/*
  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulTag.edges.map(({ node }) => {
        createPage({
          path: `app/${node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
*/

  const loadApps = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProxies {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulProxies.edges.map(({ node }) => {
          createPage({
            path: `app/${node.slug}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  const loadAsks = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulAsk {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulAsk.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  //return Promise.all([loadPosts, loadPages, loadTags, loadAsks, loadApps])
  return Promise.all([loadPages, loadAsks, loadApps])
}
