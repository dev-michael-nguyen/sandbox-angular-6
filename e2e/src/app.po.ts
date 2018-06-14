import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  hasLeftNav() {
    return element(by.id('app-left-nav')) ? true : false;
  }
}
