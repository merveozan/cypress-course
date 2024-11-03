const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: true,
      html: true,
      json: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
      toConsole: true,
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  // Mochawesome raporları için eklenti
    },
    screenshotOnRunFailure: true,  // Hata durumunda ekran görüntüsü alır
    video: true, 
    videoUploadOnPasses: true, // Başarılı testlerin de videosunu kaydeder
    videoCompression: 15  // Sıkıştırma seviyesini 15 olarak ayarlar
  },
  
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});