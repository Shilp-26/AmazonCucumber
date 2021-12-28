package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(id ="twotabsearchtextbox" )
    WebElement searchTab;

    @CacheLookup
    @FindBy(id ="nav-search-submit-button" )
    WebElement searchBtn;

    public void searchForProduct(String productName){
        sendTextToElement(searchTab,productName);
        clickOnElement(searchBtn);
        log.info("Searching for product  " + searchTab.toString());
    }


}
