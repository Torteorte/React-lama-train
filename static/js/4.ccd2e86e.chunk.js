(this.webpackJsonplama=this.webpackJsonplama||[]).push([[4],{231:function(t,e,a){"use strict";a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return f})),a.d(e,"c",(function(){return m}));var s=a(3),n=a(236),r=a(233),o=a.n(r),c=a(110),i=a(1),l=["input","meta","child"],u=["input","meta","child"],j=["input","meta","child"],b=function(t){t.input;var e=t.meta,a=(t.child,Object(n.a)(t,l)),s=e.touched&&e.error;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(s?o.a.error:""),children:[Object(i.jsx)("div",{children:a.children}),s&&Object(i.jsx)("span",{children:e.error})]})},d=function(t){var e=t.input,a=(t.meta,t.child,Object(n.a)(t,u));return Object(i.jsxs)(b,Object(s.a)(Object(s.a)({},t),{},{children:[" ",Object(i.jsx)("textarea",Object(s.a)(Object(s.a)({},e),a))," "]}))},f=function(t){var e=t.input,a=(t.meta,t.child,Object(n.a)(t,j));return Object(i.jsxs)(b,Object(s.a)(Object(s.a)({},t),{},{children:[" ",Object(i.jsx)("input",Object(s.a)(Object(s.a)({},e),a))," "]}))},m=function(t,e,a,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(s.a)({component:t,name:e,type:a,placeholder:n,validate:r},l))," ",o]})}},232:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var s=function(t){if(!t)return"Field is required"},n=function(t){if(!t)return" "},r=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},233:function(t,e,a){t.exports={formControl:"FormsControl_formControl__3vb6c",error:"FormsControl_error__3Krxq"}},241:function(t,e,a){"use strict";var s=a(242),n=a.n(s),r=a(1);e.a=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:n.a.buttonGreen,children:t.textButton})})}},242:function(t,e,a){t.exports={buttonGreen:"ButtonGreen_buttonGreen__1YwX4"}},243:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var s=a(3),n=a(54),r=a(55),o=a(57),c=a(56),i=a(0),l=a.n(i),u=a(18),j=a(5),b=a(1),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(o.a)(i,e);var a=Object(c.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(s.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),i}(l.a.Component);return Object(u.b)(d)(e)}},260:function(t,e,a){t.exports={content:"Profile_content__3v5ae"}},261:function(t,e,a){t.exports={preloaderProfile:"ProfileInfo_preloaderProfile__1tIDc",fotoLarge:"ProfileInfo_fotoLarge__tcTm7",avatar:"ProfileInfo_avatar__1K77l",inputAvatar:"ProfileInfo_inputAvatar__3PwOY",avatarFileInput:"ProfileInfo_avatarFileInput__3ciPN","upload-file__input":"ProfileInfo_upload-file__input__2eblL",mainInfo:"ProfileInfo_mainInfo__aYcwe",NameStatus:"ProfileInfo_NameStatus__2e5os",personInfo:"ProfileInfo_personInfo__3_iSt",aboutMe:"ProfileInfo_aboutMe__2e6nF",Edit:"ProfileInfo_Edit__cNAS-"}},262:function(t,e,a){t.exports={contacts:"Contacts_contacts__3MOf4"}},263:function(t,e,a){t.exports={status:"ProfileStatusHook_status__HvCHu"}},264:function(t,e,a){t.exports={formInfo:"ProfileDataForm_formInfo__3RJdz",formItem:"ProfileDataForm_formItem__1n--G",checkBox:"ProfileDataForm_checkBox__1ViLR",contactsItems:"ProfileDataForm_contactsItems__C7YiQ",buttonSave:"ProfileDataForm_buttonSave__1EAK9",formSummaryError:"ProfileDataForm_formSummaryError__3acAo"}},308:function(t,e,a){t.exports={myPosts:"MyPosts_myPosts__3U-_g",posts:"MyPosts_posts__1FSe-",clearButton:"MyPosts_clearButton__hXfGs"}},309:function(t,e,a){t.exports={item:"Post_item__2p-7y",avatarMessage:"Post_avatarMessage__ecrmO",message:"Post_message__2H72d",likes:"Post_likes__33Wrd"}},325:function(t,e,a){"use strict";a.r(e);var s=a(3),n=a(54),r=a(55),o=a(57),c=a(56),i=a(0),l=a.n(i),u=a(18),j=a(260),b=a.n(j);var d=a(67);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],s=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(s=(o=c.next()).done)&&(a.push(o.value),!e||a.length!==e);s=!0);}catch(i){n=!0,r=i}finally{try{s||null==c.return||c.return()}finally{if(n)throw r}}return a}}(t,e)||Object(d.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=a(261),p=a.n(m),h=a(41),O=a.p+"static/media/facebook.6aa98d32.svg",x=a.p+"static/media/vk.8e9ac5f1.svg",v=a.p+"static/media/twitter.16ec4858.svg",_=a.p+"static/media/instagram.02967a62.svg",g=a.p+"static/media/youtube.a166d430.svg",P=a.p+"static/media/github.b1997d6c.svg",y=a(262),I=a.n(y),N=a(1),k=function(t){var e=function(t,e){return t&&Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer",href:t,children:[" ",Object(N.jsx)("img",{src:e,alt:"".concat(e,"-link")})]})};return Object(N.jsxs)("div",{className:I.a.contacts,children:[e(t.contacts.facebook,O),e(t.contacts.vk,x),e(t.contacts.twitter,v),e(t.contacts.instagram,_),e(t.contacts.youtube,g),e(t.contacts.github,P)]})},S=a(263),w=a.n(S),A=function(t){var e=f(Object(i.useState)(!1),2),a=e[0],s=e[1],n=f(Object(i.useState)(t.status),2),r=n[0],o=n[1];return Object(i.useEffect)((function(){o(t.status)}),[t.status]),Object(N.jsxs)("div",{className:w.a.status,children:[!a&&Object(N.jsx)("div",{children:Object(N.jsx)("span",{onDoubleClick:t.isOwner&&function(){s(!0)},children:t.status||"--"})}),a&&Object(N.jsx)("div",{children:Object(N.jsx)("input",{onChange:function(t){o(t.target.value)},onBlur:function(){s(!1),t.updateStatus(r)},value:r,autoFocus:!0,type:"text"})})]})},F=a(65),C=a(264),M=a.n(C),D=a(231),B=a(110),E=a(111),T=a(59),J=a(232),L=Object(E.a)({form:"editProfile"})((function(t){return Object(N.jsxs)("form",{action:"",onSubmit:t.handleSubmit,className:M.a.formInfo,children:[Object(N.jsx)("h2",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),Object(N.jsxs)("div",{className:M.a.formItem,children:[Object(N.jsx)("b",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0418\u043c\u044f: "}),Object(D.c)(D.a,"fullName","text","Full Name",[J.b])]}),Object(N.jsxs)("div",{className:M.a.formItem,children:[Object(N.jsx)("b",{children:"About me: "}),Object(D.c)(D.b,"aboutMe","text","About Me",[J.b])]}),Object(N.jsxs)("div",{className:M.a.formItem,children:[Object(N.jsx)("b",{children:"Looking for a job:"}),Object(N.jsx)(B.a,{component:"input",name:"lookingForAJob",type:"checkbox"})," ",Object(N.jsx)("span",{className:M.a.checkBox,children:"Yes"})]}),Object(N.jsxs)("div",{className:M.a.formItem,children:[Object(N.jsx)("b",{children:"My professional skills:"})," ",Object(D.c)(D.b,"lookingForAJobDescription","text","My Skills",[J.b])]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(N.jsx)("div",{className:" ".concat(M.a.contactsItems),children:Object.keys(t.profile.contacts).map((function(t){return Object(N.jsxs)("div",{className:M.a.formItem,children:[Object(N.jsxs)("b",{children:[t,":"]})," ",Object(D.c)(D.a,"contacts."+t.toLocaleLowerCase(),t)]},t)}))})]}),Object(N.jsx)("div",{className:M.a.buttonSave,children:Object(N.jsx)(T.a,{textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})}),t.error&&Object(N.jsx)("div",{className:M.a.formSummaryError,children:t.error})]})})),G=a.p+"static/media/photo-camera.6339753c.svg",U=function(t){return Object(N.jsxs)("div",{className:p.a.personInfo,children:[Object(N.jsx)("b",{children:"\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f: "}),Object(N.jsx)("div",{className:p.a.aboutMe,children:t.profile.aboutMe}),Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",t.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),t.profile.lookingForAJob&&Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",t.profile.lookingForAJobDescription]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(N.jsx)(k,{contacts:t.profile.contacts})]}),t.isOwner&&Object(N.jsxs)("div",{className:p.a.Edit,children:[" ",Object(N.jsx)("img",{src:"https://img.icons8.com/ios/100/000000/pencil--v1.png",alt:"edit"})," ",Object(N.jsx)(T.a,{onClick:t.goToEditMode,textButton:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})]})]})},R=function(t){var e=f(Object(i.useState)(!1),2),a=e[0],s=e[1];if(!t.profile)return Object(N.jsx)("div",{className:p.a.preloaderProfile,children:Object(N.jsx)(h.a,{})});return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:p.a.fotoLarge,children:[Object(N.jsx)("img",{src:"https://city.diia.gov.ua/assets/img/pages/city.jpg",alt:"big background foto"}),Object(N.jsx)("div",{className:p.a.avatar,children:Object(N.jsx)("img",{src:t.profile.photos.large||F.a,alt:"avatar-foto"})}),Object(N.jsx)("div",{children:t.isOwner&&Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{className:p.a.inputAvatar,type:"file",name:"myfile",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])},id:"avatarFile"}),Object(N.jsx)("label",{htmlFor:"avatarFile",className:p.a.avatarFileInput,children:Object(N.jsx)("img",{src:G,alt:"avatar"})})]})})]}),Object(N.jsx)("div",{className:p.a.mainInfo,children:Object(N.jsxs)("div",{className:p.a.NameStatus,children:[Object(N.jsx)("h1",{children:t.profile.fullName}),Object(N.jsx)(A,{status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner})]})}),a?Object(N.jsx)(L,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){s(!1)}))}}):Object(N.jsx)(U,{goToEditMode:function(){s(!0)},profile:t.profile,isOwner:t.isOwner})]})},Y=a(60),H=a(308),z=a.n(H),K=a(309),q=a.n(K),V=a.p+"static/media/heart-icon_34407.fe2a17a6.ico",X=function(t){return Object(N.jsxs)("div",{className:q.a.item,children:[Object(N.jsxs)("div",{className:q.a.avatarMessage,children:[Object(N.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/147/147142.png",alt:"avatar icon"}),Object(N.jsx)("span",{className:q.a.message,children:t.message})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{className:q.a.likes,children:[" ",Object(N.jsx)("img",{src:V,alt:"likes"})]})," ",t.likesCounts]})]})},Q=a(241),W=Object(J.a)(10),Z=Object(E.a)({form:"MyPostForm"})((function(t){return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{action:"",onSubmit:t.handleSubmit,children:[Object(N.jsx)("div",{children:Object(N.jsx)(B.a,{component:D.b,name:"newPostText",value:t.newPostText,validate:[J.c,W]})}),Object(N.jsx)(Q.a,{textButton:"Add post"})]})})})),$=function(t){var e=t.postsData.map((function(t){return Object(N.jsx)(X,{message:t.message,likesCounts:t.likesCounts,id:t.id},t.id)}));return Object(N.jsxs)("div",{className:z.a.myPosts,children:[Object(N.jsx)("h3",{children:"My posts"}),Object(N.jsx)(Z,{onSubmit:function(e){t.addPostAC(e.newPostText)}}),Object(N.jsx)("div",{className:z.a.posts,children:e})]})},tt=Object(u.b)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),{addPostAC:Y.a})($),et=function(t){return Object(N.jsxs)("div",{className:b.a.content,children:[Object(N.jsx)(R,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(N.jsx)(tt,{})]})},at=a(5),st=a(32),nt=a(243),rt=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"componentRender",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.componentRender()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.componentRender()}},{key:"render",value:function(){return Object(N.jsx)(et,Object(s.a)(Object(s.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhotoAC}))}}]),a}(l.a.Component);e.default=Object(st.d)(nt.a,Object(u.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:Y.d,getStatus:Y.c,updateStatus:Y.g,savePhotoAC:Y.e,saveProfile:Y.f}),at.g)(rt)}}]);
//# sourceMappingURL=4.ccd2e86e.chunk.js.map