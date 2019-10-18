const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        "./lib/bundle.js"
    ],
    plugins: [
        new CleanWebpackPlugin()
    ],
    mode: "production"
};
