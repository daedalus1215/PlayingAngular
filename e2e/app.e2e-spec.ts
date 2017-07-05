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
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
