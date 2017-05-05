const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const isProd = process.env.NODE_ENV === 'production';

function HashBundlePlugin() {}

HashBundlePlugin.prototype.apply = (compiler) => {
  compiler.plugin('done', (statsData) => {
    const stats = statsData.toJson();

    if (!stats.errors.length) {
      const htmlFileName = 'index.html';
      const html = fs.readFileSync(path.join(__dirname, htmlFileName), 'utf8');
      const htmlOutput = html.replace(/\/build\/.?bundle\.js/, `${'/build/'}${stats.hash}${'.bundle.js'}`);

      fs.writeFileSync(path.join(__dirname, htmlFileName), htmlOutput);
    }
  });
};

const config = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src')],
  output: {
    filename: `${isProd ? '[hash].' : ''}bundle.js`,
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  context: __dirname,
  module: {
    rules: [{
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      include: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
      exclude: /node_modules\/(?!flexboxgrid)/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /node_modules\/(?!flexboxgrid)/,
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[hash].[ext]',
    }, {
      test: /\.(ttf|eot|svg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=[hash].[ext]',
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', '> 1%']
          })
        ],
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
  ],
  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    historyApiFallback: true,
  },
};

if (!isProd) {
  config.devtool = 'eval-source-map';
  config.devServer.hot = true;

  config.entry = [
    'babel-polyfill',
    path.resolve(__dirname, 'src'),

    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}`,
    'webpack/hot/only-dev-server',
  ];

  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NamedModulesPlugin());
} else {
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }));

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
    sourceMap: false,
  }));

  config.plugins.push(new HashBundlePlugin());
}

module.exports = config;