const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  projectId: '',
  reporter: 'mochawesome',
  retries: {
    runMode: 2,
    openMode: 1,
  },
    env: {
    testUrl: 'https://www.automationexercise.com/',
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 50000,
  // e2e: {
  //   // We've imported your old cypress plugins here.
  //   // You may want to clean this up later by importing these.
  //   setupNodeEvents(on, config) {
  //     return require('./cypress/plugins/index.js')(on, config)
  //   },
  //   specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  // },


});
