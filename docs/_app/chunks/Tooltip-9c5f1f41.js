import{S as t,i as o,s,l as a,f as l,r as e,u as n,w as p,x as i,d as r,T as c,e as u,c as h,a as g,b as d,K as f,U as m,V as $,W as b,H as x}from"./vendor-0aa77445.js";function v(t){let o,s;const a=t[9].default,e=c(a,t,t[8],null);return{c(){o=u("span"),e&&e.c(),this.h()},l(t){o=h(t,"SPAN",{"data-tooltip":!0,"aria-haspopup":!0,class:!0});var s=g(o);e&&e.l(s),s.forEach(r),this.h()},h(){d(o,"data-tooltip",t[0]),d(o,"aria-haspopup","true"),d(o,"class","svelte-6hnsyg"),f(o,"bottom",t[1]),f(o,"top",t[2]),f(o,"left",t[3]),f(o,"right",t[4])},m(t,a){l(t,o,a),e&&e.m(o,null),s=!0},p(t,l){e&&e.p&&(!s||256&l)&&m(e,a,t,t[8],s?b(a,t[8],l,null):$(t[8]),null),(!s||1&l)&&d(o,"data-tooltip",t[0]),2&l&&f(o,"bottom",t[1]),4&l&&f(o,"top",t[2]),8&l&&f(o,"left",t[3]),16&l&&f(o,"right",t[4])},i(t){s||(i(e,t),s=!0)},o(t){n(e,t),s=!1},d(t){t&&r(o),e&&e.d(t)}}}function N(t){let o,s,a,e;const p=t[9].default,v=c(p,t,t[8],null);return{c(){o=u("span"),v&&v.c(),this.h()},l(t){o=h(t,"SPAN",{"data-tooltip":!0,"aria-haspopup":!0,class:!0});var s=g(o);v&&v.l(s),s.forEach(r),this.h()},h(){d(o,"data-tooltip",t[0]),d(o,"aria-haspopup","true"),d(o,"class","svelte-6hnsyg"),f(o,"bottom",t[1]&&!t[2]),f(o,"top",t[2]),f(o,"left",t[3]),f(o,"right",t[4]),f(o,"toggled",t[6])},m(n,p){l(n,o,p),v&&v.m(o,null),s=!0,a||(e=x(o,"click",t[7]),a=!0)},p(t,a){v&&v.p&&(!s||256&a)&&m(v,p,t,t[8],s?b(p,t[8],a,null):$(t[8]),null),(!s||1&a)&&d(o,"data-tooltip",t[0]),6&a&&f(o,"bottom",t[1]&&!t[2]),4&a&&f(o,"top",t[2]),8&a&&f(o,"left",t[3]),16&a&&f(o,"right",t[4]),64&a&&f(o,"toggled",t[6])},i(t){s||(i(v,t),s=!0)},o(t){n(v,t),s=!1},d(t){t&&r(o),v&&v.d(t),a=!1,e()}}}function S(t){let o,s,c,u;const h=[N,v],g=[];function d(t,o){return t[5]?0:1}return o=d(t),s=g[o]=h[o](t),{c(){s.c(),c=a()},l(t){s.l(t),c=a()},m(t,s){g[o].m(t,s),l(t,c,s),u=!0},p(t,[a]){let l=o;o=d(t),o===l?g[o].p(t,a):(e(),n(g[l],1,1,(()=>{g[l]=null})),p(),s=g[o],s?s.p(t,a):(s=g[o]=h[o](t),s.c()),i(s,1),s.m(c.parentNode,c))},i(t){u||(i(s),u=!0)},o(t){n(s),u=!1},d(t){g[o].d(t),t&&r(c)}}}function y(t,o,s){let{$$slots:a={},$$scope:l}=o,{text:e}=o,{bottom:n=!0}=o,{top:p=!1}=o,{left:i=!1}=o,{right:r=!1}=o,{toggles:c=!1}=o,u=!1;return t.$$set=t=>{"text"in t&&s(0,e=t.text),"bottom"in t&&s(1,n=t.bottom),"top"in t&&s(2,p=t.top),"left"in t&&s(3,i=t.left),"right"in t&&s(4,r=t.right),"toggles"in t&&s(5,c=t.toggles),"$$scope"in t&&s(8,l=t.$$scope)},[e,n,p,i,r,c,u,()=>s(6,u=!u),l,a]}class A extends t{constructor(t){super(),o(this,t,y,S,s,{text:0,bottom:1,top:2,left:3,right:4,toggles:5})}}export{A as T};