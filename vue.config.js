const path = require('path');

const devServerPort = 8080;

const alias = {
  '~@': './src',
  '@': './src',
  '@component': './src/components',
};

const suffixDir = '/company/'

module.exports = {
  publicPath: suffixDir,
  outputDir: 'dist' + suffixDir,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: devServerPort,
    open: false,
    progress: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        target: "http://localhost:8000",
        changeOrigin: true,
        ws: true,
      },
    },
  },
  pluginOptions: {},
  chainWebpack(config) {
    for (const key in alias) {
      config.resolve.alias.set(key, path.join(__dirname, alias[key]));
    }

    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-eval-source-map'));
    config.plugins.delete('progress');
    config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [
      {
        format: 'compact',
      },
    ]);
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          components: {
            name: 'chunk-components',
            test: path.resolve(__dirname, 'src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
};
