const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "app.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/html/", to: __dirname + "/dist/" },
      { from: "./src/css/", to: __dirname + "/dist/css/" },
      {
        from: "./node_modules/katex/dist/katex.min.css",
        to: __dirname + "/dist/css/katex.min.css"
      },
      {
        from: "./node_modules/katex/dist/fonts",
        to: __dirname + "/dist/css/fonts"
      }
    ]),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] }
    })
  ]
};
