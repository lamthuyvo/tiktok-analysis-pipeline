"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3699],{37685:(t,e,r)=>{const n=new WeakMap;function o(t,e){return n.get(t)&&n.get(t).get(e)}function i(t,e,r){if(void 0===e)throw new TypeError;const n=o(e,r);return n&&n.get(t)}function s(t,e,r,i){if(i&&!["string","symbol"].includes(typeof i))throw new TypeError;(o(r,i)||function(t,e){const r=n.get(t)||new Map;n.set(t,r);const o=r.get(e)||new Map;return r.set(e,o),o}(r,i)).set(t,e)}function a(t,e,r){return i(t,e,r)?i(t,e,r):Object.getPrototypeOf(e)?a(t,Object.getPrototypeOf(e),r):void 0}const c={decorate:function(t,e,r,n){if(!Array.isArray(t)||0===t.length)throw new TypeError;return void 0!==r?function(t,e,r,n){return t.reverse().forEach((t=>{n=t(e,r,n)||n})),n}(t,e,r,n):"function"==typeof e?function(t,e){return t.reverse().forEach((t=>{const r=t(e);r&&(e=r)})),e}(t,e):void 0},defineMetadata:function(t,e,r,n){s(t,e,r,n)},getMetadata:function(t,e,r){return a(t,e,r)},getOwnMetadata:function(t,e,r){return i(t,e,r)},hasMetadata:function(t,e,r){return!!a(t,e,r)},hasOwnMetadata:function(t,e,r){return!!i(t,e,r)},metadata:function(t,e){return function(r,n){s(t,e,r,n)}}};Object.assign(Reflect,c)},4126:(t,e,r)=>{r.d(e,{HI:()=>s,Mj:()=>a,h5:()=>i,uk:()=>o});var n=r(40689);const o=(0,n.oh)("DefineAction"),i=(0,n.oh)("ImmerReducer"),s=(0,n.oh)("Reducer"),a=t=>{const e=(0,n.oh)("Effect");if(t&&(t.ssr||t.payloadGetter)){const{payloadGetter:e,skipFirstClientDispatch:r}=Object.assign({payloadGetter:void 0,skipFirstClientDispatch:!0},t);return(t,o,i)=>((0,n.Ax)(t,{action:o,payloadGetter:e}),r&&(0,n._6)(t,o),a()(t,o,i))}return e()}},47589:(t,e,r)=>{r.d(e,{Z:()=>o,z:()=>n});const n=!1;let o;n&&(o=new Map)},40689:(t,e,r)=>{r.d(e,{Ax:()=>u,_6:()=>l,l1:()=>s,oh:()=>a,yg:()=>d});var n=r(1055);const o={DefineAction:n.UV,Reducer:n.Sb,ImmerReducer:n.zp,Effect:n.Li},i=t=>{const e=(e,r)=>{const n=Reflect.getMetadata(t,e);return n&&Array.isArray(n)?n:r};return{get:e,add:(r,n)=>{const o=e(r);o?o.push(n):Reflect.defineMetadata(t,[n],r)}}};function s(t,e,r){const{get:n}=i(o[e]);return n(t,r)}function a(t){return()=>(e,r,n)=>{if("function"==typeof e||!r)throw new Error(`${t} can only be used to decorate properties.`);const{add:s}=i(o[t]);return s(e,r),n}}const{get:c,add:u}=i(n.LI),{get:d,add:l}=i(n.yf)},93995:(t,e,r)=>{r.d(e,{n:()=>s});var n=r(38203),o=r(47589);const i=new Set,s=t=>{if("string"!=typeof t)throw new TypeError("Module name should be string");if(i.has(t)){if(!o.z)throw new Error(`Duplicated Module name: ${t}`);console.warn(`Duplicated Module name found: \`${t}\`. this warning may caused by two reasons:\n    1. You defined two modules with the same name passed. If so, you should check your definitions and avoid it.\n    2. We detected your code is running with HMR environment. If so, you can safely ignore this warning.`)}else i.add(t);return e=>(e.prototype.moduleName=t,(0,n._)()(e))};o.z&&(s.removeModule=(t,e)=>{i.delete(t),o.Z.set(t,e)})},64162:(t,e,r)=>{function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[V]}function i(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Y}(t)||Array.isArray(t)||!!t[L]||!!(null===(e=t.constructor)||void 0===e?void 0:e[L])||d(t)||l(t))}function s(t,e,r){void 0===r&&(r=!1),0===a(t)?(r?Object.keys:G)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function a(t){var e=t[V];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:l(t)?3:0}function c(t,e){return 2===a(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function u(t,e,r){var n=a(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function d(t){return F&&t instanceof Map}function l(t){return H&&t instanceof Set}function f(t){return t.o||t.t}function p(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=K(t);delete e[V];for(var r=G(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){return void 0===e&&(e=!1),y(t)||o(t)||!i(t)||(a(t)>1&&(t.set=t.add=t.clear=t.delete=v),Object.freeze(t),e&&s(t,(function(t,e){return h(e,!0)}),!0)),t}function v(){n(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=U[t];return e||n(18,t),e}function g(){return C}function b(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){S(t),t.p.forEach(R),t.p=null}function S(t){t===C&&(C=t.l)}function P(t){return C={p:[],l:C,h:t,m:!0,_:0}}function R(t){var e=t[V];0===e.i||1===e.i?e.j():e.g=!0}function O(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||m("ES5").S(e,t,o),o?(r[V].P&&(w(e),n(4)),i(t)&&(t=A(e,t),e.l||D(e,t)),e.u&&m("Patches").M(r[V].t,t,e.u,e.s)):t=A(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==z?t:void 0}function A(t,e,r){if(y(e))return e;var n=e[V];if(!n)return s(e,(function(o,i){return _(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return D(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=p(n.k):n.o,i=o,a=!1;3===n.i&&(i=new Set(o),o.clear(),a=!0),s(i,(function(e,i){return _(t,n,o,e,i,r,a)})),D(t,o,!1),r&&t.u&&m("Patches").N(n,r,t.u,t.s)}return n.o}function _(t,e,r,n,s,a,d){if(o(s)){var l=A(t,s,a&&e&&3!==e.i&&!c(e.R,n)?a.concat(n):void 0);if(u(r,n,l),!o(l))return;t.m=!1}else d&&r.add(s);if(i(s)&&!y(s)){if(!t.h.D&&t._<1)return;A(t,s),e&&e.A.l||D(t,s)}}function D(t,e,r){void 0===r&&(r=!1),!t.l&&t.h.D&&t.m&&h(e,r)}function j(t,e){var r=t[V];return(r?f(r):t)[e]}function M(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function E(t){t.P||(t.P=!0,t.l&&E(t.l))}function $(t){t.o||(t.o=p(t.t))}function I(t,e,r){var n=d(e)?m("MapSet").F(e,r):l(e)?m("MapSet").T(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,R:{},l:e,t,k:null,o:null,j:null,C:!1},o=n,i=W;r&&(o=[n],i=Q);var s=Proxy.revocable(o,i),a=s.revoke,c=s.proxy;return n.k=c,n.j=a,c}(e,r):m("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function x(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[V],o=a(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=N(e,o),n.I=!1}else r=N(e,o);return s(r,(function(e,o){n&&function(t,e){return 2===a(t)?t.get(e):t[e]}(n.t,e)===o||u(r,e,t(o))})),3===o?new Set(r):r}(t)}function N(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return p(t)}r.d(e,{E:()=>bt});var k,C,T="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,H="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,z=T?Symbol.for("immer-nothing"):((k={})["immer-nothing"]=!0,k),L=T?Symbol.for("immer-draftable"):"__$immer_draftable",V=T?Symbol.for("immer-state"):"__$immer_state",Y=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,K=Object.getOwnPropertyDescriptors||function(t){var e={};return G(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},U={},W={get:function(t,e){if(e===V)return t;var r=f(t);if(!c(r,e))return function(t,e,r){var n,o=M(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===j(t.t,e)?($(t),t.o[e]=I(t.A.h,n,t)):n},has:function(t,e){return e in f(t)},ownKeys:function(t){return Reflect.ownKeys(f(t))},set:function(t,e,r){var n=M(f(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=j(f(t),e),i=null==o?void 0:o[V];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(r,o)&&(void 0!==r||c(t.t,e)))return!0;$(t),E(t)}return t.o[e]===r&&(void 0!==r||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==j(t.t,e)||e in t.t?(t.R[e]=!1,$(t),E(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=f(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Q={};s(W,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return Q.set.call(this,t,e,void 0)},Q.set=function(t,e,r){return W.set.call(this,t[0],e,r,t[0])};var J=function(){function t(t){var e=this;this.O=B,this.D=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var s=r;r=t;var a=e;return function(t){var e=this;void 0===t&&(t=s);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var u=P(e),d=I(e,t,void 0),l=!0;try{c=r(d),l=!1}finally{l?w(u):S(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return b(u,o),O(t,u)}),(function(t){throw w(u),t})):(b(u,o),O(c,u))}if(!t||"object"!=typeof t){if(void 0===(c=r(t))&&(c=t),c===z&&(c=void 0),e.D&&h(c,!0),o){var f=[],p=[];m("Patches").M(t,c,f,p),o(f,p)}return c}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=e.produce(t,r,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=x(t));var e=P(this),r=I(this,t,void 0);return r[V].C=!0,S(e),r},e.finishDraft=function(t,e){var r=(t&&t[V]).A;return b(r,e),O(void 0,r)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!B&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),Z=new J,q=Z.produce;Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z);const X=q;var tt=r(63700),et=r(17354),rt=r(62564),nt=r(96627),ot=r(47589),it=r(40689),st=r(28103),at=r(59297),ct=r(69239),ut=r(85244),dt=r(87662),lt=r(76569),ft=r(76435),pt=r(56937),ht=r(72916);var vt=r(1055);class yt{constructor(t,e=st.D,r=st.D){this.state$=new at.m(1),this.action$=new ct.B,this.isReady=!1,this.actionSub=new ut.yU,this.initAction={type:vt.Az,payload:null,store:this},this.name=t,this.reducer=e,this.epic$=new dt.t(r)}get state(){return this.internalState}get ready(){return this.isReady}setup(t){this.internalState=t,this.state$.next(t),this.subscribeAction(),this.log(this.initAction),this.isReady=!0}addEpic(t){const{epic$:e}=this,r=e.getValue();return e.next(t((t=>{let e;return e=t instanceof ct.B?r(t):r(t.pipe((0,lt.u)())),e.pipe((0,ft.Q)(this.action$.pipe((0,pt.H)(null,null))))}))),()=>{this.epic$.next(r)}}dispatch(t){if(t.type===vt.oi)return;if(t.store!==this)return void t.store.dispatch(t);const e=this.internalState,r=this.reducer(e,t);r!==e&&(this.internalState=r,this.state$.next(r)),this.log(t),this.action$.next(t)}log(t){t.type,vt.p8}dispose(){this.actionSub.unsubscribe(),this.action$.complete(),this.state$.complete(),this.epic$.complete(),this.action$.unsubscribe(),this.epic$.unsubscribe()}subscribeAction(){this.actionSub=this.epic$.pipe((0,ht.n)((t=>t(this.action$).pipe((0,ft.Q)(this.action$.pipe((0,pt.H)(null,null))))))).subscribe({next:t=>{try{this.dispatch(t)}catch(t){console.error(t),this.action$.error(t)}},error:t=>{this.action$.closed||this.action$.error(t)}})}}const mt="undefined"==typeof globalThis?"undefined"==typeof window?r.g:window:globalThis,gt="defaultState";class bt{constructor(){this.actionStreams={},this.retryActionsCreator={},this.actionNames=[],this.restoredFromSSR=!1,this.createNoopAction=()=>this.noop(),this.terminate=()=>({type:vt.p8,payload:null,store:this.store}),this.reset=()=>({type:vt.$5,payload:null,store:this.store});const t=this.combineReducers(),e=this.combineDefineActions(),r=this.combineEffects();this.store=new yt(this.moduleName,t,r);for(const t of e)this[t]=this.store.action$.pipe((0,et.p)((({type:e})=>e===t)),(0,rt.T)((({payload:t})=>t)));this.actions={reset:this.reset,terminate:this.terminate,noop:this.noop},this.dispatchers={reset:()=>{this.store.dispatch(this.reset())},terminate:()=>{this.store.dispatch(this.terminate())},noop:()=>{this.store.dispatch(this.noop())}};for(const t of this.actionNames){const e=e=>({type:t,payload:e,store:this.store});this.actions[t]=e,this.dispatchers[t]=t=>{this.store.dispatch(e(t))},this.actionStreams[t]=this.store.action$.pipe((0,et.p)((({type:e})=>e===t)),(0,rt.T)((({payload:t})=>t)))}if("undefined"!=typeof Proxy){const t=this;return new Proxy(this,{defineProperty(e,r,n){var o;if(r===gt)if(n.set){const e=n.set;n.set=function(r){var n;return t.internalDefaultState=r,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(n=mt[vt.YM])||void 0===n?void 0:n[this.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.yg)(t.constructor.prototype)||[])),e.call(this,r)}}else"value"in n&&(t.internalDefaultState=n.value,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(o=mt[vt.YM])||void 0===o?void 0:o[t.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.yg)(t.constructor.prototype)||[])));return Reflect.defineProperty(e,r,n)},set(e,r,n,o){var i;return r===gt&&(t.internalDefaultState=n,t.store.ready||(t.store.setup(t.getDefaultState()),t.actionsToRetry=new Set((null===(i=mt[vt.YM])||void 0===i?void 0:i[t.moduleName])||[]),t.actionsToSkip=new Set(t.restoredFromSSR&&(0,it.yg)(t.constructor.prototype)||[]))),Reflect.set(e,r,n,o)}})}Object.defineProperty(this,gt,{set:t=>{var e;this.internalDefaultState=t,this.store.ready||(this.store.setup(this.getDefaultState()),this.actionsToRetry=new Set((null===(e=mt[vt.YM])||void 0===e?void 0:e[this.moduleName])||[]),this.actionsToSkip=new Set(this.restoredFromSSR&&(0,it.yg)(this.constructor.prototype)||[]))},get:()=>this.getDefaultState()})}get state$(){return this.store.state$}get action$(){return this.store.action$}get state(){return this.store.state}getActions(){return this.actions}getAction$(){return this.actionStreams}retryOnClient(){return this.retryActionsCreator}noop(){return{type:vt.oi,payload:null,store:this.store}}getDefaultState(){var t,e;return null!==(e=null!==(t=this.tryReadHmrState())&&void 0!==t?t:this.tryReadSSRState())&&void 0!==e?e:this.internalDefaultState}tryReadSSRState(){const t=mt[vt.H2];if(null==t?void 0:t[this.moduleName])return this.restoredFromSSR=!0,t[this.moduleName]}tryReadHmrState(){if(ot.z){const t=ot.Z.get(this.moduleName);if(t){const e=t.state;return t.dispose(),e}}}combineEffects(){const t=(0,it.l1)(this.constructor.prototype,"Effect");return t&&0!==t.length?(this.actionNames.push(...t),e=>(0,tt.h)(...t.map((t=>{const r=this[t],n=e.pipe((0,et.p)((({type:e})=>e===t)),(0,et.p)(((e,r)=>{var n;return(!this.actionsToRetry.has(t)&&(null===(n=this.actionsToSkip)||void 0===n?void 0:n.has(t))?1:0)<=r})),(0,rt.T)((({payload:t})=>t)));return this.retryActionsCreator[t]=()=>({type:vt.gQ,payload:{module:this,name:t},store:this.store}),r.call(this,n)})))):t=>t.pipe((0,nt.w)())}combineReducers(){const t=(0,it.l1)(this.constructor.prototype,"Reducer",[]),e=(0,it.l1)(this.constructor.prototype,"ImmerReducer",[]);this.actionNames.push(...t,...e);const r=e.reduce(((t,e)=>(t[e]=this[e].bind(this),t)),{}),n=t.reduce(((t,e)=>(t[e]=this[e].bind(this),t)),{});return(t,e)=>{const{type:o}=e;return o===vt.$5?this.defaultState:n[o]?n[o](t,e.payload):r[o]?X(t,(t=>r[o](t,e.payload))):t}}combineDefineActions(){const t=(0,it.l1)(this.constructor.prototype,"DefineAction",[]);return this.actionNames.push(...t),t}}},1055:(t,e,r)=>{r.d(e,{$5:()=>d,Az:()=>a,H2:()=>h,LI:()=>f,Li:()=>n,Sb:()=>o,UV:()=>s,YM:()=>v,gQ:()=>l,oi:()=>c,p8:()=>u,yf:()=>p,zp:()=>i});const n="E",o="R",i="IR",s="D",a="IA",c="N",u="T",d="RST",l="RT",f="SA",p="RS",h="SIGI_STATE",v="SIGI_RETRY"},42051:(t,e,r)=>{function n(t){return function(e,r,n){Reflect.getMetadata("design:paramtypes",e)[n]=t}}r.d(e,{y:()=>n})},38203:(t,e,r)=>{r.d(e,{_:()=>o});var n=r(67192);function o(t){return function(e){var r;n.l.addProvider({useClass:e,provide:e});for(const e of null!==(r=null==t?void 0:t.providers)&&void 0!==r?r:[])n.l.addProvider(e);return e}}},67192:(t,e,r)=>{r.d(e,{l:()=>a});var n=r(50830);class o{constructor(t){this.provider=t,"function"==typeof t?(this.name=t.name,this.token=t):(this.name=t.provide instanceof n.n?t.provide.toString():t.provide.name,this.token=t.provide)}toString(){return this.name}}class i{constructor(){this.providersMap=new Map}addProvider(t){var e;return this.providersMap.set(null!==(e=t.provide)&&void 0!==e?e:t,t),t}findProviderByToken(t){return this.providersMap.has(t)?this.providersMap.get(t):null}}class s{constructor(t=null){this.parent=t,this.provider=new i,this.resolvedProviders=new Map,this.providersCache=new Map}addProvider(t){return this.provider.addProvider(t)}addProviders(t){for(const e of t)this.provider.addProvider(e);return this}getInstance(t){return this.getInstanceInternal(t,!0)}resolveAndInstantiate(t){return this.getInstanceInternal(t,!1)}createChild(t){const e=new s(this);return e.addProviders(t),e}resolveReflectiveProvider(t){var e;let r=null;if(this.provider.findProviderByToken(null!==(e=t.provide)&&void 0!==e?e:t)){if(this.providersCache.has(t))return this.providersCache.get(t);r=new o(t),this.providersCache.set(t,r)}return r}getInstanceInternal(t,e){let r=this,n=null,i=null;const s=this.findDeps(t);for(;r;)if(i=r.resolveReflectiveProvider(t),i){if(r.resolvedProviders.has(i)){s?e&&(r===this||this.checkDependenciesClean(r,s))?n=r.resolvedProviders.get(i):(n=this.resolveByReflectiveProvider(i,e,this),e&&(this.provider.addProvider(t),this.providersCache.set(t,i),this.resolvedProviders.set(i,n))):n=e?r.resolvedProviders.get(i):this.resolveByReflectiveProvider(i,!1,this);break}if(n=r.resolveByReflectiveProvider(i,e,this),n){e&&(this.provider.addProvider(t),this.providersCache.set(t,i),this.resolvedProviders.set(i,n));break}r=r.parent}else r=r.parent;if(!n)throw i=new o(t),new TypeError(`No provider for ${i.name}!`);return n}resolveByReflectiveProvider(t,e=!0,r=this){var n;let o=null;const{provider:i,name:s}=t;if("function"==typeof i)o=new i(...(null!==(n=Reflect.getMetadata("design:paramtypes",i))&&void 0!==n?n:[]).map((t=>r.getInstanceInternal(r.findExisting(t),e))));else if("useValue"in i)o=i.useValue;else if("useClass"in i)o=r.getInstanceInternal(i.useClass,e);else if("useFactory"in i){let t=[];i.deps&&(t=i.deps.map((t=>r.getInstanceInternal(r.findExisting(t),e)))),o=i.useFactory(...t)}else"useExisting"in i&&(o=r.getInstanceInternal(this.findExisting(i.useExisting),e));if(!o)throw new TypeError(`Can not resolve ${s}, it's not a valid provider`);return o}findExisting(t){var e;let r=null,n=this;for(;n&&(r=n.provider.findProviderByToken(t),!r);)n=n.parent;if(!r)throw new TypeError(`No provider for ${null!==(e=t.name)&&void 0!==e?e:t.toString()}`);return r}findDeps(t){return"function"==typeof t?Reflect.getMetadata("design:paramtypes",t):t.useClass?Reflect.getMetadata("design:paramtypes",t.useClass):t.deps?t.deps:null}checkDependenciesClean(t,e){return e.every((e=>{const r=t.findExisting(e),n=r===this.findExisting(e),o=this.findDeps(r);return o?this.checkDependenciesClean(t,o)&&n:n}))}}const a=new class extends s{constructor(){super(...arguments),this.provider=new i}reset(){this.provider=new i,this.providersCache.clear(),this.resolvedProviders.clear()}}},50830:(t,e,r)=>{r.d(e,{n:()=>n});class n{constructor(t){this.desc=t}toString(){return this.desc}}},74463:(t,e,r)=>{r.d(e,{iI:()=>h,k9:()=>f,xG:()=>p});var n=r(58632),o=r(64162),i=r(4126),s=r(93995),a=r(50830),c=r(42051),u=r(26324),d=r(95719),l=r(62564);const f={provide:new a.n("History"),useValue:null},p={provide:new a.n("Router$"),useValue:null};let h=class extends o.E{constructor(t,e){super(),this.history=t,this.router$=e,this.defaultState=null}push(t,e){return this.getActions()._callHistory({method:"push",payloads:[t,e]})}go(t){return this.getActions()._callHistory({method:"go",payloads:[t]})}goBack(){return this.getActions()._callHistory({method:"goBack",payloads:[]})}goForward(){return this.getActions()._callHistory({method:"goForward",payloads:[]})}replace(t,e){return this.getActions()._callHistory({method:"replace",payloads:[t,e]})}_callHistory(t){return t.pipe((0,d.M)((({method:t,payloads:e})=>{this.history[t].apply(this.history,e)})),(0,l.T)((()=>this.noop())))}};(0,n.__decorate)([(0,i.Mj)(),(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[u.c]),(0,n.__metadata)("design:returntype",void 0)],h.prototype,"_callHistory",null),h=(0,n.__decorate)([(0,s.n)("@@Router"),(0,n.__param)(0,(0,c.y)(f.provide)),(0,n.__param)(1,(0,c.y)(p.provide)),(0,n.__metadata)("design:paramtypes",[Object,u.c])],h)},22980:(t,e,r)=>{r.d(e,{j:()=>c});var n=r(24643),o=r(73580),i=r(40099),s=r(69239),a=r(74463);const c=(0,i.memo)((({history:t,children:e})=>{const r=(0,i.useMemo)((()=>new s.B),[t]),c=(0,i.useMemo)((()=>[{provide:a.k9.provide,useValue:t},{provide:a.xG.provide,useValue:r}]),[t,r]);return(0,i.useEffect)((()=>t.listen(((t,e)=>{r.next({location:t,action:e})}))),[t,r]),(0,n.jsx)(o.N1,Object.assign({providers:c},{children:e}),void 0)}))},13392:(t,e,r)=>{r.d(e,{wA:()=>u,Su:()=>f,Ph:()=>l});var n=r(40099),o=r(28103),i=r(1475),s=r(95719),a=r(73580);function c(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;const o=Object.prototype.hasOwnProperty;for(const n of r)if(!o.call(e,n)||t[n]!==e[n])return!1;return!0}function u(t){return(0,a.Nj)(t).dispatchers}function d(t,e,r,a=c){r=r||[];const u=(0,n.useRef)(),d=(0,n.useRef)(),l=(0,n.useRef)();a(d.current,r)||(l.current=null!=e?e:o.D,u.current=l.current(t.state)),d.current=r;const f=function(){const[,t]=(0,n.useReducer)((t=>t+1),0);return t}(),p=(0,n.useCallback)((t=>{const e=l.current(t);a(u.current,e)||(u.current=e,f())}),[]),h=(0,n.useCallback)((()=>t.state$.pipe((0,i.i)(1),(0,s.M)(p)).subscribe()),[t,p]),v=(0,n.useMemo)((()=>h()),[h]);return(0,n.useEffect)((()=>{const t=v.closed?h():v;return()=>{t.unsubscribe()}}),[v,h]),u.current}function l(t,e){const{store:r}=(0,a.Nj)(t);return d(r,null==e?void 0:e.selector,null==e?void 0:e.dependencies,null==e?void 0:e.equalFn)}function f(t,e){const r=(0,a.Nj)(t),{store:n}=r;return[d(n,null==e?void 0:e.selector,null==e?void 0:e.dependencies,null==e?void 0:e.equalFn),r.dispatchers]}},73580:(t,e,r)=>{r.d(e,{N1:()=>a,Nj:()=>c});var n=r(24643),o=r(67192),i=r(40099);const s=(0,i.createContext)(o.l),a=(0,i.memo)((({providers:t=[],children:e})=>{const r=(0,i.useContext)(s),o=(0,i.useMemo)((()=>r.createChild(t)),[r,...t]);return(0,n.jsx)(s.Provider,Object.assign({value:o},{children:e}),void 0)}));function c(t){return(0,i.useContext)(s).getInstance(t)}},20146:(t,e,r)=>{r.d(e,{a:()=>o});var n=r(1055);function o(){var t,e;const r=null===(t=document.getElementById(n.H2))||void 0===t?void 0:t.textContent,o=null===(e=document.getElementById(n.YM))||void 0===e?void 0:e.textContent;r&&(window[n.H2]=JSON.parse(r)),o&&(window[n.YM]=JSON.parse(o))}}}]);