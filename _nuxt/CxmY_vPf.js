import{_ as T}from"./C00Scx2c.js";import{_ as j}from"./DZVZ6Jw8.js";import{_ as D}from"./D16NKGVd.js";import{d as S,c as o,U as q,w as A,f as s,i as h,t as c,R as I,O as U,r as f,M as F,B as x,e as r,y as a,n as y,aa as M,F as $,W as b,h as k,aj as R}from"./CP0tvVn6.js";import{r as C}from"./gP0nC7Uj.js";import{u as W}from"./D-gdjBim.js";import{q as E}from"./CjCu6KX1.js";import"./DlAUqK2U.js";import"./BRkPgXob.js";import"./BTLsxBRb.js";import"./JXqE4GGf.js";import"./5ahFKPvG.js";import"./Dnd51l0P.js";import"./8_cimNkn.js";const G={class:"overflow-hidden rounded-md border border-white/10 shadow-md shadow-zinc-950/50 transition-colors duration-200 hover:border-white/20"},O={class:"flex flex-col"},H={class:"text-lg font-semibold"},J={class:"text-xs text-muted"},K=S({__name:"ArticleCard",props:{title:{type:String,required:!0},date:{type:String,required:!0},image:{type:String,required:!0},path:{type:String,required:!0}},setup(l){return(d,p)=>{const _=D,n=I;return o(),q(n,{to:l.path,"aria-label":l.title,class:"flex cursor-pointer flex-col gap-2"},{default:A(()=>[s("div",G,[h(_,{width:"1536",alt:`${l.title} article image`,class:"h-64 w-full object-cover transition-transform duration-200 hover:scale-105",src:l.image,"aria-label":`${l.title} article image`},null,8,["alt","src","aria-label"])]),s("div",O,[s("h3",H,c(l.title),1),s("span",J,c(l.date),1)])]),_:1},8,["to","aria-label"])}}}),P={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},Q={class:"font-newsreader italic text-white-shadow text-center text-4xl"},X={class:"text-center text-lg font-extralight italic text-muted"},Y={key:0,class:"mb-4 flex flex-col gap-2"},Z={class:"my-4"},tt={key:0,class:"mb-4 flex flex-wrap gap-2"},et=["onClick"],st={class:"font-extralight"},at={key:2,class:"flex h-64 flex-col items-center justify-center gap-2"},ot={class:"text-2xl"},nt={class:"text-sm"},yt=S({__name:"Writing",async setup(l){let d,p;const{locale:_}=U(),n=f([]),m=f(""),u=f(!1),{data:V}=([d,p]=F(()=>W("articles",()=>E("/articles").locale(_.value).sort({date:-1}).find(),{watch:[_]})),d=await d,p(),d),g=x(()=>V.value),w=x(()=>Array.from(new Set(g.value.flatMap(t=>t.tags)))),v=x(()=>g.value.filter(t=>(n.value.length===0||n.value.some(i=>t.tags.includes(i)))&&(m.value===""||t.title.toLowerCase().includes(m.value.toLowerCase())))),B=t=>{n.value=n.value.includes(t)?n.value.filter(i=>i!==t):[...n.value,t]};return(t,i)=>{const N=T,z=j,L=K;return o(),r("section",P,[s("h1",Q,[C(t.$slots,"title")]),s("h2",X,[C(t.$slots,"subtitle")]),h(N,{class:"mb-8 mt-2"}),s("div",{class:y(a(u)?"":"mb-3")},[s("span",{class:"font-newsreader italic text-white-shadow cursor-pointer select-none text-lg",onClick:i[0]||(i[0]=e=>u.value=!a(u))},c(a(u)?t.$t("writing.hide_search"):t.$t("writing.show_search")),1)],2),a(u)?(o(),r("div",Y,[s("div",Z,[h(z,{modelValue:a(m),"onUpdate:modelValue":i[1]||(i[1]=e=>M(m)?m.value=e:null),variant:"none",class:"w-full sm:w-96",placeholder:t.$t("writing.search_article")},null,8,["modelValue","placeholder"])]),a(w).length>0?(o(),r("div",tt,[(o(!0),r($,null,b(a(w),e=>(o(),r("div",{key:e,class:y(["hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-secondary px-2 py-1 text-xs text-main transition-colors duration-100 text-shadow-sm hover:bg-zinc-700 sm:text-sm",{"bg-zinc-700":a(n).includes(e)}]),onClick:lt=>B(e)},[s("div",st,c(e),1)],10,et))),128))])):k("",!0)])):k("",!0),a(v).length?(o(),q(R,{key:1,name:"list",tag:"ul",class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},{default:A(()=>[(o(!0),r($,null,b(a(v),e=>(o(),r("li",{key:e._path},[h(L,{title:e.title,date:e.date,image:e.image,path:e._path},null,8,["title","date","image","path"])]))),128))]),_:1})):(o(),r("div",at,[s("span",ot,c(t.$t("writing.not_found")),1),s("span",nt,c(t.$t("writing.not_found_description")),1)]))])}}});export{yt as default};