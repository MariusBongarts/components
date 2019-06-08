import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { PropertyCommitter } from 'lit-html';

const componentCSS = require('./loading-spinner.component.scss');

/*
Created by Marius Bongarts on 05.04.2019.
This custom element is used to create bootstrap
loading spinner in the middle of the page
*/
@customElement('app-loading-spinner')
class FeatherIcon extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
<div id="spinner" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    `;
  }
}