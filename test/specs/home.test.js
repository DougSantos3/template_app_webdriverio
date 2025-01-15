import HomePage from '../pageobjects/home.page'

describe('Navigation Bar Teste', () => {
  it('should click the navigation bar button and capture the message', async () => {
    const message = await HomePage.message
    await expect(message).toBeDisplayed()

    const messageText = await message.getText()
    expect(messageText).toBe('Demo app for the appium-boilerplate')
  })
})
