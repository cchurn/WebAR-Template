!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=1)}([function(e,t,n){"use strict";function r(){}function o(e){try{return e.then}catch(e){return b=e,m}}function i(e,t){try{return e(t)}catch(e){return b=e,m}}function s(e,t,n){try{e(t,n)}catch(e){return b=e,m}}function a(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,e!==r&&y(e,this)}function u(e,t,n){return new e.constructor(function(o,i){var s=new a(r);s.then(o,i),f(e,new p(t,n,s))})}function f(e,t){for(;3===e._83;)e=e._18;if(a._47&&a._47(e),0===e._83)return 0===e._75?(e._75=1,void(e._38=t)):1===e._75?(e._75=2,void(e._38=[e._38,t])):void e._38.push(t);c(e,t)}function c(e,t){v(function(){var n=1===e._83?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._83?l(t.promise,e._18):h(t.promise,e._18));var r=i(n,e._18);r===m?h(t.promise,b):l(t.promise,r)})}function l(e,t){if(t===e)return h(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var n=o(t);if(n===m)return h(e,b);if(n===e.then&&t instanceof a)return e._83=3,e._18=t,void d(e);if("function"===typeof n)return void y(n.bind(t),e)}e._83=1,e._18=t,d(e)}function h(e,t){e._83=2,e._18=t,a._71&&a._71(e,t),d(e)}function d(e){if(1===e._75&&(f(e,e._38),e._38=null),2===e._75){for(var t=0;t<e._38.length;t++)f(e,e._38[t]);e._38=null}}function p(e,t,n){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=n}function y(e,t){var n=!1,r=s(e,function(e){n||(n=!0,l(t,e))},function(e){n||(n=!0,h(t,e))});n||r!==m||(n=!0,h(t,b))}var v=n(4),b=null,m={};e.exports=a,a._47=null,a._71=null,a._44=r,a.prototype.then=function(e,t){if(this.constructor!==a)return u(this,e,t);var n=new a(r);return f(this,new p(e,t,n)),n}},function(e,t,n){n(2),e.exports=n(9)},function(e,t,n){"use strict";"undefined"===typeof Promise&&(n(3).enable(),window.Promise=n(6)),n(7),Object.assign=n(8)},function(e,t,n){"use strict";function r(){f=!1,a._47=null,a._71=null}function o(e){function t(t){(e.allRejections||s(l[t].error,e.whitelist||u))&&(l[t].displayId=c++,e.onUnhandled?(l[t].logged=!0,e.onUnhandled(l[t].displayId,l[t].error)):(l[t].logged=!0,i(l[t].displayId,l[t].error)))}function n(t){l[t].logged&&(e.onHandled?e.onHandled(l[t].displayId,l[t].error):l[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[t].displayId+".")))}e=e||{},f&&r(),f=!0;var o=0,c=0,l={};a._47=function(e){2===e._83&&l[e._56]&&(l[e._56].logged?n(e._56):clearTimeout(l[e._56].timeout),delete l[e._56])},a._71=function(e,n){0===e._75&&(e._56=o++,l[e._56]={displayId:null,error:n,timeout:setTimeout(t.bind(null,e._56),s(n,u)?100:2e3),logged:!1})}}function i(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\n").forEach(function(e){console.warn("  "+e)})}function s(e,t){return t.some(function(t){return e instanceof t})}var a=n(0),u=[ReferenceError,TypeError,RangeError],f=!1;t.disable=r,t.enable=o},function(e,t,n){"use strict";(function(t){function n(e){s.length||(i(),a=!0),s[s.length]=e}function r(){for(;u<s.length;){var e=u;if(u+=1,s[e].call(),u>f){for(var t=0,n=s.length-u;t<n;t++)s[t]=s[t+u];s.length-=u,u=0}}s.length=0,u=0,a=!1}function o(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}e.exports=n;var i,s=[],a=!1,u=0,f=1024,c="undefined"!==typeof t?t:self,l=c.MutationObserver||c.WebKitMutationObserver;i="function"===typeof l?function(e){var t=1,n=new l(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}(r):o(r),n.requestFlush=i,n.makeRequestCallFromTimer=o}).call(t,n(5))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){var t=new o(o._44);return t._83=1,t._18=e,t}var o=n(0);e.exports=o;var i=r(!0),s=r(!1),a=r(null),u=r(void 0),f=r(0),c=r("");o.resolve=function(e){if(e instanceof o)return e;if(null===e)return a;if(void 0===e)return u;if(!0===e)return i;if(!1===e)return s;if(0===e)return f;if(""===e)return c;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new o(t.bind(e))}catch(e){return new o(function(t,n){n(e)})}return r(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(s,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?r(s,a._18):(2===a._83&&n(a._18),void a.then(function(e){r(s,e)},n))}var u=a.then;if("function"===typeof u){return void new o(u.bind(a)).then(function(e){r(s,e)},n)}}t[s]=a,0===--i&&e(t)}if(0===t.length)return e([]);for(var i=t.length,s=0;s<t.length;s++)r(s,t[s])})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){e.forEach(function(e){o.resolve(e).then(t,n)})})},o.prototype.catch=function(e){return this.then(null,e)}},function(e,t){!function(e){"use strict";function t(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!==typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function a(e){var t=new FileReader,n=s(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=s(t);return t.readAsText(e),n}function f(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&_(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function v(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];v.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=v,e.fetch=function(e,t){return new Promise(function(n,r){var o=new d(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new v(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var c in n)i.call(n,c)&&(u[c]=n[c]);if(o){a=o(n);for(var l=0;l<a.length;l++)s.call(n,a[l])&&(u[a[l]]=n[a[l]])}}return u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=n(13),i=(n.n(o),new r.a),s=window.WebARCamera||{};s.camera=i,window.WebARCamera=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(11),a=(n.n(s),n(12)),u=n.n(a),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.defaults={camera:"environment",domElementID:"video",debug:!1},e.options={},e}return i(t,e),f(t,[{key:"init",value:function(e){this.config=e;var t=this.target=document.createTextNode(null);this.addEventListener=t.addEventListener.bind(t),this.removeEventListener=t.removeEventListener.bind(t),this.dispatchEvent=t.dispatchEvent.bind(t);for(var n in e)this.options[n]={value:e[n],enumerable:!0,writeable:!0,configurable:!0};var e=Object.create(this.defaults,this.options);console.log("",e),this.addCameraStream()}},{key:"pause",value:function(){this.mediaStream.enabled=!1,this.config.debug&&u.a.log("Camera paused","#ffcc00","#000000")}},{key:"resume",value:function(){this.mediaStream.enabled=!0,this.config.debug&&u.a.log("Camera resumed","#000000","#3BFF4C")}},{key:"addCameraStream",value:function(){var e=document.getElementById(this.config.domElementID);e.setAttribute("autoplay",""),e.setAttribute("muted",""),e.setAttribute("playsinline","");var t={audio:!1,video:{facingMode:this.config.camera}};navigator.mediaDevices.getUserMedia(t).then(function(t){e.srcObject=t,this.config.debug&&u.a.log("Camera enabled...","#000000","#3BFF4C");var n=new CustomEvent("camera_event",{detail:"PermissionGranted"});this.target.dispatchEvent(n),this.mediaStream=t.getTracks()[0]}.bind(this)).catch(function(e){switch(e.name){case"PermissionDismissedError":this.config.debug&&u.a.log("PermissionDismissedError","white","red"),console.log("user has dismissed the request for camera");break;case"PermissionDeniedError":this.config.debug&&u.a.log("PermissionDeniedError","white","red"),console.log("user has blocked camera for this domain");break;case"NotAllowedError":this.config.debug&&u.a.log("NotAllowedError","white","red"),console.log("user has blocked camera for this domain");break;case"NotSupportedError":this.config.debug&&u.a.log("NotSupportedError","white","red"),console.log("The current platform does not support webrtc")}var t=new CustomEvent("camera_event",{detail:e.name});this.target.dispatchEvent(t)}.bind(this))}}]),t}(s.EventEmitter);t.a=c},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"===typeof e}function o(e){return"number"===typeof e}function i(e){return"object"===typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,a,u,f;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),f=n.slice(),o=f.length,u=0;u<o;u++)f[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"===typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){var n={hasInit:!1,init:function(){this.hasInit=!0;var e=document.createElement("div");document.body.appendChild(e),e.setAttribute("class","debug"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex="99999",e.style.background="rgba(0,0,0,0)",e.style.color="#ffffff",e.style.padding="5px",e.style.fontFamily="SansSerif, Arial"},log:function(e,t,n){this.hasInit||this.init();var r="undefined"==typeof t?"white":t,o="undefined"==typeof n?"none":n;document.querySelector(".debug").innerHTML+='<span style="padding:3px; line-height: 25px; color: '+r+"; background: "+o+';">'+e+"</span><br/>"},hide:function(){this.hasInit&&(document.querySelector(".debug").style.display="none")}};e.exports=n},function(e,t,n){var r=n(14);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(16)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(15)(void 0),t.push([e.i,"video {\n  height: 100%;\n  width: auto;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: scale(1) translateX(-50%);\n      -ms-transform: scale(1) translateX(-50%);\n          transform: scale(1) translateX(-50%);\n  opacity: 1; }\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"===typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"===typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(c(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],u=i[2],f=i[3],c={css:a,media:u,sourceMap:f};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=_[_.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",f(t,e.attrs),i(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",f(t,e.attrs),i(e,t),t}function f(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var f=m++;n=b||(b=a(t)),r=l.bind(null,n,f,!1),o=l.bind(null,n,f,!0)}else e.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(n=u(t),r=d.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=h.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function h(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=g(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},y=function(e){var t;return function(){return"undefined"===typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return"undefined"===typeof t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,m=0,_=[],g=n(17);e.exports=function(e,t){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"===typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=y()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=p[a.id];u.refs--,i.push(u)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete p[u.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!==typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!==typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);
//# sourceMappingURL=WebAR_Camera.js.map