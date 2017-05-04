import { CallScorecardPage } from './app.po';

describe('call-scorecard App', () => {
  let page: CallScorecardPage;

  beforeEach(() => {
    page = new CallScorecardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
