import{Z as e,S as t,i as s,s as a,j as n,m as r,o,x as l,u as c,v as i,e as m,k as u,t as f,c as h,a as g,n as d,g as p,d as $,W as v,b,f as E,F as x,h as j,r as k,w as S,a2 as w,l as N,_ as I,L as q,$ as y,G as C,a7 as P}from"../chunks/vendor-49d51924.js";import{a as D}from"../chunks/paths-bacddcca.js";import{P as M}from"../chunks/Paragraph-21b9021f.js";import{U as O}from"../chunks/UnderConstruction-eb438ead.js";import{s as T}from"../chunks/seo-8585edea.js";import"../chunks/Skew-59d442f5.js";const U=e([{name:"Rhonda",tags:["management","clinical"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],frontline:!0,imgSrc:`${D}/images/people/rhonda.jpg`}]);function A(e,t,s){const a=e.slice();return a[1]=t[s],a}function G(e){let t,s=e[1]+"";return{c(){t=f(s)},l(e){t=p(e,s)},m(e,s){E(e,t,s)},p(e,a){1&a&&s!==(s=e[1]+"")&&j(t,s)},d(e){e&&$(t)}}}function H(e){let t,s;return t=new M({props:{$$slots:{default:[G]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,a){o(t,e,a),s=!0},p(e,s){const a={};17&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){i(t,e)}}}function L(e){let t,s,a,n,r,o,i,N,I,q,y,C,P,D,M,O=e[0].name+"",T=e[0].tags.join(" | ")+"",U=e[0].about,G=[];for(let l=0;l<U.length;l+=1)G[l]=H(A(e,U,l));const L=e=>c(G[e],1,1,(()=>{G[e]=null}));return{c(){t=m("section"),s=m("img"),r=u(),o=m("h1"),i=m("span"),N=f(O),I=u(),q=m("h2"),y=m("span"),C=f(T),P=u(),D=m("div");for(let e=0;e<G.length;e+=1)G[e].c();this.h()},l(e){t=h(e,"SECTION",{class:!0});var a=g(t);s=h(a,"IMG",{src:!0,alt:!0,class:!0}),r=d(a),o=h(a,"H1",{class:!0});var n=g(o);i=h(n,"SPAN",{class:!0});var l=g(i);N=p(l,O),l.forEach($),n.forEach($),I=d(a),q=h(a,"H2",{class:!0});var c=g(q);y=h(c,"SPAN",{});var m=g(y);C=p(m,T),m.forEach($),c.forEach($),P=d(a),D=h(a,"DIV",{class:!0});var u=g(D);for(let t=0;t<G.length;t+=1)G[t].l(u);u.forEach($),a.forEach($),this.h()},h(){v(s.src,a=e[0].imgSrc)||b(s,"src",a),b(s,"alt",n="image of "+e[0].name),b(s,"class","svelte-nte1rg"),b(i,"class","svelte-nte1rg"),b(o,"class","svelte-nte1rg"),b(q,"class","svelte-nte1rg"),b(D,"class","blurb svelte-nte1rg"),b(t,"class","member svelte-nte1rg")},m(e,a){E(e,t,a),x(t,s),x(t,r),x(t,o),x(o,i),x(i,N),x(t,I),x(t,q),x(q,y),x(y,C),x(t,P),x(t,D);for(let t=0;t<G.length;t+=1)G[t].m(D,null);M=!0},p(e,[t]){if((!M||1&t&&!v(s.src,a=e[0].imgSrc))&&b(s,"src",a),(!M||1&t&&n!==(n="image of "+e[0].name))&&b(s,"alt",n),(!M||1&t)&&O!==(O=e[0].name+"")&&j(N,O),(!M||1&t)&&T!==(T=e[0].tags.join(" | ")+"")&&j(C,T),1&t){let s;for(U=e[0].about,s=0;s<U.length;s+=1){const a=A(e,U,s);G[s]?(G[s].p(a,t),l(G[s],1)):(G[s]=H(a),G[s].c(),l(G[s],1),G[s].m(D,null))}for(k(),s=U.length;s<G.length;s+=1)L(s);S()}},i(e){if(!M){for(let e=0;e<U.length;e+=1)l(G[e]);M=!0}},o(e){G=G.filter(Boolean);for(let t=0;t<G.length;t+=1)c(G[t]);M=!1},d(e){e&&$(t),w(G,e)}}}function V(e,t,s){let{member:a}=t;return e.$$set=e=>{"member"in e&&s(0,a=e.member)},[a]}class B extends t{constructor(e){super(),s(this,e,V,L,a,{member:0})}}function F(e,t,s){const a=e.slice();return a[1]=t[s],a}function R(e,t){let s,a,m;return a=new B({props:{member:t[1]}}),{key:e,first:null,c(){s=N(),n(a.$$.fragment),this.h()},l(e){s=N(),r(a.$$.fragment,e),this.h()},h(){this.first=s},m(e,t){E(e,s,t),o(a,e,t),m=!0},p(e,s){t=e;const n={};1&s&&(n.member=t[1]),a.$set(n)},i(e){m||(l(a.$$.fragment,e),m=!0)},o(e){c(a.$$.fragment,e),m=!1},d(e){e&&$(s),i(a,e)}}}function W(e){let t,s,a=[],n=new Map,r=e[0];const o=e=>e[1].name;for(let l=0;l<r.length;l+=1){let t=F(e,r,l),s=o(t);n.set(s,a[l]=R(s,t))}return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=N()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=N()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);E(e,t,n),s=!0},p(e,[s]){1&s&&(r=e[0],k(),a=I(a,s,o,1,e,r,n,t.parentNode,y,R,t,F),S())},i(e){if(!s){for(let e=0;e<r.length;e+=1)l(a[e]);s=!0}},o(e){for(let t=0;t<a.length;t+=1)c(a[t]);s=!1},d(e){for(let t=0;t<a.length;t+=1)a[t].d(e);e&&$(t)}}}function Z(e,t,s){let a;return q(e,U,(e=>s(0,a=e))),[a]}class _ extends t{constructor(e){super(),s(this,e,Z,W,a,{})}}function z(e){let t,s,a,f,p,v,j;return s=new O({}),v=new _({}),{c(){t=m("section"),n(s.$$.fragment),a=u(),f=m("div"),p=m("section"),n(v.$$.fragment),this.h()},l(e){t=h(e,"SECTION",{class:!0});var n=g(t);r(s.$$.fragment,n),n.forEach($),a=d(e),f=h(e,"DIV",{class:!0});var o=g(f);p=h(o,"SECTION",{});var l=g(p);r(v.$$.fragment,l),l.forEach($),o.forEach($),this.h()},h(){b(t,"class","under-construction pad-y pad-x"),b(f,"class","root column pad-y gaps-y")},m(e,n){E(e,t,n),o(s,t,null),E(e,a,n),E(e,f,n),x(f,p),o(v,p,null),j=!0},p:C,i(e){j||(l(s.$$.fragment,e),l(v.$$.fragment,e),j=!0)},o(e){c(s.$$.fragment,e),c(v.$$.fragment,e),j=!1},d(e){e&&$(t),i(s),e&&$(a),e&&$(f),i(v)}}}function J(e,t,s){let a;return q(e,T,(e=>s(0,a=e))),P(T,a={title:"Ngā kaimahi",description:"Meet the staff; those in front and behind the scenes",robots:"none"},a),[]}class K extends t{constructor(e){super(),s(this,e,J,z,a,{})}}export{K as default};
