import {test, expect} from '@playwright/test';


test('increase counter by 3', async ({page}) => {
    await page.goto('http://localhost:3000/');

    const incButton = page.locator("#increment");



    const initValue: number = Number(await page.locator("#counter-value").textContent());

    await incButton.click();
    await incButton.click();
    await incButton.click();

    const counterValueLabel = page.locator("#counter-value")

    await expect(counterValueLabel).toHaveText("" + (initValue + 3));
});