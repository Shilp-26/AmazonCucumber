package com.amazon.cucumber.steps;

import com.amazon.pages.HomePage;
import com.amazon.pages.ProductPage;
import com.amazon.pages.ResultsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddToCartSteps {
    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User searches for \"([^\"]*)\"$")
    public void userSearchesFor(String searchItem) {
        new HomePage().searchForProduct(searchItem);
    }

    @And("^User clicks on the product$")
    public void userClicksOnTheProduct() {
        new ResultsPage().clickOnProduct();
    }

    @And("^User clicks on product description$")
    public void userClicksOnProductDescription() {
        new ProductPage().clickOnProductDescription();

    }

    @And("^User changes the quantity to \"([^\"]*)\"$")
    public void userChangesTheQuantityTo(String qty) {
        new ProductPage().selectQty(qty);

    }

    @And("^User clicks on add to cart button$")
    public void userClicksOnAddToCartButton() {
        new ProductPage().clickOnAddToCartBtn();
    }

    @Then("^User cans see the message displayed \"([^\"]*)\"$")
    public void userCansSeeTheMessageDisplayed(String expMsg) {

    }

    @And("^User identifies the laptop in the results page \"([^\"]*)\"$")
    public void userIdentifiesTheLaptopInTheResultsPage(String productName) {
        new ResultsPage().isProductDisplayed(productName);
    }
}
