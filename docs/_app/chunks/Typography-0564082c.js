import{S as s,i as t,s as e,j as a,m as n,o,x as l,u as c,v as r,Q as i,a0 as d,e as p,t as $,c as m,a as u,g as f,d as h,b as g,f as x,F as k,h as v,H as L,k as j,n as w,L as S,M as Z,N as b}from"./vendor-5430cdcf.js";import{C as A}from"./Column-0ecb2a69.js";import{s as D}from"./seo-07972888.js";function N(s){let t,e,a,n=new Date(s[0]).toLocaleString("en-NZ",{timeZone:"Pacific/Auckland"})+"";return{c(){t=p("small"),e=$("posted: "),a=$(n),this.h()},l(s){t=m(s,"SMALL",{class:!0});var o=u(t);e=f(o,"posted: "),a=f(o,n),o.forEach(h),this.h()},h(){g(t,"class","font-mono lg:text-18")},m(s,n){x(s,t,n),k(t,e),k(t,a)},p(s,t){1&t&&n!==(n=new Date(s[0]).toLocaleString("en-NZ",{timeZone:"Pacific/Auckland"})+"")&&v(a,n)},d(s){s&&h(t)}}}function C(s){let t,e,a,n=s[0]&&N(s);const o=s[3].default,r=L(o,s,s[4],null);return{c(){t=p("div"),n&&n.c(),e=j(),r&&r.c(),this.h()},l(s){t=m(s,"DIV",{class:!0});var a=u(t);n&&n.l(a),e=w(a),r&&r.l(a),a.forEach(h),this.h()},h(){g(t,"class","p-4 max-w-none prose prose-green md:prose-lg lg:prose-xl dark:prose-dark ")},m(s,o){x(s,t,o),n&&n.m(t,null),k(t,e),r&&r.m(t,null),a=!0},p(s,l){s[0]?n?n.p(s,l):(n=N(s),n.c(),n.m(t,e)):n&&(n.d(1),n=null),r&&r.p&&(!a||16&l)&&S(r,o,s,s[4],a?b(o,s[4],l,null):Z(s[4]),null)},i(s){a||(l(r,s),a=!0)},o(s){c(r,s),a=!1},d(s){s&&h(t),n&&n.d(),r&&r.d(s)}}}function E(s){let t,e;return t=new A({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),{c(){a(t.$$.fragment)},l(s){n(t.$$.fragment,s)},m(s,a){o(t,s,a),e=!0},p(s,[e]){const a={};17&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){e||(l(t.$$.fragment,s),e=!0)},o(s){c(t.$$.fragment,s),e=!1},d(s){r(t,s)}}}function M(s,t,e){let a;i(s,D,(s=>e(5,a=s)));let{$$slots:n={},$$scope:o}=t,{title:l}=t,{description:c}=t,{date:r=null}=t;return d(D,a={title:l,description:c,robots:"none"},a),s.$$set=s=>{"title"in s&&e(1,l=s.title),"description"in s&&e(2,c=s.description),"date"in s&&e(0,r=s.date),"$$scope"in s&&e(4,o=s.$$scope)},[r,l,c,n,o]}class P extends s{constructor(s){super(),t(this,s,M,E,e,{title:1,description:2,date:0})}}export{P as T};