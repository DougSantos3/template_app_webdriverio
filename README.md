<h1 align="center">Mobile application automation with WebDriverIO and Appium</h1>
<br />


<br>
<br>

This is a Test QA - project using [`webDriverIO`](https://webdriver.io/).
and Appium [`Appium`](https://appium.io/docs/en/latest/)

## Getting Started

You need to download the packages:

```bash
Node: v20.18.0
```

```bash
# npm version: 10.9.0
npm install -g pnpm
```
```bash
pnpm install
```

Run tests:

```bash
# Local Android device
pnpm test:android:local

# BrowserStack Android device
pnpm test:android:browserstack

# Local IOS device
pnpm test:ios:local

# BrowserStack IOS device
pnpm test:ios:browserstack
```

## Capture elements
### You need to use the command in the terminal to keep Appium running.
`appium --base-path /wd/hub`

<br>

You need to download the [`appium-inspector`](https://github.com/appium/appium-inspector/releases/tag/v2024.12.1).


### Enter Credentials
`Remote Host: 127.0.0.1`
`Remote Port: 4723` 
`Remote Path: `

```json
{
  "platformName": "Android",
  "appium:platformVersion": "15.0",
  "appium:deviceName": "Smarthphone - Pixel 8 Pro API 35",
  "appium:app": "./apps/android.wdio.native.app.v1.0.8.apk",
  "appium:appPackage": "com.wdiodemoapp",
  "appium:appActivity": ".MainActivity",
  "appium:automationName": "UiAutomator2"
} 
```
### Example of how the Appium Inspector looks
![alt text](/images/appium_inspector.png)

<br>

## Tips
### To discover the appPackage
`adb install path_from_the_root_of_your_repository/test_qa_app/apps/android.wdio.native.app.v1.0.8.apk`

### Check which package 
`adb shell pm list packages | grep wdio`
