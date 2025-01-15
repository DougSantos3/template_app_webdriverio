import { $ } from '@wdio/globals'

class LoginPage {
  get navigationBarLogin() {
    return $('//android.widget.TextView[@text="󰍂"]')
  }

  get linkSignUp() {
    return $('//android.widget.TextView[@text="Sign up"]')
  }

  get inputUsername() {
    return $('//android.widget.EditText[@content-desc="input-email"]')
  }

  get inputPassword() {
    return $('//android.widget.EditText[@content-desc="input-password"]')
  }

  get btnLogin() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup',
    )
  }

  get inputConfirmPassword() {
    return $('//android.widget.EditText[@content-desc="input-repeat-password"]')
  }

  get btnSignUp() {
    return $('//android.widget.TextView[@text="SIGN UP"]')
  }

  async login(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnLogin.click()
  }

  async signUp(username, password) {
    await this.linkSignUp.click()
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.inputConfirmPassword.setValue(password)
    await this.btnSignUp.click()
  }

  get messageLoginSuccess() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]')
  }

  get messageSignedUp() {
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
  }

  get wrongMessageIncorrectEmail() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]',
    )
  }

  get wrongMessageIncorrectPassword() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]',
    )
  }

  get wrongMessageIncorrectConfirmPassword() {
    return $(
      '//android.widget.TextView[@text="Please enter the same password"]',
    )
  }
}

export default new LoginPage()
