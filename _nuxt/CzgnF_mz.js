import{_ as g}from"./B6qyKnlD.js";import{_ as k,a as w}from"./DTCsanYT.js";import{d as u,c as n,U as r,w as f,i as l,V as b,n as y,R as $,M as v,e as x,f as t,F as C,W as A,y as B}from"./Dh0iPWJ5.js";import{r as o}from"./CKvovmu1.js";import{u as S}from"./Z7tgrDul.js";import{q}from"./oB55I0-n.js";import"./DlAUqK2U.js";import"./CFlnAoaE.js";import"./CJ57T_tx.js";import"./DJwp9WIK.js";import"./Dnd51l0P.js";import"./DsNhwJii.js";const D=u({__name:"StackItem",props:{item:{type:Object,required:!0}},setup(s){return(a,i)=>{const c=$,e=k;return n(),r(e,{white:"",class:"p-6"},{default:f(()=>[l(c,{to:s.item.link,target:"_blank","aria-label":s.item.name+" link",class:"flex gap-2"},{default:f(()=>[(n(),r(b(s.item.logo),{class:y(["size-8 text-main",s.item.logo.includes("Color")?"":"text-main"]),"font-controlled":!1,alt:s.item.name+" logo",filled:s.item.logo.includes("Color"),"aria-label":s.item.name+" logo"},null,8,["class","alt","filled","aria-label"]))]),_:1},8,["to","aria-label"])]),_:1})}}}),I={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},N={class:"font-newsreader italic text-white-shadow text-center text-4xl"},V={class:"text-center text-lg font-extralight italic text-muted"},j={class:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"},z={class:"relative flex flex-col gap-3 sm:ml-4"},F={class:"flex flex-col gap-4 text-main"},L={class:"flex flex-col gap-3"},O={class:"mb-6 flex flex-col gap-1"},P={class:"text-white-shadow font-newsreader italic text-3xl"},E={class:"text-sm text-muted"},M={class:"flex flex-wrap gap-4"},tt=u({__name:"About",async setup(s){let a,i;const{data:c}=([a,i]=v(()=>S("stack",()=>q("/stack").findOne())),a=await a,i(),a);return(e,_)=>{const m=g,p=w,h=D;return n(),x("section",I,[t("h1",N,[o(e.$slots,"title")]),t("h2",V,[o(e.$slots,"subtitle")]),l(m,{class:"mb-8 mt-2"}),t("div",j,[l(p),t("div",z,[_[0]||(_[0]=t("h3",{class:"text-lg text-muted"}," Intro ",-1)),t("div",F,[o(e.$slots,"intro")])])]),l(m,{class:"my-8"}),o(e.$slots,"introduce"),o(e.$slots,"experiences"),l(m,{class:"my-8"}),t("div",L,[t("div",O,[t("h3",P,[o(e.$slots,"stack_title")]),t("p",E,[o(e.$slots,"stack_description")])]),t("div",M,[(n(!0),x(C,null,A(B(c).items,d=>(n(),r(h,{key:d.name,item:d},null,8,["item"]))),128))])])])}}});export{tt as default};
