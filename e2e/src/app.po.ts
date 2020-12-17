import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(page: string): Promise<unknown> {
    return browser.get(browser.baseUrl+page);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root app-header a')).getText();
  }

  async getText(text:string): Promise<string> {
    return element(by.css(text)).getText();
  }

}
