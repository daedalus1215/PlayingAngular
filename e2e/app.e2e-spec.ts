<<<<<<< HEAD
import { CfeAppPage } from './app.po';

describe('cfe-app App', () => {
  let page: CfeAppPage;

  beforeEach(() => {
    page = new CfeAppPage();
=======
<<<<<<< HEAD
import { MyprojectPage } from './app.po';

describe('myproject App', () => {
  let page: MyprojectPage;

  beforeEach(() => {
    page = new MyprojectPage();
=======
import { Angular2SeedPage } from './app.po';

describe('angular2-seed App', function() {
  let page: Angular2SeedPage;

  beforeEach(() => {
    page = new Angular2SeedPage();
>>>>>>> 2c5d1fafe86f69f1e4dbfca14c89f18ed5943901
>>>>>>> 76adf354ca25454e81684bbb8d710946eff44d52
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
