import { html, LitElement, PropertyDeclarations, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wc-template")
export class WcTemplate extends LitElement {
  static get properties(): PropertyDeclarations {
    return {
      data: { type: Number },
    };
  }

  data = 0;

  connectedCallback(): void {
    super.connectedCallback();
  }

  render(): TemplateResult {
    return html` <div>${this.data}</div> `;
  }
}
