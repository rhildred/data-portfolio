import"./compat.module-f6b0595f.js";import{o as t}from"./jsxRuntime.module-c37c4584.js";import{M as r}from"./index-f7574c4d.js";import{marked as i}from"https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";import{u as s}from"./index-1cbf7c0a.js";import{k as a}from"./preact.module-a8db4ca9.js";import"./hooks.module-1ffebabd.js";import"./iframe-7dd97d3e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const m=`# data-portfolio

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

`;class d extends HTMLElement{connectedCallback(){this.innerHTML=i(this.innerHTML)}}customElements.define("data-markdown",d);const p=()=>t("data-markdown",{children:m});function o(n){return t(a,{children:[t(r,{title:"README.md"}),`
`,t(p,{})]})}function D(n={}){const{wrapper:e}=Object.assign({},s(),n.components);return e?t(e,Object.assign({},n,{children:t(o,n)})):o()}export{D as default};
//# sourceMappingURL=README-9a0252b7.js.map
