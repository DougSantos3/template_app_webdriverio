import FormsPage from '../pageobjects/forms.page'

describe('DropDown Interaction', () => {
  it('should type a random text and validate it', async () => {
    const newText = 'Texto aleatório'

    await FormsPage.inputField.setValue(newText)

    const fieldWithText = FormsPage.inputFieldWithText(newText)
    await expect(fieldWithText).toBeDisplayed()

    console.log('Texto validado: ', newText)
  })

  it('should validate the switch toggles correctly and displays the appropriate message', async () => {
    await SwitchPage.toogleSwitch.waitForDisplayed()

    let isSwitchOn = await SwitchPage.messagemTurnSwitchOff.isDisplayed()

    if (isSwitchOn) {
      console.log('Switch is ON. Toggling to OFF.')
      await SwitchPage.toogleSwitch.click()

      await expect(SwitchPage.messagemTurnSwitchON).toBeDisplayed()
    } else {
      console.log('Switch is OFF. Toggling to ON.')
      await SwitchPage.toogleSwitch.click()

      await expect(SwitchPage.messagemTurnSwitchOff).toBeDisplayed()
    }
  })

  it('should select an option from the dropdown', async () => {
    FormsPage.selectOptionDropDown('webdriver.io is awesome')
  })

  it('should select an option from the dropdown', async () => {
    FormsPage.selectOption('Appium is awesome')
  })

  it('should select an option from the dropdown', async () => {
    FormsPage.selectOption('This app is awesome')
  })

  it('should click Active and select an option from the modal', async () => {
    await FormsPage.selectOptionFromModal('askMeLater')
  })
})
