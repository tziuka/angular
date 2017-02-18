import { Date16Page } from './app.po';

describe('date16 App', function() {
  let page: Date16Page;

  beforeEach(() => {
    page = new Date16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
