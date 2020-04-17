const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/paci-szop' : '';

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/order": { page: "/order" },
      "/conversion-pack": { page: "/conversion-pack" },
      "/battery": { page: "/battery" },
      "/contact": { page: "/contact" },
    }
  },
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}