import { RoutePage } from './app.po';

describe('route App', function() {
  let page: RoutePage;

  beforeEach(() => {
    page = new RoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
