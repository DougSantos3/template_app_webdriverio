import SwipePage from '../pageobjects/swipe.page'

describe('Card Actions Validation', () => {
  it('should swipe the card to the right and validate the "GREAT COMMUNITY" message', async () => {
    await SwipePage.card.waitForDisplayed()

    const startX = await SwipePage.card.getLocation('x')
    const startY = await SwipePage.card.getLocation('y')
    const endX = startX + 300
    const endY = startY

    await browser.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 500, x: endX, y: endY },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ])

    await expect(SwipePage.messageGreatCommunity).toBeDisplayed()
  })

  it('should scroll down and validate the "You found me!!!" message', async () => {
    await browser.execute('mobile: scroll', { direction: 'down' })

    await SwipePage.messageYouFoundMe.waitForDisplayed()

    await expect(SwipePage.messageYouFoundMe).toBeDisplayed()
  })
})
