import{defineComponent as d,resolveComponent as a,openBlock as m,createElementBlock as f,createVNode as o,withCtx as n,createTextVNode as c}from"vue";import{MessagePlugin as r}from"tdesign-vue-next";import{_ as E}from"./index.091c0d95.js";function B(){return{showSuccessMessage:(u="\u64CD\u4F5C\u6210\u529F",e,s)=>{r.success(u,e)},showWarningMessage:(u,e,s)=>{r.warning(u,e)},showErrorMessage:(u="\u64CD\u4F5C\u5931\u8D25",e,s)=>{r.error(u,e)}}}const D=d({__name:"Message",setup(u){const{showSuccessMessage:e,showWarningMessage:s,showErrorMessage:_}=B(),p=()=>{e("\u63D0\u4EA4\u6210\u529F")},l=()=>{s("\u63D0\u793A\u8B66\u544A")},g=()=>{_()};return(h,C)=>{const t=a("t-button"),i=a("t-space");return m(),f("section",null,[o(i,null,{default:n(()=>[o(t,{onClick:p},{default:n(()=>[c("\u6253\u5F00\u6210\u529F\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1}),o(t,{theme:"warning",onClick:l},{default:n(()=>[c("\u6253\u5F00\u8B66\u544A\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1}),o(t,{theme:"danger",onClick:g},{default:n(()=>[c("\u6253\u5F00\u9519\u8BEF\u72B6\u6001\u63D0\u793A\u8BED\u53E5")]),_:1})]),_:1})])}}});const A=E(D,[["__scopeId","data-v-45debf65"]]);export{A as default};