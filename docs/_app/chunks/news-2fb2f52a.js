import{S as t,i as e,s,T as n,e as r,c as a,a as l,d as o,b as c,K as i,f as u,F as $,U as f,V as h,W as p,x as d,u as m,Y as g,t as v,g as w,h as y,G as E,j as x,k as b,m as j,n as A,o as L,v as k,l as H,r as P,w as R,P as T,Q as N,R as q}from"./vendor-0aa77445.js";import{H as S}from"./Heading-76e56b48.js";import{g as I,r as W}from"./singletons-ff603286.js";function C(t){let e,s,g;const v=t[2].default,w=n(v,t,t[1],null);return{c(){e=r("h3"),s=r("span"),w&&w.c(),this.h()},l(t){e=a(t,"H3",{class:!0});var n=l(e);s=a(n,"SPAN",{class:!0});var r=l(s);w&&w.l(r),r.forEach(o),n.forEach(o),this.h()},h(){c(s,"class","svelte-hu28uw"),c(e,"class","svelte-hu28uw"),i(e,"sm:text-center",t[0])},m(t,n){u(t,e,n),$(e,s),w&&w.m(s,null),g=!0},p(t,[s]){w&&w.p&&(!g||2&s)&&f(w,v,t,t[1],g?p(v,t[1],s,null):h(t[1]),null),1&s&&i(e,"sm:text-center",t[0])},i(t){g||(d(w,t),g=!0)},o(t){m(w,t),g=!1},d(t){t&&o(e),w&&w.d(t)}}}function D(t,e,s){let{$$slots:n={},$$scope:r}=e,{center:a=!1}=e;return t.$$set=t=>{"center"in t&&s(0,a=t.center),"$$scope"in t&&s(1,r=t.$$scope)},[a,r,n]}class K extends t{constructor(t){super(),e(this,t,D,C,s,{center:0})}}const O=W,_=function(t){return O.prefetch(new URL(t,I(document)))};function M(t){let e,s,i;const $=t[9].default,E=n($,t,t[8],null),x=E||function(t){let e;return{c(){e=v(t[0])},l(s){e=w(s,t[0])},m(t,s){u(t,e,s)},p(t,s){1&s&&y(e,t[0])},d(t){t&&o(e)}}}(t);return{c(){e=r("a"),x&&x.c(),this.h()},l(t){e=a(t,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var s=l(e);x&&x.l(s),s.forEach(o),this.h()},h(){c(e,"href",t[0]),c(e,"target",t[3]),c(e,"rel",t[4]),c(e,"aria-label",t[1]),c(e,"class",s=g(t[2])+" svelte-vvbqrc")},m(t,s){u(t,e,s),x&&x.m(e,null),i=!0},p(t,[n]){E?E.p&&(!i||256&n)&&f(E,$,t,t[8],i?p($,t[8],n,null):h(t[8]),null):x&&x.p&&(!i||1&n)&&x.p(t,i?n:-1),(!i||1&n)&&c(e,"href",t[0]),(!i||2&n)&&c(e,"aria-label",t[1]),(!i||4&n&&s!==(s=g(t[2])+" svelte-vvbqrc"))&&c(e,"class",s)},i(t){i||(d(x,t),i=!0)},o(t){m(x,t),i=!1},d(t){t&&o(e),x&&x.d(t)}}}function U(t,e,s){let{$$slots:n={},$$scope:r}=e,{href:a}=e,{internal:l=!1}=e,{label:o=null}=e,{button:c=!1}=e,{colour:i=null}=e;l&&_(a);const u=l?null:"_blank",$="noopener "+(l?"":"external");let f="";return f+=c?"button":"link",f+=c&&i?` ${i}`:"",t.$$set=t=>{"href"in t&&s(0,a=t.href),"internal"in t&&s(5,l=t.internal),"label"in t&&s(1,o=t.label),"button"in t&&s(6,c=t.button),"colour"in t&&s(7,i=t.colour),"$$scope"in t&&s(8,r=t.$$scope)},[a,o,f,u,$,l,c,i,r,n]}class F extends t{constructor(t){super(),e(this,t,U,M,s,{href:0,internal:5,label:1,button:6,colour:7})}}function G(t){let e,s;return{c(){e=r("span"),s=v(t[1]),this.h()},l(n){e=a(n,"SPAN",{class:!0});var r=l(e);s=w(r,t[1]),r.forEach(o),this.h()},h(){c(e,"class","svelte-12j9q79")},m(t,n){u(t,e,n),$(e,s)},p:E,d(t){t&&o(e)}}}function Q(t){let e,s,n,i,f,h,p;s=new F({props:{href:t[0],internal:!0,$$slots:{default:[G]},$$scope:{ctx:t}}});let g=t[3]&&function(t){let e,s,n,i=new Date(t[3]).toLocaleString()+"";return{c(){e=r("small"),s=v("posted "),n=v(i),this.h()},l(t){e=a(t,"SMALL",{class:!0});var r=l(e);s=w(r,"posted "),n=w(r,i),r.forEach(o),this.h()},h(){c(e,"class","svelte-12j9q79")},m(t,r){u(t,e,r),$(e,s),$(e,n)},p:E,d(t){t&&o(e)}}}(t);return{c(){e=r("li"),x(s.$$.fragment),n=b(),i=r("p"),f=v(t[2]),h=b(),g&&g.c(),this.h()},l(r){e=a(r,"LI",{class:!0});var c=l(e);j(s.$$.fragment,c),n=A(c),i=a(c,"P",{});var u=l(i);f=w(u,t[2]),u.forEach(o),h=A(c),g&&g.l(c),c.forEach(o),this.h()},h(){c(e,"class","svelte-12j9q79")},m(t,r){u(t,e,r),L(s,e,null),$(e,n),$(e,i),$(i,f),$(e,h),g&&g.m(e,null),p=!0},p(t,[e]){const n={};32&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n),t[3]&&g.p(t,e)},i(t){p||(d(s.$$.fragment,t),p=!0)},o(t){m(s.$$.fragment,t),p=!1},d(t){t&&o(e),k(s),g&&g.d()}}}function V(t,e,s){let{article:n}=e;const{slug:r,title:a,description:l,date:o}=n;return t.$$set=t=>{"article"in t&&s(4,n=t.article)},[r,a,l,o,n]}class Y extends t{constructor(t){super(),e(this,t,V,Q,s,{article:4})}}function z(t,e,s){const n=t.slice();return n[1]=e[s],n}function B(t){let e,s;return e=new K({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p(t,s){const n={};16&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function J(t){let e,s,n=[],i=new Map,$=t[0];const f=t=>t[1].slug;for(let r=0;r<$.length;r+=1){let e=z(t,$,r),s=f(e);i.set(s,n[r]=Z(s,e))}return{c(){e=r("ol");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=a(t,"OL",{class:!0});var s=l(e);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(o),this.h()},h(){c(e,"class","svelte-1wvi8m3")},m(t,r){u(t,e,r);for(let s=0;s<n.length;s+=1)n[s].m(e,null);s=!0},p(t,s){1&s&&($=t[0],P(),n=T(n,s,f,1,t,$,i,e,N,Z,null,z),R())},i(t){if(!s){for(let t=0;t<$.length;t+=1)d(n[t]);s=!0}},o(t){for(let e=0;e<n.length;e+=1)m(n[e]);s=!1},d(t){t&&o(e);for(let e=0;e<n.length;e+=1)n[e].d()}}}function X(t){let e;return{c(){e=v("Kaua panui. Aroha mai!")},l(t){e=w(t,"Kaua panui. Aroha mai!")},m(t,s){u(t,e,s)},d(t){t&&o(e)}}}function Z(t,e){let s,n,r;return n=new Y({props:{article:e[1]}}),{key:t,first:null,c(){s=H(),x(n.$$.fragment),this.h()},l(t){s=H(),j(n.$$.fragment,t),this.h()},h(){this.first=s},m(t,e){u(t,s,e),L(n,t,e),r=!0},p(t,s){e=t;const r={};1&s&&(r.article=e[1]),n.$set(r)},i(t){r||(d(n.$$.fragment,t),r=!0)},o(t){m(n.$$.fragment,t),r=!1},d(t){t&&o(s),k(n,t)}}}function tt(t){let e,s,n,r;const a=[J,B],l=[];function c(t,e){return t[0].length>0?0:1}return e=c(t),s=l[e]=a[e](t),{c(){s.c(),n=H()},l(t){s.l(t),n=H()},m(t,s){l[e].m(t,s),u(t,n,s),r=!0},p(t,[r]){let o=e;e=c(t),e===o?l[e].p(t,r):(P(),m(l[o],1,1,(()=>{l[o]=null})),R(),s=l[e],s?s.p(t,r):(s=l[e]=a[e](t),s.c()),d(s,1),s.m(n.parentNode,n))},i(t){r||(d(s),r=!0)},o(t){m(s),r=!1},d(t){l[e].d(t),t&&o(n)}}}function et(t,e,s){let{articles:n}=e;return t.$$set=t=>{"articles"in t&&s(0,n=t.articles)},[n]}class st extends t{constructor(t){super(),e(this,t,et,tt,s,{articles:0})}}function nt(t){let e;return{c(){e=v("Panui (news)")},l(t){e=w(t,"Panui (news)")},m(t,s){u(t,e,s)},d(t){t&&o(e)}}}function rt(t){let e;return{c(){e=v("Other info")},l(t){e=w(t,"Other info")},m(t,s){u(t,e,s)},d(t){t&&o(e)}}}function at(t){let e,s,n,i,f,h,p,g,v,w,y,E,H,P,R;return e=new q({props:{title:"News & other resources",description:"A news stream of blogs & updates from the Whakaoranga Whanau &\n    He Waka Eke Noa Te Tai Tokerau; news & updates from the community"}}),h=new S({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),g=new st({props:{articles:t[0]}}),E=new S({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),P=new st({props:{articles:t[1]}}),{c(){x(e.$$.fragment),s=b(),n=r("article"),i=r("article"),f=r("header"),x(h.$$.fragment),p=b(),x(g.$$.fragment),v=b(),w=r("article"),y=r("header"),x(E.$$.fragment),H=b(),x(P.$$.fragment),this.h()},l(t){j(e.$$.fragment,t),s=A(t),n=a(t,"ARTICLE",{class:!0});var r=l(n);i=a(r,"ARTICLE",{class:!0});var c=l(i);f=a(c,"HEADER",{});var u=l(f);j(h.$$.fragment,u),u.forEach(o),p=A(c),j(g.$$.fragment,c),c.forEach(o),v=A(r),w=a(r,"ARTICLE",{class:!0});var $=l(w);y=a($,"HEADER",{});var d=l(y);j(E.$$.fragment,d),d.forEach(o),H=A($),j(P.$$.fragment,$),$.forEach(o),r.forEach(o),this.h()},h(){c(i,"class","gaps-y"),c(w,"class","gaps-y"),c(n,"class","root column pad-y gaps-y")},m(t,r){L(e,t,r),u(t,s,r),u(t,n,r),$(n,i),$(i,f),L(h,f,null),$(i,p),L(g,i,null),$(n,v),$(n,w),$(w,y),L(E,y,null),$(w,H),L(P,w,null),R=!0},p(t,[e]){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),h.$set(s);const n={};1&e&&(n.articles=t[0]),g.$set(n);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),E.$set(r);const a={};2&e&&(a.articles=t[1]),P.$set(a)},i(t){R||(d(e.$$.fragment,t),d(h.$$.fragment,t),d(g.$$.fragment,t),d(E.$$.fragment,t),d(P.$$.fragment,t),R=!0)},o(t){m(e.$$.fragment,t),m(h.$$.fragment,t),m(g.$$.fragment,t),m(E.$$.fragment,t),m(P.$$.fragment,t),R=!1},d(t){k(e,t),t&&o(s),t&&o(n),k(h),k(g),k(E),k(P)}}}var lt=function(t,e,s,n){return new(s||(s=Promise))((function(r,a){function l(t){try{c(n.next(t))}catch(e){a(e)}}function o(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(l,o)}c((n=n.apply(t,e||[])).next())}))};const ot=({fetch:t})=>lt(void 0,void 0,void 0,(function*(){return{props:{docs:(yield(yield t("/docs/docs.json")).json()).docs}}})),ct=({fetch:t})=>lt(void 0,void 0,void 0,(function*(){return{props:{news:(yield(yield t("/news/news.json")).json()).news}}})),it=({fetch:t})=>lt(void 0,void 0,void 0,(function*(){const e=yield(yield t("/news/news.json")).json(),s=yield(yield t("/docs/docs.json")).json();return{props:{news:e.news,docs:s.docs}}}));function ut(t,e,s){this&&this.__awaiter;let{news:n}=e,{docs:r}=e;return t.$$set=t=>{"news"in t&&s(0,n=t.news),"docs"in t&&s(1,r=t.docs)},[n,r]}class $t extends t{constructor(t){super(),e(this,t,ut,at,s,{news:0,docs:1})}}export{st as A,K as H,F as L,$t as N,ot as a,it as b,ct as l};