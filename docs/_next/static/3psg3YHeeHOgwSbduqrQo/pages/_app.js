(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),u=n.n(o),i=n("wx14"),c=(n("17x9"),n("OKji")),l=n("aXM8"),f=n("hfi/");var d=function(e){var t=e.children,n=e.theme,r=Object(l.a)(),o=a.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(i.a)({},e,{},t)}(r,n);return null!=e&&(e[f.a]=null!==r),e}),[n,r]);return a.a.createElement(c.a.Provider,{value:o},t)},s=n("H2TA"),p={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},m=function(e){return Object(i.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var v=Object(s.a)((function(e){return{"@global":{html:p,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(i.a)({margin:0},m(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)})),h=n("viY9"),y=n("dl/7"),b=Object(h.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:y.a.A400},background:{default:"#fff"}}}),g=a.a.createElement;function w(e){var t=e.Component,n=e.pageProps;return a.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),g(a.a.Fragment,null,g(u.a,null,g("title",null,"My page"),g("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),g(d,{theme:b},g(v,null),g(t,n)))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var l=d[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],s=r[l]||new Set;s.has(f)?o=!1:(s.add(f),r[l]=s)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=o.default();function m(e){var t=e.children;return a.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:s,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=p.rewind,t.default=m},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),s=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){u(m,l);var d,p=(d=m,function(){var e,t=c(d);if(f()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function m(e){var o;return r(this,m),o=p.call(this,e),s&&(t.add(a(o)),n(a(o))),o}return o(m,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(m,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),m}(d.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("kG2m");e.exports=function(e){return r(e)||a(e)||o()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[[0,0,2,1,3]]]);