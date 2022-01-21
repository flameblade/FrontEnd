const dotenv = require("dotenv");
const path = require("path");
const withAssetsImport = require("next-assets-import");
const Dotenv = require("dotenv-webpack");
const next = require("next");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

dotenv.config();

const prod = process.env.NODE_ENV === "production";

module.exports = withAssetsImport({
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking

      // all pages/static files before we attempt proxying

      {
        source: "/biz/:path*",

        destination: `http://localhost:8090/biz/:path*`,
      },
    ];
  },
  urlLoaderOptions: {
    rules: [
      {
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.node = {
      fs: "empty",
    };

    config.mode = prod ? "production" : "development";
    config.devtool = prod && "hidden-source-map";

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
});
