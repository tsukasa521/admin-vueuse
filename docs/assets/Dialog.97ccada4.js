import{defineComponent as r,resolveComponent as a,openBlock as p,createBlock as B,unref as l,isRef as d,withCtx as m,createElementVNode as f,createElementBlock as g,createVNode as _,createTextVNode as x}from"vue";import{x as c,U as D,W as k,k as C}from"./index.e16bec0c.js";import{_ as V}from"./index.091c0d95.js";import"tdesign-vue-next";const F=f("div",null,"\u6211\u662F\u5185\u5BB9",-1),E=f("div",null,"\u6211\u662F\u5185\u5BB9",-1),N=r({__name:"InnerDialog",props:{...c,...c},emits:[...D],setup(i,{emit:o}){const n=i,s=o,{currentVisible:e}=k(n,s);return(u,t)=>{const v=a("t-dialog");return p(),B(v,{visible:l(e),"onUpdate:visible":t[0]||(t[0]=b=>d(e)?e.value=b:null),header:"\u666E\u901A\u5BF9\u8BDD\u6846","on-confirm":()=>e.value=!1},{default:m(()=>[F,E]),_:1},8,["visible","on-confirm"])}}}),U=r({__name:"Dialog",setup(i){const{modalVisible:o,openModal:n}=C();return(s,e)=>{const u=a("t-button");return p(),g("section",null,[_(u,{onClick:l(n)},{default:m(()=>[x("\u6253\u5F00Dialog")]),_:1},8,["onClick"]),_(N,{visible:l(o),"onUpdate:visible":e[0]||(e[0]=t=>d(o)?o.value=t:null)},null,8,["visible"])])}}});const A=V(U,[["__scopeId","data-v-cdcb1017"]]);export{A as default};