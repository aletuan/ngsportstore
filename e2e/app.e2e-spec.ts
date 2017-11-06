import { NgsportstorePage } from './app.po';

describe('ngsportstore App', () => {
  let page: NgsportstorePage;

  beforeEach(() => {
    page = new NgsportstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
