(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[114],{1558:function(t,e,n){"use strict";t.exports=n(2401)},2401:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=n(0)},function(t,e,n){t.exports=n(2)()},function(t,e,n){"use strict";var i=n(3);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,r,a){if(a!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return N}));var i="notification-item",o="bottom-left",r="bottom-right",a="bottom-center",c="top-left",u="top-right",s="top-center",f="center",l="success",p="danger",d="info",m="default",h="warning",y="timeout",v=function(t){return null==t};function b(t){return t===o||t===r||t===a}function g(t){return t===c||t===u||t===s}function S(t){var e=t.type,n=t.content,o=t.userDefinedTypes,r=[i];if(n)return r;if(v(o))return function(t){switch(t){case m:return[i,"notification-default"];case l:return[i,"notification-success"];case p:return[i,"notification-danger"];case h:return[i,"notification-warning"];case d:return[i,"notification-info"];default:return[i]}}(e);var a=o.find((function(t){return t.name===e}));return r.concat(a.htmlClasses)}function E(t,e){var n=t.duration,i=t.timingFunction,o=t.delay;return"".concat(n,"ms ").concat(e," ").concat(i," ").concat(o,"ms")}function w(t,e){var n=e.duration,i=e.timingFunction,o=e.delay,r=t||{};return v(r.duration)&&(r.duration=n),v(r.timingFunction)&&(r.timingFunction=i),v(r.delay)&&(r.delay=o),r}var O=n(0),k=n.n(O),N=new function(){var t=this;return this.types=null,this.counter=0,this.add=function(){},this.addNotification=function(e){var n=t.types;return t.counter+=1,t.add(function(t,e){var n=t,i=n.id,o=n.type,r=n.insert,a=n.content,c=n.container,u=n.animationIn,s=n.animationOut,f=n.slidingEnter,y=n.slidingExit,b=n.touchRevert,g=n.touchSlidingExit,S=n.dismiss,E=n.width,O=n.onRemoval;n.id=i||N.counter,n.type=a?null:o.toLowerCase(),e&&!a&&(n.userDefinedTypes=function(t,e){var n=t.content,i=t.type;if(!n&&i!==l&&i!==p&&i!==d&&i!==m&&i!==h&&e)return e}(n,e)),v(E)||(n.width=E),n.container=c.toLowerCase(),n.insert=(r||"top").toLowerCase(),n.dismiss=function(t){var e=t,n={duration:0,click:!0,touch:!0,onScreen:!1,waitForAnimation:!1,showIcon:!1};return e?(Object.keys(n).forEach((function(t){v(e[t])&&(e[t]=n[t])})),e):n}(S),n.animationIn=u||[],n.animationOut=s||[],n.onRemoval=O||function(){};var k=function(t,e,n){return{duration:t,timingFunction:e,delay:n}};n.slidingEnter=w(f,k(600,"linear",0)),n.slidingExit=w(y,k(600,"linear",0)),n.touchRevert=w(b,k(600,"linear",0));var T=g||{},j=T.swipe,R=T.fade;return n.touchSlidingExit=T,n.touchSlidingExit.swipe=w(j||{},k(600,"linear",0)),n.touchSlidingExit.fade=w(R||{},k(300,"linear",0)),n}(e,n))},this.removeNotification=function(){},this.register=function(e){var n=e.addNotification,i=e.removeNotification,o=e.types;t.add=n,t.removeNotification=i,t.types=o},this},T=n(1),j=n.n(T),R=function(t,e){var n,i,o=e;this.pause=function(){clearTimeout(n),o-=Date.now()-i},this.resume=function(){i=Date.now(),clearTimeout(n),n=setTimeout(t,o)},this.clear=function(){clearTimeout(n)},this.resume()};function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return n}}(t,e)||A(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function I(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?z(t):e}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(o,t);var e,n,i=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=U(t);if(e){var o=U(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return W(this,n)}}(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=i.call(this,t)).rootElementRef=k.a.createRef(),e.onClick=e.onClick.bind(z(e)),e.onTouchStart=e.onTouchStart.bind(z(e)),e.onTouchMove=e.onTouchMove.bind(z(e)),e.onTouchEnd=e.onTouchEnd.bind(z(e)),e.onMouseEnter=e.onMouseEnter.bind(z(e)),e.onMouseLeave=e.onMouseLeave.bind(z(e));var n=t.notification.width;return e.state={parentStyle:{height:0,overflow:"hidden",width:n?"".concat(n,"px"):"100%"},htmlClassList:S(t.notification),animationPlayState:"running",touchEnabled:!0},e}return e=o,(n=[{key:"componentWillUnmount",value:function(){this.timer&&this.timer.clear()}},{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.notification,i=e.count,o=n.dismiss,r=o.duration,a=o.onScreen,c=this.rootElementRef.current.scrollHeight,u=function(t,e){return!(e<=1)&&e>1&&("top"===t.insert&&g(t.container)||"bottom"===t.insert&&b(t.container)||t.container===f)}(n,i),s=function(){r&&!a&&(t.timer=new R((function(){return t.removeNotification(y)}),r))};this.setState((function(t){return{parentStyle:{width:t.parentStyle.width,height:"".concat(c,"px"),transition:u?E(n.slidingEnter,"height"):"10ms height"},onTransitionEnd:s}}),(function(){requestAnimationFrame((function(){t.setState((function(t){return{htmlClassList:[].concat(L(n.animationIn),L(t.htmlClassList))}}))}))}))}},{key:"componentDidUpdate",value:function(t){var e=t.removed;this.props.removed&&!e&&this.removeNotification("manual")}},{key:"removeNotification",value:function(t){var e=this,n=this.props,i=n.notification,o=n.toggleRemoval,r=i.id,a=i.onRemoval,c=i.dismiss.waitForAnimation,u=[].concat(L(i.animationOut),L(S(i))),s=function(){return o(r,(function(){return a(r,t)}))},f={height:0,transition:E(i.slidingExit,"height")};return c?this.setState((function(t){var n=t.parentStyle.width;return{htmlClassList:u,onAnimationEnd:function(){e.setState({parentStyle:_({width:n},f),onTransitionEnd:s})}}})):this.setState((function(t){return{parentStyle:_({width:t.parentStyle.width},f),onTransitionEnd:s,htmlClassList:u}}))}},{key:"onClick",value:function(){var t=this.props.notification.dismiss;(t.click||t.showIcon)&&this.removeNotification("click")}},{key:"onTouchStart",value:function(t){var e=C(t.touches,1)[0].pageX;this.setState((function(t){var n=t.parentStyle;return{startX:e,currentX:e,parentStyle:_(_({},n),{},{position:"relative"})}}))}},{key:"onTouchMove",value:function(t){var e=this,n=t.touches,i=this.state.startX,o=this.props,r=o.toggleRemoval,a=o.notification,c=a.id,u=a.onRemoval,s=a.slidingExit,f=a.touchSlidingExit,l=f.swipe,p=f.fade,d=C(n,1)[0].pageX,m=d-i,h=this.rootElementRef.current.offsetWidth,y=window.innerWidth+h,v="".concat(d-i>=0?y:-y,"px");if(function(t,e){return Math.abs(t)>=.4*e}(m,h)){var b=E(l,"left"),g=E(p,"opacity"),S=function(){r(c,(function(){return u(c,"touch")}))};return this.setState((function(t){return{touchEnabled:!1,parentStyle:_(_({},t.parentStyle),{},{left:v,opacity:0,transition:"".concat(b,", ").concat(g)}),onTransitionEnd:function(){e.setState((function(t){return{parentStyle:_(_({},t.parentStyle),{},{height:0,transition:E(s,"height")}),onTransitionEnd:S}}))}}}))}return this.setState((function(t){var e=t.parentStyle;return{currentX:d,parentStyle:_(_({},e),{},{left:"".concat(0+m,"px")})}}))}},{key:"onTouchEnd",value:function(){var t=this.props.notification.touchRevert;this.setState((function(e){return{parentStyle:_(_({},e.parentStyle),{},{left:0,transition:E(t,"left")})}}))}},{key:"onMouseEnter",value:function(){this.timer?this.timer.pause():this.setState({animationPlayState:"paused"})}},{key:"onMouseLeave",value:function(){this.timer?this.timer.resume():this.setState({animationPlayState:"running"})}},{key:"renderTimer",value:function(){var t=this,e=this.props.notification.dismiss,n=e.duration,i=e.onScreen,o=this.state.animationPlayState;if(n&&i){var r={animationName:"timer",animationDuration:"".concat(n,"ms"),animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:0,animationPlayState:o};return k.a.createElement("div",{className:"timer"},k.a.createElement("div",{className:"timer-filler",onAnimationEnd:function(){return t.removeNotification(y)},style:r}))}}},{key:"renderCustomContent",value:function(){var t=this.state.htmlClassList,e=this.props.notification,n=e.id,i=e.content,o=e.dismiss,r=o.duration,a=o.pauseOnHover,c=r>0&&a;return k.a.createElement("div",{className:"".concat([].concat(L(t),["n-child"]).join(" ")),onMouseEnter:c?this.onMouseEnter:null,onMouseLeave:c?this.onMouseLeave:null},k.a.isValidElement(i)?i:k.a.createElement(i,{id:n}))}},{key:"renderNotification",value:function(){var t=this.props.notification,e=t.title,n=t.message,i=t.dismiss,o=i.showIcon,r=i.duration,a=i.pauseOnHover,c=this.state.htmlClassList,u=r>0&&a;return k.a.createElement("div",{className:"".concat([].concat(L(c),["n-child"]).join(" ")),onMouseEnter:u?this.onMouseEnter:null,onMouseLeave:u?this.onMouseLeave:null},k.a.createElement("div",{className:"notification-content"},o&&k.a.createElement("div",{className:"notification-close",onClick:this.onClick}),e&&k.a.createElement("div",{className:"notification-title"},e),k.a.createElement("div",{className:"notification-message"},n),this.renderTimer()))}},{key:"render",value:function(){var t=this.props.notification,e=t.content,n=t.dismiss.click,i=this.state,o=i.parentStyle,r=i.onAnimationEnd,a=i.onTransitionEnd,c=i.touchEnabled;return k.a.createElement("div",{ref:this.rootElementRef,onClick:n?this.onClick:null,className:"notification-parent",style:o,onAnimationEnd:r,onTransitionEnd:a,onTouchStart:c?this.onTouchStart:null,onTouchMove:c?this.onTouchMove:null,onTouchEnd:c?this.onTouchEnd:null},e?this.renderCustomContent():this.renderNotification())}}])&&I(e.prototype,n),o}(k.a.Component);X.propTypes={toggleRemoval:j.a.func.isRequired,count:j.a.number.isRequired,removed:j.a.bool};var q=X;function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t){return function(t){if(Array.isArray(t))return V(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function $(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Y(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?G(t):e}function G(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n(4);var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(l,t);var e,n,i=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=K(t);if(e){var o=K(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Y(this,n)}}(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this,t)).state={isMobile:t.isMobile,breakpoint:t.breakpoint,notifications:[]},e.add=e.add.bind(G(e)),e.remove=e.remove.bind(G(e)),e.toggleRemoval=e.toggleRemoval.bind(G(e)),e.handleResize=e.handleResize.bind(G(e)),e}return e=l,(n=[{key:"componentDidMount",value:function(){var t=this.props.types;N.register({addNotification:this.add,removeNotification:this.remove,types:t}),this.setState({width:window.innerWidth}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.setState({width:window.innerWidth})}},{key:"add",value:function(t){return this.setState((function(e){var n=e.notifications;return{notifications:"top"===t.insert?[t].concat(J(n)):[].concat(J(n),[t])}})),t.id}},{key:"remove",value:function(t){this.setState((function(e){return{notifications:e.notifications.map((function(e){return e.id===t&&(e.removed=!0),e}))}}))}},{key:"toggleRemoval",value:function(t,e){this.setState((function(e){return{notifications:e.notifications.filter((function(e){return e.id!==t}))}}),e)}},{key:"renderNotifications",value:function(t){var e=this;return t.map((function(n){return k.a.createElement(q,{id:n.id,key:n.id,notification:n,toggleRemoval:e.toggleRemoval,count:t.length,removed:n.removed})}))}},{key:"renderMobileNotifications",value:function(t){var e=t.className,n=t.id,i=function(t){var e=[],n=[];return t.forEach((function(t){var i=t.container;g(i)||"center"===i?e.push(t):b(i)&&n.push(t)})),{top:e,bottom:n}}(this.state.notifications),o=this.renderNotifications(i.top),r=this.renderNotifications(i.bottom);return k.a.createElement("div",{id:n,key:"mobile",className:"react-notification-root ".concat(e||"")},k.a.createElement("div",{className:"notification-container-mobile-top"},o),k.a.createElement("div",{className:"notification-container-mobile-bottom"},r))}},{key:"renderScreenNotifications",value:function(t){var e=t.className,n=t.id,i=function(t){var e=[],n=[],i=[],l=[],p=[],d=[],m=[];return t.forEach((function(t){var h=t.container;h===c?e.push(t):h===u?n.push(t):h===s?i.push(t):h===o?l.push(t):h===r?p.push(t):h===a?d.push(t):h===f&&m.push(t)})),{topLeft:e,topRight:n,topCenter:i,bottomLeft:l,bottomRight:p,bottomCenter:d,center:m}}(this.state.notifications),l=this.renderNotifications(i.topLeft),p=this.renderNotifications(i.topRight),d=this.renderNotifications(i.topCenter),m=this.renderNotifications(i.bottomLeft),h=this.renderNotifications(i.bottomRight),y=this.renderNotifications(i.bottomCenter),v=this.renderNotifications(i.center);return k.a.createElement("div",{id:n,key:"screen",className:"react-notification-root ".concat(e||"")},k.a.createElement("div",{className:"notification-container-top-left"},l),k.a.createElement("div",{className:"notification-container-top-right"},p),k.a.createElement("div",{className:"notification-container-bottom-left"},m),k.a.createElement("div",{className:"notification-container-bottom-right"},h),k.a.createElement("div",{className:"notification-container-top-center"},d),k.a.createElement("div",{className:"notification-container-center"},k.a.createElement("div",{className:"center-inner"},v)),k.a.createElement("div",{className:"notification-container-bottom-center"},y))}},{key:"render",value:function(){var t=this.props.isMobile,e=this.state,n=e.width,i=e.breakpoint;return t&&n<=i?this.renderMobileNotifications(this.props):this.renderScreenNotifications(this.props)}}])&&$(e.prototype,n),l}(k.a.Component);Q.propTypes={isMobile:j.a.bool,breakpoint:j.a.number,types:j.a.array},Q.defaultProps={isMobile:!0,breakpoint:768};var Z=Q;e.default=Z}])}}]);
//# sourceMappingURL=114.a916270c.chunk.js.map