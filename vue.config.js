module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/pages/index.ts',
      // the source template
      template: 'src/pages/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    orders: {
      // entry for the page
      entry: 'src/pages/orders.ts',
      // the source template
      template: 'src/pages/orders.html',
      // output as dist/index.html
      filename: 'orders.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Orders Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
}
