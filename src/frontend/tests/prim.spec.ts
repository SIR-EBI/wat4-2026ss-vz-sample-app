import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.request.post('http://localhost:12051/counter/reset');
  await page.goto('http://localhost:3000/');
});


test.describe.configure({mode:'serial'});

test('increase counter by 3', async ({page}) => {
    const incButton = page.locator("#increment");


    const initValue: number = Number(await page.locator("#counter-value").textContent());

    await incButton.click();
    await incButton.click();
    await incButton.click();

    const counterValueLabel = page.locator("#counter-value")

    await expect(counterValueLabel).toHaveText("" + (initValue + 3));

});

test('is 2 a prim', async ({page}) => {
    const incButton = page.locator("#increment");

    const initValue: number = Number(await page.locator("#counter-value").textContent());

    await incButton.click();
    await incButton.click();

    const isPrimeValue = page.locator("#is-prime")

    await expect(isPrimeValue).toHaveText("true");

});