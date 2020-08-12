const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
          
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules/'
          },
          {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: {
              loader: `file-loader`,
            }
          },
        ],
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html')
      })
    ]
}