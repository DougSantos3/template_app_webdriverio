import WebViewPage from '../pageobjects/web_view.page'

describe('Navigation Menu Test', () => {
  it('should click the navigation bar button, open the menu, select API and capture message', async () => {
    await WebViewPage.navigationBarWebView.click()
    await WebViewPage.navigationDrawer.click()
    await WebViewPage.menuItemApi.click()
    const message = await WebViewPage.textInWebPage
    await expect(message).toBeDisplayed()

    const messageText = await message.getText()
    expect(messageText).toBe('Introduction')
  })
})
