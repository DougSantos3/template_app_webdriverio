import { $ } from '@wdio/globals'

class WebViewPage {
  get navigationBarWebView() {
    return $('//android.widget.TextView[@text="󰖟"]')
  }

  get navigationDrawer() {
    return $('//android.widget.Button[@text="Toggle navigation bar"]')
  }

  get menuItemApi() {
    return $('//android.view.View[@content-desc="API"]')
  }

  get textInWebPage() {
    return $('//android.widget.TextView[@text="Introduction"]')
  }
}

export default new WebViewPage()
