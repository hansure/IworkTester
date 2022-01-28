const { By, Builder } = require('selenium-webdriver')
require('chromedriver')
async function testerFun() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser('chrome').build()

  //Navigate to our application
  await driver.get('https://www.iworkplc.com/contact')
  // Get element with tag name 'div'
  let officeNumber = driver.findElement(By.id('comp-kktfmgn8'))
  let officeNumbers = await officeNumber.findElements(By.css('p'))
  for (let e of officeNumbers) {
    var officeNumberResult = await e.getText()
  }
  var lastFourOfficeNumberDigit =
    parseInt(officeNumberResult.replace(/[^\d\.\-]/g, '')) % 10000
  //Displaying Tele Phone values
  console.log(lastFourOfficeNumberDigit)

  //For the mobile phone
  // Get element with tag name 'div'
  let mobileNumber = driver.findElement(By.id('comp-ks7htvty'))
  let mobileNumbers = await mobileNumber.findElements(By.css('p'))
  for (let e of mobileNumbers) {
    var mobileNumberResult = await e.getText()
  }
  var lastFourMobileNumberDigit =
    parseInt(mobileNumberResult.replace(/[^\d\.\-]/g, '')) % 10000

  //Displaying mobile phone
  console.log(lastFourMobileNumberDigit)

  //Divding last four digit of tele phone number by last four digit of mobile phone number
  var result = lastFourOfficeNumberDigit / lastFourMobileNumberDigit
  //Displaying the divided result
  console.log(result)
  //Close
  await driver.quit()
}
testerFun()
