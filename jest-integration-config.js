const config = require('./jest.config')
// file extension (unit = spec and integration = test)
config.testMatch = ['**/*.test.ts']
module.exports = config
