function P(){}const Z=t=>t;function yt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function E(t){t.forEach(tt)}function Q(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function gt(t){return Object.keys(t).length===0}function Ft(t,e,n,r){if(t){const s=et(t,e,n,r);return t[0](s)}}function et(t,e,n,r){return t[1]&&r?yt(n.ctx.slice(),t[1](r(e))):n.ctx}function Ht(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function It(t,e,n,r,s,c){if(s){const i=et(e,n,r,c);t.p(i,s)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const nt=typeof window!="undefined";let it=nt?()=>window.performance.now():()=>Date.now(),U=nt?t=>requestAnimationFrame(t):P;const k=new Set;function rt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&U(rt)}function st(t){let e;return k.size===0&&U(rt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let L=!1;function xt(){L=!0}function wt(){L=!1}function $t(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:$t(1,s,u=>e[n[u]].claim_order,a))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],i=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(c.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);c.reverse(),i.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<i.length;l++){for(;a<c.length&&i[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(i[l],_)}}function vt(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=ct("style");return Et(lt(t),e),e.sheet}function Et(t,e){vt(t.head||t,e)}function St(t,e){if(L){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){L&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function At(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function Kt(){return V(" ")}function Qt(){return V("")}function Ut(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,r,s=!1){Ct(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function at(t,e,n,r){return ot(t,s=>s.nodeName===e,s=>{const c=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||c.push(o.name)}c.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return at(t,e,n,ct)}function Yt(t,e,n){return at(t,e,n,Nt)}function Mt(t,e){return ot(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>V(e),!0)}function Zt(t){return Mt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ut(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const z=new Map;let B=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:kt(e),rules:{}};return z.set(t,n),n}function W(t,e,n,r,s,c,i,o=0){const l=16.666/r;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*c(p);a+=p*100+`%{${i(g,1-g)}}
`}const _=a+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Pt(_)}_${o}`,u=lt(t),{stylesheet:h,rules:d}=z.get(u)||Rt(u,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,B+=1,f}function G(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),B-=s,B||Dt())}function Dt(){U(()=>{B||(z.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),z.clear())})}let C;function N(t){C=t}function F(){if(!C)throw new Error("Function called outside component initialization");return C}function ie(t){F().$$.on_mount.push(t)}function re(t){F().$$.after_update.push(t)}function se(){const t=F();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ut(e,n,{cancelable:r});return s.slice().forEach(i=>{i.call(t,c)}),!c.defaultPrevented}return!0}}function le(t,e){return F().$$.context.set(t,e),e}const A=[],Y=[],q=[],J=[],ft=Promise.resolve();let K=!1;function dt(){K||(K=!0,ft.then(_t))}function ce(){return dt(),ft}function M(t){q.push(t)}function oe(t){J.push(t)}const I=new Set;let O=0;function _t(){const t=C;do{for(;O<A.length;){const e=A[O];O++,N(e),Ot(e.$$)}for(N(null),A.length=0,O=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];I.has(n)||(I.add(n),n())}q.length=0}while(A.length);for(;J.length;)J.pop()();K=!1,I.clear(),N(t)}function Ot(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let S;function ht(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function j(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const T=new Set;let v;function ae(){v={r:0,c:[],p:v}}function ue(){v.r||E(v.c),v=v.p}function mt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function qt(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),v.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const pt={duration:0};function fe(t,e,n){let r=e(t,n),s=!1,c,i,o=0;function l(){c&&G(t,c)}function a(){const{delay:f=0,duration:u=300,easing:h=Z,tick:d=P,css:y}=r||pt;y&&(c=W(t,0,1,u,f,h,y,o++)),d(0,1);const p=it()+f,g=p+u;i&&i.abort(),s=!0,M(()=>j(t,!0,"start")),i=st(x=>{if(s){if(x>=g)return d(1,0),j(t,!0,"end"),l(),s=!1;if(x>=p){const w=h((x-p)/u);d(w,1-w)}}return s})}let _=!1;return{start(){_||(_=!0,G(t),Q(r)?(r=r(),ht().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function de(t,e,n,r){let s=e(t,n),c=r?0:1,i=null,o=null,l=null;function a(){l&&G(t,l)}function _(u,h){const d=u.b-c;return h*=Math.abs(d),{a:c,b:u.b,d,duration:h,start:u.start,end:u.start+h,group:u.group}}function f(u){const{delay:h=0,duration:d=300,easing:y=Z,tick:p=P,css:g}=s||pt,x={start:it()+h,b:u};u||(x.group=v,v.r+=1),i||o?o=x:(g&&(a(),l=W(t,c,u,d,h,y,g)),u&&p(0,1),i=_(x,d),M(()=>j(t,u,"start")),st(w=>{if(o&&w>o.start&&(i=_(o,d),o=null,j(t,i.b,"start"),g&&(a(),l=W(t,c,i.b,i.duration,0,y,s.css))),i){if(w>=i.end)p(c=i.b,1-c),j(t,i.b,"end"),o||(i.b?a():--i.group.r||E(i.group.c)),i=null;else if(w>=i.start){const R=w-i.start;c=i.a+i.d*y(R/i.duration),p(c,1-c)}}return!!(i||o)}))}return{run(u){Q(s)?ht().then(()=>{s=s(),f(u)}):f(u)},end(){a(),i=o=null}}}function _e(t,e){qt(t,1,1,()=>{e.delete(t.key)})}function he(t,e,n,r,s,c,i,o,l,a,_,f){let u=t.length,h=c.length,d=u;const y={};for(;d--;)y[t[d].key]=d;const p=[],g=new Map,x=new Map;for(d=h;d--;){const m=f(s,c,d),$=n(m);let b=i.get($);b?r&&b.p(m,e):(b=a($,m),b.c()),g.set($,p[d]=b),$ in y&&x.set($,Math.abs(d-y[$]))}const w=new Set,R=new Set;function H(m){mt(m,1),m.m(o,_),i.set(m.key,m),_=m.first,h--}for(;u&&h;){const m=p[h-1],$=t[u-1],b=m.key,D=$.key;m===$?(_=m.first,u--,h--):g.has(D)?!i.has(b)||w.has(b)?H(m):R.has(D)?u--:x.get(b)>x.get(D)?(R.add(b),H(m)):(w.add(D),u--):(l($,i),u--)}for(;u--;){const m=t[u];g.has(m.key)||l(m,i)}for(;h;)H(p[h-1]);return p}function me(t,e){const n={},r={},s={$$scope:1};let c=t.length;for(;c--;){const i=t[c],o=e[c];if(o){for(const l in i)l in o||(r[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in i)s[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}function pe(t){return typeof t=="object"&&t!==null?t:{}}function ye(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function ge(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Tt(t,e,n,r){const{fragment:s,on_mount:c,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||M(()=>{const l=c.map(tt).filter(Q);i?i.push(...l):E(l),t.$$.on_mount=[]}),o.forEach(M)}function zt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(A.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,r,s,c,i,o=[-1]){const l=C;N(t);const a=t.$$={fragment:null,ctx:null,props:c,update:P,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...h)=>{const d=h.length?h[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),_&&Bt(t,f)),u}):[],a.update(),_=!0,E(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){xt();const f=jt(e.target);a.fragment&&a.fragment.l(f),f.forEach(At)}else a.fragment&&a.fragment.c();e.intro&&mt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),wt(),_t()}N(l)}class $e{$destroy(){zt(this,1),this.$destroy=P}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{me as A,pe as B,zt as C,yt as D,ce as E,Ft as F,It as G,Wt as H,Ht as I,St as J,M as K,Ut as L,Z as M,Nt as N,Yt as O,E as P,se as Q,fe as R,$e as S,oe as T,Jt as U,Y as V,ye as W,de as X,ne as Y,he as Z,_e as _,jt as a,Vt as b,Xt as c,At as d,ct as e,ee as f,Gt as g,Mt as h,we as i,te as j,Kt as k,Qt as l,Zt as m,P as n,ae as o,qt as p,ue as q,mt as r,Lt as s,V as t,le as u,re as v,ie as w,ge as x,xe as y,Tt as z};