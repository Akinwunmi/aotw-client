// Copyright 2022,
// Jurrit van der Ploeg

import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ButtonType } from './button';

@customElement('aotw-button')
export class ButtonElement extends LitElement {
  static styles = css`
    :host {
      --primary-blue: #00f;
      --secondary-ice: #f0f0ff;

      --default-black: #333;
      --default-white: #fff;

      display: block;
    }
    button  {
      padding: 5px 10px;

      cursor: pointer;
      border: none;

      text-transform: uppercase;
    }
    .btn-primary {
      background-color: var(--primary-blue);

      color: var(--default-white);
    }
    .btn-secondary {
      background-color: var(--secondary-ice);

      color: var(--primary-blue);
    }
  `;

  @property({ type: String }) data = '';
  @property({ type: ButtonType }) type = ButtonType.PRIMARY;

  protected render(): TemplateResult {
    return html`
      <button class="btn-${this.type}" @click=${this.handleAction}>
        ${this.data}
      </button>
    `;
  }

  private handleAction(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('action', {
        detail: { event }
      })
    );
  }
}
