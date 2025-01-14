import { $ } from '@wdio/globals'

class HomePage {
  get btnNavigationBar() {
    return $('new UiSelector().text("󰚡")')
  }

  get message() {
    return $('new UiSelector().text("Demo app for the appium-boilerplate")')
  }
}

export default new HomePage()
