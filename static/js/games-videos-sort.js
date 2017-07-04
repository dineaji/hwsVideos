window.HOTWHEELS = HOTWHEELS || {};

// Underscore.js 1.5.2
// http://underscorejs.org
// (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
// Underscore may be freely distributed under the MIT license.
;(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","  ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map

// Backbone.js (http://backbonejs.org)
;(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.1.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var n in r){t=r[n];t.off(e,i,this);if(s||h.isEmpty(t._events))delete this._listeningTo[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={});var n=e._listenId||(e._listenId=h.uniqueId("l"));s[n]=e;if(!r&&typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};i=h.defaults({},i,h.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};M(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=h.extend({validate:true},i);if(r&&!i.wait){if(!this.set(r,i))return false}else{if(!this._validate(r,i))return false}if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};M(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}M(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e,{validationError:i}));return false}});var p=["keys","values","pairs","invert","pick","omit"];h.each(p,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var v=a.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var g={add:true,remove:true,merge:true};var m={add:true,remove:false};h.extend(v.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:false},e,m))},remove:function(t,e){var i=!h.isArray(t);t=i?[t]:h.clone(t);e||(e={});var r,s,n,a;for(r=0,s=t.length;r<s;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];n=this.indexOf(a);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=h.defaults({},e,g);if(e.parse)t=this.parse(t,e);var i=!h.isArray(t);t=i?t?[t]:[]:h.clone(t);var r,s,n,a,o,u,l;var c=e.at;var f=this.model;var p=this.comparator&&c==null&&e.sort!==false;var v=h.isString(this.comparator)?this.comparator:null;var m=[],y=[],_={};var w=e.add,b=e.merge,x=e.remove;var E=!p&&w&&x?[]:false;for(r=0,s=t.length;r<s;r++){o=t[r];if(o instanceof d){n=a=o}else{n=o[f.prototype.idAttribute]}if(u=this.get(n)){if(x)_[u.cid]=true;if(b){o=o===a?a.attributes:o;if(e.parse)o=u.parse(o,e);u.set(o,e);if(p&&!l&&u.hasChanged(v))l=true}t[r]=u}else if(w){a=t[r]=this._prepareModel(o,e);if(!a)continue;m.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}if(E)E.push(u||a)}if(x){for(r=0,s=this.length;r<s;++r){if(!_[(a=this.models[r]).cid])y.push(a)}if(y.length)this.remove(y,e)}if(m.length||E&&E.length){if(p)l=true;this.length+=m.length;if(c!=null){for(r=0,s=m.length;r<s;r++){this.models.splice(c+r,0,m[r])}}else{if(E)this.models.length=0;var T=E||m;for(r=0,s=T.length;r<s;r++){this.models.push(T[r])}}}if(l)this.sort({silent:true});if(!e.silent){for(r=0,s=m.length;r<s;r++){(a=m[r]).trigger("add",a,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();t=this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};M(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(t,e,s){if(s.wait)i.add(t,s);if(r)r(t,e,s)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e=e?h.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var _=["groupBy","countBy","sortBy"];h.each(_,function(t){v.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var w=a.View=function(t){this.cid=h.uniqueId("view");t||(t={});h.extend(this,h.pick(t,x));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var b=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];h.extend(w.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(b);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=T[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&E){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var E=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var k=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(k.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace(S,"(?:$1)?").replace($,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/[?#].*$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(O,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return h.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var R=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=v.extend=k.extend=w.extend=I.extend=R;var U=function(){throw new Error('A "url" property or function must be specified')};var M=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);

// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v1.4.1
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com

/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */
;Backbone.ChildViewContainer=function(a,b){var c=function(a){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),b.each(a,this.add,this)};b.extend(c.prototype,{add:function(a,b){var c=a.cid;this._views[c]=a,a.model&&(this._indexByModel[a.model.cid]=c),b&&(this._indexByCustom[b]=c),this._updateLength()},findByModel:function(a){return this.findByModelCid(a.cid)},findByModelCid:function(a){var b=this._indexByModel[a];return this.findByCid(b)},findByCustom:function(a){var b=this._indexByCustom[a];return this.findByCid(b)},findByIndex:function(a){return b.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var c=a.cid;a.model&&delete this._indexByModel[a.model.cid],b.any(this._indexByCustom,function(a,b){return a===c?(delete this._indexByCustom[b],!0):void 0},this),delete this._views[c],this._updateLength()},call:function(a){this.apply(a,b.tail(arguments))},apply:function(a,c){b.each(this._views,function(d){b.isFunction(d[a])&&d[a].apply(d,c||[])})},_updateLength:function(){this.length=b.size(this._views)}});var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return b.each(d,function(a){c.prototype[a]=function(){var c=b.values(this._views),d=[c].concat(b.toArray(arguments));return b[a].apply(b,d)}}),c}(Backbone,_),Backbone.Wreqr=function(a,b,c){"use strict";var d={};return d.Handlers=function(a,b){var c=function(a){this.options=a,this._wreqrHandlers={},b.isFunction(this.initialize)&&this.initialize(a)};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events,{setHandlers:function(a){b.each(a,function(a,c){var d=null;b.isObject(a)&&!b.isFunction(a)&&(d=a.context,a=a.callback),this.setHandler(c,a,d)},this)},setHandler:function(a,b,c){var d={callback:b,context:c};this._wreqrHandlers[a]=d,this.trigger("handler:add",a,b,c)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(!b)throw new Error("Handler not found for '"+a+"'");return function(){var a=Array.prototype.slice.apply(arguments);return b.callback.apply(b.context,a)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}}),c}(a,c),d.CommandStorage=function(){var b=function(a){this.options=a,this._commands={},c.isFunction(this.initialize)&&this.initialize(a)};return c.extend(b.prototype,a.Events,{getCommands:function(a){var b=this._commands[a];return b||(b={command:a,instances:[]},this._commands[a]=b),b},addCommand:function(a,b){var c=this.getCommands(a);c.instances.push(b)},clearCommands:function(a){var b=this.getCommands(a);b.instances=[]}}),b}(),d.Commands=function(a){return a.Handlers.extend({storageType:a.CommandStorage,constructor:function(b){this.options=b||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var c=Array.prototype.slice.call(arguments);a.Handlers.prototype.constructor.apply(this,c)},execute:function(a,b){a=arguments[0],b=Array.prototype.slice.call(arguments,1),this.hasHandler(a)?this.getHandler(a).apply(this,b):this.storage.addCommand(a,b)},_executeCommands:function(a,b,d){var e=this.storage.getCommands(a);c.each(e.instances,function(a){b.apply(d,a)}),this.storage.clearCommands(a)},_initializeStorage:function(a){var b,d=a.storageType||this.storageType;b=c.isFunction(d)?new d:d,this.storage=b}})}(d),d.RequestResponse=function(a){return a.Handlers.extend({request:function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);return this.getHandler(a).apply(this,b)}})}(d),d.EventAggregator=function(a,b){var c=function(){};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events),c}(a,c),d}(Backbone,Backbone.Marionette,_);var Marionette=function(a,b,c){"use strict";function d(a){return g.call(a)}function e(a,b){var c=new Error(a);throw c.name=b||"Error",c}var f={};b.Marionette=f,f.$=b.$;var g=Array.prototype.slice;return f.extend=b.Model.extend,f.getOption=function(a,b){if(a&&b){var c;return c=a.options&&b in a.options&&void 0!==a.options[b]?a.options[b]:a[b]}},f.triggerMethod=function(){function a(a,b,c){return c.toUpperCase()}var b=/(^|:)(\w)/gi,d=function(d){var e="on"+d.replace(b,a),f=this[e];return c.isFunction(this.trigger)&&this.trigger.apply(this,arguments),c.isFunction(f)?f.apply(this,c.tail(arguments)):void 0};return d}(),f.MonitorDOMRefresh=function(){function a(a){a._isShown=!0,d(a)}function b(a){a._isRendered=!0,d(a)}function d(a){a._isShown&&a._isRendered&&c.isFunction(a.triggerMethod)&&a.triggerMethod("dom:refresh")}return function(c){c.listenTo(c,"show",function(){a(c)}),c.listenTo(c,"render",function(){b(c)})}}(),function(a){function b(a,b,d,f){var g=f.split(/\s+/);c.each(g,function(c){var f=a[c];f||e("Method '"+c+"' was configured as an event handler, but does not exist."),a.listenTo(b,d,f,a)})}function d(a,b,c,d){a.listenTo(b,c,d,a)}function f(a,b,d,e){var f=e.split(/\s+/);c.each(f,function(c){var e=a[c];a.stopListening(b,d,e,a)})}function g(a,b,c,d){a.stopListening(b,c,d,a)}function h(a,b,d,e,f){b&&d&&(c.isFunction(d)&&(d=d.call(a)),c.each(d,function(d,g){c.isFunction(d)?e(a,b,g,d):f(a,b,g,d)}))}a.bindEntityEvents=function(a,c,e){h(a,c,e,d,b)},a.unbindEntityEvents=function(a,b,c){h(a,b,c,g,f)}}(f),f.Callbacks=function(){this._deferred=f.$.Deferred(),this._callbacks=[]},c.extend(f.Callbacks.prototype,{add:function(a,b){this._callbacks.push({cb:a,ctx:b}),this._deferred.done(function(c,d){b&&(c=b),a.call(c,d)})},run:function(a,b){this._deferred.resolve(b,a)},reset:function(){var a=this._callbacks;this._deferred=f.$.Deferred(),this._callbacks=[],c.each(a,function(a){this.add(a.cb,a.ctx)},this)}}),f.Controller=function(a){this.triggerMethod=f.triggerMethod,this.options=a||{},c.isFunction(this.initialize)&&this.initialize(this.options)},f.Controller.extend=f.extend,c.extend(f.Controller.prototype,b.Events,{close:function(){this.stopListening(),this.triggerMethod("close"),this.unbind()}}),f.Region=function(a){if(this.options=a||{},this.el=f.getOption(this,"el"),!this.el){var b=new Error("An 'el' must be specified for a region.");throw b.name="NoElError",b}if(this.initialize){var c=Array.prototype.slice.apply(arguments);this.initialize.apply(this,c)}},c.extend(f.Region,{buildRegion:function(a,b){var d="string"==typeof a,e="string"==typeof a.selector,f="undefined"==typeof a.regionType,g="function"==typeof a;if(!g&&!d&&!e)throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");var h,i;d&&(h=a),a.selector&&(h=a.selector),g&&(i=a),!g&&f&&(i=b),a.regionType&&(i=a.regionType);var j=new i({el:h});return a.parentEl&&(j.getEl=function(b){var d=a.parentEl;return c.isFunction(d)&&(d=d()),d.find(b)}),j}}),c.extend(f.Region.prototype,b.Events,{show:function(a){this.ensureEl();var b=a.isClosed||c.isUndefined(a.$el),d=a!==this.currentView;d&&this.close(),a.render(),(d||b)&&this.open(a),this.currentView=a,f.triggerMethod.call(this,"show",a),f.triggerMethod.call(a,"show")},ensureEl:function(){this.$el&&0!==this.$el.length||(this.$el=this.getEl(this.el))},getEl:function(a){return f.$(a)},open:function(a){this.$el.empty().append(a.el)},close:function(){var a=this.currentView;a&&!a.isClosed&&(a.close?a.close():a.remove&&a.remove(),f.triggerMethod.call(this,"close"),delete this.currentView)},attachView:function(a){this.currentView=a},reset:function(){this.close(),delete this.$el}}),f.Region.extend=f.extend,f.RegionManager=function(a){var b=a.Controller.extend({constructor:function(b){this._regions={},a.Controller.prototype.constructor.call(this,b)},addRegions:function(a,b){var d={};return c.each(a,function(a,e){"string"==typeof a&&(a={selector:a}),a.selector&&(a=c.defaults({},a,b));var f=this.addRegion(e,a);d[e]=f},this),d},addRegion:function(b,d){var e,f=c.isObject(d),g=c.isString(d),h=!!d.selector;return e=g||f&&h?a.Region.buildRegion(d,a.Region):c.isFunction(d)?a.Region.buildRegion(d,a.Region):d,this._store(b,e),this.triggerMethod("region:add",b,e),e},get:function(a){return this._regions[a]},removeRegion:function(a){var b=this._regions[a];this._remove(a,b)},removeRegions:function(){c.each(this._regions,function(a,b){this._remove(b,a)},this)},closeRegions:function(){c.each(this._regions,function(a){a.close()},this)},close:function(){this.removeRegions();var b=Array.prototype.slice.call(arguments);a.Controller.prototype.close.apply(this,b)},_store:function(a,b){this._regions[a]=b,this._setLength()},_remove:function(a,b){b.close(),delete this._regions[a],this._setLength(),this.triggerMethod("region:remove",a,b)},_setLength:function(){this.length=c.size(this._regions)}}),d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return c.each(d,function(a){b.prototype[a]=function(){var b=c.values(this._regions),d=[b].concat(c.toArray(arguments));return c[a].apply(c,d)}}),b}(f),f.TemplateCache=function(a){this.templateId=a},c.extend(f.TemplateCache,{templateCaches:{},get:function(a){var b=this.templateCaches[a];return b||(b=new f.TemplateCache(a),this.templateCaches[a]=b),b.load()},clear:function(){var a,b=d(arguments),c=b.length;if(c>0)for(a=0;c>a;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}}),c.extend(f.TemplateCache.prototype,{load:function(){if(this.compiledTemplate)return this.compiledTemplate;var a=this.loadTemplate(this.templateId);return this.compiledTemplate=this.compileTemplate(a),this.compiledTemplate},loadTemplate:function(a){var b=f.$(a).html();return b&&0!==b.length||e("Could not find template: '"+a+"'","NoTemplateError"),b},compileTemplate:function(a){return c.template(a)}}),f.Renderer={render:function(a,b){if(!a){var c=new Error("Cannot render the template since it's false, null or undefined.");throw c.name="TemplateNotFoundError",c}var d;return d="function"==typeof a?a:f.TemplateCache.get(a),d(b)}},f.View=b.View.extend({constructor:function(a){c.bindAll(this,"render");var d=Array.prototype.slice.apply(arguments);this.options=c.extend({},this.options,a),this.events=this.normalizeUIKeys(c.result(this,"events")),b.View.prototype.constructor.apply(this,d),f.MonitorDOMRefresh(this),this.listenTo(this,"show",this.onShowCalled,this)},triggerMethod:f.triggerMethod,getTemplate:function(){return f.getOption(this,"template")},mixinTemplateHelpers:function(a){a=a||{};var b=f.getOption(this,"templateHelpers");return c.isFunction(b)&&(b=b.call(this)),c.extend(a,b)},normalizeUIKeys:function(a){return"undefined"!=typeof a?(c.each(c.keys(a),function(b){var c=b.split("@ui.");2===c.length&&(a[c[0]+this.ui[c[1]]]=a[b],delete a[b])},this),a):void 0},configureTriggers:function(){if(this.triggers){var a={},b=this.normalizeUIKeys(c.result(this,"triggers"));return c.each(b,function(b,d){var e=c.isObject(b),f=e?b.event:b;a[d]=function(a){if(a){var c=a.preventDefault,d=a.stopPropagation,g=e?b.preventDefault:c,h=e?b.stopPropagation:d;g&&c&&c.apply(a),h&&d&&d.apply(a)}var i={view:this,model:this.model,collection:this.collection};this.triggerMethod(f,i)}},this),a}},delegateEvents:function(a){this._delegateDOMEvents(a),f.bindEntityEvents(this,this.model,f.getOption(this,"modelEvents")),f.bindEntityEvents(this,this.collection,f.getOption(this,"collectionEvents"))},_delegateDOMEvents:function(a){a=a||this.events,c.isFunction(a)&&(a=a.call(this));var d={},e=this.configureTriggers();c.extend(d,a,e),b.View.prototype.delegateEvents.call(this,d)},undelegateEvents:function(){var a=Array.prototype.slice.call(arguments);b.View.prototype.undelegateEvents.apply(this,a),f.unbindEntityEvents(this,this.model,f.getOption(this,"modelEvents")),f.unbindEntityEvents(this,this.collection,f.getOption(this,"collectionEvents"))},onShowCalled:function(){},close:function(){if(!this.isClosed){var a=this.triggerMethod("before:close");a!==!1&&(this.isClosed=!0,this.triggerMethod("close"),this.unbindUIElements(),this.remove())}},bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=c.result(this,"_uiBindings");this.ui={},c.each(c.keys(a),function(b){var c=a[b];this.ui[b]=this.$(c)},this)}},unbindUIElements:function(){this.ui&&this._uiBindings&&(c.each(this.ui,function(a,b){delete this.ui[b]},this),this.ui=this._uiBindings,delete this._uiBindings)}}),f.ItemView=f.View.extend({constructor:function(){f.View.prototype.constructor.apply(this,d(arguments))},serializeData:function(){var a={};return this.model?a=this.model.toJSON():this.collection&&(a={items:this.collection.toJSON()}),a},render:function(){this.isClosed=!1,this.triggerMethod("before:render",this),this.triggerMethod("item:before:render",this);var a=this.serializeData();a=this.mixinTemplateHelpers(a);var b=this.getTemplate(),c=f.Renderer.render(b,a);return this.$el.html(c),this.bindUIElements(),this.triggerMethod("render",this),this.triggerMethod("item:rendered",this),this},close:function(){this.isClosed||(this.triggerMethod("item:before:close"),f.View.prototype.close.apply(this,d(arguments)),this.triggerMethod("item:closed"))}}),f.CollectionView=f.View.extend({itemViewEventPrefix:"itemview",constructor:function(){this._initChildViewStorage(),f.View.prototype.constructor.apply(this,d(arguments)),this._initialEvents(),this.initRenderBuffer()},initRenderBuffer:function(){this.elBuffer=document.createDocumentFragment()},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){this.appendBuffer(this,this.elBuffer),this.initRenderBuffer(),this.isBuffering=!1},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this.render,this))},addChildView:function(a){this.closeEmptyView();var b=this.getItemView(a),c=this.collection.indexOf(a);this.addItemView(a,b,c)},onShowCalled:function(){this.children.each(function(a){f.triggerMethod.call(a,"show")})},triggerBeforeRender:function(){this.triggerMethod("before:render",this),this.triggerMethod("collection:before:render",this)},triggerRendered:function(){this.triggerMethod("render",this),this.triggerMethod("collection:rendered",this)},render:function(){return this.isClosed=!1,this.triggerBeforeRender(),this._renderChildren(),this.triggerRendered(),this},_renderChildren:function(){this.startBuffering(),this.closeEmptyView(),this.closeChildren(),this.collection&&this.collection.length>0?this.showCollection():this.showEmptyView(),this.endBuffering()},showCollection:function(){var a;this.collection.each(function(b,c){a=this.getItemView(b),this.addItemView(b,a,c)},this)},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this._showingEmptyView=!0;var c=new b.Model;this.addItemView(c,a,0)}},closeEmptyView:function(){this._showingEmptyView&&(this.closeChildren(),delete this._showingEmptyView)},getEmptyView:function(){return f.getOption(this,"emptyView")},getItemView:function(){var a=f.getOption(this,"itemView");return a||e("An `itemView` must be specified","NoItemViewError"),a},addItemView:function(a,b,d){var e=f.getOption(this,"itemViewOptions");c.isFunction(e)&&(e=e.call(this,a,d));var g=this.buildItemView(a,b,e);this.addChildViewEventForwarding(g),this.triggerMethod("before:item:added",g),this.children.add(g),this.renderItemView(g,d),this._isShown&&f.triggerMethod.call(g,"show"),this.triggerMethod("after:item:added",g)},addChildViewEventForwarding:function(a){var b=f.getOption(this,"itemViewEventPrefix");this.listenTo(a,"all",function(){var c=d(arguments);c[0]=b+":"+c[0],c.splice(1,0,a),f.triggerMethod.apply(this,c)},this)},renderItemView:function(a,b){a.render(),this.appendHtml(this,a,b)},buildItemView:function(a,b,d){var e=c.extend({model:a},d);return new b(e)},removeItemView:function(a){var b=this.children.findByModel(a);this.removeChildView(b),this.checkEmpty()},removeChildView:function(a){a&&(this.stopListening(a),a.close?a.close():a.remove&&a.remove(),this.children.remove(a)),this.triggerMethod("item:removed",a)},checkEmpty:function(){this.collection&&0!==this.collection.length||this.showEmptyView()},appendBuffer:function(a,b){a.$el.append(b)},appendHtml:function(a,b){a.isBuffering?a.elBuffer.appendChild(b.el):a.$el.append(b.el)},_initChildViewStorage:function(){this.children=new b.ChildViewContainer},close:function(){this.isClosed||(this.triggerMethod("collection:before:close"),this.closeChildren(),this.triggerMethod("collection:closed"),f.View.prototype.close.apply(this,d(arguments)))},closeChildren:function(){this.children.each(function(a){this.removeChildView(a)},this),this.checkEmpty()}}),f.CompositeView=f.CollectionView.extend({constructor:function(){f.CollectionView.prototype.constructor.apply(this,d(arguments))},_initialEvents:function(){this.once("render",function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this._renderChildren,this))})},getItemView:function(){var a=f.getOption(this,"itemView")||this.constructor;return a||e("An `itemView` must be specified","NoItemViewError"),a},serializeData:function(){var a={};return this.model&&(a=this.model.toJSON()),a},render:function(){this.isRendered=!0,this.isClosed=!1,this.resetItemViewContainer(),this.triggerBeforeRender();var a=this.renderModel();return this.$el.html(a),this.bindUIElements(),this.triggerMethod("composite:model:rendered"),this._renderChildren(),this.triggerMethod("composite:rendered"),this.triggerRendered(),this},_renderChildren:function(){this.isRendered&&(f.CollectionView.prototype._renderChildren.call(this),this.triggerMethod("composite:collection:rendered"))},renderModel:function(){var a={};a=this.serializeData(),a=this.mixinTemplateHelpers(a);var b=this.getTemplate();return f.Renderer.render(b,a)},appendBuffer:function(a,b){var c=this.getItemViewContainer(a);c.append(b)},appendHtml:function(a,b){if(a.isBuffering)a.elBuffer.appendChild(b.el);else{var c=this.getItemViewContainer(a);c.append(b.el)}},getItemViewContainer:function(a){if("$itemViewContainer"in a)return a.$itemViewContainer;var b,d=f.getOption(a,"itemViewContainer");if(d){var g=c.isFunction(d)?d():d;b=a.$(g),b.length<=0&&e("The specified `itemViewContainer` was not found: "+a.itemViewContainer,"ItemViewContainerMissingError")}else b=a.$el;return a.$itemViewContainer=b,b},resetItemViewContainer:function(){this.$itemViewContainer&&delete this.$itemViewContainer}}),f.Layout=f.ItemView.extend({regionType:f.Region,constructor:function(a){a=a||{},this._firstRender=!0,this._initializeRegions(a),f.ItemView.prototype.constructor.call(this,a)},render:function(){this.isClosed&&this._initializeRegions(),this._firstRender?this._firstRender=!1:this.isClosed||this._reInitializeRegions();var a=Array.prototype.slice.apply(arguments),b=f.ItemView.prototype.render.apply(this,a);return b},close:function(){if(!this.isClosed){this.regionManager.close();var a=Array.prototype.slice.apply(arguments);f.ItemView.prototype.close.apply(this,a)}},addRegion:function(a,b){var c={};return c[a]=b,this._buildRegions(c)[a]},addRegions:function(a){return this.regions=c.extend({},this.regions,a),this._buildRegions(a)},removeRegion:function(a){return delete this.regions[a],this.regionManager.removeRegion(a)},_buildRegions:function(a){var b=this,c={regionType:f.getOption(this,"regionType"),parentEl:function(){return b.$el}};return this.regionManager.addRegions(a,c)},_initializeRegions:function(a){var b;this._initRegionManager(),b=c.isFunction(this.regions)?this.regions(a):this.regions||{},this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.closeRegions(),this.regionManager.each(function(a){a.reset()})},_initRegionManager:function(){this.regionManager=new f.RegionManager,this.listenTo(this.regionManager,"region:add",function(a,b){this[a]=b,this.trigger("region:add",a,b)}),this.listenTo(this.regionManager,"region:remove",function(a,b){delete this[a],this.trigger("region:remove",a,b)})}}),f.AppRouter=b.Router.extend({constructor:function(a){b.Router.prototype.constructor.apply(this,d(arguments)),this.options=a||{};var c=f.getOption(this,"appRoutes"),e=this._getController();this.processAppRoutes(e,c)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},processAppRoutes:function(a,b){if(b){var d=c.keys(b).reverse();c.each(d,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return f.getOption(this,"controller")},_addAppRoute:function(a,b,d){var e=a[d];if(!e)throw new Error("Method '"+d+"' was not found on the controller");this.route(b,d,c.bind(e,a))}}),f.Application=function(a){this._initRegionManager(),this._initCallbacks=new f.Callbacks,this.vent=new b.Wreqr.EventAggregator,this.commands=new b.Wreqr.Commands,this.reqres=new b.Wreqr.RequestResponse,this.submodules={},c.extend(this,a),this.triggerMethod=f.triggerMethod},c.extend(f.Application.prototype,b.Events,{execute:function(){var a=Array.prototype.slice.apply(arguments);this.commands.execute.apply(this.commands,a)},request:function(){var a=Array.prototype.slice.apply(arguments);return this.reqres.request.apply(this.reqres,a)},addInitializer:function(a){this._initCallbacks.add(a)},start:function(a){this.triggerMethod("initialize:before",a),this._initCallbacks.run(a,this),this.triggerMethod("initialize:after",a),this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},closeRegions:function(){this._regionManager.closeRegions()},removeRegion:function(a){this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},module:function(){var a=d(arguments);return a.unshift(this),f.Module.create.apply(f.Module,a)},_initRegionManager:function(){this._regionManager=new f.RegionManager,this.listenTo(this._regionManager,"region:add",function(a,b){this[a]=b}),this.listenTo(this._regionManager,"region:remove",function(a){delete this[a]})}}),f.Application.extend=f.extend,f.Module=function(a,b){this.moduleName=a,this.submodules={},this._setupInitializersAndFinalizers(),this.app=b,this.startWithParent=!0,this.triggerMethod=f.triggerMethod},c.extend(f.Module.prototype,b.Events,{addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(c.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&(this._isInitialized=!1,f.triggerMethod.call(this,"before:stop"),c.each(this.submodules,function(a){a.stop()}),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),f.triggerMethod.call(this,"stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,d){if(a){var e=c.flatten([this,this.app,b,f,f.$,c,d]);a.apply(this,e)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new f.Callbacks,this._finalizerCallbacks=new f.Callbacks}}),c.extend(f.Module,{create:function(a,b,e){var f=a,g=d(arguments);g.splice(0,3),b=b.split(".");var h=b.length,i=[];return i[h-1]=e,c.each(b,function(b,c){var d=f;f=this._getModule(d,b,a),this._addModuleDefinition(d,f,i[c],g)},this),f},_getModule:function(a,b,c){var d=a[b];return d||(d=new f.Module(b,c),a[b]=d,a.submodules[b]=d),d},_addModuleDefinition:function(a,b,d,e){var f,g;c.isFunction(d)?(f=d,g=!0):c.isObject(d)?(f=d.define,g=d.startWithParent):g=!0,f&&b.addDefinition(f,e),b.startWithParent=b.startWithParent&&g,b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}}),f}(this,Backbone,_);
//# sourceMappingURL=backbone.marionette.map


/* 
 * Hot Wheels 
 * Games and Videos sorting behavior
 * 
 */

/*
 * ----------------
 * Render Patch
 * ----------------
 * 
 */
(function(window, document, _, $, Marionette){

var exports;
exports = window.HOTWHEELS;

_.extend(Marionette.ItemView.prototype, {
        render: function(){
            this.isClosed = false;
            this.triggerMethod('before:render', this);
            this.triggerMethod('item:before:render', this);

            var data = this.serializeData();
            data = this.mixinTemplateHelpers(data);

            var template = this.getTemplate();

            if(template){
                var html = Marionette.Renderer.render(template, data);
                this.$el.html(html);
            }

            this.bindUIElements();

            this.triggerMethod('render', this);
            this.triggerMethod('item:rendered', this);

            return this;
        },
    });

_.extend(Marionette.CompositeView.prototype, {
    render: function(){
        this.isRendered = true;
        this.isClosed = false;
        this.resetItemViewContainer();

        this.triggerBeforeRender();
        var html = this.renderModel();

        if(html){
            this.$el.html(html);
        }

        // the ui bindings is done here and not at the end of render since they
        // will not be available until after the model is rendered, but should be
        // available before the collection is rendered.
        this.bindUIElements();
        this.triggerMethod('composite:model:rendered');

        this._renderChildren();

        this.triggerMethod('composite:rendered');
        this.triggerRendered();
        return this;
    },

    renderModel: function(){
        var data = {};
        data = this.serializeData();
        data = this.mixinTemplateHelpers(data);

        var template = this.getTemplate();
        if(template){
            return Marionette.Renderer.render(template, data);
        }
        return false;
    },
});

})(window, document, _, jQuery, Marionette);


/*
 * ----------------
 * Paginator
 * ----------------
 * 
 */
(function(window, document, _, $, Marionette){

var exports;
exports = window.HOTWHEELS;

Paginator = Marionette.Controller.extend({

    // can be overriden with options
    startPage: 0,
    pageOffset: 12,
    totalPages: Infinity,

    initialize: function(options) {
        _.extend(this, options);

        this.pageCurrent = this.startPage;
        this._defaultPageCurrent = this.pageCurrent;
        this._defaultPageOffset = this.pageOffset;
    },

    reset: function() {
        this.pageCurrent = this._defaultPageCurrent;
        this.pageOffset = this._defaultPageOffset;
    },

    prev: function() {
        var page, offsets;

        page = this.pageCurrent;
        this.pageCurrent = Math.min(this.totalPages, --page);

        offsets = this.getPageAsOffsets();

        this._dispatchPageUpdate(this.pageCurrent, offsets);

        return {
            page: this.pageCurrent,
            offsets: offsets
        };
    },

    next: function() {
        var page, offsets;

        page = this.pageCurrent;
        this.pageCurrent = Math.min(this.totalPages, ++page);

        offsets = this.getPageAsOffsets();

        this._dispatchPageUpdate(this.pageCurrent, offsets);

        return {
            page: this.pageCurrent,
            offsets: offsets
        };
    },

    getCurrentPage: function() {
        return this.pageCurrent;
    },

    getPageAsOffsets: function(page) {
        page = page || this.pageCurrent;

        var start, end;

        start = page * this.pageOffset;
        end = start + this.pageOffset - 1;

        return {start: start, end: end};
    },

    _dispatchPageUpdate: function(page, offsets) {
        this.trigger('page:update', this, page, offsets);
    }
});

exports.Paginator = Paginator;

})(window, document, _, jQuery, Marionette);


/*
 * ----------------
 * Infinite Scroll
 * ----------------
 * 
 */
(function (window, document, _, $, Marionette) {
'use strict';

var exports = window.HOTWHEELS;

/**
 * Description
 *
 * A simple infinite scroll utility. Takes a simple callback that will
 * fire when the page (window) reaches a certain percentage scrolled.
 */
var InfiniteScroll = Marionette.Controller.extend({

    isPaused: false,

    initialize: function(options) {

        this.options = _.defaults(options, {
            triggerThrottle: 1000,
            scrollDebounce: 0,
            triggerElement: null,  // takes jquery selector only
            trigger: function(){}, // noop
            checkOnInit: true
        });

        this._trigger = options.trigger;

        if(this.options.triggerThrottle > 0) {
            this._trigger = _.throttle(
                this._trigger,
                this.options.triggerThrottle,
                {trailing: false} // prevents trailing edge call
            );
        }

        if(this.options.scrollDebounce > 0) {
            this._didReceiveScroll = _.debounce(
                this._didReceiveScroll,
                this.options.scrollDebounce
            );
        }

        this.$window = $(window);

        // check scroll on init
        if (this.options.checkOnInit) this._didReceiveScroll();

        this.$window.on('scroll', _.bind(this._didReceiveScroll, this));
    },

    pause: function() {
        this.isPaused = true;
    },

    unpause: function() {
        this.isPaused = false;
    },

    _getTriggerDistance: function(options) {
        var $el, eltop, documentHeight, distance;

        $el = options.triggerElement;
        eltop = $el.offset().top;
        documentHeight = $(document).height();
        distance = Math.floor(documentHeight - eltop);

        return distance;
    },

    _getViewportSize: function() {
        var height, width, win, doc, docEl, body;

        win = window;
        doc = document;
        docEl = doc.documentElement;
        body = doc.getElementsByTagName('body')[0];
        width = win.innerWidth || docEl.clientWidth || body.clientWidth;
        height = win.innerHeight || docEl.clientHeight || body.clientHeight;

        return {width: width, height: height};
    },

    _didReceiveScroll: function(e) {
        var scrollTop, viewportInfo, documentHeight, maxScroll, triggerDistance;

        scrollTop = this.$window.scrollTop();
        documentHeight = $(document).height();
        viewportInfo = this._getViewportSize();
        maxScroll = documentHeight - viewportInfo.height;
        triggerDistance = this._getTriggerDistance(this.options);

        // uses a fixed distance from the bottom, instead of a percentage
        // mostly because when the page is very tall the percentage
        // moves the trigger point around. this way the page / scroll
        // will trigger consistently as the page grows

        if(!this.isPaused) {
            var shouldTrigger;

            shouldTrigger = maxScroll - scrollTop < triggerDistance;

            if(shouldTrigger) {
                this._trigger();
            }
        }
    }
});

exports.InfiniteScroll = InfiniteScroll;


}(window, document, _, jQuery, Marionette, undefined));


/*
 * ----------------
 * Thumbs Grid
 * ----------------
 * 
 */
(function(window, document, _, $, Backbone, Marionette,
    InfiniteScroll, Paginator){

var exports;
exports = window.HOTWHEELS;

HOTWHEELS.languagePath = HOTWHEELS.languagePath || location.pathname.split('/')[1];

// ======================================================================== //
// Models
// ======================================================================== //

var ThumbModel = Backbone.Model.extend({
    defaults: {
        CustomType: null,
        ContentType: -1,
        CmsId: null,
        Title: null,
        ContentUrl: null,
        ThumbNailPath: null,
        TimesPlayed: 0,
        Rating: null
    }
});

// ======================================================================== //
// Collections
// ======================================================================== //

// original url: http://dev2.hotwheels.net/en-us/CustomData/GetPagedData

var ThumbsCollection = Backbone.Collection.extend({
    url: '/' + HOTWHEELS.languagePath + '/CustomData/GetPagedData',

    fetch: function(options) {
        if(options.resetImmediately) {
            this.reset();
        }

        return this.constructor.__super__.fetch.apply(this, arguments);
    }
});

// ======================================================================== //
// Marionette Views
// ======================================================================== //

var ThumbsSortNav = Marionette.View.extend({
    el: '.sort-nav',

    ui: {
        sortBtns: '.btn-sort'
    },

    events: {
        'click @ui.sortBtns': '_didReceiveSortClick'
    },

    getActiveFilter: function() {
        var fitler;
        filter = this.ui.sortBtns.filter('.active').data('filter');

        if(typeof filter == 'undefined') {
            throw new Error('could not find any data-filter property');
        }

        return filter;
    },

    _didReceiveSortClick: function(e) {
        if(e && e.preventDefault) e.preventDefault();

        var $buttons, $target;

        $buttons = this.ui.sortBtns;
        $target = $(e.currentTarget);
        isActive = $target.hasClass('active');

        if(isActive) return;

        $buttons.removeClass('active');
        $target.addClass('active');

        this._dispatchSortUpdate($target, this.getActiveFilter());
    },

    _dispatchSortUpdate: function($target, filter) {
        this.trigger('filter:update', this, $target, filter);
    }
});

// ======================================================================== //
// Marionette ItemViews
// ======================================================================== //

var Thumb = Marionette.ItemView.extend({
    // omitting template here for initial page load
    // colleciton view will handle injecting the correct template
    // after initial page load

    tagName: 'div',
    className: 'thumb-unit',
    $body: $('body'),

    onRender: function() {
        // need to add a video class when page is videos
        // or video detail. since this is reused between 
        // games and videos we need to do a check here.
        if ( this.$body.hasClass('page-videos') || this.$body.hasClass('page-videos-detail') ) {
            this.$el.addClass('video');
        }

        this.$el.fadeTo(0,0);
        this.$el.fadeTo(200, 1);
    }
});

var ThumbsGridStatus = Marionette.ItemView.extend({
    tagName: 'p',
    className: 'status-msg',

    initialize: function(options) {
        this.options = _.defaults(options, {
            classes: false,
            message: 'No message set.'
        });
    },

    onRender: function() {
        if(this.options.classes){
            this.$el.addClass(this.options.classes);
        }

        this.$el.fadeTo(0, 0);
    },

    onShow: function() {
        this.$el.fadeTo(200, 1);
    }
});

// ======================================================================== //
// Marionette CollectionViews
// ======================================================================== //

var ThumbsGrid = Marionette.CollectionView.extend({

    initialize: function(options) {
        _.bindAll(this, '_collectionRenderedOnce');
        this.once('collection:rendered', this._collectionRenderedOnce);
    },

    // Overrides

    buildItemView: function(item, ItemViewType, itemViewOptions) {
        // override buildItem view to initially 'render'
        // itemViews with an el, only, and no template.
        var template, options, view;

        template = '#thumbs-template';
        options = _.extend(
            {model: item, el: item.get('$el')},
            itemViewOptions);
        view = new ItemViewType(options);

        return view;
    },

    buildItemViewWithTemplate: function(item, ItemViewType, itemViewOptions) {
        // special version of the default buildItemView
        // that injects the appropriate template.
        // default itemView has no template and is 'rendered'
        // based on existing DOM
        // note: a special patch has been applied to allow
        // itemViews to render without a template
        // (usually throws an error)
        var template, options, view;

        template = '#thumbs-template';
        options = _.extend({model: item, template:template}, itemViewOptions);
        view = new ItemViewType(options);

        return view;
    },

    _collectionRenderedOnce: function() {
        // after initial render swap buildItemView methods
        this.buildItemView = this.buildItemViewWithTemplate;
    }
});

// ======================================================================== //
// Marionette Controllers
// ======================================================================== //

var ThumbsGridController = Marionette.Controller.extend({

    ui: {
        thumbsGridEl: '#thumbs-grid',
        $endpointData: $('.sort-nav')
    },

    initialize: function(options) {
        // this function is tall, but it is responsible for
        // assembling all the pieces. I've left comments for reference.

        // bind scope to some misc delegates
        _.bindAll(
            this,
            '_fetchPagedDidResolve',
            '_fetchPagedDidReject',
            '_didReceiveInfiniteScroll'
        );

        // create paginator (keeps grid page state)
        this._paginator = new Paginator({});

        // create infinite scroll handler (increments grid page)
        this._infiniteScroll = new InfiniteScroll({
            trigger: this._didReceiveInfiniteScroll,
            triggerElement: $('footer[role=contentinfo]'),
            checkOnInit: false
        });

        // create thumbSortNav (filters grid)
        this._thumbsSortNav = new ThumbsSortNav();

        // create collection with initial models (parsed values from existing dom)
        this._thumbsCollection = new ThumbsCollection(this.getInitialPageModels());

        // create thumbs grid collection view
        this._thumbsGrid = new ThumbsGrid({
            collection: this._thumbsCollection,
            itemView: Thumb,
            el: this.ui.thumbsGridEl
        });

        // create status region & associated views
        this._statusRegion = new Marionette.Region({el: '#thumbs-grid-status'});

        this._loadingStatus = new ThumbsGridStatus({
            template: '#thumbs-grid-loading-status-template',
            classes: 'loading-status'
        });

        this._endOfListStatus = new ThumbsGridStatus({
            template: '#thumbs-grid-end-status-template',
            classes: 'end-status'
        });

        this._errorStatus = new ThumbsGridStatus({
            template: '#thumbs-grid-error-status-template',
            classes: 'error-status'
        });
    },

    start: function() {

        var paginator, page, offsets;

        paginator = this._paginator;
        page = paginator.getCurrentPage();
        offsets = paginator.getPageAsOffsets();

        // bind ui elements (caches el's, assigns events), required
        this._thumbsSortNav.bindUIElements();

        // render (begin managing) thumbs grid
        this._thumbsGrid.render();

        // bind all listeners
        this._bindEventDelegates();

        // load the initial page via xhr
        // triggers an event, which triggers the load
        this.updateGridPage(page, offsets);
    },

    getInitialPageModels: function() {
        var result, iterator;

        iterator = function(el, i, thumbs) {
            var $el, CustomType, ContentType, CmsId, Title, ContentUrl,
                ThumbNailPath, TimesPlayed, Rating;

            $el = $(el);

            // just setting all the props here for ref
            return {
                CustomType: '',
                ContentType: '',
                CmsId: $el.find('>a').attr('compId'),
                Title: $el.find('.title').text(),
                ContentUrl: $el.find('>a').attr('href'),
                ThumbNailPath: $el.find('.thumb').attr('src'),
                TimesPlayed: 0,
                Rating: null,

                // special ref to assist in initial
                // rendering; does not appear in native json resp.
                $el: $el
            };
        };

        result = _.map($('#thumbs-grid .thumb-unit'), iterator, this);
        return result;
    },

    getUrlQueryParams: function() {
        var $el, sortNav, contentType, keywordId, filter, result;

        $el = this.ui.$endpointData;
        sortNav = this._thumbsSortNav;
        contentType = $el.data('content');
        keywordId = $el.data('keyword-id');
        filter = sortNav.getActiveFilter();

        // built results with required params
        result = {
            content: contentType
        };

        // optional params
        if(typeof keywordId !== 'undefined') result['keywordId'] = keywordId;
        if(typeof filter !== 'undefined') result['filter'] = filter;

        return result;
    },

    updateGridFilter: function() {
        var urlData, paginator, offsets;

        urlData = this.getUrlQueryParams();
        paginator = this._paginator;

        paginator.reset();
        offsets = paginator.getPageAsOffsets();

        _.extend(urlData, {
            startPos: offsets.start,
            endPos: offsets.end
        });

        this._fetchPagedData({data: urlData, resetImmediately: true});
    },

    updateGridPage: function(page, offsets) {
        var urlData;

        urlData = this.getUrlQueryParams();

        _.extend(urlData, {
            startPos: offsets.start,
            endPos: offsets.end
        });

        this._fetchPagedData({data: urlData, add:true, remove:false});
    },

    showStatus: function(view) {
        this._statusRegion.show(view);
    },

    clearStatus: function() {
        this._statusRegion.close();
    },

    // Privates

    _fetchPagedData: function(options) {
        var infiniteScroll, collection;

        infiniteScroll = this._infiniteScroll;
        collection = this._thumbsCollection;

        // pause infinite scroll while page loading new items
        // unpauses when page resolves successfully
        infiniteScroll.pause();

        this.showStatus(this._loadingStatus);

        // fetch page from collection
        $.when(collection.fetch(options))
        .done(this._fetchPagedDidResolve)
        .fail(this._fetchPagedDidReject);
    },

    _bindEventDelegates: function() {
        var paginator, sortNav;

        _.bindAll(
            this,
            '_didReceivePageUpdate',
            '_didReceiveFilterUpdate'
        );

        paginator = this._paginator;
        paginator.on('page:update', this._didReceivePageUpdate);

        sortNav = this._thumbsSortNav;
        sortNav.on('filter:update', this._didReceiveFilterUpdate);
    },

    // Event Delegates / Callbacks

    _didReceiveInfiniteScroll: function() {
        var paginator;

        paginator = this._paginator;
        paginator.next();
    },

    _didReceiveFilterUpdate: function(sender, $target, filter) {
        this.updateGridFilter();
    },

    _didReceivePageUpdate: function(sender, page, offsets) {
        this.updateGridPage(page, offsets);
    },

    _fetchPagedDidResolve: function(response, status, promise) {
        var infiniteScroll, responseWasNotEmpty;

        infiniteScroll = this._infiniteScroll;
        responseWasNotEmpty = response.length > 0;

        if(responseWasNotEmpty) {
            infiniteScroll.unpause();
            this.clearStatus();
        }
        else {
            this.showStatus(this._endOfListStatus);
        }
    },

    _fetchPagedDidReject: function(response, status, promise) {
        var infiniteScroll = this._infiniteScroll;
        infiniteScroll.pause();

        this.showStatus(this._errorStatus);
    }
});

exports.ThumbsGridController = ThumbsGridController;

})(window, document, _, jQuery, Backbone, Marionette,
    HOTWHEELS.InfiniteScroll, HOTWHEELS.Paginator);

/*
 * ----------------
 * Initialize
 * ----------------
 * 
 */
(function(window, document, _, $, ThumbsGridController){

var exports;
exports = window.HOTWHEELS;

$(function(){
    var initialize;

    initialize = function(){
        var gridController;

        gridController = new ThumbsGridController();
        gridController.start();
    };

    initialize();
});

})(window, document, _, jQuery, HOTWHEELS.ThumbsGridController);

