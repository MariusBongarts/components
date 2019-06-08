import { Settings } from '../../../settings';
import { Dialog } from '../../../models/dialog';
import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { PropertyCommitter } from 'lit-html';
import '@polymer/paper-dialog/paper-dialog';
import { Constants } from '../../../constants';

const componentCSS = require('./confirm-dialog.component.scss');

/*
Created by Marius Bongarts on 27.04.2019.
This custom element is used to create confirmation dialogs by using a polymer paper-diolog custom element
https://www.webcomponents.org/element/@polymer/paper-dialog/elements/paper-dialog
*/
@customElement('app-confirm-dialog')
class ConfirmDialogComponent extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  constants = new Constants(new Settings());

  @property()
  dialog!: Dialog;

  cancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {
        bubbles: true
      })
    );
  }

  confirm() {
    this.dispatchEvent(
      new CustomEvent('confirm', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
      <paper-dialog no-cancel-on-outside-click opened>
        <div class="modal-header my-0">
          <h5 class="modal-title" id="exampleModalLabel">${this.dialog.msg}</h5>
          <button @click=${()=> this.cancel()}
            type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body my-2">
        <h6 class="modal-title text-muted" id="exampleModalLabel">${this.dialog.subMsg}</h6>
        </div>
        <div class="modal-footer my-0">
          <button dialog-dismiss @click=${() => this.cancel()}
            type="button" class="btn btn-outline-${this.dialog.cancelColor}" data-dismiss="modal">
            ${this.constants.getConstants().CANCEL}</button>
          <button dialog-confirm autofocus @click=${async () => this.confirm()}
            type="button" class="btn btn-${this.dialog.confirmColor}">${this.constants.getConstants().CONFIRM}</button>
        </div>

      </paper-dialog>

    `;
  }
}
