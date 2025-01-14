import LoginPage from '../pageobjects/login.page'
import testData from '../data/test-data.json'

describe('Login Tests', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login(testData[0].username, testData[0].password)
    expect(await LoginPage.isLoggedIn()).toBe(true)
  })

  it('should sign up', async () => {
    await LoginPage.open()
    await LoginPage.signUp(
      testData[0].username,
      testData[0].password,
      testData[0].password,
    )

    const message = LoginPage.messageSginedUp

    await expect(message).toBeDisplayed()
    console.log('API Message: ', await message.getText())
  })

  testData.forEach(({ username, password }) => {
    it(`should test login for ${username}`, async () => {
      await LoginPage.login(username, password)
    })
  })

  it('should display an error message when email is missing', async () => {
    await LoginPage.inputUsername.setValue('')

    await LoginPage.inputPassword.setValue('12345678')

    await LoginPage.btnSignUp.click()

    const message = await LoginPage.wrongMessageIncorrectEmail()
    await expect(message).toBeDisplayed()
    console.log('Validation Message: ', await message.getText())
  })

  it('should display an error message when password is missing', async () => {
    await LoginPage.inputUsername.setValue('test@example.com')

    await LoginPage.inputPassword.setValue('')

    await LoginPage.inputConfirmPassword.setValue('12345678')

    await LoginPage.btnSignUp.click()

    const message = await LoginPage.wrongMessageIncorrectPassword()
    await expect(message).toBeDisplayed()
    console.log('Validation Message: ', await message.getText())
  })

  it('should display an error message when confirm password is missing', async () => {
    await LoginPage.inputUsername.setValue('test@example.com')

    await LoginPage.inputPassword.setValue('12345678')

    await LoginPage.inputConfirmPassword.setValue('')

    await LoginPage.btnLogin.click()

    const message = await LoginPage.wrongMessageIncorrectConfirmPassword()
    await expect(message).toBeDisplayed()
    console.log('Validation Message: ', await message.getText())
  })
})
