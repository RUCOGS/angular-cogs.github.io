"use strict";(self.webpackChunkrucogs_website=self.webpackChunkrucogs_website||[]).push([[515],{3324:(u,r,t)=>{t.d(r,{m:()=>g});var n=t(4537);const d=["*"];let g=(()=>{class o{constructor(){this.center=!1}ngOnInit(){this.center&&(this.justifyContent="center")}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-tag-container"]],hostVars:2,hostBindings:function(i,p){2&i&&n.Udp("justify-content",p.justifyContent)},inputs:{center:"center"},ngContentSelectors:d,decls:1,vars:0,template:function(i,p){1&i&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;width:100%;height:-moz-fit-content;height:fit-content;gap:.5em}"]}),o})()},6387:(u,r,t)=>{t.d(r,{Z:()=>g});var n=t(4537);const d=["*"];let g=(()=>{class o{constructor(){this.color="primary"}ngOnInit(){}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-tag"]],inputs:{color:"color"},ngContentSelectors:d,decls:2,vars:3,template:function(i,p){1&i&&(n.F$t(),n.TgZ(0,"div"),n.Hsn(1),n.qZA()),2&i&&n.Gre("app-tag bg ",p.color,"")},styles:["[_nghost-%COMP%]{width:-moz-fit-content;width:fit-content}.bg[_ngcontent-%COMP%]{display:inline-flex;align-items:center;height:100%;width:-moz-fit-content;width:fit-content;border-radius:5em;padding-left:.75em;padding-right:.75em;padding-top:auto}"]}),o})()},8277:(u,r,t)=>{t.r(r),t.d(r,{GlobalGameJamPageComponent:()=>h,GlobalGameJamPageModule:()=>x});var n=t(8692),d=t(9638),g=t(7914),o=t(3178),m=t(6004),i=t(7763),p=t(8399),f=t(4356),e=t(4537),v=t(6527),b=t(1656),y=t(6925),C=t(4554),w=t(2426),G=t(7732),T=t(8340),Z=t(8009);function A(a,c){if(1&a&&(e.TgZ(0,"div",21),e._UZ(1,"img",22),e.qZA()),2&a){const s=e.oxw();e.xp6(1),e.Q6J("ngClass",s.breakpointManager.currentBreakpoint)}}const P=function(a){return{display:a}};let h=(()=>{class a{constructor(s,l){this.breakpointManager=s,this.settings=l,this.startDate="Feb 3 5:00 pm",this.eventActive=!1,this.signupLink="https://docs.google.com/forms/d/e/1FAIpQLSdKO4CJxCXNtefgiYBx07Fq03feDFc897z6lLGrEi7wttPRLA/viewform",this.siteLink="https://globalgamejam.org/2023/jam-sites/rutgers-new-brunswick-creation-games-society",this.getSemesterString=f.H}ngAfterViewInit(){if(!this.eventActive){var s=new Date(this.startDate+", "+(new Date).getFullYear()+" EST").getTime()/1e3;new FlipDown(s,"sgj-countdown",{theme:"dark"}).start()}}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(v.I),e.Y36(b.g))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-global-game-jam-page"]],hostAttrs:[1,"page"],decls:45,vars:10,consts:[["color","primary","bgImage","assets/images/ggj-bg.png"],[1,"app-global-game-jam","split-section"],[2,"display","flex","flex-direction","column"],[1,"mat-display-4","app-global-game-jam","text","mb-4"],[1,"mat-display-1","app-scarlet-game-jam","text","mb-16"],["id","sgj-countdown",1,"app-global-game-jam","flipdown",3,"ngStyle"],[2,"display","flex","flex-direction","column","max-width","20em","gap","1em"],["iconifyIcon","form","target","_blank","color","form",3,"link","hidden"],["iconifyIcon","link","target","_blank","color","form",3,"link","hidden"],["iconifyIcon","discord","target","_blank","color","discord",3,"link"],["class","app-global-game-jam logo-container",4,"ngIf"],["title","Itinerary","color","foreground-accent-200"],[1,"mb-0"],["columns","1"],["title","Kickoff","date","Feb 3","time","4pm - 9pm","type","In-Person"],["rightHalf","","src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.0530544102578!2d-74.46169130615586!3d40.521297295845464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c70db2512af7%3A0x3a71c74271d1d2c6!2sRutgers%20CoRE%20Building!5e0!3m2!1sen!2sus!4v1694054231077!5m2!1sen!2sus","allowfullscreen","","loading","lazy",2,"border","0","width","100%","height","100%","min-height","300px"],["title","Work Time","date","Feb 4","time","12pm - 5pm","type","In-Person"],["title","Game Showcase & Final Remarks","date","Feb 5","time","12pm - 6pm","type","In-Person"],["title","FAQ","color","primary","dog-ear","","last",""],["title","What is Global Game Jam?"],["title","What can we do with our games?"],[1,"app-global-game-jam","logo-container"],["src","assets/images/ggj-logo.png",1,"app-global-game-jam","logo-painted",3,"ngClass"]],template:function(s,l){1&s&&(e.TgZ(0,"app-full-page-header",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Global Game Jam"),e.qZA(),e.TgZ(5,"h1",4),e._uU(6),e.qZA(),e._UZ(7,"div",5),e.TgZ(8,"div",6)(9,"app-button",7),e._uU(10," Sign Up "),e.qZA(),e.TgZ(11,"app-button",8),e._uU(12," Site "),e.qZA(),e.TgZ(13,"app-button",9),e._uU(14,"Discord"),e.qZA()()(),e.YNc(15,A,2,1,"div",10),e.qZA()(),e.TgZ(16,"app-section",11),e._UZ(17,"p",12),e.TgZ(18,"app-card-grid",13)(19,"app-event-card",14)(20,"div"),e._uU(21," First in-person meetup of our Global Game Jam site. This is the time to meet other people participating in the jam and form groups to make a game together. The theme that all games must adhere to will be revealed at this event. "),e._UZ(22,"br")(23,"br"),e._uU(24," Food will be served. "),e.qZA(),e._UZ(25,"iframe",15),e.qZA(),e.TgZ(26,"app-event-card",16)(27,"div"),e._uU(28," This is time for you to work on your game. COGS e-board members will be available to help with any game development problems or questions you may have. "),e.qZA(),e._UZ(29,"iframe",15),e.qZA(),e.TgZ(30,"app-event-card",17)(31,"div"),e._uU(32," This is the final day to work on your game and polish it up for submission. At the end, you'll present your games infront of everyone. "),e._UZ(33,"br")(34,"br"),e._uU(35," Food will be served. "),e.qZA(),e._UZ(36,"iframe",15),e.qZA()()(),e.TgZ(37,"app-section",18)(38,"mat-accordion")(39,"app-question-panel",19)(40,"p"),e._uU(41,"Global Game Jam is an annual game jam that happens across the world. Particpants are given 48 hours to develop a video game based around a theme that is unveiled at the beginning of the event. COGS hosts a site for Global Game Jam which lets Rutgers students attend."),e.qZA()(),e.TgZ(42,"app-question-panel",20)(43,"p",12),e._uU(44,"Your team owns 100% of the game you make during jam. Feel free to turn your game jam games into a full release if you think the game has potential. "),e.qZA()()()()),2&s&&(e.xp6(6),e.Oqu(l.getSemesterString()),e.xp6(1),e.Q6J("ngStyle",e.VKq(8,P,l.eventActive?"none":"")),e.xp6(2),e.s9C("link",l.signupLink),e.Q6J("hidden",""==l.signupLink),e.xp6(2),e.s9C("link",l.siteLink),e.Q6J("hidden",""==l.siteLink),e.xp6(2),e.Q6J("link",l.settings.General.discordLink),e.xp6(2),e.Q6J("ngIf",l.breakpointManager.matchedBreakpointOrAbove("SMALL_DESKTOP")))},dependencies:[n.mk,n.O5,n.PC,y.r,C.j,w.X,G.I,T.e,g.pp,Z.Y],styles:[".flipdown[_ngcontent-%COMP%]{display:block;padding-bottom:3em;width:100%;height:auto}.logo-container[_ngcontent-%COMP%]{max-width:40%;margin-left:5em;flex-grow:1}.logo-container.mobile[_ngcontent-%COMP%]{margin-left:0}.split-section[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}.logo-painted[_ngcontent-%COMP%]{max-width:100%;filter:drop-shadow(0 0 1rem black)}.logo-painted.desktop[_ngcontent-%COMP%]{float:right}"]}),a})();const k=[{path:"",component:h,data:{titleAll:"Global Game Jam",description:"Come make a game with friends in a week. Programmers, artists, and musicians are welcomed, and no experience is required! Global Game Jam is hosted by the Creation of Games Society at Rutgers, and is a week long event.",twitterCard:"summary_large_image",ogImage:"assets/images/sgj-summary-banner-f2022.png"}}];let x=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[o.Bz.forChild(k),n.ez,i.I,g.To,m.m,d.ot,p.QX]}),a})()}}]);