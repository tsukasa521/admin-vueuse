import{Q as v}from"./index.0bdbe9e0.js";import{S as K}from"./SamplePanel.267651c4.js";import{s as w,a as x,b as Q}from"./index.a4ccb044.js";import{d as E,r as V,h as P,k as a,o as B,q as S,w as t,a as b,b as e,u,f as C,c as L}from"./index.de3f9234.js";const R=E({__name:"TableSampleStandard",setup(A){const i=V({tableDataResolver:w,searchQuery:{pageSize:10,name:""},shim:l=>l.map(n=>({id:n.id,name:n.name,age:n.userAge}))}),{getList:r,list:d,listLoading:p,searchQuery:o,pagination:D,handlePageChange:g}=v(i),F=P([{colKey:"id",title:"ID"},{colKey:"name",title:"\u59D3\u540D"},{colKey:"age",title:"\u5E74\u9F84"}]),h=()=>{r()},_=()=>{i.tableDataResolver=x};return(l,n)=>{const s=a("t-input"),m=a("t-form-item"),c=a("t-button"),f=a("t-form"),y=a("t-table");return B(),S(K,{title:"\u57FA\u7840\u7528\u6CD5",description:"\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B\u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u6392\u5217\u3002"},{default:t(()=>[b("div",null,[e(f,{data:u(o),layout:"inline","label-width":"0",onSubmit:h},{default:t(()=>[e(m,null,{default:t(()=>[e(s,{modelValue:u(o).name,"onUpdate:modelValue":n[0]||(n[0]=T=>u(o).name=T),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(c,{theme:"primary",type:"submit"},{default:t(()=>[C("\u641C\u7D22")]),_:1}),e(c,{theme:"primary",onClick:_},{default:t(()=>[C("\u66F4\u6539")]),_:1})]),_:1})]),_:1},8,["data"])]),e(y,{rowKey:"id",data:u(d),columns:F.value,size:"small",loading:u(p),pagination:u(D),onPageChange:u(g)},null,8,["data","columns","loading","pagination","onPageChange"])]),_:1})}}}),z=E({__name:"TableSampleNoPagination",setup(A){const i=V({tableDataResolver:Q,searchQuery:{name:""},isPagination:!1}),{getList:r,list:d,listLoading:p,searchQuery:o,pagination:D}=v(i),g=P([{colKey:"id",title:"ID"},{colKey:"name",title:"\u59D3\u540D"},{colKey:"userAge",title:"\u5E74\u9F84"}]),F=()=>{r()};return(h,_)=>{const l=a("t-input"),n=a("t-form-item"),s=a("t-button"),m=a("t-form"),c=a("t-table");return B(),S(K,{title:"\u4E0D\u5206\u9875",description:"\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B\u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u6392\u5217\u3002"},{default:t(()=>[b("div",null,[e(m,{data:u(o),layout:"inline","label-width":"0",onSubmit:F},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{modelValue:u(o).name,"onUpdate:modelValue":_[0]||(_[0]=f=>u(o).name=f),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(n,null,{default:t(()=>[e(s,{theme:"primary",type:"submit"},{default:t(()=>[C("\u641C\u7D22")]),_:1})]),_:1})]),_:1},8,["data"])]),e(c,{rowKey:"id",data:u(d),columns:g.value,size:"small",loading:u(p)},null,8,["data","columns","loading"])]),_:1})}}}),k=E({__name:"TableSampleNoMounted",setup(A){const i=V({tableDataResolver:w,searchQuery:{pageSize:10,name:""},hasMounted:!1}),{getList:r,list:d,listLoading:p,searchQuery:o,pagination:D,handlePageChange:g}=v(i),F=P([{colKey:"id",title:"ID"},{colKey:"name",title:"\u59D3\u540D"},{colKey:"userAge",title:"\u5E74\u9F84"}]),h=()=>{r()};return(_,l)=>{const n=a("t-input"),s=a("t-form-item"),m=a("t-button"),c=a("t-form"),f=a("t-table");return B(),S(K,{title:"\u8FDB\u5165\u9875\u9762\u4E0D\u9A6C\u4E0A\u641C\u7D22",description:"\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B\u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u6392\u5217\u3002"},{default:t(()=>[b("div",null,[e(c,{data:u(o),layout:"inline","label-width":"0",onSubmit:h},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{modelValue:u(o).name,"onUpdate:modelValue":l[0]||(l[0]=y=>u(o).name=y),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(m,{theme:"primary",type:"submit"},{default:t(()=>[C("\u641C\u7D22")]),_:1})]),_:1})]),_:1},8,["data"])]),e(f,{rowKey:"id",data:u(d),columns:F.value,size:"small",loading:u(p),pagination:u(D),onPageChange:u(g)},null,8,["data","columns","loading","pagination","onPageChange"])]),_:1})}}}),I=E({__name:"TableSampleCustomerResponse",setup(A){const i=V({tableDataResolver:w,searchQuery:{pageSize:10,name:""},shim:_=>_.map(l=>({id:l.id,name:l.name,age:l.userAge}))}),{getList:r,list:d,listLoading:p,searchQuery:o,pagination:D,handlePageChange:g}=v(i),F=P([{colKey:"id",title:"ID"},{colKey:"name",title:"\u59D3\u540D"},{colKey:"age",title:"\u5E74\u9F84"}]),h=()=>{r()};return(_,l)=>{const n=a("t-input"),s=a("t-form-item"),m=a("t-button"),c=a("t-form"),f=a("t-table");return B(),S(K,{title:"\u81EA\u5B9A\u4E49\u63A5\u53D7\u63A5\u53E3\u8FD4\u56DE\u6570\u636E",description:"\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B\u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u6392\u5217\u3002"},{default:t(()=>[b("div",null,[e(c,{data:u(o),layout:"inline","label-width":"0",onSubmit:h},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{modelValue:u(o).name,"onUpdate:modelValue":l[0]||(l[0]=y=>u(o).name=y),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(m,{theme:"primary",type:"submit"},{default:t(()=>[C("\u641C\u7D22")]),_:1})]),_:1})]),_:1},8,["data"])]),e(f,{rowKey:"id",data:u(d),columns:F.value,size:"small",loading:u(p),pagination:u(D),onPageChange:u(g)},null,8,["data","columns","loading","pagination","onPageChange"])]),_:1})}}}),N=E({__name:"TableSampleDynamicDataResolver",setup(A){const i=V({tableDataResolver:Q,searchQuery:{name:""},isPagination:!1,shim:l=>l.map(n=>({id:n.id,name:n.name,age:n.userAge}))}),{getList:r,list:d,listLoading:p,searchQuery:o,pagination:D,handlePageChange:g}=v(i),F=P([{colKey:"id",title:"ID"},{colKey:"name",title:"\u59D3\u540D"},{colKey:"age",title:"\u5E74\u9F84"}]),h=()=>{r()},_=()=>{i.tableDataResolver=x};return(l,n)=>{const s=a("t-input"),m=a("t-form-item"),c=a("t-button"),f=a("t-form"),y=a("t-table");return B(),S(K,{title:"\u52A8\u6001\u5207\u6362\u5217\u8868\u67E5\u8BE2\u63A5\u53E3",description:"\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B\u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u6392\u5217\u3002"},{default:t(()=>[b("div",null,[e(f,{data:u(o),layout:"inline","label-width":"0",onSubmit:h},{default:t(()=>[e(m,null,{default:t(()=>[e(s,{modelValue:u(o).name,"onUpdate:modelValue":n[0]||(n[0]=T=>u(o).name=T),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(c,{theme:"primary",type:"submit"},{default:t(()=>[C("\u641C\u7D22")]),_:1}),e(c,{theme:"primary",onClick:_},{default:t(()=>[C("\u66F4\u6539")]),_:1})]),_:1})]),_:1},8,["data"])]),e(y,{rowKey:"id",data:u(d),columns:F.value,size:"small",loading:u(p),pagination:u(D),onPageChange:u(g)},null,8,["data","columns","loading","pagination","onPageChange"])]),_:1})}}}),U={class:"page-container"},$=b("div",null,[b("h1",null," useTable "),b("p",{class:"text-sm text-secondary mt-4"}," useTable\u5E94\u7528\u4E8E\u5E38\u89C1\u7684\u5217\u8868\u9875\u573A\u666F\uFF0C\u5305\u62EC\u5206\u9875\u3001\u641C\u7D22\u7B49\u3002tdesign\u5305\u4E2D\u7684useTable\u4E0Etdesign\u63A7\u4EF6\u5E93\u8026\u5408\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u5168\u90E8\u529F\u80FD\u3002 ")],-1),H=E({__name:"Table",setup(A){return(i,r)=>(B(),L("div",U,[$,e(u(R)),e(u(z)),e(u(k)),e(u(I)),e(u(N))]))}});export{H as default};
