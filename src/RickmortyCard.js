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
      title: { type: String },
      image: { type: String},
      id: {type: Number},
      name: {type: String},
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.image='';
    this.name='';
    this.id = 0;

  }


  render() {
    return html`

    <paper-card>
        <img src="${this.image}">
        <h2>${this.name}</h2>
        <div class="card-content">
          <p>Id: ${this.id}</p>
        </div>
    </paper-card>

    `;
  }
}