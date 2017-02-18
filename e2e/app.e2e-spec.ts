import { Date16pPage } from './app.po';

describe('date16p App', function() {
  let page: Date16pPage;

  beforeEach(() => {
    page = new Date16pPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
