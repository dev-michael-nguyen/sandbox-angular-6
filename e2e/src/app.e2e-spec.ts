import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have left nav', () => {
    page.navigateTo();
    expect(page.hasLeftNav()).toEqual(true);
  });
});
