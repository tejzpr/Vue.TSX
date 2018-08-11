module.exports = {
    baseUrl: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') ? '/static/' : '/',
    devServer: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true
        },
        '/auth': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      },
    },
    chainWebpack: (config) => {
      config.module
        .rule('images')
        .use('url-loader')
        .tap(options => Object.assign({}, options, { name: 'img/[name].[ext]' }));
    },
    css: {
      extract: {
        filename: '/css/[name].css',
        chunkFilename: '/css/[name].css',
      },
    },
    configureWebpack: {
      output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
      },
    },
}