"use strict";(self.webpackChunkrucogs_website=self.webpackChunkrucogs_website||[]).push([[319],{8340:(M,d,n)=>{n.d(d,{e:()=>m});var t=n(4537),g=n(8692);const c=function(a,s,o,e){return{"dog-ear":a,"full-page":s,shadow:o,"full-width":e}},h=function(a){return{last:a}},p=["*"];let m=(()=>{class a{constructor(o,e,u,f,P,C,b,v){this.elementRef=o,this.title="",this.color="blank",this.bgImage="",this.bgRepeatMode="",this.bgPosition="",this.last=null!=e,this.dogEar=null!=u,this.fullPage=null!=f,this.fullWidth=null!=P,this.shadow=null!=C,this.bottomGradient=null!=v,this.topGradient=null!=b}ngOnInit(){this.last=this.elementRef.nativeElement.hasAttribute("last"),this.dogEar=this.elementRef.nativeElement.hasAttribute("dog-ear"),this.fullPage=this.elementRef.nativeElement.hasAttribute("full-page"),this.fullWidth=this.elementRef.nativeElement.hasAttribute("full-width"),this.shadow=this.elementRef.nativeElement.hasAttribute("shadow")}getBgStyle(){let o="";return(this.topGradient||this.bottomGradient)&&(o="linear-gradient("+(this.topGradient?"var(--background-color),":"")+"#00000000"+(this.bottomGradient?", var(--background-color)":"")+"),"),{...this.bgImage&&{"background-image":o+"url("+this.bgImage+")"},...""!==this.bgRepeatMode&&{"background-repeat":this.bgRepeatMode,"background-size":"auto"},...""!==this.bgPosition&&{"background-position":this.bgPosition},..."none"==this.color&&{"background-color":"none"}}}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.SBq),t.$8M("last"),t.$8M("dog-ear"),t.$8M("full-page"),t.$8M("full-width"),t.$8M("shadow"),t.$8M("top-gradient"),t.$8M("bottom-gradient"))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-section"]],inputs:{title:"title",color:"color",bgImage:"bgImage",bgRepeatMode:"bgRepeatMode",bgPosition:"bgPosition"},ngContentSelectors:p,decls:6,vars:18,consts:[[3,"ngClass","ngStyle"],[1,"content"],[1,"mat-display-2","app-section","mb-16",3,"hidden"],[3,"ngClass"]],template:function(o,e){1&o&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3),t.qZA(),t.Hsn(4),t.qZA()(),t._UZ(5,"div",3)),2&o&&(t.Gre("app-section bg main-bg ",e.color,""),t.Q6J("ngClass",t.l5B(11,c,e.dogEar,e.fullPage,e.shadow,e.fullWidth))("ngStyle",e.getBgStyle()),t.xp6(2),t.Q6J("hidden",""===e.title),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Gre("app-section bg bottom ",e.color,""),t.Q6J("ngClass",t.VKq(16,h,e.last)))},dependencies:[g.mk,g.PC],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}.main-bg[_ngcontent-%COMP%]{height:100%;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:var(--content-padding);padding-top:var(--dog-ear-padding);padding-bottom:var(--dog-ear-padding);background-size:cover;background-position:center}.dog-ear[_ngcontent-%COMP%]{border-top-left-radius:var(--dog-ear)}.full-page[_ngcontent-%COMP%]{min-height:100vh}.main-bg.full-width[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.main-bg.full-width[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%}div.last[_ngcontent-%COMP%]{height:0px}.bottom[_ngcontent-%COMP%]{position:absolute;height:128px;width:100%}.content[_ngcontent-%COMP%]{margin:auto;max-width:var(--content-width)}"]}),a})()},319:(M,d,n)=>{n.r(d),n.d(d,{ProjectsPageModule:()=>v});var t=n(8692),g=n(92),c=n(9638),h=n(3331),p=n(7406),m=n(5186),a=n(3178),s=n(9910),o=n(7763),e=n(4537),u=n(9424),f=n(8340),P=n(5539);const b=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-projects-page"]],decls:3,vars:0,consts:[["title","Projects"],["full-width",""]],template:function(l,y){1&l&&(e._UZ(0,"app-page-header",0),e.TgZ(1,"app-section",1),e._UZ(2,"app-projects-display"),e.qZA())},dependencies:[u.q,f.e,P.Y]}),i})(),data:{titleAll:"Projects"}}];let v=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(b),t.ez,o.I,s.Qd,o.I,c.ot,p.c,g.UX,m.Fk,h.Ps]}),i})()}}]);