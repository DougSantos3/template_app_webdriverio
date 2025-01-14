import { $ } from '@wdio/globals'

class WebViewPage {
  get btnNavigationBar() {
    return $('new UiSelector().text("󰖟")')
  }

  get navigationDrawer() {
    return $('new UiSelector().className("android.webkit.WebView")')
  }

  get menuItemDocs() {
    return $('new UiSelector().text("Docs")')
  }

  get menuItemApi() {
    return $('new UiSelector().text("API")')
  }

  get menuItemBlog() {
    return $('new UiSelector().text("Blog")')
  }

  get menuItemContribute() {
    return $('new UiSelector().text("Contribute")')
  }

  get menuItemCommunity() {
    return $('new UiSelector().text("Community")')
  }

  get menuItemSponsor() {
    return $('new UiSelector().text("Sponsor")')
  }

  get menuItemV9() {
    return $('new UiSelector().text("v9")')
  }

  get menuItemLanguages() {
    return $('new UiSelector().text("Languages")')
  }

  get messageApi() {
    return $(
      'new UiSelector().text("Welcome to the WebdriverIO API docs. These pages contain reference materials for all implemented protocol bindings and convenience commands. Protocol commands, including ")',
    )
  }
}

export default new WebViewPage()
