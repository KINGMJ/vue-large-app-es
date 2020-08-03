const path = require('path')
const __appsPath = path.resolve(__dirname, './src/apps')

module.exports = {
  pages: {
    board: {
      entry: path.resolve(__appsPath, './board/index.js')
    },
    home: {
      entry: path.resolve(__appsPath, './home/index.js')
    },
    mindmap: {
      entry: path.resolve(__appsPath, './mindmap/index.js')
    },
    profile: {
      entry: path.resolve(__appsPath, './profile/index.js')
    },
    project: {
      entry: path.resolve(__appsPath, './project/index.js')
    }
  },

  lintOnSave: false
}
