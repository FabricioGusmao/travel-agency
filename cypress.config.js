const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl:'www.blazedemo.com/'
//     },
//     fixturesFolder:false,
//     video:false
//   },
// );

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
  },
});
