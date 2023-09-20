import { marked } from "https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";

class MarkdownElement extends HTMLElement { // (1)

  async connectedCallback() {
    if(this.attributes.src){
      const res = await fetch(this.attributes.src);
      this.innerHtml = await res.text();
    }else{
      this.innerHTML = marked(this.innerHTML);
    }
  }

}

customElements.define("data-markdown", MarkdownElement); // (2)
