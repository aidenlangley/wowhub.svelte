import{S as s,i as t,s as e,j as a,m as n,o,x as r,u as l,v as c,G as i,$,e as p,t as d,c as m,a as u,g as f,d as g,f as h,E as x,h as k,H as v,k as w,n as L,b,K as j,L as S,M as Z}from"./vendor-7db3d68c.js";import{P as A,C as D,p as E}from"./Column-71979217.js";import{s as P}from"./seo-d7542b6f.js";function y(s){let t,e,a=new Date(s[0]).toLocaleString("en-NZ",{timeZone:"Pacific/Auckland"})+"";return{c(){t=p("small"),e=d(a)},l(s){t=m(s,"SMALL",{});var n=u(t);e=f(n,a),n.forEach(g)},m(s,a){h(s,t,a),x(t,e)},p(s,t){1&t&&a!==(a=new Date(s[0]).toLocaleString("en-NZ",{timeZone:"Pacific/Auckland"})+"")&&k(e,a)},d(s){s&&g(t)}}}function C(s){let t,e,a,n=s[0]&&y(s);const o=s[3].default,c=v(o,s,s[4],null);return{c(){t=p("div"),n&&n.c(),e=w(),c&&c.c(),this.h()},l(s){t=m(s,"DIV",{class:!0});var a=u(t);n&&n.l(a),e=L(a),c&&c.l(a),a.forEach(g),this.h()},h(){b(t,"class",E+" p-2 prose prose-green md:prose-lg lg:prose-xl max-w-none dark:prose-dark")},m(s,o){h(s,t,o),n&&n.m(t,null),x(t,e),c&&c.m(t,null),a=!0},p(s,r){s[0]?n?n.p(s,r):(n=y(s),n.c(),n.m(t,e)):n&&(n.d(1),n=null),c&&c.p&&(!a||16&r)&&j(c,o,s,s[4],a?Z(o,s[4],r,null):S(s[4]),null)},i(s){a||(r(c,s),a=!0)},o(s){l(c,s),a=!1},d(s){s&&g(t),n&&n.d(),c&&c.d(s)}}}function M(s){let t,e;return t=new D({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),{c(){a(t.$$.fragment)},l(s){n(t.$$.fragment,s)},m(s,a){o(t,s,a),e=!0},p(s,e){const a={};17&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){e||(r(t.$$.fragment,s),e=!0)},o(s){l(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function N(s){let t,e;return t=new A({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),{c(){a(t.$$.fragment)},l(s){n(t.$$.fragment,s)},m(s,a){o(t,s,a),e=!0},p(s,[e]){const a={};17&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){e||(r(t.$$.fragment,s),e=!0)},o(s){l(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function G(s,t,e){let a;i(s,P,(s=>e(5,a=s)));let{$$slots:n={},$$scope:o}=t,{title:r}=t,{description:l}=t,{date:c=null}=t;return $(P,a={title:r,description:l,robots:"none"},a),s.$$set=s=>{"title"in s&&e(1,r=s.title),"description"in s&&e(2,l=s.description),"date"in s&&e(0,c=s.date),"$$scope"in s&&e(4,o=s.$$scope)},[c,r,l,n,o]}class H extends s{constructor(s){super(),t(this,s,G,N,e,{title:1,description:2,date:0})}}export{H as T};
