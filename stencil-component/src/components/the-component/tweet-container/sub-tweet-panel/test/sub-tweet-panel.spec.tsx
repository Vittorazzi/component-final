import { newSpecPage } from '@stencil/core/testing';
import { SubTweetPanel } from '../sub-tweet-panel';

describe('sub-tweet-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubTweetPanel],
      html: `<sub-tweet-panel></sub-tweet-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <sub-tweet-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sub-tweet-panel>
    `);
  });
});
