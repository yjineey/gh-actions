import{r as b,an as g,ao as y,ap as T,aq as S,y as h,o as v,I as w,ai as P}from"./CLWJHe6b.js";function m(e){return y()?(T(e),!0):!1}function W(e){let n=0,o,t;const i=()=>{n-=1,t&&n<=0&&(t.stop(),o=void 0,t=void 0)};return(...r)=>(n+=1,t||(t=S(!0),o=t.run(()=>e(...r))),m(i),o)}function f(e){return typeof e=="function"?e():h(e)}const j=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _=e=>e!=null,C=Object.prototype.toString,G=e=>C.call(e)==="[object Object]",p=()=>{};function O(e,n){function o(...t){return new Promise((i,r)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(i).catch(r)})}return o}function x(e,n={}){let o,t,i=p;const r=s=>{clearTimeout(s),i(),i=p};return s=>{const a=f(e),u=f(n.maxWait);return o&&r(o),a<=0||u!==void 0&&u<=0?(t&&(r(t),t=null),Promise.resolve(s())):new Promise((l,d)=>{i=n.rejectOnCancel?d:l,u&&!t&&(t=setTimeout(()=>{o&&r(o),t=null,l(s())},u)),o=setTimeout(()=>{t&&r(t),t=null,l(s())},a)})}}function I(e){let n;function o(){return n||(n=e()),n}return o.reset=async()=>{const t=n;n=void 0,t&&await t},o}function D(e){return P()}function M(e,n=200,o={}){return O(x(n,o),e)}function k(e,n=!0,o){D()?v(e,o):n?e():w(e)}function q(e,n,o={}){const{immediate:t=!0}=o,i=b(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function s(){i.value=!1,c()}function a(...u){c(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=null,e(...u)},f(n))}return t&&(i.value=!0,j&&a()),m(s),{isPending:g(i),start:a,stop:s}}export{q as a,m as b,W as c,j as d,I as e,k as f,_ as g,G as i,p as n,f as t,M as u};
