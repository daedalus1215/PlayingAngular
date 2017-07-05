import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class MyprojectPage {
=======
export class Angular2SeedPage {
>>>>>>> 2c5d1fafe86f69f1e4dbfca14c89f18ed5943901
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
