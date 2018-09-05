const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

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

  const loadNotify = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulNotify {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulNotify.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/notify.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  const loadNotifyPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulNotify {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulNotify.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/notifypost.js`),
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
  
  return Promise.all([loadPages, loadAsks, loadApps, loadNotify, loadNotifyPosts])
}
