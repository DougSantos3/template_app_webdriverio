import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
  get inputUsername() {
    return $('')
  }

  get inputPassword() {
    return $('')
  }

  get btnSubmit() {
    return $('')
  }

  async login(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  open() {
    return super.open('')
  }
}

export default new LoginPage()
