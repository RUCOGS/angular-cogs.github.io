"use strict";(self.webpackChunkrucogs_website=self.webpackChunkrucogs_website||[]).push([[592],{6925:(C,m,n)=>{n.d(m,{r:()=>r});var t=n(6779),s=n(4537),e=n(3178),d=n(8692),u=n(8399);const c=function(a){return{"ml-10":a}},l=["*"];let r=(()=>{class a extends t.S{constructor(g,f,y,b){super(g,f),this.iconifyIcon="",this.hover=!1,this.pressed=!1,this.outline="",null!=y?this.outline="outlined":null!=b&&(this.outline="outlined contrast")}ngOnInit(){}}return a.\u0275fac=function(g){return new(g||a)(s.Y36(e.F0),s.$8M("route"),s.$8M("outlined"),s.$8M("outlined-contrast"))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-button"]],inputs:{iconifyIcon:"iconifyIcon"},features:[s.qOj],ngContentSelectors:l,decls:4,vars:9,consts:[["type","button",3,"click"],["size","1.5em",1,"app-button","icon",3,"icon","hidden","ngClass"],[1,"app-button","mat-button","text"]],template:function(g,f){1&g&&(s.F$t(),s.TgZ(0,"button",0),s.NdJ("click",function(){return f.onClick()}),s._UZ(1,"ic-icon",1),s.TgZ(2,"span",2),s.Hsn(3),s.qZA()()),2&g&&(s.MT6("app-button button ",f.color," ",f.outline,""),s.xp6(1),s.Q6J("icon",f.iconifyIcon)("hidden",""==f.iconifyIcon)("ngClass",s.VKq(7,c,""!=f.iconifyIcon)))},dependencies:[d.mk,u.ar],styles:[".button[_ngcontent-%COMP%]{border:none;text-align:center;text-decoration:none;display:inline-block;padding:0 1.25em;height:3em;width:100%;border-radius:30em;display:flex;align-items:center;justify-content:center;outline:0px}.icon[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{margin-right:auto}.app-button.button.outlined[_ngcontent-%COMP%]{background-color:transparent;border:solid;border-width:2px}"]}),a})()},454:(C,m,n)=>{n.d(m,{F:()=>e});var t=n(4537);const s=["*"];let e=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-column-layout"]],ngContentSelectors:s,decls:1,vars:0,template:function(c,l){1&c&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:32px}@media only screen and (max-width: 1080px){[_nghost-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{display:block}"]}),d})()},2426:(C,m,n)=>{n.d(m,{X:()=>c});var t=n(4537),s=n(8692),e=n(9638),d=n(8399);const u=["*"];let c=(()=>{class l{constructor(){this.bgImage="",this.color="primary",this.bgRepeatMode="",this.bgPosition=""}ngOnInit(){}getBgStyle(){return{"background-image":"linear-gradient(to bottom, var(--background-color), #00000000), url("+this.bgImage+")",...""!==this.bgRepeatMode&&{"background-repeat":this.bgRepeatMode,"background-size":"auto"},...""!==this.bgPosition&&{"background-position":this.bgPosition}}}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-full-page-header"]],inputs:{bgImage:"bgImage",color:"color",bgRepeatMode:"bgRepeatMode",bgPosition:"bgPosition"},ngContentSelectors:u,decls:5,vars:7,consts:[[3,"ngStyle"],[1,"app-full-page-header","content"],["mat-icon-button","","onclick","\n    window.scrollBy({ \n      top: window.innerHeight / 2,\n      left: 0, \n      behavior: 'smooth' \n    });\n  ",1,"app-full-page-header","scroll-button"],["size","42px","icon","arrowDownCircleFill"]],template:function(a,i){1&a&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"button",2),t._UZ(4,"ic-icon",3),t.qZA()()),2&a&&(t.Gre("app-full-page-header bg ",i.color,""),t.Q6J("ngStyle",i.getBgStyle()),t.xp6(4),t.Gre("app-full-page-header scroll-icon iconify ",i.color,""))},dependencies:[s.PC,e.lW,d.ar],styles:[".bg[_ngcontent-%COMP%]{position:relative;display:flex;box-sizing:border-box;min-height:calc(100vh - var(--site-header-height));padding:var(--content-padding);background-size:cover;background-position:center}.content[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:var(--content-width)}.scroll-button[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 21px);bottom:10%;filter:drop-shadow(0 0 1rem black)}"]}),l})()},9424:(C,m,n)=>{n.d(m,{q:()=>e});var t=n(4537);const s=["*"];let e=(()=>{class d{constructor(){this.title="",this.color="primary"}ngOnInit(){}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-page-header"]],inputs:{title:"title",color:"color"},ngContentSelectors:s,decls:5,vars:4,consts:[[1,"app-page-header","content"],[1,"mat-display-4","app-page-header","title"]],template:function(c,l){1&c&&(t.F$t(),t.TgZ(0,"div")(1,"div",0)(2,"h1",1),t._uU(3),t.qZA(),t.Hsn(4),t.qZA()()),2&c&&(t.Gre("app-page-header bg ",l.color,""),t.xp6(3),t.Oqu(l.title))},styles:["[_nghost-%COMP%]{overflow:visible}.bg[_ngcontent-%COMP%]{padding:var(--content-padding)}.content[_ngcontent-%COMP%]{display:block;margin:auto;max-width:var(--content-width)}"]}),d})()},7732:(C,m,n)=>{n.d(m,{I:()=>l});var t=n(4537),s=n(8692),e=n(7914),d=n(8399);function u(r,a){if(1&r&&t._UZ(0,"ic-icon",4),2&r){const i=t.oxw();t.Q6J("icon",i.iconifyIcon)("hidden",""===i.iconifyIcon)}}const c=["*"];let l=(()=>{class r{constructor(){this.iconifyIcon="",this.title=""}ngOnInit(){}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-question-panel"]],hostVars:2,hostBindings:function(i,g){2&i&&t.ekj("mat-expansion-panel",g.isExpansionPanel)},inputs:{iconifyIcon:"iconifyIcon",title:"title"},ngContentSelectors:c,decls:6,vars:2,consts:[[1,"app-question-panel","expansion-panel"],[1,"app-resource-panel","header"],[1,"app-question-panel","title","mat-title"],["class","iconify mr-16","data-height","24px",3,"icon","hidden",4,"ngIf"],["data-height","24px",1,"iconify","mr-16",3,"icon","hidden"]],template:function(i,g){1&i&&(t.F$t(),t.TgZ(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header",1)(2,"mat-panel-title",2),t.YNc(3,u,1,2,"ic-icon",3),t._uU(4),t.qZA()(),t.Hsn(5),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngIf",g.iconifyIcon),t.xp6(1),t.hij(" ",g.title," "))},dependencies:[s.O5,e.ib,e.yz,e.yK,d.ar],styles:[".header[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.title[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em;display:flex;align-items:center;justify-content:left}.expansion-panel[_ngcontent-%COMP%]{border-radius:inherit!important}[_nghost-%COMP%]:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px}[_nghost-%COMP%]:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px}"]}),r})()},8340:(C,m,n)=>{n.d(m,{e:()=>c});var t=n(4537),s=n(8692);const e=function(l,r,a,i){return{"dog-ear":l,"full-page":r,shadow:a,"full-width":i}},d=function(l){return{last:l}},u=["*"];let c=(()=>{class l{constructor(a,i,g,f,y,b){this.elementRef=a,this.title="",this.color="blank",this.bgImage="",this.bgRepeatMode="",this.bgPosition="",this.last=null!=i,this.dogEar=null!=g,this.fullPage=null!=f,this.fullWidth=null!=y,this.shadow=null!=b}ngOnInit(){this.last=this.elementRef.nativeElement.hasAttribute("last"),this.dogEar=this.elementRef.nativeElement.hasAttribute("dog-ear"),this.fullPage=this.elementRef.nativeElement.hasAttribute("full-page"),this.fullWidth=this.elementRef.nativeElement.hasAttribute("full-width"),this.shadow=this.elementRef.nativeElement.hasAttribute("shadow")}getBgStyle(){return{...this.bgImage&&{"background-image":"linear-gradient(var(--background-color), #00000000), url("+this.bgImage+")"},...""!==this.bgRepeatMode&&{"background-repeat":this.bgRepeatMode,"background-size":"auto"},...""!==this.bgPosition&&{"background-position":this.bgPosition}}}}return l.\u0275fac=function(a){return new(a||l)(t.Y36(t.SBq),t.$8M("last"),t.$8M("dog-ear"),t.$8M("full-page"),t.$8M("full-width"),t.$8M("shadow"))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-section"]],inputs:{title:"title",color:"color",bgImage:"bgImage",bgRepeatMode:"bgRepeatMode",bgPosition:"bgPosition"},ngContentSelectors:u,decls:6,vars:18,consts:[[3,"ngClass","ngStyle"],[1,"content"],[1,"mat-display-2","mb-32","app-section","title",3,"hidden"],[3,"ngClass"]],template:function(a,i){1&a&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3),t.qZA(),t.Hsn(4),t.qZA()(),t._UZ(5,"div",3)),2&a&&(t.Gre("app-section bg main-bg ",i.color,""),t.Q6J("ngClass",t.l5B(11,e,i.dogEar,i.fullPage,i.shadow,i.fullWidth))("ngStyle",i.getBgStyle()),t.xp6(2),t.Q6J("hidden",""===i.title),t.xp6(1),t.Oqu(i.title),t.xp6(2),t.Gre("app-section bg bottom ",i.color,""),t.Q6J("ngClass",t.VKq(16,d,i.last)))},dependencies:[s.mk,s.PC],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}.main-bg[_ngcontent-%COMP%]{height:100%;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:var(--content-padding);padding-top:var(--dog-ear-padding);padding-bottom:var(--dog-ear-padding);background-size:cover;background-position:center}.shadow[_ngcontent-%COMP%]{box-shadow:0 0 32px #000}.dog-ear[_ngcontent-%COMP%]{border-top-left-radius:var(--dog-ear)}.full-page[_ngcontent-%COMP%]{min-height:100vh}.main-bg.full-width[_ngcontent-%COMP%]{display:block}div.last[_ngcontent-%COMP%]{height:0px}.bottom[_ngcontent-%COMP%]{position:absolute;height:128px;width:100%}.content[_ngcontent-%COMP%]{width:100%;margin:auto;max-width:var(--content-width)}"]}),l})()},4614:(C,m,n)=>{n.d(m,{A:()=>u});var t=n(4537),s=n(8692);const e=function(c){return{outlined:c}},d=["*"];let u=(()=>{class c{constructor(r){this.color="blank",this.hover="",this.outlined=null!=r}ngOnInit(){}}return c.\u0275fac=function(r){return new(r||c)(t.$8M("outlined"))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-card"]],inputs:{color:"color",hover:"hover"},ngContentSelectors:d,decls:2,vars:7,consts:[[3,"ngClass"]],template:function(r,a){1&r&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&r&&(t.MT6("app-card card ",a.color," ",a.hover,""),t.Q6J("ngClass",t.VKq(5,e,a.outlined)))},dependencies:[s.mk],styles:["[_nghost-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{display:block;position:relative;width:auto;height:100%;width:100%;border-style:solid;border-width:2px;border-radius:8px;padding:2.25em;box-sizing:border-box}.outlined[_ngcontent-%COMP%]{border-width:2px}"]}),c})()},5705:(C,m,n)=>{n.d(m,{u:()=>l});var t=n(4537),s=n(6440),e=n(8692),d=n(3223),u=n(1090);const c=function(r){return{clickable:r}};let l=(()=>{class r{constructor(i){this.cdnService=i,this.link="",this.user={avatarLink:"https://pfps.gg/assets/pfps/6721-rimuru-tempest.png",username:"Atlinx",displayName:"At Lynx"},this.clickable=!0,this.size="medium"}ngOnInit(){""===this.link&&this.user.username&&(this.link=`/members/${this.user.username}`)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(s.U))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-basic-profile"]],inputs:{link:"link",user:"user",clickable:"clickable",size:"size"},decls:8,vars:7,consts:[["trigger","click",3,"user"],[1,"app-basic-profile","container",3,"ngClass"],[3,"avatarSrc"],[2,"margin-top","8px"],[1,"app-basic-profile","display-name",2,"margin-bottom","4px"],[1,"app-basic-profile","username","text-faded"]],template:function(i,g){if(1&i&&(t.TgZ(0,"app-profile-overlay",0)(1,"a",1),t._UZ(2,"app-avatar",2),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA()()()()),2&i){let f,y;t.Q6J("user",g.user),t.xp6(1),t.Q6J("ngClass",t.VKq(5,c,g.clickable)),t.xp6(1),t.Q6J("avatarSrc",g.user.avatarLink?g.cdnService.getFileLink(g.user.avatarLink):""),t.xp6(3),t.Oqu(null!==(f=g.user.displayName)&&void 0!==f?f:""),t.xp6(2),t.hij("@",null!==(y=g.user.username)&&void 0!==y?y:"","")}},dependencies:[e.mk,d.A,u.q],styles:[".container[_ngcontent-%COMP%]{max-width:8em;color:inherit;text-decoration:inherit;display:block;margin:auto}.clickable[_ngcontent-%COMP%]{transition:transform .1s ease-out}.clickable[_ngcontent-%COMP%]:hover{transform:scale(1.08)}.clickable[_ngcontent-%COMP%]:active{transform:scale(1.04)}.username[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.display-name[_ngcontent-%COMP%]{word-wrap:break-word}"]}),r})()},1090:(C,m,n)=>{n.d(m,{q:()=>U});var t=n(4091),s=n(8632),e=n(4537),d=n(3451),u=n(8232);function c(p=0,v=0){return[new u.tR({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"},p,-v),new u.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"},-p,-v),new u.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},-v,p),new u.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},v,p),new u.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},-v,-p),new u.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},v,-p)]}var l=n(1063),r=n(5561),a=n(3528),i=n(8655),g=n(6440),f=n(1656),y=n(3512),b=n(5596),E=n(3178),M=n(8692),A=n(9638),x=n(6387),T=n(2709);const R=["overlayTemplate"],I=["container"];function w(p,v){if(1&p&&e._UZ(0,"img",16),2&p){const o=e.oxw(2);e.Q6J("src",o.cdnService.getFileLink(o.user.bannerLink),e.LSH)}}function B(p,v){1&p&&(e.TgZ(0,"div",17),e._uU(1," Empty bio... "),e.qZA())}function Z(p,v){if(1&p&&(e.TgZ(0,"div",18)(1,"app-tag",19),e._uU(2),e.qZA()()),2&p){const o=e.oxw(2);e.xp6(2),e.hij(" \u2705 Verified @",o.user.netId," ")}}function D(p,v){if(1&p&&(e.TgZ(0,"div",18)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"app-tag",19),e._uU(4),e.qZA()()),2&p){const o=e.oxw(2);e.xp6(2),e.hij("Class of ",o.user.classYear,""),e.xp6(2),e.Oqu(o.getClassYearString(o.user.classYear))}}function S(p,v){if(1&p){const o=e.EpF();e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,w,1,1,"img",5),e.qZA(),e.TgZ(3,"div",6)(4,"div",7),e._UZ(5,"img",8),e.qZA(),e.TgZ(6,"button",9),e.NdJ("click",function(){e.CHM(o);const _=e.oxw();return e.KtG(_.onProfileClick())}),e._uU(7," Profile "),e.qZA()(),e.TgZ(8,"div",10)(9,"div")(10,"h2",11),e._uU(11),e.qZA(),e.TgZ(12,"div",12),e._uU(13),e.qZA()(),e.TgZ(14,"div")(15,"div"),e._uU(16),e.qZA(),e.YNc(17,B,2,0,"div",13),e.qZA(),e.TgZ(18,"div",14),e.YNc(19,Z,3,1,"div",15),e.YNc(20,D,5,2,"div",15),e.qZA()()()}if(2&p){const o=e.oxw();let h;e.xp6(1),e.Q6J("ngStyle",o.getBannerContainerStyle()),e.xp6(1),e.Q6J("ngIf",o.user.bannerLink),e.xp6(3),e.Q6J("src",o.user.avatarLink?o.cdnService.getFileLink(o.user.avatarLink):o.settings.General.defaultAvatarSrc,e.LSH),e.xp6(6),e.Oqu(o.user.displayName),e.xp6(2),e.hij("@",o.user.username,""),e.xp6(3),e.Oqu((null!==(h=o.user.bio)&&void 0!==h?h:"").slice(0,100)+(null!==(h=null==o.user.bio?null:o.user.bio.length)&&void 0!==h&&h?"...":"")),e.xp6(1),e.Q6J("ngIf",!o.user.bio),e.xp6(2),e.Q6J("ngIf",o.user.netId),e.xp6(1),e.Q6J("ngIf",o.user.classYear)}}const L=["*"];let U=(()=>{class p extends((0,i.AF)(d.tA)){constructor(o,h,_,P,O,k,Y,W,F){super(),this.cdnService=o,this.settings=h,this.animBuilder=_,this.overlay=P,this.viewContainerRef=O,this.elementRef=k,this.cssLength=Y,this.overlayService=W,this.router=F,this.trigger="click",this.user={},this.bannerColor=d.Il.Types.white,this.hover=!1,this.closeWhenOutsideViewportObserver=new IntersectionObserver(K=>{K.forEach(Q=>{!Q.isIntersecting&&this.elementRef&&this.close()})}),this.setupBannerColorListeners=!1,this.getClassYearString=l.R}get overlayRoot(){return this.overlayRef?.overlayElement?.querySelector(".overlayRoot")}get avatar(){return this.overlayRef?.overlayElement?.querySelector("img.profile-overlay.avatar")}ngOnInit(){"click"===this.trigger&&this.overlayService.onClick$.pipe((0,a.R)(this.onDestroy$)).subscribe(o=>{!this.container||this.overlayRoot?.contains(o.target)||(this.container.nativeElement.contains(o.target)?this.toggle():this.close())})}ngAfterViewChecked(){this.trySetupBannerColorListeners()}onProfileClick(){this.router.navigateByUrl(`/members/${this.user.username}`)}ngOnDestroy(){this.currAnimPlayer&&this.currAnimPlayer.destroy(),this.overlayRef&&this.overlayRef.dispose(),this.closeWhenOutsideViewportObserver.disconnect()}trySetupBannerColorListeners(){if(this.setupBannerColorListeners)return;const o=this.avatar;if(o){o.setAttribute("crossOrigin","");const h=new r.Z;o.addEventListener("load",()=>{const[_,P,O]=h.getColor(o);this.bannerColor=new d.Il(_,P,O)}),this.setupBannerColorListeners=!0}}getBannerContainerStyle(){return{...this.bannerColor&&{"background-color":this.bannerColor.hexString()}}}getOpenAnimation(){return[(0,t.oB)({transform:"translateY(-5%)",opacity:0}),(0,t.jt)("200ms ease-out",(0,t.oB)({transform:"translateY(0)",opacity:1}))]}getCloseAnimation(){return[(0,t.oB)({transform:"translateY(0)",opacity:1}),(0,t.jt)("100ms ease-out",(0,t.oB)({transform:"translateY(2.5%)",opacity:0}))]}toggle(){this.overlayRef?this.close():this.open()}open(){this.overlayRef||!this.overlayTemplate||!this.container||(this.overlayRef=this.overlay.create({scrollStrategy:this.overlay.scrollStrategies.reposition(),positionStrategy:this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions(c(0,this.cssLength.convertToNumber("1em","px")))}),this.overlayRef.attach(new s.UE(this.overlayTemplate,this.viewContainerRef)),this.currAnimPlayer&&this.currAnimPlayer.destroy(),this.currAnimPlayer=this.animBuilder.build(this.getOpenAnimation()).create(this.overlayRoot),this.currAnimPlayer.onDone(()=>this.currAnimPlayer=void 0),this.currAnimPlayer.play(),this.closeWhenOutsideViewportObserver.observe(this.container.nativeElement))}close(){!this.overlayRef||!this.container||(this.closeWhenOutsideViewportObserver.unobserve(this.container.nativeElement),this.currAnimPlayer&&this.currAnimPlayer.destroy(),this.currAnimPlayer=this.animBuilder.build(this.getCloseAnimation()).create(this.overlayRoot),this.currAnimPlayer.onDone(()=>{this.currAnimPlayer=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0}),this.currAnimPlayer.play())}onMouseEnter(){this.hover=!0,"hover"===this.trigger&&this.open()}onMouseExit(){this.hover=!1,"hover"===this.trigger&&this.close()}onVisibilityChanged(o){console.log(o),!o&&this.elementRef&&this.close()}}return p.\u0275fac=function(o){return new(o||p)(e.Y36(g.U),e.Y36(f.g),e.Y36(t._j),e.Y36(u.aV),e.Y36(e.s_b),e.Y36(e.SBq),e.Y36(y.I),e.Y36(b.F),e.Y36(E.F0))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-profile-overlay"]],viewQuery:function(o,h){if(1&o&&(e.Gf(R,5,e.Rgc),e.Gf(I,5)),2&o){let _;e.iGM(_=e.CRH())&&(h.overlayTemplate=_.first),e.iGM(_=e.CRH())&&(h.container=_.first)}},inputs:{trigger:"trigger",user:"user"},features:[e.qOj],ngContentSelectors:L,decls:5,vars:0,consts:[["overlayTemplate",""],[3,"mouseenter","mouseleave"],["container",""],[1,"background-color-card","overlayRoot",2,"position","relative","width","20em","box-shadow","0 0 2em #00000080","border-radius","0.5em","padding","0.5em","margin","1em"],[2,"width","100%","height","9.375em","border-radius","0.25em","overflow","hidden","position","relative",3,"ngStyle"],["style","\n        object-fit: cover;\n        width: 100%;\n        height: 100%;\n      ",3,"src",4,"ngIf"],[2,"--size","6em","--offset","calc(var(--size) / 2)","--offset-left-over","calc(var(--size) - var(--offset))","position","relative","height","var(--offset-left-over)","margin-bottom","1em"],[1,"outline-color-card","background-color-card",2,"left","2em","top","calc(-1 * var(--offset))","position","absolute","height","var(--size)","width","var(--size)","border-radius","50%","overflow","hidden","outline-style","solid","outline-width","0.25em"],[1,"profile-overlay","avatar",2,"object-fit","cover","width","100%","height","100%",3,"src"],["mat-stroked-button","","pill","",2,"position","absolute","top","1em","right","1em",3,"click"],[2,"padding","0 1em 1em 1.5em","display","flex","flex-direction","column","gap","0.75em"],[2,"margin-bottom","0"],[1,"text-faded"],["class","text-disabled",4,"ngIf"],[2,"width","100%","display","flex","flex-direction","row","gap","0.25em 1.25em","align-items","center","flex-wrap","wrap"],["style","\n          display: flex; \n          flex-direction: row;\n          align-items: center;\n          gap: 0.5em;\n          flex-wrap: wrap;\n        ",4,"ngIf"],[2,"object-fit","cover","width","100%","height","100%",3,"src"],[1,"text-disabled"],[2,"display","flex","flex-direction","row","align-items","center","gap","0.5em","flex-wrap","wrap"],["color","blank"]],template:function(o,h){1&o&&(e.F$t(),e.YNc(0,S,21,9,"ng-template",null,0,e.W1O),e.TgZ(2,"div",1,2),e.NdJ("mouseenter",function(){return h.onMouseEnter()})("mouseleave",function(){return h.onMouseExit()}),e.Hsn(4),e.qZA())},dependencies:[M.O5,M.PC,A.lW,x.Z,T.v]}),p})()}}]);