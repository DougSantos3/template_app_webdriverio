import WebViewPage from '../pageobjects/web_view.page'

describe('Navigation Menu Test', () => {
  it('should click the navigation bar button, open the menu, select API and capture message', async () => {
    await WebViewPage.ButtonNavigationBar.click()

    await browser.pause(2000)
    await WebViewPage.navigationDrawer.click()

    await browser.pause(2000)
    await WebViewPage.menuItemApi.click()

    await browser.pause(2000)

    const message = await WebViewPage.messageApi

    await expect(message).toBeDisplayed()
    console.log('API Message: ', await message.getText())
  })
})
