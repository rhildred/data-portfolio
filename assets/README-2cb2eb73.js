import"./compat.module-f6b0595f.js";import{o as t}from"./jsxRuntime.module-c37c4584.js";import{M as i}from"./index-873d69cf.js";import{marked as a}from"https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";import{u as m}from"./index-1cbf7c0a.js";import{k as d}from"./preact.module-a8db4ca9.js";import"./hooks.module-1ffebabd.js";import"./iframe-7f61da2e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=`# data-portfolio

## some html5 custom elements to make developing a student portfolio easier

TL;DR

\`\`\`html

<script src="https://rhildred.github.io/data-portfolio"><\/script>

<!-- You can use custom elements like: -->

<data-markdown>
# This is markdown heading
This is markdown text
</data-markdown>

\`\`\`
This repository hosts the js code but is also intended as a starting place for a repository of your own custom elements. To get started:

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/rhildred/data-portfolio)

`;class l extends HTMLElement{async connectedCallback(){if(this.attributes.src){const n=this,s=this.attributes.src.baseURI+this.attributes.src.value,r=await(await fetch(s)).text();n.innerHTML=r}else this.innerHTML=a(this.innerHTML)}}customElements.define("data-markdown",l);const p=()=>t("data-markdown",{children:c});function o(e){return t(d,{children:[t(i,{title:"README.md"}),`
`,t(p,{})]})}function D(e={}){const{wrapper:n}=Object.assign({},m(),e.components);return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}export{D as default};
//# sourceMappingURL=README-2cb2eb73.js.map
