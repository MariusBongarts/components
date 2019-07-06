import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { resizeInputs } from '../../../helper/resizeInputs';

const componentCSS = require('./button-overview.component.scss');

@customElement('button-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
      <!-- marius-navbar -->
      <div class="row my-2 pt-5">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-button"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-button</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-button/></span>
        </div>
        <div class="col-12 col-lg-6 btns ">
          <div class="row d-flex justify-content-center">
            <marius-button></marius-button>
            <marius-button></marius-button>
            <marius-button></marius-button>
          </div>
          <div class="row d-flex justify-content-center">
            <marius-button content='Customized' class="green"></marius-button>
            <marius-button content='Customized' class="green"></marius-button>
            <marius-button content='Customized' class="green"></marius-button>
          </div>


        </div>
      </div>
`;
  }

}
