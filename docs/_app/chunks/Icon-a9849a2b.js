import{S as t,i as s,s as l,D as e,e as n,c as i,a as r,d as h,b as o,M as c,f as a,E as u,F as f,G as d,x as g,u as p,l as m,R as v,_ as w,$ as x,a8 as $,p as j,a3 as y,B as E}from"./vendor-dc84e8b1.js";function B(t){let s,l;const m=t[2].default,v=e(m,t,t[1],null);return{c(){s=n("p"),v&&v.c(),this.h()},l(t){s=i(t,"P",{class:!0});var l=r(s);v&&v.l(l),l.forEach(h),this.h()},h(){o(s,"class","svelte-1lsrv9g"),c(s,"text-justify",t[0])},m(t,e){a(t,s,e),v&&v.m(s,null),l=!0},p(t,[e]){v&&v.p&&(!l||2&e)&&u(v,m,t,t[1],l?d(m,t[1],e,null):f(t[1]),null),1&e&&c(s,"text-justify",t[0])},i(t){l||(g(v,t),l=!0)},o(t){p(v,t),l=!1},d(t){t&&h(s),v&&v.d(t)}}}function z(t,s,l){let{$$slots:e={},$$scope:n}=s,{justify:i=!1}=s;return t.$$set=t=>{"justify"in t&&l(0,i=t.justify),"$$scope"in t&&l(1,n=t.$$scope)},[i,n,e]}class b extends t{constructor(t){super(),s(this,t,z,B,l,{justify:0})}}function k(t,s,l){const e=t.slice();return e[4]=s[l],e}function C(t,s,l){const e=t.slice();return e[4]=s[l],e}function I(t){var s;let l,e=null!=(s=t[1][0])?s:[],n=[];for(let i=0;i<e.length;i+=1)n[i]=D(k(t,e,i));return{c(){l=w("svg");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){l=x(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0,height:!0,width:!0,"aria-hidden":!0});var s=r(l);for(let l=0;l<n.length;l+=1)n[l].l(s);s.forEach(h),this.h()},h(){o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"viewBox","0 0 20 20"),o(l,"fill","currentColor"),o(l,"class",t[3]),o(l,"height",t[0]),o(l,"width",t[0]),o(l,"aria-hidden","true")},m(t,s){a(t,l,s);for(let e=0;e<n.length;e+=1)n[e].m(l,null)},p(t,s){var i;if(2&s){let r;for(e=null!=(i=t[1][0])?i:[],r=0;r<e.length;r+=1){const i=k(t,e,r);n[r]?n[r].p(i,s):(n[r]=D(i),n[r].c(),n[r].m(l,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=e.length}1&s&&o(l,"height",t[0]),1&s&&o(l,"width",t[0])},d(t){t&&h(l),y(n,t)}}}function P(t){var s;let l,e=null!=(s=t[1][1])?s:[],n=[];for(let i=0;i<e.length;i+=1)n[i]=F(C(t,e,i));return{c(){l=w("svg");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){l=x(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,stroke:!0,class:!0,height:!0,width:!0,"aria-hidden":!0});var s=r(l);for(let l=0;l<n.length;l+=1)n[l].l(s);s.forEach(h),this.h()},h(){o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"viewBox","0 0 24 24"),o(l,"fill","none"),o(l,"stroke","currentColor"),o(l,"class",t[3]),o(l,"height",t[0]),o(l,"width",t[0]),o(l,"aria-hidden","true")},m(t,s){a(t,l,s);for(let e=0;e<n.length;e+=1)n[e].m(l,null)},p(t,s){var i;if(2&s){let r;for(e=null!=(i=t[1][1])?i:[],r=0;r<e.length;r+=1){const i=C(t,e,r);n[r]?n[r].p(i,s):(n[r]=F(i),n[r].c(),n[r].m(l,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=e.length}1&s&&o(l,"height",t[0]),1&s&&o(l,"width",t[0])},d(t){t&&h(l),y(n,t)}}}function D(t){let s,l=[t[4]],e={};for(let n=0;n<l.length;n+=1)e=E(e,l[n]);return{c(){s=w("path"),this.h()},l(t){s=x(t,"path",{}),r(s).forEach(h),this.h()},h(){$(s,e)},m(t,l){a(t,s,l)},p(t,n){$(s,e=j(l,[2&n&&t[4]]))},d(t){t&&h(s)}}}function F(t){let s,l=[t[4]],e={};for(let n=0;n<l.length;n+=1)e=E(e,l[n]);return{c(){s=w("path"),this.h()},l(t){s=x(t,"path",{}),r(s).forEach(h),this.h()},h(){$(s,e)},m(t,l){a(t,s,l)},p(t,n){$(s,e=j(l,[2&n&&t[4]]))},d(t){t&&h(s)}}}function G(t){let s;function l(t,s){return t[2]?I:P}let e=l(t),n=e(t);return{c(){n.c(),s=m()},l(t){n.l(t),s=m()},m(t,l){n.m(t,l),a(t,s,l)},p(t,[i]){e===(e=l(t))&&n?n.p(t,i):(n.d(1),n=e(t),n&&(n.c(),n.m(s.parentNode,s)))},i:v,o:v,d(t){n.d(t),t&&h(s)}}}function M(t,s,l){let{src:e}=s,{solid:n=!1}=s,{size:i="22"}=s;if("100%"!==i&&"x"!=i.slice(-1)&&"m"!=i.slice(-1)&&"%"!=i.slice(-1))try{i=parseInt(i)+"px"}catch(h){i="100%"}const r="heroicon "+(n?"solid":"outline");return t.$$set=t=>{"src"in t&&l(1,e=t.src),"solid"in t&&l(2,n=t.solid),"size"in t&&l(0,i=t.size)},[i,e,n,r]}class N extends t{constructor(t){super(),s(this,t,M,G,l,{src:1,solid:2,size:0})}}export{N as I,b as P};
