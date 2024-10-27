import{_ as T}from"./CGi7Ys01.js";import{z,r as F,B as u,J as Q,o as U,b as G,ai as _,X as p,Y as B,d as P,Z as M,a3 as x,a5 as ee,a6 as I,c as N,e as O,f as ae,H as le,a0 as j,n as b,i as A,h as q,a7 as ne}from"./CLWJHe6b.js";import{i as ie,u as te}from"./CtCxi8Ji.js";import{u as ue}from"./BHIV_iWk.js";import{_ as de}from"./DlAUqK2U.js";const oe=(e,t,r=!0)=>{const l=z("form-events",void 0),a=z("form-group",void 0),n=z("form-inputs",void 0);a&&(!r||e!=null&&e.legend?a.inputId.value=void 0:e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),n&&(n.value[a.name.value]=a.inputId.value));const d=F(!1);function o(v,m){l&&l.emit({type:v,path:m})}function C(){o("blur",a==null?void 0:a.name.value),d.value=!0}function S(){o("change",a==null?void 0:a.name.value)}const s=ue(()=>{(d.value||a!=null&&a.eagerValidation.value)&&o("input",a==null?void 0:a.name.value)},300);return{inputId:u(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:u(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:u(()=>{var m;const v=t.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??v??((m=t.default)==null?void 0:m.size)}),color:u(()=>{var v;return(v=a==null?void 0:a.error)!=null&&v.value?"red":e==null?void 0:e.color}),emitFormBlur:C,emitFormInput:s,emitFormChange:S}};function re({ui:e,props:t}){const r=_();if(Q("ButtonGroupContextConsumer",!0),z("ButtonGroupContextConsumer",!1))return{size:u(()=>t.size),rounded:u(()=>e.value.rounded)};let a=r.parent,n;for(;a&&!n;){if(a.type.name==="ButtonGroup"){n=z(`group-${a.uid}`);break}a=a.parent}const d=u(()=>n==null?void 0:n.value.children.indexOf(r));return U(()=>{n==null||n.value.register(r)}),G(()=>{n==null||n.value.unregister(r)}),{size:u(()=>n!=null&&n.value?(n==null?void 0:n.value.size)??e.value.default.size:t.size),rounded:u(()=>!n||d.value===-1?e.value.rounded:n.value.children.length===1?n.value.ui.rounded:d.value===0?n.value.rounded.start:d.value===n.value.children.length-1?n.value.rounded.end:"rounded-none")}}const c=p(B.ui.strategy,B.ui.input,ie),se=P({components:{UIcon:T},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>c.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(c.size).includes(e)}},color:{type:String,default:()=>c.default.color,validator(e){return[...B.ui.colors,...Object.keys(c.color)].includes(e)}},variant:{type:String,default:()=>c.default.variant,validator(e){return[...Object.keys(c.variant),...Object.values(c.color).flatMap(t=>Object.keys(t))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t,slots:r}){const{ui:l,attrs:a}=te("input",M(e,"ui"),c,M(e,"class")),{size:n,rounded:d}=re({ui:l,props:e}),{emitFormBlur:o,emitFormInput:C,size:S,color:s,inputId:v,name:m}=oe(e,c),g=u(()=>n.value??S.value),y=F(x({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),$=F(null),W=()=>{var i;e.autofocus&&((i=$.value)==null||i.focus())},k=i=>{y.value.trim&&(i=i.trim()),(y.value.number||e.type==="number")&&(i=ne(i)),t("update:modelValue",i),C()},D=i=>{y.value.lazy||k(i.target.value)},E=i=>{if(e.type==="file"){const f=i.target.files;t("change",f)}else{const f=i.target.value;t("change",f),y.value.lazy&&k(f),y.value.trim&&(i.target.value=f.trim())}},J=i=>{o(),t("blur",i)};U(()=>{setTimeout(()=>{W()},e.autofocusDelay)});const L=u(()=>{var f,w;const i=((w=(f=l.value.color)==null?void 0:f[s.value])==null?void 0:w[e.variant])||l.value.variant[e.variant];return ee(I(l.value.base,l.value.form,d.value,l.value.placeholder,e.type==="file"&&l.value.file.base,l.value.size[g.value],e.padded?l.value.padding[g.value]:"p-0",i==null?void 0:i.replaceAll("{color}",s.value),(h.value||r.leading)&&l.value.leading.padding[g.value],(V.value||r.trailing)&&l.value.trailing.padding[g.value]),e.inputClass)}),h=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),V=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),H=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),R=u(()=>e.loading&&!h.value?e.loadingIcon:e.trailingIcon||e.icon),X=u(()=>I(l.value.icon.leading.wrapper,l.value.icon.leading.pointer,l.value.icon.leading.padding[g.value])),Y=u(()=>I(l.value.icon.base,s.value&&B.ui.colors.includes(s.value)&&l.value.icon.color.replaceAll("{color}",s.value),l.value.icon.size[g.value],e.loading&&l.value.icon.loading)),Z=u(()=>I(l.value.icon.trailing.wrapper,l.value.icon.trailing.pointer,l.value.icon.trailing.padding[g.value])),K=u(()=>I(l.value.icon.base,s.value&&B.ui.colors.includes(s.value)&&l.value.icon.color.replaceAll("{color}",s.value),l.value.icon.size[g.value],e.loading&&!h.value&&l.value.icon.loading));return{ui:l,attrs:a,name:m,inputId:v,input:$,isLeading:h,isTrailing:V,inputClass:L,leadingIconName:H,leadingIconClass:Y,leadingWrapperIconClass:X,trailingIconName:R,trailingIconClass:K,trailingWrapperIconClass:Z,onInput:D,onChange:E,onBlur:J}}}),ce=["id","name","type","required","placeholder","disabled"];function ve(e,t,r,l,a,n){const d=T;return N(),O("div",{class:b(e.type==="hidden"?"hidden":e.ui.wrapper)},[ae("input",le({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:t[0]||(t[0]=(...o)=>e.onInput&&e.onInput(...o)),onBlur:t[1]||(t[1]=(...o)=>e.onBlur&&e.onBlur(...o)),onChange:t[2]||(t[2]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,ce),j(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(N(),O("span",{key:0,class:b(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[A(d,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])])],2)):q("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(N(),O("span",{key:1,class:b(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[A(d,{name:e.trailingIconName,class:b(e.trailingIconClass)},null,8,["name","class"])])],2)):q("",!0)],2)}const be=de(se,[["render",ve]]);export{be as _,re as a,oe as u};
