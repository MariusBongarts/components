import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { PropertyCommitter } from 'lit-html';

const componentCSS = require('./alert.component.scss');

/*
Created by Marius Bongarts on 05.04.2019.
This custom element is used to create bootstrap alerts.
It takes a bootstrap color (primary, success, danger...etc),
a duration time as a property and an input message in a slot
*/
@customElement('app-alert')
class AlertComponent extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  color!: string;

  @property()
  millis: number = 2000;

  firstUpdated() {
    setTimeout(() => {
      this.close();
    }, this.millis);
  }

  close() {
    this.dispatchEvent(
      new CustomEvent('close', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
<div class="alert alert-${this.color}" role="alert">
  <slot name="message"></slot>
</div>
    `;
  }
}