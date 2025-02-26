import { Page, Locator } from "@playwright/test"
export default class Vakuu {

    readonly page: Page;
    readonly url: string;
    readonly getStartedButton: Locator;
    readonly logoHeaderButton: Locator;
    readonly myAccountButtton: Locator;
    readonly insuranceLink: Locator;
    readonly ourPartnerTurvaLink: Locator;
    readonly calculatePriceButton: Locator;
    readonly arrowButton: Locator;
    readonly firstCommentBox: Locator;
    readonly chooseInsuranceButton: Locator;
    readonly carInsuranseLink: Locator;
    readonly blogLink: Locator;
    readonly rewiewLink: Locator;
    readonly contactUsLink: Locator;
    readonly aboutUsLink: Locator;
    readonly emailInput: Locator;
    readonly privacyLink: Locator;
    readonly instagramLink: Locator;
    readonly twitterLink: Locator;
    readonly facebookLink: Locator;
    readonly telegramLink: Locator;
    readonly homeInsuranceLink: Locator;
    readonly travelInsuranceLink: Locator;
    readonly petInsuranceLink: Locator;
    readonly languageChangeButton: Locator;
    readonly termsLink: Locator;
    readonly cookiesLink: Locator;
    readonly logoFooterButton: Locator;
    readonly errorText: Locator;
    readonly developmentText: Locator;



   constructor(page:Page){

    this.page = page;
    this.url = 'https://polis812.github.io/vacuu/';

    this.getStartedButton = page.getByText("Get started");
    this.logoHeaderButton = page.locator('.main__header__logo');
    this.myAccountButtton = page.locator('.main__header__profile');
    this.insuranceLink = page.locator('.main__header__item').nth(0);
    this.calculatePriceButton = page.locator('a[href="/home"]').nth(0);
    this.arrowButton = page.locator('.arrow-right.arrow-enable');
    this.firstCommentBox = page.locator('div.review__rating').nth(0);
    this.chooseInsuranceButton = page.getByText("Choose insurance");
    this.carInsuranseLink = page.locator('a[href="/car"]');
    this.blogLink = page.locator('a[href="/blog"]');
    this.rewiewLink = page.locator('a.main__header__item[href="/review"]');
    this.contactUsLink = page.locator('a.main__header__item[href="/contact"]')
    this.aboutUsLink = page.locator('a.footer__col__item[href="/about"]');
    this.privacyLink = page.locator('a[href="/privacy"]');
    this.instagramLink = page.locator('.social a img[src*="Instagram"]');
    this.twitterLink = page.locator('.social a img[src*="Twitter"]')
    this.facebookLink = page.locator('.social a img[src*="Facebook"]');
    this.telegramLink = page.locator('.social a img[src*="Telegram"]');
    this.languageChangeButton = page.locator('.header__lang');
    this.homeInsuranceLink = page.locator('a.footer__col__item[href="/home"]').nth(0);
    this.travelInsuranceLink = page.locator('a.footer__col__item[href="/home"]').nth(1);
    this.petInsuranceLink = page.locator('a.footer__col__item[href="/pet"]');
    this.cookiesLink = page.locator('a[href="/cookies#"]');
    this.termsLink = page.locator('a.footer__link[href="#"]')
    this.logoFooterButton = page.locator('footer .logo img');
    this.errorText = page.getByText("404");
    this.developmentText = page.getByText("In development...");
 }
async goto() {
    await this.page.goto(this.url, { waitUntil: "domcontentloaded" });
}
}