import { BackdoorPage } from './app.po';

describe('backdoor App', () => {
  let page: BackdoorPage;

  beforeEach(() => {
    page = new BackdoorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
