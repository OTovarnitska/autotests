# autotests
Autotests 

**Description**
This repository is created for automation tests on Swag Labs web application.
All the tests are added to test folder.

**Technology/Framework Used**
JavaScript, Playwright

**Usage**
1. Install dependencies
2. Run tests with npx playwright test myTests.spec.js

# test 1
Navigates to application
Performs login
Verifies if title, Cart icon and more than 2 products are available

# test 2
Performs login 
Adds the  product to the cart 
Verifies Shopping Cart icon contains the number of products added 
Opens the Shopping Cart and verifies the added product is displayed 
Removes the product
Verifies no products are available in the Shopping Cart
