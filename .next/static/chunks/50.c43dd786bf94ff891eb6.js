(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{"1Yj4":function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var i,o=e("q1tI"),a=e.n(o),s=e("17x9"),c=e.n(s),u=e("TSYQ"),f=e.n(u);var l="object"===typeof window&&window.Element||function(){};c.a.oneOfType([c.a.string,c.a.func,function(n,t,e){if(!(n[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+e+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]);var p=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var d={tag:p,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},h=function(n){var t=n.className,e=n.cssModule,o=n.fluid,s=n.tag,c=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["className","cssModule","fluid","tag"]),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var l=function(n,t){return void 0===n&&(n=""),void 0===t&&(t=i),t?n.split(" ").map((function(n){return t[n]||n})).join(" "):n}(f()(t,u),e);return a.a.createElement(s,r({},c,{className:l}))};h.propTypes=d,h.defaultProps={tag:"div"};t.a=h},"2SVd":function(n,t,e){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},"5oMp":function(n,t,e){"use strict";n.exports=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n}},"9rSQ":function(n,t,e){"use strict";var r=e("xTJ+");function i(){this.handlers=[]}i.prototype.use=function(n,t){return this.handlers.push({fulfilled:n,rejected:t}),this.handlers.length-1},i.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},i.prototype.forEach=function(n){r.forEach(this.handlers,(function(t){null!==t&&n(t)}))},n.exports=i},CgaS:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("MLWZ"),o=e("9rSQ"),a=e("UnBK"),s=e("SntB");function c(n){this.defaults=n,this.interceptors={request:new o,response:new o}}c.prototype.request=function(n){"string"===typeof n?(n=arguments[1]||{}).url=arguments[0]:n=n||{},(n=s(this.defaults,n)).method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=[a,void 0],e=Promise.resolve(n);for(this.interceptors.request.forEach((function(n){t.unshift(n.fulfilled,n.rejected)})),this.interceptors.response.forEach((function(n){t.push(n.fulfilled,n.rejected)}));t.length;)e=e.then(t.shift(),t.shift());return e},c.prototype.getUri=function(n){return n=s(this.defaults,n),i(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(n){c.prototype[n]=function(t,e){return this.request(s(e||{},{method:n,url:t,data:(e||{}).data}))}})),r.forEach(["post","put","patch"],(function(n){c.prototype[n]=function(t,e,r){return this.request(s(r||{},{method:n,url:t,data:e}))}})),n.exports=c},DfZB:function(n,t,e){"use strict";n.exports=function(n){return function(t){return n.apply(null,t)}}},HSsa:function(n,t,e){"use strict";n.exports=function(n,t){return function(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];return n.apply(t,e)}}},"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,i,o,a){try{var s=n[o](a),c=s.value}catch(u){return void e(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function s(n){r(a,i,o,s,c,"next",n)}function c(n){r(a,i,o,s,c,"throw",n)}s(void 0)}))}}e.d(t,"a",(function(){return i}))},JEQr:function(n,t,e){"use strict";(function(t){var r=e("xTJ+"),i=e("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(n,t){!r.isUndefined(n)&&r.isUndefined(n["Content-Type"])&&(n["Content-Type"]=t)}var s={adapter:function(){var n;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(n=e("tQ2B")),n}(),transformRequest:[function(n,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(n)||r.isArrayBuffer(n)||r.isBuffer(n)||r.isStream(n)||r.isFile(n)||r.isBlob(n)?n:r.isArrayBufferView(n)?n.buffer:r.isURLSearchParams(n)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):r.isObject(n)?(a(t,"application/json;charset=utf-8"),JSON.stringify(n)):n}],transformResponse:[function(n){if("string"===typeof n)try{n=JSON.parse(n)}catch(t){}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(n){s.headers[n]={}})),r.forEach(["post","put","patch"],(function(n){s.headers[n]=r.merge(o)})),n.exports=s}).call(this,e("8oxB"))},LYNF:function(n,t,e){"use strict";var r=e("OH9c");n.exports=function(n,t,e,i,o){var a=new Error(n);return r(a,t,e,i,o)}},Lmem:function(n,t,e){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},MLWZ:function(n,t,e){"use strict";var r=e("xTJ+");function i(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,t,e){if(!t)return n;var o;if(e)o=e(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(n,t){null!==n&&"undefined"!==typeof n&&(r.isArray(n)?t+="[]":n=[n],r.forEach(n,(function(n){r.isDate(n)?n=n.toISOString():r.isObject(n)&&(n=JSON.stringify(n)),a.push(i(t)+"="+i(n))})))})),o=a.join("&")}if(o){var s=n.indexOf("#");-1!==s&&(n=n.slice(0,s)),n+=(-1===n.indexOf("?")?"?":"&")+o}return n}},OH9c:function(n,t,e){"use strict";n.exports=function(n,t,e,r,i){return n.config=t,e&&(n.code=e),n.request=r,n.response=i,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n}},OTTw:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=r.isStandardBrowserEnv()?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");function i(n){var r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){var e=r.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0}},"Rn+g":function(n,t,e){"use strict";var r=e("LYNF");n.exports=function(n,t,e){var i=e.config.validateStatus;e.status&&i&&!i(e.status)?t(r("Request failed with status code "+e.status,e.config,null,e.request,e)):n(e)}},SntB:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=function(n,t){t=t||{};var e={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(n,t){return r.isPlainObject(n)&&r.isPlainObject(t)?r.merge(n,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(n[i])||(e[i]=c(void 0,n[i])):e[i]=c(n[i],t[i])}r.forEach(i,(function(n){r.isUndefined(t[n])||(e[n]=c(void 0,t[n]))})),r.forEach(o,u),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(n[i])||(e[i]=c(void 0,n[i])):e[i]=c(void 0,t[i])})),r.forEach(s,(function(r){r in t?e[r]=c(n[r],t[r]):r in n&&(e[r]=c(void 0,n[r]))}));var f=i.concat(o).concat(a).concat(s),l=Object.keys(n).concat(Object.keys(t)).filter((function(n){return-1===f.indexOf(n)}));return r.forEach(l,u),e}},TSYQ:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&n.push(a)}else if("object"===o)for(var s in r)e.call(r,s)&&r[s]&&n.push(s)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(n.exports=r)}()},UnBK:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("xAGQ"),o=e("Lmem"),a=e("JEQr");function s(n){n.cancelToken&&n.cancelToken.throwIfRequested()}n.exports=function(n){return s(n),n.headers=n.headers||{},n.data=i(n.data,n.headers,n.transformRequest),n.headers=r.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete n.headers[t]})),(n.adapter||a.adapter)(n).then((function(t){return s(n),t.data=i(t.data,t.headers,n.transformResponse),t}),(function(t){return o(t)||(s(n),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,n.transformResponse))),Promise.reject(t)}))}},YcNB:function(n,t,e){"use strict";e.r(t);var r=e("h4VS"),i=e("q1tI"),o=e.n(i),a=e("vOnD"),s=e("1Yj4"),c=o.a.createElement;function u(){var n=Object(r.a)(["\n    font-size: 22px;\n    font-weight: 300;\n    /* font-family: sans-serif; */\n    margin-bottom: 3rem;\n    line-height: 1.2;\n\n    span {\n        font-style: italic;\n        font-weight: 900;\n    }\n    @media (max-width: 768px) {\n        text-align: justify;\n        font-size: 16px;\n    }\n    @media (max-width: 576px) {\n        line-height: 1.5;\n        text-align: center;\n        font-size: 16px;\n        margin-bottom: 1.5rem;\n    }\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)([""]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n    font-size: 2rem;\n    font-weight: 500;\n    line-height: 40px;\n    letter-spacing: 1px;\n    padding: 10px 0;\n    @media (max-width: 768px) {\n        font-size: 26px;\n        letter-spacing: 1px;\n        font-weight: 500;\n        line-height: 25px;\n    }\n"]);return l=function(){return n},n}function p(){var n=Object(r.a)(["\n    /* margin-left: 20px; */\n    width: 50%;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    @media (max-width: 768px) {\n        width: 100%;\n        margin-left: 0;\n        margin-top: 20px;\n        text-align: center;\n        align-items: center;\n    }\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n    width: 100%;\n    text-align: left;\n    img {\n        width: 100%;\n        height: auto;\n    }\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(["\n    width: 50%;\n    transform: rotate(-5deg);\n    @media (max-width: 768px) {\n        width: 60%;\n    }\n    @media (max-width: 576px) {\n        width: 100%;\n    }\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n    @media (max-width: 768px) {\n        flex-direction: column-reverse;\n    }\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n    position: relative;\n    padding: 8rem 0 0;\n    @media (max-width: 770px) {\n        padding-top: 60px;\n    }\n"]);return g=function(){return n},n}var x=a.b.section(g()),v=Object(a.b)(s.a)(m()),b=a.b.div(h()),y=a.b.div(d()),w=a.b.div(p()),k=a.b.p(l()),j=a.b.div(f()),O=a.b.p(u()),S=function(){return c(x,null,c(v,null,c(w,{className:"title-banner text-dark text-visi"},c(k,null,"Limit Order Protocol"),c(j,null,c(O,null,"A limit order places a specific price that a trader wants to buy or sell at and is only executed if the market hits that price."),c(O,null,"Whereas market orders are executed immediately, limit orders are executed at a predefined price, which is generally better than the current market price."),c(O,null,"The ",c("span",null,"forbitspace")," platforms help users place the limit order which is handled by the order-book feature. We limit order protocol provides the most innovative and optimal. A limit order is a type of buy order which a user can place with a specific buy or sell price whose limit is determined by the user him/herself."))),c(b,null,c(y,null,c("img",{src:"../images/home-page/limit.png",alt:"limit"})))),c(v,null,c(O,null,"The enables the trade to be automatically executed when the market price reaches the users\u2019 target price. It allows users to buy dips or take profits to take benefits of volatility in the marketplace.",c("br",null),c("br",null),"A limit order would allow DeFi traders to get their swaps at desired prices by leaving instructions to fill buy or sell orders at specific prices (or better prices). For instance, if you think an asset is too expensive at the moment, or you are expecting prices to drop throughout the day, then you simply set a limit order to buy at a price below the current market price. How much lower is totally up to users.")))},E=e("yZXQ"),T=o.a.createElement;function N(){var n=Object(r.a)(["\n  min-height: calc(100vh - 330px);\n"]);return N=function(){return n},n}function L(){var n=Object(r.a)(["\n  position: relative;\n  overflow-x: hidden;\n  background-size: auto;\n"]);return L=function(){return n},n}var C=a.b.section(L()),A=a.b.div(N());t.default=function(){return T(C,null,T(A,null,T(S,null)),T(E.a,null))}},endd:function(n,t,e){"use strict";function r(n){this.message=n}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,n.exports=r},eqyj:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=r.isStandardBrowserEnv()?{write:function(n,t,e,i,o,a){var s=[];s.push(n+"="+encodeURIComponent(t)),r.isNumber(e)&&s.push("expires="+new Date(e).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(n,t,e){"use strict";var r=e("2SVd"),i=e("5oMp");n.exports=function(n,t){return n&&!r(t)?i(n,t):t}},"jfS+":function(n,t,e){"use strict";var r=e("endd");function i(n){if("function"!==typeof n)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(n){t=n}));var e=this;n((function(n){e.reason||(e.reason=new r(n),t(e.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var n;return{token:new i((function(t){n=t})),cancel:n}},n.exports=i},o0o1:function(n,t,e){n.exports=e("ls82")},tQ2B:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("Rn+g"),o=e("eqyj"),a=e("MLWZ"),s=e("g7np"),c=e("w0Vi"),u=e("OTTw"),f=e("LYNF");n.exports=function(n){return new Promise((function(t,e){var l=n.data,p=n.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(n.auth){var h=n.auth.username||"",m=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var g=s(n.baseURL,n.url);if(d.open(n.method.toUpperCase(),a(g,n.params,n.paramsSerializer),!0),d.timeout=n.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:n.responseType&&"text"!==n.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:n,request:d};i(t,e,o),d=null}},d.onabort=function(){d&&(e(f("Request aborted",n,"ECONNABORTED",d)),d=null)},d.onerror=function(){e(f("Network Error",n,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),e(f(t,n,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var x=(n.withCredentials||u(g))&&n.xsrfCookieName?o.read(n.xsrfCookieName):void 0;x&&(p[n.xsrfHeaderName]=x)}if("setRequestHeader"in d&&r.forEach(p,(function(n,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,n)})),r.isUndefined(n.withCredentials)||(d.withCredentials=!!n.withCredentials),n.responseType)try{d.responseType=n.responseType}catch(v){if("json"!==n.responseType)throw v}"function"===typeof n.onDownloadProgress&&d.addEventListener("progress",n.onDownloadProgress),"function"===typeof n.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then((function(n){d&&(d.abort(),e(n),d=null)})),l||(l=null),d.send(l)}))}},vDqi:function(n,t,e){n.exports=e("zuR4")},w0Vi:function(n,t,e){"use strict";var r=e("xTJ+"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var t,e,o,a={};return n?(r.forEach(n.split("\n"),(function(n){if(o=n.indexOf(":"),t=r.trim(n.substr(0,o)).toLowerCase(),e=r.trim(n.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([e]):a[t]?a[t]+", "+e:e}})),a):a}},xAGQ:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=function(n,t,e){return r.forEach(e,(function(e){n=e(n,t)})),n}},"xTJ+":function(n,t,e){"use strict";var r=e("HSsa"),i=Object.prototype.toString;function o(n){return"[object Array]"===i.call(n)}function a(n){return"undefined"===typeof n}function s(n){return null!==n&&"object"===typeof n}function c(n){if("[object Object]"!==i.call(n))return!1;var t=Object.getPrototypeOf(n);return null===t||t===Object.prototype}function u(n){return"[object Function]"===i.call(n)}function f(n,t){if(null!==n&&"undefined"!==typeof n)if("object"!==typeof n&&(n=[n]),o(n))for(var e=0,r=n.length;e<r;e++)t.call(null,n[e],e,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.call(null,n[i],i,n)}n.exports={isArray:o,isArrayBuffer:function(n){return"[object ArrayBuffer]"===i.call(n)},isBuffer:function(n){return null!==n&&!a(n)&&null!==n.constructor&&!a(n.constructor)&&"function"===typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)},isFormData:function(n){return"undefined"!==typeof FormData&&n instanceof FormData},isArrayBufferView:function(n){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer},isString:function(n){return"string"===typeof n},isNumber:function(n){return"number"===typeof n},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(n){return"[object Date]"===i.call(n)},isFile:function(n){return"[object File]"===i.call(n)},isBlob:function(n){return"[object Blob]"===i.call(n)},isFunction:u,isStream:function(n){return s(n)&&u(n.pipe)},isURLSearchParams:function(n){return"undefined"!==typeof URLSearchParams&&n instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function n(){var t={};function e(e,r){c(t[r])&&c(e)?t[r]=n(t[r],e):c(e)?t[r]=n({},e):o(e)?t[r]=e.slice():t[r]=e}for(var r=0,i=arguments.length;r<i;r++)f(arguments[r],e);return t},extend:function(n,t,e){return f(t,(function(t,i){n[i]=e&&"function"===typeof t?r(t,e):t})),n},trim:function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(n){return 65279===n.charCodeAt(0)&&(n=n.slice(1)),n}}},yK9s:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=function(n,t){r.forEach(n,(function(e,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(n[t]=e,delete n[r])}))}},yZXQ:function(n,t,e){"use strict";var r=e("h4VS"),i=e("o0o1"),o=e.n(i),a=e("HaE+"),s=e("q1tI"),c=e.n(s),u=e("vOnD"),f=e("E249"),l=e("1Yj4"),p=[{link:"https://twitter.com/forbitspace",url:"../images/icon-social-footer/6.svg"},{link:"https://t.me/forbitspace",url:"../images/icon-social-footer/5.svg"},{link:"https://github.com/forbitspace",url:"../images/icon-social-footer/4.svg"},{link:"https://medium.com/@forbitspace",url:"../images/icon-social-footer/1.svg"},{link:"https://discord.gg/CnJqNa2wfG",url:"../images/icon-social-footer/3.svg"},{link:"https://www.reddit.com/r/forbitspace/",url:"../images/icon-social-footer/2.svg"},{link:"https://www.youtube.com/channel/UCU9ejvfmL6p2Pdwp2-q163w",url:"../images/icon-social-footer/7.svg"}],d=[{link:"",nav:"Space Trade",contents:[{link:"/aggregation",content:"Aggregation Protocol"},{link:"/liquidity",content:"Liquidity Protocol"},{link:"/limit",content:"Limit Order Protocol"},{link:"/derivative",content:"Derivative Protocol"}]},{link:"",nav:"Governance",contents:[{link:"/fbs-token",content:"FBS Token"},{link:"/dao",content:"Space Dao"}]},{link:"",nav:"Developers",contents:[{link:"https://docs.forbitspace.com/",content:"Documentation",outLink:!0},{link:"../forbitspace-whitepaper.pdf",content:"Whitepaper",outLink:!0},{link:"https://github.com/forbitspace",content:"Github",outLink:!0},{link:"https://github.com/forbitspace/forbitspace-audits",content:"Audit",outLink:!0},{link:"",content:"Bug bounty",disable:!0}]},{nav:"Self-custody",link:"/selfcustody",contents:[{link:"/bridge",content:"Bridge Space"},{link:"/mobile-wallet",content:"Mobile wallet"},{link:"/smart-contract",content:"Smart contract wallet"},{link:"/assets",content:"Asset management"}]},{nav:"Support",link:"",contents:[{link:"https://blog.forbitspace.com/",content:"Blog",outLink:!0},{link:"https://help.forbitspace.com/",content:"Help Center",outLink:!0},{link:"../terms-of-service.pdf",content:"Terms of Service",outLink:!0},{link:"../privacy-policy.pdf",content:"Privacy Policy",outLink:!0},{link:"/brandkit",content:"Press & Brand"}]}],h=e("vDqi"),m=e.n(h),g=c.a.createElement;function x(){var n=Object(r.a)(["\n    width: 60px;\n    height: 30px;\n    border: none;\n    outline: none;\n    background-image: linear-gradient(\n        17deg,\n        #00ff36 -68%,\n        #00ee57 -43%,\n        #00c5ad 14%,\n        #00a4f1 57%,\n        #0b18fc 154%,\n        #0d00ff 171%\n    );\n    border-radius: 8px;\n    transition: all 0.5s ease-in-out;\n    background-size: 200%;\n    background-position: 95%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n        color: #fff;\n        font-size: 12px;\n    }\n\n    :hover {\n        background-size: 200%;\n        background-position: right;\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n    position: relative;\n    border-radius: 10px;\n    margin-right: 5px;\n"]);return v=function(){return n},n}function b(){var n=Object(r.a)(["\n    /* width: 100%; */\n    max-width: 100%;\n    height: 30px;\n    margin-right: 5px;\n    font-style: italic;\n    font-size: 14px;\n    padding: 0px 15px;\n    line-height: 20px;\n    outline: 0;\n    transition: all 0.3s ease-in-out;\n    background: transparent;\n    border-radius: 10px;\n    position: relative;\n    border: none;\n    background: #cff3f4;\n    border: 1px solid #0047b2;\n    background: #001225;\n    color: #ffffff;\n    ::placeholder {\n        font-weight: 100;\n    }\n"]);return b=function(){return n},n}function y(){var n=Object(r.a)(["\n    font-size: 14px;\n    font-weight: 300;\n    font-style: italic;\n    margin-bottom: 6px;\n    &.foundation {\n        padding-left: 1.5rem;\n        margin-bottom: 3px;\n    }\n    @media (max-width: 1024px) {\n        &.foundation {\n            padding-left: unset;\n        }\n    }\n"]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n    margin-bottom: 10px;\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 13px;\n    font-weight: 100;\n    font-style: italic;\n"]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n    margin-bottom: 10px !important;\n    color: #ffffff;\n    font-family: sans-serif !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    font-style: normal !important;\n    a {\n        text-decoration: none;\n    }\n    @media (max-width: 576px) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"]);return k=function(){return n},n}function j(){var n=Object(r.a)(["\n    font-size: 12px;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 25px;\n    .input-field {\n        width: 30%;\n    }\n    ul {\n        padding-left: 0;\n        width: 14%;\n        // text-align:right;\n\n        .form-wrap {\n            display: flex;\n            align-items: center;\n            margin-bottom: 25px;\n\n            input {\n            }\n        }\n\n        li {\n            font-size: 12px;\n            font-weight: 300;\n            font-family: sans-serif;\n            margin-bottom: 4px;\n            font-style: italic;\n            a {\n                text-decoration: none;\n                color: #4e4f50;\n\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n        }\n\n        @media (max-width: 1024px) {\n            width: calc(100% / 5);\n            margin-right: 0;\n            text-align: left;\n            form {\n                justify-content: center;\n            }\n            .form-wrap {\n                justify-content: center;\n            }\n            :last-child {\n                width: 100%;\n                text-align: center;\n            }\n        }\n        @media (max-width: 768px) {\n            /* width: calc(100% / 6); */\n            margin-right: 0;\n            text-align: left;\n            form {\n                justify-content: center;\n            }\n            :last-child {\n                width: 100%;\n                text-align: center;\n            }\n        }\n        @media (max-width: 576px) {\n            width: 32%;\n        }\n        @media (max-width: 320px) {\n            width: 48%;\n        }\n    }\n    @media (max-width: 576px) {\n        gap: 2%;\n\n        .input-field {\n            padding: 1rem 0;\n        }\n    }\n"]);return O=function(){return n},n}function S(){var n=Object(r.a)(["\n    position: relative;\n    padding: 30px 0;\n    overflow: hidden;\n    .arrow-right {\n        width: 12px;\n    }\n\n    @media (max-width: 576px) {\n        padding: 40px 0 80px;\n\n        &:after {\n            content: none;\n        }\n    }\n"]);return S=function(){return n},n}function E(){var n=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    @media (min-width: 1025px) {\n        justify-content: flex-start;\n    }\n"]);return E=function(){return n},n}function T(){var n=Object(r.a)(["\n    max-width: 20px;\n    width: 100%;\n    transition: all ease-in-out 0.2s;\n    :hover {\n        transform: scale(1.2);\n    }\n"]);return T=function(){return n},n}function N(){var n=Object(r.a)(["\n    background-size: 100%;\n    background-position: bottom;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.1;\n    z-index: -1;\n"]);return N=function(){return n},n}var L=u.b.div(N()),C=u.b.img(T()),A=u.b.div(E()),B=u.b.section(S()),R=u.b.div(O()),P=u.b.div(j()),U=u.b.li(k()),q=u.b.div(w()),z=u.b.p(y()),D=u.b.input(b()),J=u.b.div(v()),F=u.b.button(x());t.a=function(){var n=Object(s.useState)(""),t=n[0],e=n[1],r=function(){var n=Object(a.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m()({method:"GET",url:"http://192.168.31.132:1234/v1/mailer?email=".concat(t)});case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return g("footer",{className:"footer"},g(B,null,g(l.a,null,g(R,null,d.map((function(n,t){return g("ul",{className:"text-visi",key:t},g(U,null," ",n.link?g(f.Link,{href:n.link},n.nav):n.nav," "),n.contents.map((function(n,t){return g("li",{key:t},n.disable?g(P,{href:"/"},n.content):n.outLink?g("a",{href:n.link,target:"_blank",rel:"noreferrer"},n.content):g(f.Link,{href:n.link},n.content))})))})),g("ul",{className:"text-visi input-field"},g(q,null,"Subscribe to our newsletter for updates"),g("div",{className:"form-wrap",action:""},g(J,null,g(D,{type:"text",className:"text bg-input-dark",placeholder:"your@email.com",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:function(n){return function(n){e(n.target.value)}(n)},onSubmit:function(n){r(),n.preventDefault()}})),g(F,{type:"button","aria-label":"send-email-address",onClick:function(){!function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(t)?alert("Your email is invalid. Please try again!"):(r(),alert("Success! Thank you for joining us!"))}},g("img",{src:"../images/icons/arrow-right.svg",className:"arrow-right",alt:"arrow-right-icon"}))),g(z,{className:"text-dark foundation"},"forbitspace foundation LLC"),g(z,{className:"text-dark"},"\xa9 2021 @forbitspace, All Rights Reserved, Disclaimer"),g(A,null,p.map((function(n,t){return g("a",{href:n.link,target:"_blank",rel:"noreferrer",key:t},g(C,{src:n.url,alt:"icon social media"}))}))))))),g(L,null))}},zuR4:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("HSsa"),o=e("CgaS"),a=e("SntB");function s(n){var t=new o(n),e=i(o.prototype.request,t);return r.extend(e,o.prototype,t),r.extend(e,t),e}var c=s(e("JEQr"));c.Axios=o,c.create=function(n){return s(a(c.defaults,n))},c.Cancel=e("endd"),c.CancelToken=e("jfS+"),c.isCancel=e("Lmem"),c.all=function(n){return Promise.all(n)},c.spread=e("DfZB"),n.exports=c,n.exports.default=c}}]);