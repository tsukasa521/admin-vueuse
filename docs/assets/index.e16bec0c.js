import{toRefs as S,ref as i,reactive as O,onMounted as A,computed as R,unref as m}from"vue";function b(t,n,e=".",l){if(!f(n))return b(t,{},e,l);const o=Object.assign({},n);for(const a in t){if(a==="__proto__"||a==="constructor")continue;const r=t[a];r!=null&&(l&&l(o,a,r,e)||(Array.isArray(r)&&Array.isArray(o[a])?o[a]=[...r,...o[a]]:f(r)&&f(o[a])?o[a]=b(r,o[a],(e?`${e}.`:"")+a.toString(),l):o[a]=r))}return o}function f(t){if(t===null||typeof t!="object")return!1;const n=Object.getPrototypeOf(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function _(t){return(...n)=>n.reduce((e,l)=>b(e,l,"",t),{})}const y=_(),N={pageNum:1,pageSize:20},E={resultData:"list",total:"count"};function Q(t){if(!t.tableDataResolver)throw new Error("TableDataResolver is required.");const{tableDataResolver:n}=S(t),e=i(y(t.searchQuery,N)),l=i(t.isPagination==null?!0:t.isPagination),o=i(t.hasMounted==null?!0:t.hasMounted),a=i(t.shim||(u=>u)),r=i(y(t.responseProps,E)),g=i({defaultCurrent:e.value.pageNum,defaultPageSize:e.value.pageSize,total:0}),s=O({listLoading:!1,list:[],total:0}),c=()=>new Promise((u,v)=>{s.listLoading=!0;const j=[m(e)];m(n)(...j).then(p=>{const{data:d}=p;if(l.value){const{[r.value.resultData]:L,[r.value.total]:h}=d;s.list=a.value(L),s.total=h,g.value&&(g.value.total=h)}else s.list=a.value(d),s.total=s.list.length,g.value=void 0;u(d)}).catch(p=>{v(p)}).finally(()=>{s.listLoading=!1})}),P=({current:u,pageSize:v})=>{e.value.pageSize=v,e.value.pageNum=u,c()},C=u=>{e.value.pageSize=u,c()},D=u=>{e.value.pageNum=u,c()};o.value&&A(()=>{c()});const{list:w,total:z,listLoading:M}=S(s);return{list:w,total:z,listLoading:M,getList:c,handleCurrentPageChange:D,handlePageSizeChange:C,handlePageChange:P,searchQuery:e,pagination:g}}function q(){return{showSuccessMessage:(t="\u64CD\u4F5C\u6210\u529F",n,e)=>{console.log(t)},showWarningMessage:(t,n,e)=>{console.warn(t)},showErrorMessage:(t="\u64CD\u4F5C\u5931\u8D25",n,e)=>{console.error(t)}}}const x=["update:visible","cancel","resolve","open","closed"],T={source:Object};function V(t,n){const e=R({get(){return t.visible},set(o){n("update:visible",o)}}),l=i(!1);return{currentVisible:e,buttonLoading:l}}function W(){const t=i(!1),n=i(null);return{modalVisible:t,modalSource:n,openModal:e=>{t.value=!0,n.value=e}}}export{q as Q,x as U,V as W,W as k,Q as q,T as x};