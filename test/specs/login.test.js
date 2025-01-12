import LoginPage from '../pageobjects/login.page'
import testData from '../data/test-data.json'

describe('Login Tests', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login(testData[0].username, testData[0].password)
    expect(await LoginPage.isLoggedIn()).toBe(true)
  })
})

testData.forEach(({ username, password }) => {
  it(`should test login for ${username}`, async () => {
    await LoginPage.login(username, password)
  })
})
