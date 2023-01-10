const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#793EF5",
          "@layout-header-background": "#fff",
        },
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              encoding: "utf8",
            },
          },
        ],
      },
    ],
  },
};
