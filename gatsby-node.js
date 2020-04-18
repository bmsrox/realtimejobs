const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/admin/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/admin/*"
    
    // Update the page.
    return createPage(page)
  }

  if (page.path.match(/^\/job/)) {
    page.matchPath = "/job/*"
    page.path = "/job/"
    page.component = path.resolve('src/pages/job.js')
    return createPage(page)
  }
}