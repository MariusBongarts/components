import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { resizeInputs } from '../helper/resizeInputs';

const componentCSS = require('./app.component.scss');

@customElement('marius-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="d-none d-lg-block col-2 p-0 m-0">
          <marius-left-navbar></marius-left-navbar>
        </div>
        <div class="col-12 col-lg-10">

          <navbar-overview></navbar-overview>

          <fifa-card-overview></fifa-card-overview>

        </div>
      </div>


    </div>
`;
  }

}
