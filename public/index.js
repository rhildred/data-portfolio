import { marked } from "https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";

class MarkdownElement extends HTMLElement { // (1)

  async connectedCallback() {
    if(this.attributes.src){
      let oDest = this.innerHTML;
      const sUrl = this.attributes.src.baseURI + this.attributes.src.value;
      const res = await fetch(sUrl);
      const sText = await res.text();
      oDest = sText;
    }else{
      this.innerHTML = marked(this.innerHTML);
    }
  }

}

customElements.define("data-markdown", MarkdownElement); // (2)