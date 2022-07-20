import{S as W,i as Y,s as K,e as T,t as ne,k as S,c as V,a as b,h as ie,d as f,m as j,b as o,K as le,g as A,J as m,L as x,E as O,M as Me,N as P,O as Z,w as G,x as R,y as J,q as N,o as U,B as F,P as re,Q as se,f as Be,R as Ie,T as te,n as he,p as ue,U as pe,V as Q,W as $,X as De,l as ae,Y as Ne,j as Oe,Z as Ue,_ as Ae,$ as Se,D as fe}from"../chunks/index-37be6e1a.js";import{w as je}from"../chunks/index-8c65cc72.js";function xe(l){let e,n,t,i,a,s,h,r;return{c(){e=T("section"),n=T("div"),t=ne("Challenge"),i=S(),a=T("div"),s=T("p"),this.h()},l(d){e=V(d,"SECTION",{class:!0});var u=b(e);n=V(u,"DIV",{class:!0});var B=b(n);t=ie(B,"Challenge"),B.forEach(f),i=j(u),a=V(u,"DIV",{class:!0});var c=b(a);s=V(c,"P",{"data-placeholder":!0,contenteditable:!0,class:!0}),b(s).forEach(f),c.forEach(f),u.forEach(f),this.h()},h(){o(n,"class","challengeLeft svelte-1ke43cy"),o(s,"data-placeholder","What's the challenge?"),o(s,"contenteditable","true"),o(s,"class","svelte-1ke43cy"),l[0]===void 0&&le(()=>l[1].call(s)),o(a,"class","challengeRight svelte-1ke43cy"),o(e,"class","svelte-1ke43cy")},m(d,u){A(d,e,u),m(e,n),m(n,t),m(e,i),m(e,a),m(a,s),l[0]!==void 0&&(s.innerHTML=l[0]),h||(r=x(s,"input",l[1]),h=!0)},p(d,[u]){u&1&&d[0]!==s.innerHTML&&(s.innerHTML=d[0])},i:O,o:O,d(d){d&&f(e),h=!1,r()}}}function Pe(l,e,n){let{text:t=""}=e;function i(){t=this.innerHTML,n(0,t)}return l.$$set=a=>{"text"in a&&n(0,t=a.text)},[t,i]}class Ze extends W{constructor(e){super(),Y(this,e,Pe,xe,K,{text:0})}}function Ge(l){const e=l-1;return e*e*e+1}function Je(l,{delay:e=0,duration:n=400,easing:t=Me}={}){const i=+getComputedStyle(l).opacity;return{delay:e,duration:n,easing:t,css:a=>`opacity: ${a*i}`}}function Ee(l,{delay:e=0,duration:n=400,easing:t=Ge,x:i=0,y:a=0,opacity:s=0}={}){const h=getComputedStyle(l),r=+h.opacity,d=h.transform==="none"?"":h.transform,u=r*(1-s);return{delay:e,duration:n,easing:t,css:(B,c)=>`
			transform: ${d} translate(${(1-B)*i}px, ${(1-B)*a}px);
			opacity: ${r-u*c}`}}function Fe(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function Re(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class qe extends W{constructor(e){super(),Y(this,e,Re,Fe,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function We(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function Ye(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class ye extends W{constructor(e){super(),Y(this,e,Ye,We,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function Ke(l){let e,n,t,i,a,s,h,r,d,u,B,c,z,w,v,y;return u=new qe({props:{size:"1.5rem"}}),z=new ye({props:{size:"1.5rem"}}),{c(){e=T("div"),n=T("p"),t=S(),i=T("div"),a=T("button"),s=ne("Delete"),h=S(),r=T("div"),d=T("button"),G(u.$$.fragment),B=S(),c=T("button"),G(z.$$.fragment),this.h()},l(k){e=V(k,"DIV",{class:!0});var E=b(e);n=V(E,"P",{"data-placeholder":!0,contenteditable:!0,class:!0}),b(n).forEach(f),t=j(E),i=V(E,"DIV",{class:!0});var C=b(i);a=V(C,"BUTTON",{tabindex:!0,class:!0});var H=b(a);s=ie(H,"Delete"),H.forEach(f),h=j(C),r=V(C,"DIV",{class:!0});var I=b(r);d=V(I,"BUTTON",{tabindex:!0,class:!0});var L=b(d);R(u.$$.fragment,L),L.forEach(f),B=j(I),c=V(I,"BUTTON",{tabindex:!0,class:!0});var q=b(c);R(z.$$.fragment,q),q.forEach(f),I.forEach(f),C.forEach(f),E.forEach(f),this.h()},h(){o(n,"data-placeholder","Good ideas go here"),o(n,"contenteditable","true"),o(n,"class","svelte-151j091"),l[1]===void 0&&le(()=>l[6].call(n)),o(a,"tabindex","-1"),o(a,"class","deleteBtn btn-anim svelte-151j091"),o(d,"tabindex","-1"),o(d,"class","btn-anim svelte-151j091"),o(c,"tabindex","-1"),o(c,"class","btn-anim svelte-151j091"),o(r,"class","arrowButtons svelte-151j091"),o(i,"class","sectionOptions svelte-151j091"),o(e,"class","idea svelte-151j091")},m(k,E){A(k,e,E),m(e,n),l[1]!==void 0&&(n.innerHTML=l[1]),m(e,t),m(e,i),m(i,a),m(a,s),m(i,h),m(i,r),m(r,d),J(u,d,null),m(r,B),m(r,c),J(z,c,null),w=!0,v||(y=[x(n,"input",l[6]),x(a,"click",l[7]),x(d,"click",l[8]),x(c,"click",l[9])],v=!0)},p(k,[E]){E&2&&k[1]!==n.innerHTML&&(n.innerHTML=k[1])},i(k){w||(N(u.$$.fragment,k),N(z.$$.fragment,k),w=!0)},o(k){U(u.$$.fragment,k),U(z.$$.fragment,k),w=!1},d(k){k&&f(e),F(u),F(z),v=!1,re(y)}}}function Qe(l,e,n){let{index:t=0}=e,{restoreData:i=null}=e,a="";const s=se(),h=()=>{var z={id:t,type:1,text:a};return z},r=z=>{n(0,t=z.id),n(1,a=z.text)};function d(){a=this.innerHTML,n(1,a)}const u=()=>{s("delete",t)},B=()=>{s("moveup",t)},c=()=>{s("movedown",t)};return l.$$set=z=>{"index"in z&&n(0,t=z.index),"restoreData"in z&&n(3,i=z.restoreData)},l.$$.update=()=>{l.$$.dirty&8&&i!=null&&(r(i),n(3,i=null))},[t,a,s,i,h,r,d,u,B,c]}class ke extends W{constructor(e){super(),Y(this,e,Qe,Ke,K,{index:0,restoreData:3,getData:4,loadData:5})}get getData(){return this.$$.ctx[4]}get loadData(){return this.$$.ctx[5]}}function Xe(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function $e(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class et extends W{constructor(e){super(),Y(this,e,$e,Xe,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function tt(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function nt(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class it extends W{constructor(e){super(),Y(this,e,nt,tt,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function lt(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function rt(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class ot extends W{constructor(e){super(),Y(this,e,rt,lt,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function at(l){let e,n,t,i,a,s,h,r,d,u,B,c,z,w,v,y,k;return h=new it({props:{color:"rgba(0 100 0 / 0.4)",size:"1.4rem"}}),u=new ot({props:{color:"rgba(100 0 0 / 0.4)",size:"1.4rem"}}),z=new et({props:{color:"red",size:"1.4rem"}}),{c(){e=T("div"),n=T("p"),t=S(),i=T("div"),a=T("div"),s=T("button"),G(h.$$.fragment),r=S(),d=T("button"),G(u.$$.fragment),B=S(),c=T("button"),G(z.$$.fragment),this.h()},l(E){e=V(E,"DIV",{class:!0,style:!0});var C=b(e);n=V(C,"P",{"data-placeholder":!0,contenteditable:!0,class:!0}),b(n).forEach(f),t=j(C),i=V(C,"DIV",{class:!0});var H=b(i);a=V(H,"DIV",{});var I=b(a);s=V(I,"BUTTON",{tabindex:!0,class:!0});var L=b(s);R(h.$$.fragment,L),L.forEach(f),r=j(I),d=V(I,"BUTTON",{tabindex:!0,class:!0});var q=b(d);R(u.$$.fragment,q),q.forEach(f),I.forEach(f),B=j(H),c=V(H,"BUTTON",{tabindex:!0,class:!0});var _=b(c);R(z.$$.fragment,_),_.forEach(f),H.forEach(f),C.forEach(f),this.h()},h(){o(n,"data-placeholder","Concept"),o(n,"contenteditable","true"),o(n,"class","svelte-mrtqj"),l[0]===void 0&&le(()=>l[5].call(n)),o(s,"tabindex","-1"),o(s,"class","btn-anim svelte-mrtqj"),o(d,"tabindex","-1"),o(d,"class","btn-anim svelte-mrtqj"),o(c,"tabindex","-1"),o(c,"class","btn-anim svelte-mrtqj"),o(i,"class","bottomRow svelte-mrtqj"),o(e,"class","item svelte-mrtqj"),Be(e,"--bgColor",l[1])},m(E,C){A(E,e,C),m(e,n),l[0]!==void 0&&(n.innerHTML=l[0]),m(e,t),m(e,i),m(i,a),m(a,s),J(h,s,null),m(a,r),m(a,d),J(u,d,null),m(i,B),m(i,c),J(z,c,null),v=!0,y||(k=[x(n,"input",l[5]),x(s,"click",l[6]),x(d,"click",l[7]),x(c,"click",l[8])],y=!0)},p(E,[C]){C&1&&E[0]!==n.innerHTML&&(n.innerHTML=E[0]),(!v||C&2)&&Be(e,"--bgColor",E[1])},i(E){v||(N(h.$$.fragment,E),N(u.$$.fragment,E),N(z.$$.fragment,E),w||le(()=>{w=Ie(e,Je,{}),w.start()}),v=!0)},o(E){U(h.$$.fragment,E),U(u.$$.fragment,E),U(z.$$.fragment,E),v=!1},d(E){E&&f(e),F(h),F(u),F(z),y=!1,re(k)}}}function st(l,e,n){let{info:t="default info"}=e,{id:i=0}=e;const a=se();let{color:s="lightgrey"}=e;const h=()=>({id:i,info:t,color:s});function r(){t=this.innerHTML,n(0,t)}const d=()=>{n(1,s=s=="lightgreen"?"lightgrey":"lightgreen")},u=()=>{n(1,s=s=="pink"?"lightgrey":"pink")},B=()=>{a("delete",i)};return l.$$set=c=>{"info"in c&&n(0,t=c.info),"id"in c&&n(2,i=c.id),"color"in c&&n(1,s=c.color)},[t,s,i,a,h,r,d,u,B]}class ht extends W{constructor(e){super(),Y(this,e,st,at,K,{info:0,id:2,color:1,getData:4})}get getData(){return this.$$.ctx[4]}}const ce=je([]);function He(l,e,n){const t=l.slice();return t[14]=e[n],t[15]=e,t[16]=n,t}function Le(l){let e,n,t,i,a;function s(u){l[8](u,l[14])}function h(u){l[9](u,l[14])}function r(u){l[10](u,l[14])}let d={id:l[16]};return l[14].info!==void 0&&(d.info=l[14].info),l[14].color!==void 0&&(d.color=l[14].color),l[14].getData!==void 0&&(d.getData=l[14].getData),e=new ht({props:d}),Q.push(()=>$(e,"info",s)),Q.push(()=>$(e,"color",h)),Q.push(()=>$(e,"getData",r)),e.$on("delete",l[4]),{c(){G(e.$$.fragment)},l(u){R(e.$$.fragment,u)},m(u,B){J(e,u,B),a=!0},p(u,B){l=u;const c={};!n&&B&2&&(n=!0,c.info=l[14].info,te(()=>n=!1)),!t&&B&2&&(t=!0,c.color=l[14].color,te(()=>t=!1)),!i&&B&2&&(i=!0,c.getData=l[14].getData,te(()=>i=!1)),e.$set(c)},i(u){a||(N(e.$$.fragment,u),a=!0)},o(u){U(e.$$.fragment,u),a=!1},d(u){F(e,u)}}}function ut(l){let e,n,t,i,a,s,h,r,d,u,B,c,z,w,v,y,k,E,C=l[1],H=[];for(let L=0;L<C.length;L+=1)H[L]=Le(He(l,C,L));const I=L=>U(H[L],1,1,()=>{H[L]=null});return c=new qe({props:{size:"1.5rem"}}),v=new ye({props:{size:"1.5rem"}}),{c(){e=T("section");for(let L=0;L<H.length;L+=1)H[L].c();n=S(),t=T("button"),i=ne("+"),a=S(),s=T("div"),h=T("button"),r=ne("Delete"),d=S(),u=T("div"),B=T("button"),G(c.$$.fragment),z=S(),w=T("button"),G(v.$$.fragment),this.h()},l(L){e=V(L,"SECTION",{class:!0});var q=b(e);for(let X=0;X<H.length;X+=1)H[X].l(q);n=j(q),t=V(q,"BUTTON",{tabindex:!0,class:!0});var _=b(t);i=ie(_,"+"),_.forEach(f),q.forEach(f),a=j(L),s=V(L,"DIV",{class:!0});var g=b(s);h=V(g,"BUTTON",{tabindex:!0,class:!0});var D=b(h);r=ie(D,"Delete"),D.forEach(f),d=j(g),u=V(g,"DIV",{class:!0});var M=b(u);B=V(M,"BUTTON",{tabindex:!0,class:!0});var p=b(B);R(c.$$.fragment,p),p.forEach(f),z=j(M),w=V(M,"BUTTON",{tabindex:!0,class:!0});var ee=b(w);R(v.$$.fragment,ee),ee.forEach(f),M.forEach(f),g.forEach(f),this.h()},h(){o(t,"tabindex","-1"),o(t,"class","addBtn svelte-m0pmry"),o(e,"class","svelte-m0pmry"),o(h,"tabindex","-1"),o(h,"class","deleteBtn btn-anim svelte-m0pmry"),o(B,"tabindex","-1"),o(B,"class","btn-anim svelte-m0pmry"),o(w,"tabindex","-1"),o(w,"class","btn-anim svelte-m0pmry"),o(u,"class","arrowButtons svelte-m0pmry"),o(s,"class","sectionOptions svelte-m0pmry")},m(L,q){A(L,e,q);for(let _=0;_<H.length;_+=1)H[_].m(e,null);m(e,n),m(e,t),m(t,i),A(L,a,q),A(L,s,q),m(s,h),m(h,r),m(s,d),m(s,u),m(u,B),J(c,B,null),m(u,z),m(u,w),J(v,w,null),y=!0,k||(E=[x(t,"click",l[3]),x(h,"click",l[11]),x(B,"click",l[12]),x(w,"click",l[13])],k=!0)},p(L,[q]){if(q&18){C=L[1];let _;for(_=0;_<C.length;_+=1){const g=He(L,C,_);H[_]?(H[_].p(g,q),N(H[_],1)):(H[_]=Le(g),H[_].c(),N(H[_],1),H[_].m(e,n))}for(he(),_=C.length;_<H.length;_+=1)I(_);ue()}},i(L){if(!y){for(let q=0;q<C.length;q+=1)N(H[q]);N(c.$$.fragment,L),N(v.$$.fragment,L),y=!0}},o(L){H=H.filter(Boolean);for(let q=0;q<H.length;q+=1)U(H[q]);U(c.$$.fragment,L),U(v.$$.fragment,L),y=!1},d(L){L&&f(e),pe(H,L),L&&f(a),L&&f(s),F(c),F(v),k=!1,re(E)}}}function ft(l,e,n){let{index:t=0}=e,{restoreData:i=null}=e;const a=se();let s=[];function h(){n(1,s=[...s,{info:"",color:"lightgrey"}])}function r(k){const E=s[k.detail];ce.update(C=>(C=[...C,()=>{n(1,s=[...s,E])}],C)),s.splice(k.detail,1),n(1,s)}const d=()=>{for(var k={id:t,type:0,children:[]},E=0;E<s.length;E++)k.children[E]=s[E].getData();return k},u=k=>{n(0,t=k.id),n(1,s=[...k.children])};function B(k,E){l.$$.not_equal(E.info,k)&&(E.info=k,n(1,s))}function c(k,E){l.$$.not_equal(E.color,k)&&(E.color=k,n(1,s))}function z(k,E){l.$$.not_equal(E.getData,k)&&(E.getData=k,n(1,s))}const w=()=>{a("delete",t)},v=()=>{a("moveup",t)},y=()=>{a("movedown",t)};return l.$$set=k=>{"index"in k&&n(0,t=k.index),"restoreData"in k&&n(5,i=k.restoreData)},l.$$.update=()=>{l.$$.dirty&32&&i!=null&&(u(i),n(5,i=null))},[t,s,a,h,r,i,d,u,B,c,z,w,v,y]}class ze extends W{constructor(e){super(),Y(this,e,ft,ut,K,{index:0,restoreData:5,getData:6,loadData:7})}get getData(){return this.$$.ctx[6]}get loadData(){return this.$$.ctx[7]}}function ct(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function dt(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class gt extends W{constructor(e){super(),Y(this,e,dt,ct,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function mt(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function _t(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class wt extends W{constructor(e){super(),Y(this,e,_t,mt,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function vt(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function bt(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class Bt extends W{constructor(e){super(),Y(this,e,bt,vt,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function Dt(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function Et(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class kt extends W{constructor(e){super(),Y(this,e,Et,Dt,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function Ht(l){let e,n;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=Z(t,"svg",{width:!0,height:!0,viewBox:!0});var i=b(e);n=Z(i,"path",{d:!0,fill:!0}),b(n).forEach(f),i.forEach(f),this.h()},h(){o(n,"d","M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"),o(n,"fill",l[2]),o(e,"width",l[0]),o(e,"height",l[1]),o(e,"viewBox",l[3])},m(t,i){A(t,e,i),m(e,n)},p(t,[i]){i&4&&o(n,"fill",t[2]),i&1&&o(e,"width",t[0]),i&2&&o(e,"height",t[1]),i&8&&o(e,"viewBox",t[3])},i:O,o:O,d(t){t&&f(e)}}}function Lt(l,e,n){let{size:t="1em"}=e,{width:i=t}=e,{height:a=t}=e,{color:s="currentColor"}=e,{viewBox:h="0 0 24 24"}=e;return l.$$set=r=>{"size"in r&&n(4,t=r.size),"width"in r&&n(0,i=r.width),"height"in r&&n(1,a=r.height),"color"in r&&n(2,s=r.color),"viewBox"in r&&n(3,h=r.viewBox)},[i,a,s,h,t]}class zt extends W{constructor(e){super(),Y(this,e,Lt,Ht,K,{size:4,width:0,height:1,color:2,viewBox:3})}}function Te(l){let e,n,t,i,a,s,h,r,d,u,B,c,z,w,v,y,k,E,C,H,I,L,q,_,g,D;return i=new zt({props:{size:"1.5rem"}}),r=new wt({props:{size:"1.5rem"}}),c=new gt({props:{size:"1.5rem"}}),y=new Bt({props:{size:"1.5rem"}}),H=new kt({props:{size:"1.5rem"}}),{c(){e=T("ul"),n=T("li"),t=T("button"),G(i.$$.fragment),a=S(),s=T("li"),h=T("button"),G(r.$$.fragment),d=S(),u=T("li"),B=T("button"),G(c.$$.fragment),z=S(),w=T("li"),v=T("a"),G(y.$$.fragment),k=S(),E=T("li"),C=T("label"),G(H.$$.fragment),I=S(),L=T("input"),this.h()},l(M){e=V(M,"UL",{class:!0});var p=b(e);n=V(p,"LI",{class:!0});var ee=b(n);t=V(ee,"BUTTON",{title:!0,class:!0});var X=b(t);R(i.$$.fragment,X),X.forEach(f),ee.forEach(f),a=j(p),s=V(p,"LI",{class:!0});var de=b(s);h=V(de,"BUTTON",{title:!0,class:!0});var ge=b(h);R(r.$$.fragment,ge),ge.forEach(f),de.forEach(f),d=j(p),u=V(p,"LI",{class:!0});var me=b(u);B=V(me,"BUTTON",{title:!0,class:!0});var _e=b(B);R(c.$$.fragment,_e),_e.forEach(f),me.forEach(f),z=j(p),w=V(p,"LI",{class:!0});var we=b(w);v=V(we,"A",{class:!0,title:!0,href:!0});var ve=b(v);R(y.$$.fragment,ve),ve.forEach(f),we.forEach(f),k=j(p),E=V(p,"LI",{class:!0});var oe=b(E);C=V(oe,"LABEL",{class:!0,title:!0,for:!0});var be=b(C);R(H.$$.fragment,be),be.forEach(f),I=j(oe),L=V(oe,"INPUT",{id:!0,type:!0,accept:!0}),oe.forEach(f),p.forEach(f),this.h()},h(){o(t,"title","Undo"),o(t,"class","btn-anim svelte-1wqqtul"),o(n,"class","svelte-1wqqtul"),o(h,"title","Add Idea"),o(h,"class","btn-anim svelte-1wqqtul"),o(s,"class","svelte-1wqqtul"),o(B,"title","Add Grid"),o(B,"class","btn-anim svelte-1wqqtul"),o(u,"class","svelte-1wqqtul"),o(v,"class","btn-anim svelte-1wqqtul"),o(v,"title","Export JSON"),o(v,"href",""),o(w,"class","svelte-1wqqtul"),o(C,"class","btn-anim svelte-1wqqtul"),o(C,"title","Import JSON"),o(C,"for","fileInput"),o(L,"id","fileInput"),o(L,"type","file"),o(L,"accept",".json"),L.hidden=!0,o(E,"class","svelte-1wqqtul"),o(e,"class","svelte-1wqqtul")},m(M,p){A(M,e,p),m(e,n),m(n,t),J(i,t,null),m(e,a),m(e,s),m(s,h),J(r,h,null),m(e,d),m(e,u),m(u,B),J(c,B,null),m(e,z),m(e,w),m(w,v),J(y,v,null),l[10](v),m(e,k),m(e,E),m(E,C),J(H,C,null),m(E,I),m(E,L),l[13](L),l[14](e),_=!0,g||(D=[x(t,"click",l[7]),x(h,"click",l[8]),x(B,"click",l[9]),x(v,"click",l[11]),x(L,"change",l[12])],g=!0)},p:O,i(M){_||(N(i.$$.fragment,M),N(r.$$.fragment,M),N(c.$$.fragment,M),N(y.$$.fragment,M),N(H.$$.fragment,M),le(()=>{q||(q=De(e,Ee,{x:200,duration:200},!0)),q.run(1)}),_=!0)},o(M){U(i.$$.fragment,M),U(r.$$.fragment,M),U(c.$$.fragment,M),U(y.$$.fragment,M),U(H.$$.fragment,M),q||(q=De(e,Ee,{x:200,duration:200},!1)),q.run(0),_=!1},d(M){M&&f(e),F(i),F(r),F(c),F(y),l[10](null),F(H),l[13](null),l[14](null),M&&q&&q.end(),g=!1,re(D)}}}function Tt(l){let e,n,t,i,a,s,h,r,d=l[2]&&Te(l);return{c(){e=T("section"),n=T("div"),d&&d.c(),t=S(),i=T("button"),a=ne("+"),this.h()},l(u){e=V(u,"SECTION",{class:!0});var B=b(e);n=V(B,"DIV",{class:!0});var c=b(n);d&&d.l(c),t=j(c),i=V(c,"BUTTON",{class:!0});var z=b(i);a=ie(z,"+"),z.forEach(f),c.forEach(f),B.forEach(f),this.h()},h(){o(i,"class","btn-anim svelte-1wqqtul"),o(n,"class","fab svelte-1wqqtul"),o(e,"class","svelte-1wqqtul")},m(u,B){A(u,e,B),m(e,n),d&&d.m(n,null),m(n,t),m(n,i),m(i,a),s=!0,h||(r=x(i,"click",l[15]),h=!0)},p(u,[B]){u[2]?d?(d.p(u,B),B&4&&N(d,1)):(d=Te(u),d.c(),N(d,1),d.m(n,t)):d&&(he(),U(d,1,1,()=>{d=null}),ue())},i(u){s||(N(d),s=!0)},o(u){U(d),s=!1},d(u){u&&f(e),d&&d.d(),h=!1,r()}}}function Vt(l,e,n){const t=se();let i,a=!1,s,h,r;const d=H=>{console.log(s);let I=JSON.stringify(H),L="data:application/json;charset=utf-8,"+encodeURIComponent(I),q=H.title+".json";s.setAttribute("href",L),s.setAttribute("download",q)};async function u(H){var I=new FileReader;I.onload=L=>{t("import",L.target.result)},I.readAsText(H)}const B=()=>{t("undo")},c=()=>{t("newidea")},z=()=>{t("newgrid")};function w(H){Q[H?"unshift":"push"](()=>{s=H,n(3,s)})}const v=()=>{t("export")};function y(){h=this.files,n(0,h)}function k(H){Q[H?"unshift":"push"](()=>{r=H,n(4,r),n(0,h)})}function E(H){Q[H?"unshift":"push"](()=>{i=H,n(1,i)})}const C=()=>{n(2,a=!a)};return l.$$.update=()=>{l.$$.dirty&1&&h&&h[0]&&(u(h[0]),n(4,r.value="",r))},[h,i,a,s,r,t,d,B,c,z,w,v,y,k,E,C]}class Ct extends W{constructor(e){super(),Y(this,e,Vt,Tt,K,{downloadJSON:6})}get downloadJSON(){return this.$$.ctx[6]}}const{window:qt}=Ae;function Ve(l,e,n){const t=l.slice();return t[22]=e[n],t[23]=e,t[24]=n,t}function Ce(l,e){let n,t,i,a,s,h,r;function d(w){e[15](w,e[22])}function u(w){e[16](w,e[22])}function B(w){e[17](w,e[22])}var c=e[22].type;function z(w){let v={index:w[24]};return w[22].getData!==void 0&&(v.getData=w[22].getData),w[22].loadData!==void 0&&(v.loadData=w[22].loadData),w[22].data!==void 0&&(v.restoreData=w[22].data),{props:v}}return c&&(t=new c(z(e)),Q.push(()=>$(t,"getData",d)),Q.push(()=>$(t,"loadData",u)),Q.push(()=>$(t,"restoreData",B)),t.$on("delete",e[6]),t.$on("moveup",e[7]),t.$on("movedown",e[8])),{key:l,first:null,c(){n=ae(),t&&G(t.$$.fragment),h=ae(),this.h()},l(w){n=ae(),t&&R(t.$$.fragment,w),h=ae(),this.h()},h(){this.first=n},m(w,v){A(w,n,v),t&&J(t,w,v),A(w,h,v),r=!0},p(w,v){e=w;const y={};if(v&4&&(y.index=e[24]),!i&&v&4&&(i=!0,y.getData=e[22].getData,te(()=>i=!1)),!a&&v&4&&(a=!0,y.loadData=e[22].loadData,te(()=>a=!1)),!s&&v&4&&(s=!0,y.restoreData=e[22].data,te(()=>s=!1)),c!==(c=e[22].type)){if(t){he();const k=t;U(k.$$.fragment,1,0,()=>{F(k,1)}),ue()}c?(t=new c(z(e)),Q.push(()=>$(t,"getData",d)),Q.push(()=>$(t,"loadData",u)),Q.push(()=>$(t,"restoreData",B)),t.$on("delete",e[6]),t.$on("moveup",e[7]),t.$on("movedown",e[8]),G(t.$$.fragment),N(t.$$.fragment,1),J(t,h.parentNode,h)):t=null}else c&&t.$set(y)},i(w){r||(t&&N(t.$$.fragment,w),r=!0)},o(w){t&&U(t.$$.fragment,w),r=!1},d(w){w&&f(n),w&&f(h),t&&F(t,w)}}}function yt(l){let e,n,t,i,a,s,h,r,d,u,B,c=[],z=new Map,w,v,y,k,E;function C(_){l[14](_)}let H={};l[1]!==void 0&&(H.text=l[1]),d=new Ze({props:H}),Q.push(()=>$(d,"text",C));let I=l[2];const L=_=>_[22].id;for(let _=0;_<I.length;_+=1){let g=Ve(l,I,_),D=L(g);z.set(D,c[_]=Ce(D,g))}let q={};return v=new Ct({props:q}),l[18](v),v.$on("newidea",l[5]),v.$on("newgrid",l[4]),v.$on("export",l[19]),v.$on("import",l[20]),v.$on("undo",l[11]),{c(){e=T("style"),n=ne(`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /*outline: 1px solid green;*/
        }

        body * {
            font-family: 'Poppins', sans-serif;
        } 

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }

        input {
            background-color: transparent;
            border: none;
            outline: none;
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-all;
        }

        input:active,input:focus {
            border: none;
            outline: none;
        }

        textarea {
            width: 100%;
            background-color: transparent;
            border:none;
            outline: none;
            resize: none;
            height: fit-content;
        }

        textarea:active,textarea:focus {
            border:none;
            outline: none;
        }`),t=S(),i=T("main"),a=T("section"),s=T("h1"),h=ne(l[0]),r=S(),G(d.$$.fragment),B=S();for(let _=0;_<c.length;_+=1)c[_].c();w=S(),G(v.$$.fragment),this.h()},l(_){const g=Ne('[data-svelte="svelte-ydz4i"]',document.head);e=V(g,"STYLE",{});var D=b(e);n=ie(D,`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /*outline: 1px solid green;*/
        }

        body * {
            font-family: 'Poppins', sans-serif;
        } 

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }

        input {
            background-color: transparent;
            border: none;
            outline: none;
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-all;
        }

        input:active,input:focus {
            border: none;
            outline: none;
        }

        textarea {
            width: 100%;
            background-color: transparent;
            border:none;
            outline: none;
            resize: none;
            height: fit-content;
        }

        textarea:active,textarea:focus {
            border:none;
            outline: none;
        }`),D.forEach(f),g.forEach(f),t=j(_),i=V(_,"MAIN",{class:!0});var M=b(i);a=V(M,"SECTION",{});var p=b(a);s=V(p,"H1",{tabindex:!0,contenteditable:!0,class:!0});var ee=b(s);h=ie(ee,l[0]),ee.forEach(f),r=j(p),R(d.$$.fragment,p),B=j(p);for(let X=0;X<c.length;X+=1)c[X].l(p);p.forEach(f),w=j(M),R(v.$$.fragment,M),M.forEach(f),this.h()},h(){document.title="Brainstorming Tool | Elara Systems",o(s,"tabindex","0"),o(s,"contenteditable","true"),o(s,"class","svelte-1xjjkag"),l[0]===void 0&&le(()=>l[13].call(s)),o(i,"class","ctn")},m(_,g){m(document.head,e),m(e,n),A(_,t,g),A(_,i,g),m(i,a),m(a,s),m(s,h),l[0]!==void 0&&(s.innerHTML=l[0]),m(a,r),J(d,a,null),m(a,B);for(let D=0;D<c.length;D+=1)c[D].m(a,null);m(i,w),J(v,i,null),y=!0,k||(E=[x(qt,"beforeunload",l[12]),x(s,"input",l[13])],k=!0)},p(_,[g]){(!y||g&1)&&Oe(h,_[0]),g&1&&_[0]!==s.innerHTML&&(s.innerHTML=_[0]);const D={};!u&&g&2&&(u=!0,D.text=_[1],te(()=>u=!1)),d.$set(D),g&452&&(I=_[2],he(),c=Ue(c,g,L,1,_,I,z,a,Se,Ce,null,Ve),ue());const M={};v.$set(M)},i(_){if(!y){N(d.$$.fragment,_);for(let g=0;g<I.length;g+=1)N(c[g]);N(v.$$.fragment,_),y=!0}},o(_){U(d.$$.fragment,_);for(let g=0;g<c.length;g+=1)U(c[g]);U(v.$$.fragment,_),y=!1},d(_){f(e),_&&f(t),_&&f(i),F(d);for(let g=0;g<c.length;g+=1)c[g].d();l[18](null),F(v),k=!1,re(E)}}}function Mt(l,e,n){let t="Project Title";var i="";let a=[];var s,h=0;function r(){n(2,a=[...a,{id:h++,type:ze,comp:null,data:null}])}function d(){n(2,a=[...a,{id:h++,type:ke,comp:null,data:null}])}function u(g){const D=a[g.detail],M=D.getData();ce.update(p=>(p=[...p,async()=>{M.id=h++,D.data=M,n(2,a=[...a,D])}],p)),a.splice(g.detail,1),n(2,a)}function B(g){var D=g.detail;if(D!=0){var M=a[D];n(2,a[D]=a[D-1],a),n(2,a[D-1]=M,a),n(2,a)}}function c(g){var D=g.detail;if(D!=a.length-1){var M=a[D];n(2,a[D]=a[D+1],a),n(2,a[D+1]=M,a),n(2,a)}}function z(){for(var g={title:t,challenge:i,counter:h,children:[]},D=0;D<a.length;D++)g.children[D]=a[D].getData();return console.log(g),g}async function w(g){g=JSON.parse(g),n(0,t=g.title),n(1,i=g.challenge),h=0;for(var D=0;D<a.length;D++)h=Math.max(a[D].id,h);h++,n(2,a.length=0,a),n(2,a=[]),await fe();for(var D=0;D<g.children.length;D++)g.children[D].type==0?n(2,a=[...a,{id:h,type:ze,comp:null}]):n(2,a=[...a,{id:h,type:ke,comp:null}]),h++,await fe();await fe();for(var D=0;D<g.children.length;D++)a[D].loadData(g.children[D]);n(2,a)}function v(){console.log("UNDO"),ce.update(g=>(console.log(g),g.length>0&&g.pop()(),g))}const y=g=>(g=g||window.event,g.returnValue="Are your sure?","Are you sure?");function k(){t=this.innerHTML,n(0,t)}function E(g){i=g,n(1,i)}function C(g,D){l.$$.not_equal(D.getData,g)&&(D.getData=g,n(2,a))}function H(g,D){l.$$.not_equal(D.loadData,g)&&(D.loadData=g,n(2,a))}function I(g,D){l.$$.not_equal(D.data,g)&&(D.data=g,n(2,a))}function L(g){Q[g?"unshift":"push"](()=>{s=g,n(3,s)})}return[t,i,a,s,r,d,u,B,c,z,w,v,y,k,E,C,H,I,L,()=>{s.downloadJSON(z())},g=>{w(g.detail)}]}class Nt extends W{constructor(e){super(),Y(this,e,Mt,yt,K,{})}}export{Nt as default};
