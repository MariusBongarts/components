import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { resizeInputs } from '../../../helper/resizeInputs';

const componentCSS = require('./left-navbar-overview.component.scss');

@customElement('left-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
      <!-- marius-navbar -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-navbar"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-left-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-left-navbar/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center py-5" style="left: 20%">
        <marius-left-navbar style="--position: relative"></marius-left-navbar>
        </div>
      </div>
`;
  }

}
