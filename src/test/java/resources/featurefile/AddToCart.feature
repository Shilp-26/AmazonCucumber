Feature: Add to cart test
  User should be able to add a product to the cart successfully

  Scenario: User should be able to add a laptop to cart successfully
    Given User is on Homepage
    When User searches for "Laptop"
    And User identifies the laptop in the results page "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black"
    And User clicks on the product
    And User clicks on product description
    And User changes the quantity to "3"
    And User clicks on add to cart button
    Then User cans see the message displayed "Added to cart"

  Scenario: User should be able to add a mobile phone to cart successfully
    Given User is on Homepage
    When User searches for "Mobile Phone"
    And User identifies the laptop in the results page "Samsung Galaxy A52 5G, Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black"
    And User clicks on the product
    And User clicks on product description
    And User changes the quantity to "2"
    And User clicks on add to cart button
    Then User cans see the message displayed "Added to cart"