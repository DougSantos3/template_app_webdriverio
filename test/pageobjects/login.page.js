import { $ } from '@wdio/globals'

class LoginPage {
  get inputUsername() {
    return $('new UiSelector().text("Email")')
  }

  get inputPassword() {
    return $('new UiSelector().text("Password")')
  }

  get btnLogin() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(16)',
    )
  }

  get inputConfirmPassword() {
    return $('new UiSelector().text("Confirm password")')
  }

  get btnSignUp() {
    return $('new UiSelector().text("SIGN UP")')
  }

  async login(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnLogin.click()
  }

  async signUp(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.inputConfirmPassword.setValue(password)
    await this.btnSignUp.click()
  }

  get messageSignedUp() {
    return $('new UiSelector().resourceId("android:id/message")')
  }

  get wrongMessageIncorrectEmail() {
    return $('new UiSelector().text("Please enter a valid email address")')
  }

  get wrongMessageIncorrectPassword() {
    return $('new UiSelector().text("Please enter at least 8 characters")')
  }

  get wrongMessageIncorrectConfirmPassword() {
    return $('new UiSelector().text("Please enter the same password")')
  }
}

export default new LoginPage()
