import { marked } from "https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";

class ToHtml extends HTMLElement { // (1)

  connectedCallback() {
    this.innerHTML = marked(this.innerHTML);
  }

}

customElements.define("to-html", ToHtml); // (2)