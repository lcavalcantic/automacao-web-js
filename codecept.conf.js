const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codecept-js-web',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationpratice.com.br/',
      browser: process.env.BROWSER || 'chromium',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    update_page: "./pages/update_page.js",
  },
  bootstrap: async () => {
    await server.start
  },
  teardown: async () => {
    await server.stop
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'allure-results'
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    mocha: {
      reporterOptions: {
      }
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    auth: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/');
            I.click('Login');
            I.waitForElement('#user');
            I.fillField('#user', 'leticia@teste.com');
            I.waitForElement('#password')
            I.fillField('#password', secret('123456'));
            I.click('#btnLogin');
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
            I.amOnPage('/');
            I.see('Letícia Cavalcanti');
          }
        }
      }
    }
  }
}