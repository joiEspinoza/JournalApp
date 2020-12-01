(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n(31),o=n.n(c),i=n(8),s=n.n(i),u=n(11),l=n(21),d=n(22),j=n(10),p=n(7),b=n(5),O=n(29),f=(n(71),n(74),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASEURL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID});O.a.initializeApp(f);var m=O.a.firestore(),h=new O.a.auth.GoogleAuthProvider,_=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.collection("".concat(t,"/journal/notes")).get();case 3:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v={login:"[Auth] Login",logout:"[Auth] Logout",uiSetError:"[UI] Set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] Start loading",uiFinishLoading:"[UI] Finish loading",notesAddNew:"[Notes] New notes",notesActive:"[Notes] Set active note",notesLoad:"[Notes] Load notes",notesUpdated:"[Notes] Update notes",notesFileUrl:"[Notes] Update image url",notesDelete:"[Notes] Delete note",notesLogoutCleaning:"[Notes] Logout cleaning"},g=n(14),x=n.n(g),E=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/djlmqpd2n/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/djlmqpd2n/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=24;break;case 21:return e.prev=21,e.t0=e.catch(4),e.abrupt("return",null);case 24:case 25:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){return{type:v.notesActive,payload:Object(b.a)({id:e},t)}},y=function(e,t){return{type:v.notesAddNew,payload:Object(b.a)({id:e},t)}},N=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:a=t.sent,n(w(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return{type:v.notesLoad,payload:e}},C=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().auth.uid,e.url||delete e.url,delete(c=Object(b.a)({},e)).id,t.next=8,m.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 8:n(T(e.id,c)),x.a.fire("Saved",e.title,"success"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),x.a.fire("Error",t.t0,"error");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e,t){return{type:v.notesUpdated,payload:{id:e,note:Object(b.a)({id:e},t)}}},R=function(e){return{type:v.notesDelete,payload:e}},A=n(34),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return c(t)},i=function(e){var t=e.target;c(Object(b.a)(Object(b.a)({},a),{},Object(A.a)({},t.name,t.value)))};return[a,i,o]},D=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"25-11-2020"}),Object(a.jsx)("input",{id:"fileSelector",name:"file",type:"file",onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().notes.active,x.a.fire({title:"Uploading....",text:"Please wait...",showConfirmButton:!1,onBeforeOpen:function(){x.a.showLoading()}}),t.next=5,E(e);case 5:c=t.sent,r.url=c,n(C(r)),x.a.close(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(n))},style:{display:"none"}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.getElementById("fileSelector").click()},children:"picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(C(t))},children:"save"})]})]})},L=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.notes})).active,n=P(t),c=Object(l.a)(n,3),o=c[0],i=c[1],d=c[2],j=o.title,O=o.body,f=o.id,h=Object(r.useRef)(t.id);Object(r.useEffect)((function(){t.id!==h.current&&(d(t),h.current=t.id)}),[t,d]),Object(r.useEffect)((function(){e(S(o.id,Object(b.a)({},o)))}),[o,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(D,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Some awesone title",autoComplete:"off",className:"notes__title-input",name:"title",value:j,onChange:i}),Object(a.jsx)("textarea",{placeholder:"What happen today?",className:"notes__textarea",name:"body",value:O,onChange:i}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"img"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().auth.uid,t.next=4,m.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 4:n(R(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()}(f))},children:" Delete "})]})},k=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:[" Select somthing ",Object(a.jsx)("br",{})," or create somthing "]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},I=function(e){return{type:v.uiSetError,payload:e}},U=function(){return{type:v.uiFinishLoading,payload:!1}},W=function(e,t){return{type:v.login,payload:{uid:e,displayName:t}}},K=function(e,t){return function(n){return n({type:v.uiStartLoading,payload:!0}),O.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(W(t.uid,t.displayName)),n(U())})).catch((function(e){console.log(e),n(U()),x.a.fire("error",e.message,"error")}))}},F=function(){return{type:v.logout}},H=n(59),B=n.n(H),V=function(e){var t=e.id,n=e.title,r=e.body,c=e.date,o=e.url,i=B()(c),s=Object(p.b)();return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){s(S(t,{title:n,body:r,date:c,url:o}))},children:[o&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url( ".concat(o," )")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:n}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:i.format("dddd")}),Object(a.jsx)("h4",{children:i.format("Do")})]})]})},q=function(){var e=Object(p.c)((function(e){return e.notes})).note;return Object(a.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(a.jsx)(V,Object(b.a)({},e),e.id)}))})},G=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon",style:{color:"white"}}),Object(a.jsxs)("span",{style:{color:"white"},children:[" ",t]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){return e(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.auth().signOut();case 3:t({type:v.notesLogoutCleaning}),t(F()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x",onClick:function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=5,m.collection("".concat(a,"/journal/notes")).add(r);case 5:c=e.sent,t(S(c.id,r)),t(y(c.id,r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}())}}),Object(a.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(a.jsx)(q,{})]})},J=function(){var e=Object(p.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__box-container",children:[Object(a.jsx)(G,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(L,{}):Object(a.jsx)(k,{})})]})},M=n(35),z=n.n(M),X=function(){var e=P({email:"joi@gmail.com",password:"123456"}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n.email,o=n.password,i=Object(p.b)(),s=Object(p.c)((function(e){return e.ui})),u=s.msgError,j=s.loading,b=function(){return z.a.isEmail(c)?!(o.length<=5)||(x.a.fire("error","invalid password","error"),!1):(x.a.fire("error","email not valid","error"),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b()&&i(K(c,o))},className:"animate__animated animate__fadeIn animate__faster",children:[u&&x.a.fire("error",u,"error"),Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"Email",name:"email",autoComplete:"off",value:c,onChange:r}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",autoComplete:"off",value:o,onChange:r}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!!j,children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-network",children:[Object(a.jsx)("p",{children:"Login with social network"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){i((function(e){O.a.auth().signInWithPopup(h).then((function(t){var n=t.user;return e(W(n.uid,n.displayName))})).catch((function(e){return console.log(e)}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:"Sign in with google"})]})]}),Object(a.jsx)(d.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},Y=function(){var e=P({email:"joi@gmail.com",name:"Jose",password:"123456",password2:"123456"}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n.email,o=n.name,i=n.password,j=n.password2,b=Object(p.b)(),f=Object(p.c)((function(e){return e.ui})).msgError,m=function(){return 0===o.trim().length?(b(I(" name is not valid ")),!1):z.a.isEmail(c)?i!==j||i.length<=5?(b(I("password is not valid")),!1):(b({type:v.uiRemoveError}),!0):(b(I("email is not valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m()&&b(function(e,t,n){return function(a){O.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:n});case 3:a(W(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),x.a.fire("error",e.message,"error")}))}}(c,i,o))},className:"animate__animated animate__fadeIn animate__faster",children:[f&&Object(a.jsxs)("div",{className:"auth__alert-error",children:[" ",f," "]}),Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"Email",name:"email",value:c,onChange:r,autoComplete:"off"}),Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"Name",name:"name",value:o,onChange:r,autoComplete:"off"}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",value:i,onChange:r,autoComplete:"off"}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"Confirm Password",name:"password2",value:j,onChange:r,autoComplete:"off"}),Object(a.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(a.jsx)(d.b,{className:"link",to:"/auth/login",children:"Already Register?"})]})]})},Q=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/auth/login",component:X}),Object(a.jsx)(j.b,{exact:!0,path:"/auth/register",component:Y}),Object(a.jsx)(j.a,{to:"/auth/login"})]})})})},Z=n(36),$=n(17),ee=n.n($),te=function(e){var t=e.isLoggedIn,n=e.component,r=Object(Z.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(j.b,Object(b.a)(Object(b.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(b.a)({},e)):Object(a.jsx)(j.a,{to:"/auth/login"})}}))};te.protoType={isLoggedIn:ee.a.bool.isRequired,component:ee.a.func.isRequired};var ne=te,ae=function(e){var t=e.isLoggedIn,n=e.component,r=Object(Z.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(j.b,Object(b.a)(Object(b.a)({},r),{},{component:function(e){return t?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsx)(n,Object(b.a)({},e))}}))};ae.protoType={isLoggedIn:ee.a.bool.isRequired,component:ee.a.func.isRequired};var re=ae,ce=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),i=Object(l.a)(o,2),b=i[0],f=i[1],m=Object(p.b)();return Object(r.useEffect)((function(){O.a.auth().onAuthStateChanged(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(m(W(t.uid,t.displayName)),m(N(t.uid)),f(!0)):f(!1),c(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[m,c,f]),n?Object(a.jsx)("center",{children:Object(a.jsx)("h1",{children:"||..... Wait ....||"})}):Object(a.jsx)(d.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(re,{isLoggedIn:b,path:"/auth",component:Q}),Object(a.jsx)(ne,{isLoggedIn:b,path:"/",component:J}),Object(a.jsx)(j.a,{to:"/auth/login"})]})})})},oe=n(23),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.login:return{uid:t.payload.uid,name:t.payload.displayName};case v.logout:return{};default:return e}},se=n(60),ue={loading:!1,msgError:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.uiSetError:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case v.uiRemoveError:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case v.uiStartLoading:case v.uiFinishLoading:return Object(b.a)(Object(b.a)({},e),{},{loading:t.payload});default:return e}},de=n(45),je=Object(oe.c)({auth:ie,ui:le,notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{note:[],active:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.notesActive:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case v.notesAddNew:return Object(b.a)(Object(b.a)({},e),{},{note:[t.payload].concat(Object(de.a)(e.note))});case v.notesLoad:return Object(b.a)(Object(b.a)({},e),{},{note:Object(de.a)(t.payload)});case v.notesUpdated:return Object(b.a)(Object(b.a)({},e),{},{note:e.note.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case v.notesDelete:return Object(b.a)(Object(b.a)({},e),{},{active:null,note:e.note.filter((function(e){return e.id!==t.payload}))});case v.notesLogoutCleaning:return Object(b.a)(Object(b.a)({},e),{},{active:null,note:[]});default:return e}}}),pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,be=Object(oe.e)(je,pe(Object(oe.a)(se.a))),Oe=function(){return Object(a.jsx)(p.a,{store:be,children:Object(a.jsx)(ce,{})})},fe=(n(153),document.getElementById("root"));o.a.render(Object(a.jsx)(Oe,{}),fe)}},[[154,1,2]]]);
//# sourceMappingURL=main.616b5bda.chunk.js.map