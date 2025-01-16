import FormsPage from '../pageobjects/forms.page'

describe('DropDown Interaction', () => {
  beforeEach(async () => {
    await browser.reloadSession()
    await FormsPage.navigationBarWebForms.click()
  })

  it('should type a random text and validate it', async () => {
    const randomText = 'random text'

    await FormsPage.inputField.setValue(randomText)

    const fieldWithText = FormsPage.inputFieldWithText
    await expect(fieldWithText).toBeDisplayed()

    console.log('validated text: ', randomText)
  })

  it('should validate the switch toggles correctly and displays the appropriate message', async () => {
    await FormsPage.toogleSwitch.waitForDisplayed()

    let textIsSwitch = await FormsPage.messagemTurnSwitch.getText()
    const isSwitchOn = 'Click to turn the switch ON'
    const isSwitchOff = 'Click to turn the switch OFF'

    if (textIsSwitch === isSwitchOn) {
      console.log('Switch is ON. Toggling to OFF.')
      await FormsPage.toogleSwitch.click()

      let updateTextIsSwitch = await FormsPage.messagemTurnSwitch.getText()

      expect(updateTextIsSwitch).toBe(isSwitchOff)
    } else {
      console.log('Switch is OFF. Toggling to ON.')
      await FormsPage.toogleSwitch.click()

      let updateTextIsSwitch = await FormsPage.messagemTurnSwitch.getText()

      expect(updateTextIsSwitch).toBe(isSwitchOff)
    }
  })

  it('should select an option webdriver.io is awesome', async () => {
    const expectedOption = 'webdriver.io is awesome'

    await FormsPage.selectOptionDropDown(expectedOption)

    const actualOption = await FormsPage.textDropDown.getText()

    expect(actualOption).toBe(expectedOption)
  })

  it('should select an option Appium is awesome', async () => {
    const expectedOption = 'Appium is awesome'

    await FormsPage.selectOptionDropDown(expectedOption)

    const actualOption = await FormsPage.textDropDown.getText()

    expect(actualOption).toBe(expectedOption)
  })

  it('should select an option This app is awesome', async () => {
    const expectedOption = 'This app is awesome'

    await FormsPage.selectOptionDropDown(expectedOption)

    const actualOption = await FormsPage.textDropDown.getText()

    expect(actualOption).toBe(expectedOption)
  })

  it('should click Active and select an option from the modal', async () => {
    await FormsPage.selectOptionFromModal('askMeLater')
  })

  it('should click Active and select an option from the modal', async () => {
    await FormsPage.selectOptionFromModal('cancel')
  })

  it('should click Active and select an option from the modal', async () => {
    await FormsPage.selectOptionFromModal('ok')
  })
})
