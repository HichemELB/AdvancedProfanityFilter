const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    bookmarkletFilter: './src/script/bookmarkletFilter.ts'
  },
  output: {
    path: path.resolve('dist'),
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: {
            comments: 'some',
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/typescript",
            ],
            "plugins": [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
            ]
          }
        }
      }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts']
  }
};