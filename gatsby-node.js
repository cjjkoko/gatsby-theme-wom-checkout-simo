/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Promise API
const path = require(`path`)

function withDefaults(themeOptions) {
  const basePath = themeOptions.basePath || `/`
  return {
    basePath
  }
}

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
exports.onCreateNode = ({ node }) => {
}
exports.onCreatePage = ({ page, actions },plugin) => {
  const { createPage,deletePage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    // const basePath = withDefaults(plugin).basePath
    // page.matchPath = basePath+`/app/*`
    // // Update the page.
    // createPage(Object.assign({},page,{
    //   path:basePath+page.path,
    //   context: {
    //      basePath
    //   }
    // }))
    // deletePage(page)
    createPage(page)
  }
}
exports.onCreateWebpackConfig = ({
                                   stage,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions
                                 }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@@': path.resolve(__dirname)
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    }
  })
}
