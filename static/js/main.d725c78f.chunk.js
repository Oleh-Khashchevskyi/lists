(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{14:function(e,t,n){e.exports={list:"Navigation_list__2mOfz",link:"Navigation_link__2S9dU",activeLink:"Navigation_activeLink__3f-dV","width-line":"Navigation_width-line__1HwYv"}},17:function(e,t,n){e.exports={loader:"List_loader__1_ECL",column1:"List_column1__hQDza",column3:"List_column3__32y07",column2:"List_column2__34P_e"}},26:function(e,t,n){e.exports={homeBg:"HomePage_homeBg__3pTT3",title:"HomePage_title__2Eb8r",text:"HomePage_text__1-frj"}},37:function(e,t,n){e.exports={logo:"Logo_logo__2QeJi"}},38:function(e,t,n){e.exports={footer:"Footer_footer__1TKYt"}},39:function(e,t,n){e.exports={header:"Header_header__1QZtF"}},4:function(e,t,n){e.exports={mobileNav:"MobileNavigation_mobileNav__9VTRw",line:"MobileNavigation_line__1mRqB",activeLine:"MobileNavigation_activeLine__BVCfN",menuBtn:"MobileNavigation_menuBtn__1XKRV",active:"MobileNavigation_active__1ZUhf",menu:"MobileNavigation_menu__28ZH-",activeMenu:"MobileNavigation_activeMenu__2ZHyc",link:"MobileNavigation_link__2Ka_m"}},40:function(e,t,n){e.exports={button:"SortButton_button__1MNTk"}},51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(22),i=n.n(r),s=n(12),o=n(5),l=n(23),j=n(36),u=n(10),b=n(2);!function(e){e.FETCH_NEWS="FETCH_NEWS",e.FETCH_NEWS_ERROR="FETCH_NEWS_ERROR",e.CHANGE_PAGE_NEWS="CHANGE_PAGE_NEWS",e.SET_LIMIT_NEWS="SET_LIMIT_NEWS"}(c||(c={}));var O,_={news:[],page:1,error:null,limit:!1};!function(e){e.FETCH_NEWEST="FETCH_NEWEST",e.FETCH_NEWEST_ERROR="FETCH_NEWEST_ERROR",e.CHANGE_PAGE_NEWEST="CHANGE_PAGE_NEWEST",e.SET_LIMIT_NEWEST="SET_LIMIT_NEWEST"}(O||(O={}));var d,E={newest:[],page:1,error:null,limit:!1};!function(e){e.FETCH_ASK="FETCH_ASK",e.FETCH_ASK_ERROR="FETCH_ASK_ERROR",e.CHANGE_PAGE_ASK="CHANGE_PAGE_ASK",e.SET_LIMIT_ASK="SET_LIMIT_ASK"}(d||(d={}));var h,m={ask:[],page:1,error:null,limit:!1};!function(e){e.FETCH_SHOW="FETCH_SHOW",e.FETCH_SHOW_ERROR="FETCH_SHOW_ERROR",e.CHANGE_PAGE_SHOW="CHANGE_PAGE_SHOW",e.SET_LIMIT_SHOW="SET_LIMIT_SHOW"}(h||(h={}));var f,v={show:[],page:1,error:null,limit:!1};!function(e){e.FETCH_JOBS="FETCH_JOBS",e.FETCH_JOBS_ERROR="FETCH_JOBS_ERROR",e.CHANGE_PAGE_JOBS="CHANGE_PAGE_JOBS",e.SET_LIMIT_JOBS="SET_LIMIT_JOBS"}(f||(f={}));var x={jobs:[],page:1,error:null,limit:!1},p=Object(l.b)({newsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.FETCH_NEWS:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,news:[].concat(Object(u.a)(e.news),Object(u.a)(t.payload))});case c.FETCH_NEWS_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"});case c.CHANGE_PAGE_NEWS:return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1});case c.SET_LIMIT_NEWS:return Object(b.a)(Object(b.a)({},e),{},{limit:!0});default:return e}},newestReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.FETCH_NEWEST:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,newest:[].concat(Object(u.a)(e.newest),Object(u.a)(t.payload))});case O.FETCH_NEWEST_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"});case O.CHANGE_PAGE_NEWEST:return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1});case O.SET_LIMIT_NEWEST:return Object(b.a)(Object(b.a)({},e),{},{limit:!0});default:return e}},askReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.FETCH_ASK:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,ask:[].concat(Object(u.a)(e.ask),Object(u.a)(t.payload))});case d.FETCH_ASK_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"});case d.CHANGE_PAGE_ASK:return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1});case d.SET_LIMIT_ASK:return Object(b.a)(Object(b.a)({},e),{},{limit:!0});default:return e}},showReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.FETCH_SHOW:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,show:[].concat(Object(u.a)(e.show),Object(u.a)(t.payload))});case h.FETCH_SHOW_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"});case h.CHANGE_PAGE_SHOW:return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1});case h.SET_LIMIT_SHOW:return Object(b.a)(Object(b.a)({},e),{},{limit:!0});default:return e}},jobsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.FETCH_JOBS:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,jobs:[].concat(Object(u.a)(e.jobs),Object(u.a)(t.payload))});case f.FETCH_JOBS_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"});case f.CHANGE_PAGE_JOBS:return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1});case f.SET_LIMIT_JOBS:return Object(b.a)(Object(b.a)({},e),{},{limit:!0});default:return e}}}),S=Object(l.c)(p,Object(l.a)(j.a)),N=(n(51),n(3)),T=(n(52),n(53),n(37)),g=n.n(T),H=n(0),C=function(){return Object(H.jsx)(o.b,{to:"/",children:Object(H.jsx)("img",{src:"https://cdn-images-1.medium.com/max/1200/1*ydv-0BSy6iez0XYJqGYCAA.png",alt:"logo",className:g.a.logo})})},w=n(38),R=n.n(w),k=function(){return Object(H.jsx)("footer",{className:R.a.footer,children:Object(H.jsx)(C,{})})},A=n(6),y=n(7),L=n(8),F=n.n(L),W=function(){window.scrollTo({top:0,behavior:"smooth"})},G=n(4),I=n.n(G),M=function(){var e=Object(a.useState)(!1),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(H.jsxs)("div",{className:I.a.mobileNav,children:[Object(H.jsxs)("button",{type:"button",className:F()(I.a.menuBtn,Object(A.a)({},I.a.active,n)),onClick:function(){return c(!n)},children:[Object(H.jsx)("span",{className:F()(I.a.line,Object(A.a)({},I.a.activeLine,n))}),Object(H.jsx)("span",{className:F()(I.a.line,Object(A.a)({},I.a.activeLine,n))}),Object(H.jsx)("span",{className:F()(I.a.line,Object(A.a)({},I.a.activeLine,n))})]}),Object(H.jsx)("nav",{children:Object(H.jsxs)("ul",{className:F()(I.a.menu,Object(A.a)({},I.a.activeMenu,n)),children:[Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/",onClick:function(){W(),c(!1)},className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"Home"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/news",onClick:function(){W(),c(!1)},className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"News"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/newest",onClick:function(){W(),c(!1)},className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"Newest"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/ask",onClick:W,className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"Ask"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/show",onClick:W,className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"Show"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/jobs",onClick:W,className:function(e){var t=e.isActive;return F()(I.a.link,Object(A.a)({},I.a.activeLink,t))},children:"Jobs"})})]})})]})},B=n(14),P=n.n(B),J=function(){return Object(H.jsx)("nav",{children:Object(H.jsxs)("ul",{className:P.a.list,children:[Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"Home"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/news",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"News"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/newest",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"Newest"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/ask",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"Ask"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/show",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"Show"})}),Object(H.jsx)("li",{children:Object(H.jsx)(o.b,{to:"/jobs",onClick:W,className:function(e){var t=e.isActive;return F()(P.a.link,Object(A.a)({},P.a.activeLink,t))},children:"Jobs"})})]})})},K=n(39),U=n.n(K),V=function(){return Object(H.jsxs)("header",{className:U.a.header,children:[Object(H.jsx)(C,{}),Object(H.jsx)(J,{}),Object(H.jsx)(M,{})]})},Y=n(26),Z=n.n(Y),z=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[Object(H.jsx)("div",{className:Z.a.homeBg}),Object(H.jsx)("h1",{className:Z.a.title,children:"Welcome To Home Page :)"})]}),Object(H.jsx)(k,{})]})},D=n(9),Q=n.n(D),q=n(15),X=n(16),$=n.n(X),ee="https://api.hnpwa.com/v0",te=n(76),ne=n(17),ce=n.n(ne),ae=function(e){var t=e.list,n=Object(N.f)(),c=new URLSearchParams(Object(N.e)().search);return Object(H.jsxs)("table",{className:"table",children:[Object(H.jsx)("thead",{children:Object(H.jsxs)("tr",{className:ce.a.loader,onClick:function(e){c.set("sortBy",e.target.textContent.toLowerCase()),n({search:c.toString()})},children:[Object(H.jsx)("th",{className:ce.a.column1,children:"Time"}),Object(H.jsx)("th",{className:ce.a.column2,children:"Title"}),Object(H.jsx)("th",{className:ce.a.column3,children:"Domain"})]})}),Object(H.jsx)("tbody",{children:t.sort((function(e,t){switch(c.get("sortBy")){case"domain":return e.domain&&t.domain?e.domain.localeCompare(t.domain):e.domain?-1:1;case"title":return e.title.localeCompare(t.title);case"time":return e.time-t.time;default:return 0}})).map((function(e){return Object(H.jsxs)("tr",{children:[Object(H.jsx)("th",{className:ce.a.column1,children:(t=e.time,new Date(t).toString().split(" ").splice(4,1).join(" "))}),Object(H.jsx)("td",{className:ce.a.column2,children:Object(H.jsx)("a",{href:"https://news.ycombinator.com/item?id=".concat(e.id),target:"_blank",rel:"noreferrer",children:e.title})}),Object(H.jsx)("td",{className:ce.a.column3,children:e.domain||"-"})]},Object(te.a)());var t}))})]})},re=n(40),ie=n.n(re),se=function(){var e=new URLSearchParams(Object(N.e)().search),t=Object(N.f)();return Object(H.jsx)("button",{type:"button",className:ie.a.button,onClick:function(){e.set("sortBy","time"),t({search:e.toString()})},children:"Sort"})},oe=s.c,le=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(y.a)(t,2),r=n[0],i=n[1],o=oe((function(e){return e.newsReducer})),l=o.news,j=o.page,u=o.error,b=o.limit,O=function(e){var t=e.target.documentElement;t.scrollHeight-(t.scrollTop+window.innerHeight)<100&&i(!0)};return Object(a.useEffect)((function(){return document.addEventListener("scroll",O),function(){document.removeEventListener("scroll",O)}}),[]),Object(a.useEffect)((function(){b||(r&&(e(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(ee,"/news/").concat(e,".json"));case 3:a=t.sent,n({type:c.FETCH_NEWS,payload:a.data}),a.data.length||n({type:c.SET_LIMIT_NEWS}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:c.FETCH_NEWS_ERROR});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(j)),e({type:c.CHANGE_PAGE_NEWS,payload:j+1})),i(!1))}),[r]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[u?Object(H.jsx)("h2",{className:"title",children:u}):Object(H.jsx)(ae,{list:l}),Object(H.jsx)(se,{})]}),Object(H.jsx)(k,{})]})},je=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(y.a)(t,2),c=n[0],r=n[1],i=oe((function(e){return e.newestReducer})),o=i.newest,l=i.page,j=i.error,u=i.limit,b=function(e){var t=e.target.documentElement;t.scrollHeight-(t.scrollTop+window.innerHeight)<100&&r(!0)};return Object(a.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[]),Object(a.useEffect)((function(){u||(c&&(e(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(n){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(ee,"/newest/").concat(e,".json"));case 3:c=t.sent,n({type:O.FETCH_NEWEST,payload:c.data}),c.data.length||n({type:O.SET_LIMIT_NEWEST}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:O.FETCH_NEWEST_ERROR});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),e({type:O.CHANGE_PAGE_NEWEST,payload:l+1})),r(!1))}),[c]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[j?Object(H.jsx)("h2",{className:"title",children:j}):Object(H.jsx)(ae,{list:o}),Object(H.jsx)(se,{})]}),Object(H.jsx)(k,{})]})},ue=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(y.a)(t,2),c=n[0],r=n[1],i=oe((function(e){return e.askReducer})),o=i.ask,l=i.page,j=i.error,u=i.limit,b=function(e){var t=e.target.documentElement;t.scrollHeight-(t.scrollTop+window.innerHeight)<100&&r(!0)};return Object(a.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[]),Object(a.useEffect)((function(){u||(c&&(e(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(n){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(ee,"/ask/").concat(e,".json"));case 3:c=t.sent,n({type:d.FETCH_ASK,payload:c.data}),c.data.length||n({type:d.SET_LIMIT_ASK}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:d.FETCH_ASK_ERROR});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),e({type:d.CHANGE_PAGE_ASK,payload:l+1})),r(!1))}),[c]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[j?Object(H.jsx)("h2",{className:"title",children:j}):Object(H.jsx)(ae,{list:o}),Object(H.jsx)(se,{})]}),Object(H.jsx)(k,{})]})},be=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(y.a)(t,2),c=n[0],r=n[1],i=oe((function(e){return e.showReducer})),o=i.show,l=i.page,j=i.error,u=i.limit,b=function(e){var t=e.target.documentElement;t.scrollHeight-(t.scrollTop+window.innerHeight)<100&&r(!0)};return Object(a.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[]),Object(a.useEffect)((function(){u||(c&&(e(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(n){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(ee,"/show/").concat(e,".json"));case 3:c=t.sent,n({type:h.FETCH_SHOW,payload:c.data}),c.data.length||n({type:h.SET_LIMIT_SHOW}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:h.FETCH_SHOW_ERROR});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),e({type:h.CHANGE_PAGE_SHOW,payload:l+1})),r(!1))}),[c]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[j?Object(H.jsx)("h2",{className:"title",children:j}):Object(H.jsx)(ae,{list:o}),Object(H.jsx)(se,{})]}),Object(H.jsx)(k,{})]})},Oe=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(y.a)(t,2),c=n[0],r=n[1],i=oe((function(e){return e.jobsReducer})),o=i.jobs,l=i.page,j=i.error,u=i.limit,b=function(e){var t=e.target.documentElement;t.scrollHeight-(t.scrollTop+window.innerHeight)<100&&r(!0)};return Object(a.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[]),Object(a.useEffect)((function(){u||(c&&(e(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(n){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("".concat(ee,"/jobs/").concat(e,".json"));case 3:c=t.sent,n({type:f.FETCH_JOBS,payload:c.data}),c.data.length||n({type:f.SET_LIMIT_JOBS}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:f.FETCH_JOBS_ERROR});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),e({type:f.CHANGE_PAGE_JOBS,payload:l+1})),r(!1))}),[c]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsxs)("main",{children:[j?Object(H.jsx)("h2",{className:"title",children:j}):Object(H.jsx)(ae,{list:o}),Object(H.jsx)(se,{})]}),Object(H.jsx)(k,{})]})},_e=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{}),Object(H.jsx)("main",{children:Object(H.jsx)("h2",{className:"title",children:"PageNotFound"})}),Object(H.jsx)(k,{})]})},de=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(N.c,{children:[Object(H.jsx)(N.a,{path:"/",element:Object(H.jsx)(z,{})}),Object(H.jsx)(N.a,{path:"/news",element:Object(H.jsx)(le,{})}),Object(H.jsx)(N.a,{path:"/newest",element:Object(H.jsx)(je,{})}),Object(H.jsx)(N.a,{path:"/ask",element:Object(H.jsx)(ue,{})}),Object(H.jsx)(N.a,{path:"/show",element:Object(H.jsx)(be,{})}),Object(H.jsx)(N.a,{path:"/jobs",element:Object(H.jsx)(Oe,{})}),Object(H.jsx)(N.a,{path:"/*",element:Object(H.jsx)(_e,{})})]})})};i.a.render(Object(H.jsx)(s.a,{store:S,children:Object(H.jsx)(o.a,{children:Object(H.jsx)(de,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d725c78f.chunk.js.map