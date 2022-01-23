// Copyright 2022,
// Jurrit van der Ploeg

import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../button';

import { User } from './card-user';

@customElement('aotw-card-user')
export class CardUserElement extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: block;
      max-width: 140px;
      padding: 10px;

      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    }
  `;

  @property({ type: Object }) user!: User;

  protected render(): TemplateResult {
    if (this.user === undefined) {
      return html``;
    }

    return html`
      <img src=${this.user.avatar ?? '../../../assets/images/aotw-logo.svg'} />
      <div>
        <h4>${this.user.fullName}</h4>
        <p>${this.user.role}</p>
        <aotw-button
          data="Edit"
          @click=${this.handleEdit}
        ></aotw-button>
      </div>
    `;
  }

  private handleEdit(): void {
    this.dispatchEvent(
      new CustomEvent<User>('edit', {
        detail: this.user
      })
    );
  }
}
