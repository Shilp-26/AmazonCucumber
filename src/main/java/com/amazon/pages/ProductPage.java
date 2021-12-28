package com.amazon.pages;

import com.amazon.utility.Utility;
import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'See more')]")
    WebElement productDesc;

    @CacheLookup
    @FindBy(id = "quantity")
    WebElement quantity;

    @CacheLookup
    @FindBy(id = "add-to-cart-button")
    WebElement addToCartBtn;

    @CacheLookup
    @FindBy(xpath = "//div[@id='attachDisplayAddBaseAlert']//h4[@class='a-alert-heading'][normalize-space()='Added to Cart']")
    WebElement mobileAddToCartMessage;

    @CacheLookup
    @FindBy(xpath = "//div[@id='attachDisplayAddBaseAlert']//h4[@class='a-alert-heading'][normalize-space()='Added to Cart']")
    WebElement laptopAddToCartMessage;

    public void clickOnProductDescription(){
        clickOnElement(productDesc);
    }

    public void selectQty(String qty){
        selectByVisibleTextFromDropDown(quantity,qty);
        Reporter.log("Select quantity from dropdown : '" + qty + "' dropdown" + "<br>");
    }

    public void clickOnAddToCartBtn(){
        clickOnElement(addToCartBtn);
        Reporter.log("Click on Add to cart button : " + "<br>");
    }

    public void verifyLaptopAddToCartMessage(String message) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String actualString = doGetTextFromElement(laptopAddToCartMessage);
        System.out.println("text of message: " + actualString);
        Assert.assertTrue(actualString.contains((message)));

        log.info("Verifying product added to cart message  " + message.toString());
    }

    public void verifyMobileAddToCartMessage(String message)  {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String actualString = doGetTextFromElement(mobileAddToCartMessage);
        System.out.println("text of message: " + actualString);
        Assert.assertTrue(actualString.contains((message)));
        log.info("Verifying mobile phone added to cart message  " + message.toString());
    }

}
