"use strict";(self.webpackChunkrucogs_website=self.webpackChunkrucogs_website||[]).push([[780],{6925:(_,p,r)=>{r.d(p,{r:()=>s});var t=r(6779),o=r(4537),d=r(3178),l=r(8692),c=r(8399);const a=function(n){return{"ml-10":n}};function i(n,g){if(1&n&&o._UZ(0,"ic-icon",3),2&n){const u=o.oxw();o.Q6J("icon",u.iconifyIcon)("ngClass",o.VKq(2,a,""!=u.iconifyIcon))}}const e=["*"];let s=(()=>{class n extends t.S{constructor(u,m,h,f){super(u,m),this.iconifyIcon="",this.hover=!1,this.pressed=!1,this.outline="",null!=h?this.outline="outlined":null!=f&&(this.outline="outlined contrast")}ngOnInit(){}}return n.\u0275fac=function(u){return new(u||n)(o.Y36(d.F0),o.$8M("route"),o.$8M("outlined"),o.$8M("outlined-contrast"))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-button"]],inputs:{iconifyIcon:"iconifyIcon"},features:[o.qOj],ngContentSelectors:e,decls:4,vars:5,consts:[["type","button",3,"click"],["size","1.5em","class","app-button icon",3,"icon","ngClass",4,"ngIf"],[1,"app-button","mat-button","text"],["size","1.5em",1,"app-button","icon",3,"icon","ngClass"]],template:function(u,m){1&u&&(o.F$t(),o.TgZ(0,"button",0),o.NdJ("click",function(){return m.onClick()}),o.YNc(1,i,1,4,"ic-icon",1),o.TgZ(2,"span",2),o.Hsn(3),o.qZA()()),2&u&&(o.MT6("app-button button ",m.color," ",m.outline,""),o.xp6(1),o.Q6J("ngIf",""!=m.iconifyIcon))},dependencies:[l.mk,l.O5,c.ar],styles:[".button[_ngcontent-%COMP%]{border:none;text-align:center;text-decoration:none;display:inline-block;padding:0 1.25em;height:3em;width:100%;border-radius:30em;display:flex;align-items:center;justify-content:center;outline:0px}.app-button.button.outlined[_ngcontent-%COMP%]{background-color:transparent;border:solid;border-width:2px}"]}),n})()},454:(_,p,r)=>{r.d(p,{F:()=>d});var t=r(4537);const o=["*"];let d=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-column-layout"]],ngContentSelectors:o,decls:1,vars:0,template:function(a,i){1&a&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:32px}@media only screen and (max-width: 1080px){[_nghost-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{display:block}"]}),l})()},2426:(_,p,r)=>{r.d(p,{X:()=>a});var t=r(4537),o=r(8692),d=r(9638),l=r(8399);const c=["*"];let a=(()=>{class i{constructor(){this.bgImage="",this.color="primary",this.bgRepeatMode="",this.bgPosition=""}ngOnInit(){}getBgStyle(){return{"background-image":"linear-gradient(to bottom, var(--background-color), #00000000), url("+this.bgImage+")",...""!==this.bgRepeatMode&&{"background-repeat":this.bgRepeatMode,"background-size":"auto"},...""!==this.bgPosition&&{"background-position":this.bgPosition}}}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-full-page-header"]],inputs:{bgImage:"bgImage",color:"color",bgRepeatMode:"bgRepeatMode",bgPosition:"bgPosition"},ngContentSelectors:c,decls:5,vars:7,consts:[[3,"ngStyle"],[1,"app-full-page-header","content"],["mat-icon-button","","onclick","\n    window.scrollBy({ \n      top: window.innerHeight / 2,\n      left: 0, \n      behavior: 'smooth' \n    });\n  ",1,"app-full-page-header","scroll-button"],["size","42px","icon","arrowDownCircleFill"]],template:function(s,n){1&s&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"button",2),t._UZ(4,"ic-icon",3),t.qZA()()),2&s&&(t.Gre("app-full-page-header bg ",n.color,""),t.Q6J("ngStyle",n.getBgStyle()),t.xp6(4),t.Gre("app-full-page-header scroll-icon iconify ",n.color,""))},dependencies:[o.PC,d.lW,l.ar],styles:[".bg[_ngcontent-%COMP%]{position:relative;display:flex;box-sizing:border-box;min-height:calc(100vh - var(--site-header-height));padding:var(--content-padding);background-size:cover;background-position:center}.content[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:var(--content-width)}.scroll-button[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 21px);bottom:10%;filter:drop-shadow(0 0 1rem black)}"]}),i})()},7732:(_,p,r)=>{r.d(p,{I:()=>i});var t=r(4537),o=r(8692),d=r(7914),l=r(8399);function c(e,s){if(1&e&&t._UZ(0,"ic-icon",4),2&e){const n=t.oxw();t.Q6J("icon",n.iconifyIcon)("hidden",""===n.iconifyIcon)}}const a=["*"];let i=(()=>{class e{constructor(){this.iconifyIcon="",this.title=""}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-question-panel"]],hostVars:2,hostBindings:function(n,g){2&n&&t.ekj("mat-expansion-panel",g.isExpansionPanel)},inputs:{iconifyIcon:"iconifyIcon",title:"title"},ngContentSelectors:a,decls:6,vars:2,consts:[[1,"app-question-panel","expansion-panel"],[1,"app-resource-panel","header"],[1,"app-question-panel","title","mat-title"],["class","iconify mr-16","data-height","24px",3,"icon","hidden",4,"ngIf"],["data-height","24px",1,"iconify","mr-16",3,"icon","hidden"]],template:function(n,g){1&n&&(t.F$t(),t.TgZ(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header",1)(2,"mat-panel-title",2),t.YNc(3,c,1,2,"ic-icon",3),t._uU(4),t.qZA()(),t.Hsn(5),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",g.iconifyIcon),t.xp6(1),t.hij(" ",g.title," "))},dependencies:[o.O5,d.ib,d.yz,d.yK,l.ar],styles:[".header[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.title[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em;display:flex;align-items:center;justify-content:left}.expansion-panel[_ngcontent-%COMP%]{border-radius:inherit!important}[_nghost-%COMP%]:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px}[_nghost-%COMP%]:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px}"]}),e})()},8340:(_,p,r)=>{r.d(p,{e:()=>a});var t=r(4537),o=r(8692);const d=function(i,e,s,n){return{"dog-ear":i,"full-page":e,shadow:s,"full-width":n}},l=function(i){return{last:i}},c=["*"];let a=(()=>{class i{constructor(s,n,g,u,m,h,f){this.elementRef=s,this.title="",this.color="blank",this.bgImage="",this.bgRepeatMode="",this.bgPosition="",this.last=null!=n,this.dogEar=null!=g,this.fullPage=null!=u,this.fullWidth=null!=m,this.shadow=null!=h,this.bottomGradient=null!=f}ngOnInit(){this.last=this.elementRef.nativeElement.hasAttribute("last"),this.dogEar=this.elementRef.nativeElement.hasAttribute("dog-ear"),this.fullPage=this.elementRef.nativeElement.hasAttribute("full-page"),this.fullWidth=this.elementRef.nativeElement.hasAttribute("full-width"),this.shadow=this.elementRef.nativeElement.hasAttribute("shadow")}getBgStyle(){return{...this.bgImage&&{"background-image":"linear-gradient(var(--background-color), #00000000"+(this.bottomGradient?", var(--background-color)":"")+"), url("+this.bgImage+")"},...""!==this.bgRepeatMode&&{"background-repeat":this.bgRepeatMode,"background-size":"auto"},...""!==this.bgPosition&&{"background-position":this.bgPosition}}}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(t.SBq),t.$8M("last"),t.$8M("dog-ear"),t.$8M("full-page"),t.$8M("full-width"),t.$8M("shadow"),t.$8M("bottom-gradient"))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-section"]],inputs:{title:"title",color:"color",bgImage:"bgImage",bgRepeatMode:"bgRepeatMode",bgPosition:"bgPosition"},ngContentSelectors:c,decls:6,vars:18,consts:[[3,"ngClass","ngStyle"],[1,"content"],[1,"mat-display-2","app-section","mb-16",3,"hidden"],[3,"ngClass"]],template:function(s,n){1&s&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3),t.qZA(),t.Hsn(4),t.qZA()(),t._UZ(5,"div",3)),2&s&&(t.Gre("app-section bg main-bg ",n.color,""),t.Q6J("ngClass",t.l5B(11,d,n.dogEar,n.fullPage,n.shadow,n.fullWidth))("ngStyle",n.getBgStyle()),t.xp6(2),t.Q6J("hidden",""===n.title),t.xp6(1),t.Oqu(n.title),t.xp6(2),t.Gre("app-section bg bottom ",n.color,""),t.Q6J("ngClass",t.VKq(16,l,n.last)))},dependencies:[o.mk,o.PC],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}.main-bg[_ngcontent-%COMP%]{height:100%;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:var(--content-padding);padding-top:var(--dog-ear-padding);padding-bottom:var(--dog-ear-padding);background-size:cover;background-position:center}.dog-ear[_ngcontent-%COMP%]{border-top-left-radius:var(--dog-ear)}.full-page[_ngcontent-%COMP%]{min-height:100vh}.main-bg.full-width[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.main-bg.full-width[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%}div.last[_ngcontent-%COMP%]{height:0px}.bottom[_ngcontent-%COMP%]{position:absolute;height:128px;width:100%}.content[_ngcontent-%COMP%]{margin:auto;max-width:var(--content-width)}"]}),i})()},8009:(_,p,r)=>{r.d(p,{Y:()=>l});var t=r(4537),o=r(3512);const d=["*"];let l=(()=>{class c{constructor(i,e){this.elementRef=i,this.cssLength=e,this.columnWidth="20em",this.columns="auto-fit",this.autofitColumns=!0,this.gridTemplateColumns="",this.observer=new MutationObserver(s=>{this.updateGridTemplateColumns()})}ngOnInit(){this.updateGridTemplateColumns(!0)}ngAfterViewInit(){this.observer.observe(this.elementRef.nativeElement,{childList:!0})}ngOnDestroy(){this.observer.disconnect()}updateGridTemplateColumns(i=!1){let e=this.autofitColumns,s=!1;if(!i){const n=this.elementRef.nativeElement,g=this.cssLength.convertToNumber(this.columnWidth,"px"),u=Math.floor(n.offsetWidth/g);e=!(n.children.length<u)&&this.autofitColumns,s=n.offsetWidth<=g}this.gridTemplateColumns=s?`repeat( ${this.columns} )`:`repeat( ${this.columns}, `+(e?`minmax(${this.columnWidth}, 1fr)`:this.columnWidth)+" )"}}return c.\u0275fac=function(i){return new(i||c)(t.Y36(t.SBq),t.Y36(o.I))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-card-grid"]],hostVars:2,hostBindings:function(i,e){2&i&&t.Udp("grid-template-columns",e.gridTemplateColumns)},inputs:{columnWidth:["column-width","columnWidth"],columns:"columns",autofitColumns:["auto-fit-columns","autofitColumns"]},ngContentSelectors:d,decls:1,vars:0,template:function(i,e){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{box-sizing:border-box;display:grid;align-items:stretch;margin-left:auto;margin-right:auto;gap:.75em}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]}),c})()},4614:(_,p,r)=>{r.d(p,{A:()=>c});var t=r(4537),o=r(8692);const d=function(a){return{outlined:a}},l=["*"];let c=(()=>{class a{constructor(e){this.color="blank",this.hover="",this.outlined=null!=e}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)(t.$8M("outlined"))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-card"]],inputs:{color:"color",hover:"hover"},ngContentSelectors:l,decls:2,vars:7,consts:[[3,"ngClass"]],template:function(e,s){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&e&&(t.MT6("app-card card ",s.color," ",s.hover,""),t.Q6J("ngClass",t.VKq(5,d,s.outlined)))},dependencies:[o.mk],styles:["[_nghost-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{display:block;position:relative;width:auto;height:100%;width:100%;border-style:solid;border-width:2px;border-radius:8px;padding:2.25em;box-sizing:border-box}.outlined[_ngcontent-%COMP%]{border-width:2px}"]}),a})()},3512:(_,p,r)=>{r.d(p,{I:()=>c});var t=function(a){return parseFloat(a)},d=r(4537);const l=function o(a){return function(i,e,s,n){null==s&&(s=a),null==n&&(n=s);var g=String(i).match(/[\d.\-\+]*\s*(.*)/)[1]||"";if(g===e)return i;var u=t(i);if("px"!==g)if("em"===g)u=t(i)*t(s);else if("rem"===g)u=t(i)*t(a);else{if("ex"!==g)return i;u=t(i)*t(s)*2}var m=u;if("px"!==e)if("em"===e)m=u/t(n);else if("rem"===e)m=u/t(a);else{if("ex"!==e)return i;m=u/t(n)/2}return parseFloat(m.toFixed(5))+e}}("16px");let c=(()=>{class a{constructor(){}convert(e,s,n=""){return n?l(e,s,n):l(e,s)}toNumber(e){return parseInt(e.replace(/[^0-9.]/g,""))}convertToNumber(e,s,n=""){return this.toNumber(n?l(e,s,n):l(e,s))}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4356:(_,p,r)=>{function t(){const o=new Date,d=new Date(`1/1/${o.getFullYear()}`),l=new Date(`5/15/${o.getFullYear()}`),c=new Date(`12/15/${o.getFullYear()}`),a=new Date(`12/31/${o.getFullYear()}`);return d<=o&&o<l?"Spring "+o.getFullYear():l<=o&&o<c?"Fall "+o.getFullYear():c<=o&&o<=a?"Spring "+(o.getFullYear()+1):""}r.d(p,{H:()=>t})}}]);