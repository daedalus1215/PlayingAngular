import { Angular24Page } from './app.po';

describe('angular24 App', function() {
  let page: Angular24Page;

  beforeEach(() => {
    page = new Angular24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
