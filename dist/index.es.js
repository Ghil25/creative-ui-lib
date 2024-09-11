import"react";import{createTheme as e,ThemeProvider as t,Button as n}from"@mui/material";import{jsx as r}from"react/jsx-runtime";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i,a={exports:{}},f={exports:{}},c={};var u,s,l,p,d,y,m,h,b,x,g,v,S,F,w={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function E(){return s||(s=1,"production"===process.env.NODE_ENV?f.exports=function(){if(i)return c;i=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,f=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,x=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var i=e.$$typeof;switch(i){case t:switch(e=e.type){case s:case l:case r:case a:case o:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case h:case m:case f:return e;default:return i}}case n:return i}}}function F(e){return S(e)===l}return c.AsyncMode=s,c.ConcurrentMode=l,c.ContextConsumer=u,c.ContextProvider=f,c.Element=t,c.ForwardRef=p,c.Fragment=r,c.Lazy=h,c.Memo=m,c.Portal=n,c.Profiler=a,c.StrictMode=o,c.Suspense=d,c.isAsyncMode=function(e){return F(e)||S(e)===s},c.isConcurrentMode=F,c.isContextConsumer=function(e){return S(e)===u},c.isContextProvider=function(e){return S(e)===f},c.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},c.isForwardRef=function(e){return S(e)===p},c.isFragment=function(e){return S(e)===r},c.isLazy=function(e){return S(e)===h},c.isMemo=function(e){return S(e)===m},c.isPortal=function(e){return S(e)===n},c.isProfiler=function(e){return S(e)===a},c.isStrictMode=function(e){return S(e)===o},c.isSuspense=function(e){return S(e)===d},c.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===l||e===a||e===o||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===f||e.$$typeof===u||e.$$typeof===p||e.$$typeof===x||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b)},c.typeOf=S,c}():f.exports=(u||(u=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var m=e.type;switch(m){case c:case u:case r:case i:case o:case l:return m;default:var h=m&&m.$$typeof;switch(h){case f:case s:case y:case d:case a:return h;default:return p}}case n:return p}}}var v=c,S=u,F=f,E=a,O=t,C=s,j=r,T=y,z=d,$=n,A=i,D=o,P=l,U=!1;function _(e){return g(e)===u}w.AsyncMode=v,w.ConcurrentMode=S,w.ContextConsumer=F,w.ContextProvider=E,w.Element=O,w.ForwardRef=C,w.Fragment=j,w.Lazy=T,w.Memo=z,w.Portal=$,w.Profiler=A,w.StrictMode=D,w.Suspense=P,w.isAsyncMode=function(e){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||g(e)===c},w.isConcurrentMode=_,w.isContextConsumer=function(e){return g(e)===f},w.isContextProvider=function(e){return g(e)===a},w.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},w.isForwardRef=function(e){return g(e)===s},w.isFragment=function(e){return g(e)===r},w.isLazy=function(e){return g(e)===y},w.isMemo=function(e){return g(e)===d},w.isPortal=function(e){return g(e)===n},w.isProfiler=function(e){return g(e)===i},w.isStrictMode=function(e){return g(e)===o},w.isSuspense=function(e){return g(e)===l},w.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===u||e===i||e===o||e===l||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===a||e.$$typeof===f||e.$$typeof===s||e.$$typeof===h||e.$$typeof===b||e.$$typeof===x||e.$$typeof===m)},w.typeOf=g}()),w)),f.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function O(){if(p)return l;p=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return l=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(r,o){for(var i,a,f=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))t.call(i,u)&&(f[u]=i[u]);if(e){a=e(i);for(var s=0;s<a.length;s++)n.call(i,a[s])&&(f[a[s]]=i[a[s]])}}return f},l}function C(){if(y)return d;y=1;return d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function j(){return h?m:(h=1,m=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var T=E();a.exports=function(){if(v)return g;v=1;var e=E(),t=O(),n=C(),r=j(),o=function(){if(x)return b;x=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=C(),n={},r=j();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,f,c){if("production"!==process.env.NODE_ENV)for(var u in o)if(r(o,u)){var s;try{if("function"!=typeof o[u]){var l=Error((f||"React class")+": "+a+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}s=o[u](i,u,f,a,null,t)}catch(e){s=e}if(!s||s instanceof Error||e((f||"React class")+": type specification of "+a+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in n)){n[s.message]=!0;var p=c?c():"";e("Failed "+a+" type: "+s.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},b=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),g=function(f,c){var u="function"==typeof Symbol&&Symbol.iterator,s="@@iterator",l="<<anonymous>>",p={array:h("array"),bigint:h("bigint"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:m(a),arrayOf:function(e){return m((function(t,r,o,i,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var f=t[r];if(!Array.isArray(f))return new y("Invalid "+i+" `"+a+"` of type `"+g(f)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<f.length;c++){var u=e(f,c,o,i,a+"["+c+"]",n);if(u instanceof Error)return u}return null}))},element:m((function(e,t,n,r,o){var i=e[t];return f(i)?null:new y("Invalid "+r+" `"+o+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(t,n,r,o,i){var a=t[n];return e.isValidElementType(a)?null:new y("Invalid "+o+" `"+i+"` of type `"+g(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l;return new y("Invalid "+o+" `"+i+"` of type `"+((f=t[n]).constructor&&f.constructor.name?f.constructor.name:l)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var f;return null}))},node:m((function(e,t,n,r,o){return x(e[t])?null:new y("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,o,i,a,f){if("function"!=typeof e)return new y("Property `"+f+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var c=t[o],u=g(c);if("object"!==u)return new y("Invalid "+a+" `"+f+"` of type `"+u+"` supplied to `"+i+"`, expected an object.");for(var s in c)if(r(c,s)){var l=e(c,s,i,a,f+"."+s,n);if(l instanceof Error)return l}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],f=0;f<e.length;f++)if(d(a,e[f]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new y("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+t+"."),a}return m((function(t,o,i,a,f){for(var c=[],u=0;u<e.length;u++){var s=(0,e[u])(t,o,i,a,f,n);if(null==s)return null;s.data&&r(s.data,"expectedType")&&c.push(s.data.expectedType)}return new y("Invalid "+a+" `"+f+"` supplied to `"+i+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,o,i,a){var f=t[r],c=g(f);if("object"!==c)return new y("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var s=e[u];if("function"!=typeof s)return b(o,i,a,u,v(s));var l=s(f,u,o,i,a+"."+u,n);if(l)return l}return null}))},exact:function(e){return m((function(o,i,a,f,c){var u=o[i],s=g(u);if("object"!==s)return new y("Invalid "+f+" `"+c+"` of type `"+s+"` supplied to `"+a+"`, expected `object`.");var l=t({},o[i],e);for(var p in l){var d=e[p];if(r(e,p)&&"function"!=typeof d)return b(a,f,c,p,v(d));if(!d)return new y("Invalid "+f+" `"+c+"` key `"+p+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(u,p,a,f,c+"."+p,n);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function o(o,a,f,u,s,p,d){if(u=u||l,p=p||f,d!==n){if(c){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var h=u+":"+f;!t[h]&&r<3&&(i("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[h]=!0,r++)}}return null==a[f]?o?null===a[f]?new y("The "+s+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`."):new y("The "+s+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(a,f,u,s,p)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function h(e){return m((function(t,n,r,o,i,a){var f=t[n];return g(f)!==e?new y("Invalid "+o+" `"+i+"` of type `"+v(f)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,o){return new y((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function x(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(x);if(null===e||f(e))return!0;var t=function(e){var t=e&&(u&&e[u]||e[s]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!x(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!x(o[1]))return!1}return!0;default:return!1}}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return y.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},g}()(T.isElement,!0)}else a.exports=function(){if(F)return S;F=1;var e=C();function t(){}function n(){}return n.resetWarningCache=t,S=function(){function r(t,n,r,o,i,a){if(a!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function o(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();var z=o(a.exports);const $=Object.freeze({mode:"light",primary:{100:"#FFE6D9",200:"#FFC7B4",300:"#FFA28F",400:"#FF7F73",main:"#FF4545",600:"#DB3241",700:"#B7223C",800:"#931636",900:"#7A0D33"},secondary:{100:"#E2F0FC",200:"#C6E0F9",300:"#A5C7EF",400:"#89AEE0",main:"#638BCC",600:"#486BAF",700:"#314F92",800:"#1F3676",900:"#132461"},tertiary:{main:"#FF6969"},quaternary:{main:"#DFDFDF"},info:{100:"#CBFEFA",200:"#97FDFD",300:"#63EEF9",400:"#3DD9F4",main:"#00B9ED",600:"#0090CB",700:"#006CAA",800:"#004D89",900:"#003771"},warning:{100:"#FFF6D8",200:"#FFEBB2",300:"#FFDD8B",400:"#FFCF6F",main:"#FFB83F",600:"#DB942E",700:"#B7731F",800:"#935614",900:"#7A400C"},error:{100:"#FEE8E2",200:"#FECCC5",300:"#FDAAA7",400:"#FB9197",main:"#F96D82",600:"#D64F70",700:"#B33660",800:"#902251",900:"#771448"},success:{100:"#EFFDD6",200:"#DAFCAF",300:"#BEF685",400:"#A2ED65",main:"#78E236",600:"#59C227",700:"#3EA21B",800:"#288311",900:"#186C0A"},disabled:{main:"#DFE3E8"},neutral:{main:"#DFE3E8"},icon:{main:"#486BAF"},text:{main:"#4E4E4E"},background:{default:"#FBFBFC"},white:{main:"#FFFFF"}});!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* lato-latin-ext-400-normal */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(./files/lato-latin-ext-400-normal.woff2) format('woff2'), url(./files/lato-latin-ext-400-normal.woff) format('woff');\n  unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n\n/* lato-latin-400-normal */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(./files/lato-latin-400-normal.woff2) format('woff2'), url(./files/lato-latin-400-normal.woff) format('woff');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}");const A=e({palette:$,typography:Object.freeze({fontFamily:["Lato"].join(","),at:{fontSize:18,color:"#000",fontStyle:"bold"},h1:{fontWeight:800,lineHeight:"80px",fontSize:"64px","@media only screen and (max-width: 700px)":{lineHeight:"50px",fontSize:"40px"}},h2:{fontWeight:800,lineHeight:"64px",fontSize:"48px","@media only screen and (max-width: 700px)":{lineHeight:"42.7px",fontSize:"24px"}},h3:{fontWeight:700,lineHeight:"48px",fontSize:"32px","@media only screen and (max-width: 700px)":{lineHeight:"24px",fontSize:"22px"}},h4:{fontWeight:700,lineHeight:"36px",fontSize:"24px","@media only screen and (max-width: 700px)":{lineHeight:"30px",fontSize:"20px"}},h5:{fontWeight:700,lineHeight:"30px",fontSize:"20px","@media only screen and (max-width: 700px)":{lineHeight:"27px",fontSize:"18px"}},h6:{fontWeight:700,lineHeight:"28px",fontSize:"18px","@media only screen and (max-width: 700px)":{lineHeight:"26.4px",fontSize:"16px"}},subtitle1:{fontWeight:400,lineHeight:"24px",fontSize:"16px","@media only screen and (max-width: 700px)":{lineHeight:"22px",fontSize:"15px"}},subtitle2:{fontWeight:600,lineHeight:"22px",fontSize:"14px","@media only screen and (max-width: 700px)":{lineHeight:"20px",fontSize:"13px"}},body1:{lineHeight:"24px",fontSize:"16px","@media only screen and (max-width: 700px)":{lineHeight:"22px",fontSize:"14px"}},body2:{lineHeight:"22px",fontSize:"14px","@media only screen and (max-width: 700px)":{lineHeight:"20px",fontSize:"12px"}},small:{fontSize:"10px",fontWeight:600,lineHeight:"0",textAlign:"center","@media only screen and (max-width: 700px)":{fontSize:"8px"}},caption:{fontWeight:400,lineHeight:"24px",fontSize:"12px","@media only screen and (max-width: 700px)":{fontSize:"14px"}},overline:{fontWeight:400,lineHeight:"24px",fontSize:"16px",textTransform:"uppercase","@media only screen and (max-width: 700px)":{fontSize:"14px"}},buttonLarge:{fontWeight:700,lineHeight:"26px",fontSize:"15px",textTransform:"uppercase","@media only screen and (max-width: 700px)":{fontSize:"13px"}},buttonMedium:{fontWeight:700,lineHeight:"24px",fontSize:"14px",textTransform:"uppercase","@media only screen and (max-width: 700px)":{fontSize:"12px"}},buttonSmall:{fontWeight:700,lineHeight:"22px",fontSize:"13px",textTransform:"uppercase","@media only screen and (max-width: 700px)":{fontSize:"11px"}}}),breakpoints:Object.freeze({mobile:0,tablet:600,laptop:900,desktop:1200,largeDesktop:1600}),components:Object.freeze({MuiButton:{styleOverrides:{root:{borderRadius:"10px",fontWeight:"700"}}}})}),D=({children:e})=>r(t,{theme:A,children:e}),P=({label:e="Button",variant:t="contained",disabled:o=!1,color:i="primary",size:a="medium",children:f,...c})=>r(D,{children:r(n,{variant:t,color:i,disabled:o,size:a,...c,children:f||e})});P.propTypes={label:z.string,variant:z.oneOf(["contained","outlined","text"]),disabled:z.bool,color:z.oneOfType([z.oneOf(["inherit","default","primary","secondary","error","info","success","warning"]),z.string]),size:z.oneOf(["small","medium","large"])};export{P as Button};
//# sourceMappingURL=index.es.js.map
