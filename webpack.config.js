const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: path.resolve(__dirname, 'node_modules'),
    query: {
      presets: [ 'es2015', 'react' ],
      plugins: [ 'transform-object-rest-spread' ]
    }
  },
  {
    test: /\.scss$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    loader: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader!sass-loader')
  }
];

const plugins = [
  new ExtractTextWebpackPlugin({ filename: 'styles.css', allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.bundle.js' })
];

const extensions = ['.js', '.jsx'];

module.exports = [{
  name: 'client',
  target: 'web',
  entry: {
    bundle: './client/index.js',
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
  resolve: {
    extensions: extensions
  }
}, {
  name: 'server',
  target: 'node',
  entry: {
    app: './app/core/App.js'
  },
  output: {
    path: path.join(__dirname, 'server/lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-09]+$/,
  module: {
    loaders: loaders
  },
  plugins:  [ new ExtractTextWebpackPlugin({ filename: 'styles.css', allChunks: true }) ],
  resolve: {
    extensions: extensions
  }
}];
