function P(){}const lt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(G)}function J(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function Ot(t,e,n,r){if(t){const l=K(t,e,n,r);return t[0](l)}}function K(t,e,n,r){return t[1]&&r?st(n.ctx.slice(),t[1](r(e))):n.ctx}function qt(t,e,n,r){if(t[2]&&r){const l=t[2](r(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],i=Math.max(e.dirty.length,l.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|l[c];return o}return e.dirty|l}return e.dirty}function Tt(t,e,n,r,l,o){if(l){const i=K(e,n,r,o);t.p(i,l)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Q=typeof window!="undefined";let ot=Q?()=>window.performance.now():()=>Date.now(),L=Q?t=>requestAnimationFrame(t):P;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&L(U)}function ut(t){let e;return x.size===0&&L(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let R=!1;function at(){R=!0}function ft(){R=!1}function dt(t,e,n,r){for(;t<e;){const l=t+(e-t>>1);n(l)<=r?t=l+1:e=l}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&s.push(d)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let l=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,d=(l>0&&e[n[l]].claim_order<=u?l+1:dt(1,l,a=>e[n[a]].claim_order,u))-1;r[s]=n[d]+1;const f=d+1;n[f]=s,l=Math.max(f,l)}const o=[],i=[];let c=e.length-1;for(let s=n[l]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);c>=s;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);o.reverse(),i.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<i.length;s++){for(;u<o.length&&i[s].claim_order>=o[u].claim_order;)u++;const d=u<o.length?o[u]:null;t.insertBefore(i[s],d)}}function ht(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=X("style");return pt(V(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(R){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){R&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function Lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Ft(){return F(" ")}function Ht(){return F("")}function It(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,r,l=!1){bt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,l||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,l?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,e,n,r){return Y(t,l=>l.nodeName===e,l=>{const o=[];for(let i=0;i<l.attributes.length;i++){const c=l.attributes[i];n[c.name]||o.push(c.name)}o.forEach(i=>l.removeAttribute(i))},()=>r(e))}function Gt(t,e,n){return Z(t,e,n,X)}function Jt(t,e,n){return Z(t,e,n,xt)}function wt(t,e){return Y(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Kt(t){return wt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e){t.value=e==null?"":e}function Vt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function tt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}function Xt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Map;let C=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:mt(e),rules:{}};return j.set(t,n),n}function I(t,e,n,r,l,o,i,c=0){const s=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=s){const g=e+(n-e)*o(p);u+=p*100+`%{${i(g,1-g)}}
`}const d=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${vt(d)}_${c}`,a=V(t),{stylesheet:_,rules:h}=j.get(a)||Et(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${l}ms 1 both`,C+=1,f}function kt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),C-=l,C||At())}function At(){L(()=>{C||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let E;function v(t){E=t}function D(){if(!E)throw new Error("Function called outside component initialization");return E}function Yt(t){D().$$.on_mount.push(t)}function Zt(t){D().$$.after_update.push(t)}function te(){const t=D();return(e,n,{cancelable:r=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=tt(e,n,{cancelable:r});return l.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}function ee(t,e){return D().$$.context.set(t,e),e}const w=[],W=[],N=[],z=[],et=Promise.resolve();let B=!1;function nt(){B||(B=!0,et.then(it))}function ne(){return nt(),et}function M(t){N.push(t)}function ie(t){z.push(t)}const q=new Set;let A=0;function it(){const t=E;do{for(;A<w.length;){const e=w[A];A++,v(e),Nt(e.$$)}for(v(null),w.length=0,A=0;W.length;)W.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];q.has(n)||(q.add(n),n())}N.length=0}while(w.length);for(;z.length;)z.pop()();B=!1,q.clear(),v(t)}function Nt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let b;function St(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function T(t,e,n){t.dispatchEvent(tt(`${e?"intro":"outro"}${n}`))}const S=new Set;let m;function re(){m={r:0,c:[],p:m}}function le(){m.r||$(m.c),m=m.p}function jt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function se(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),m.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Ct={duration:0};function ce(t,e,n,r){let l=e(t,n),o=r?0:1,i=null,c=null,s=null;function u(){s&&kt(t,s)}function d(a,_){const h=a.b-o;return _*=Math.abs(h),{a:o,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:y=lt,tick:p=P,css:g}=l||Ct,O={start:ot()+_,b:a};a||(O.group=m,m.r+=1),i||c?c=O:(g&&(u(),s=I(t,o,a,h,_,y,g)),a&&p(0,1),i=d(O,h),M(()=>T(t,a,"start")),ut(k=>{if(c&&k>c.start&&(i=d(c,h),c=null,T(t,i.b,"start"),g&&(u(),s=I(t,o,i.b,i.duration,0,y,l.css))),i){if(k>=i.end)p(o=i.b,1-o),T(t,i.b,"end"),c||(i.b?u():--i.group.r||$(i.group.c)),i=null;else if(k>=i.start){const rt=k-i.start;o=i.a+i.d*y(rt/i.duration),p(o,1-o)}}return!!(i||c)}))}return{run(a){J(l)?St().then(()=>{l=l(),f(a)}):f(a)},end(){u(),i=c=null}}}function oe(t,e){const n={},r={},l={$$scope:1};let o=t.length;for(;o--;){const i=t[o],c=e[o];if(c){for(const s in i)s in c||(r[s]=1);for(const s in c)l[s]||(n[s]=c[s],l[s]=1);t[o]=c}else for(const s in i)l[s]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:l,on_mount:o,on_destroy:i,after_update:c}=t.$$;l&&l.m(e,n),r||M(()=>{const s=o.map(G).filter(J);i?i.push(...s):$(s),t.$$.on_mount=[]}),c.forEach(M)}function Pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,r,l,o,i,c=[-1]){const s=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:P,not_equal:l,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&l(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Rt(t,f)),a}):[],u.update(),d=!0,$(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){at();const f=$t(e.target);u.fragment&&u.fragment.l(f),f.forEach(gt)}else u.fragment&&u.fragment.c();e.intro&&jt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ft(),it()}v(s)}class he{$destroy(){Pt(this,1),this.$destroy=P}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as A,ue as B,Pt as C,st as D,ne as E,Ot as F,Tt as G,zt as H,qt as I,yt as J,xt as K,Jt as L,Ut as M,It as N,$ as O,te as P,ie as Q,Lt as R,he as S,W as T,ae as U,M as V,ce as W,Xt as X,$t as a,Wt as b,Gt as c,gt as d,X as e,Vt as f,Bt as g,wt as h,_e as i,Qt as j,Ft as k,Ht as l,Kt as m,P as n,re as o,se as p,le as q,jt as r,Dt as s,F as t,ee as u,Zt as v,Yt as w,fe as x,de as y,Mt as z};
