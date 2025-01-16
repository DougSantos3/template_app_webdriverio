import { $ } from '@wdio/globals'

class FormsPage {
  get navigationBarWebForms() {
    return $('//android.view.View[@content-desc="Forms"]')
  }

  get inputField() {
    return $('//android.widget.EditText[@content-desc="text-input"]')
  }

  get inputFieldWithText() {
    return $('//android.widget.TextView[@content-desc="input-text-result"]')
  }

  get toogleSwitch() {
    return $('//android.widget.Switch[@content-desc="switch"]')
  }

  get messagemTurnSwitch() {
    return $('//android.widget.TextView[@content-desc="switch-text"]')
  }

  get dropDown() {
    return $('//android.widget.EditText[@resource-id="text_input"]')
  }

  get btnActive() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup',
    )
  }

  get btnAskMeLater() {
    return $('id=android:id/button3')
  }

  get btnCancel() {
    return $('id=android:id/button2')
  }

  get btnOk() {
    return $('id=android:id/button1')
  }

  get textDropDown() {
    return $('//android.widget.EditText[@resource-id="text_input"]')
  }

  async selectOptionDropDown(optionText) {
    await this.dropDown.click()
    const option = $(
      `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${optionText}"]`,
    )

    if (!(await option.isDisplayed())) {
      throw new Error(`Option "${optionText}" not found`)
    }
    await option.click()
  }

  async selectOptionFromModal(option) {
    await this.btnActive.click()

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
