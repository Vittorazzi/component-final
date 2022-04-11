import { Component, Host, h, Prop } from '@stencil/core';
import { Iopts } from '../../Types/Opts';

@Component({
  tag: 'the-component',
  styleUrl: 'the-component.css',
  shadow: true,
})

export class TheComponent {

  @Prop() tituloTag: string;
  @Prop() opts: Iopts[];

  componentWillLoad() {
      console.log('OPTS: ', this.opts);
    }

  render() {
    return (
      <Host>
        <div class="container" >
          <h1 class='container__title'>{this.tituloTag}</h1>
          <tweet-container tweets={this.opts}></tweet-container>
        </div>
      </Host>
    );
  }

}
