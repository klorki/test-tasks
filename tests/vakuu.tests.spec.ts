import Vakuu from "../support/pages/vakuu.page";
import { test, expect } from '@playwright/test';

test ("Test 1. Redirection using Get Started button", async({page})=>{
const vakuu = new Vakuu(page);
await vakuu.goto();
await vakuu.getStartedButton.click();
await expect(page.url()).not.toBe('https://polis812.github.io/vacuu/');
})
test ("Test 2. Reloading the page by clicking to url on top", async({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.logoHeaderButton.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.url()).toBe('https://polis812.github.io/vacuu/');
})
test ("Test 3. Redirection to my account page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.myAccountButtton.click();
    await expect(page.url()).toBe('https://polis812.github.io/profile');
    await expect(vakuu.errorText).not.toBeVisible();
})
test ("Test 4. Redirection to insurance page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.insuranceLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/insurance');
    await expect(vakuu.errorText).not.toBeVisible();
})
test ("Test 5. Redirection to calculate price page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.calculatePriceButton.click();
    await expect(page.url()).toBe('https://polis812.github.io/home');
    await expect(vakuu.errorText).not.toBeVisible();
})
test ("Test 6. Usage of arrow button for next comment", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await expect(vakuu.firstCommentBox).toBeVisible();
    await vakuu.arrowButton.click();
    await expect(vakuu.firstCommentBox).not.toBeVisible();
})
test ("Test 7. Check for updating page after clicking choosing insurance button", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.chooseInsuranceButton.click();
    await expect(page.url()).toBe('https://polis812.github.io/vacuu/insurance');
    await expect(vakuu.developmentText).not.toBeVisible();
})
test ("Test 8. Redirection to car insurance page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.carInsuranseLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/car');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 9. Redirection to blog page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.blogLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/blog');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 10. Redirection to about us page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.aboutUsLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/about');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 11. Redirection to privacy page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.privacyLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/privacy');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 12. Redirection to instagram account", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.instagramLink.click();
    await expect(page.url()).not.toBe('https://polis812.github.io/vacuu/#');
    await expect(page.url()).toContain('instagram.com');
})

test ("Test 13. Changing language to FIN", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.languageChangeButton.click();
    await vakuu.languageChangeButton.selectOption('FIN');
    await vakuu.languageChangeButton.click();
    await expect(vakuu.insuranceLink).not.toContainText("Insurance");
})

test ("Test 14. Redirection to review page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.rewiewLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/review');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 15. Redirection to contact us page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.contactUsLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/contact');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 16. Redirection to home insurance page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.homeInsuranceLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/home');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 17. Redirection to travel insurance page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.travelInsuranceLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/home');
    await expect(vakuu.errorText).not.toBeVisible();
})
test ("Test 18. Redirection to pet insurance page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.petInsuranceLink.click();
    await expect(page.url()).toBe('https://polis812.github.io/pet');
    await expect(vakuu.errorText).not.toBeVisible();
})
test ("Test 19. Check correction of main page link", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await expect(page.url()).toBe('https://polis812.github.io/vakuu/');
})

test ("Test 20. Redirection to cookies page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.cookiesLink.click();
    await expect(page.url()).not.toBe('https://polis812.github.io/#');
    await expect(vakuu.errorText).not.toBeVisible();
})

test ("Test 21. Check logo in the footer opens vakuu page", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.logoFooterButton.click();
    await expect(page.url()).toBe('https://polis812.github.io/vacuu/');
    await expect(vakuu.logoFooterButton).toBeVisible();
    await expect(vakuu.insuranceLink).toBeVisible();
})

test ("Test 22. Redirection to twitter account", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.twitterLink.click();
    await expect(page.url()).not.toBe('https://polis812.github.io/vacuu/#');
    await expect(page.url()).toContain('x.com');
})

test ("Test 23. Redirection to facebook account", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.facebookLink.click();
    await expect(page.url()).not.toBe('https://polis812.github.io/vacuu/#');
    await expect(page.url()).toContain('facebook.com');
})

test ("Test 24. Redirection to telegram account", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.telegramLink.click();
    await expect(page.url()).not.toBe('https://polis812.github.io/vacuu/#');
    await expect(page.url()).toContain('telegram.org');
})

test ("Test 25. Saving selected language on the page after reload", async ({page})=>{
    const vakuu = new Vakuu(page);
    await vakuu.goto();
    await vakuu.languageChangeButton.click();
    await vakuu.languageChangeButton.selectOption('FIN');
    await vakuu.languageChangeButton.click();
    await page.reload();
    await expect(vakuu.languageChangeButton).toHaveText('FIN');
})

