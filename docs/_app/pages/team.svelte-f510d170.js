import{W as e,S as t,i as a,s as n,e as s,t as o,c as i,a as r,g as l,d as m,f as c,X as u,h as d,k as g,j as f,n as p,m as h,b as $,M as b,o as v,r as x,u as q,w as j,x as E,v as I,a3 as w,aa as S,R as k,T as L,l as y,H as D,a7 as B}from"../chunks/vendor-dc84e8b1.js";import{a as U}from"../chunks/paths-bacddcca.js";import{H as V,T as H}from"../chunks/Heading-8fb7ece2.js";import{I as N}from"../chunks/Icon-0a8e2c3e.js";import{E as R}from"../chunks/Error-8a8d1f8e.js";import{s as T}from"../chunks/seo-1c9b74d4.js";const M=e([{name:"Dee",tags:["peer support","māoritanga"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],frontline:!0,imgSrc:`${U}/images/people/dee.jpg`,tallImg:!0},{name:"Rhonda",tags:["management","clinical"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],frontline:!0,imgSrc:`${U}/images/people/rhonda.jpg`,tallImg:!0},{name:"Jane",tags:["peer support","founder"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],frontline:!0,imgSrc:`${U}/images/people/jane.jpg`},{name:"Kamina",tags:["administration","logistics"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],frontline:!0,imgSrc:`${U}/images/people/kamina.jpg`},{name:"Lisa",tags:["clinical lead","mental health"],about:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],frontline:!0}]);function C(e,t,a){const n=e.slice();return n[2]=t[a],n}function O(e){let t,a;return t=new N({props:{src:S,solid:!0,size:"100%"}}),{c(){f(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){v(t,e,n),a=!0},p:k,i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function P(e){let t,a,n;return{c(){t=s("img"),this.h()},l(e){t=i(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){L(t.src,a=e[0].imgSrc)||$(t,"src",a),$(t,"alt",n="image of "+e[0].name),$(t,"class","svelte-dsxw9j"),b(t,"tall",e[0].tallImg)},m(e,a){c(e,t,a)},p(e,s){1&s&&!L(t.src,a=e[0].imgSrc)&&$(t,"src",a),1&s&&n!==(n="image of "+e[0].name)&&$(t,"alt",n),1&s&&b(t,"tall",e[0].tallImg)},i:k,o:k,d(e){e&&m(t)}}}function z(e){let t,a=e[0].name+"";return{c(){t=o(a)},l(e){t=l(e,a)},m(e,a){c(e,t,a)},p(e,n){1&n&&a!==(a=e[0].name+"")&&d(t,a)},d(e){e&&m(t)}}}function A(e){let t,a,n=e[2]+"";return{c(){t=s("p"),a=o(n)},l(e){t=i(e,"P",{});var s=r(t);a=l(s,n),s.forEach(m)},m(e,n){c(e,t,n),u(t,a)},p(e,t){1&t&&n!==(n=e[2]+"")&&d(a,n)},d(e){e&&m(t)}}}function G(e){let t,a,n,S,k,L,y,D,B,U,N,R,T,M=e[0].tags.join(", ")+"";const G=[P,O],J=[];function K(e,t){return e[0].imgSrc?0:1}a=K(e),n=J[a]=G[a](e),L=new V({props:{direction:e[1]?H.BottomLeft:H.BottomRight,$$slots:{default:[z]},$$scope:{ctx:e}}});let W=e[0].about,X=[];for(let s=0;s<W.length;s+=1)X[s]=A(C(e,W,s));return{c(){t=s("section"),n.c(),S=g(),k=s("div"),f(L.$$.fragment),y=g(),D=s("h2"),B=s("span"),U=o(M),N=g(),R=s("div");for(let e=0;e<X.length;e+=1)X[e].c();this.h()},l(e){t=i(e,"SECTION",{class:!0});var a=r(t);n.l(a),S=p(a),k=i(a,"DIV",{class:!0});var s=r(k);h(L.$$.fragment,s),s.forEach(m),y=p(a),D=i(a,"H2",{class:!0});var o=r(D);B=i(o,"SPAN",{});var c=r(B);U=l(c,M),c.forEach(m),o.forEach(m),N=p(a),R=i(a,"DIV",{class:!0});var u=r(R);for(let t=0;t<X.length;t+=1)X[t].l(u);u.forEach(m),a.forEach(m),this.h()},h(){$(k,"class","name svelte-dsxw9j"),$(D,"class","tags svelte-dsxw9j"),$(R,"class","blurb svelte-dsxw9j"),$(t,"class","member svelte-dsxw9j"),b(t,"right",e[1])},m(e,n){c(e,t,n),J[a].m(t,null),u(t,S),u(t,k),v(L,k,null),u(t,y),u(t,D),u(D,B),u(B,U),u(t,N),u(t,R);for(let t=0;t<X.length;t+=1)X[t].m(R,null);T=!0},p(e,[s]){let o=a;a=K(e),a===o?J[a].p(e,s):(x(),q(J[o],1,1,(()=>{J[o]=null})),j(),n=J[a],n?n.p(e,s):(n=J[a]=G[a](e),n.c()),E(n,1),n.m(t,S));const i={};if(2&s&&(i.direction=e[1]?H.BottomLeft:H.BottomRight),33&s&&(i.$$scope={dirty:s,ctx:e}),L.$set(i),(!T||1&s)&&M!==(M=e[0].tags.join(", ")+"")&&d(U,M),1&s){let t;for(W=e[0].about,t=0;t<W.length;t+=1){const a=C(e,W,t);X[t]?X[t].p(a,s):(X[t]=A(a),X[t].c(),X[t].m(R,null))}for(;t<X.length;t+=1)X[t].d(1);X.length=W.length}2&s&&b(t,"right",e[1])},i(e){T||(E(n),E(L.$$.fragment,e),T=!0)},o(e){q(n),q(L.$$.fragment,e),T=!1},d(e){e&&m(t),J[a].d(),I(L),w(X,e)}}}function J(e,t,a){let{member:n}=t,{right:s=!1}=t;return e.$$set=e=>{"member"in e&&a(0,n=e.member),"right"in e&&a(1,s=e.right)},[n,s]}class K extends t{constructor(e){super(),a(this,e,J,G,n,{member:0,right:1})}}function W(e,t,a){const n=e.slice();return n[1]=t[a],n[3]=a,n}function X(e){let t,a;return t=new K({props:{member:e[1]}}),{c(){f(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){v(t,e,n),a=!0},p(e,a){const n={};1&a&&(n.member=e[1]),t.$set(n)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function F(e){let t,a;return t=new K({props:{member:e[1],right:!0}}),{c(){f(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){v(t,e,n),a=!0},p(e,a){const n={};1&a&&(n.member=e[1]),t.$set(n)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function Q(e){let t,a,n,s;const o=[F,X],i=[];return t=e[3]%2!=0?0:1,a=i[t]=o[t](e),{c(){a.c(),n=y()},l(e){a.l(e),n=y()},m(e,a){i[t].m(e,a),c(e,n,a),s=!0},p(e,t){a.p(e,t)},i(e){s||(E(a),s=!0)},o(e){q(a),s=!1},d(e){i[t].d(e),e&&m(n)}}}function Y(e){let t,a,n,o=e[0],l=[];for(let s=0;s<o.length;s+=1)l[s]=Q(W(e,o,s));const d=e=>q(l[e],1,1,(()=>{l[e]=null}));return{c(){t=s("div"),a=s("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=i(e,"DIV",{class:!0});var n=r(t);a=i(n,"DIV",{class:!0});var s=r(a);for(let t=0;t<l.length;t+=1)l[t].l(s);s.forEach(m),n.forEach(m),this.h()},h(){$(a,"class","inner column gradient-gray pad-y gaps-y svelte-12as59b"),$(t,"class","root svelte-12as59b")},m(e,s){c(e,t,s),u(t,a);for(let t=0;t<l.length;t+=1)l[t].m(a,null);n=!0},p(e,[t]){if(1&t){let n;for(o=e[0],n=0;n<o.length;n+=1){const s=W(e,o,n);l[n]?(l[n].p(s,t),E(l[n],1)):(l[n]=Q(s),l[n].c(),E(l[n],1),l[n].m(a,null))}for(x(),n=o.length;n<l.length;n+=1)d(n);j()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)E(l[e]);n=!0}},o(e){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)q(l[t]);n=!1},d(e){e&&m(t),w(l,e)}}}function Z(e,t,a){let n;return D(e,M,(e=>a(0,n=e))),[n]}class _ extends t{constructor(e){super(),a(this,e,Z,Y,n,{})}}function ee(e){let t,a,n,o,l,d;return t=new R({}),l=new _({}),{c(){f(t.$$.fragment),a=g(),n=s("div"),o=s("section"),f(l.$$.fragment),this.h()},l(e){h(t.$$.fragment,e),a=p(e),n=i(e,"DIV",{class:!0});var s=r(n);o=i(s,"SECTION",{class:!0});var c=r(o);h(l.$$.fragment,c),c.forEach(m),s.forEach(m),this.h()},h(){$(o,"class","pad-x"),$(n,"class","root pad-y gaps-y")},m(e,s){v(t,e,s),c(e,a,s),c(e,n,s),u(n,o),v(l,o,null),d=!0},p:k,i(e){d||(E(t.$$.fragment,e),E(l.$$.fragment,e),d=!0)},o(e){q(t.$$.fragment,e),q(l.$$.fragment,e),d=!1},d(e){I(t,e),e&&m(a),e&&m(n),I(l)}}}function te(e,t,a){let n;return D(e,T,(e=>a(0,n=e))),B(T,n={title:"Ngā kaimahi",description:"Meet the staff; those in front and behind the scenes",robots:"none"},n),[]}class ae extends t{constructor(e){super(),a(this,e,te,ee,n,{})}}export{ae as default};