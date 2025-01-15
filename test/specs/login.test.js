import LoginPage from '../pageobjects/login.page'
import testData from '../data/test-data.json'
import { faker } from '@faker-js/faker'

describe('Login Tests', () => {
  beforeEach(async () => {
    await browser.reloadSession()
    await LoginPage.navigationBarLogin.click()
  })

  const email = faker.internet.email()
  const password = faker.internet.password(8, true)

  it('should login with valid credentials', async () => {
    await LoginPage.login(email, password)

    const message = await LoginPage.messageLoginSuccess
    await expect(message).toBeDisplayed()

    const messageText = await message.getText()
    expect(messageText).toBe('You are logged in!')
  })

  it('should sign up', async () => {
    await LoginPage.signUp(email, password, password)

    const message = LoginPage.messageSignedUp

    await expect(message).toBeDisplayed()

    /* quando clica no botão de confirmar o botão se perde e não consegue depois identifica
    a modal para capturar o texto de Signed Up!

    expect(messageText).toBe('Signed Up!') */
  })

  testData.forEach(({ username, password }) => {
    it(`should test login for ${username}`, async () => {
      await LoginPage.login(username, password)
    })
  })

  it('should display an error message when email is missing', async () => {
    await LoginPage.linkSignUp.click()
    await LoginPage.inputUsername.setValue('')
    await LoginPage.inputPassword.setValue(password)
    await LoginPage.inputConfirmPassword.setValue(password)
    await LoginPage.btnSignUp.click()

    const message = await LoginPage.wrongMessageIncorrectEmail
    await expect(message).toBeDisplayed()
    const messageText = await message.getText()

    expect(messageText).toBe('Please enter a valid email address')
  })

  it('should display an error message when password is missing', async () => {
    await LoginPage.linkSignUp.click()
    await LoginPage.inputUsername.setValue(email)
    await LoginPage.inputPassword.setValue('')
    await LoginPage.inputConfirmPassword.setValue(password)
    await LoginPage.btnSignUp.click()

    const elementIncorrectPassword = await LoginPage.wrongMessageIncorrectPassword
    await expect(elementIncorrectPassword).toBeDisplayed()
    const messageTextIncorrectPassword = await elementIncorrectPassword.getText()

    const elementIncorrectConfirmPassword = await LoginPage.wrongMessageIncorrectConfirmPassword
    await expect(elementIncorrectConfirmPassword).toBeDisplayed()
    const messageTextIncorrectConfirmPassword = await elementIncorrectConfirmPassword.getText()

    expect(messageTextIncorrectPassword).toBe('Please enter at least 8 characters')
    expect(messageTextIncorrectConfirmPassword).toBe('Please enter the same password',)
  })
  it('should display an error message when confirm password is missing', async () => {
    await LoginPage.linkSignUp.click()
    await LoginPage.inputUsername.setValue(email)
    await LoginPage.inputPassword.setValue(password)
    await LoginPage.inputConfirmPassword.setValue('')
    await LoginPage.btnSignUp.click()

    const message = await LoginPage.wrongMessageIncorrectConfirmPassword
    await expect(message).toBeDisplayed()
    const messageText = await message.getText()

    expect(messageText).toBe('Please enter the same password')
  })
})
