import{defineComponent as d,resolveComponent as n,openBlock as i,createElementBlock as m,createVNode as e,withCtx as u,createTextVNode as t}from"vue";import{Q as f}from"./index.e16bec0c.js";import{_ as B}from"./index.091c0d95.js";import"tdesign-vue-next";const E=d({__name:"Message",setup(g){const{showSuccessMessage:s,showWarningMessage:c,showErrorMessage:_}=f(),a=()=>{s("\u63D0\u4EA4\u6210\u529F")},r=()=>{c("\u63D0\u793A\u8B66\u544A")},p=()=>{_()};return(D,A)=>{const o=n("t-button"),l=n("t-space");return i(),m("section",null,[e(l,null,{default:u(()=>[e(o,{onClick:a},{default:u(()=>[t("\u6253\u5F00\u6210\u529F\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1}),e(o,{onClick:r},{default:u(()=>[t("\u6253\u5F00\u8B66\u544A\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1}),e(o,{onClick:p},{default:u(()=>[t("\u6253\u5F00\u9519\u8BEF\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1})]),_:1})])}}});const h=B(E,[["__scopeId","data-v-d891c1fa"]]);export{h as default};