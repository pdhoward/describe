const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // function to collect all data for the Pages Contenttype

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

  ////////////////////////////////////////////
  /////    content collection         ///////
  ////    with pages/ask.js          ///////
  /////////////////////////////////////////

  // build page for each individual action unit published for the Ask Pattern

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

  // build a gallery of all Ask Pattern action units which are consumed by the same proxy app 

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
            component: path.resolve(`./src/templates/proxies.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })


  ////////////////////////////////////////////
  /////    content collection         ///////
  ////    with pages/notify.js          ///////
  /////////////////////////////////////////

  // build page for each individual action unit published for the Notify Pattern

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

  // build a gallery of all Notify Pattern action units which are consumed by the same proxy app 

  const loadNotifyApps = new Promise((resolve, reject) => {
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
            component: path.resolve(`./src/templates/proxies.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  ////////////////////////////////////////////
  /////    content collection         ///////
  ////    with pages/sell.js          ///////
  /////////////////////////////////////////

  // build page for each individual action unit published for the Sell Pattern

  const loadSellPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSell {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulSell.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/sellpost.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  // build a gallery of all Sell Pattern action units which are consumed by the same proxy app 

  const loadSellApps = new Promise((resolve, reject) => {
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
            component: path.resolve(`./src/templates/proxies.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })
  
  return Promise.all([loadPages, loadAsks, loadApps, loadNotifyPosts, loadNotifyApps, loadSellPosts, loadSellApps])
  
}
