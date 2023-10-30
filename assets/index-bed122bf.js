import{r as Y,c as Tt,g as Et,s as J,n as ot,j as $}from"./index-5e0e2173.js";var I=(x=>(x.Anime="anime",x.IRL="irl",x.LowRes="low_res",x.HiRes="hi_res",x.Sber="sber",x.Me="me",x))(I||{});const St={enableTypingEffect:!0},Ot=(x,P)=>{const H=["top-left","bottom-left","top-right"];return P.reduce((z,Q,N)=>{const F=H[N];return Q&&F&&(z[F]=Q),z},{"bottom-right":x})},B=({src:x,captions:P=[],width:H=200,tags:z=[]})=>{const[Q="???"]=x.split("/").reverse();return{imageProps:{src:x,width:H,captions:Ot(Q,P),captionsTypeEffect:St.enableTypingEffect},tags:z}},At=[B({src:"img/pivo.jpg",captions:["Hello"],tags:[I.Anime]}),B({src:"img/pom-pom.jpg",width:400,tags:[I.Anime,I.HiRes]}),B({src:"img/cool.png",width:400,tags:[I.Anime,I.HiRes]}),B({src:"img/catgirls.jpg",width:400,captions:["First caption","Second Caption","Third caption"]}),B({src:"img/sber-moscowcity.jpeg",width:600,captions:["Sber tower -> Moscow City"],tags:[I.IRL,I.LowRes,I.Sber]}),B({src:"img/sueta.jpeg",width:400,captions:["Moscow"],tags:[I.IRL,I.LowRes]}),B({src:"img/sueta2.jpeg",width:200,captions:["More of Moscow"],tags:[I.IRL,I.LowRes]}),B({src:"img/moscow.jpeg",width:400,captions:["Even more of Moscow!"],tags:[I.IRL,I.LowRes]}),B({src:"img/sber-chan.jpg",width:300,captions:["Sber-chan!"],tags:[I.Anime,I.Sber]}),B({src:"img/march7.jpeg",width:400,captions:["March 7 from Dodo!"],tags:[I.Anime,I.IRL]}),B({src:"img/sokolniki.jpeg",width:400,captions:["Sokolniki Metro","One of oldest ones"],tags:[I.IRL]}),B({src:"img/sber-cat.jpeg",width:400,captions:["Cool pillow-cat!"],tags:[I.IRL,I.Sber]}),B({src:"img/sber.jpeg",width:400,captions:["Lunch zone"],tags:[I.Me,I.IRL,I.Sber]})];var ht={exports:{}};(function(x,P){(function(H,z){x.exports=z(Y)})(typeof self<"u"?self:Tt,H=>(()=>{var z={7403:(e,o,t)=>{t.d(o,{default:()=>X});var n=t(4087),s=t.n(n);const a=function(j){return new RegExp(/<[a-z][\s\S]*>/i).test(j)},r=function(j,h){return Math.floor(Math.random()*(h-j+1))+j};var c="TYPE_CHARACTER",u="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",d="CALL_FUNCTION",g="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",_="CHANGE_CURSOR",E="PASTE_STRING",A="HTML_TAG";function S(j){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},S(j)}function y(j,h){var O=Object.keys(j);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(j);h&&(T=T.filter(function(V){return Object.getOwnPropertyDescriptor(j,V).enumerable})),O.push.apply(O,T)}return O}function w(j){for(var h=1;h<arguments.length;h++){var O=arguments[h]!=null?arguments[h]:{};h%2?y(Object(O),!0).forEach(function(T){C(j,T,O[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(O)):y(Object(O)).forEach(function(T){Object.defineProperty(j,T,Object.getOwnPropertyDescriptor(O,T))})}return j}function L(j){return function(h){if(Array.isArray(h))return k(h)}(j)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(j)||function(h,O){if(h){if(typeof h=="string")return k(h,O);var T=Object.prototype.toString.call(h).slice(8,-1);return T==="Object"&&h.constructor&&(T=h.constructor.name),T==="Map"||T==="Set"?Array.from(h):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?k(h,O):void 0}}(j)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(j,h){(h==null||h>j.length)&&(h=j.length);for(var O=0,T=new Array(h);O<h;O++)T[O]=j[O];return T}function M(j,h){for(var O=0;O<h.length;O++){var T=h[O];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(j,q(T.key),T)}}function C(j,h,O){return(h=q(h))in j?Object.defineProperty(j,h,{value:O,enumerable:!0,configurable:!0,writable:!0}):j[h]=O,j}function q(j){var h=function(O,T){if(S(O)!=="object"||O===null)return O;var V=O[Symbol.toPrimitive];if(V!==void 0){var i=V.call(O,"string");if(S(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(O)}(j);return S(h)==="symbol"?h:String(h)}const X=function(){function j(T,V){var i=this;if(function(m,R){if(!(m instanceof R))throw new TypeError("Cannot call a class as a function")}(this,j),C(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),C(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),C(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),C(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),C(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),C(this,"stop",function(){return i.state.eventLoop&&((0,n.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),C(this,"pauseFor",function(m){return i.addEventToQueue(l,{ms:m}),i}),C(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(m){i.typeString(m).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),C(this,"typeString",function(m){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(m))return i.typeOutHTMLString(m,R);if(m){var U=(i.options||{}).stringSplitter,G=typeof U=="function"?U(m):m.split("");i.typeCharacters(G,R)}return i}),C(this,"pasteString",function(m){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(m)?i.typeOutHTMLString(m,R,!0):(m&&i.addEventToQueue(E,{character:m,node:R}),i)}),C(this,"typeOutHTMLString",function(m){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,U=arguments.length>2?arguments[2]:void 0,G=function(Z){var tt=document.createElement("div");return tt.innerHTML=Z,tt.childNodes}(m);if(G.length>0)for(var D=0;D<G.length;D++){var W=G[D],K=W.innerHTML;W&&W.nodeType!==3?(W.innerHTML="",i.addEventToQueue(g,{node:W,parentNode:R}),U?i.pasteString(K,W):i.typeString(K,W)):W.textContent&&(U?i.pasteString(W.textContent,R):i.typeString(W.textContent,R))}return i}),C(this,"deleteAll",function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(p,{speed:m}),i}),C(this,"changeDeleteSpeed",function(m){if(!m)throw new Error("Must provide new delete speed");return i.addEventToQueue(v,{speed:m}),i}),C(this,"changeDelay",function(m){if(!m)throw new Error("Must provide new delay");return i.addEventToQueue(b,{delay:m}),i}),C(this,"changeCursor",function(m){if(!m)throw new Error("Must provide new cursor");return i.addEventToQueue(_,{cursor:m}),i}),C(this,"deleteChars",function(m){if(!m)throw new Error("Must provide amount of characters to delete");for(var R=0;R<m;R++)i.addEventToQueue(u);return i}),C(this,"callFunction",function(m,R){if(!m||typeof m!="function")throw new Error("Callback must be a function");return i.addEventToQueue(d,{cb:m,thisArg:R}),i}),C(this,"typeCharacters",function(m){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!m||!Array.isArray(m))throw new Error("Characters must be an array");return m.forEach(function(U){i.addEventToQueue(c,{character:U,node:R})}),i}),C(this,"removeCharacters",function(m){if(!m||!Array.isArray(m))throw new Error("Characters must be an array");return m.forEach(function(){i.addEventToQueue(u)}),i}),C(this,"addEventToQueue",function(m,R){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(m,R,U,"eventQueue")}),C(this,"addReverseCalledEvent",function(m,R){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.options.loop?i.addEventToStateProperty(m,R,U,"reverseCalledEvents"):i}),C(this,"addEventToStateProperty",function(m,R){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2],G=arguments.length>3?arguments[3]:void 0,D={eventName:m,eventArgs:R||{}};return i.state[G]=U?[D].concat(L(i.state[G])):[].concat(L(i.state[G]),[D]),i}),C(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var m=Date.now(),R=m-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=L(i.state.calledEvents),i.state.calledEvents=[],i.options=w({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(m<i.state.pauseUntil)return;i.state.pauseUntil=null}var U,G=L(i.state.eventQueue),D=G.shift();if(!(R<=(U=D.eventName===f||D.eventName===u?i.options.deleteSpeed==="natural"?r(40,80):i.options.deleteSpeed:i.options.delay==="natural"?r(120,160):i.options.delay))){var W=D.eventName,K=D.eventArgs;switch(i.logInDevMode({currentEvent:D,state:i.state,delay:U}),W){case E:case c:var Z=K.character,tt=K.node,pt=document.createTextNode(Z),et=pt;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&(et=i.options.onCreateTextNode(Z,pt)),et&&(tt?tt.appendChild(et):i.state.elements.wrapper.appendChild(et)),i.state.visibleNodes=[].concat(L(i.state.visibleNodes),[{type:"TEXT_NODE",character:Z,node:et}]);break;case u:G.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var gt=D.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(gt);break;case d:var lt=D.eventArgs,yt=lt.cb,mt=lt.thisArg;yt.call(mt,{elements:i.state.elements});break;case g:var ft=D.eventArgs,at=ft.node,st=ft.parentNode;st?st.appendChild(at):i.state.elements.wrapper.appendChild(at),i.state.visibleNodes=[].concat(L(i.state.visibleNodes),[{type:A,node:at,parentNode:st||i.state.elements.wrapper}]);break;case p:var bt=i.state.visibleNodes,it=K.speed,nt=[];it&&nt.push({eventName:v,eventArgs:{speed:it,temp:!0}});for(var dt=0,xt=bt.length;dt<xt;dt++)nt.push({eventName:f,eventArgs:{removingCharacterNode:!1}});it&&nt.push({eventName:v,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),G.unshift.apply(G,nt);break;case f:var _t=D.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var ct=i.state.visibleNodes.pop(),wt=ct.type,rt=ct.node,jt=ct.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:rt,character:jt}),rt&&rt.parentNode.removeChild(rt),wt===A&&_t&&G.unshift({eventName:f,eventArgs:{}})}break;case v:i.options.deleteSpeed=D.eventArgs.speed;break;case b:i.options.delay=D.eventArgs.delay;break;case _:i.options.cursor=D.eventArgs.cursor,i.state.elements.cursor.innerHTML=D.eventArgs.cursor}i.options.loop&&(D.eventName===f||D.eventArgs&&D.eventArgs.temp||(i.state.calledEvents=[].concat(L(i.state.calledEvents),[D]))),i.state.eventQueue=G,i.state.lastFrameTime=m}}}),T)if(typeof T=="string"){var ut=document.querySelector(T);if(!ut)throw new Error("Could not find container element");this.state.elements.container=ut}else this.state.elements.container=T;V&&(this.options=w(w({},this.options),V)),this.state.initialOptions=w({},this.options),this.init()}var h,O;return h=j,(O=[{key:"init",value:function(){var T,V;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(T=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(V=document.createElement("style")).appendChild(document.createTextNode(T)),document.head.appendChild(V),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(T){this.options.devMode&&console.log(T)}}])&&M(h.prototype,O),Object.defineProperty(h,"prototype",{writable:!1}),j}()},8552:(e,o,t)=>{var n=t(852)(t(5639),"DataView");e.exports=n},1989:(e,o,t)=>{var n=t(1789),s=t(401),a=t(7667),r=t(1327),c=t(1866);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},8407:(e,o,t)=>{var n=t(7040),s=t(4125),a=t(2117),r=t(7518),c=t(4705);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},7071:(e,o,t)=>{var n=t(852)(t(5639),"Map");e.exports=n},3369:(e,o,t)=>{var n=t(4785),s=t(1285),a=t(6e3),r=t(9916),c=t(5265);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},3818:(e,o,t)=>{var n=t(852)(t(5639),"Promise");e.exports=n},8525:(e,o,t)=>{var n=t(852)(t(5639),"Set");e.exports=n},8668:(e,o,t)=>{var n=t(3369),s=t(619),a=t(2385);function r(c){var u=-1,p=c==null?0:c.length;for(this.__data__=new n;++u<p;)this.add(c[u])}r.prototype.add=r.prototype.push=s,r.prototype.has=a,e.exports=r},6384:(e,o,t)=>{var n=t(8407),s=t(7465),a=t(3779),r=t(7599),c=t(4758),u=t(4309);function p(f){var l=this.__data__=new n(f);this.size=l.size}p.prototype.clear=s,p.prototype.delete=a,p.prototype.get=r,p.prototype.has=c,p.prototype.set=u,e.exports=p},2705:(e,o,t)=>{var n=t(5639).Symbol;e.exports=n},1149:(e,o,t)=>{var n=t(5639).Uint8Array;e.exports=n},577:(e,o,t)=>{var n=t(852)(t(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length,a=0,r=[];++n<s;){var c=o[n];t(c,n,o)&&(r[a++]=c)}return r}},4636:(e,o,t)=>{var n=t(2545),s=t(5694),a=t(1469),r=t(4144),c=t(5776),u=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(f,l){var d=a(f),g=!d&&s(f),v=!d&&!g&&r(f),b=!d&&!g&&!v&&u(f),_=d||g||v||b,E=_?n(f.length,String):[],A=E.length;for(var S in f)!l&&!p.call(f,S)||_&&(S=="length"||v&&(S=="offset"||S=="parent")||b&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||c(S,A))||E.push(S);return E}},2488:e=>{e.exports=function(o,t){for(var n=-1,s=t.length,a=o.length;++n<s;)o[a+n]=t[n];return o}},2908:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length;++n<s;)if(t(o[n],n,o))return!0;return!1}},8470:(e,o,t)=>{var n=t(7813);e.exports=function(s,a){for(var r=s.length;r--;)if(n(s[r][0],a))return r;return-1}},8866:(e,o,t)=>{var n=t(2488),s=t(1469);e.exports=function(a,r,c){var u=r(a);return s(a)?u:n(u,c(a))}},4239:(e,o,t)=>{var n=t(2705),s=t(9607),a=t(2333),r=n?n.toStringTag:void 0;e.exports=function(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":r&&r in Object(c)?s(c):a(c)}},9454:(e,o,t)=>{var n=t(4239),s=t(7005);e.exports=function(a){return s(a)&&n(a)=="[object Arguments]"}},939:(e,o,t)=>{var n=t(2492),s=t(7005);e.exports=function a(r,c,u,p,f){return r===c||(r==null||c==null||!s(r)&&!s(c)?r!=r&&c!=c:n(r,c,u,p,a,f))}},2492:(e,o,t)=>{var n=t(6384),s=t(7114),a=t(8351),r=t(6096),c=t(4160),u=t(1469),p=t(4144),f=t(6719),l="[object Arguments]",d="[object Array]",g="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(b,_,E,A,S,y){var w=u(b),L=u(_),k=w?d:c(b),M=L?d:c(_),C=(k=k==l?g:k)==g,q=(M=M==l?g:M)==g,X=k==M;if(X&&p(b)){if(!p(_))return!1;w=!0,C=!1}if(X&&!C)return y||(y=new n),w||f(b)?s(b,_,E,A,S,y):a(b,_,k,E,A,S,y);if(!(1&E)){var j=C&&v.call(b,"__wrapped__"),h=q&&v.call(_,"__wrapped__");if(j||h){var O=j?b.value():b,T=h?_.value():_;return y||(y=new n),S(O,T,E,A,y)}}return!!X&&(y||(y=new n),r(b,_,E,A,S,y))}},8458:(e,o,t)=>{var n=t(3560),s=t(5346),a=t(3218),r=t(346),c=/^\[object .+?Constructor\]$/,u=Function.prototype,p=Object.prototype,f=u.toString,l=p.hasOwnProperty,d=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(g){return!(!a(g)||s(g))&&(n(g)?d:c).test(r(g))}},8749:(e,o,t)=>{var n=t(4239),s=t(1780),a=t(7005),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(c){return a(c)&&s(c.length)&&!!r[n(c)]}},280:(e,o,t)=>{var n=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return s(r);var c=[];for(var u in Object(r))a.call(r,u)&&u!="constructor"&&c.push(u);return c}},2545:e=>{e.exports=function(o,t){for(var n=-1,s=Array(o);++n<o;)s[n]=t(n);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var n=t(5639)["__core-js_shared__"];e.exports=n},7114:(e,o,t)=>{var n=t(8668),s=t(2908),a=t(4757);e.exports=function(r,c,u,p,f,l){var d=1&u,g=r.length,v=c.length;if(g!=v&&!(d&&v>g))return!1;var b=l.get(r),_=l.get(c);if(b&&_)return b==c&&_==r;var E=-1,A=!0,S=2&u?new n:void 0;for(l.set(r,c),l.set(c,r);++E<g;){var y=r[E],w=c[E];if(p)var L=d?p(w,y,E,c,r,l):p(y,w,E,r,c,l);if(L!==void 0){if(L)continue;A=!1;break}if(S){if(!s(c,function(k,M){if(!a(S,M)&&(y===k||f(y,k,u,p,l)))return S.push(M)})){A=!1;break}}else if(y!==w&&!f(y,w,u,p,l)){A=!1;break}}return l.delete(r),l.delete(c),A}},8351:(e,o,t)=>{var n=t(2705),s=t(1149),a=t(7813),r=t(7114),c=t(8776),u=t(1814),p=n?n.prototype:void 0,f=p?p.valueOf:void 0;e.exports=function(l,d,g,v,b,_,E){switch(g){case"[object DataView]":if(l.byteLength!=d.byteLength||l.byteOffset!=d.byteOffset)return!1;l=l.buffer,d=d.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=d.byteLength||!_(new s(l),new s(d)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+d);case"[object Error]":return l.name==d.name&&l.message==d.message;case"[object RegExp]":case"[object String]":return l==d+"";case"[object Map]":var A=c;case"[object Set]":var S=1&v;if(A||(A=u),l.size!=d.size&&!S)return!1;var y=E.get(l);if(y)return y==d;v|=2,E.set(l,d);var w=r(A(l),A(d),v,b,_,E);return E.delete(l),w;case"[object Symbol]":if(f)return f.call(l)==f.call(d)}return!1}},6096:(e,o,t)=>{var n=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,r,c,u,p,f){var l=1&c,d=n(a),g=d.length;if(g!=n(r).length&&!l)return!1;for(var v=g;v--;){var b=d[v];if(!(l?b in r:s.call(r,b)))return!1}var _=f.get(a),E=f.get(r);if(_&&E)return _==r&&E==a;var A=!0;f.set(a,r),f.set(r,a);for(var S=l;++v<g;){var y=a[b=d[v]],w=r[b];if(u)var L=l?u(w,y,b,r,a,f):u(y,w,b,a,r,f);if(!(L===void 0?y===w||p(y,w,c,u,f):L)){A=!1;break}S||(S=b=="constructor")}if(A&&!S){var k=a.constructor,M=r.constructor;k==M||!("constructor"in a)||!("constructor"in r)||typeof k=="function"&&k instanceof k&&typeof M=="function"&&M instanceof M||(A=!1)}return f.delete(a),f.delete(r),A}},1957:(e,o,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},8234:(e,o,t)=>{var n=t(8866),s=t(9551),a=t(3674);e.exports=function(r){return n(r,a,s)}},5050:(e,o,t)=>{var n=t(7019);e.exports=function(s,a){var r=s.__data__;return n(a)?r[typeof a=="string"?"string":"hash"]:r.map}},852:(e,o,t)=>{var n=t(8458),s=t(7801);e.exports=function(a,r){var c=s(a,r);return n(c)?c:void 0}},9607:(e,o,t)=>{var n=t(2705),s=Object.prototype,a=s.hasOwnProperty,r=s.toString,c=n?n.toStringTag:void 0;e.exports=function(u){var p=a.call(u,c),f=u[c];try{u[c]=void 0;var l=!0}catch{}var d=r.call(u);return l&&(p?u[c]=f:delete u[c]),d}},9551:(e,o,t)=>{var n=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,c=r?function(u){return u==null?[]:(u=Object(u),n(r(u),function(p){return a.call(u,p)}))}:s;e.exports=c},4160:(e,o,t)=>{var n=t(8552),s=t(7071),a=t(3818),r=t(8525),c=t(577),u=t(4239),p=t(346),f="[object Map]",l="[object Promise]",d="[object Set]",g="[object WeakMap]",v="[object DataView]",b=p(n),_=p(s),E=p(a),A=p(r),S=p(c),y=u;(n&&y(new n(new ArrayBuffer(1)))!=v||s&&y(new s)!=f||a&&y(a.resolve())!=l||r&&y(new r)!=d||c&&y(new c)!=g)&&(y=function(w){var L=u(w),k=L=="[object Object]"?w.constructor:void 0,M=k?p(k):"";if(M)switch(M){case b:return v;case _:return f;case E:return l;case A:return d;case S:return g}return L}),e.exports=y},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var n=t(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;if(n){var c=r[a];return c==="__lodash_hash_undefined__"?void 0:c}return s.call(r,a)?r[a]:void 0}},1327:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;return n?r[a]!==void 0:s.call(r,a)}},1866:(e,o,t)=>{var n=t(4536);e.exports=function(s,a){var r=this.__data__;return this.size+=this.has(s)?0:1,r[s]=n&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var s=typeof t;return!!(n=n??9007199254740991)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<n}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var n,s=t(4429),a=(n=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!a&&a in r}},5726:e=>{var o=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var n=t(8470),s=Array.prototype.splice;e.exports=function(a){var r=this.__data__,c=n(r,a);return!(c<0||(c==r.length-1?r.pop():s.call(r,c,1),--this.size,0))}},2117:(e,o,t)=>{var n=t(8470);e.exports=function(s){var a=this.__data__,r=n(a,s);return r<0?void 0:a[r][1]}},7518:(e,o,t)=>{var n=t(8470);e.exports=function(s){return n(this.__data__,s)>-1}},4705:(e,o,t)=>{var n=t(8470);e.exports=function(s,a){var r=this.__data__,c=n(r,s);return c<0?(++this.size,r.push([s,a])):r[c][1]=a,this}},4785:(e,o,t)=>{var n=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||s),string:new n}}},1285:(e,o,t)=>{var n=t(5050);e.exports=function(s){var a=n(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).get(s)}},9916:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).has(s)}},5265:(e,o,t)=>{var n=t(5050);e.exports=function(s,a){var r=n(this,s),c=r.size;return r.set(s,a),this.size+=r.size==c?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s,a){n[++t]=[a,s]}),n}},4536:(e,o,t)=>{var n=t(852)(Object,"create");e.exports=n},6916:(e,o,t)=>{var n=t(5569)(Object.keys,Object);e.exports=n},1167:(e,o,t)=>{e=t.nmd(e);var n=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,r=a&&a.exports===s&&n.process,c=function(){try{return a&&a.require&&a.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=c},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(n){return o(t(n))}}},5639:(e,o,t)=>{var n=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=n||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s){n[++t]=s}),n}},7465:(e,o,t)=>{var n=t(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,n=t.delete(o);return this.size=t.size,n}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var n=t(8407),s=t(7071),a=t(3369);e.exports=function(r,c){var u=this.__data__;if(u instanceof n){var p=u.__data__;if(!s||p.length<199)return p.push([r,c]),this.size=++u.size,this;u=this.__data__=new a(p)}return u.set(r,c),this.size=u.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var n=t(9454),s=t(7005),a=Object.prototype,r=a.hasOwnProperty,c=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(p){return s(p)&&r.call(p,"callee")&&!c.call(p,"callee")};e.exports=u},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var n=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!n(a)}},4144:(e,o,t)=>{e=t.nmd(e);var n=t(5639),s=t(5062),a=o&&!o.nodeType&&o,r=a&&e&&!e.nodeType&&e,c=r&&r.exports===a?n.Buffer:void 0,u=(c?c.isBuffer:void 0)||s;e.exports=u},8446:(e,o,t)=>{var n=t(939);e.exports=function(s,a){return n(s,a)}},3560:(e,o,t)=>{var n=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var r=n(a);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var n=t(8749),s=t(1717),a=t(1167),r=a&&a.isTypedArray,c=r?s(r):n;e.exports=c},3674:(e,o,t)=>{var n=t(4636),s=t(280),a=t(8612);e.exports=function(r){return a(r)?n(r):s(r)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,n,s,a,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var c;return 1e9*(c=t())[0]+c[1]})(),r=1e9*process.uptime(),a=s-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var n=t(75),s=typeof window>"u"?t.g:window,a=["moz","webkit"],r="AnimationFrame",c=s["request"+r],u=s["cancel"+r]||s["cancelRequest"+r],p=0;!c&&p<a.length;p++)c=s[a[p]+"Request"+r],u=s[a[p]+"Cancel"+r]||s[a[p]+"CancelRequest"+r];if(!c||!u){var f=0,l=0,d=[];c=function(g){if(d.length===0){var v=n(),b=Math.max(0,16.666666666666668-(v-f));f=b+v,setTimeout(function(){var _=d.slice(0);d.length=0;for(var E=0;E<_.length;E++)if(!_[E].cancelled)try{_[E].callback(f)}catch(A){setTimeout(function(){throw A},0)}},Math.round(b))}return d.push({handle:++l,callback:g,cancelled:!1}),l},u=function(g){for(var v=0;v<d.length;v++)d[v].handle===g&&(d[v].cancelled=!0)}}e.exports=function(g){return c.call(s,g)},e.exports.cancel=function(){u.apply(s,arguments)},e.exports.polyfill=function(g){g||(g=s),g.requestAnimationFrame=c,g.cancelAnimationFrame=u}},8156:e=>{e.exports=H}},Q={};function N(e){var o=Q[e];if(o!==void 0)return o.exports;var t=Q[e]={id:e,loaded:!1,exports:{}};return z[e].call(t.exports,t,t.exports,N),t.loaded=!0,t.exports}N.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return N.d(o,{a:o}),o},N.d=(e,o)=>{for(var t in o)N.o(o,t)&&!N.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},N.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),N.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),N.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var F={};return(()=>{N.d(F,{default:()=>d});var e=N(8156),o=N.n(e),t=N(7403),n=N(8446),s=N.n(n);function a(g){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},a(g)}function r(g,v){for(var b=0;b<v.length;b++){var _=v[b];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(g,f(_.key),_)}}function c(g,v){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,_){return b.__proto__=_,b},c(g,v)}function u(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function p(g){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},p(g)}function f(g){var v=function(b,_){if(a(b)!=="object"||b===null)return b;var E=b[Symbol.toPrimitive];if(E!==void 0){var A=E.call(b,"string");if(a(A)!=="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(g);return a(v)==="symbol"?v:String(v)}var l=function(g){(function(y,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(w&&w.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),w&&c(y,w)})(S,g);var v,b,_,E,A=(_=S,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,w=p(_);if(E){var L=p(this).constructor;y=Reflect.construct(w,arguments,L)}else y=w.apply(this,arguments);return function(k,M){if(M&&(a(M)==="object"||typeof M=="function"))return M;if(M!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(k)}(this,y)});function S(){var y,w,L,k;(function(X,j){if(!(X instanceof j))throw new TypeError("Cannot call a class as a function")})(this,S);for(var M=arguments.length,C=new Array(M),q=0;q<M;q++)C[q]=arguments[q];return w=u(y=A.call.apply(A,[this].concat(C))),k={instance:null},(L=f(L="state"))in w?Object.defineProperty(w,L,{value:k,enumerable:!0,configurable:!0,writable:!0}):w[L]=k,y}return v=S,(b=[{key:"componentDidMount",value:function(){var y=this,w=new t.default(this.typewriter,this.props.options);this.setState({instance:w},function(){var L=y.props.onInit;L&&L(w)})}},{key:"componentDidUpdate",value:function(y){s()(this.props.options,y.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var y=this,w=this.props.component;return o().createElement(w,{ref:function(L){return y.typewriter=L},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(v.prototype,b),Object.defineProperty(v,"prototype",{writable:!1}),S}(e.Component);l.defaultProps={component:"div"};const d=l})(),F.default})())})(ht);var Ct=ht.exports;const Lt=Et(Ct),Pt=({position:x,text:P,typeEffect:H,maxWidth:z})=>$.jsxs($.Fragment,{children:[$.jsxs(vt,{maxWidth:z,position:x,style:{color:"transparent"},children:[P," "]}),$.jsx(vt,{maxWidth:z,position:x,style:{outline:"none"},children:H?$.jsx(Lt,{options:{cursor:"",loop:!1},onInit:Q=>Q.typeString(P).start()}):$.jsx("span",{children:P})})]}),Nt=x=>({"top-left":`
        top: 0;
        left: 0;
        padding: 0 8px 0 32px;`,"top-right":`
        top: 0;
        right: 0;
        padding: 0 32px 0 8px;`,"bottom-left":`
        bottom: 0;
        left: 0;
        padding: 0 8px 0 32px;`,"bottom-right":`
        bottom: 0;
        right: 0;
        padding: 0 32px 0 8px;`})[x],vt=J.span`
  position: absolute;
  max-width: ${x=>x.maxWidth}px;
  overflow: hidden;

  color: black;
  text-shadow: none;
  font-weight: 700;
  font-size: 1.5rem;

  background: white;
  outline: 4px solid black;

  ${x=>ot`
    ${Nt(x.position)}
  `}
`,kt=({src:x,width:P,height:H,captions:z={},captionsTypeEffect:Q=!1})=>{const[N,F]=Y.useState(P),[e,o]=Y.useState(H),t=Y.useCallback(a=>{const{width:r,height:c}=a.currentTarget;o(c),F(r)},[]),n=Y.useMemo(()=>({width:N??P??1,height:e??H??0}),[H,e,N,P]),s=Y.useMemo(()=>Object.entries(z).map(([a,r])=>({text:r,position:a,typeEffect:Q,maxWidth:n.width})),[z,Q,n.width]);return $.jsxs(Mt,{...n,children:[$.jsx("img",{src:x,width:P,height:H,onLoad:t}),s.map(a=>$.jsx(Pt,{...a},a.position))]})},Mt=J.div`
  position: relative;
  outline: 8px solid black;
  margin: 8px;

  width: ${x=>x.width}px;
  height: ${x=>x.height}px;

  ${x=>x.height===0&&ot`
      outline: none;

      span {
        display: none;
      }
    `}
`,Rt=({item:x,onTagClick:P,selectedTags:H=[]})=>{const z=x.tags.length>0;return $.jsxs(It,{children:[$.jsx(kt,{...x.imageProps}),z&&$.jsx(Dt,{children:x.tags.map(Q=>{const N=H.includes(Q);return $.jsxs(zt,{isSelected:N,onClick:()=>P(Q),children:["#",Q]},Q)})})]})},It=J.div``,Dt=J.div`
  display: flex;
  gap: 8px;
`,zt=J.span`
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  ${x=>x.isSelected&&ot`
      filter: brightness(0.9);
      text-decoration: underline;
    `}
`,Ft=x=>{const[P,H]=Y.useState(),z=Y.useMemo(()=>{const F=x.flatMap(o=>o.tags);return Array.from(new Set(F))},[x]),Q=Y.useCallback(F=>{const e=F&&z.includes(F);H(e&&!(P===F)?F:void 0)},[z,P]),N=Y.useMemo(()=>!P?x:x.filter(e=>e.tags.includes(P)),[x,P]);return{selectedTag:P,selectOrToggleTag:Q,filteredItems:N,tagsToSelect:z,hasTagsToSelect:z.length>0}},Ht=({items:x})=>{const{selectedTag:P,selectOrToggleTag:H,filteredItems:z,tagsToSelect:Q,hasTagsToSelect:N}=Ft(x);return $.jsxs(Qt,{children:[N&&$.jsx($t,{children:Q.map(F=>{const e=F===P;return $.jsxs(Ut,{isSelected:e,onClick:()=>H(F),children:["#",F]},F)})}),$.jsx(Gt,{children:z.map(F=>$.jsx(Rt,{item:F,selectedTags:P&&[P],onTagClick:H},F.imageProps.src))})]})},Qt=J.div`
  display: flex;
  gap: 16px;

  // If mobile TODO: declarative multi-screen layout
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`,$t=J.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`,Ut=J.div`
  padding: 16px;
  font-size: 1.5em;
  cursor: pointer;

  ${x=>x.isSelected&&ot`
      backdrop-filter: brightness(0.9);
      text-decoration: underline;
    `}
`,Gt=J.div`
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
`,Bt=()=>$.jsx(Ht,{items:At}),Vt=()=>$.jsx(Bt,{});export{Vt as default};
