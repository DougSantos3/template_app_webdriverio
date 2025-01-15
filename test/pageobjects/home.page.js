import { $ } from '@wdio/globals'

class HomePage {
   get message() {
    return $(
      '//android.widget.TextView[@text="Demo app for the appium-boilerplate"]',
    )
  }
}

export default new HomePage()
