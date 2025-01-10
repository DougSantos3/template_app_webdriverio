import LoginPage from '../pageobjects/login.page'

describe('Login Tests', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.login('user', 'password')
  })
})
