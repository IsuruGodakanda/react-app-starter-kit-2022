const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    env: { HELLO_FROM_ENV_FILE: 'Hello from Cypress Env file!!!' },
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/**/*spec.{js,jsx,ts,tsx}',
  },
})
