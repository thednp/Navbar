var Navbar=function(){"use strict";var ht=Object.defineProperty;var Et=(d,g,p)=>g in d?ht(d,g,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[g]=p;var D=(d,g,p)=>(Et(d,typeof g!="symbol"?g+"":g,p),p);const d={},g=e=>{const{type:t,currentTarget:n}=e;[...d[t]].forEach(([s,i])=>{n===s&&[...i].forEach(([o,a])=>{o.apply(s,[e]),typeof a=="object"&&a.once&&_(s,t,o,a)})})},p=(e,t,n,s)=>{d[t]||(d[t]=new Map);const i=d[t];i.has(e)||i.set(e,new Map);const o=i.get(e),{size:a}=o;o.set(n,s),a||e.addEventListener(t,g,s)},_=(e,t,n,s)=>{const i=d[t],o=i&&i.get(e),a=o&&o.get(n),c=a!==void 0?a:s;o&&o.has(n)&&o.delete(n),i&&(!o||!o.size)&&i.delete(e),(!i||!i.size)&&delete d[t],(!o||!o.size)&&e.removeEventListener(t,g,c)},C="aria-expanded",fe="DOMContentLoaded",Re="keydown",Fe="keyup",ge="click",je="mouseenter",Ie="mouseleave",Ke="resize",ee="ArrowDown",te="ArrowUp",ne="ArrowLeft",se="ArrowRight",Ve="Escape",oe="Space",xe="transitionDuration",He="transitionDelay",ie="transitionend",ve="transitionProperty",Qe=navigator.userAgentData,V=Qe,{userAgent:We}=navigator,x=We,pe=/iPhone|iPad|iPod|Android/i;V?V.brands.some(e=>pe.test(e.brand)):pe.test(x);const be=/(iPhone|iPod|iPad)/;V?V.brands.some(e=>be.test(e.brand)):be.test(x),x&&x.includes("Firefox");const{head:H}=document;["webkitPerspective","perspective"].some(e=>e in H.style);const Ze=(e,t,n,s)=>{const i=s||!1;e.addEventListener(t,n,i)},qe=(e,t,n,s)=>{const i=s||!1;e.removeEventListener(t,n,i)},Be=(e,t,n,s)=>{const i=o=>{(o.target===e||o.currentTarget===e)&&(n.apply(e,[o]),qe(e,t,i,s))};Ze(e,t,i,s)},Ge=()=>{};(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,e)});Be(document,fe,Ge,t)}catch{}return e})(),["webkitTransform","transform"].some(e=>e in H.style),["webkitAnimation","animation"].some(e=>e in H.style),["webkitTransition","transition"].some(e=>e in H.style);const Ue=(e,t)=>e.getAttribute(t),$=(e,t,n)=>e.setAttribute(t,n),re=(e,...t)=>{e.classList.add(...t)},Q=(e,...t)=>{e.classList.remove(...t)},w=(e,t)=>e.classList.contains(t),W=e=>e!=null&&typeof e=="object"||!1,k=e=>W(e)&&typeof e.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(t=>e.nodeType===t)||!1,y=e=>k(e)&&e.nodeType===1||!1,M=new Map,R={data:M,set:(e,t,n)=>{y(e)&&(M.has(t)||M.set(t,new Map),M.get(t).set(e,n))},getAllFor:e=>M.get(e)||null,get:(e,t)=>{if(!y(e)||!t)return null;const n=R.getAllFor(t);return e&&n&&n.get(e)||null},remove:(e,t)=>{const n=R.getAllFor(t);!n||!y(e)||(n.delete(e),n.size===0&&M.delete(t))}},Je=(e,t)=>R.get(e,t),Xe=e=>W(e)&&e.constructor.name==="Window"||!1,me=e=>k(e)&&e.nodeType===9||!1,T=e=>Xe(e)?e.document:me(e)?e:k(e)?e.ownerDocument:window.document,Ye=(e,...t)=>Object.assign(e,...t),v=(e,t)=>e.dispatchEvent(t),S=(e,t)=>{const n=getComputedStyle(e),s=t.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return n.getPropertyValue(s)},_e=e=>{const t=S(e,ve),n=S(e,He),s=n.includes("ms")?1:1e3,i=t&&t!=="none"?parseFloat(n)*s:0;return Number.isNaN(i)?0:i},et=e=>{const t=S(e,ve),n=S(e,xe),s=n.includes("ms")?1:1e3,i=t&&t!=="none"?parseFloat(n)*s:0;return Number.isNaN(i)?0:i},he=(e,t)=>{let n=0;const s=new Event(ie),i=et(e),o=_e(e);if(i){const a=c=>{c.target===e&&(t.apply(e,[c]),e.removeEventListener(ie,a),n=1)};e.addEventListener(ie,a),setTimeout(()=>{n||v(e,s)},i+o+17)}else t.apply(e,[s])},Ee=e=>["true",!0].includes(e)?!0:["false",!1].includes(e)?!1:["null","",null,void 0].includes(e)?null:e!==""&&!Number.isNaN(+e)?+e:e,ae=e=>Object.entries(e),tt=e=>e.toLowerCase(),nt=(e,t,n,s)=>{const i={...n},o={...e.dataset},a={...t},c={},l="title";return ae(o).forEach(([r,u])=>{const I=s&&typeof r=="string"&&r.includes(s)?r.replace(s,"").replace(/[A-Z]/g,de=>tt(de)):r;c[I]=Ee(u)}),ae(i).forEach(([r,u])=>{i[r]=Ee(u)}),ae(t).forEach(([r,u])=>{r in i?a[r]=i[r]:r in c?a[r]=c[r]:a[r]=r===l?Ue(e,l):u}),a},st=e=>Object.keys(e),Z=(e,t)=>{const n=new CustomEvent(e,{cancelable:!0,bubbles:!0});return W(t)&&Ye(n,t),n},ot={passive:!0},we=e=>W(e)&&e.constructor.name==="Map"||!1,it=e=>typeof e=="number"||!1,N=new Map,L={set:(e,t,n,s)=>{y(e)&&(s&&s.length?(N.has(e)||N.set(e,new Map),N.get(e).set(s,setTimeout(t,n))):N.set(e,setTimeout(t,n)))},get:(e,t)=>{if(!y(e))return null;const n=N.get(e);return t&&n&&we(n)?n.get(t)||null:it(n)?n:null},clear:(e,t)=>{if(!y(e))return;const n=N.get(e);t&&t.length&&we(n)?(clearTimeout(n.get(t)),n.delete(t),n.size===0&&N.delete(e)):(clearTimeout(n),N.delete(e))}},rt=e=>T(e).documentElement,ye=e=>{var t;return e?me(e)?e.defaultView:k(e)?(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView:e:window},at=e=>rt(e).dir==="rtl",f=(e,t)=>e?e.closest(t)||f(e.getRootNode().host,t):null,ct=(e,t)=>y(e)?e:(k(t)?t:T()).querySelector(e),Te=(e,t)=>(k(t)?t:T()).getElementsByTagName(e),b=(e,t)=>(t&&k(t)?t:T()).getElementsByClassName(e),Ne=(e,t)=>e.matches(t),lt="3.2.4",m="navbar",F="Navbar",q=`[data-function="${m}"]`,Ce=`${q},.${m}`,h="open",ce="open-position",E="open-mobile",j="subnav",B=`${j}-toggle`,$e=`${m}-toggle`,ke={breakpoint:768,toggleSiblings:!0,delay:500},G=Z(`show.${m}`),Le=Z(`shown.${m}`),U=Z(`hide.${m}`),le=Z(`hidden.${m}`),z=e=>Je(e,F),ut=e=>new P(e),J=(e,t)=>{(t?p:_)(ye(e.menu),Ke,e.listenResize,ot)},X=e=>{const{options:t,menu:n}=e,[s]=b(B,n);return s&&S(s,"display")!=="none"||ye(n).innerWidth<t.breakpoint},Ae=(e,t)=>{const n=t?p:_,{items:s,navbarToggle:i,menu:o}=e,a=T(o);[...s].forEach(c=>{const{lastElementChild:l}=c;l&&w(l,j)&&(n(c,je,Se),n(c,Ie,ue));const[r]=b(B,c);r&&n(r,ge,Me)}),n(a,Re,ft),n(a,Fe,gt),i&&n(i,ge,Me)},A=(e,t)=>[...e.children].find(n=>Ne(n,t)),dt=e=>{const t=A(e,`.${j}`),n=A(e,"A");if(n&&(v(n,G),G.defaultPrevented))return;re(e,ce),re(e,h);const{parentElement:s}=e;if(s){const o=b(h,s);O([...o].filter(a=>a!==e))}t&&he(t,()=>{L.clear(e,"in"),n&&(v(n,Le),$(n,C,"true"))})},Pe=(e,t)=>{const n=A(e,`.${j}`),s=A(e,"A"),i=A(e,B);if(!([h,E].some(o=>w(e,o))&&s&&(v(s,U),U.defaultPrevented))){if(w(e,h)){const o=()=>{Q(e,ce),L.clear(e,"out"),s&&(v(s,le),$(s,C,"false"))};Q(e,h),t&&n?he(n,o):o()}w(e,E)&&(Q(e,E),[i,s].forEach(o=>{o&&$(o,C,"false")}),s&&v(s,le))}},O=e=>{[...e].forEach(t=>Pe(t))},ft=e=>{const{code:t,target:n}=e;(y(n)?f(n,Ce):null)&&[ee,te,oe].includes(t)&&e.preventDefault()};function gt(e){const{code:t}=e,{activeElement:n}=T(this),s=n&&f(n,"nav"),i=s&&z(s);if(!i||!n||this&&!this.contains(n))return;const o=f(n,"LI");if(!o)return;const a=X(i),{previousElementSibling:c,nextElementSibling:l}=o,r=f(o,`.${h}`),u=f(o,"UL"),[I]=b(j,o),de=[oe,ee,ne,se,te],Y=u&&S(u,"flex-direction")==="column",Oe=at(o),vt=Oe?se:ne,pt=Oe?ne:se,bt=u&&c&&(t===te&&Y||t===vt&&!Y),mt=u&&l&&(t===ee&&Y||t===pt&&!Y);let K=null;if(t===Ve&&r?(ue.call(r),K=r):!a&&I&&t===oe&&(w(o,h)?ue.call(o):Se.call(o)),bt&&o!==u.firstElementChild?K=c:mt&&o!==u.lastElementChild&&(K=l),K){const{firstElementChild:De}=K;De&&De.focus()}!a&&de.includes(t)&&e.preventDefault()}const Me=e=>{e.preventDefault();const{currentTarget:t,target:n}=e,s=f(t,Ce),i=s&&z(s);if(!i)return;const{options:o,navbarToggle:a}=i;if(n===t||t.contains(n)){const c=f(t,"LI")||s,l=f(t,`.${$e}`)===a?a:A(c,`.${B}`),r=l===a?null:A(c,"A"),u=b(E,c);if(w(c,E)){if(r&&(v(r,U),U.defaultPrevented))return;O(u),Q(c,E),l&&($(l,C,"false"),l===a&&J(i)),r&&($(r,C,"false"),v(r,le))}else{if(r&&(v(r,G),G.defaultPrevented))return;if(l===a)J(i,!0);else{const I=o.toggleSiblings?b(E,c.parentElement):u;O(I)}re(c,E),l&&$(l,C,"true"),r&&($(r,C,"true"),v(r,Le))}}};function Se(){const e=f(this,`${q},.${m}`),t=e&&z(e),n=L.get(this,"out");if(!(!t||X(t))&&(L.clear(this,"out"),!w(this,h)&&!n)){const s=()=>dt(this);L.set(this,s,17,"in")}}function ue(){const e=f(this,`${q},.${m}`),t=e&&z(e);if(!(!t||X(t))&&w(this,h)){L.clear(this,"in");const n=()=>{O(b(ce,this)),Pe(this,!0)};L.set(this,n,t.options.delay,"out")}}class P{constructor(t,n){D(this,"listenResize",()=>{X(this)||(O(b(E,T(this.menu))),J(this))});const s=ct(t);if(!s)throw new TypeError(`${F} cannot initialize the specified target.`);const[i]=b($e,s),o=z(s);o&&o.dispose(),this.menu=s,this.options=nt(s,ke,n||{}),this.items=Te("LI",s),this.navbarToggle=i,Ae(this,!0),R.set(s,F,this)}get defaults(){return ke}get name(){return F}dispose(){O(this.items),Ae(this),J(this),R.remove(this.menu,F),st(this).forEach(t=>{delete this[t]})}}D(P,"selector",q),D(P,"init",ut),D(P,"getInstance",z),D(P,"version",lt);const ze=e=>{const{selector:t,init:n}=P;[...Te("*",T(e))].filter(i=>Ne(i,t)).forEach(n)};return document.body?ze():p(document,fe,()=>ze(),{once:!0}),P}();
//# sourceMappingURL=navbar.js.map
