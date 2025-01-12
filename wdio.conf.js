import dotenv from 'dotenv'

dotenv.config()

const capabilities = []

if (process.env.RUN_ANDROID_LOCAL === 'true') {
  capabilities.push({
    platformName: 'Android',
    'appium:deviceName': 'Smarthphone - Pixel 8 Pro API 35',
    'appium:platformVersion': '15.0',
    'appium:app': './apps/android.wdio.native.app.v1.0.8.apk',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:appActivity': '.MainActivity',
  })
}

if (process.env.RUN_ANDROID_BROWSERSTACK === 'true') {
  capabilities.push({
    platformName: 'Android',
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      app: 'bs://<app-id>',
    },
    'appium:deviceName': 'Samsung Galaxy S22',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
  })
}

if (process.env.RUN_IOS_LOCAL === 'true') {
  capabilities.push({
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 13',
    'appium:platformVersion': '15.0',
    'appium:app': './path/to/ios.app',
    'appium:automationName': 'XCUITest',
  })
}

if (process.env.RUN_IOS_BROWSERSTACK === 'true') {
  capabilities.push({
    platformName: 'iOS',
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      app: 'bs://<app-id>',
    },
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'XCUITest',
  })
}

const services = ['appium']
if (
  process.env.RUN_ANDROID_BROWSERSTACK === 'true' ||
  process.env.RUN_IOS_BROWSERSTACK === 'true'
) {
  services.push('browserstack')
}

export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: capabilities,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: services,
  port: 4723,
  path: '/wd/hub',
  framework: 'mocha',
  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    'json',
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries },
  ) {
    if (!passed) {
      await browser.takeScreenshot()
    }
  },
}
