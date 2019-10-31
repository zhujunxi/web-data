module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/web-data/" : "/",
  devServer: {
    proxy: {
        '/api': {
            target: 'https://serverless.vince.xin/',
            changeOrigin: true, //改变源
            pathRewrite: {
                '^/api': '/' //路径重写
            }
        }
    }
},
};
