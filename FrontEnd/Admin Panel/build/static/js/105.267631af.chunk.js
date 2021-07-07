/*! For license information please see 105.267631af.chunk.js.LICENSE.txt */
(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[105],{1888:function(e,t,a){var n;"undefined"!=typeof self&&self,e.exports=(n=a(0),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=c(o),s=c(a(2)),l=c(a(5)),u=a(6);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.fields,r=e.type,o=e.isValid,i=e.disabled,s=e.filterKeyCodes,l=e.forceUppercase,c=e.value;l&&(c=c.toUpperCase()),a.state={value:c,fields:n,type:r,input:[],isValid:o,disabled:i,filterKeyCodes:s,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var d=0;d<Number(a.state.fields);d+=1)if(d<32){var p=a.state.value[d]||"";a.state.input.push(p)}return a.textInput=[],a.uuid=(0,u.uuidv4)(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(e){var t=this.props,a=t.touch,n=t.untouch,r=t.name;"function"==typeof a&&"function"==typeof n&&(""===e?a(r):n(r))}},{key:"handleChange",value:function(e){var t=this,a=this.props.filterChars,n=String(e.target.value);this.props.forceUppercase&&(n=n.toUpperCase()),"number"===this.state.type&&(n=n.replace(/[^\d]/g,""));var r=n=n.split("").filter((function(e){return!a.includes(e)})).join("");if(""!==n){var o=this.state.input.slice();n.length>1?n.split("").map((function(a,n){return Number(e.target.dataset.id)+n<t.props.fields&&(o[Number(e.target.dataset.id)+n]=a),!1})):o[Number(e.target.dataset.id)]=n,o.map((function(e,a){return t.textInput[a]&&(t.textInput[a].value=e),!1}));var i=this.textInput[e.target.dataset.id<o.length?Number(e.target.dataset.id)+1:e.target.dataset.id];i&&(i.focus(),i.select()),r=o.join(""),this.setState({value:o.join(""),input:o})}this.props.onChange&&r&&this.props.onChange(r),this.handleTouch(r)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),a=this.textInput[t+1],n=this.textInput[t-1],r=void 0,o=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map((function(t){if(t===e.keyCode)return e.preventDefault(),!0})),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(r=this.state.input.slice())[t]="",o=r.join(""),this.setState({value:o,input:r}),""===this.textInput[t].value&&n&&(n.focus(),n.select()),this.props.onChange&&this.props.onChange(o);break;case 37:e.preventDefault(),n&&(n.focus(),n.select());break;case 39:e.preventDefault(),a&&(a.focus(),a.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(o)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=t.style,o=void 0===r?{}:r,s=t.inputStyle,u=void 0===s?{}:s,c=t.inputStyleInvalid,d=void 0===c?{}:c,p=t.type,f=t.autoFocus,m=t.pattern,b=t.inputMode,h=this.state,y=h.disabled,g=h.input,v=h.isValid,x=h.defaultInputStyle,w={container:o,input:v?u:d};return Object.assign(w.container,{display:"inline-block"}),a||0!==Object.keys(u).length||Object.assign(u,n({},x,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),a||0!==Object.keys(d).length||Object.assign(d,n({},x,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),y&&Object.assign(w.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),i.default.createElement("div",{className:(0,l.default)(a,"react-code-input"),style:w.container},g.map((function(t,a){return i.default.createElement("input",{ref:function(t){e.textInput[a]=t},id:e.uuid+"-"+a,"data-id":a,autoFocus:f&&0===a?"autoFocus":"",value:t,key:"input_"+a,type:p,min:0,max:9,maxLength:g.length===a+1?1:g.length,style:w.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:y,"data-valid":v,pattern:m,inputMode:b})})))}}]),t}();d.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."]},d.propTypes={type:s.default.oneOf(["text","number","password","tel"]),fields:s.default.number,value:s.default.string,onChange:s.default.func,name:s.default.string,touch:s.default.func,untouch:s.default.func,className:s.default.string,isValid:s.default.bool,disabled:s.default.bool,style:s.default.object,inputStyle:s.default.object,inputStyleInvalid:s.default.object,autoFocus:s.default.bool,forceUppercase:s.default.bool,filterKeyCodes:s.default.array,filterChars:s.default.array,pattern:s.default.string,inputMode:s.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"])},t.default=d},function(e,t){e.exports=n},function(e,t,a){e.exports=a(3)()},function(e,t,a){"use strict";var n=a(4);function r(){}e.exports=function(){function e(e,t,a,r,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=r,a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]))},3064:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(23),o=a(0),i=a.n(o),s=a(356),l=a(522),u=a(270),c=a(1426),d=a(1427),p=a(1888),f=a.n(p),m=a(18),b=a(22),h=a(44),y=a(412),g=a(68),v=a(16),x=a(82),w=a(1385),O=a(167),j=a(9),E=function(e){var t=Object(c.d)(e),a=Object(r.a)(t,2),n=a[0],o=a[1],s=o.error&&o.touched?o.error:"";return i.a.createElement(l.a,Object.assign({},e,n,{helperText:s,error:!!s}))},C=d.a({newPassword:d.b().required(i.a.createElement(v.a,{id:"validation.enterNewPassword"})),confirmPassword:d.b().required(i.a.createElement(v.a,{id:"validation.reTypePassword"}))});t.default=function(e){var t=Object(m.d)(),a=Object(h.h)(),l=Object(o.useState)(""),d=Object(r.a)(l,2),p=d[0],P=d[1],k=Object(w.a)().messages,S=Object(O.a)((function(e){var t;return{imgRoot:{cursor:"pointer",display:"inline-block",width:140},cardRoot:(t={maxWidth:"32rem",width:"100%",overflow:"hidden",position:"relative",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",textAlign:"center",padding:24},Object(n.a)(t,e.breakpoints.up("sm"),{padding:40}),Object(n.a)(t,e.breakpoints.up("md"),{padding:48}),Object(n.a)(t,e.breakpoints.up("xl"),{padding:64}),Object(n.a)(t,"&:before",{content:"''",position:"absolute",left:0,right:0,top:0,width:130,height:9,borderBottomRightRadius:80,borderBottomLeftRadius:80,marginRight:"auto",marginLeft:"auto",backgroundColor:e.palette.primary.main}),t),formRoot:{position:"relative"},myTextFieldRoot:{width:"100%"},btnRoot:{borderRadius:e.overrides.MuiCard.root.borderRadius,width:"100%",fontWeight:j.b.MEDIUM,fontSize:16,paddingTop:12,paddingBottom:12,textTransform:"capitalize"}}}))(e);return i.a.createElement(g.a,{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},i.a.createElement(g.a,{mb:{xs:6,md:8,xl:18},textAlign:"center"},i.a.createElement("img",{className:S.imgRoot,src:"/assets/images/logo-white-with-name.png",alt:"crema-logo"})),i.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},i.a.createElement(s.a,{className:S.cardRoot},i.a.createElement(g.a,{component:"h2",mb:{xs:6,xl:8},color:"text.primary",fontWeight:j.b.REGULAR,fontSize:{xs:24,sm:26},textTransform:"uppercase"},i.a.createElement(v.a,{id:"common.resetPassword"})),i.a.createElement(c.c,{validateOnChange:!0,initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},validationSchema:C,onSubmit:function(n,r){var o=r.setErrors,s=r.resetForm,l=r.setSubmitting,u=e.location.state.email;6!==p.length?t(Object(b.a)(k["validation.pinLength"])):n.newPassword!==n.confirmPassword?o({confirmPassword:i.a.createElement(v.a,{id:"validation.passwordMisMatch"})}):(l(!0),t(Object(b.L)(u,p,n.newPassword,a)),s(),l(!1))}},(function(e){var t=e.isSubmitting;return i.a.createElement(c.b,{className:S.formRoot,noValidate:!0,autoComplete:"off"},i.a.createElement(g.a,{mb:{xs:5,lg:8}},i.a.createElement(g.a,{mb:6,fontSize:{xs:16,sm:18}},i.a.createElement(x.a,null,i.a.createElement(v.a,{id:"common.verificationMessage"}))),i.a.createElement(f.a,{type:"password",value:p,fields:6,onChange:function(e){return P(e)}})),i.a.createElement(g.a,{mb:{xs:5,lg:8}},i.a.createElement(E,{name:"newPassword",label:i.a.createElement(v.a,{id:"common.newPassword"}),className:S.myTextFieldRoot,variant:"outlined",type:"password"})),i.a.createElement(g.a,{mb:{xs:5,lg:8}},i.a.createElement(E,{name:"confirmPassword",label:i.a.createElement(v.a,{id:"common.retypePassword"}),className:S.myTextFieldRoot,variant:"outlined",type:"password"})),i.a.createElement(u.a,{variant:"contained",type:"submit",disabled:t,color:"secondary",className:S.btnRoot},i.a.createElement(v.a,{id:"common.resetMyPassword"})))})),i.a.createElement(y.a,null))))}}}]);
//# sourceMappingURL=105.267631af.chunk.js.map