import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-card/paper-card.js';

export class RickmortyCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--rickmorty-card-text-color, #000);
      }

    `;
  }

  static get properties() {
    return {
      name: { type: String },
      id: { type: String },
      imgUrl: { type: String }
    };
  }

  constructor() {
    super();
    this.name = '';
    this.id = '';
    this.imgUrl = '';
  }


  render() {
    return html`
     <paper-card>
        <img src="${this.imgUrl}" alt="Image"/>
        <strong><p>Name: ${this.name}</p></strong>
        <strong><p>ID: ${this.id}</p></strong>
      </paper-card>
    `;
  }

}