import{u as ne,V as et,a as we,d as Ve,b as tt,f as Pe,m as ae,h as se,i as me,g as nt,j as F,k as ze,l as at,n as st,o as lt,p as it,q as ot,r as rt,R as ct,s as ut,t as dt,v as ft,w as vt,x as pt,y as mt,z as ht,A as yt,B as te,C as _e}from"./DMfvAcE3.js";import{R as gt,r as Ae,S as ve,e as he,H as le,T as _t,d as ie,Q as M,c as g,t as w,M as X,A as I,z as u,N as V,B as Be,y as K,U as bt,v as G,x as B,V as xt,_ as Ee,W as E,X as D,Y as Re,O as Q,P as pe,Z as St,C as kt,D as Ct,$ as Te,a0 as $e,a1 as Le,g as Fe,a2 as It,a3 as Oe,a4 as wt,a5 as Ge,a6 as Vt,a7 as O,a8 as Pt,a9 as Me,o as zt,aa as At,ab as De,ac as Bt,ad as Et,ae as j,af as Rt,ag as Tt,ah as U,ai as $t,aj as Lt,ak as We,al as He,am as Ft,an as Ne,ao as be,ap as Ot,aq as xe,ar as Gt,as as Mt,L as Dt}from"./DAZGSXaN.js";function Se(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=gt(),t=Ae();if(ve){const a=new ResizeObserver(o=>{o.length&&(l==="content"?t.value=o[0].contentRect:t.value=o[0].target.getBoundingClientRect())});he(()=>{a.disconnect()}),le(()=>s.el,(o,n)=>{n&&(a.unobserve(n),t.value=void 0),o&&a.observe(o)},{flush:"post"})}return{resizeRef:s,contentRect:_t(t)}}const Wt=ie({__name:"Card",props:{pokemonName:{}},async setup(e){let l,s;const t=e,{data:a,error:o}=([l,s]=M(()=>ne(`https://pokeapi.co/api/v2/pokemon/${t.pokemonName}`,"$oeQBc1mZi8")),l=await l,s(),l),n=g(()=>(a.value.sprites||[]).front_default);return(i,v)=>(w(),X(Pe,null,{default:I(()=>[u(et,null,{default:I(()=>[u(we,{"min-width":"150",src:V(n)},null,8,["src"]),u(Ve),u(tt,{class:"text-center"},{default:I(()=>[Be(K(t.pokemonName),1)]),_:1})]),_:1})]),_:1}))}}),fe=new Map;async function Ht(e){if(!e)return"";if(fe.has(e))return fe.get(e);const{[e]:l}=await bt(()=>import("./CYzTwnk_.js"),[],import.meta.url);return fe.set(e,l),l}const Nt=["d"],qt=ie({__name:"MdiIcon",props:{width:{default:"1em"},height:{default:"1em"},flipX:{type:Boolean,default:!1},flipY:{type:Boolean,default:!1},icon:{}},async setup(e){let l,s;const t=e,a=Ae(""),o=g(()=>({"--flip-x":t.flipX?"-1":"1","--flip-y":t.flipY?"-1":"1",width:"1em",height:"auto"}));async function n(){a.value=await Ht(t.icon)}return le(async()=>t.icon,([l,s]=M(()=>n),l=await l,s(),l)),[l,s]=M(()=>n()),await l,s(),(i,v)=>(w(),G("svg",{viewbox:"0 0 24 24",style:xt(o.value)},[B("path",{d:a.value},null,8,Nt)],4))}}),Ut=Ee(qt,[["__scopeId","data-v-e40a9964"]]),Kt=E({fluid:{type:Boolean,default:!1},...ae(),...se()},"VContainer"),L=D()({name:"VContainer",props:Kt(),setup(e,l){let{slots:s}=l;const{rtlClasses:t}=Re();return me(()=>u(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},s)),{}}}),jt=e=>(kt("data-v-ca10637b"),e=e(),Ct(),e),Xt=jt(()=>B("div",{class:Te(["text-h4","pa-2"])},"Evolution",-1)),Qt={class:"d-flex"},Yt={class:"align-content-center"},Zt=ie({__name:"index",props:{evolutionChain:{}},async setup(e){let l,s;const t=e,{data:a}=([l,s]=M(()=>ne(t.evolutionChain.url,"$WK4KD6mzuj")),l=await l,s(),l),o=g(()=>{const n=[];let i=a.value.chain;for(;i!==null;)n.push(i.species),i=i.evolves_to[0]||null;return n});return(n,i)=>{const v=Wt,b=Ut;return w(),X(L,{class:"pa-4"},{default:I(()=>[Xt,u(nt,{class:"d-flex flex-wrap justify-center"},{default:I(()=>[(w(!0),G(Q,null,pe(V(o),(_,p)=>(w(),G("div",Qt,[u(v,{class:"ma-4",pokemonName:_.name},null,8,["pokemonName"]),B("div",Yt,[p<V(o).length-1?(w(),X(b,{key:0,defaultSize:"2",class:"icon",icon:"mdiArrowRightBold"})):St("",!0)])]))),256))]),_:1})]),_:1})}}}),Jt=Ee(Zt,[["__scopeId","data-v-ca10637b"]]),en=E({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function C(e,l,s){return D()({name:e,props:en({mode:s,origin:l}),setup(t,a){let{slots:o}=a;const n={onBeforeEnter(i){t.origin&&(i.style.transformOrigin=t.origin)},onLeave(i){if(t.leaveAbsolute){const{offsetTop:v,offsetLeft:b,offsetWidth:_,offsetHeight:p}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${v}px`,i.style.left=`${b}px`,i.style.width=`${_}px`,i.style.height=`${p}px`}t.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(t.leaveAbsolute&&(i!=null&&i._transitionInitialStyles)){const{position:v,top:b,left:_,width:p,height:r}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=v||"",i.style.top=b||"",i.style.left=_||"",i.style.width=p||"",i.style.height=r||""}}};return()=>{const i=t.group?$e:Le;return Fe(i,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},o.default)}}})}function qe(e,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return D()({name:e,props:{mode:{type:String,default:s},disabled:Boolean,group:Boolean},setup(t,a){let{slots:o}=a;const n=t.group?$e:Le;return()=>Fe(n,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:l},o.default)}})}function Ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=It(`offset-${s}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[s]:n.style[s]}},onEnter(n){const i=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const v=`${n[t]}px`;n.style[s]="0",n.offsetHeight,n.style.transition=i.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[s]=v})},onAfterEnter:o,onEnterCancelled:o,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[s]:n.style[s]},n.style.overflow="hidden",n.style[s]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[s]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(n){e&&n._parent&&n._parent.classList.remove(e),o(n)}function o(n){const i=n._initialStyle[s];n.style.overflow=n._initialStyle.overflow,i!=null&&(n.style[s]=i),delete n._initialStyle}}C("fab-transition","center center","out-in");C("dialog-bottom-transition");C("dialog-top-transition");const ke=C("fade-transition");C("scale-transition");C("scroll-x-transition");C("scroll-x-reverse-transition");C("scroll-y-transition");C("scroll-y-reverse-transition");C("slide-x-transition");C("slide-x-reverse-transition");C("slide-y-transition");C("slide-y-reverse-transition");qe("expand-transition",Ue());const tn=qe("expand-x-transition",Ue("",!0)),Ke=E({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),nn=E({value:null,disabled:Boolean,selectedClass:String},"group-item");function an(e,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Oe("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=wt();Ge(Symbol.for(`${l.description}:id`),a);const o=Vt(l,null);if(!o){if(!s)return o;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`)}const n=O(e,"value"),i=g(()=>!!(o.disabled.value||e.disabled));o.register({id:a,value:n,disabled:i},t),he(()=>{o.unregister(a)});const v=g(()=>o.isSelected(a)),b=g(()=>o.items.value[0].id===a),_=g(()=>o.items.value[o.items.value.length-1].id===a),p=g(()=>v.value&&[o.selectedClass.value,e.selectedClass]);return le(v,r=>{t.emit("group:selected",{value:r})},{flush:"sync"}),{id:a,isSelected:v,isFirst:b,isLast:_,toggle:()=>o.select(a,!v.value),select:r=>o.select(a,r),selectedClass:p,value:n,disabled:i,group:o}}function je(e,l){let s=!1;const t=Pt([]),a=Me(e,"modelValue",[],r=>r==null?[]:Xe(t,Bt(r)),r=>{const h=ln(t,r);return e.multiple?h:h[0]}),o=Oe("useGroup");function n(r,h){const m=r,y=Symbol.for(`${l.description}:id`),S=Et(y,o==null?void 0:o.vnode).indexOf(h);V(m.value)==null&&(m.value=S,m.useIndexAsValue=!0),S>-1?t.splice(S,0,m):t.push(m)}function i(r){if(s)return;v();const h=t.findIndex(m=>m.id===r);t.splice(h,1)}function v(){const r=t.find(h=>!h.disabled);r&&e.mandatory==="force"&&!a.value.length&&(a.value=[r.id])}zt(()=>{v()}),he(()=>{s=!0}),At(()=>{for(let r=0;r<t.length;r++)t[r].useIndexAsValue&&(t[r].value=r)});function b(r,h){const m=t.find(y=>y.id===r);if(!(h&&(m!=null&&m.disabled)))if(e.multiple){const y=a.value.slice(),f=y.findIndex(W=>W===r),S=~f;if(h=h??!S,S&&e.mandatory&&y.length<=1||!S&&e.max!=null&&y.length+1>e.max)return;f<0&&h?y.push(r):f>=0&&!h&&y.splice(f,1),a.value=y}else{const y=a.value.includes(r);if(e.mandatory&&y)return;a.value=h??!y?[r]:[]}}function _(r){if(e.multiple,a.value.length){const h=a.value[0],m=t.findIndex(S=>S.id===h);let y=(m+r)%t.length,f=t[y];for(;f.disabled&&y!==m;)y=(y+r)%t.length,f=t[y];if(f.disabled)return;a.value=[t[y].id]}else{const h=t.find(m=>!m.disabled);h&&(a.value=[h.id])}}const p={register:n,unregister:i,selected:a,select:b,disabled:O(e,"disabled"),prev:()=>_(t.length-1),next:()=>_(1),isSelected:r=>a.value.includes(r),selectedClass:g(()=>e.selectedClass),items:g(()=>t),getItemIndex:r=>sn(t,r)};return Ge(l,p),p}function sn(e,l){const s=Xe(e,[l]);return s.length?e.findIndex(t=>t.id===s[0]):-1}function Xe(e,l){const s=[];return l.forEach(t=>{const a=e.find(n=>De(t,n.value)),o=e[t];(a==null?void 0:a.value)!=null?s.push(a.id):o!=null&&s.push(o.id)}),s}function ln(e,l){const s=[];return l.forEach(t=>{const a=e.findIndex(o=>o.id===t);if(~a){const o=e[a];s.push(o.value!=null?o.value:a)}}),s}function on(e){let{selectedElement:l,containerElement:s,isRtl:t,isHorizontal:a}=e;const o=Y(a,s),n=Qe(a,t,s),i=Y(a,l),v=Ye(a,l),b=i*.4;return n>v?v-b:n+o<v+i?v-o+i+b:n}function rn(e){let{selectedElement:l,containerElement:s,isHorizontal:t}=e;const a=Y(t,s),o=Ye(t,l),n=Y(t,l);return o-a/2+n/2}function Ce(e,l){const s=e?"scrollWidth":"scrollHeight";return(l==null?void 0:l[s])||0}function cn(e,l){const s=e?"clientWidth":"clientHeight";return(l==null?void 0:l[s])||0}function Qe(e,l,s){if(!s)return 0;const{scrollLeft:t,offsetWidth:a,scrollWidth:o}=s;return e?l?o-a+t:t:s.scrollTop}function Y(e,l){const s=e?"offsetWidth":"offsetHeight";return(l==null?void 0:l[s])||0}function Ye(e,l){const s=e?"offsetLeft":"offsetTop";return(l==null?void 0:l[s])||0}const un=Symbol.for("vuetify:v-slide-group"),Ze=E({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:un},nextIcon:{type:j,default:"$next"},prevIcon:{type:j,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ae(),...Rt({mobile:null}),...se(),...Ke({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ie=D()({name:"VSlideGroup",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:s}=l;const{isRtl:t}=Re(),{displayClasses:a,mobile:o}=Tt(e),n=je(e,e.symbol),i=U(!1),v=U(0),b=U(0),_=U(0),p=g(()=>e.direction==="horizontal"),{resizeRef:r,contentRect:h}=Se(),{resizeRef:m,contentRect:y}=Se(),f=$t(),S=g(()=>({container:r.el,duration:200,easing:"easeOutQuart"})),W=g(()=>n.selected.value.length?n.items.value.findIndex(c=>c.id===n.selected.value[0]):-1),P=g(()=>n.selected.value.length?n.items.value.findIndex(c=>c.id===n.selected.value[n.selected.value.length-1]):-1);if(ve){let c=-1;le(()=>[n.selected.value,h.value,y.value,p.value],()=>{cancelAnimationFrame(c),c=requestAnimationFrame(()=>{if(h.value&&y.value){const d=p.value?"width":"height";b.value=h.value[d],_.value=y.value[d],i.value=b.value+1<_.value}if(W.value>=0&&m.el){const d=m.el.children[P.value];H(d,e.centerActive)}})})}const R=U(!1);function H(c,d){let x=0;d?x=rn({containerElement:r.el,isHorizontal:p.value,selectedElement:c}):x=on({containerElement:r.el,isHorizontal:p.value,isRtl:t.value,selectedElement:c}),Z(x)}function Z(c){if(!ve||!r.el)return;const d=Y(p.value,r.el),x=Qe(p.value,t.value,r.el);if(!(Ce(p.value,r.el)<=d||Math.abs(c-x)<16)){if(p.value&&t.value&&r.el){const{scrollWidth:ee,offsetWidth:de}=r.el;c=ee-de-c}p.value?f.horizontal(c,S.value):f(c,S.value)}}function k(c){const{scrollTop:d,scrollLeft:x}=c.target;v.value=p.value?x:d}function A(c){if(R.value=!0,!(!i.value||!m.el)){for(const d of c.composedPath())for(const x of m.el.children)if(x===d){H(x);return}}}function oe(c){R.value=!1}let N=!1;function J(c){var d;!N&&!R.value&&!(c.relatedTarget&&((d=m.el)!=null&&d.contains(c.relatedTarget)))&&z(),N=!1}function q(){N=!0}function re(c){if(!m.el)return;function d(x){c.preventDefault(),z(x)}p.value?c.key==="ArrowRight"?d(t.value?"prev":"next"):c.key==="ArrowLeft"&&d(t.value?"next":"prev"):c.key==="ArrowDown"?d("next"):c.key==="ArrowUp"&&d("prev"),c.key==="Home"?d("first"):c.key==="End"&&d("last")}function z(c){var x,$;if(!m.el)return;let d;if(!c)d=Lt(m.el)[0];else if(c==="next"){if(d=(x=m.el.querySelector(":focus"))==null?void 0:x.nextElementSibling,!d)return z("first")}else if(c==="prev"){if(d=($=m.el.querySelector(":focus"))==null?void 0:$.previousElementSibling,!d)return z("last")}else c==="first"?d=m.el.firstElementChild:c==="last"&&(d=m.el.lastElementChild);d&&d.focus({preventScroll:!0})}function T(c){const d=p.value&&t.value?-1:1,x=(c==="prev"?-d:d)*b.value;let $=v.value+x;if(p.value&&t.value&&r.el){const{scrollWidth:ee,offsetWidth:de}=r.el;$+=ee-de}Z($)}const ce=g(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),ue=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!o.value;case!0:return i.value||Math.abs(v.value)>0;case"mobile":return o.value||i.value||Math.abs(v.value)>0;default:return!o.value&&(i.value||Math.abs(v.value)>0)}}),ye=g(()=>Math.abs(v.value)>1),ge=g(()=>{if(!r.value)return!1;const c=Ce(p.value,r.el),d=cn(p.value,r.el);return c-d-Math.abs(v.value)>1});return me(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":ue.value,"v-slide-group--is-overflowing":i.value},a.value,e.class],style:e.style,tabindex:R.value||n.selected.value.length?-1:0,onFocus:J},{default:()=>{var c,d,x;return[ue.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ye.value}],onMousedown:q,onClick:()=>ye.value&&T("prev")},[((c=s.prev)==null?void 0:c.call(s,ce.value))??u(ke,null,{default:()=>[u(F,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:r,class:"v-slide-group__container",onScroll:k},[u("div",{ref:m,class:"v-slide-group__content",onFocusin:A,onFocusout:oe,onKeydown:re},[(d=s.default)==null?void 0:d.call(s,ce.value)])]),ue.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ge.value}],onMousedown:q,onClick:()=>ge.value&&T("next")},[((x=s.next)==null?void 0:x.call(s,ce.value))??u(ke,null,{default:()=>[u(F,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:T,scrollOffset:v,focus:z}}}),Je=Symbol.for("vuetify:v-chip-group"),dn=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:De},...Ze(),...ae(),...Ke({selectedClass:"v-chip--selected"}),...se(),...We(),...ze({variant:"tonal"})},"VChipGroup");D()({name:"VChipGroup",props:dn(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:s}=l;const{themeClasses:t}=He(e),{isSelected:a,select:o,next:n,prev:i,selected:v}=je(e,Je);return Ft({VChip:{color:O(e,"color"),disabled:O(e,"disabled"),filter:O(e,"filter"),variant:O(e,"variant")}}),me(()=>{const b=Ie.filterProps(e);return u(Ie,Ne(b,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value,e.class],style:e.style}),{default:()=>{var _;return[(_=s.default)==null?void 0:_.call(s,{isSelected:a,select:o,next:n,prev:i,selected:v.value})]}})}),{}}});const fn=E({activeClass:String,appendAvatar:String,appendIcon:j,closable:Boolean,closeIcon:{type:j,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:be(),onClickOnce:be(),...at(),...ae(),...st(),...lt(),...nn(),...it(),...ot(),...rt(),...se({tag:"span"}),...We(),...ze({variant:"tonal"})},"VChip"),vn=D()({name:"VChip",directives:{Ripple:ct},props:fn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,l){let{attrs:s,emit:t,slots:a}=l;const{t:o}=Ot(),{borderClasses:n}=ut(e),{colorClasses:i,colorStyles:v,variantClasses:b}=dt(e),{densityClasses:_}=ft(e),{elevationClasses:p}=vt(e),{roundedClasses:r}=pt(e),{sizeClasses:h}=mt(e),{themeClasses:m}=He(e),y=Me(e,"modelValue"),f=an(e,Je,!1),S=ht(e,s),W=g(()=>e.link!==!1&&S.isLink.value),P=g(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||S.isClickable.value)),R=g(()=>({"aria-label":o(e.closeLabel),onClick(k){k.preventDefault(),k.stopPropagation(),y.value=!1,t("click:close",k)}}));function H(k){var A;t("click",k),P.value&&((A=S.navigate)==null||A.call(S,k),f==null||f.toggle())}function Z(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),H(k))}return()=>{const k=S.isLink.value?"a":e.tag,A=!!(e.appendIcon||e.appendAvatar),oe=!!(A||a.append),N=!!(a.close||e.closable),J=!!(a.filter||e.filter)&&f,q=!!(e.prependIcon||e.prependAvatar),re=!!(q||a.prepend),z=!f||f.isSelected.value;return y.value&&xe(u(k,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":J,"v-chip--pill":e.pill},m.value,n.value,z?i.value:void 0,_.value,p.value,r.value,h.value,b.value,f==null?void 0:f.selectedClass.value,e.class],style:[z?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:S.href.value,tabindex:P.value?0:void 0,onClick:H,onKeydown:P.value&&!W.value&&Z},{default:()=>{var T;return[yt(P.value,"v-chip"),J&&u(tn,{key:"filter"},{default:()=>[xe(u("div",{class:"v-chip__filter"},[a.filter?u(te,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):u(F,{key:"filter-icon",icon:e.filterIcon},null)]),[[Mt,f.isSelected.value]])]}),re&&u("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?u(te,{key:"prepend-defaults",disabled:!q,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):u(Q,null,[e.prependIcon&&u(F,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(_e,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content","data-no-activator":""},[((T=a.default)==null?void 0:T.call(a,{isSelected:f==null?void 0:f.isSelected.value,selectedClass:f==null?void 0:f.selectedClass.value,select:f==null?void 0:f.select,toggle:f==null?void 0:f.toggle,value:f==null?void 0:f.value.value,disabled:e.disabled}))??e.text]),oe&&u("div",{key:"append",class:"v-chip__append"},[a.append?u(te,{key:"append-defaults",disabled:!A,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):u(Q,null,[e.appendIcon&&u(F,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(_e,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),N&&u("button",Ne({key:"close",class:"v-chip__close",type:"button"},R.value),[a.close?u(te,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):u(F,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Gt("ripple"),P.value&&e.ripple,null]])}}}),pn={class:"ma-2 pa-2"},mn={class:Te(["text-h2","pa-2"])},hn={class:"v-row"},yn={class:"v-col pa-0"},gn={class:"v-col pa-0"},xn=ie({__name:"[idPokemon]",async setup(e){let l,s;const t=Dt(),{data:a}=([l,s]=M(()=>ne(`https://pokeapi.co/api/v2/pokemon/${t.params.idPokemon}`,"$hKPZiKouJv")),l=await l,s(),l),{data:o}=([l,s]=M(()=>ne(a.value.species.url,"$3p1UHKnthF")),l=await l,s(),l),n=g(()=>{const _=a.value.name;return _&&_[0].toUpperCase()+_.slice(1)});g(()=>(a.value.types||[]).map(p=>p.type.name).join(", "));const i=g(()=>(a.value.sprites||[]).front_default),v=g(()=>a.value.abilities),b=g(()=>a.value.stats);return(_,p)=>{const r=Jt;return w(),X(L,{class:""},{default:I(()=>[u(Pe,{class:"pa-4"},{default:I(()=>[u(L,{class:"d-flex flex-row mb-6"},{default:I(()=>[B("div",pn,[u(we,{class:"ma-6",width:300,"aspect-ratio":"4/3",cover:"",src:V(i)},null,8,["src"])]),u(L,{class:"ma-2 pa-2"},{default:I(()=>[B("div",mn,K(V(n)),1),u(L,null,{default:I(()=>[(w(!0),G(Q,null,pe(V(v),h=>(w(),X(vn,null,{default:I(()=>[Be(K(h.ability.name),1)]),_:2},1024))),256))]),_:1}),u(L,null,{default:I(()=>[(w(!0),G(Q,null,pe(V(b),h=>(w(),G("div",hn,[B("span",yn,K(h.stat.name),1),B("span",gn,K(h.base_stat),1)]))),256))]),_:1})]),_:1})]),_:1}),u(Ve),u(r,{"evolution-chain":V(o).evolution_chain},null,8,["evolution-chain"])]),_:1})]),_:1})}}});export{xn as default};
