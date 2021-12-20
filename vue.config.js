module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("webp")
      .test(/\.(jpe?g|png)$/i)
      .use("file-loader")
      .loader("file-loader")
      .loader("webp-loader?{quality: 90}");
  },
};
