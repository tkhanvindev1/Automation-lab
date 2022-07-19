const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('3 Movie test functionality', async () => {

test('add a movie', async () => {
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Iron Man')
    await driver.sleep(2000)

    const addButton = await driver.findElement(By.css('button'))
    await addButton.click()
    await driver.sleep(2000)

    const crossMovie = await driver.findElement(By.xpath('//ul/li/span'))
    await crossMovie.click()
    await driver.sleep(2000)
    
})

test('delete a movie', async () => {
    const deleteBtn = await driver.findElement(By.xpath('//ul/li/button')).click()
    await driver.sleep(2000)
})

test('notifications are visible', async () => {
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Iron Man')
    await driver.sleep(2000)

    const addButton = await driver.findElement(By.css('button'))
    await addButton.click()
    await driver.sleep(2000)

    const crossMovie = await driver.findElement(By.xpath('//ul/li/span'))
    await crossMovie.click()
    await driver.sleep(2000)

    const deleteBtn = await driver.findElement(By.xpath('//ul/li/button')).click()
    
    expect(await driver.findElement(By.id('message')).isDisplayed()).toEqual(true)

    await driver.findElement(By.xpath('//*[text() = "Iron Man deleted!"]'))
  
    })

})   
