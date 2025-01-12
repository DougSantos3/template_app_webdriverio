import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
  get inputUsername() {
    return $('new UiSelector().text("Email")')
  }

  get inputPassword() {
    return $('new UiSelector().text("Password")')
  }

  get btnSubmit() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(16)',
    )
  }

  async login(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  open() {
    return super.open('login')
  }
}

export default new LoginPage()
