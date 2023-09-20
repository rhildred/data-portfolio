import"./compat.module-f6b0595f.js";import{o as t}from"./jsxRuntime.module-c37c4584.js";import{M as r}from"./index-bdb62875.js";import{marked as s}from"https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";import{u as i}from"./index-1cbf7c0a.js";import{k as a}from"./preact.module-a8db4ca9.js";import"./hooks.module-1ffebabd.js";import"./iframe-5b89f8e1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const m=`# data-portfolio

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

`;class d extends HTMLElement{async connectedCallback(){if(this.attributes.src){const n=await fetch(this.attributes.src);this.innerHtml=await n.text()}else this.innerHTML=s(this.innerHTML)}}customElements.define("data-markdown",d);const c=()=>t("data-markdown",{children:m});function o(e){return t(a,{children:[t(r,{title:"README.md"}),`
`,t(c,{})]})}function y(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}export{y as default};
//# sourceMappingURL=README-19cbe260.js.map
