import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class CfeAppPage {
=======
<<<<<<< HEAD
export class MyprojectPage {
=======
export class Angular2SeedPage {
>>>>>>> 2c5d1fafe86f69f1e4dbfca14c89f18ed5943901
>>>>>>> 76adf354ca25454e81684bbb8d710946eff44d52
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
