import { AAssignment51Page } from './app.po';

describe('a-assignment51 App', function() {
  let page: AAssignment51Page;

  beforeEach(() => {
    page = new AAssignment51Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
