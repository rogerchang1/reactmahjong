const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/index.tsx",
    devServer: {
      port: !isNaN(env.PORT) ? env.PORT : 3000,
      allowedHosts: "all",
      proxy: [
        {
          context: ["/api"],
          target:
            process.env.services__apiservice__https__0 ||
            process.env.services__apiservice__http__0,
          pathRewrite: { "^/api": "" },
          secure: false,
        },
      ],
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "bundle.js",
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(tsx|jsx|ts|js)?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: "file-loader",
        }
      ],
    },
  };
};
