const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output:{
    publicPath:'http://localhost:2000/'
  },
  devServer: {
    port: 2000,
    historyApiFallback: true
  },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react', '@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                "style-loader",
                "css-loader",
                "postcss-loader"
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}