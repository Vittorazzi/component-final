import { newE2EPage } from '@stencil/core/testing';

describe('sub-tweet-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sub-tweet-panel></sub-tweet-panel>');

    const element = await page.find('sub-tweet-panel');
    expect(element).toHaveClass('hydrated');
  });
});
