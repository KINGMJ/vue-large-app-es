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
      entry: path.resolve(__appsPath, './project/core/index.js')
    }
  },
  devServer: {
    disableHostCheck: true,
    host: 'dev.leangoo.com',
    proxy: {
      '/api': {
        target: 'http://dev.leangoo.com:80',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        constant: path.resolve(__appsPath, './shared/constant/index.js'),
        api: path.resolve(__appsPath, './shared/api/index.js')
      }
    }
  },
  lintOnSave: false
}
