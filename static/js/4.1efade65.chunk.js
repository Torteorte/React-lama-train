(this.webpackJsonplama=this.webpackJsonplama||[]).push([[4],{227:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var s=function(t){if(!t)return"Field is required"},r=function(t){if(!t)return" "},o=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},228:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return b}));var s=n(3),r=n(232),o=n(229),a=n.n(o),i=n(2),c=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],j=function(t){t.input;var e=t.meta,n=(t.child,Object(r.a)(t,c)),s=e.touched&&e.error;return Object(i.jsxs)("div",{className:a.a.formControl+" "+(s?a.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),e.touched&&Object(i.jsx)("span",{children:e.error})]})},f=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,u));return Object(i.jsxs)(j,Object(s.a)(Object(s.a)({},t),{},{children:[" ",Object(i.jsx)("textarea",Object(s.a)(Object(s.a)({},e),n))," "]}))},b=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,l));return Object(i.jsxs)(j,Object(s.a)(Object(s.a)({},t),{},{children:[" ",Object(i.jsx)("input",Object(s.a)(Object(s.a)({},e),n))," "]}))}},229:function(t,e,n){t.exports={formControl:"FormsControl_formControl__3vb6c",error:"FormsControl_error__3Krxq"}},233:function(t,e,n){"use strict";var s=n(234),r=n.n(s),o=n(2);e.a=function(t){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:r.a.buttonGreen,children:t.textButton})})}},234:function(t,e,n){t.exports={buttonGreen:"Buttons_buttonGreen__1cbZ4"}},240:function(t,e,n){t.exports={mainInfo:"ProfileInfo_mainInfo__aYcwe",personInfo:"ProfileInfo_personInfo__3_iSt",aboutMe:"ProfileInfo_aboutMe__2e6nF",contacts:"ProfileInfo_contacts__3Jj3T",status:"ProfileInfo_status__1Cg3-"}},256:function(t,e,n){t.exports={content:"Profile_content__3v5ae"}},257:function(t,e,n){t.exports={myPosts:"MyPosts_myPosts__3U-_g",posts:"MyPosts_posts__1FSe-",clearButton:"MyPosts_clearButton__hXfGs"}},258:function(t,e,n){t.exports={item:"Post_item__2p-7y"}},317:function(t,e,n){"use strict";n.r(e);var s=n(3),r=n(33),o=n(34),a=n(36),i=n(35),c=n(0),u=n.n(c),l=n(18),j=n(256),f=n.n(j),b=n(240),d=n.n(b),p=n(62);var h=n(64);function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(s=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);s=!0);}catch(c){r=!0,o=c}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return n}}(t,e)||Object(h.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=n(2),x=function(t){var e=O(Object(c.useState)(!1),2),n=e[0],s=e[1],r=O(Object(c.useState)(t.status),2),o=r[0],a=r[1];return Object(c.useEffect)((function(){a(t.status)}),[t.status]),Object(m.jsxs)("div",{className:d.a.status,children:[!n&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"--"})}),n&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{onChange:function(t){a(t.target.value)},onBlur:function(){s(!1),t.updateStatus(o)},value:o,autoFocus:!0,type:"text"})})]})},v=function(t){return t.profile?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"https://city.diia.gov.ua/assets/img/pages/city.jpg",alt:"big background foto"})}),Object(m.jsxs)("div",{className:d.a.mainInfo,children:[Object(m.jsx)("img",{src:t.profile.photos.large,alt:"avatar-foto"}),Object(m.jsxs)("div",{className:d.a.personInfo,children:[Object(m.jsx)(x,{status:t.status,updateStatus:t.updateStatus}),Object(m.jsx)("div",{className:d.a.aboutMe,children:t.profile.aboutMe})]})]}),Object(m.jsx)("h2",{children:t.profile.fullName})]}):Object(m.jsx)(p.a,{})},_=n(57),g=n(257),y=n.n(g),P=n(258),S=n.n(P),I=function(t){return Object(m.jsxs)("div",{className:S.a.item,children:[Object(m.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/147/147142.png",alt:"avatar icon"}),t.message,Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Like"})," ",t.likesCounts]})]})},C=n(106),w=n(107),M=n(227),N=n(228),k=n(233),A=Object(M.a)(10),F=Object(w.a)({form:"MyPostForm"})((function(t){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{action:"",onSubmit:t.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(C.a,{component:N.b,name:"newPostText",value:t.newPostText,validate:[M.c,A]})}),Object(m.jsx)(k.a,{textButton:"Add post"})]})})})),T=function(t){var e=t.postsData.map((function(t){return Object(m.jsx)(I,{message:t.message,likesCounts:t.likesCounts,id:t.id},t.id)}));return Object(m.jsxs)("div",{className:y.a.myPosts,children:[Object(m.jsx)("h3",{children:"My posts"}),Object(m.jsx)(F,{onSubmit:function(e){t.addPostAC(e.newPostText)}}),Object(m.jsx)("div",{className:y.a.posts,children:e})]})},B=Object(l.b)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),{addPostAC:_.a})(T),D=function(t){return Object(m.jsxs)("div",{className:f.a.content,children:[Object(m.jsx)(v,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(m.jsx)(B,{})]})},U=n(5),G=n(30),J=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(m.jsx)(D,Object(s.a)(Object(s.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(u.a.Component);e.default=Object(G.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.e}),U.g)(J)}}]);
//# sourceMappingURL=4.1efade65.chunk.js.map