const m=[{id:1,name:"\u5ED6\u6DB5\u884D",userAge:25},{id:2,name:"\u9093\u6BC5\u7136",userAge:25},{id:3,name:"\u8C22\u627F\u671B",userAge:25},{id:4,name:"\u80E1\u5609\u8363",userAge:25},{id:5,name:"\u80E1\u548C\u5E73",userAge:25},{id:6,name:"\u949F\u5F18\u548C",userAge:25},{id:7,name:"\u9AD8\u6CE2\u5149",userAge:25},{id:8,name:"\u6C5F\u627F\u5B89",userAge:25},{id:9,name:"\u9ECE\u627F\u6069",userAge:25},{id:10,name:"\u8D75\u6D69\u7136",userAge:25},{id:11,name:"\u6881\u82E5\u4E91",userAge:25},{id:12,name:"\u5468\u82B3\u6CFD",userAge:25},{id:13,name:"\u4E54\u6E05\u5609",userAge:25},{id:14,name:"\u8881\u53F8\u8FB0",userAge:25},{id:15,name:"\u77F3\u79C0\u5A9A",userAge:25},{id:16,name:"\u91D1\u60E0\u82B3",userAge:25},{id:17,name:"\u90B9\u6292\u6000",userAge:25},{id:18,name:"\u590F\u94C3\u8BED",userAge:25},{id:19,name:"\u9648\u6D25\u6587",userAge:25}],g=[{id:1,name:"\u5ED6\u6DB5\u884D",userAge:25},{id:2,name:"\u9093\u6BC5\u7136",userAge:25},{id:3,name:"\u8C22\u627F\u671B",userAge:25},{id:4,name:"\u80E1\u5609\u8363",userAge:25},{id:5,name:"\u80E1\u548C\u5E73",userAge:25}],o=e=>{console.log("query",e);const{pageNum:n,pageSize:s,name:u}=e;return new Promise((a,l)=>{let i=m;u&&(i=i.filter(d=>d.name==e.name));const r=(n-1)*s,t=r+s,A=i.slice(r,t);a({data:{list:A,count:i.length}})})},c=e=>(console.log("query",e),new Promise((n,s)=>{let u=m;e.name&&(u=u.filter(a=>a.name.includes(e.name))),n({data:u})})),E=e=>(console.log("query",e),new Promise((n,s)=>{let u=g;e.name&&(u=u.filter(a=>a.name.includes(e.name))),n({data:u})}));export{E as a,c as b,o as s};