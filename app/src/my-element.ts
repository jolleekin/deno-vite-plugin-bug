import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

// This fails on Windows.
import { g } from "@scope/core/f.ts";

// This works.
// import { g } from "@scope/core/g.ts";

@customElement("my-element")
export class MyElement extends LitElement {
  override render() {
    return html`<h1>${g}</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
