import{_ as d,a as p}from"./Cc47znpT.js";import{_ as f}from"./D3lpZEKo.js";import{d as h,c as a,e as i,f as s,i as o,w as m,F as b,Y as x,y as g,U as w,n as v,P as k,R as y,V as z}from"./DydTdZ-V.js";import{_ as B}from"./_LLyHYxI.js";import{_ as L}from"./DlAUqK2U.js";import"./BXbes9kC.js";import"./JmTP2XLB.js";import"./CKd4BJb9.js";import"./BK_ynuaq.js";function N(e){switch(e){case"home":return{home:{name:"Home",to:"/",icon:"lucide:home"},works:{name:"Works",to:"/works",icon:"lucide:briefcase"},writing:{name:"Writing",to:"/writing",icon:"lucide:library"},about:{name:"About",to:"/about",icon:"lucide:user"},contact:{name:"Contact",to:"/contact",icon:"lucide:mail"}};default:return[]}}const $={class:"mx-auto my-2 flex w-full items-center justify-center"},C={class:"rounded-full"},S={class:"z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"},F=h({__name:"Navbar",props:{isText:{type:Boolean,default:!1}},setup(e){const c=N("home");return(n,l)=>{const r=f,u=y,_=B;return a(),i("div",$,[s("header",C,[o(_,{rounded:"",transparent:"",animate:!1,class:"border border-white/10"},{default:m(()=>[s("nav",S,[(a(!0),i(b,null,x(g(c),t=>(a(),w(u,{id:t.name.toLowerCase(),key:t.name,"aria-label":t.name+" navigation link",class:v([[t.to===(n._.provides[k]||n.$route).path?"border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm":"text-muted"],"flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"]),to:t.to},{default:m(()=>[o(r,{name:t.icon,class:"size-7 font-light sm:size-6"},null,8,["name"])]),_:2},1032,["id","aria-label","class","to"]))),128))])]),_:1})])])}}}),V={},j={class:"sm:mt-[50px]"};function P(e,c){const n=d,l=F,r=p;return a(),i("div",null,[s("div",null,[o(n,{class:"fixed bottom-20 right-3 z-50 sm:bottom-4"}),o(l,{class:"fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0"}),s("div",j,[z(e.$slots,"default")]),o(r)])])}const q=L(V,[["render",P]]);export{q as default};
