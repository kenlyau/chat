var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: {
        app: "./client/src/app.js",
        common: ["@horizon/client", "vue"]
    },
    output: {
       path: path.join(__dirname, "client/dist"),
       filename: "[name].js",
    },
    resolve: {
        alias: {
           "vue$": path.join(__dirname, "node_modules/vue/dist/vue.js")
           }
        
    },
    module: {
       loaders: [
           {
               test: /\.vue$/,
               loader: "vue"
           },
           {
               test: /\.js$/,
               loader: "babel",
               exclude: /node_modules/
           }
       ]
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
}
