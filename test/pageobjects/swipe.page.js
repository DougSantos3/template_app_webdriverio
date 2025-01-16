import { $ } from '@wdio/globals'

class SwipePage {
  get navigationBarSwipe() {
    return $('//android.view.View[@content-desc="Swipe"]')
  }

  get card() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[1]')
  }

  get messageGreatCommunity() {
    return $('//android.widget.TextView[@text="GREAT COMMUNITY"]')
  }

  get messageYouFoundMe() {
    return $('//android.widget.TextView[@text="You found me!!!"]')
  }

  async scrollUp() {
    const { width, height } = await driver.getWindowSize()
    const startX = Math.floor(width / 2) 
    const startY = Math.floor(height * 0.8) 
    const endY = Math.floor(height * 0.2) 

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 800, x: startX, y: endY }, 
          { type: 'pointerUp', button: 0 },
        ],
      },
    ])

    await driver.releaseActions()
  }

  async swipeRight() {
    const { width, height } = await driver.getWindowSize()
    const startX = Math.floor(width * 0.8) 
    const endX = Math.floor(width * 0.2) 
    const y = Math.floor(height / 2) 

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 800, x: endX, y }, 
          { type: 'pointerUp', button: 0 },
        ],
      },
    ])

    await driver.releaseActions()
  }
}
export default new SwipePage()
