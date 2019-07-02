import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { resizeInputs } from '../helper/resizeInputs';

const componentCSS = require('./app.component.scss');

@customElement('marius-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  navItems = ['marius-button', 'marius-navbar', 'marius-fifa-card'];

  @property()
  selectedItem: string | any;

  @queryAll('section')
  sectionElements!: HTMLElement[];

  firstUpdated() {
    window.addEventListener('scroll', () => {
      this.sectionElements.forEach(e => {
        e.offsetTop < document.documentElement.scrollTop ? this.selectedItem = e.getAttribute('id') : '';
      });
    });

  }


  render() {
    return html`
    <div class="container-fluid">
      <div class="row">
        <div class="d-none d-lg-block col-2 p-0 m-0">
          <marius-left-navbar .navItems=${this.navItems} selectedItem=${this.selectedItem}>
          </marius-left-navbar>
        </div>
        <div class="col-12 col-lg-10 p-5">

          <section id='marius-button'>
            <button-overview></button-overview>
          </section>

          <section id='marius-navbar'>
            <navbar-overview></navbar-overview>
          </section>

          <section id='marius-fifa-card'>
            <fifa-card-overview></fifa-card-overview>
          </section>

        </div>
      </div>


    </div>
`;
  }

}
