import{g as C,h as c,r as j,i as N,u as P,M as f}from"./index.de3f9234.js";function v(e,a,t=".",o){if(!p(a))return v(e,{},t,o);const i=Object.assign({},a);for(const n in e){if(n==="__proto__"||n==="constructor")continue;const r=e[n];r!=null&&(o&&o(i,n,r,t)||(Array.isArray(r)&&Array.isArray(i[n])?i[n]=[...r,...i[n]]:p(r)&&p(i[n])?i[n]=v(r,i[n],(t?`${t}.`:"")+n.toString(),o):i[n]=r))}return i}function p(e){if(e===null||typeof e!="object")return!1;const a=Object.getPrototypeOf(e);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Q(e){return(...a)=>a.reduce((t,o)=>v(t,o,"",e),{})}const S=Q(),R={pageNum:1,pageSize:20},_={resultData:"list",total:"count"};function A(e){if(!e.tableDataResolver)throw new Error("TableDataResolver is required.");const{tableDataResolver:a}=C(e),t=c(S(e.searchQuery,R)),o=c(e.isPagination==null?!0:e.isPagination),i=c(e.hasMounted==null?!0:e.hasMounted),n=c(e.shim||(u=>u)),r=c(S(e.responseProps,_)),g=c({defaultCurrent:t.value.pageNum,defaultPageSize:t.value.pageSize,total:0}),s=j({listLoading:!1,list:[],total:0}),l=()=>new Promise((u,w)=>{s.listLoading=!0;const D=[P(t)];P(a)(...D).then(h=>{const{data:d}=h;if(o.value){const{[r.value.resultData]:O,[r.value.total]:y}=d;s.list=n.value(O),s.total=y,g.value&&(g.value.total=y)}else s.list=n.value(d),s.total=s.list.length,g.value=void 0;u(d)}).catch(h=>{w(h)}).finally(()=>{s.listLoading=!1})}),b=u=>{t.value.pageSize=u,l()},m=u=>{t.value.pageNum=u,l()};i.value&&N(()=>{l()});const{list:L,total:z,listLoading:M}=C(s);return{list:L,total:z,listLoading:M,getList:l,handleCurrentPageChange:m,handlePageSizeChange:b,searchQuery:t,pagination:g}}function T(e){const{getList:a,list:t,listLoading:o,total:i,pagination:n,searchQuery:r,handleCurrentPageChange:g,handlePageSizeChange:s}=A(e);return{list:t,total:i,listLoading:o,getList:a,handleCurrentPageChange:g,handlePageSizeChange:s,searchQuery:r,pagination:n,handlePageChange:l=>{r.value.pageSize=l.pageSize,r.value.pageNum=l.current,a()}}}function E(){return{showSuccessMessage:(e="\u64CD\u4F5C\u6210\u529F",a,t)=>{f.success(e,a)},showWarningMessage:(e,a,t)=>{f.warning(e,a)},showErrorMessage:(e="\u64CD\u4F5C\u5931\u8D25",a,t)=>{f.error(e,a)}}}export{T as Q,E as W};
