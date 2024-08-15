const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Regular expression to match JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader for transpiling
          options: {
            presets: [
              "@babel/preset-react", // Preset for React
              "@babel/preset-env", // Preset for JavaScript environment
            ],
            plugins: [
              "@babel/plugin-transform-runtime", // Plugin for optimizing runtime code
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
