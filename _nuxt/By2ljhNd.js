import{_,a as p}from"./KtMywjz0.js";import{_ as h}from"./CGi7Ys01.js";import{d as f,c as a,e as i,f as s,i as o,w as m,F as b,W as x,y as g,U as w,n as v,P as y,R as k,a0 as z}from"./CLWJHe6b.js";import{_ as B}from"./qbwIBY_B.js";import{_ as L}from"./DlAUqK2U.js";import"./CIqDsxjR.js";import"./1Ui_VqKm.js";import"./D-Tdt8bZ.js";import"./BIm9nBdg.js";function N(t){switch(t){case"home":return{home:{name:"Home",to:"/",icon:"lucide:home"},works:{name:"Works",to:"/works",icon:"lucide:briefcase"},writing:{name:"Writing",to:"/writing",icon:"lucide:notepad-text"},hobby:{name:"Hobby",to:"/hobby",icon:"lucide:ferris-wheel"},github:{name:"Github",to:"https://github.com/yjineey/aurora",icon:"lucide:github"},about:{name:"About",to:"/about",icon:"lucide:user"}};default:return[]}}const $={class:"mx-auto my-2 flex w-full items-center justify-center"},C={class:"rounded-full"},S={class:"z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"},j=f({__name:"Navbar",props:{isText:{type:Boolean,default:!1}},setup(t){const c=N("home");return(n,l)=>{const r=h,u=k,d=B;return a(),i("div",$,[s("header",C,[o(d,{rounded:"",transparent:"",animate:!1,class:"border border-white/10"},{default:m(()=>[s("nav",S,[(a(!0),i(b,null,x(g(c),e=>(a(),w(u,{id:e.name.toLowerCase(),key:e.name,"aria-label":e.name+" navigation link",class:v([[e.to===(n._.provides[y]||n.$route).path?"border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm":"text-muted"],"flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"]),to:e.to},{default:m(()=>[o(r,{name:e.icon,class:"size-7 font-light sm:size-6"},null,8,["name"])]),_:2},1032,["id","aria-label","class","to"]))),128))])]),_:1})])])}}}),F={},W={class:"sm:mt-[50px]"};function H(t,c){const n=_,l=j,r=p;return a(),i("div",null,[s("div",null,[o(n,{class:"fixed bottom-20 right-3 z-50 sm:bottom-4"}),o(l,{class:"fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0"}),s("div",W,[z(t.$slots,"default")]),o(r)])])}const q=L(F,[["render",H]]);export{q as default};
