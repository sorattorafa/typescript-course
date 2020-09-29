module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
    // version needs to be equal to production
      version: '4.0.3',
      skipMD5: true
    },
    autoStart: false
  }
}
