import { ChpOnePage } from './app.po';

describe('chpOne App', () => {
  let page: ChpOnePage;

  beforeEach(() => {
    page = new ChpOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
