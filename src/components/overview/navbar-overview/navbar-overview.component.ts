import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { resizeInputs } from '../../../helper/resizeInputs';

const componentCSS = require('./navbar-overview.component.scss');

@customElement('navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  iconName: string = 'email';

  @queryAll('.codeInput')
  codeInputElements!: NodeListOf<HTMLInputElement>;
  @query('#iconName')
  iconNameElement!: HTMLInputElement;

  firstUpdated() {
    this.codeInputElements.forEach((e: HTMLInputElement) => {
      resizeInputs(e);
      e.addEventListener('keyup', (event) => {
        resizeInputs(e);
        this.updateData();
      });
    });
  }

  updateData() {
    this.iconName = this.iconNameElement.value;
  }

  render() {
    return html`
      <!-- marius-navbar -->
      <div class="row my-2 pt-5">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-navbar"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row d-flex justify-content-center">
            <marius-navbar class="align-self-center"></marius-navbar>
          </div>
        </div>
      </div>

      <!-- marius-navbar adjusted css -->
      <div class="row my-2 pt-5">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-navbar"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="attribute"> selectedIcon=<span class="attributeName">"${this.iconName}"</span></span>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row d-flex justify-content-center">
            <marius-navbar selectedIcon=${this.iconName} @selected=${(e: CustomEvent)=> this.iconName = e.detail}
              class="align-self-center secondNavbar"></marius-navbar>
          </div>
        </div>
      </div>

      <!-- marius-navbar adjusted color -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo justify-content-center">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-navbar"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row d-flex justify-content-center">
            <marius-navbar class="align-self-center thirdNavbar"></marius-navbar>
          </div>
        </div>

      </div>
`;
  }

}
