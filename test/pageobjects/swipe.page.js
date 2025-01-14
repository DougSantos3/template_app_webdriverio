import { $ } from '@wdio/globals'

class SwipePage {
  get card() {
    return $('new UiSelector().description("card").instance(0)')
  }

  get messageGreatCommunity() {
    return $('new UiSelector().text("GREAT COMMUNITY")')
  }

  get messageYouFoundMe() {
    return $('new UiSelector().text("You found me!!!")')
  }

  async swipeToNextPage() {
    const element = await this.card

    const rect = await element.getRect()

    const startX = rect.x + rect.width / 2
    const startY = rect.y + rect.height / 2

    const endX = startX + 500
    const endY = startY

    await browser.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'moveTo', x: endX, y: endY },
      { action: 'release' },
    ])
  }
}
export default new SwipePage()
