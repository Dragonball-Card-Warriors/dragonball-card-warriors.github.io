const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'docs'),
    // `library` determines the name of the global variable
    libraryTarget: 'var',
    library: 'App',
  },
};