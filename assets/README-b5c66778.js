import"./compat.module-f6b0595f.js";import{o as t}from"./jsxRuntime.module-c37c4584.js";import{M as s}from"./index-f5960863.js";import{marked as i}from"https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.0/lib/marked.esm.js";import{u as a}from"./index-1cbf7c0a.js";import{k as m}from"./preact.module-a8db4ca9.js";import"./hooks.module-1ffebabd.js";import"./iframe-39359074.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const d=`# data-portfolio

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

`;class c extends HTMLElement{async connectedCallback(){if(this.attributes.src){const n=this.attributes.src.baseURI+this.attributes.src.value,r=await(await fetch(n)).text();this.innerHtml=r}else this.innerHTML=i(this.innerHTML)}}customElements.define("data-markdown",c);const l=()=>t("data-markdown",{children:d});function o(e){return t(m,{children:[t(s,{title:"README.md"}),`
`,t(l,{})]})}function D(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}export{D as default};
//# sourceMappingURL=README-b5c66778.js.map
