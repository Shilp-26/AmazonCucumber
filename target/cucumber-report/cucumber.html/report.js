$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart test",
  "description": "User should be able to add a product to the cart successfully",
  "id": "add-to-cart-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12320408800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to add a laptop to cart successfully",
  "description": "",
  "id": "add-to-cart-test;user-should-be-able-to-add-a-laptop-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User searches for \"Laptop\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User identifies the laptop in the results page \"ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on product description",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User changes the quantity to \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User cans see the message displayed \"Added to cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 483384600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 19
    }
  ],
  "location": "AddToCartSteps.userSearchesFor(String)"
});
formatter.result({
  "duration": 7413517300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black",
      "offset": 48
    }
  ],
  "location": "AddToCartSteps.userIdentifiesTheLaptopInTheResultsPage(String)"
});
formatter.result({
  "duration": 21123059100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@class\u003d\u0027a-last\u0027]//a[1]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-UDEPHFU\u0027, ip: \u0027172.21.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e78cd2d5b5155f055885f575fefa1cad, findElement {using\u003dxpath, value\u003d//li[@class\u003d\u0027a-last\u0027]//a[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\shilp\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60249/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e78cd2d5b5155f055885f575fefa1cad\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.amazon.pages.ResultsPage.isProductDisplayed(ResultsPage.java:43)\r\n\tat com.amazon.cucumber.steps.AddToCartSteps.userIdentifiesTheLaptopInTheResultsPage(AddToCartSteps.java:51)\r\n\tat ✽.And User identifies the laptop in the results page \"ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black\"(AddToCart.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnProductDescription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "AddToCartSteps.userChangesTheQuantityTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to cart",
      "offset": 37
    }
  ],
  "location": "AddToCartSteps.userCansSeeTheMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1835622100,
  "status": "passed"
});
formatter.before({
  "duration": 8797063700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to add a mobile phone to cart successfully",
  "description": "",
  "id": "add-to-cart-test;user-should-be-able-to-add-a-mobile-phone-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User searches for \"Mobile Phone\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User identifies the laptop in the results page \"Samsung Galaxy A52 5G, Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on the product",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on product description",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User changes the quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User cans see the message displayed \"Added to cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phone",
      "offset": 19
    }
  ],
  "location": "AddToCartSteps.userSearchesFor(String)"
});
formatter.result({
  "duration": 5009541800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy A52 5G, Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black",
      "offset": 48
    }
  ],
  "location": "AddToCartSteps.userIdentifiesTheLaptopInTheResultsPage(String)"
});
formatter.result({
  "duration": 4078506800,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnTheProduct()"
});
formatter.result({
  "duration": 20057471900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027a-size-medium a-color-base a-text-normal\u0027][contains(text(),\u00272021 Newest Lenovo Flex 5 14.0\" FHD Touchscreen La\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-UDEPHFU\u0027, ip: \u0027172.21.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d273192b833a0f847f6be2814517f02c, findElement {using\u003dxpath, value\u003d//span[@class\u003d\u0027a-size-medium a-color-base a-text-normal\u0027][contains(text(),\u00272021 Newest Lenovo Flex 5 14.0\" FHD Touchscreen La\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\shilp\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60341}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60341/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d273192b833a0f847f6be2814517f02c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.amazon.utility.Utility.clickOnElement(Utility.java:40)\r\n\tat com.amazon.pages.ResultsPage.clickOnProduct(ResultsPage.java:56)\r\n\tat com.amazon.cucumber.steps.AddToCartSteps.userClicksOnTheProduct(AddToCartSteps.java:24)\r\n\tat ✽.And User clicks on the product(AddToCart.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnProductDescription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "AddToCartSteps.userChangesTheQuantityTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to cart",
      "offset": 37
    }
  ],
  "location": "AddToCartSteps.userCansSeeTheMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1701125100,
  "status": "passed"
});
});