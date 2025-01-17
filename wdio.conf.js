import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

dotenv.config()

const capabilities = []

if (process.env.RUN_ANDROID === 'true') {
  capabilities.push({
    platformName: process.env.PLATFORM,
    'appium:deviceName': process.env.DEVICE,
    'appium:platformVersion': process.env.PLATFORM_VERSION,
    'appium:app': process.env.APP_BINARY_PATH,
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:appActivity': '.MainActivity',
  })
}

if (process.env.RUN_ANDROID_BROWSERSTACK === 'true') {
  capabilities.push({
    platformName: process.env.PLATFORM,
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      app: APP_ID,
    },
    'appium:deviceName': process.env.DEVICE,
    'appium:platformVersion': process.env.PLATFORM_VERSION,
    'appium:automationName': 'UiAutomator2',
  })
}

if (process.env.RUN_IOS === 'true') {
  capabilities.push({
    platformName: process.env.PLATFORM,
    'appium:deviceName': process.env.DEVICE,
    'appium:platformVersion': process.env.PLATFORM_VERSION,
    'appium:app': process.env.APP_BINARY_PATH,
    'appium:automationName': 'XCUITest',
  })
}

if (process.env.RUN_IOS_BROWSERSTACK === 'true') {
  capabilities.push({
    platformName: process.env.PLATFORM,
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      app: APP_ID,
    },
    'appium:deviceName': process.env.DEVICE,
    'appium:platformVersion': process.env.PLATFORM_VERSION,
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
  specs: ['./test/specs/**/*.test.js'],
  exclude: [],
  maxInstances: 1,
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
        environment: {
          Platform: process.env.PLATFORM,
          Device: process.env.DEVICE,
          'App Version': process.env.APP_VERSION,
          Automation: 'Appium',
          'Platform Version': process.env.PLATFORM_VERSION,
        },
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
      try {
        const failedTestsDir = path.join(process.cwd(), 'evidence_tests_failed')

        if (!fs.existsSync(failedTestsDir)) {
          fs.mkdirSync(failedTestsDir, { recursive: true })
        }

        const screenshotName = `${test.title.replace(/\s+/g, '_')}_${Date.now()}.png`
        const screenshotPath = path.join(failedTestsDir, screenshotName)

        const screenshot = await browser.takeScreenshot()

        fs.writeFileSync(screenshotPath, screenshot, 'base64')

        console.log(`Screenshot saved: ${screenshotPath}`)
      } catch (err) {
        console.error('Error taking screenshot:', err)
      }
    }
  },
}
