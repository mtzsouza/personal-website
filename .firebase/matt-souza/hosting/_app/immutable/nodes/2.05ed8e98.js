import{s as k,d as h,n as p}from"../chunks/scheduler.cc9b4bb6.js";import{S as y,i as A,d as j,v as D,j as u,s as E,o as $,k as v,A as P,c as O,l as R,p as S,g as r,m as b,a as f,z as _}from"../chunks/index.73694274.js";const x="C:/Users/authe/Downloads/Projects/personalWebsite/src/routes/+page.svelte";function g(d){let t,i="Welcome to SvelteKit",l,e,a,n,C="kit.svelte.dev",m;const w={c:function(){t=u("h1"),t.textContent=i,l=E(),e=u("p"),a=$("Visit "),n=u("a"),n.textContent=C,m=$(" to read the documentation"),this.h()},l:function(s){t=v(s,"H1",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-6u0m7v"&&(t.textContent=i),l=O(s),e=v(s,"P",{});var o=R(e);a=S(o,"Visit "),n=v(o,"A",{href:!0,"data-svelte-h":!0}),P(n)!=="svelte-r2hwjt"&&(n.textContent=C),m=S(o," to read the documentation"),o.forEach(r),this.h()},h:function(){b(t,"class","text-4xl"),h(t,x,0,0,0),b(n,"href","https://kit.svelte.dev"),h(n,x,1,9,56),h(e,x,1,0,47)},m:function(s,o){f(s,t,o),f(s,l,o),f(s,e,o),_(e,a),_(e,n),_(e,m)},p,i:p,o:p,d:function(s){s&&(r(t),r(l),r(e))}};return j("SvelteRegisterBlock",{block:w,id:g.name,type:"component",source:"",ctx:d}),w}function V(d,t){let{$$slots:i={},$$scope:l}=t;D("Page",i,[]);const e=[];return Object.keys(t).forEach(a=>{!~e.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),[]}class z extends y{constructor(t){super(t),A(this,t,V,g,k,{}),j("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:g.name})}}export{z as component};