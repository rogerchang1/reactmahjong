const path = require('path');

module.exports = (env) => {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
      port: env.PORT || 4001,
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};