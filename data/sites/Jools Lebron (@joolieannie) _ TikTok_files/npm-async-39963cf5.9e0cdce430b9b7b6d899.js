"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1274],{54330:(e,t,n)=>{var o=n(4504),r=n(65737),f=n(89994),u=n(7781),p=o("%WeakMap%",!0),a=o("%Map%",!0),i=r("WeakMap.prototype.get",!0),s=r("WeakMap.prototype.set",!0),c=r("WeakMap.prototype.has",!0),y=r("Map.prototype.get",!0),l=r("Map.prototype.set",!0),_=r("Map.prototype.has",!0),x=function(e,t){for(var n,o=e;null!==(n=o.next);o=n)if(n.key===t)return o.next=n.next,n.next=e.next,e.next=n,n};e.exports=function(){var e,t,n,o={assert:function(e){if(!o.has(e))throw new u("Side channel does not contain "+f(e))},get:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return i(e,o)}else if(a){if(t)return y(t,o)}else if(n)return function(e,t){var n=x(e,t);return n&&n.value}(n,o)},has:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return c(e,o)}else if(a){if(t)return _(t,o)}else if(n)return function(e,t){return!!x(e,t)}(n,o);return!1},set:function(o,r){p&&o&&("object"==typeof o||"function"==typeof o)?(e||(e=new p),s(e,o,r)):a?(t||(t=new a),l(t,o,r)):(n||(n={key:{},next:null}),function(e,t,n){var o=x(e,t);o?o.value=n:e.next={key:t,next:e.next,value:n}}(n,o,r))}};return o}}}]);