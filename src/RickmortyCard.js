import { html, css, LitElement } from 'lit-element';

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
    this.name = "Michi";
    this.id = "1";
    this.imgUrl = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
  }


  render() {
    return html`
      <div class="card">
        <img src="${this.imgUrl}" alt="Image"/>
        <strong><p>Name: ${this.name}</p></strong>
        <strong><p>ID: ${this.id}</p></strong>
      </div>
    `;
  }

}