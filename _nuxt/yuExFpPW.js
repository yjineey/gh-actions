import{_ as w}from"./CIqDsxjR.js";import{_ as v}from"./BZzuSAUk.js";import{_ as h}from"./B4hbefSQ.js";import{d as p,s as P,c as r,e as u,i as s,w as m,f as t,y as _,U as f,V as y,n as k,R as $,M as A,F as C,W as z}from"./CLWJHe6b.js";import{r as l}from"./CEazILY-.js";import{u as j}from"./C5KosELa.js";import{q as S}from"./2VXOrEfN.js";import"./DlAUqK2U.js";import"./BUV8QQ-Y.js";import"./BHIV_iWk.js";import"./Dnd51l0P.js";import"./C03tooZs.js";const B={class:"flex justify-center"},I={class:"relative"},N=p({__name:"ProfilePicture",setup(o){const{profilePicture:a}=P();return(n,c)=>{const e=v,i=h;return r(),u("div",B,[s(i,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"},{default:m(()=>[t("div",I,[s(e,{width:"256",src:_(a),class:"absolute inset-0 size-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",alt:"Aurora Profile Picture","aria-label":"Aurora Profile Picture"},null,8,["src"]),s(e,{width:"256",src:"/assets/hugo-richard-light.webp",class:"relative size-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0",alt:"Aurora Profile Picture","aria-label":"Aurora Profile Picture"})])]),_:1}),s(i,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:hidden"},{default:m(()=>[s(e,{width:"256",src:_(a),class:"size-64 rounded-xl object-cover transition-all duration-300",alt:"Aurora Profile Picture","aria-label":"Aurora Profile Picture"},null,8,["src"])]),_:1})])}}}),q=p({__name:"StackItem",props:{item:{type:Object,required:!0}},setup(o){return(a,n)=>{const c=$,e=h;return r(),f(e,{white:"",class:"p-6"},{default:m(()=>[s(c,{to:o.item.link,target:"_blank","aria-label":o.item.name+" link",class:"flex gap-2"},{default:m(()=>[(r(),f(y(o.item.logo),{class:k(["size-8 text-main",o.item.logo.includes("Color")?"":"text-main"]),"font-controlled":!1,alt:o.item.name+" logo",filled:o.item.logo.includes("Color"),"aria-label":o.item.name+" logo"},null,8,["class","alt","filled","aria-label"]))]),_:1},8,["to","aria-label"])]),_:1})}}}),D={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},V={class:"font-newsreader italic text-white-shadow text-center text-4xl"},F={class:"text-center text-lg font-extralight italic text-muted"},L={class:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"},O={class:"relative flex flex-col gap-3 sm:ml-4"},E={class:"flex flex-col gap-4 text-main"},M={class:"flex flex-col gap-3"},R={class:"mb-6 flex flex-col gap-1"},U={class:"text-white-shadow font-newsreader italic text-3xl"},W={class:"text-sm text-muted"},G={class:"flex flex-wrap gap-4"},ae=p({__name:"About",async setup(o){let a,n;const{data:c}=([a,n]=A(()=>j("stack",()=>S("/stack").findOne())),a=await a,n(),a);return(e,i)=>{const d=w,g=N,b=q;return r(),u("section",D,[t("h1",V,[l(e.$slots,"title")]),t("h2",F,[l(e.$slots,"subtitle")]),s(d,{class:"mb-8 mt-2"}),t("div",L,[s(g),t("div",O,[i[0]||(i[0]=t("h3",{class:"text-lg text-muted"}," Intro ",-1)),t("div",E,[l(e.$slots,"intro")])])]),s(d,{class:"my-8"}),l(e.$slots,"introduce"),l(e.$slots,"experiences"),s(d,{class:"my-8"}),t("div",M,[t("div",R,[t("h3",U,[l(e.$slots,"stack_title")]),t("p",W,[l(e.$slots,"stack_description")])]),t("div",G,[(r(!0),u(C,null,z(_(c).items,x=>(r(),f(b,{key:x.name,item:x},null,8,["item"]))),128))])])])}}});export{ae as default};
