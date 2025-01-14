import { $ } from '@wdio/globals'

class FormsPage {
  get inputField() {
    return $('new UiSelector().resourceId("RNE__Input__text-input")')
  }

  inputFieldWithText(text) {
    return $(`new UiSelector().text("${text}")`)
  }

  get toogleSwitch() {
    return $('new UiSelector().description("switch")')
  }

  get messagemTurnSwitchON() {
    return $('new UiSelector().text("Click to turn the switch ON")')
  }

  get messagemTurnSwitchOff() {
    return $('new UiSelector().text("Click to turn the switch OFF")')
  }

  get dropDown() {
    return $('new UiSelector().resourceId("text_input")')
  }

  get btnActive() {
    return $('new UiSelector().text("Active")')
  }

  get btnAskMeLater() {
    return $('new UiSelector().resourceId("android:id/button3")')
  }

  get btnCancel() {
    return $('new UiSelector().resourceId("android:id/button2")')
  }

  get btnOk() {
    return $('new UiSelector().resourceId("android:id/button1")')
  }

  async selectOptionDropDown(optionText) {
    await this.dropDown.click()
    const option = $(`new UiSelector().text("${optionText}")`)

    if (!(await option.isDisplayed())) {
      throw new Error(`Option "${optionText}" not found`)
    }

    await option.click()
  }

  async selectOptionFromModal(option) {
    await this.btnActive.click()

    await BrowserstackService.pause(1000)

    switch (option) {
      case 'askMeLater':
        await this.btnAskMeLater.click()
        break
      case 'cancel':
        await this.btnCancel.click()
        break
      case 'ok':
        await this.btnOk.click()
        break
      default:
        throw new Error(`Option "${option}" not recognized`)
    }
  }
}

export default new FormsPage()
