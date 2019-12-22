webpack(config, options) {
  config.resolve = {
    alias: {
      '@src': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src', 'components'),
      '@containers': path.join(__dirname, 'src', 'containers'),
      '@store': path.join(__dirname, 'src', 'store'),
      '@interface': path.join(__dirname, 'src', '@types/interface.ts')
    },
    ...config.resolve
  }

  // config.resolve.alias['@src'] = path.join(__dirname, 'src')
  // config.resolve.alias['@components'] = path.join(__dirname, 'src', 'components')
  // config.resolve.alias['@interface'] = path.join(__dirname, 'src', '@types/interface.ts')
  // config.resolve.extensions = ['js', 'ts', 'tsx']
  return config
}