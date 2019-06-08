import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('app-starter')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'This title can be overwritten in the custom element by the attribute "title"';

  render() {
    return html`
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-5">
          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Web Component</div>
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>

        </div>

      </div>
    </div>`;
  }

}
