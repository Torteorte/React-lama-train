(this.webpackJsonplama=this.webpackJsonplama||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(81),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bf2baecf-01ae-42d3-8028-d5109ba659aa"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?count=".concat(e,"&page=").concat(t))},followUser:function(e){return a.post("follow/".concat(e),{})},unFollowUser:function(e){return a.delete("follow/".concat(e))}},s={authUser:function(){return a.get("auth/me")},loginUser:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logoutUser:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}}},221:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,313)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(0),c=n.n(a),s=n(43),i=n.n(s),u=n(30),o=n(63),l={friendsData:[{id:1,name:"Alex",src:"https://image.flaticon.com/icons/png/512/213/213315.png"},{id:2,name:"Vadim",src:"https://image.flaticon.com/icons/png/512/213/213292.png"},{id:3,name:"Sasha",src:"https://image.flaticon.com/icons/png/512/213/213280.png"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return e},f=n(57),p=n(73),j=n(25),b=n(82),h=n(80),O=n(3),g="INITIALIZED_SUCCSES",m={initialized:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},x=Object(u.c)({dialogsPage:o.a,profilePage:f.b,sideBarPage:d,usersPage:p.a,auth:j.a,form:h.a,app:v}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,_=Object(u.e)(x,w(Object(u.a)(b.a)));window.__store__=_;var y=_,S=n(18),P=n(33),N=n(34),C=n(36),E=n(35),D=(n(221),n(44)),k=n.n(D),I=n(13),T=n(2),U=function(e){return Object(T.jsxs)("header",{className:k.a.header,children:[Object(T.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/ru/c/cb/Raspberry_Pi_Logo.svg",alt:"main logo"}),Object(T.jsx)("div",{className:k.a.loginLink,children:e.isAuth?Object(T.jsxs)("div",{className:k.a.logOut,children:[" ",e.login," ",Object(T.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(T.jsx)(I.b,{to:"/login",children:"Login"})})]})},A=function(e){Object(C.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(T.jsx)(U,Object(O.a)({},this.props))}}]),n}(c.a.Component),F=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:j.d})(A),L=n(8),z=n.n(L),R=n(54),G=n.n(R),M=function(e){return Object(T.jsx)(I.b,{to:"#",className:G.a.friendItem,children:Object(T.jsxs)("li",{className:G.a.friend,children:[Object(T.jsx)("img",{src:e.src,alt:"avatar"}),e.name]})})},B=function(e){var t=e.friendsData.map((function(e){return Object(T.jsx)(M,{name:e.name,src:e.src,id:e.id},e.id)}));return Object(T.jsxs)("nav",{className:z.a.nav,children:[Object(T.jsx)("div",{className:"".concat(z.a.item," ").concat(z.a.active),children:Object(T.jsx)(I.b,{to:"/profile",activeClassName:z.a.active,children:"Profile"})}),Object(T.jsx)("div",{className:z.a.item,children:Object(T.jsx)(I.b,{to:"/dialogs",activeClassName:z.a.active,children:"Messages"})}),Object(T.jsx)("div",{className:z.a.item,children:Object(T.jsx)(I.b,{to:"/users",activeClassName:z.a.active,children:"Users"})}),Object(T.jsx)("div",{className:z.a.item,children:Object(T.jsx)(I.b,{to:"/news",activeClassName:z.a.active,children:"News"})}),Object(T.jsx)("div",{className:z.a.item,children:Object(T.jsx)(I.b,{to:"/music",activeClassName:z.a.active,children:"Music"})}),Object(T.jsx)("div",{className:"".concat(z.a.item," ").concat(z.a.settings),children:Object(T.jsx)(I.b,{to:"/settings",activeClassName:z.a.active,children:"Settings"})}),Object(T.jsxs)("div",{className:"".concat(z.a.friends),children:[Object(T.jsx)("h2",{children:"Friends"}),Object(T.jsx)("ul",{children:t})]})]})},H=Object(S.b)((function(e){return{friendsData:e.sideBarPage.friendsData}}))(B),V=n(62),W=n(5),J=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,318))})),X=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,319))})),q=c.a.lazy((function(){return Promise.all([n.e(7),n.e(8)]).then(n.bind(null,320))})),K=c.a.lazy((function(){return n.e(10).then(n.bind(null,314))})),Y=c.a.lazy((function(){return n.e(9).then(n.bind(null,315))})),Z=c.a.lazy((function(){return n.e(11).then(n.bind(null,316))})),Q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,317))})),$=function(e){Object(C.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(T.jsx)(I.a,{children:Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(F,{}),Object(T.jsx)(H,{}),Object(T.jsx)("div",{className:"app-wrapper-content",children:Object(T.jsx)(a.Suspense,{fallback:Object(T.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(T.jsxs)(W.d,{children:[Object(T.jsx)(W.b,{path:"/profile/:userId?",render:function(){return Object(T.jsx)(J,{})}}),Object(T.jsx)(W.b,{path:"/dialogs",render:function(){return Object(T.jsx)(X,{})}}),Object(T.jsx)(W.b,{path:"/users",render:function(){return Object(T.jsx)(q,{})}}),Object(T.jsx)(W.b,{path:"/news",render:function(){return Object(T.jsx)(K,{})}}),Object(T.jsx)(W.b,{path:"/music",render:function(){return Object(T.jsx)(Y,{})}}),Object(T.jsx)(W.b,{path:"/settings",render:function(){return Object(T.jsx)(Z,{})}}),Object(T.jsx)(W.b,{path:"/login",render:function(){return Object(T.jsx)(Q,{})}})]})})})]})}):Object(T.jsx)(V.a,{})}}]),n}(c.a.Component),ee=Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(Object(j.b)());Promise.all([t]).then((function(){e({type:g})}))}}})($),te=function(e){return Object(T.jsx)(S.a,{store:y,children:Object(T.jsx)(ee,{})})};i.a.render(Object(T.jsx)(S.a,{store:y,children:Object(T.jsx)(te,{})}),document.getElementById("root")),r()},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return j}));var r=n(7),a=n.n(r),c=n(10),s=n(3),i=n(45),u=n(11),o="SET_USER_DATA",l={id:null,email:null,login:null,isAuth:!1},d=function(e,t,n,r){return{type:o,data:{id:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.authUser();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,i=r.email,t(d(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.b.loginUser(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(f()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(i.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.logoutUser();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),t.data);default:return e}}},44:function(e,t,n){e.exports={header:"Header_header__331NI",loginLink:"Header_loginLink__13gol",logOut:"Header_logOut__3xTA_"}},54:function(e,t,n){e.exports={friend:"Friends_friend__2pNex",friendItem:"Friends_friendItem__OOIsw"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(7),a=n.n(r),c=n(10),s=n(26),i=n(3),u=n(11),o="ADD-POST",l="SET-USER-PROFILE",d="SET_STATUS",f="DELETE_POST",p="SAVE_PHOTO_SUCCESS",j={postsData:[{id:1,message:"Hi, how are you?",likesCounts:15},{id:2,message:"It's my first post.",likesCounts:10},{id:3,message:"I love React.",likesCounts:5},{id:4,message:"And hate motor.",likesCounts:1}],profile:null,status:""},b=function(e){return{type:o,newPostBody:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,u.c.saveProfile(e);case 3:0===t.sent.data.resultCode&&n(h(c));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.postsData.length+1,message:t.newPostBody,likesCounts:0};return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(s.a)(e.postsData),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.userId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},62:function(e,t,n){"use strict";var r=n.p+"static/media/circles.ff85086e.svg",a=n(85),c=n.n(a),s=n(2);t.a=function(){return Object(s.jsx)("img",{className:c.a.Preloader,src:r,alt:"preload"})}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(26),a=n(3),c="SEND-MESSAGE",s={dialogsData:[{id:1,name:"Alex",src:"https://image.flaticon.com/icons/png/512/213/213315.png"},{id:2,name:"Vadim",src:"https://image.flaticon.com/icons/png/512/213/213292.png"},{id:3,name:"Morina",src:"https://image.flaticon.com/icons/png/128/213/213338.png"},{id:4,name:"Sasha",src:"https://image.flaticon.com/icons/png/512/213/213280.png"},{id:5,name:"Vita",src:"https://image.flaticon.com/icons/png/512/213/213345.png"}],messagesData:[{id:1,message:"Hi."},{id:2,message:"How are you?"},{id:3,message:"I want eat some russian baby!"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:e.messagesData.length+1,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"k",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x})),n.d(t,"i",(function(){return w})),n.d(t,"h",(function(){return _})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"j",(function(){return P}));var r=n(7),a=n.n(r),c=n(10),s=n(26),i=n(3),u=n(11),o="FOLLOW",l="UNFOLLOW",d="SET-USERS",f="SET-CURRENT-PAGE",p="SET-TOTAL-USERS-COUNT",j="TOGGLE-IS-FETCHING",b="TOGGLE_IS_FOLLOWING_PROGRESS",h={usersData:[],pageSize:8,totalUsers:19,currentPage:1,isFetching:!1,followingProgress:[]},O=function(e){return{type:o,userId:e}},g=function(e){return{type:l,userId:e}},m=function(e){return{type:d,usersData:e}},v=function(e){return{type:f,currentPage:e}},x=function(e){return{type:p,count:e}},w=function(e){return{type:j,isFetching:e}},_=function(e,t){return{type:b,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),r(v(t)),n.next=4,u.a.getUsers(e,t);case 4:c=n.sent,r(w(!1)),r(m(c.data.items)),r(x(c.data.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,u.a.followUser(e);case 3:0===t.sent.data.resultCode&&n(O(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,u.a.unFollowUser(e);case 3:0===t.sent.data.resultCode&&n(g(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{usersData:t.usersData});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case p:return Object(i.a)(Object(i.a)({},e),{},{totalUsers:t.count});case j:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case b:return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(s.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}}},8:function(e,t,n){e.exports={nav:"Navbar_nav__1u3c0",item:"Navbar_item__3Aazv",active:"Navbar_active__15NFq",settings:"Navbar_settings__ErTW8",friends:"Navbar_friends__3see6"}},85:function(e,t,n){e.exports={Preloader:"Preloader_Preloader__16-oh"}}},[[226,2,3]]]);
//# sourceMappingURL=main.06a8f9db.chunk.js.map