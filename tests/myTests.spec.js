const { test, expect } = require('@playwright/test');

test('test 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // Expect valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('#login-button').click();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
  // Expect a title "to contain" a substring.
  await expect(page.locator('.title')).toHaveText('Products');
  // Expect shopping cart be visible.
  await expect(page.locator('.shopping_cart_link')).toBeVisible();
  // Expect more than 2 products displayed.
  const itemsOnThePage = await page.$$('.inventory_item')
  expect(itemsOnThePage.length).toBeGreaterThan(1);
});


test('test 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // Expect valid credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    // Expect first product to be added to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     // Expect shopping cart icon has number of products added
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
     // Expect shopping  cart page  to have product added
    await page.locator('.shopping_cart_link').click();
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html')
    await expect(page.locator('.cart_item')).toBeVisible();
    // Expect item to be removed from shoping cart
    await page.locator('#remove-sauce-labs-backpack').click();
    // Expect shopping  cart does not contain any items
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });