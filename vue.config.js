
module.exports = {
  lintOnSave: true,
  publicPath: './',
 
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/haha': {
        target: 'https://openapi.dataoke.com',   //代理接口 http://business.com
        changeOrigin: true,
        pathRewrite: {
          '^/haha': '/'    //代理的路径
        }
      }
    }
  }
};
