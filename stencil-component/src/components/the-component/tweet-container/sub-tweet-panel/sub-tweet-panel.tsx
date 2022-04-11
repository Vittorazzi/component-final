import { Component, Host, h, Prop } from '@stencil/core';
import { IsubOpts } from '../../../../Types/Opts';

@Component({
  tag: 'sub-tweet-panel',
  styleUrl: 'sub-tweet-panel.css',
  shadow: true,
})
export class SubTweetPanel {

  @Prop() subopts: IsubOpts[];

  componentWillLoad() {
    console.log('SUBOPTS: ', this.subopts);
  }

  render() {
    return (
      <Host>
        <div class="sub-tweet-main-container">
            {this.subopts.map((item, index) => 
              <div class="sub-tweet-main-container__sub-tweet-container">
                <input id={'opt' + String(index)} type='checkbox' value={item.value}/>
                <label class={'sub-tweet-main-container__label'}>{item.label}</label>
              </div>
            )}
        </div>
      </Host>
    );
  }

}
