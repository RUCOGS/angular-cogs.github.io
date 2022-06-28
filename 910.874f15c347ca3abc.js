"use strict";(self.webpackChunkrucogs_website=self.webpackChunkrucogs_website||[]).push([[910],{8009:(P,f,e)=>{e.d(f,{Y:()=>g});var n=e(4537),t=e(3512);const h=["*"];let g=(()=>{class r{constructor(i,a){this.elementRef=i,this.cssLength=a,this.columnWidth="20em",this.columns="auto-fit",this.autofitColumns=!0,this.gridTemplateColumns="",this.observer=new MutationObserver(l=>{this.updateGridTemplateColumns()})}ngOnInit(){this.updateGridTemplateColumns(!0)}ngAfterViewInit(){this.observer.observe(this.elementRef.nativeElement,{childList:!0})}ngOnDestroy(){this.observer.disconnect()}updateGridTemplateColumns(i=!1){let a=this.autofitColumns,l=!1;if(!i){const d=this.elementRef.nativeElement,_=this.cssLength.convertToNumber(this.columnWidth,"px"),u=Math.floor(d.offsetWidth/_);a=!(d.children.length<u)&&this.autofitColumns,l=d.offsetWidth<=_}this.gridTemplateColumns=l?`repeat( ${this.columns} )`:`repeat( ${this.columns}, `+(a?`minmax(${this.columnWidth}, 1fr)`:this.columnWidth)+" )"}}return r.\u0275fac=function(i){return new(i||r)(n.Y36(n.SBq),n.Y36(t.I))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-card-grid"]],hostVars:2,hostBindings:function(i,a){2&i&&n.Udp("grid-template-columns",a.gridTemplateColumns)},inputs:{columnWidth:["column-width","columnWidth"],columns:"columns",autofitColumns:["auto-fit-columns","autofitColumns"]},ngContentSelectors:h,decls:1,vars:0,template:function(i,a){1&i&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]{box-sizing:border-box;display:grid;align-items:stretch;margin-left:auto;margin-right:auto;gap:.75em}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]}),r})()},6174:(P,f,e)=>{e.d(f,{t:()=>t});var n=e(3556);const t={[n.Nv.Open]:{name:"Open",matIcon:"lock_open"},[n.Nv.Invite]:{name:"Invite",matIcon:"mail"},[n.Nv.Closed]:{name:"Closed",matIcon:"close"}}},9740:(P,f,e)=>{e.d(f,{b:()=>g});var n=e(4537),t=e(6440),h=e(3223);let g=(()=>{class r{constructor(i){this.cdn=i,this.project={}}ngOnInit(){}}return r.\u0275fac=function(i){return new(i||r)(n.Y36(t.U))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-inline-project-item"]],inputs:{project:"project"},decls:4,vars:2,consts:[[2,"display","flex","align-items","center","gap","0.5em"],["size","input","square","",3,"avatarSrc"]],template:function(i,a){1&i&&(n.TgZ(0,"div",0),n._UZ(1,"app-avatar",1),n.TgZ(2,"div"),n._uU(3),n.qZA()()),2&i&&(n.xp6(1),n.Q6J("avatarSrc",a.cdn.getFileLink(a.project.cardImageLink)),n.xp6(2),n.Oqu(a.project.name))},dependencies:[h.A]}),r})()},4379:(P,f,e)=>{e.d(f,{b:()=>O});var n=e(6174),t=e(4537),h=e(6440),g=e(1656),r=e(8692),c=e(3223);function i(o,m){1&o&&t._UZ(0,"app-avatar",3),2&o&&t.Q6J("avatarSrc",m.$implicit)}function a(o,m){1&o&&(t.TgZ(0,"div",4),t._uU(1,"..."),t.qZA())}let l=(()=>{class o{constructor(){this.limit=-1,this.avatarSrcs=[]}get isLimiting(){return this.limit>-1&&this.avatarSrcs.length>this.limit}get limitedAvatarSrcs(){return this.limit>-1?this.avatarSrcs.slice(0,this.limit):this.avatarSrcs}ngOnInit(){}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-avatar-group"]],inputs:{limit:"limit",avatarSrcs:"avatarSrcs"},decls:3,vars:2,consts:[[2,"display","flex","flex-wrap","wrap","padding-left","1em"],["size","small","style","\n\t  margin-left: -1em;\n  ",3,"avatarSrc",4,"ngFor","ngForOf"],["style","margin: 0px;","class","app-avatar-group limit-ellipsis","style","\n    font-size: 42px;\n  ",4,"ngIf"],["size","small",2,"margin-left","-1em",3,"avatarSrc"],[1,"app-avatar-group","limit-ellipsis",2,"font-size","42px"]],template:function(s,p){1&s&&(t.TgZ(0,"div",0),t.YNc(1,i,1,1,"app-avatar",1),t.YNc(2,a,2,0,"div",2),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",p.limitedAvatarSrcs),t.xp6(1),t.Q6J("ngIf",p.isLimiting))},dependencies:[r.sg,r.O5,c.A]}),o})();var d=e(3324),_=e(6387),u=e(3178);function v(o,m){1&o&&(t.TgZ(0,"app-tag",10),t._uU(1,"Completed"),t.qZA())}function C(o,m){if(1&o&&(t.TgZ(0,"app-tag",10),t._uU(1),t.qZA()),2&o){const s=t.oxw();t.xp6(1),t.Oqu(s.accessOptions[s.project.access].name)}}let O=(()=>{class o{constructor(s,p){this.cdnService=s,this.settings=p,this.project={},this.accessOptions=n.t}ngOnInit(){}getCardImage(){return this.project.cardImageLink?this.cdnService.getFileLink(this.project.cardImageLink):this.settings.General.defaultCardImageSrc}getProjectYear(){return new Date(this.project.createdAt).getFullYear()}getProjectCompleted(){return null!=this.project.completedAt}getProjectLink(){return`/projects/${this.project.id}`}getAvatarLinks(){return this.project.members?this.project.members.map(s=>this.cdnService.getFileLink(s.user.avatarLink)):[]}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(h.U),t.Y36(g.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-project-item"]],inputs:{project:"project"},decls:15,vars:9,consts:[[1,"app-project-item","card",3,"routerLink"],[1,"app-project-item","image-wrapper"],[1,"app-project-item","image",3,"src"],[1,"app-project-item","card-content"],[1,"mb-24","app-project-item","description",2,"flex","1"],[2,"display","flex","flex-direction","row","flex-wrap","wrap","gap","8px","margin-top","auto"],[2,"flex","1"],["color","primary"],["color","accent",4,"ngIf"],[3,"avatarSrcs","limit"],["color","accent"]],template:function(s,p){if(1&s&&(t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p",4),t._uU(7),t.qZA(),t.TgZ(8,"div",5)(9,"app-tag-container",6)(10,"app-tag",7),t._uU(11),t.qZA(),t.YNc(12,v,2,0,"app-tag",8),t.YNc(13,C,2,1,"app-tag",8),t.qZA(),t._UZ(14,"app-avatar-group",9),t.qZA()()()),2&s){let j;t.Q6J("routerLink",p.getProjectLink()),t.xp6(2),t.Q6J("src",p.getCardImage(),t.LSH),t.xp6(3),t.Oqu(null!==(j=p.project.name)&&void 0!==j?j:""),t.xp6(2),t.Oqu(p.project.pitch),t.xp6(4),t.Oqu(p.getProjectYear()),t.xp6(1),t.Q6J("ngIf",p.getProjectCompleted()),t.xp6(1),t.Q6J("ngIf",p.project.access),t.xp6(1),t.Q6J("avatarSrcs",p.getAvatarLinks())("limit",8)}},dependencies:[r.O5,l,d.m,_.Z,u.yS],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;height:auto;border-style:solid;border-width:2px;border-radius:.5em;box-sizing:border-box;text-decoration:inherit;color:inherit}.card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;flex:1;width:100%;padding:1.25em 1.75em 1.75em}.image[_ngcontent-%COMP%]{width:100%;vertical-align:top;position:absolute;top:0;left:0;height:100%;object-fit:cover;border-top-left-radius:6px;border-top-right-radius:6px}.image-wrapper[_ngcontent-%COMP%]{height:0px;overflow:hidden;padding-top:100%;box-sizing:border-box;position:relative}.description[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;max-height:4.5em}"]}),o})()},9910:(P,f,e)=>{e.d(f,{Qd:()=>v,YA:()=>h.Y,tT:()=>u.t});var n=e(8692),h=(e(4379),e(5539)),g=e(4276),r=e(6004),c=e(5491),i=e(9518),a=e(3178),l=e(1769),_=(e(9740),e(4537)),u=e(6174);let v=(()=>{class C{}return C.\u0275fac=function(o){return new(o||C)},C.\u0275mod=_.oAB({type:C}),C.\u0275inj=_.cJS({imports:[n.ez,g.J,r.m,c.F,i.I,a.Bz,l.Mc]}),C})()},5539:(P,f,e)=>{e.d(f,{Y:()=>O});var n=e(8239),t=e(3037),h=e(274),g=e(7445),r=e(4537),c=e(8692),i=e(3535),a=e(8009),l=e(4379);function d(o,m){1&o&&r._UZ(0,"app-project-item",5),2&o&&r.Q6J("project",m.$implicit)}function _(o,m){1&o&&(r.TgZ(0,"div")(1,"h2",6),r._uU(2,"No results found..."),r.qZA()())}function u(o,m){1&o&&r._UZ(0,"div",9)}const v=function(){return[]};function C(o,m){1&o&&(r.TgZ(0,"app-card-grid",7),r.YNc(1,u,1,0,"div",8),r.qZA()),2&o&&(r.xp6(1),r.Q6J("ngForOf",r.DdM(1,v).constructor(6)))}let O=(()=>{class o extends t.N3{constructor(){var s;super(...arguments),s=this,this.valuesPerPage=6,this._filteredValuesQuery=function(){var p=(0,n.Z)(function*(j,E,I){const M=yield(0,g.z)(s.backend.withAuth().query({query:h.Ps`
          query DefaultProjectsDisplay(
            $filter: ProjectFilterInput
            $skip: Int
            $limit: Int
            $sorts: [ProjectSortInput!]
          ) {
            projects(filter: $filter, skip: $skip, limit: $limit, sorts: $sorts) {
              id
              access
              cardImageLink
              completedAt
              createdAt
              updatedAt
              name
              pitch
              downloadLinks
              members {
                user {
                  avatarLink
                }
              }
            }
          }
        `,variables:{skip:E,limit:I,filter:j,sorts:[{name:"asc"}]}}));return M.error?[]:M.data.projects});return function(j,E,I){return p.apply(this,arguments)}}()}get projects(){return this.values}set projects(s){this.values=s}get projectsQuery(){return this.filteredValuesQuery}set projectsQuery(s){this.filteredValuesQuery=s}getFilter(){return this.filterHeader?{...this.filterHeader.searchText&&{name:{startsWith:this.filterHeader.searchText,mode:"INSENSITIVE"}}}:{}}}return o.\u0275fac=function(){let m;return function(p){return(m||(m=r.n5z(o)))(p||o)}}(),o.\u0275cmp=r.Xpm({type:o,selectors:[["app-projects-display"]],hostAttrs:[1,"page"],inputs:{projects:"projects",projectsQuery:"projectsQuery"},features:[r.qOj],decls:5,vars:3,consts:[["searchBar",""],["column-width","20em",2,"width","100%"],[3,"project",4,"ngFor","ngForOf"],[4,"ngIf"],["column-width","20em","style","width: 100%; margin-top: 0.75em;",4,"ngIf"],[3,"project"],[1,"text-disabled"],["column-width","20em",2,"width","100%","margin-top","0.75em"],["style","\n    height: 30em;\n    width: 100%;\n    border-radius: 0.5em;\n  ","class","loading",4,"ngFor","ngForOf"],[1,"loading",2,"height","30em","width","100%","border-radius","0.5em"]],template:function(s,p){1&s&&(r._UZ(0,"app-filter-header",0),r.TgZ(1,"app-card-grid",1),r.YNc(2,d,1,1,"app-project-item",2),r.YNc(3,_,3,0,"div",3),r.qZA(),r.YNc(4,C,2,2,"app-card-grid",4)),2&s&&(r.xp6(2),r.Q6J("ngForOf",p.projects),r.xp6(1),r.Q6J("ngIf",p.loaded&&0===p.projects.length),r.xp6(1),r.Q6J("ngIf",!p.loaded))},dependencies:[c.sg,c.O5,i.B,a.Y,l.b],styles:[".project-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.625em}"]}),o})()},3512:(P,f,e)=>{e.d(f,{I:()=>r});var n=function(c){return parseFloat(c)},h=e(4537);const g=function t(c){return function(i,a,l,d){null==l&&(l=c),null==d&&(d=l);var _=String(i).match(/[\d.\-\+]*\s*(.*)/)[1]||"";if(_===a)return i;var u=n(i);if("px"!==_)if("em"===_)u=n(i)*n(l);else if("rem"===_)u=n(i)*n(c);else{if("ex"!==_)return i;u=n(i)*n(l)*2}var v=u;if("px"!==a)if("em"===a)v=u/n(d);else if("rem"===a)v=u/n(c);else{if("ex"!==a)return i;v=u/n(d)/2}return parseFloat(v.toFixed(5))+a}}("16px");let r=(()=>{class c{constructor(){}convert(a,l,d=""){return d?g(a,l,d):g(a,l)}toNumber(a){return parseInt(a.replace(/[^0-9.]/g,""))}convertToNumber(a,l,d=""){return this.toNumber(d?g(a,l,d):g(a,l))}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);