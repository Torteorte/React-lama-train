(this.webpackJsonplama=this.webpackJsonplama||[]).push([[8],{253:function(e,s,t){e.exports={users:"Users_users__3m57j",user:"Users_user__3NZBL",leftInformation:"Users_leftInformation__2rm5y",buttonFollow:"Users_buttonFollow__25yR4",buttonUnFollow:"Users_buttonUnFollow__3YrSn",mainInformation:"Users_mainInformation__3dm7S",nameStatus:"Users_nameStatus__8m92l",location:"Users_location__1a1qc"}},302:function(e,s,t){e.exports={Paginator:"Paginator_Paginator__12dZ1",active:"Paginator_active__2i6lH",disabledClass:"Paginator_disabledClass__1IYvd"}},318:function(e,s,t){"use strict";t.r(s);var o=t(33),n=t(34),a=t(36),r=t(35),l=t(0),i=t.n(l),c=t(18),u=t(73),g=t(253),p=t.n(g),f=t.p+"static/media/defaultPhoto.c23a9d8b.jpg",h=t(11),d=t(2),j=function(e){return Object(d.jsxs)("div",{className:p.a.user,children:[Object(d.jsxs)("div",{className:p.a.leftInformation,children:[Object(d.jsx)(h.b,{to:"/profile/"+e.users.id,children:Object(d.jsx)("img",{src:null!=e.users.photos.small?e.users.photos.small:f,alt:"User avatar"})}),Object(d.jsx)("div",{className:p.a.follow,children:e.users.followed?Object(d.jsx)("button",{className:p.a.buttonUnFollow,disabled:e.followingProgress.some((function(s){return s===e.users.id})),onClick:function(){e.unFollow(e.users.id)},children:"Unfollow"}):Object(d.jsx)("button",{className:p.a.buttonFollow,post:!0,disabled:e.followingProgress.some((function(s){return s===e.users.id})),onClick:function(){e.follow(e.users.id)},children:"Follow"})})]}),Object(d.jsxs)("div",{className:p.a.mainInformation,children:[Object(d.jsxs)("div",{className:p.a.nameStatus,children:[Object(d.jsx)("p",{children:e.users.name}),Object(d.jsx)("p",{children:e.users.status})]}),Object(d.jsx)("div",{className:p.a.location})]})]},e.users.id)},b=t(302),P=t.n(b),w=t(303),m=t.n(w),_=function(e){Object(a.a)(t,e);var s=Object(r.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={activePage:n.props.currentPage},n}return Object(n.a)(t,[{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e}),this.props.onPagechange(e)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:P.a.Paginator,children:Object(d.jsx)(m.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pageSize,totalItemsCount:this.props.totalUsers,pageRangeDisplayed:10,onChange:this.handlePageChange.bind(this),activeClass:P.a.active,disabledClass:P.a.disabledClass})})}}]),t}(i.a.Component),O=function(e){return Object(d.jsxs)("div",{className:p.a.users,children:[Object(d.jsx)(_,{currentPage:e.currentPage,totalUsers:e.totalUsers,pageSize:e.pageSize,onPagechange:e.onPagechange}),e.usersData.map((function(s){return Object(d.jsx)(j,{users:s,followingProgress:e.followingProgress,unFollow:e.unFollow,follow:e.follow},s.id)}))]})},v=t(62),F=t(30),U=t(307),x=Object(U.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),S=function(e){return e.usersPage.pageSize},C=function(e){return e.usersPage.totalUsers},N=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},y=function(e){return e.usersPage.toggleFollowingProgress},z=function(e){return e.usersPage.followingProgress},I=function(e){Object(a.a)(t,e);var s=Object(r.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=s.call.apply(s,[this].concat(a))).onPagechange=function(s){e.props.requestUsers(e.props.pageSize,s)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching?Object(d.jsx)(v.a,{}):null,Object(d.jsx)(O,{totalUsers:this.props.totalUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,usersData:this.props.usersData,unFollowSuccess:this.props.unFollowSuccess,followSuccess:this.props.followSuccess,onPagechange:this.onPagechange,toggleFollowingProgress:this.props.toggleFollowingProgress,followingProgress:this.props.followingProgress,follow:this.props.follow,unFollow:this.props.unFollow})]})}}]),t}(i.a.Component);s.default=Object(F.d)(Object(c.b)((function(e){return{usersData:x(e),pageSize:S(e),totalUsers:C(e),currentPage:N(e),isFetching:k(e),toggleFollowingProgress:y(e),followingProgress:z(e)}}),{followSuccess:u.c,unFollowSuccess:u.k,setUsersData:u.g,setCurrentPage:u.e,setTotalUsersCount:u.f,toggleIsFetching:u.i,toggleFollowingProgress:u.h,requestUsers:u.d,follow:u.b,unFollow:u.j}))(I)}}]);
//# sourceMappingURL=8.70f14f9c.chunk.js.map