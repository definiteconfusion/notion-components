const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/pack.jsx', // Replace with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'notion-components', // Name of the global variable for UMD
      type: 'umd', // Universal Module Definition for compatibility
    },
    clean: true,
  },
  

  mode: process.env.NODE_ENV || 'production', // Set mode based on environment

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules from processing
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // Transpile modern JavaScript to ES5
              '@babel/preset-react', // Transpile JSX and other React-specific syntax
            ],
            plugins: [
              process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
            ].filter(Boolean), // Add react-refresh plugin in development mode only
          },
        },
      },
      {
        test: /\.css$/, // Add this rule to handle CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      // Add other loaders as needed (e.g., images, fonts)
    ],
  },

  plugins: [
    // Add plugins as needed (e.g., HTMLWebpackPlugin)
    process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean), // Filter out falsy values to conditionally include the plugin

  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },

  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve content from the output directory
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },

  performance: {
    hints: false, // Disable performance hints (optional)
  },
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false, // Source maps for easier debugging
};
