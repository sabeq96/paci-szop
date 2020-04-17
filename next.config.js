const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/battery": { page: "/battery" },
      "/conversion": { page: "/conversion" },
      "/contact": { page: "/contact" },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/paci-szop/docs' : '',
}