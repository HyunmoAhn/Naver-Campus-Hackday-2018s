const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main/js/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web/build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(__dirname, 'src/main/js/scss', '**/_*.scss'),
              ],
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|cur)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      '__DEV__': process.env.NODE_ENV === 'development',
      '__PROD__': process.env.NODE_ENV === 'production',
    }),
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/main/js/api'),
      assets: path.resolve(__dirname, 'src/main/js/assets'),
      constants: path.resolve(__dirname, 'src/main/js/constants'),
      components: path.resolve(__dirname, 'src/main/js/components'),
      containers: path.resolve(__dirname, 'src/main/js/containers'),
      routes: path.resolve(__dirname, 'src/main/js/routes'),
      scss: path.resolve(__dirname, 'src/main/js/scss'),
      store: path.resolve(__dirname, 'src/main/js/store'),
      utils: path.resolve(__dirname, 'src/main/js/utils'),
    },
    extensions: ['.js', '.jsx'],
  },
};
