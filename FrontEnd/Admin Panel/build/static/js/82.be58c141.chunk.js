(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[82],{1466:function(e,a,t){"use strict";var n=t(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(69)).default)(r.default.createElement("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");a.default=o},1476:function(e,a,t){"use strict";var n=t(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(69)).default)(r.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");a.default=o},1563:function(e,a,t){"use strict";var n=t(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(69)).default)(r.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");a.default=o},3152:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t(3),o=t(0),l=t.n(o),i=t(512),m=t(531),c=t(522),s=t(1466),d=t.n(s),u=t(270),p=t(532),x=t(1426),f=t(1427),b=t(197),E=t(18),g=t(103),y=t(412),v=t(22),w=t(44),h=t(116),R=t(68),N=t(16),j=t(167),T=t(4),O=t(9),S=t(29),C=t(359),P=t(670),z=t.n(P),I=function(e){var a=Object(x.d)(e),t=Object(n.a)(a,2),r=t[0],o=t[1],i=o.error&&o.touched?o.error:"";return l.a.createElement(c.a,Object.assign({},e,r,{helperText:i,error:!!i}))},F=f.a({name:f.b().required(l.a.createElement(N.a,{id:"validation.nameRequired"})),email:f.b().email(l.a.createElement(N.a,{id:"validation.emailFormat"})).required(l.a.createElement(N.a,{id:"validation.emailRequired"})),password:f.b().required(l.a.createElement(N.a,{id:"validation.passwordRequired"})),confirmPassword:f.b().required(l.a.createElement(N.a,{id:"validation.reTypePassword"}))}),k=Object(j.a)((function(e){return{formRoot:{textAlign:"left"},myTextFieldRoot:{width:"100%"},checkboxRoot:{marginLeft:-12},pointer:{cursor:"pointer"},btnRoot:{borderRadius:e.overrides.MuiCard.root.borderRadius,width:"10rem",fontWeight:O.b.LIGHT,fontSize:16,textTransform:"capitalize"},dividerRoot:Object(r.a)({marginBottom:10,marginLeft:-48,marginRight:-48},e.breakpoints.up("xl"),{marginBottom:20}),iconButtonRoot:{marginLeft:8,marginRight:8,color:e.palette.grey[500],"&:hover, &:focus":{color:e.palette.text.primary}},textLg:{fontSize:18},textPrimary:{color:e.palette.text.primary},colorTextPrimary:{color:e.palette.primary.main},underlineNone:{textDecoration:"none"},textGrey:{color:e.palette.grey[500]}}})),q=function(e){var a=Object(E.d)(),t=Object(w.h)(),n=k(e);return l.a.createElement(R.a,{flex:1,display:"flex",flexDirection:"column"},l.a.createElement(R.a,{px:{xs:6,sm:10,xl:15},pt:8,flex:1,display:"flex",flexDirection:"column"},l.a.createElement(x.c,{validateOnChange:!0,initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:F,onSubmit:function(e,n){var r=n.setSubmitting,o=n.setErrors;e.password!==e.confirmPassword?o({confirmPassword:l.a.createElement(N.a,{id:"validation.passwordMisMatch"})}):(r(!0),a(Object(v.R)({email:e.email,password:e.password,name:e.name},t)),r(!1))}},(function(e){var a=e.isSubmitting;return l.a.createElement(x.b,{className:n.formRoot,noValidate:!0,autoComplete:"off"},l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(I,{label:l.a.createElement(N.a,{id:"common.name"}),name:"name",variant:"outlined",className:n.myTextFieldRoot})),l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(I,{label:l.a.createElement(N.a,{id:"common.email"}),name:"email",variant:"outlined",className:n.myTextFieldRoot})),l.a.createElement(S.e,null,l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:0,xl:4}},l.a.createElement(I,{label:l.a.createElement(N.a,{id:"common.password"}),name:"password",type:"password",variant:"outlined",className:n.myTextFieldRoot}))),l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:3,xl:4}},l.a.createElement(I,{label:l.a.createElement(N.a,{id:"common.retypePassword"}),name:"confirmPassword",type:"password",variant:"outlined",className:n.myTextFieldRoot})))),l.a.createElement(R.a,{mb:{xs:3,xl:4},display:"flex",alignItems:"center",fontSize:15},l.a.createElement(R.a,{display:"flex",alignItems:"center"},l.a.createElement(p.a,{className:n.checkboxRoot}),l.a.createElement(R.a,{className:n.textGrey,component:"span",mr:2,fontSize:15},l.a.createElement(N.a,{id:"common.iAgreeTo"}))),l.a.createElement(R.a,{component:"span",color:"primary.main",fontSize:15,className:n.pointer},l.a.createElement(N.a,{id:"common.termConditions"}))),l.a.createElement(R.a,{mb:6,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"}},l.a.createElement(u.a,{variant:"contained",color:"secondary",disabled:a,className:n.btnRoot,type:"submit"},l.a.createElement(N.a,{id:"common.signup"})),l.a.createElement(R.a,{color:"text.secondary",ml:{sm:4},mt:{xs:3,sm:0},fontSize:15},l.a.createElement(R.a,{className:n.textGrey,component:"span",mr:1},l.a.createElement(N.a,{id:"common.alreadyHaveAccount"})),l.a.createElement(R.a,{component:"span"},l.a.createElement(h.a,{to:"/signIn",className:Object(T.default)(n.underlineNone,n.colorTextPrimary)},l.a.createElement(N.a,{id:"common.signIn"}))))))}))),l.a.createElement(R.a,{bgcolor:z.a[100],px:{xs:6,sm:10},py:2,display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center"},l.a.createElement(R.a,{component:"span",className:n.textGrey,mr:4,fontSize:15},l.a.createElement(N.a,{id:"auth.orSignupWith"})),l.a.createElement(R.a,{display:"flex",alignItems:"center"},l.a.createElement(b.a,{className:n.iconButtonRoot,onClick:function(){return g.a.federatedSignIn({provider:"Google"})}},l.a.createElement("i",{className:"zmdi zmdi-google"})),l.a.createElement(b.a,{className:n.iconButtonRoot,onClick:function(){return g.a.federatedSignIn({provider:"Facebook"})}},l.a.createElement(d.a,null)))),l.a.createElement(y.a,null))},L=Object(j.a)((function(e){return{formRoot:{textAlign:"left"},myTextFieldRoot:{width:"100%"},checkboxRoot:{marginLeft:-12},pointer:{cursor:"pointer"},btnRoot:{borderRadius:e.overrides.MuiCard.root.borderRadius,width:"10rem",fontWeight:O.b.LIGHT,fontSize:16,textTransform:"capitalize"},btnRootFull:{width:"100%"},dividerRoot:Object(r.a)({marginBottom:10,marginLeft:-48,marginRight:-48},e.breakpoints.up("xl"),{marginBottom:20}),textPrimary:{color:e.palette.text.primary},colorTextPrimary:{color:e.palette.primary.main},underlineNone:{textDecoration:"none"},textGrey:{color:e.palette.grey[500]}}})),M=function(e){var a=Object(x.d)(e),t=Object(n.a)(a,2),r=t[0],o=t[1],i=o.error&&o.touched?o.error:"";return l.a.createElement(c.a,Object.assign({},e,r,{helperText:i,error:!!i}))},B=f.a({name:f.b().required(l.a.createElement(N.a,{id:"validation.nameRequired"})),email:f.b().email(l.a.createElement(N.a,{id:"validation.emailFormat"})).required(l.a.createElement(N.a,{id:"validation.emailRequired"})),password:f.b().required(l.a.createElement(N.a,{id:"validation.passwordRequired"})),confirmPassword:f.b().required(l.a.createElement(N.a,{id:"validation.reTypePassword"}))}),D=function(e){var a=Object(E.d)(),t=L(e);return l.a.createElement(R.a,{flex:1,display:"flex",flexDirection:"column"},l.a.createElement(R.a,{px:{xs:6,sm:10,xl:15},pt:8,flex:1,display:"flex",flexDirection:"column"},l.a.createElement(x.c,{validateOnChange:!0,initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:B,onSubmit:function(e,t){var n=t.setErrors,r=t.setSubmitting;e.password!==e.confirmPassword?n({confirmPassword:l.a.createElement(N.a,{id:"validation.passwordMisMatch"})}):(r(!0),a(Object(v.I)({email:e.email,password:e.password,name:e.name})),r(!1))}},(function(e){var a=e.isSubmitting;return l.a.createElement(x.b,{className:t.formRoot,noValidate:!0,autoComplete:"off"},l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(M,{label:l.a.createElement(N.a,{id:"common.name"}),name:"name",variant:"outlined",className:t.myTextFieldRoot})),l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(M,{label:l.a.createElement(N.a,{id:"common.email"}),name:"email",variant:"outlined",className:t.myTextFieldRoot})),l.a.createElement(S.e,null,l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:0,xl:4}},l.a.createElement(M,{label:l.a.createElement(N.a,{id:"common.password"}),name:"password",type:"password",variant:"outlined",className:t.myTextFieldRoot}))),l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:3,xl:4}},l.a.createElement(M,{label:l.a.createElement(N.a,{id:"common.retypePassword"}),name:"confirmPassword",type:"password",variant:"outlined",className:t.myTextFieldRoot})))),l.a.createElement(R.a,{mb:{xs:3,xl:4},display:"flex",alignItems:"center",fontSize:15},l.a.createElement(R.a,{display:"flex",alignItems:"center"},l.a.createElement(p.a,{className:t.checkboxRoot}),l.a.createElement(R.a,{className:t.textGrey,component:"span",mr:2,fontSize:15},l.a.createElement(N.a,{id:"common.iAgreeTo"}))),l.a.createElement(R.a,{component:"span",color:"primary.main",fontSize:15,className:t.pointer},l.a.createElement(N.a,{id:"common.termConditions"}))),l.a.createElement(R.a,{mb:6,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"}},l.a.createElement(u.a,{variant:"contained",color:"secondary",disabled:a,className:t.btnRoot,type:"submit"},l.a.createElement(N.a,{id:"common.signup"})),l.a.createElement(R.a,{color:"text.secondary",ml:{sm:4},mt:{xs:3,sm:0},fontSize:15},l.a.createElement(R.a,{className:t.textGrey,component:"span",mr:1},l.a.createElement(N.a,{id:"common.alreadyHaveAccount"})),l.a.createElement(R.a,{component:"span"},l.a.createElement(h.a,{to:"/signIn",className:Object(T.default)(t.underlineNone,t.colorTextPrimary)},l.a.createElement(N.a,{id:"common.signIn"}))))))}))),l.a.createElement(R.a,{bgcolor:z.a[100],px:{xs:6,sm:10,xl:15},py:{xs:3,xl:4},display:"flex",justifyContent:"center",alignItems:"center"},l.a.createElement(u.a,{variant:"contained",color:"primary",type:"submit",className:Object(T.default)(t.btnRoot,t.btnRootFull)},l.a.createElement(N.a,{id:"auth.signupWithJwt"}))),l.a.createElement(y.a,null))},G=t(1563),A=t.n(G),V=t(1476),W=t.n(V),H=Object(j.a)((function(e){return{formRoot:{textAlign:"left"},myTextFieldRoot:{width:"100%"},checkboxRoot:{marginLeft:-12},pointer:{cursor:"pointer"},btnRoot:{borderRadius:e.overrides.MuiCard.root.borderRadius,width:"10rem",fontWeight:O.b.LIGHT,fontSize:16,textTransform:"capitalize"},dividerRoot:Object(r.a)({marginBottom:10,marginLeft:-48,marginRight:-48},e.breakpoints.up("xl"),{marginBottom:20}),iconButtonRoot:Object(r.a)({marginLeft:4,marginRight:4,color:e.palette.grey[500],"&:hover, &:focus":{color:e.palette.text.primary}},e.breakpoints.up("sm"),{marginLeft:8,marginRight:8}),textLg:{fontSize:18},textPrimary:{color:e.palette.text.primary},colorTextPrimary:{color:e.palette.primary.main},underlineNone:{textDecoration:"none"},textGrey:{color:e.palette.grey[500]}}})),_=function(e){var a=Object(x.d)(e),t=Object(n.a)(a,2),r=t[0],o=t[1],i=o.error&&o.touched?o.error:"";return l.a.createElement(c.a,Object.assign({},e,r,{helperText:i,error:!!i}))},J=f.a({name:f.b().required(l.a.createElement(N.a,{id:"validation.nameRequired"})),email:f.b().email(l.a.createElement(N.a,{id:"validation.emailFormat"})).required(l.a.createElement(N.a,{id:"validation.emailRequired"})),password:f.b().required(l.a.createElement(N.a,{id:"validation.passwordRequired"})),confirmPassword:f.b().required(l.a.createElement(N.a,{id:"validation.reTypePassword"}))}),U=function(e){var a=Object(E.d)(),t=H(e);return l.a.createElement(R.a,{flex:1,display:"flex",flexDirection:"column"},l.a.createElement(R.a,{px:{xs:6,sm:10,xl:15},pt:8,flex:1,display:"flex",flexDirection:"column"},l.a.createElement(x.c,{validateOnChange:!0,initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:J,onSubmit:function(e,t){var n=t.setErrors,r=t.setSubmitting;e.password!==e.confirmPassword?n({confirmPassword:l.a.createElement(N.a,{id:"validation.passwordMisMatch"})}):(r(!0),a(Object(v.S)({email:e.email,password:e.password,name:e.name})),r(!1))}},(function(e){var a=e.isSubmitting;return l.a.createElement(x.b,{className:t.formRoot,noValidate:!0,autoComplete:"off"},l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(_,{label:l.a.createElement(N.a,{id:"common.name"}),name:"name",variant:"outlined",className:t.myTextFieldRoot})),l.a.createElement(R.a,{mb:{xs:5,xl:8}},l.a.createElement(_,{label:l.a.createElement(N.a,{id:"common.email"}),name:"email",variant:"outlined",className:t.myTextFieldRoot})),l.a.createElement(S.e,null,l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:0,xl:4}},l.a.createElement(_,{label:l.a.createElement(N.a,{id:"common.password"}),name:"password",type:"password",variant:"outlined",className:t.myTextFieldRoot}))),l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement(R.a,{mb:{xs:3,xl:4}},l.a.createElement(_,{label:l.a.createElement(N.a,{id:"common.retypePassword"}),name:"confirmPassword",type:"password",variant:"outlined",className:t.myTextFieldRoot})))),l.a.createElement(R.a,{mb:{xs:3,xl:4},display:"flex",alignItems:"center",fontSize:15},l.a.createElement(R.a,{display:"flex",alignItems:"center"},l.a.createElement(p.a,{className:t.checkboxRoot}),l.a.createElement(R.a,{className:t.textGrey,component:"span",mr:2,fontSize:15},l.a.createElement(N.a,{id:"common.iAgreeTo"}))),l.a.createElement(R.a,{color:"primary.main",component:"span",fontSize:15,className:t.pointer},l.a.createElement(N.a,{id:"common.termConditions"}))),l.a.createElement(R.a,{mb:6,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"}},l.a.createElement(u.a,{variant:"contained",color:"secondary",disabled:a,className:t.btnRoot,type:"submit"},l.a.createElement(N.a,{id:"common.signup"})),l.a.createElement(R.a,{ml:{sm:4},mt:{xs:3,sm:0},color:"text.secondary",fontSize:15},l.a.createElement(R.a,{className:t.textGrey,component:"span",mr:1},l.a.createElement(N.a,{id:"common.alreadyHaveAccount"})),l.a.createElement(R.a,{component:"span"},l.a.createElement(h.a,{to:"/signin",className:Object(T.default)(t.underlineNone,t.colorTextPrimary)},l.a.createElement(N.a,{id:"common.signIn"}))))))}))),l.a.createElement(R.a,{bgcolor:z.a[100],px:{xs:6,sm:10,xl:15},py:2,display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center"},l.a.createElement(R.a,{component:"span",className:t.textGrey,mr:{sm:4},fontSize:15},l.a.createElement(N.a,{id:"auth.orSignupWith"})),l.a.createElement(R.a,{display:"inline-block"},l.a.createElement(b.a,{className:t.iconButtonRoot,onClick:function(){return a(Object(v.hb)())}},l.a.createElement("i",{className:"zmdi zmdi-google"})),l.a.createElement(b.a,{className:t.iconButtonRoot,onClick:function(){return a(Object(v.fb)())}},l.a.createElement(d.a,null)),l.a.createElement(b.a,{className:t.iconButtonRoot,onClick:function(){return a(Object(v.gb)())}},l.a.createElement(A.a,null)),l.a.createElement(b.a,{className:t.iconButtonRoot,onClick:function(){return a(Object(v.ib)())}},l.a.createElement(W.a,null)))),l.a.createElement(y.a,null))},K=t(356),Q=Object(j.a)((function(e){var a;return{imgRoot:{cursor:"pointer",display:"inline-block",width:140},cardRoot:(a={maxWidth:"36rem",width:"100%",overflow:"hidden",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",textAlign:"center",position:"relative",paddingTop:20},Object(r.a)(a,e.breakpoints.up("xl"),{paddingTop:32}),Object(r.a)(a,"&:before",{content:"''",position:"absolute",left:0,right:0,top:0,width:130,height:9,borderBottomRightRadius:80,borderBottomLeftRadius:80,marginRight:"auto",marginLeft:"auto",backgroundColor:e.palette.primary.main}),a),muiTabsFull:{marginLeft:0,marginRight:0,borderBottom:"1px solid ".concat(e.palette.grey[300]),"& .MuiTabs-flexContainer":{"& .MuiTab-root":{flex:1}}},muiTab:{fontWeight:O.b.MEDIUM,fontSize:16,paddingBottom:16,paddingTop:16,marginLeft:8,marginRight:8,color:e.palette.text.secondary},textUppercase:{textTransform:"uppercase"}}}));a.default=function(e){var a=Object(o.useState)(0),t=Object(n.a)(a,2),r=t[0],c=t[1],s=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},d=Q(e);return l.a.createElement(R.a,{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},l.a.createElement(R.a,{mb:{xs:6,md:8,xl:18},textAlign:"center"},l.a.createElement("img",{className:d.imgRoot,src:"/assets/images/logo-white-with-name.png",alt:"crema-logo"})),l.a.createElement(R.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},l.a.createElement(K.a,{className:d.cardRoot},l.a.createElement(R.a,{px:{xs:6,sm:10,xl:15}},l.a.createElement(R.a,{component:"h2",mb:{xs:3,xl:6},color:"text.primary",fontWeight:O.b.REGULAR,fontSize:{xs:24,xl:26}},l.a.createElement(N.a,{id:"common.signup"}))),l.a.createElement(m.a,{value:r,onChange:function(e,a){c(a)},indicatorColor:"primary",textColor:"primary","aria-label":"simple tabs example",className:d.muiTabsFull},l.a.createElement(i.a,Object.assign({className:d.muiTab,label:"aws cognito"},s(1))),l.a.createElement(i.a,Object.assign({className:d.muiTab,label:"jwt auth"},s(2))),l.a.createElement(i.a,Object.assign({className:d.muiTab,label:"firebase"},s(0)))),l.a.createElement(l.a.Fragment,null,0===r&&l.a.createElement(q,null),1===r&&l.a.createElement(D,null),2===r&&l.a.createElement(U,null)))))}}}]);
//# sourceMappingURL=82.be58c141.chunk.js.map