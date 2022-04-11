import { Component, Host, h, Prop } from '@stencil/core';
import { Iopts } from '../../../Types/Opts';

@Component({
  tag: 'tweet-container',
  styleUrl: 'tweet-container.css',
  shadow: true,
})
export class TweetContainer {

  // @Event() changeArr: EventEmitter
  // `main-container__tweet-container ${tweet.lastTweet === true ? 'main-container__tweet-container--last-tweet' : ''}`

  @Prop() tweets: Iopts[];

  showOptsDiv = (id:number, hide: boolean) => {
    this.tweets.map(item => { 
      if(item.id == id){
        item.hide = !hide
      } 
      this.tweets = [...this.tweets]
     })
  }

  render() {
    return (
      <Host>
        {this.tweets.map((tweet, index) => 
          <div key={index} class="main-container">
            <div class={'main-container__tweet-container'} onClick={ () => this.showOptsDiv(tweet.id, tweet.hide)}>
              <h1>{tweet.nomeOpt}</h1>
              <span>{tweet.descOpt}</span>
            </div>
            {tweet.hide? '' : 
              <sub-tweet-panel subopts={tweet.subOpts}></sub-tweet-panel>
            }
          </div>
          )}
      </Host>
    );
  }

}
