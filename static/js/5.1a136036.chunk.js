(this.webpackJsonplama=this.webpackJsonplama||[]).push([[5],{227:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return m}));var s=n(3),a=n(234),c=n(228),r=n.n(c),i=n(106),o=n(2),u=["input","meta","child"],d=["input","meta","child"],l=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,u)),s=t.touched&&t.error;return Object(o.jsxs)("div",{className:r.a.formControl+" "+(s?r.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),t.touched&&Object(o.jsx)("span",{children:t.error})]})},b=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,d));return Object(o.jsxs)(j,Object(s.a)(Object(s.a)({},e),{},{children:[" ",Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))," "]}))},g=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsxs)(j,Object(s.a)(Object(s.a)({},e),{},{children:[" ",Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),n))," "]}))},m=function(e,t,n,a,c){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(s.a)({component:e,name:t,type:n,placeholder:a,validate:c},u))," ",r]})}},228:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3vb6c",error:"FormsControl_error__3Krxq"}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var s=function(e){if(!e)return"Field is required"},a=function(e){if(!e)return" "},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},239:function(e,t,n){"use strict";var s=n(240),a=n.n(s),c=n(2);t.a=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:a.a.buttonGreen,children:e.textButton})})}},240:function(e,t,n){e.exports={buttonGreen:"Buttons_buttonGreen__1cbZ4"}},241:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__w4wQk",dialogsItems:"Dialogs_dialogsItems__2z3A6",dialog:"Dialogs_dialog__10H4p",messages:"Dialogs_messages__2fyck",message:"Dialogs_message__1da__",sendMessage:"Dialogs_sendMessage__23Mxe",sendMessageButton:"Dialogs_sendMessageButton__2mQ3J"}},319:function(e,t,n){"use strict";n.r(t);var s=n(18),a=n(30),c=n(3),r=n(33),i=n(34),o=n(36),u=n(35),d=n(0),l=n.n(d),j=n(5),b=n(2),g=function(e){return{isAuth:e.auth.isAuth}},m=n(63),O=n(241),f=n.n(O),h=n(13),x=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.b,{to:"/dialogs/".concat(e.id),className:f.a.dialog,children:[Object(b.jsx)("img",{src:e.src,alt:"avatar"}),Object(b.jsx)("p",{children:e.name})]})})},p=function(e){return Object(b.jsx)("div",{className:f.a.message,children:e.message})},_=n(106),v=n(107),M=n(230),D=n(227),w=n(239),A=Object(M.a)(50),C=Object(v.a)({form:"AddMessageForm"})((function(e){return Object(b.jsx)("div",{className:f.a.sendMessage,children:Object(b.jsxs)("form",{action:"",onSubmit:e.handleSubmit,children:[Object(b.jsx)(_.a,{component:D.b,name:"newMessageText",value:e.newMessageText,placeholder:"Enter your message",validate:[M.c,A]}),Object(b.jsx)(w.a,{textButton:"Send"})]})})})),N=function(e){var t=e.dialogsData.map((function(e){return Object(b.jsx)(x,{name:e.name,id:e.id,src:e.src},e.id)})),n=e.messagesData.map((function(e){return Object(b.jsx)(p,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(b.jsxs)("div",{className:f.a.dialogs,children:[Object(b.jsx)("div",{className:f.a.dialogsItems,children:t}),Object(b.jsxs)("div",{className:f.a.messages,children:[n,Object(b.jsx)(C,{onSubmit:function(t){e.sendMessageAC(t.newMessageText)}})]})]}):Object(b.jsx)(j.a,{to:"/login"})};t.default=Object(a.d)((function(e){var t=function(t){Object(o.a)(s,t);var n=Object(u.a)(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(c.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),s}(l.a.Component);return Object(s.b)(g)(t)}),Object(s.b)((function(e){return{messagesData:e.dialogsPage.messagesData,dialogsData:e.dialogsPage.dialogsData,newMessageText:e.dialogsPage.newMessageText}}),{sendMessageAC:m.b}))(N)}}]);
//# sourceMappingURL=5.1a136036.chunk.js.map