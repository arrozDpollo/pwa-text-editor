const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML file with injected bundles
      new HtmlWebpackPlugin({
        template: './index.html', // Path to your HTML file
        filename: 'index.html',
      }),

      // Generate a manifest file for the PWA
      new WebpackPwaManifest({
        name: 'Text Editor',
        short_name: 'TextEditor',
        description: 'A text editor that works offline.',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        display: 'standalone',
        start_url: '.',
        icons: [{
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('icons'),
        }],
      }),

      // Inject service worker
      new InjectManifest({
        swSrc: './src-sw.js', // Path to your custom service worker
        swDest: 'sw.js',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/, // Matches all CSS files
          use: ['style-loader', 'css-loader'], // Use these loaders to process CSS files
        },
        {
          test: /\.js$/, // Matches all JS files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Transpile ES6+ down to ES5
            },
          },
        },
      ],
    },
  };
};
