import { FIRSTTESTPage } from './app.po';

describe('first-test App', function() {
  let page: FIRSTTESTPage;

  beforeEach(() => {
    page = new FIRSTTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
