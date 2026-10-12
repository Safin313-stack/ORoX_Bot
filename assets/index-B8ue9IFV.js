var Ky=Object.defineProperty;var Zy=(t,e,n)=>e in t?Ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _o=(t,e,n)=>Zy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var W0={exports:{}},Lc={},X0={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),Qy=Symbol.for("react.fragment"),e_=Symbol.for("react.strict_mode"),t_=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),r_=Symbol.for("react.forward_ref"),s_=Symbol.for("react.suspense"),o_=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),wp=Symbol.iterator;function l_(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$0=Object.assign,Y0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||q0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function K0(){}K0.prototype=ao.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||q0}var Qh=Jh.prototype=new K0;Qh.constructor=Jh;$0(Qh,ao.prototype);Qh.isPureReactComponent=!0;var bp=Array.isArray,Z0=Object.prototype.hasOwnProperty,ef={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Z0.call(e,i)&&!J0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Na,type:t,key:s,ref:o,props:r,_owner:ef.current}}function c_(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function u_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u_(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case Jy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jc(o,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&(tf(r)&&(r=c_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ep,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jc(s,a);o+=Nl(s,e,n,l,r)}else if(l=l_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jc(s,a++),o+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function d_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Pl={transition:null},h_={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:ef};function eg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=ao;at.Fragment=Qy;at.Profiler=t_;at.PureComponent=Jh;at.StrictMode=e_;at.Suspense=s_;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;at.act=eg;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Z0.call(e,l)&&!J0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Na,type:t.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(t){return t={$$typeof:i_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:n_,_context:t},t.Consumer=t};at.createElement=Q0;at.createFactory=function(t){var e=Q0.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:r_,render:t}};at.isValidElement=tf;at.lazy=function(t){return{$$typeof:a_,_payload:{_status:-1,_result:t},_init:d_}};at.memo=function(t,e){return{$$typeof:o_,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};at.unstable_act=eg;at.useCallback=function(t,e){return pn.current.useCallback(t,e)};at.useContext=function(t){return pn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};at.useEffect=function(t,e){return pn.current.useEffect(t,e)};at.useId=function(){return pn.current.useId()};at.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return pn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};at.useRef=function(t){return pn.current.useRef(t)};at.useState=function(t){return pn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return pn.current.useTransition()};at.version="18.3.1";X0.exports=at;var ve=X0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=ve,p_=Symbol.for("react.element"),m_=Symbol.for("react.fragment"),g_=Object.prototype.hasOwnProperty,x_=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v_={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)g_.call(e,i)&&!v_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:p_,type:t,key:s,ref:o,props:r,_owner:x_.current}}Lc.Fragment=m_;Lc.jsx=tg;Lc.jsxs=tg;W0.exports=Lc;var u=W0.exports,ng={exports:{}},In={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,z){var R=$.length;$.push(z);e:for(;0<R;){var A=R-1>>>1,K=$[A];if(0<r(K,z))$[A]=z,$[R]=K,R=A;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var z=$[0],R=$.pop();if(R!==z){$[0]=R;e:for(var A=0,K=$.length,te=K>>>1;A<te;){var me=2*(A+1)-1,de=$[me],le=me+1,O=$[le];if(0>r(de,R))le<K&&0>r(O,de)?($[A]=O,$[le]=R,A=le):($[A]=de,$[me]=R,A=me);else if(le<K&&0>r(O,R))$[A]=O,$[le]=R,A=le;else break e}}return z}function r($,z){var R=$.sortIndex-z.sortIndex;return R!==0?R:$.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,h=3,m=!1,x=!1,b=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=$)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _($){if(b=!1,y($),!x)if(n(l)!==null)x=!0,Q(w);else{var z=n(c);z!==null&&ee(_,z.startTime-$)}}function w($,z){x=!1,b&&(b=!1,d(S),S=-1),m=!0;var R=h;try{for(y(z),p=n(l);p!==null&&(!(p.expirationTime>z)||$&&!I());){var A=p.callback;if(typeof A=="function"){p.callback=null,h=p.priorityLevel;var K=A(p.expirationTime<=z);z=t.unstable_now(),typeof K=="function"?p.callback=K:p===n(l)&&i(l),y(z)}else i(l);p=n(l)}if(p!==null)var te=!0;else{var me=n(c);me!==null&&ee(_,me.startTime-z),te=!1}return te}finally{p=null,h=R,m=!1}}var E=!1,N=null,S=-1,C=5,L=-1;function I(){return!(t.unstable_now()-L<C)}function D(){if(N!==null){var $=t.unstable_now();L=$;var z=!0;try{z=N(!0,$)}finally{z?V():(E=!1,N=null)}}else E=!1}var V;if(typeof v=="function")V=function(){v(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,j=U.port2;U.port1.onmessage=D,V=function(){j.postMessage(null)}}else V=function(){g(D,0)};function Q($){N=$,E||(E=!0,V())}function ee($,z){S=g(function(){$(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Q(w))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var R=h;h=z;try{return $()}finally{h=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var R=h;h=$;try{return z()}finally{h=R}},t.unstable_scheduleCallback=function($,z,R){var A=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?A+R:A):R=A,$){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=R+K,$={id:f++,callback:z,priorityLevel:$,startTime:R,expirationTime:K,sortIndex:-1},R>A?($.sortIndex=R,e(c,$),n(l)===null&&$===n(c)&&(b?(d(S),S=-1):b=!0,ee(_,R-A))):($.sortIndex=K,e(l,$),x||m||(x=!0,Q(w))),$},t.unstable_shouldYield=I,t.unstable_wrapCallback=function($){var z=h;return function(){var R=h;h=z;try{return $.apply(this,arguments)}finally{h=R}}}})(rg);ig.exports=rg;var y_=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=ve,Dn=y_;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,ia={};function es(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(ia[t]=e,t=0;t<e.length;t++)sg.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,S_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ap={};function M_(t){return ud.call(Ap,t)?!0:ud.call(Tp,t)?!1:S_.test(t)?Ap[t]=!0:(Tp[t]=!0,!1)}function w_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b_(t,e,n,i){if(e===null||typeof e>"u"||w_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);Jt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);Jt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);Jt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(b_(e,n,r,i)&&(n=null),i||r===null?M_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ag=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Qc;function Uo(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function E_(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case dd:return"Profiler";case of:return"StrictMode";case hd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function T_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A_(t){var e=cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=A_(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dg(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function gd(t,e){dg(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(ko(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function hg(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C_=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){C_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R_=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(R_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wd=null,Gs=null,js=null;function Dp(t){if(t=Da(t)){if(typeof wd!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=Fc(e),wd(t.stateNode,t.type,e))}}function xg(t){Gs?js?js.push(t):js=[t]:Gs=t}function vg(){if(Gs){var t=Gs,e=js;if(js=Gs=null,Dp(t),e)for(t=0;t<e.length;t++)Dp(e[t])}}function yg(t,e){return t(e)}function _g(){}var nu=!1;function Sg(t,e,n){if(nu)return t(e,n);nu=!0;try{return yg(t,e,n)}finally{nu=!1,(Gs!==null||js!==null)&&(_g(),vg())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var bd=!1;if(Hi)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){bd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{bd=!1}function N_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var jo=!1,ec=null,tc=!1,Ed=null,P_={onError:function(t){jo=!0,ec=t}};function L_(t,e,n,i,r,s,o,a,l){jo=!1,ec=null,N_.apply(P_,arguments)}function D_(t,e,n,i,r,s,o,a,l){if(L_.apply(this,arguments),jo){if(jo){var c=ec;jo=!1,ec=null}else throw Error(xe(198));tc||(tc=!0,Ed=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ip(t){if(ts(t)!==t)throw Error(xe(188))}function I_(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ip(r),t;if(s===i)return Ip(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function wg(t){return t=I_(t),t!==null?bg(t):null}function bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=Dn.unstable_scheduleCallback,Up=Dn.unstable_cancelCallback,U_=Dn.unstable_shouldYield,k_=Dn.unstable_requestPaint,Ut=Dn.unstable_now,F_=Dn.unstable_getCurrentPriorityLevel,uf=Dn.unstable_ImmediatePriority,Tg=Dn.unstable_UserBlockingPriority,nc=Dn.unstable_NormalPriority,O_=Dn.unstable_LowPriority,Ag=Dn.unstable_IdlePriority,Dc=null,xi=null;function B_(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:H_,z_=Math.log,V_=Math.LN2;function H_(t){return t>>>=0,t===0?32:31-(z_(t)/V_|0)|0}var qa=64,$a=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function G_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=G_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function W_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,hf,Pg,Lg,Dg,Ad=!1,Ya=[],fr=null,pr=null,mr=null,oa=new Map,aa=new Map,lr=[],X_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return fr=wo(fr,t,e,n,i,r),!0;case"dragenter":return pr=wo(pr,t,e,n,i,r),!0;case"mouseover":return mr=wo(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oa.set(s,wo(oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,aa.set(s,wo(aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ig(t){var e=Or(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Mg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Md=i,n.target.dispatchEvent(i),Md=null}else return e=Da(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){Ll(t)&&n.delete(e)}function $_(){Ad=!1,fr!==null&&Ll(fr)&&(fr=null),pr!==null&&Ll(pr)&&(pr=null),mr!==null&&Ll(mr)&&(mr=null),oa.forEach(Fp),aa.forEach(Fp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ad||(Ad=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,$_)))}function la(t){function e(r){return bo(r,t)}if(0<Ya.length){bo(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&bo(fr,t),pr!==null&&bo(pr,t),mr!==null&&bo(mr,t),oa.forEach(e),aa.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&lr.shift()}var Ws=qi.ReactCurrentBatchConfig,rc=!0;function Y_(t,e,n,i){var r=xt,s=Ws.transition;Ws.transition=null;try{xt=1,ff(t,e,n,i)}finally{xt=r,Ws.transition=s}}function K_(t,e,n,i){var r=xt,s=Ws.transition;Ws.transition=null;try{xt=4,ff(t,e,n,i)}finally{xt=r,Ws.transition=s}}function ff(t,e,n,i){if(rc){var r=Cd(t,e,n,i);if(r===null)fu(t,e,i,sc,n),kp(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(kp(t,i),e&4&&-1<X_.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&Ng(s),s=Cd(t,e,n,i),s===null&&fu(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fu(t,e,i,null,n)}}var sc=null;function Cd(t,e,n,i){if(sc=null,t=cf(i),t=Or(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function Ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F_()){case uf:return 1;case Tg:return 4;case nc:case O_:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var dr=null,pf=null,Dl=null;function kg(){if(Dl)return Dl;var t,e=pf,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Dl=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Op(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Op,this.isPropagationStopped=Op,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=Un(lo),La=Lt({},lo,{view:0,detail:0}),Z_=Un(La),ru,su,Eo,Ic=Lt({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(ru=t.screenX-Eo.screenX,su=t.screenY-Eo.screenY):su=ru=0,Eo=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Bp=Un(Ic),J_=Lt({},Ic,{dataTransfer:0}),Q_=Un(J_),e1=Lt({},La,{relatedTarget:0}),ou=Un(e1),t1=Lt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=Un(t1),i1=Lt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=Un(i1),s1=Lt({},lo,{data:0}),zp=Un(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function gf(){return c1}var u1=Lt({},La,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=Un(u1),h1=Lt({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Un(h1),f1=Lt({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),p1=Un(f1),m1=Lt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=Un(m1),x1=Lt({},Ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=Un(x1),y1=[9,13,27,32],xf=Hi&&"CompositionEvent"in window,Wo=null;Hi&&"documentMode"in document&&(Wo=document.documentMode);var _1=Hi&&"TextEvent"in window&&!Wo,Fg=Hi&&(!xf||Wo&&8<Wo&&11>=Wo),Hp=" ",Gp=!1;function Og(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function S1(t,e){switch(t){case"compositionend":return Bg(e);case"keypress":return e.which!==32?null:(Gp=!0,Hp);case"textInput":return t=e.data,t===Hp&&Gp?null:t;default:return null}}function M1(t,e){if(Ns)return t==="compositionend"||!xf&&Og(t,e)?(t=kg(),Dl=pf=dr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function zg(t,e,n,i){xg(i),e=oc(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ca=null;function b1(t){Zg(t,0)}function Uc(t){var e=Ds(t);if(ug(e))return t}function E1(t,e){if(t==="change")return e}var Vg=!1;if(Hi){var au;if(Hi){var lu="oninput"in document;if(!lu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),lu=typeof Wp.oninput=="function"}au=lu}else au=!1;Vg=au&&(!document.documentMode||9<document.documentMode)}function Xp(){Xo&&(Xo.detachEvent("onpropertychange",Hg),ca=Xo=null)}function Hg(t){if(t.propertyName==="value"&&Uc(ca)){var e=[];zg(e,ca,t,cf(t)),Sg(b1,e)}}function T1(t,e,n){t==="focusin"?(Xp(),Xo=e,ca=n,Xo.attachEvent("onpropertychange",Hg)):t==="focusout"&&Xp()}function A1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(ca)}function C1(t,e){if(t==="click")return Uc(e)}function R1(t,e){if(t==="input"||t==="change")return Uc(e)}function N1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:N1;function ua(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!si(t[r],e[r]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jg(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function P1(t){var e=jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(i!==null&&vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L1=Hi&&"documentMode"in document&&11>=document.documentMode,Ps=null,Rd=null,qo=null,Nd=!1;function Yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ps==null||Ps!==Ql(i)||(i=Ps,"selectionStart"in i&&vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&ua(qo,i)||(qo=i,i=oc(Rd,"onSelect"),0<i.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ps)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},cu={},Wg={};Hi&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function kc(t){if(cu[t])return cu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wg)return cu[t]=e[n];return t}var Xg=kc("animationend"),qg=kc("animationiteration"),$g=kc("animationstart"),Yg=kc("transitionend"),Kg=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Kg.set(t,e),es(e,[t])}for(var uu=0;uu<Kp.length;uu++){var du=Kp[uu],D1=du.toLowerCase(),I1=du[0].toUpperCase()+du.slice(1);br(D1,"on"+I1)}br(Xg,"onAnimationEnd");br(qg,"onAnimationIteration");br($g,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Yg,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,D_(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,c),s=l}}}if(tc)throw t=Ed,tc=!1,Ed=null,t}function wt(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var i=t+"__bubble";n.has(i)||(Jg(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),Jg(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[Ja]){t[Ja]=!0,sg.forEach(function(n){n!=="selectionchange"&&(U1.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,hu("selectionchange",!1,e))}}function Jg(t,e,n,i){switch(Ug(e)){case 1:var r=Y_;break;case 4:r=K_;break;default:r=ff}n=r.bind(null,e,n,t),r=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sg(function(){var c=s,f=cf(n),p=[];e:{var h=Kg.get(t);if(h!==void 0){var m=mf,x=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":m=d1;break;case"focusin":x="focus",m=ou;break;case"focusout":x="blur",m=ou;break;case"beforeblur":case"afterblur":m=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=p1;break;case Xg:case qg:case $g:m=n1;break;case Yg:m=g1;break;case"scroll":m=Z_;break;case"wheel":m=v1;break;case"copy":case"cut":case"paste":m=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vp}var b=(e&4)!==0,g=!b&&t==="scroll",d=b?h!==null?h+"Capture":null:h;b=[];for(var v=c,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,d!==null&&(_=sa(v,d),_!=null&&b.push(ha(v,_,y)))),g)break;v=v.return}0<b.length&&(h=new m(h,x,null,n,f),p.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Md&&(x=n.relatedTarget||n.fromElement)&&(Or(x)||x[Gi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Or(x):null,x!==null&&(g=ts(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(b=Bp,_="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=Vp,_="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?h:Ds(m),y=x==null?h:Ds(x),h=new b(_,v+"leave",m,n,f),h.target=g,h.relatedTarget=y,_=null,Or(f)===c&&(b=new b(d,v+"enter",x,n,f),b.target=y,b.relatedTarget=g,_=b),g=_,m&&x)t:{for(b=m,d=x,v=0,y=b;y;y=hs(y))v++;for(y=0,_=d;_;_=hs(_))y++;for(;0<v-y;)b=hs(b),v--;for(;0<y-v;)d=hs(d),y--;for(;v--;){if(b===d||d!==null&&b===d.alternate)break t;b=hs(b),d=hs(d)}b=null}else b=null;m!==null&&Jp(p,h,m,b,!1),x!==null&&g!==null&&Jp(p,g,x,b,!0)}}e:{if(h=c?Ds(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=E1;else if(jp(h))if(Vg)w=R1;else{w=A1;var E=T1}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=C1);if(w&&(w=w(t,c))){zg(p,w,n,f);break e}E&&E(t,h,c),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&xd(h,"number",h.value)}switch(E=c?Ds(c):window,t){case"focusin":(jp(E)||E.contentEditable==="true")&&(Ps=E,Rd=c,qo=null);break;case"focusout":qo=Rd=Ps=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Yp(p,n,f);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":Yp(p,n,f)}var N;if(xf)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ns?Og(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Fg&&n.locale!=="ko"&&(Ns||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ns&&(N=kg()):(dr=f,pf="value"in dr?dr.value:dr.textContent,Ns=!0)),E=oc(c,S),0<E.length&&(S=new zp(S,t,null,n,f),p.push({event:S,listeners:E}),N?S.data=N:(N=Bg(n),N!==null&&(S.data=N)))),(N=_1?S1(t,n):M1(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(f=new zp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=N))}Zg(p,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=sa(t,n),s!=null&&i.unshift(ha(t,s,r)),s=sa(t,e),s!=null&&i.push(ha(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=sa(n,s),l!=null&&o.unshift(ha(n,l,a))):r||(l=sa(n,s),l!=null&&o.push(ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var k1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(k1,`
`).replace(F1,"")}function Qa(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(xe(425))}function ac(){}var Pd=null,Ld=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(z1)}:Id;function z1(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),la(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);la(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),pi="__reactFiber$"+co,fa="__reactProps$"+co,Gi="__reactContainer$"+co,Ud="__reactEvents$"+co,V1="__reactListeners$"+co,H1="__reactHandles$"+co;function Or(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[pi])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[pi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function Fc(t){return t[fa]||null}var kd=[],Is=-1;function Er(t){return{current:t}}function bt(t){0>Is||(t.current=kd[Is],kd[Is]=null,Is--)}function St(t,e){Is++,kd[Is]=t.current,t.current=e}var Mr={},ln=Er(Mr),Sn=Er(!1),Wr=Mr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function lc(){bt(Sn),bt(ln)}function nm(t,e,n){if(ln.current!==Mr)throw Error(xe(168));St(ln,e),St(Sn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,T_(t)||"Unknown",r));return Lt({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Wr=ln.current,St(ln,t),St(Sn,Sn.current),!0}function im(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=Qg(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,bt(Sn),bt(ln),St(ln,t)):bt(Sn),St(Sn,n)}var Li=null,Oc=!1,mu=!1;function ex(t){Li===null?Li=[t]:Li.push(t)}function G1(t){Oc=!0,ex(t)}function Tr(){if(!mu&&Li!==null){mu=!0;var t=0,e=xt;try{var n=Li;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Oc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),Eg(uf,Tr),r}finally{xt=e,mu=!1}}return null}var Us=[],ks=0,uc=null,dc=0,Vn=[],Hn=0,Xr=null,Ii=1,Ui="";function Ur(t,e){Us[ks++]=dc,Us[ks++]=uc,uc=t,dc=e}function tx(t,e,n){Vn[Hn++]=Ii,Vn[Hn++]=Ui,Vn[Hn++]=Xr,Xr=t;var i=Ii;t=Ui;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ni(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function yf(t){t.return!==null&&(Ur(t,1),tx(t,1,0))}function _f(t){for(;t===uc;)uc=Us[--ks],Us[ks]=null,dc=Us[--ks],Us[ks]=null;for(;t===Xr;)Xr=Vn[--Hn],Vn[Hn]=null,Ui=Vn[--Hn],Vn[Hn]=null,Ii=Vn[--Hn],Vn[Hn]=null}var Ln=null,Pn=null,Et=!1,Qn=null;function nx(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(Et){var e=Pn;if(e){var n=e;if(!rm(t,e)){if(Fd(t))throw Error(xe(418));e=gr(n.nextSibling);var i=Ln;e&&rm(t,e)?nx(i,n):(t.flags=t.flags&-4097|2,Et=!1,Ln=t)}}else{if(Fd(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Et=!1,Ln=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function el(t){if(t!==Ln)return!1;if(!Et)return sm(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Pn)){if(Fd(t))throw ix(),Error(xe(418));for(;e;)nx(t,e),e=gr(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?gr(t.stateNode.nextSibling):null;return!0}function ix(){for(var t=Pn;t;)t=gr(t.nextSibling)}function Js(){Pn=Ln=null,Et=!1}function Sf(t){Qn===null?Qn=[t]:Qn.push(t)}var j1=qi.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function rx(t){function e(d,v){if(t){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=_r(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,y,_){return v===null||v.tag!==6?(v=Mu(y,d.mode,_),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,_){var w=y.type;return w===Rs?f(d,v,y.props.children,_,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sr&&om(w)===v.type)?(_=r(v,y.props),_.ref=To(d,v,y),_.return=d,_):(_=Vl(y.type,y.key,y.props,null,d.mode,_),_.ref=To(d,v,y),_.return=d,_)}function c(d,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=wu(y,d.mode,_),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function f(d,v,y,_,w){return v===null||v.tag!==7?(v=jr(y,d.mode,_,w),v.return=d,v):(v=r(v,y),v.return=d,v)}function p(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mu(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return y=Vl(v.type,v.key,v.props,null,d.mode,y),y.ref=To(d,null,v),y.return=d,y;case Cs:return v=wu(v,d.mode,y),v.return=d,v;case sr:var _=v._init;return p(d,_(v._payload),y)}if(ko(v)||So(v))return v=jr(v,d.mode,y,null),v.return=d,v;tl(d,v)}return null}function h(d,v,y,_){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(d,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return y.key===w?l(d,v,y,_):null;case Cs:return y.key===w?c(d,v,y,_):null;case sr:return w=y._init,h(d,v,w(y._payload),_)}if(ko(y)||So(y))return w!==null?null:f(d,v,y,_,null);tl(d,y)}return null}function m(d,v,y,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(y)||null,a(v,d,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:return d=d.get(_.key===null?y:_.key)||null,l(v,d,_,w);case Cs:return d=d.get(_.key===null?y:_.key)||null,c(v,d,_,w);case sr:var E=_._init;return m(d,v,y,E(_._payload),w)}if(ko(_)||So(_))return d=d.get(y)||null,f(v,d,_,w,null);tl(v,_)}return null}function x(d,v,y,_){for(var w=null,E=null,N=v,S=v=0,C=null;N!==null&&S<y.length;S++){N.index>S?(C=N,N=null):C=N.sibling;var L=h(d,N,y[S],_);if(L===null){N===null&&(N=C);break}t&&N&&L.alternate===null&&e(d,N),v=s(L,v,S),E===null?w=L:E.sibling=L,E=L,N=C}if(S===y.length)return n(d,N),Et&&Ur(d,S),w;if(N===null){for(;S<y.length;S++)N=p(d,y[S],_),N!==null&&(v=s(N,v,S),E===null?w=N:E.sibling=N,E=N);return Et&&Ur(d,S),w}for(N=i(d,N);S<y.length;S++)C=m(N,d,S,y[S],_),C!==null&&(t&&C.alternate!==null&&N.delete(C.key===null?S:C.key),v=s(C,v,S),E===null?w=C:E.sibling=C,E=C);return t&&N.forEach(function(I){return e(d,I)}),Et&&Ur(d,S),w}function b(d,v,y,_){var w=So(y);if(typeof w!="function")throw Error(xe(150));if(y=w.call(y),y==null)throw Error(xe(151));for(var E=w=null,N=v,S=v=0,C=null,L=y.next();N!==null&&!L.done;S++,L=y.next()){N.index>S?(C=N,N=null):C=N.sibling;var I=h(d,N,L.value,_);if(I===null){N===null&&(N=C);break}t&&N&&I.alternate===null&&e(d,N),v=s(I,v,S),E===null?w=I:E.sibling=I,E=I,N=C}if(L.done)return n(d,N),Et&&Ur(d,S),w;if(N===null){for(;!L.done;S++,L=y.next())L=p(d,L.value,_),L!==null&&(v=s(L,v,S),E===null?w=L:E.sibling=L,E=L);return Et&&Ur(d,S),w}for(N=i(d,N);!L.done;S++,L=y.next())L=m(N,d,S,L.value,_),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?S:L.key),v=s(L,v,S),E===null?w=L:E.sibling=L,E=L);return t&&N.forEach(function(D){return e(d,D)}),Et&&Ur(d,S),w}function g(d,v,y,_){if(typeof y=="object"&&y!==null&&y.type===Rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:e:{for(var w=y.key,E=v;E!==null;){if(E.key===w){if(w=y.type,w===Rs){if(E.tag===7){n(d,E.sibling),v=r(E,y.props.children),v.return=d,d=v;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sr&&om(w)===E.type){n(d,E.sibling),v=r(E,y.props),v.ref=To(d,E,y),v.return=d,d=v;break e}n(d,E);break}else e(d,E);E=E.sibling}y.type===Rs?(v=jr(y.props.children,d.mode,_,y.key),v.return=d,d=v):(_=Vl(y.type,y.key,y.props,null,d.mode,_),_.ref=To(d,v,y),_.return=d,d=_)}return o(d);case Cs:e:{for(E=y.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=wu(y,d.mode,_),v.return=d,d=v}return o(d);case sr:return E=y._init,g(d,v,E(y._payload),_)}if(ko(y))return x(d,v,y,_);if(So(y))return b(d,v,y,_);tl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,y),v.return=d,d=v):(n(d,v),v=Mu(y,d.mode,_),v.return=d,d=v),o(d)):n(d,v)}return g}var Qs=rx(!0),sx=rx(!1),hc=Er(null),fc=null,Fs=null,Mf=null;function wf(){Mf=Fs=fc=null}function bf(t){var e=hc.current;bt(hc),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){fc=t,Mf=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Mf!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(fc===null)throw Error(xe(308));Fs=t,fc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Br=null;function Ef(t){Br===null?Br=[t]:Br.push(t)}function ox(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}function am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,b=a;switch(h=e,m=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(m,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,h=typeof x=="function"?x.call(m,p,h):x,h==null)break e;p=Lt({},p,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=p}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Ia={},vi=Er(Ia),pa=Er(Ia),ma=Er(Ia);function zr(t){if(t===Ia)throw Error(xe(174));return t}function Af(t,e){switch(St(ma,e),St(pa,t),St(vi,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yd(e,t)}bt(vi),St(vi,e)}function eo(){bt(vi),bt(pa),bt(ma)}function lx(t){zr(ma.current);var e=zr(vi.current),n=yd(e,t.type);e!==n&&(St(pa,t),St(vi,n))}function Cf(t){pa.current===t&&(bt(vi),bt(pa))}var At=Er(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function Rf(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var kl=qi.ReactCurrentDispatcher,xu=qi.ReactCurrentBatchConfig,qr=0,Nt=null,zt=null,Wt=null,gc=!1,$o=!1,ga=0,W1=0;function Qt(){throw Error(xe(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Pf(t,e,n,i,r,s){if(qr=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?Y1:K1,t=n(i,r),$o){s=0;do{if($o=!1,ga=0,25<=s)throw Error(xe(301));s+=1,Wt=zt=null,e.updateQueue=null,kl.current=Z1,t=n(i,r)}while($o)}if(kl.current=xc,e=zt!==null&&zt.next!==null,qr=0,Wt=zt=Nt=null,gc=!1,e)throw Error(xe(300));return t}function Lf(){var t=ga!==0;return ga=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Nt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Xn(){if(zt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?Nt.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw Error(xe(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?Nt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function xa(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((qr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Nt.lanes|=f,$r|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Nt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cx(){}function ux(t,e){var n=Nt,i=Xn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Df(fx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,va(9,hx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(xe(349));qr&30||dx(n,e,r)}return r}function dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hx(t,e,n,i){e.value=n,e.getSnapshot=i,px(e)&&mx(t)}function fx(t,e,n){return n(function(){px(e)&&mx(t)})}function px(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function mx(t){var e=ji(t,1);e!==null&&ii(e,t,1,-1)}function cm(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=$1.bind(null,Nt,t),[e.memoizedState,t]}function va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gx(){return Xn().memoizedState}function Fl(t,e,n,i){var r=di();Nt.flags|=t,r.memoizedState=va(1|e,n,void 0,i===void 0?null:i)}function Bc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Nf(i,o.deps)){r.memoizedState=va(e,n,s,i);return}}Nt.flags|=t,r.memoizedState=va(1|e,n,s,i)}function um(t,e){return Fl(8390656,8,t,e)}function Df(t,e){return Bc(2048,8,t,e)}function xx(t,e){return Bc(4,2,t,e)}function vx(t,e){return Bc(4,4,t,e)}function yx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _x(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,yx.bind(null,e,t),n)}function If(){}function Sx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function wx(t,e,n){return qr&21?(si(n,e)||(n=Cg(),Nt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function X1(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{xt=n,xu.transition=i}}function bx(){return Xn().memoizedState}function q1(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ex(t))Tx(e,n);else if(n=ox(t,e,n,i),n!==null){var r=hn();ii(n,t,i,r),Ax(n,e,i)}}function $1(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ex(t))Tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ox(t,e,r,i),n!==null&&(r=hn(),ii(n,t,i,r),Ax(n,e,i))}}function Ex(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function Tx(t,e){$o=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ax(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}var xc={readContext:Wn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Y1={readContext:Wn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,yx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=q1.bind(null,Nt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:cm,useDebugValue:If,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=cm(!1),e=t[0];return t=X1.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Nt,r=di();if(Et){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),Xt===null)throw Error(xe(349));qr&30||dx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(fx.bind(null,i,s,t),[t]),i.flags|=2048,va(9,hx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Xt.identifierPrefix;if(Et){var n=Ui,i=Ii;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K1={readContext:Wn,useCallback:Sx,useContext:Wn,useEffect:Df,useImperativeHandle:_x,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Mx,useReducer:vu,useRef:gx,useState:function(){return vu(xa)},useDebugValue:If,useDeferredValue:function(t){var e=Xn();return wx(e,zt.memoizedState,t)},useTransition:function(){var t=vu(xa)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:cx,useSyncExternalStore:ux,useId:bx,unstable_isNewReconciler:!1},Z1={readContext:Wn,useCallback:Sx,useContext:Wn,useEffect:Df,useImperativeHandle:_x,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Mx,useReducer:yu,useRef:gx,useState:function(){return yu(xa)},useDebugValue:If,useDeferredValue:function(t){var e=Xn();return zt===null?e.memoizedState=t:wx(e,zt.memoizedState,t)},useTransition:function(){var t=yu(xa)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:cx,useSyncExternalStore:ux,useId:bx,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=yr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ii(e,t,r,i),Ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=yr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ii(e,t,r,i),Ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=yr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(ii(e,t,i,n),Ul(e,t,i))}};function dm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function Cx(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=Mn(e)?Wr:ln.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=Mn(e)?Wr:ln.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zc.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function Rx(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yc||(yc=!0,Jd=i),Hd(t,e)},n}function Nx(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hd(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new J1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Q1=qi.ReactCurrentOwner,_n=!1;function dn(t,e,n,i){e.child=t===null?sx(e,null,n,i):Qs(e,t.child,n,i)}function gm(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=Pf(t,e,n,i,s,r),n=Lf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Et&&n&&yf(e),e.flags|=1,dn(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Px(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function Px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return Gd(t,e,n,i,r)}function Lx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Bs,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Bs,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(Bs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(Bs,Cn),Cn|=i;return dn(t,e,r,n),e.child}function Dx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,i,r){var s=Mn(n)?Wr:ln.current;return s=Zs(e,s),Xs(e,r),n=Pf(t,e,n,i,s,r),i=Lf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Et&&i&&yf(e),e.flags|=1,dn(t,e,n,r),e.child)}function vm(t,e,n,i,r){if(Mn(n)){var s=!0;cc(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Ol(t,e),Cx(e,n,i),Vd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Mn(n)?Wr:ln.current,c=Zs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hm(e,o,i,c),or=!1;var h=e.memoizedState;o.state=h,pc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Sn.current||or?(typeof f=="function"&&(zd(e,n,f,i),l=e.memoizedState),(a=or||dm(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ax(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=Mn(n)?Wr:ln.current,l=Zs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&hm(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,pc(e,i,o,r);var x=e.memoizedState;a!==p||h!==x||Sn.current||or?(typeof m=="function"&&(zd(e,n,m,i),x=e.memoizedState),(c=or||dm(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return jd(t,e,n,i,s,r)}function jd(t,e,n,i,r,s){Dx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&im(e,n,!1),Wi(t,e,s);i=e.stateNode,Q1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&im(e,n,!0),e.child}function Ix(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),Af(t,e.containerInfo)}function ym(t,e,n,i,r){return Js(),Sf(r),e.flags|=256,dn(t,e,n,i),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ux(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(At,r&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=Wd,t):Uf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uf(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,i){return i!==null&&Sf(i),Qs(e,t.child,null,n),t=Uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_u(Error(xe(422))),nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Wd,s);if(!(e.mode&1))return nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=_u(s,i,void 0),nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),ii(i,t,r,-1))}return Vf(),i=_u(Error(xe(421))),nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=gr(r.nextSibling),Ln=e,Et=!0,Qn=null,t!==null&&(Vn[Hn++]=Ii,Vn[Hn++]=Ui,Vn[Hn++]=Xr,Ii=t.id,Ui=t.overflow,Xr=e),e=Uf(e,i.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bd(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function kx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:Ix(e),Js();break;case 5:lx(e);break;case 1:Mn(e.type)&&cc(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?Ux(t,e,n):(St(At,At.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);St(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return kx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,Lx(t,e,n)}return Wi(t,e,n)}var Fx,qd,Ox,Bx;Fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Ox=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(vi.current);var s=null;switch(n){case"input":r=md(t,r),i=md(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=vd(t,r),i=vd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ac)}_d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nS(t,e,n){var i=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Mn(e.type)&&lc(),en(e),null;case 3:return i=e.stateNode,eo(),bt(Sn),bt(ln),Rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(th(Qn),Qn=null))),qd(t,e),en(e),null;case 5:Cf(e);var r=zr(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Ox(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return en(e),null}if(t=zr(vi.current),el(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[fa]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)wt(Oo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":Rp(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":Pp(i,s),wt("invalid",i)}_d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":Wa(i),Np(i,s,!0);break;case"textarea":Wa(i),Lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[fa]=i,Fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)wt(Oo[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":Rp(t,i),r=md(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),wt("invalid",t);break;case"textarea":Pp(t,i),r=vd(t,i),wt("invalid",t);break;default:r=i}_d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ra(t,l):typeof l=="number"&&ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&sf(t,s,l,o))}switch(n){case"input":Wa(t),Np(t,i,!1);break;case"textarea":Wa(t),Lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Bx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=zr(ma.current),zr(vi.current),el(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return en(e),null;case 13:if(bt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Pn!==null&&e.mode&1&&!(e.flags&128))ix(),Js(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[pi]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(th(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Vt===0&&(Vt=3):Vf())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return eo(),qd(t,e),t===null&&da(e.stateNode.containerInfo),en(e),null;case 10:return bf(e.type._context),en(e),null;case 17:return Mn(e.type)&&lc(),en(e),null;case 19:if(bt(At),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>no&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return en(e),null}else 2*Ut()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=At.current,St(At,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function iS(t,e){switch(_f(e),e.tag){case 1:return Mn(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),bt(Sn),bt(ln),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(bt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(At),null;case 4:return eo(),null;case 10:return bf(e.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var il=!1,sn=!1,rS=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function $d(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var Sm=!1;function sS(t,e){if(Pd=rc,t=jg(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},rc=!1,Fe=e;Fe!==null;)if(e=Fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Fe=t;else for(;Fe!==null;){e=Fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,g=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Zn(e.type,b),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(_){Dt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Fe=t;break}Fe=e.return}return x=Sm,Sm=!1,x}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$d(e,n,s)}r=r.next}while(r!==i)}}function Vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zx(t){var e=t.alternate;e!==null&&(t.alternate=null,zx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[fa],delete e[Ud],delete e[V1],delete e[H1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vx(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var Yt=null,Jn=!1;function Qi(t,e,n){for(n=n.child;n!==null;)Hx(t,e,n),n=n.sibling}function Hx(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:sn||Os(n,e);case 6:var i=Yt,r=Jn;Yt=null,Qi(t,e,n),Yt=i,Jn=r,Yt!==null&&(Jn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(Jn?(t=Yt,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),la(t)):pu(Yt,n.stateNode));break;case 4:i=Yt,r=Jn,Yt=n.stateNode.containerInfo,Jn=!0,Qi(t,e,n),Yt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!sn&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Dt(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Qi(t,e,n),sn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(i){var r=pS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,Jn=!1;break e;case 3:Yt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Yt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Yt===null)throw Error(xe(160));Hx(s,o,r),Yt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gx(e,t),e=e.sibling}function Gx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ai(t),i&4){try{Yo(3,t,t.return),Vc(3,t)}catch(b){Dt(t,t.return,b)}try{Yo(5,t,t.return)}catch(b){Dt(t,t.return,b)}}break;case 1:qn(e,t),ai(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if(qn(e,t),ai(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{ra(r,"")}catch(b){Dt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dg(r,s),Sd(a,o);var c=Sd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?gg(r,p):f==="dangerouslySetInnerHTML"?pg(r,p):f==="children"?ra(r,p):sf(r,f,p,c)}switch(a){case"input":gd(r,s);break;case"textarea":hg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Hs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(b){Dt(t,t.return,b)}}break;case 6:if(qn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Dt(t,t.return,b)}}break;case 3:if(qn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(b){Dt(t,t.return,b)}break;case 4:qn(e,t),ai(t);break;case 13:qn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Of=Ut())),i&4&&wm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,qn(e,t),sn=c):qn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Fe=t,f=t.child;f!==null;){for(p=Fe=f;Fe!==null;){switch(h=Fe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Yo(4,h,h.return);break;case 1:Os(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(b){Dt(i,n,b)}}break;case 5:Os(h,h.return);break;case 22:if(h.memoizedState!==null){Em(p);continue}}m!==null?(m.return=h,Fe=m):Em(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mg("display",o))}catch(b){Dt(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(b){Dt(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qn(e,t),ai(t),i&4&&wm(t);break;case 21:break;default:qn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vx(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ra(r,""),i.flags&=-33);var s=Mm(t);Zd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mm(t);Kd(t,a,o);break;default:throw Error(xe(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){Fe=t,jx(t)}function jx(t,e,n){for(var i=(t.mode&1)!==0;Fe!==null;){var r=Fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=il;var c=sn;if(il=o,(sn=l)&&!c)for(Fe=r;Fe!==null;)o=Fe,l=o.child,o.tag===22&&o.memoizedState!==null?Tm(r):l!==null?(l.return=o,Fe=l):Tm(r);for(;s!==null;)Fe=s,jx(s),s=s.sibling;Fe=r,il=a,sn=c}bm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Fe=s):bm(t)}}function bm(t){for(;Fe!==null;){var e=Fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&la(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}sn||e.flags&512&&Yd(e)}catch(h){Dt(e,e.return,h)}}if(e===t){Fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function Em(t){for(;Fe!==null;){var e=Fe;if(e===t){Fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function Tm(t){for(;Fe!==null;){var e=Fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Yd(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{Yd(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){Fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Fe=a;break}Fe=e.return}}var aS=Math.ceil,vc=qi.ReactCurrentDispatcher,kf=qi.ReactCurrentOwner,jn=qi.ReactCurrentBatchConfig,pt=0,Xt=null,Ot=null,Zt=0,Cn=0,Bs=Er(0),Vt=0,ya=null,$r=0,Hc=0,Ff=0,Ko=null,yn=null,Of=0,no=1/0,Ni=null,yc=!1,Jd=null,vr=null,rl=!1,hr=null,_c=0,Zo=0,Qd=null,Bl=-1,zl=0;function hn(){return pt&6?Ut():Bl!==-1?Bl:Bl=Ut()}function yr(t){return t.mode&1?pt&2&&Zt!==0?Zt&-Zt:j1.transition!==null?(zl===0&&(zl=Cg()),zl):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Ug(t.type)),t):1}function ii(t,e,n,i){if(50<Zo)throw Zo=0,Qd=null,Error(xe(185));Pa(t,n,i),(!(pt&2)||t!==Xt)&&(t===Xt&&(!(pt&2)&&(Hc|=n),Vt===4&&cr(t,Zt)),wn(t,i),n===1&&pt===0&&!(e.mode&1)&&(no=Ut()+500,Oc&&Tr()))}function wn(t,e){var n=t.callbackNode;j_(t,e);var i=ic(t,t===Xt?Zt:0);if(i===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?G1(Am.bind(null,t)):ex(Am.bind(null,t)),B1(function(){!(pt&6)&&Tr()}),n=null;else{switch(Rg(i)){case 1:n=uf;break;case 4:n=Tg;break;case 16:n=nc;break;case 536870912:n=Ag;break;default:n=nc}n=Jx(n,Wx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wx(t,e){if(Bl=-1,zl=0,pt&6)throw Error(xe(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=ic(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sc(t,i);else{e=i;var r=pt;pt|=2;var s=qx();(Xt!==t||Zt!==e)&&(Ni=null,no=Ut()+500,Gr(t,e));do try{uS();break}catch(a){Xx(t,a)}while(!0);wf(),vc.current=s,pt=r,Ot!==null?e=0:(Xt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=Td(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=ya,Gr(t,0),cr(t,i),wn(t,Ut()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!lS(r)&&(e=Sc(t,i),e===2&&(s=Td(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=ya,Gr(t,0),cr(t,i),wn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:kr(t,yn,Ni);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=Of+500-Ut(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Id(kr.bind(null,t,yn,Ni),e);break}kr(t,yn,Ni);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aS(i/1960))-i,10<i){t.timeoutHandle=Id(kr.bind(null,t,yn,Ni),i);break}kr(t,yn,Ni);break;case 5:kr(t,yn,Ni);break;default:throw Error(xe(329))}}}return wn(t,Ut()),t.callbackNode===n?Wx.bind(null,t):null}function eh(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=yn,yn=n,e!==null&&th(e)),t}function th(t){yn===null?yn=t:yn.push.apply(yn,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Ff,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Am(t){if(pt&6)throw Error(xe(327));qs();var e=ic(t,0);if(!(e&1))return wn(t,Ut()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var i=Td(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=ya,Gr(t,0),cr(t,e),wn(t,Ut()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,yn,Ni),wn(t,Ut()),null}function Bf(t,e){var n=pt;pt|=1;try{return t(e)}finally{pt=n,pt===0&&(no=Ut()+500,Oc&&Tr())}}function Yr(t){hr!==null&&hr.tag===0&&!(pt&6)&&qs();var e=pt;pt|=1;var n=jn.transition,i=xt;try{if(jn.transition=null,xt=1,t)return t()}finally{xt=i,jn.transition=n,pt=e,!(pt&6)&&Tr()}}function zf(){Cn=Bs.current,bt(Bs)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O1(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(_f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:eo(),bt(Sn),bt(ln),Rf();break;case 5:Cf(i);break;case 4:eo();break;case 13:bt(At);break;case 19:bt(At);break;case 10:bf(i.type._context);break;case 22:case 23:zf()}n=n.return}if(Xt=t,Ot=t=_r(t.current,null),Zt=Cn=e,Vt=0,ya=null,Ff=Hc=$r=0,yn=Ko=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function Xx(t,e){do{var n=Ot;try{if(wf(),kl.current=xc,gc){for(var i=Nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(qr=0,Wt=zt=Nt=null,$o=!1,ga=0,kf.current=null,n===null||n.return===null){Vt=1,ya=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=pm(o);if(m!==null){m.flags&=-257,mm(m,o,a,s,e),m.mode&1&&fm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var b=new Set;b.add(l),e.updateQueue=b}else x.add(l);break e}else{if(!(e&1)){fm(s,c,e),Vf();break e}l=Error(xe(426))}}else if(Et&&a.mode&1){var g=pm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),mm(g,o,a,s,e),Sf(to(l,a));break e}}s=l=to(l,a),Vt!==4&&(Vt=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Rx(s,l,e);am(s,d);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Nx(s,a,e);am(s,_);break e}}s=s.return}while(s!==null)}Yx(n)}catch(w){e=w,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function qx(){var t=vc.current;return vc.current=xc,t===null?xc:t}function Vf(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!($r&268435455)&&!(Hc&268435455)||cr(Xt,Zt)}function Sc(t,e){var n=pt;pt|=2;var i=qx();(Xt!==t||Zt!==e)&&(Ni=null,Gr(t,e));do try{cS();break}catch(r){Xx(t,r)}while(!0);if(wf(),pt=n,vc.current=i,Ot!==null)throw Error(xe(261));return Xt=null,Zt=0,Vt}function cS(){for(;Ot!==null;)$x(Ot)}function uS(){for(;Ot!==null&&!U_();)$x(Ot)}function $x(t){var e=Zx(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?Yx(t):Ot=e,kf.current=null}function Yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iS(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=nS(n,e,Cn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function kr(t,e,n){var i=xt,r=jn.transition;try{jn.transition=null,xt=1,dS(t,e,n,i)}finally{jn.transition=r,xt=i}return null}function dS(t,e,n,i){do qs();while(hr!==null);if(pt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(W_(t,s),t===Xt&&(Ot=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Jx(nc,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=xt;xt=1;var a=pt;pt|=4,kf.current=null,sS(t,n),Gx(n,t),P1(Ld),rc=!!Pd,Ld=Pd=null,t.current=n,oS(n),k_(),pt=a,xt=o,jn.transition=s}else t.current=n;if(rl&&(rl=!1,hr=t,_c=r),s=t.pendingLanes,s===0&&(vr=null),B_(n.stateNode),wn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yc)throw yc=!1,t=Jd,Jd=null,t;return _c&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Qd?Zo++:(Zo=0,Qd=t):Zo=0,Tr(),null}function qs(){if(hr!==null){var t=Rg(_c),e=jn.transition,n=xt;try{if(jn.transition=null,xt=16>t?16:t,hr===null)var i=!1;else{if(t=hr,hr=null,_c=0,pt&6)throw Error(xe(331));var r=pt;for(pt|=4,Fe=t.current;Fe!==null;){var s=Fe,o=s.child;if(Fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Fe=c;Fe!==null;){var f=Fe;switch(f.tag){case 0:case 11:case 15:Yo(8,f,s)}var p=f.child;if(p!==null)p.return=f,Fe=p;else for(;Fe!==null;){f=Fe;var h=f.sibling,m=f.return;if(zx(f),f===c){Fe=null;break}if(h!==null){h.return=m,Fe=h;break}Fe=m}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var g=b.sibling;b.sibling=null,b=g}while(b!==null)}}Fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Fe=o;else e:for(;Fe!==null;){if(s=Fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Fe=d;break e}Fe=s.return}}var v=t.current;for(Fe=v;Fe!==null;){o=Fe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Fe=y;else e:for(o=v;Fe!==null;){if(a=Fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vc(9,a)}}catch(w){Dt(a,a.return,w)}if(a===o){Fe=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Fe=_;break e}Fe=a.return}}if(pt=r,Tr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Dc,t)}catch{}i=!0}return i}finally{xt=n,jn.transition=e}}return!1}function Cm(t,e,n){e=to(n,e),e=Rx(t,e,1),t=xr(t,e,1),e=hn(),t!==null&&(Pa(t,1,e),wn(t,e))}function Dt(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=to(n,t),t=Nx(e,t,1),e=xr(e,t,1),t=hn(),e!==null&&(Pa(e,1,t),wn(e,t));break}}e=e.return}}function hS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Ut()-Of?Gr(t,0):Ff|=n),wn(t,e)}function Kx(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=hn();t=ji(t,e),t!==null&&(Pa(t,e,n),wn(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kx(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),Kx(t,n)}var Zx;Zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,tS(t,e,n);_n=!!(t.flags&131072)}else _n=!1,Et&&e.flags&1048576&&tx(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ol(t,e),t=e.pendingProps;var r=Zs(e,ln.current);Xs(e,n),r=Pf(null,e,i,t,r,n);var s=Lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tf(e),r.updater=zc,e.stateNode=r,r._reactInternals=e,Vd(e,i,t,n),e=jd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&yf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gS(i),t=Zn(i,t),r){case 0:e=Gd(null,e,i,t,n);break e;case 1:e=vm(null,e,i,t,n);break e;case 11:e=gm(null,e,i,t,n);break e;case 14:e=xm(null,e,i,Zn(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),vm(t,e,i,r,n);case 3:e:{if(Ix(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ax(t,e),pc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(xe(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=to(Error(xe(424)),e),e=ym(t,e,i,n,r);break e}else for(Pn=gr(e.stateNode.containerInfo.firstChild),Ln=e,Et=!0,Qn=null,n=sx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Wi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return lx(e),t===null&&Od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Dd(i,r)?o=null:s!==null&&Dd(i,s)&&(e.flags|=32),Dx(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Od(e),null;case 13:return Ux(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),gm(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,St(hc,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!Sn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=Wn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),xm(t,e,i,r,n);case 15:return Px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ol(t,e),e.tag=1,Mn(i)?(t=!0,cc(e)):t=!1,Xs(e,n),Cx(e,i,r),Vd(e,i,r,n),jd(null,e,i,!0,t,n);case 19:return kx(t,e,n);case 22:return Lx(t,e,n)}throw Error(xe(156,e.tag))};function Jx(t,e){return Eg(t,e)}function mS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new mS(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return jr(n.children,r,s,e);case of:o=8,r|=8;break;case dd:return t=Gn(12,n,e,r|2),t.elementType=dd,t.lanes=s,t;case hd:return t=Gn(13,n,e,r),t.elementType=hd,t.lanes=s,t;case fd:return t=Gn(19,n,e,r),t.elementType=fd,t.lanes=s,t;case lg:return Gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:o=10;break e;case ag:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case sr:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Gc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,i,r,s,o,a,l){return t=new xS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function vS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qx(t){if(!t)return Mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(Mn(n))return Qg(t,n,e)}return e}function ev(t,e,n,i,r,s,o,a,l){return t=Gf(n,i,!0,t,r,s,o,a,l),t.context=Qx(null),n=t.current,i=hn(),r=yr(n),s=Oi(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,Pa(t,r,i),wn(t,i),t}function jc(t,e,n,i){var r=e.current,s=hn(),o=yr(r);return n=Qx(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(ii(t,r,o,s),Ul(t,r,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function yS(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}Wc.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));jc(t,e,null,null)};Wc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){jc(null,t,null,null)}),e[Gi]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&Ig(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(o);s.call(c)}}var o=ev(e,i,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[Gi]=o.current,da(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Mc(l);a.call(c)}}var l=Gf(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=l,t[Gi]=l.current,da(t.nodeType===8?t.parentNode:t),Yr(function(){jc(e,l,n,i)}),l}function qc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mc(o);a.call(l)}}jc(e,o,t,r)}else o=_S(n,e,t,r,i);return Mc(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(df(e,n|1),wn(e,Ut()),!(pt&6)&&(no=Ut()+500,Tr()))}break;case 13:Yr(function(){var i=ji(t,1);if(i!==null){var r=hn();ii(i,t,1,r)}}),jf(t,1)}};hf=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=hn();ii(e,t,134217728,n)}jf(t,134217728)}};Pg=function(t){if(t.tag===13){var e=yr(t),n=ji(t,e);if(n!==null){var i=hn();ii(n,t,e,i)}jf(t,e)}};Lg=function(){return xt};Dg=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};wd=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fc(i);if(!r)throw Error(xe(90));ug(i),gd(i,r)}}}break;case"textarea":hg(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};yg=Bf;_g=Yr;var SS={usingClientEntryPoint:!1,Events:[Da,Ds,Fc,xg,vg,Bf]},Co={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Dc=sl.inject(MS),xi=sl}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(xe(200));return vS(t,e,null,n)};In.createRoot=function(t,e){if(!Xf(t))throw Error(xe(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,da(t.nodeType===8?t.parentNode:t),new Wf(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Yr(t)};In.hydrate=function(t,e,n){if(!Xc(e))throw Error(xe(200));return qc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wc(e)};In.render=function(t,e,n){if(!Xc(e))throw Error(xe(200));return qc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Xc(t))throw Error(xe(40));return t._reactRootContainer?(Yr(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};In.unstable_batchedUpdates=Bf;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xc(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return qc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ng.exports=In;var wS=ng.exports,iv,Pm=wS;iv=Pm.createRoot,Pm.hydrateRoot;/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ES(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:bS(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=t=>{const e=TS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bu(t){return t!=null}function CS(t,e={}){var h,m;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??Rr.width,s=t.size??t.height??Rr.height,o=((h=t.aliases)==null?void 0:h.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],a=[...t.name?[`lucide-${t.name}`]:[],...o],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?nh(...l):nh("lucide",...a,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Rr["stroke-width"])*Number(t.size??t.width??Rr.width)/Number(e.size??e.width??Rr.width):e.strokeWidth??Rr["stroke-width"];return["svg",{...Object.entries(Rr).reduce((x,[b,g])=>(x[i(b)]=g,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&bu(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&bu(e.width)&&{[i("width")]:e.width},..."height"in e&&bu(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[b,g,d]=x,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return d?[b,v,d]:[b,v]})]}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function RS(t,e={}){return CS(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},PS=ve.createContext({}),LS=()=>ve.useContext(PS),DS=ve.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:l,iconNode:c=[],icon:f={node:c,aliases:[],size:24},...p},h)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:b=!1,nonScalingStroke:g=!1,color:d="currentColor",className:v=""}=LS()??{},y=!!l||NS(p),[_,w,E=[]]=RS(f,{color:t??d,width:n??e??m,height:i??e??m,strokeWidth:r??x,absoluteStrokeWidth:s??b,nonScalingStroke:o??g,className:nh(v,a),hasA11yProp:y,attributes:p});return ve.createElement(_,{ref:h,...w},[...E.map(([N,S])=>ve.createElement(N,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ze(t,e=[],n=[]){const i=typeof t=="string"?ES(t,e,n):t,r=ve.forwardRef(({className:s,...o},a)=>ve.createElement(DS,{ref:a,icon:i,className:s,...o}));return i.name&&(r.displayName=AS(i.name)),r}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"anchor",size:24,node:[["path",{d:"M12 6v16",key:"nqf5sj"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1",key:"y7qv08"}],["path",{d:"M9 11h6",key:"1fldmi"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]]};rv.node;const Eu=Ze(rv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};sv.node;const qf=Ze(sv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};ov.node;const Tu=Ze(ov);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};av.node;const IS=Ze(av);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"battery-charging",size:24,node:[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]]};lv.node;const cv=Ze(lv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};uv.node;const dv=Ze(uv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};hv.node;const US=Ze(hv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"cat",size:24,node:[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]};fv.node;const kS=Ze(fv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};pv.node;const FS=Ze(pv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};mv.node;const OS=Ze(mv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};gv.node;const xv=Ze(gv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};vv.node;const BS=Ze(vv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};yv.node;const Lm=Ze(yv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};_v.node;const zS=Ze(_v);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv={name:"face-grinning",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302",key:"1ad3z7"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["laugh"]};Sv.node;const VS=Ze(Sv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Mv.node;const HS=Ze(Mv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};wv.node;const GS=Ze(wv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};bv.node;const jS=Ze(bv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev={name:"heart-handshake",size:24,node:[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]};Ev.node;const WS=Ze(Ev);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};Tv.node;const $c=Ze(Tv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Av.node;const XS=Ze(Av);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Cv.node;const qS=Ze(Cv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Rv.node;const $S=Ze(Rv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Nv.node;const Hl=Ze(Nv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Pv.node;const YS=Ze(Pv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv={name:"message-square-plus",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]]};Lv.node;const KS=Ze(Lv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Dv.node;const ZS=Ze(Dv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Iv.node;const Uv=Ze(Iv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv={name:"music",size:24,node:[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};kv.node;const JS=Ze(kv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Fv.node;const Dm=Ze(Fv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Ov.node;const QS=Ze(Ov);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Bv.node;const wc=Ze(Bv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};zv.node;const Vv=Ze(zv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Hv.node;const ih=Ze(Hv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};Gv.node;const eM=Ze(Gv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};jv.node;const tM=Ze(jv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Wv.node;const Xv=Ze(Wv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};qv.node;const $f=Ze(qv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};$v.node;const Yf=Ze($v);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv={name:"shuffle",size:24,node:[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]};Yv.node;const nM=Ze(Yv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Kv.node;const Im=Ze(Kv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Zv.node;const ns=Ze(Zv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv={name:"thumbs-up",size:24,node:[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]]};Jv.node;const iM=Ze(Jv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Qv.node;const rh=Ze(Qv);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};ey.node;const io=Ze(ey);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};ty.node;const rM=Ze(ty);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ny.node;const sM=Ze(ny);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};iy.node;const Kf=Ze(iy),li=typeof import.meta<"u"?"./".endsWith("/")?"./":".//":"/",Um={intro:`${li}audio/orox-intro.mp3`,cheer:`${li}audio/orox-cheer.mp3`,luffy:`${li}audio/orox-luffy.mp3`,joke:`${li}audio/orox-joke.mp3`,workday:`${li}audio/orox-workday.mp3`,privacy:`${li}audio/orox-privacy.mp3`,price:`${li}audio/orox-price.mp3`,colors:`${li}audio/orox-colors.mp3`,night:`${li}audio/orox-night.mp3`,giggle:`${li}audio/orox-giggle.mp3`};class oM{constructor(){_o(this,"ctx",null);_o(this,"isMuted",!1);_o(this,"availableVoices",[]);_o(this,"currentAudioEl",null);if(typeof window<"u"&&"speechSynthesis"in window){this.refreshVoices();try{window.speechSynthesis.onvoiceschanged=()=>{this.refreshVoices()}}catch{}}}refreshVoices(){typeof window<"u"&&"speechSynthesis"in window&&(this.availableVoices=window.speechSynthesis.getVoices())}getCutestVoice(){this.availableVoices.length===0&&this.refreshVoices();const e=this.availableVoices;if(e.length===0)return null;const n=["Samantha","Victoria","Karen","Tessa","Google US English","Google UK English Female","Jenny","Aria","Sonia","Zira","Moira","Fiona","Kyoko"];for(const s of n){const o=e.find(a=>a.name.includes(s)||a.lang.startsWith("en")&&a.name.toLowerCase().includes(s.toLowerCase()));if(o)return o}const i=e.find(s=>s.lang.startsWith("en")&&(s.name.includes("Natural")||s.name.includes("Online")));return i||e.find(s=>s.lang.startsWith("en")&&!s.name.includes("David")&&!s.name.includes("Mark")&&!s.name.includes("George")&&!s.name.includes("Alex"))||e.find(s=>s.lang.startsWith("en"))||e[0]||null}initContext(){if(!(typeof window>"u")){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}}setMuted(e){this.isMuted=e}getMuted(){return this.isMuted}playChirp(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(580,e),n.frequency.exponentialRampToValueAtTime(920,e+.08),n.frequency.exponentialRampToValueAtTime(1280,e+.18),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.22)}catch{}}playGreeting(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,time:0,dur:.1},{freq:659.25,time:.09,dur:.12},{freq:783.99,time:.2,dur:.18},{freq:1046.5,time:.32,dur:.25}].forEach(({freq:n,time:i,dur:r})=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i),o.gain.setValueAtTime(.1,e+i),o.gain.exponentialRampToValueAtTime(.001,e+i+r),s.connect(o),o.connect(this.ctx.destination),s.start(e+i),s.stop(e+i+r)})}catch{}}playNod(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[580,720,880,1100].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.06),s.gain.setValueAtTime(.08,e+i*.06),s.gain.exponentialRampToValueAtTime(.001,e+i*.06+.14),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.06),r.stop(e+i*.06+.15)})}catch{}}playWave(){this.playNod()}playCharacterSound(e){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const n=this.ctx.currentTime;if(e==="luffy")[523.25,659.25,783.99,1046.5,1318.51].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(i,n+r*.05),o.gain.setValueAtTime(.11,n+r*.05),o.gain.exponentialRampToValueAtTime(.001,n+r*.05+.18),s.connect(o),o.connect(this.ctx.destination),s.start(n+r*.05),s.stop(n+r*.05+.19)});else if(e==="spiderman"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(1400,n),i.frequency.exponentialRampToValueAtTime(450,n+.18),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.2),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.2)}else if(e==="sukuna"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(140,n),i.frequency.exponentialRampToValueAtTime(90,n+.35),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.4),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.4)}else if(e==="deadpool")[950,1450,1200].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(i,n+r*.08),o.gain.setValueAtTime(.07,n+r*.08),o.gain.exponentialRampToValueAtTime(.001,n+r*.08+.09),s.connect(o),o.connect(this.ctx.destination),s.start(n+r*.08),s.stop(n+r*.08+.1)});else if(e==="lofi")[261.63,329.63,392,493.88,587.33].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,n+r*.04),o.gain.setValueAtTime(.08,n+r*.04),o.gain.exponentialRampToValueAtTime(.001,n+.5),s.connect(o),o.connect(this.ctx.destination),s.start(n+r*.04),s.stop(n+.52)});else if(e==="ironman"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(320,n),i.frequency.exponentialRampToValueAtTime(1900,n+.25),r.gain.setValueAtTime(.09,n),r.gain.exponentialRampToValueAtTime(.001,n+.28),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.28)}else this.playChirp()}catch{}}playDance(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[523,659,784,1046,880,784,1046].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(i,e+r*.11),o.gain.setValueAtTime(.07,e+r*.11),o.gain.exponentialRampToValueAtTime(.001,e+r*.11+.13),s.connect(o),o.connect(this.ctx.destination),s.start(e+r*.11),s.stop(e+r*.11+.14)})}catch{}}playLaugh(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[740,920,800,980,840,1060].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.08),s.gain.setValueAtTime(.09,e+i*.08),s.gain.exponentialRampToValueAtTime(.001,e+i*.08+.09),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.08),r.stop(e+i*.08+.1)})}catch{}}playLove(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[440,554,659,880].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.09),s.gain.setValueAtTime(.09,e+i*.09),s.gain.exponentialRampToValueAtTime(.001,e+i*.09+.38),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.09),r.stop(e+i*.09+.4)})}catch{}}playSleep(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[659.25,523.25,392,261.63].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.18),s.gain.setValueAtTime(.06,e+i*.18),s.gain.exponentialRampToValueAtTime(.001,e+i*.18+.35),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.18),r.stop(e+i*.18+.38)})}catch{}}playShock(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(260,e),n.frequency.exponentialRampToValueAtTime(1480,e+.18),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.22)}catch{}}playSpin(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(450,e),n.frequency.linearRampToValueAtTime(1100,e+.2),n.frequency.linearRampToValueAtTime(450,e+.4),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.42),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.42)}catch{}}playClick(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(1400,e),n.frequency.exponentialRampToValueAtTime(400,e+.04),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.04)}catch{}}playCuteRobotChatter(e=1.6){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const n=this.ctx.currentTime,i=Math.max(4,Math.floor(e*6.5)),r=[659.25,739.99,783.99,880,987.77,1046.5,1174.66,1318.51,1479.98];for(let s=0;s<i;s++){const o=n+s*.13,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=s%3===0?"sine":s%3===1?"triangle":"square";const c=r[Math.floor(Math.random()*r.length)],f=r[Math.floor(Math.random()*r.length)];a.frequency.setValueAtTime(c,o),a.frequency.exponentialRampToValueAtTime(f,o+.09),l.gain.setValueAtTime(.09,o),l.gain.exponentialRampToValueAtTime(.001,o+.11),a.connect(l),l.connect(this.ctx.destination),a.start(o),a.stop(o+.12)}}catch{}}playSoftChime(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[659.25,987.77].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.05),s.gain.setValueAtTime(.045,e+i*.05),s.gain.exponentialRampToValueAtTime(.001,e+i*.05+.12),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.05),r.stop(e+i*.05+.13)})}catch{}}playCuteVoiceClip(e,n,i){if(this.isMuted)return n&&n(),setTimeout(()=>i==null?void 0:i(),1e3),!1;try{this.initContext(),this.playSoftChime(),this.currentAudioEl&&(this.currentAudioEl.pause(),this.currentAudioEl.currentTime=0);const r=Um[e]||e,s=new Audio(r);this.currentAudioEl=s;let o=!1;s.onplay=()=>{o||(o=!0,n==null||n())},s.onended=()=>{this.currentAudioEl=null,i==null||i()},s.onerror=()=>{this.currentAudioEl=null,i==null||i()};const a=s.play();return a!==void 0&&a.then(()=>{o||(o=!0,n==null||n())}).catch(()=>{i==null||i()}),!0}catch{return!1}}speak(e,n,i,r,s){if(this.initContext(),this.isMuted){n&&n(),setTimeout(()=>{i&&i()},1e3);return}if(s&&Um[s]){this.playCuteVoiceClip(s,n,i);return}const o=e.toLowerCase();let a=null;if(o.includes("luffy")||o.includes("pirate")?a="luffy":o.includes("incredible")||o.includes("shining")||o.includes("cheer")?a="cheer":o.includes("joke")||o.includes("social algorithm")?a="joke":o.includes("workday")||o.includes("pomodoro")||o.includes("timers")?a="workday":o.includes("private")||o.includes("microphone")||o.includes("privacy")?a="privacy":o.includes("$199")||o.includes("early-bird")||o.includes("price")?a="price":o.includes("tangerine")||o.includes("matte graphite")||o.includes("colors")?a="colors":o.includes("goodnight")||o.includes("sweet dreams")||o.includes("guard your desk")?a="night":o.includes("funny")||o.includes("giggle")||o.includes("tee-hee")?a="giggle":(o.includes("hello")||o.includes("introduce")||o.includes("orox"))&&(a="intro"),a){this.playCuteVoiceClip(a,n,i);return}const l=e.split(" ").length,c=Math.min(6,Math.max(1.8,l*.35));this.playSoftChime(),n&&n();let f=!1;const p=()=>{f||(f=!0,i&&i())};try{const h=`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(e.slice(0,150))}&tl=en&client=tw-ob`,m=new Audio(h);this.currentAudioEl=m,m.playbackRate=(r==null?void 0:r.rate)??1.15,m.onended=()=>{this.currentAudioEl=null,p()},m.onerror=()=>{this.fallbackSpeechSynth(e,c,p,r)},m.play().catch(()=>{this.fallbackSpeechSynth(e,c,p,r)});return}catch{this.fallbackSpeechSynth(e,c,p,r)}}fallbackSpeechSynth(e,n,i,r){let s=!1;if(typeof window<"u"&&"speechSynthesis"in window)try{const o=new SpeechSynthesisUtterance(e);o.pitch=(r==null?void 0:r.pitch)??1.35,o.rate=(r==null?void 0:r.rate)??1.08,o.volume=1;const a=this.getCutestVoice();a&&(o.voice=a),o.onend=i,o.onerror=()=>{this.playCuteRobotChatter(n),i()},window.speechSynthesis.speak(o),s=!0}catch{s=!1}s||this.playCuteRobotChatter(n),setTimeout(i,Math.round(n*1e3+400))}stopSpeaking(){this.currentAudioEl&&(this.currentAudioEl.pause(),this.currentAudioEl.currentTime=0,this.currentAudioEl=null),typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const je=new oM,aM=({onReserveClick:t})=>{const[e,n]=ve.useState(!1),[i,r]=ve.useState(!1),[s,o]=ve.useState(!1);ve.useEffect(()=>{const c=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),ve.useEffect(()=>{const c=f=>{f.key==="Escape"&&i&&r(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),ve.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const a=()=>{const c=!s;o(c),je.setMuted(c),c||je.playChirp()},l=[{label:"3D Themes",href:"#customizer"},{label:"Talk Demo",href:"#simulator"},{label:"Emotions",href:"#emotions"},{label:"Design",href:"#design"},{label:"Features",href:"#features"},{label:"Suggestions",href:"#suggestion"},{label:"FAQ",href:"#faq"}];return u.jsxs(u.Fragment,{children:[u.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe ${e?"bg-[#0A0B0E]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg":"bg-transparent py-4 sm:py-5"}`,children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsxs("a",{href:"#",onClick:()=>je.playChirp(),className:"flex items-center gap-3 group shrink-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#14161E] border-2 border-orox-orange flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform",children:u.jsxs("div",{className:"flex gap-1",children:[u.jsx("span",{className:"w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow"}),u.jsx("span",{className:"w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow"})]})}),u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xl font-extrabold tracking-tight text-white font-display",children:"ORoX"}),u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber font-semibold",children:"AI ROBOT"})]}),u.jsx("span",{className:"text-[10px] font-mono text-slate-400 -mt-0.5 hidden xs:inline",children:"Conversational Companion"})]})]}),u.jsx("nav",{className:"hidden md:flex items-center gap-6 lg:gap-8",children:l.map(c=>u.jsxs("a",{href:c.href,onClick:()=>je.playClick(),className:"text-sm font-medium text-slate-300 hover:text-orox-amber transition-colors duration-150 relative group py-1",children:[c.label,u.jsx("span",{className:"absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orox-orange transition-all duration-200 group-hover:w-full"})]},c.label))}),u.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[u.jsx("button",{onClick:a,className:`p-2.5 rounded-2xl border transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${s?"bg-white/5 border-white/10 text-slate-400 hover:text-white":"bg-orox-orange/15 border-orox-orange/40 text-orox-amber hover:bg-orox-orange/25 shadow-glow-orange hover:scale-105"}`,title:s?"Unmute Robot Sound FX":"Mute Robot Sound FX","aria-label":s?"Unmute Sound":"Mute Sound",children:s?u.jsx(rh,{className:"w-4 h-4"}):u.jsx(io,{className:"w-4 h-4 text-orox-amber animate-pulse"})}),u.jsxs("a",{href:"#suggestion",onClick:()=>{je.playGreeting(),t&&t()},className:"px-6 py-2.5 rounded-2xl text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 btn-attractive-primary cursor-pointer min-h-[44px]",children:[u.jsx(ns,{className:"w-3.5 h-3.5 text-black"}),u.jsx("span",{children:"GRAB YOUR ROBOT"}),u.jsx(Tu,{className:"w-3.5 h-3.5 text-black"})]})]}),u.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[u.jsx("button",{onClick:a,className:`p-2.5 rounded-xl border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${s?"bg-white/5 border-white/10 text-slate-400":"bg-orox-orange/15 border-orox-orange/30 text-orox-amber"}`,"aria-label":s?"Unmute audio":"Mute audio",children:s?u.jsx(rh,{className:"w-4 h-4"}):u.jsx(io,{className:"w-4 h-4 text-orox-orange"})}),u.jsx("button",{onClick:()=>r(!i),className:"p-2.5 rounded-xl bg-[#14161F] border border-white/10 text-slate-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer","aria-label":"Toggle Navigation Menu","aria-expanded":i,children:i?u.jsx(sM,{className:"w-5 h-5 text-white"}):u.jsx(YS,{className:"w-5 h-5"})})]})]}),i&&u.jsxs("div",{className:"md:hidden bg-[#0D0F14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto",children:[u.jsx("div",{className:"flex flex-col space-y-1 divide-y divide-white/5",children:l.map(c=>u.jsxs("a",{href:c.href,onClick:()=>{r(!1),je.playClick()},className:"text-base font-semibold text-slate-200 hover:text-orox-orange py-3.5 flex items-center justify-between min-h-[48px] cursor-pointer",children:[u.jsx("span",{children:c.label}),u.jsx(Tu,{className:"w-4 h-4 text-slate-500"})]},c.label))}),u.jsxs("div",{className:"pt-5 mt-4 border-t border-white/10 space-y-3",children:[u.jsxs("a",{href:"#suggestion",onClick:()=>{r(!1),je.playGreeting(),t&&t()},className:"w-full py-4 rounded-2xl text-black font-extrabold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 btn-attractive-primary cursor-pointer min-h-[48px]",children:[u.jsx("span",{children:"GRAB YOUR FIRST PERSONAL AI ROBOT"}),u.jsx(Tu,{className:"w-4 h-4 text-black"})]}),u.jsx("p",{className:"text-center text-[10px] font-mono text-slate-400 uppercase tracking-wider",children:"OROX LAUNCHING Q4 2026 • PERSONAL AI ROBOT"})]})]})]}),i&&u.jsx("div",{className:"fixed inset-0 bg-black/65 backdrop-blur-sm z-40 md:hidden animate-fade-in",onClick:()=>r(!1)})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="186",lM=0,km=1,cM=2,Gl=1,ry=2,Bo=3,Kr=0,bn=1,Di=2,Bi=0,Jo=1,Fm=2,Om=3,Bm=4,uM=5,Ts=100,dM=101,hM=102,fM=103,pM=104,mM=200,gM=201,xM=202,vM=203,sy=204,oy=205,yM=206,_M=207,SM=208,MM=209,wM=210,bM=211,EM=212,TM=213,AM=214,sh=0,oh=1,ah=2,_a=3,lh=4,ch=5,uh=6,dh=7,ay=0,CM=1,RM=2,yi=0,ly=1,cy=2,uy=3,Jf=4,dy=5,hy=6,fy=7,py=300,Zr=301,ro=302,Au=303,Cu=304,Yc=306,hh=1e3,ki=1001,fh=1002,Kt=1003,NM=1004,ol=1005,on=1006,Ru=1007,Vr=1008,Nn=1009,my=1010,gy=1011,Sa=1012,Qf=1013,_i=1014,mi=1015,Si=1016,ep=1017,tp=1018,Ma=1020,xy=35902,vy=35899,yy=1021,_y=1022,ti=1023,Xi=1026,Hr=1027,Sy=1028,np=1029,Jr=1030,ip=1031,rp=1033,jl=33776,Wl=33777,Xl=33778,ql=33779,ph=35840,mh=35841,gh=35842,xh=35843,vh=36196,yh=37492,_h=37496,Sh=37488,Mh=37489,bc=37490,wh=37491,bh=37808,Eh=37809,Th=37810,Ah=37811,Ch=37812,Rh=37813,Nh=37814,Ph=37815,Lh=37816,Dh=37817,Ih=37818,Uh=37819,kh=37820,Fh=37821,Oh=36492,Bh=36494,zh=36495,Vh=36283,Hh=36284,Ec=36285,Gh=36286,PM=3200,jh=0,LM=1,ur="",zn="srgb",Tc="srgb-linear",Ac="linear",gt="srgb",Nu=7680,DM=519,IM=512,UM=513,kM=514,sp=515,FM=516,OM=517,op=518,BM=519,zM=35044,zm="300 es",gi=2e3,wa=2001;function VM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HM(){const t=Cc("canvas");return t.style.display="block",t}const Vm={};function Hm(...t){const e="THREE."+t.shift();console.log(e,...t)}function My(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ye(...t){t=My(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=My(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function $s(...t){const e=t.join(" ");e in Vm||(Vm[e]=!0,Ye(...t))}function GM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const jM={[sh]:oh,[ah]:uh,[lh]:dh,[_a]:ch,[oh]:sh,[uh]:ah,[dh]:lh,[ch]:_a};class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gm=1234567;const Qo=Math.PI/180,ba=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function ap(t,e){return(t%e+e)%e}function WM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function XM(t,e,n){return t!==e?(n-t)/(e-t):0}function ea(t,e,n){return(1-n)*t+n*e}function qM(t,e,n,i){return ea(t,e,1-Math.exp(-n*i))}function $M(t,e=1){return e-Math.abs(ap(t,e*2)-e)}function YM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function KM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ZM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function JM(t,e){return t+Math.random()*(e-t)}function QM(t){return t*(.5-Math.random())}function ew(t){t!==void 0&&(Gm=t);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tw(t){return t*Qo}function nw(t){return t*ba}function iw(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function rw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ow(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*p,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*p,a*c);break;case"ZXZ":t.set(l*p,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*x,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*x,a*c);break;case"ZYZ":t.set(l*x,l*m,a*f,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function As(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fn={DEG2RAD:Qo,RAD2DEG:ba,generateUUID:rs,clamp:rt,euclideanModulo:ap,mapLinear:WM,inverseLerp:XM,lerp:ea,damp:qM,pingpong:$M,smoothstep:YM,smootherstep:KM,randInt:ZM,randFloat:JM,randFloatSpread:QM,seededRandom:ew,degToRad:tw,radToDeg:nw,isPowerOfTwo:iw,ceilPowerOfTwo:rw,floorPowerOfTwo:sw,setQuaternionFromProperEuler:ow,normalize:cn,denormalize:As},xp=class xp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xp.prototype.isVector2=!0;let Ee=xp;class uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],h=s[o+0],m=s[o+1],x=s[o+2],b=s[o+3];if(p!==b||l!==h||c!==m||f!==x){let g=l*h+c*m+f*x+p*b;g<0&&(h=-h,m=-m,x=-x,b=-b,g=-g);let d=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);d=Math.sin(d*v)/y,a=Math.sin(a*v)/y,l=l*d+h*a,c=c*d+m*a,f=f*d+x*a,p=p*d+b*a}else{l=l*d+h*a,c=c*d+m*a,f=f*d+x*a,p=p*d+b*a;const v=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=v,c*=v,f*=v,p*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*p+l*m-c*h,e[n+1]=l*x+f*h+c*p-a*m,e[n+2]=c*x+f*m+a*h-l*p,e[n+3]=f*x-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*p+c*m*x,this._y=c*m*p-h*f*x,this._z=c*f*x+h*m*p,this._w=c*f*p-h*m*x;break;case"YXZ":this._x=h*f*p+c*m*x,this._y=c*m*p-h*f*x,this._z=c*f*x-h*m*p,this._w=c*f*p+h*m*x;break;case"ZXY":this._x=h*f*p-c*m*x,this._y=c*m*p+h*f*x,this._z=c*f*x+h*m*p,this._w=c*f*p-h*m*x;break;case"ZYX":this._x=h*f*p-c*m*x,this._y=c*m*p+h*f*x,this._z=c*f*x-h*m*p,this._w=c*f*p+h*m*x;break;case"YZX":this._x=h*f*p+c*m*x,this._y=c*m*p+h*f*x,this._z=c*f*x-h*m*p,this._w=c*f*p-h*m*x;break;case"XZY":this._x=h*f*p-c*m*x,this._y=c*m*p-h*f*x,this._z=c*f*x+h*m*p,this._w=c*f*p+h*m*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*f,this.y=i+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let H=vp;const Pu=new H,jm=new uo,yp=class yp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],x=i[8],b=r[0],g=r[3],d=r[6],v=r[1],y=r[4],_=r[7],w=r[2],E=r[5],N=r[8];return s[0]=o*b+a*v+l*w,s[3]=o*g+a*y+l*E,s[6]=o*d+a*_+l*N,s[1]=c*b+f*v+p*w,s[4]=c*g+f*y+p*E,s[7]=c*d+f*_+p*N,s[2]=h*b+m*v+x*w,s[5]=h*g+m*y+x*E,s[8]=h*d+m*_+x*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,h=a*l-f*s,m=c*s-o*l,x=n*p+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=p*b,e[1]=(r*c-f*i)*b,e[2]=(a*i-r*o)*b,e[3]=h*b,e[4]=(f*n-r*l)*b,e[5]=(r*s-a*n)*b,e[6]=m*b,e[7]=(i*l-c*n)*b,e[8]=(o*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yp.prototype.isMatrix3=!0;let et=yp;const Lu=new et,Wm=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aw(){const t={enabled:!0,workingColorSpace:Tc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Ac:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tc]:{primaries:e,whitePoint:i,transfer:Ac,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const dt=aw();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class lw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Cc("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cw=0;class lp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Du(r[o].image)):s.push(Du(r[o]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let uw=0;const Iu=new H;class fn extends is{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=ki,r=ki,s=on,o=Vr,a=ti,l=Nn,c=fn.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=rs(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=py;fn.DEFAULT_ANISOTROPY=1;const _p=class _p{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],x=l[9],b=l[2],g=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+b)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(m+1)/2,w=(d+1)/2,E=(f+h)/4,N=(p+b)/4,S=(x+g)/4;return y>_&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=N/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=E/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=N/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(p-b)*(p-b)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(p-b)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_p.prototype.isVector4=!0;let Ct=_p;class dw extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends dw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wy extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hw extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Pc=class Pc{constructor(e,n,i,r,s,o,a,l,c,f,p,h,m,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,p,h,m,x,b,g)}set(e,n,i,r,s,o,a,l,c,f,p,h,m,x,b,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=h,d[3]=m,d[7]=x,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,x=a*f,b=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+x*c,n[5]=h-b*c,n[9]=-a*l,n[2]=b-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,x=c*f,b=c*p;n[0]=h+b*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=b+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,x=c*f,b=c*p;n[0]=h-b*a,n[4]=-o*p,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=b-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*p,x=a*f,b=a*p;n[0]=l*f,n[4]=x*c-m,n[8]=h*c+b,n[1]=l*p,n[5]=b*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,b=a*c;n[0]=l*f,n[4]=b-h*p,n[8]=x*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+x,n[10]=h-b*p}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,b=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+b,n[5]=o*f,n[9]=m*p-x,n[2]=x*p-m,n[6]=a*f,n[10]=b*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fw,e,pw)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),er.crossVectors(i,Tn),er.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),er.crossVectors(i,Tn)),er.normalize(),al.crossVectors(Tn,er),r[0]=er.x,r[4]=al.x,r[8]=Tn.x,r[1]=er.y,r[5]=al.y,r[9]=Tn.y,r[2]=er.z,r[6]=al.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],x=i[2],b=i[6],g=i[10],d=i[14],v=i[3],y=i[7],_=i[11],w=i[15],E=r[0],N=r[4],S=r[8],C=r[12],L=r[1],I=r[5],D=r[9],V=r[13],U=r[2],j=r[6],Q=r[10],ee=r[14],$=r[3],z=r[7],R=r[11],A=r[15];return s[0]=o*E+a*L+l*U+c*$,s[4]=o*N+a*I+l*j+c*z,s[8]=o*S+a*D+l*Q+c*R,s[12]=o*C+a*V+l*ee+c*A,s[1]=f*E+p*L+h*U+m*$,s[5]=f*N+p*I+h*j+m*z,s[9]=f*S+p*D+h*Q+m*R,s[13]=f*C+p*V+h*ee+m*A,s[2]=x*E+b*L+g*U+d*$,s[6]=x*N+b*I+g*j+d*z,s[10]=x*S+b*D+g*Q+d*R,s[14]=x*C+b*V+g*ee+d*A,s[3]=v*E+y*L+_*U+w*$,s[7]=v*N+y*I+_*j+w*z,s[11]=v*S+y*D+_*Q+w*R,s[15]=v*C+y*V+_*ee+w*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],x=e[3],b=e[7],g=e[11],d=e[15],v=l*m-c*h,y=a*m-c*p,_=a*h-l*p,w=o*m-c*f,E=o*h-l*f,N=o*p-a*f;return n*(b*v-g*y+d*_)-i*(x*v-g*w+d*E)+r*(x*y-b*w+d*N)-s*(x*_-b*E+g*N)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],x=e[12],b=e[13],g=e[14],d=e[15],v=n*a-i*o,y=n*l-r*o,_=n*c-s*o,w=i*l-r*a,E=i*c-s*a,N=r*c-s*l,S=f*b-p*x,C=f*g-h*x,L=f*d-m*x,I=p*g-h*b,D=p*d-m*b,V=h*d-m*g,U=v*V-y*D+_*I+w*L-E*C+N*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/U;return e[0]=(a*V-l*D+c*I)*j,e[1]=(r*D-i*V-s*I)*j,e[2]=(b*N-g*E+d*w)*j,e[3]=(h*E-p*N-m*w)*j,e[4]=(l*L-o*V-c*C)*j,e[5]=(n*V-r*L+s*C)*j,e[6]=(g*_-x*N-d*y)*j,e[7]=(f*N-h*_+m*y)*j,e[8]=(o*D-a*L+c*S)*j,e[9]=(i*L-n*D-s*S)*j,e[10]=(x*E-b*_+d*v)*j,e[11]=(p*_-f*E-m*v)*j,e[12]=(a*C-o*I-l*S)*j,e[13]=(n*I-i*C+r*S)*j,e[14]=(b*y-x*w-g*v)*j,e[15]=(f*w-p*y+h*v)*j,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,h=s*c,m=s*f,x=s*p,b=o*f,g=o*p,d=a*p,v=l*c,y=l*f,_=l*p,w=i.x,E=i.y,N=i.z;return r[0]=(1-(b+d))*w,r[1]=(m+_)*w,r[2]=(x-y)*w,r[3]=0,r[4]=(m-_)*E,r[5]=(1-(h+d))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(x+y)*N,r[9]=(g-v)*N,r[10]=(1-(h+b))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ps.set(r[0],r[1],r[2]).length();const a=ps.set(r[4],r[5],r[6]).length(),l=ps.set(r[8],r[9],r[10]).length();s<0&&(o=-o),$n.copy(this);const c=1/o,f=1/a,p=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=p,$n.elements[9]*=p,$n.elements[10]*=p,n.setFromRotationMatrix($n),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(a===gi)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===wa)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,b;if(l)x=1/(o-s),b=o/(o-s);else if(a===gi)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===wa)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Pc.prototype.isMatrix4=!0;let Pt=Pc;const ps=new H,$n=new Pt,fw=new H(0,0,0),pw=new H(1,1,1),er=new H,al=new H,Tn=new H,qm=new Pt,$m=new uo;class wr{constructor(e=0,n=0,i=0,r=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class by{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mw=0;const Ym=new H,ms=new uo,Ei=new Pt,ll=new H,Ro=new H,gw=new H,xw=new uo,Km=new H(1,0,0),Zm=new H(0,1,0),Jm=new H(0,0,1),Qm={type:"added"},vw={type:"removed"},gs={type:"childadded",child:null},Uu={type:"childremoved",child:null};class an extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new H,n=new wr,i=new uo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new et}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new by,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ro,ll,this.up):Ei.lookAt(ll,Ro,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ei),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),gs.child=e,this.dispatchEvent(gs),gs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vw),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,gw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,xw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hi extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yw={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const g=n.getJointPose(b,i),d=this._getHandJoint(c,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=ap(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fu(o,s,e+1/3),this.g=Fu(o,s,e),this.b=Fu(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=Ey[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return dt.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=dt.workingColorSpace){return dt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=zn){dt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(cl);const i=ea(tr.h,cl.h,n),r=ea(tr.s,cl.s,n),s=ea(tr.l,cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ot;ot.NAMES=Ey;class _w extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yn=new H,Ti=new H,Ou=new H,Ai=new H,xs=new H,vs=new H,e0=new H,Bu=new H,zu=new H,Vu=new H,Hu=new Ct,Gu=new Ct,ju=new Ct;class ei{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Ti.subVectors(i,n),Ou.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(Ti),l=Yn.dot(Ou),c=Ti.dot(Ti),f=Ti.dot(Ou),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Hu.setScalar(0),Gu.setScalar(0),ju.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hu,s.x),o.addScaledVector(Gu,s.y),o.addScaledVector(ju,s.z),o}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ti.subVectors(e,n),Yn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),vs.subVectors(s,i),Bu.subVectors(e,i);const l=xs.dot(Bu),c=vs.dot(Bu);if(l<=0&&c<=0)return n.copy(i);zu.subVectors(e,r);const f=xs.dot(zu),p=vs.dot(zu);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(xs,o);Vu.subVectors(e,s);const m=xs.dot(Vu),x=vs.dot(Vu);if(x>=0&&m<=x)return n.copy(s);const b=m*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(vs,a);const g=f*x-m*p;if(g<=0&&p-f>=0&&m-x>=0)return e0.subVectors(s,r),a=(p-f)/(p-f+(m-x)),n.copy(r).addScaledVector(e0,a);const d=1/(g+b+h);return o=b*d,a=h*d,n.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ua{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),dl.subVectors(this.max,No),ys.subVectors(e.a,No),_s.subVectors(e.b,No),Ss.subVectors(e.c,No),nr.subVectors(_s,ys),ir.subVectors(Ss,_s),Nr.subVectors(ys,Ss);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Nr.z,Nr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Nr.z,0,-Nr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Nr.y,Nr.x,0];return!Wu(n,ys,_s,Ss,dl)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,ys,_s,Ss,dl))?!1:(hl.crossVectors(nr,ir),n=[hl.x,hl.y,hl.z],Wu(n,ys,_s,Ss,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new H,new H,new H,new H,new H,new H,new H,new H],Kn=new H,ul=new Ua,ys=new H,_s=new H,Ss=new H,nr=new H,ir=new H,Nr=new H,No=new H,dl=new H,hl=new H,Pr=new H;function Wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ft=new H,fl=new Ee;let Sw=0;class Vi extends is{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zM,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=As(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=As(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=As(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=As(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ty extends Vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ay extends Vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mt extends Vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Mw=new Ua,Po=new H,Xu=new H;class cp{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Xu)),this.expandByPoint(Po.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ww=0;const On=new Pt,qu=new an,Ms=new H,An=new Ua,Lo=new Ua,jt=new H;class gn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VM(e)?Ay:Ty)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,Lo.min),An.expandByPoint(jt),jt.addVectors(An.max,Lo.max),An.expandByPoint(jt)):(An.expandByPoint(Lo.min),An.expandByPoint(Lo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)jt.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),jt.add(Ms)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new H,l[S]=new H;const c=new H,f=new H,p=new H,h=new Ee,m=new Ee,x=new Ee,b=new H,g=new H;function d(S,C,L){c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,L),h.fromBufferAttribute(s,S),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,L),f.sub(c),p.sub(c),m.sub(h),x.sub(h);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(I),a[S].add(b),a[C].add(b),a[L].add(b),l[S].add(g),l[C].add(g),l[L].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,C=v.length;S<C;++S){const L=v[S],I=L.start,D=L.count;for(let V=I,U=I+D;V<U;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new H,_=new H,w=new H,E=new H;function N(S){w.fromBufferAttribute(r,S),E.copy(w);const C=a[S];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),_.crossVectors(E,C);const I=_.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,I)}for(let S=0,C=v.length;S<C;++S){const L=v[S],I=L.start,D=L.count;for(let V=I,U=I+D;V<U;V+=3)N(e.getX(V+0)),N(e.getX(V+1)),N(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,f=new H,p=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,b),o.fromBufferAttribute(n,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,h=new c.constructor(l.length*f);let m=0,x=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*f;for(let d=0;d<f;d++)h[x++]=c[m++]}return new Vi(h,f,p)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new H,bw=new H,Ew=new et;class ar{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$u.subVectors(i,n).cross(bw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta($u),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ew.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Tw=0;class ho extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Jo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sy,this.blendDst=oy,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=DM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nu,this.stencilZFail=Nu,this.stencilZPass=Nu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ar().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new H,Yu=new H,pl=new H,ml=new H;class Aw{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yu.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),ml.copy(this.origin).sub(Yu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=ml.dot(this.direction),l=-ml.dot(pl),c=ml.lengthSq(),f=Math.abs(1-o*o);let p,h,m,x;if(f>0)if(p=o*l-a,h=o*a-l,x=s*f,p>=0)if(h>=-x)if(h<=x){const b=1/f;p*=b,h*=b,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-x?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=x?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Yu).addScaledVector(pl,h),m}intersectSphere(e,n){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,p=e.x-o.x,h=e.y-o.y,m=e.z-o.z,x=n.x-o.x,b=n.y-o.y,g=n.z-o.z,d=i.x-o.x,v=i.y-o.y,y=i.z-o.z,_=Math.abs(l),w=Math.abs(c),E=Math.abs(f);let N,S,C,L,I,D,V,U,j,Q,ee,$;if(_>=w&&_>=E?(C=l,D=p,j=x,$=d,l>=0?(N=c,S=f,L=h,I=m,V=b,U=g,Q=v,ee=y):(N=f,S=c,L=m,I=h,V=g,U=b,Q=y,ee=v)):w>=E?(C=c,D=h,j=b,$=v,c>=0?(N=f,S=l,L=m,I=p,V=g,U=x,Q=y,ee=d):(N=l,S=f,L=p,I=m,V=x,U=g,Q=d,ee=y)):(C=f,D=m,j=g,$=y,f>=0?(N=l,S=c,L=p,I=h,V=x,U=b,Q=d,ee=v):(N=c,S=l,L=h,I=p,V=b,U=x,Q=v,ee=d)),C===0)return null;const z=N/C,R=S/C,A=1/C,K=L-z*D,te=I-R*D,me=V-z*j,de=U-R*j,le=Q-z*$,O=ee-R*$,Y=le*de-O*me,ae=K*O-te*le,Te=me*te-de*K;if(r){if(Y<0||ae<0||Te<0)return null}else if((Y<0||ae<0||Te<0)&&(Y>0||ae>0||Te>0))return null;const pe=Y+ae+Te;if(pe===0)return null;const Ae=A*(Y*D+ae*j+Te*$);return(pe>0?Ae<0:Ae>0)?null:this.at(Ae/pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pi extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=ay,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t0=new Pt,Lr=new Aw,gl=new cp,n0=new H,xl=new H,vl=new H,yl=new H,Ku=new H,_l=new H,i0=new H,Sl=new H;class $e extends an{constructor(e=new gn,n=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(Ku.fromBufferAttribute(p,e),o?_l.addScaledVector(Ku,f):_l.addScaledVector(Ku.sub(n),f))}n.add(_l)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(gl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(gl,n0)===null||Lr.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(t0),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){const g=h[x],d=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let _=v,w=y;_<w;_+=3){const E=a.getX(_),N=a.getX(_+1),S=a.getX(_+2);r=Ml(this,d,e,i,c,f,p,E,N,S),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let g=x,d=b;g<d;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);r=Ml(this,o,e,i,c,f,p,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){const g=h[x],d=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=v,w=y;_<w;_+=3){const E=_,N=_+1,S=_+2;r=Ml(this,d,e,i,c,f,p,E,N,S),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=x,d=b;g<d;g+=3){const v=g,y=g+1,_=g+2;r=Ml(this,o,e,i,c,f,p,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Cw(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,xl),t.getVertexPosition(l,vl),t.getVertexPosition(c,yl);const f=Cw(t,e,n,i,xl,vl,yl,i0);if(f){const p=new H;ei.getBarycoord(i0,xl,vl,yl,p),r&&(f.uv=ei.getInterpolatedAttribute(r,a,l,c,p,new Ee)),s&&(f.uv1=ei.getInterpolatedAttribute(s,a,l,c,p,new Ee)),o&&(f.normal=ei.getInterpolatedAttribute(o,a,l,c,p,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};ei.getNormal(xl,vl,yl,h.normal),f.face=h,f.barycoord=p}return f}class Rw extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,f=Kt,p,h){super(null,o,a,l,c,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new cp,Nw=new Ee(.5,.5),wl=new H;class up{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],p=s[5],h=s[6],m=s[7],x=s[8],b=s[9],g=s[10],d=s[11],v=s[12],y=s[13],_=s[14],w=s[15];if(r[0].setComponents(c-o,m-f,d-x,w-v).normalize(),r[1].setComponents(c+o,m+f,d+x,w+v).normalize(),r[2].setComponents(c+a,m+p,d+b,w+y).normalize(),r[3].setComponents(c-a,m-p,d-b,w-y).normalize(),i)r[4].setComponents(l,h,g,_).normalize(),r[5].setComponents(c-l,m-h,d-g,w-_).normalize();else if(r[4].setComponents(c-l,m-h,d-g,w-_).normalize(),n===gi)r[5].setComponents(c+l,m+h,d+g,w+_).normalize();else if(n===wa)r[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=Nw.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wl.x=r.normal.x>0?e.max.x:e.min.x,wl.y=r.normal.y>0?e.max.y:e.min.y,wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cy extends fn{constructor(e=[],n=Zr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ea extends fn{constructor(e,n,i=_i,r,s,o,a=Kt,l=Kt,c,f=Xi,p=1){if(f!==Xi&&f!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Pw extends Ea{constructor(e,n=_i,i=Zr,r,s,o=Kt,a=Kt,l,c=Xi){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ry extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rn extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function x(b,g,d,v,y,_,w,E,N,S,C){const L=_/N,I=w/S,D=_/2,V=w/2,U=E/2,j=N+1,Q=S+1;let ee=0,$=0;const z=new H;for(let R=0;R<Q;R++){const A=R*I-V;for(let K=0;K<j;K++){const te=K*L-D;z[b]=te*v,z[g]=A*y,z[d]=U,c.push(z.x,z.y,z.z),z[b]=0,z[g]=0,z[d]=E>0?1:-1,f.push(z.x,z.y,z.z),p.push(K/N),p.push(1-R/S),ee+=1}}for(let R=0;R<S;R++)for(let A=0;A<N;A++){const K=h+A+j*R,te=h+A+j*(R+1),me=h+(A+1)+j*(R+1),de=h+(A+1)+j*R;l.push(K,te,de),l.push(te,me,de),$+=6}a.addGroup(m,$,C),m+=$,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rc extends gn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=n/2,p=Math.PI/2*e,h=n,m=2*p+h,x=i*2+s,b=r+1,g=new H,d=new H;for(let v=0;v<=x;v++){let y=0,_=0,w=0,E=0;if(v<=i){const C=v/i,L=C*Math.PI/2;_=-f-e*Math.cos(L),w=e*Math.sin(L),E=-e*Math.cos(L),y=C*p}else if(v<=i+s){const C=(v-i)/s;_=-f+C*n,w=e,E=0,y=p+C*h}else{const C=(v-i-s)/i,L=C*Math.PI/2;_=f+e*Math.sin(L),w=e*Math.cos(L),E=e*Math.sin(L),y=p+h+C*p}const N=Math.max(0,Math.min(1,y/m));let S=0;v===0?S=.5/r:v===x&&(S=-.5/r);for(let C=0;C<=r;C++){const L=C/r,I=L*Math.PI*2,D=Math.sin(I),V=Math.cos(I);d.x=-w*V,d.y=_,d.z=w*D,a.push(d.x,d.y,d.z),g.set(-w*V,E,w*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+S,N)}if(v>0){const C=(v-1)*b;for(let L=0;L<r;L++){const I=C+L,D=C+L+1,V=v*b+L,U=v*b+L+1;o.push(I,D,V),o.push(D,U,V)}}}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $t extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let x=0;const b=[],g=i/2;let d=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(m,2));function v(){const _=new H,w=new H;let E=0;const N=(n-e)/i;for(let S=0;S<=s;S++){const C=[],L=S/s,I=L*(n-e)+e;for(let D=0;D<=r;D++){const V=D/r,U=V*l+a,j=Math.sin(U),Q=Math.cos(U);w.x=I*j,w.y=-L*i+g,w.z=I*Q,p.push(w.x,w.y,w.z),_.set(j,N,Q).normalize(),h.push(_.x,_.y,_.z),m.push(V,1-L),C.push(x++)}b.push(C)}for(let S=0;S<r;S++)for(let C=0;C<s;C++){const L=b[C][S],I=b[C+1][S],D=b[C+1][S+1],V=b[C][S+1];(e>0||C!==0)&&(f.push(L,I,V),E+=3),(n>0||C!==s-1)&&(f.push(I,D,V),E+=3)}c.addGroup(d,E,0),d+=E}function y(_){const w=x,E=new Ee,N=new H;let S=0;const C=_===!0?e:n,L=_===!0?1:-1;for(let D=1;D<=r;D++)p.push(0,g*L,0),h.push(0,L,0),m.push(.5,.5),x++;const I=x;for(let D=0;D<=r;D++){const U=D/r*l+a,j=Math.cos(U),Q=Math.sin(U);N.x=C*Q,N.y=g*L,N.z=C*j,p.push(N.x,N.y,N.z),h.push(0,L,0),E.x=j*.5+.5,E.y=Q*.5*L+.5,m.push(E.x,E.y),x++}for(let D=0;D<r;D++){const V=w+D,U=I+D;_===!0?f.push(U,U+1,V):f.push(U+1,U,V),S+=3}c.addGroup(d,S,_===!0?1:2),d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,m=(o-f)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ee:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new H,r=[],s=[],o=[],a=new H,l=new Pt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(rt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(rt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dp extends wi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*f-m*p+this.aX,c=h*p+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lw extends dp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,p){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+p)+(l-a)/p;h*=f,m*=f,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const r0=new H,s0=new H,Zu=new hp,Ju=new hp,Qu=new hp;class Dw extends wi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(s0.subVectors(r[0],r[1]).add(r[0]),c=s0);const p=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(r0.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=r0),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(p),m),b=Math.pow(p.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(f),m);b<1e-4&&(b=1),x<1e-4&&(x=b),g<1e-4&&(g=b),Zu.initNonuniformCatmullRom(c.x,p.x,h.x,f.x,x,b,g),Ju.initNonuniformCatmullRom(c.y,p.y,h.y,f.y,x,b,g),Qu.initNonuniformCatmullRom(c.z,p.z,h.z,f.z,x,b,g)}else this.curveType==="catmullrom"&&(Zu.initCatmullRom(c.x,p.x,h.x,f.x,this.tension),Ju.initCatmullRom(c.y,p.y,h.y,f.y,this.tension),Qu.initCatmullRom(c.z,p.z,h.z,f.z,this.tension));return i.set(Zu.calc(l),Ju.calc(l),Qu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function o0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Iw(t,e){const n=1-t;return n*n*e}function Uw(t,e){return 2*(1-t)*t*e}function kw(t,e){return t*t*e}function ta(t,e,n,i){return Iw(t,e)+Uw(t,n)+kw(t,i)}function Fw(t,e){const n=1-t;return n*n*n*e}function Ow(t,e){const n=1-t;return 3*n*n*t*e}function Bw(t,e){return 3*(1-t)*t*t*e}function zw(t,e){return t*t*t*e}function na(t,e,n,i,r){return Fw(t,e)+Ow(t,n)+Bw(t,i)+zw(t,r)}class Ny extends wi{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vw extends wi{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y),na(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Py extends wi{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hw extends wi{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ly extends wi{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gw extends wi{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y),ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dy extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(o0(a,l.x,c.x,f.x,p.x),o0(a,l.y,c.y,f.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var Wh=Object.freeze({__proto__:null,ArcCurve:Lw,CatmullRomCurve3:Dw,CubicBezierCurve:Ny,CubicBezierCurve3:Vw,EllipseCurve:dp,LineCurve:Py,LineCurve3:Hw,QuadraticBezierCurve:Ly,QuadraticBezierCurve3:Gw,SplineCurve:Dy});class jw extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Wh[r.type]().fromJSON(r))}return this}}class Xh extends jw{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Py(this.currentPoint.clone(),new Ee(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Ly(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ny(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Dy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new dp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ss extends Xh{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Xh().fromJSON(r))}return this}}function Ww(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Iy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Kw(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let f=a,p=l;for(let h=n;h<r;h+=n){const m=t[h],x=t[h+1];m<a&&(a=m),x<l&&(l=x),m>f&&(f=m),x>p&&(p=x)}c=Math.max(f-a,p-l),c=c!==0?32767/c:0}return Ta(s,o,n,a,l,c,0),o}function Iy(t,e,n,i,r){let s;if(r===ab(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=a0(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=a0(o/i|0,t[o],t[o+1],s);return s&&so(s,s.next)&&(Ca(s),s=s.next),s}function Qr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(so(n,n.next)||Rt(n.prev,n,n.next)===0)){if(Ca(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ta(t,e,n,i,r,s,o){if(!t)return;!o&&s&&tb(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?qw(t,i,r,s):Xw(t)){e.push(l.i,t.i,c.i),Ca(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=$w(Qr(t),e),Ta(t,e,n,i,r,s,2)):o===2&&Yw(t,e,n,i,r,s):Ta(Qr(t),e,n,i,r,s,1);break}}}function Xw(t){const e=t.prev,n=t,i=t.next;if(Rt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=Math.min(r,s,o),p=Math.min(a,l,c),h=Math.max(r,s,o),m=Math.max(a,l,c);let x=i.next;for(;x!==e;){if(x.x>=f&&x.x<=h&&x.y>=p&&x.y<=m&&zo(r,a,s,l,o,c,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function qw(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,p=s.y,h=o.y,m=Math.min(a,l,c),x=Math.min(f,p,h),b=Math.max(a,l,c),g=Math.max(f,p,h),d=qh(m,x,e,n,i),v=qh(b,g,e,n,i);let y=t.prevZ,_=t.nextZ;for(;y&&y.z>=d&&_&&_.z<=v;){if(y.x>=m&&y.x<=b&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&zo(a,f,l,p,c,h,y.x,y.y)&&Rt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=m&&_.x<=b&&_.y>=x&&_.y<=g&&_!==r&&_!==o&&zo(a,f,l,p,c,h,_.x,_.y)&&Rt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=b&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&zo(a,f,l,p,c,h,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=m&&_.x<=b&&_.y>=x&&_.y<=g&&_!==r&&_!==o&&zo(a,f,l,p,c,h,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $w(t,e){let n=t;do{const i=n.prev,r=n.next.next;!so(i,r)&&ky(i,n,n.next,r)&&Aa(i,r)&&Aa(r,i)&&(e.push(i.i,n.i,r.i),Ca(n),Ca(n.next),n=t=r),n=n.next}while(n!==t);return Qr(n)}function Yw(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rb(o,a)){let l=Fy(o,a);o=Qr(o,o.next),l=Qr(l,l.next),Ta(o,e,n,i,r,s,0),Ta(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Kw(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Iy(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ib(c))}r.sort(Zw);for(let s=0;s<r.length;s++)n=Jw(r[s],n);return n}function Zw(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function Jw(t,e){const n=Qw(t,e);if(!n)return e;const i=Fy(n,t);return Qr(i,i.next),Qr(n,n.next)}function Qw(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(so(t,n))return n;do{if(so(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const p=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>s&&(s=p,o=n.x<n.next.x?n:n.next,p===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Uy(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const p=Math.abs(r-n.y)/(i-n.x);Aa(n,t)&&(p<f||p===f&&(n.x>o.x||n.x===o.x&&eb(o,n)))&&(o=n,f=p)}n=n.next}while(n!==a);return o}function eb(t,e){return Rt(t.prev,t,e.prev)<0&&Rt(e.next,t,t.next)<0}function tb(t,e,n,i){let r=t;do r.z===0&&(r.z=qh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,nb(r)}function nb(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function qh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function ib(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Uy(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function zo(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&Uy(t,e,n,i,r,s,o,a)}function rb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!sb(t,e)&&(Aa(t,e)&&Aa(e,t)&&ob(t,e)&&(Rt(t.prev,t,e.prev)||Rt(t,e.prev,e))||so(t,e)&&Rt(t.prev,t,t.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function so(t,e){return t.x===e.x&&t.y===e.y}function ky(t,e,n,i){const r=El(Rt(t,e,n)),s=El(Rt(t,e,i)),o=El(Rt(n,i,t)),a=El(Rt(n,i,e));return!!(r!==s&&o!==a||r===0&&bl(t,n,e)||s===0&&bl(t,i,e)||o===0&&bl(n,t,i)||a===0&&bl(n,e,i))}function bl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function El(t){return t>0?1:t<0?-1:0}function sb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Aa(t,e){return Rt(t.prev,t,t.next)<0?Rt(t,e,t.next)>=0&&Rt(t,t.prev,e)>=0:Rt(t,e,t.prev)<0||Rt(t,t.next,e)<0}function ob(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Fy(t,e){const n=$h(t.i,t.x,t.y),i=$h(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function a0(t,e,n,i){const r=$h(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ca(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function $h(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ab(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class lb{static triangulate(e,n,i=2){return Ww(e,n,i)}}class Fi{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Fi.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];l0(e),c0(i,e);let o=e.length;n.forEach(l0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,c0(i,n[l]);const a=lb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function l0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function c0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class zs extends gn{constructor(e=new ss([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Mt(r,3)),this.setAttribute("uv",new Mt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,m=n.bevelThickness!==void 0?n.bevelThickness:.2,x=n.bevelSize!==void 0?n.bevelSize:m-.1,b=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:cb;let y,_=!1,w,E,N,S;if(d){y=d.getSpacedPoints(f),_=!0,h=!1;const J=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(f,J),E=new H,N=new H,S=new H}h||(g=0,m=0,x=0,b=0);const C=a.extractPoints(c);let L=C.shape;const I=C.holes;if(!Fi.isClockWise(L)){L=L.reverse();for(let J=0,oe=I.length;J<oe;J++){const he=I[J];Fi.isClockWise(he)&&(I[J]=he.reverse())}}function V(J){const he=10000000000000001e-36;let ue=J[0];for(let fe=1;fe<=J.length;fe++){const ze=fe%J.length,Ue=J[ze],qe=Ue.x-ue.x,Ke=Ue.y-ue.y,k=qe*qe+Ke*Ke,ut=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ue.x),Math.abs(ue.y)),nt=he*ut*ut;if(k<=nt){J.splice(ze,1),fe--;continue}ue=Ue}}V(L),I.forEach(V);const U=I.length,j=L;for(let J=0;J<U;J++){const oe=I[J];L=L.concat(oe)}function Q(J,oe,he){return oe||ft("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(oe,he)}const ee=L.length;function $(J,oe,he){let ue,fe,ze;const Ue=J.x-oe.x,qe=J.y-oe.y,Ke=he.x-J.x,k=he.y-J.y,ut=Ue*Ue+qe*qe,nt=Ue*k-qe*Ke;if(Math.abs(nt)>Number.EPSILON){const P=Math.sqrt(ut),M=Math.sqrt(Ke*Ke+k*k),W=oe.x-qe/P,Z=oe.y+Ue/P,ne=he.x-k/M,ge=he.y+Ke/M,ye=((ne-W)*k-(ge-Z)*Ke)/(Ue*k-qe*Ke);ue=W+Ue*ye-J.x,fe=Z+qe*ye-J.y;const ie=ue*ue+fe*fe;if(ie<=2)return new Ee(ue,fe);ze=Math.sqrt(ie/2)}else{let P=!1;Ue>Number.EPSILON?Ke>Number.EPSILON&&(P=!0):Ue<-Number.EPSILON?Ke<-Number.EPSILON&&(P=!0):Math.sign(qe)===Math.sign(k)&&(P=!0),P?(ue=-qe,fe=Ue,ze=Math.sqrt(ut)):(ue=Ue,fe=qe,ze=Math.sqrt(ut/2))}return new Ee(ue/ze,fe/ze)}const z=[];for(let J=0,oe=j.length,he=oe-1,ue=J+1;J<oe;J++,he++,ue++)he===oe&&(he=0),ue===oe&&(ue=0),z[J]=$(j[J],j[he],j[ue]);const R=[];let A,K=z.concat();for(let J=0,oe=U;J<oe;J++){const he=I[J];A=[];for(let ue=0,fe=he.length,ze=fe-1,Ue=ue+1;ue<fe;ue++,ze++,Ue++)ze===fe&&(ze=0),Ue===fe&&(Ue=0),A[ue]=$(he[ue],he[ze],he[Ue]);R.push(A),K=K.concat(A)}let te;if(g===0)te=Fi.triangulateShape(j,I);else{const J=[],oe=[];for(let he=0;he<g;he++){const ue=he/g,fe=m*Math.cos(ue*Math.PI/2),ze=x*Math.sin(ue*Math.PI/2)+b;for(let Ue=0,qe=j.length;Ue<qe;Ue++){const Ke=Q(j[Ue],z[Ue],ze);ae(Ke.x,Ke.y,-fe),ue===0&&J.push(Ke)}for(let Ue=0,qe=U;Ue<qe;Ue++){const Ke=I[Ue];A=R[Ue];const k=[];for(let ut=0,nt=Ke.length;ut<nt;ut++){const P=Q(Ke[ut],A[ut],ze);ae(P.x,P.y,-fe),ue===0&&k.push(P)}ue===0&&oe.push(k)}}te=Fi.triangulateShape(J,oe)}const me=te.length,de=x+b;for(let J=0;J<ee;J++){const oe=h?Q(L[J],K[J],de):L[J];_?(N.copy(w.normals[0]).multiplyScalar(oe.x),E.copy(w.binormals[0]).multiplyScalar(oe.y),S.copy(y[0]).add(N).add(E),ae(S.x,S.y,S.z)):ae(oe.x,oe.y,0)}for(let J=1;J<=f;J++)for(let oe=0;oe<ee;oe++){const he=h?Q(L[oe],K[oe],de):L[oe];_?(N.copy(w.normals[J]).multiplyScalar(he.x),E.copy(w.binormals[J]).multiplyScalar(he.y),S.copy(y[J]).add(N).add(E),ae(S.x,S.y,S.z)):ae(he.x,he.y,p/f*J)}for(let J=g-1;J>=0;J--){const oe=J/g,he=m*Math.cos(oe*Math.PI/2),ue=x*Math.sin(oe*Math.PI/2)+b;for(let fe=0,ze=j.length;fe<ze;fe++){const Ue=Q(j[fe],z[fe],ue);ae(Ue.x,Ue.y,p+he)}for(let fe=0,ze=I.length;fe<ze;fe++){const Ue=I[fe];A=R[fe];for(let qe=0,Ke=Ue.length;qe<Ke;qe++){const k=Q(Ue[qe],A[qe],ue);_?ae(k.x,k.y+y[f-1].y,y[f-1].x+he):ae(k.x,k.y,p+he)}}}le(),O();function le(){const J=r.length/3;if(h){let oe=0,he=ee*oe;for(let ue=0;ue<me;ue++){const fe=te[ue];Te(fe[2]+he,fe[1]+he,fe[0]+he)}oe=f+g*2,he=ee*oe;for(let ue=0;ue<me;ue++){const fe=te[ue];Te(fe[0]+he,fe[1]+he,fe[2]+he)}}else{for(let oe=0;oe<me;oe++){const he=te[oe];Te(he[2],he[1],he[0])}for(let oe=0;oe<me;oe++){const he=te[oe];Te(he[0]+ee*f,he[1]+ee*f,he[2]+ee*f)}}i.addGroup(J,r.length/3-J,0)}function O(){const J=r.length/3;let oe=0;Y(j,oe),oe+=j.length;for(let he=0,ue=I.length;he<ue;he++){const fe=I[he];Y(fe,oe),oe+=fe.length}i.addGroup(J,r.length/3-J,1)}function Y(J,oe){let he=J.length;for(;--he>=0;){const ue=he;let fe=he-1;fe<0&&(fe=J.length-1);for(let ze=0,Ue=f+g*2;ze<Ue;ze++){const qe=ee*ze,Ke=ee*(ze+1),k=oe+ue+qe,ut=oe+fe+qe,nt=oe+fe+Ke,P=oe+ue+Ke;pe(k,ut,nt,P)}}}function ae(J,oe,he){l.push(J),l.push(oe),l.push(he)}function Te(J,oe,he){Ae(J),Ae(oe),Ae(he);const ue=r.length/3,fe=v.generateTopUV(i,r,ue-3,ue-2,ue-1);Xe(fe[0]),Xe(fe[1]),Xe(fe[2])}function pe(J,oe,he,ue){Ae(J),Ae(oe),Ae(ue),Ae(oe),Ae(he),Ae(ue);const fe=r.length/3,ze=v.generateSideWallUV(i,r,fe-6,fe-3,fe-2,fe-1);Xe(ze[0]),Xe(ze[1]),Xe(ze[3]),Xe(ze[1]),Xe(ze[2]),Xe(ze[3])}function Ae(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Xe(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return ub(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wh[r.type]().fromJSON(r)),new zs(i,e.options)}}const cb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new Ee(s,o),new Ee(a,l),new Ee(c,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],f=e[i*3+1],p=e[i*3+2],h=e[r*3],m=e[r*3+1],x=e[r*3+2],b=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-p),new Ee(h,1-x),new Ee(b,1-d)]:[new Ee(a,1-l),new Ee(f,1-p),new Ee(m,1-x),new Ee(g,1-d)]}};function ub(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ka extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,h=n/l,m=[],x=[],b=[],g=[];for(let d=0;d<f;d++){const v=d*h-o;for(let y=0;y<c;y++){const _=y*p-s;x.push(_,-v,0),b.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+c*d,_=v+c*(d+1),w=v+1+c*(d+1),E=v+1+c*d;m.push(y,_,E),m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bn extends gn{constructor(e=new ss([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(s,3)),this.setAttribute("uv",new Mt(o,2));function c(f){const p=r.length/3,h=f.extractPoints(n);let m=h.shape;const x=h.holes;Fi.isClockWise(m)===!1&&(m=m.reverse());for(let g=0,d=x.length;g<d;g++){const v=x[g];Fi.isClockWise(v)===!0&&(x[g]=v.reverse())}const b=Fi.triangulateShape(m,x);for(let g=0,d=x.length;g<d;g++){const v=x[g];m=m.concat(v)}for(let g=0,d=m.length;g<d;g++){const v=m[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,d=b.length;g<d;g++){const v=b[g],y=v[0]+p,_=v[1]+p,w=v[2]+p;i.push(y,_,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return db(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Bn(i,e.curveSegments)}}function db(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class fp extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new H,h=new H,m=[],x=[],b=[],g=[];for(let d=0;d<=i;d++){const v=[],y=d/i,_=o+y*a,w=e*Math.cos(_),E=Math.sqrt(e*e-w*w);let N=0;d===0&&o===0?N=.5/n:d===i&&l===Math.PI&&(N=-.5/n);for(let S=0;S<=n;S++){const C=S/n,L=r+C*s;p.x=-E*Math.cos(L),p.y=w,p.z=E*Math.sin(L),x.push(p.x,p.y,p.z),h.copy(p).normalize(),b.push(h.x,h.y,h.z),g.push(C+N,1-y),v.push(c++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const y=f[d][v+1],_=f[d][v],w=f[d+1][v],E=f[d+1][v+1];(d!==0||o>0)&&m.push(y,_,E),(d!==i-1||l<Math.PI)&&m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nc extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],h=new H,m=new H,x=new H;for(let b=0;b<=i;b++){const g=o+b/i*a;for(let d=0;d<=r;d++){const v=d/r*s;m.x=(e+n*Math.cos(g))*Math.cos(v),m.y=(e+n*Math.cos(g))*Math.sin(v),m.z=n*Math.sin(g),c.push(m.x,m.y,m.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),x.subVectors(m,h).normalize(),f.push(x.x,x.y,x.z),p.push(d/r),p.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=r;g++){const d=(r+1)*b+g-1,v=(r+1)*(b-1)+g-1,y=(r+1)*(b-1)+g,_=(r+1)*b+g;l.push(d,v,_),l.push(v,y,_)}this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class hb extends ho{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(u0(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(u0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function u0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Oy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const pb={clone:oo,merge:un};var mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mb,this.fragmentShader=gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new et().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xb extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qt extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vb extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yb extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pp extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ed=new Pt,d0=new H,h0=new H;class By{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;d0.setFromMatrixPosition(e.matrixWorld),n.position.copy(d0),h0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(h0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){ed.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ed,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===wa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tl=new H,Al=new uo,ci=new H;class zy extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tl,Al,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,Al,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Tl,Al,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,Al,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new H,f0=new Ee,p0=new Ee;class Rn extends zy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,f0,p0),n.subVectors(p0,f0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sb extends By{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class m0 extends pp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Sb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class mp extends zy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Mb extends By{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends pp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Mb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class wb extends pp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,bs=1;class bb extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ws,bs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(ws,bs,e,n);s.layers=this.layers,this.add(s);const o=new Rn(ws,bs,e,n);o.layers=this.layers,this.add(o);const a=new Rn(ws,bs,e,n);a.layers=this.layers,this.add(a);const l=new Rn(ws,bs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(ws,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Eb extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Sp=class Sp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sp.prototype.isMatrix2=!0;let g0=Sp;function x0(t,e,n,i){const r=Ab(i);switch(n){case yy:return t*e;case Sy:return t*e/r.components*r.byteLength;case np:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case ip:return t*e*2/r.components*r.byteLength;case _y:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case rp:return t*e*4/r.components*r.byteLength;case jl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:case xh:return Math.max(t,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(t,8)*Math.max(e,8)/2;case vh:case yh:case Sh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _h:case bc:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oh:case Bh:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Vh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ec:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ab(t){switch(t){case Nn:case my:return{byteLength:1,components:1};case Sa:case gy:case Si:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case _i:case Qf:case mi:return{byteLength:4,components:1};case xy:case vy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vy(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cb(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<p.length;m++){const x=p[h],b=p[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,p[h]=b)}p.length=h+1;for(let m=0,x=p.length;m<x;m++){const b=p[m];t.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s2="gl_FragColor = linearToOutputTexel( gl_FragColor );",o2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,S2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,M2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Rb,alphahash_pars_fragment:Nb,alphamap_fragment:Pb,alphamap_pars_fragment:Lb,alphatest_fragment:Db,alphatest_pars_fragment:Ib,aomap_fragment:Ub,aomap_pars_fragment:kb,batching_pars_vertex:Fb,batching_vertex:Ob,begin_vertex:Bb,beginnormal_vertex:zb,bsdfs:Vb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:jb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:qb,color_fragment:$b,color_pars_fragment:Yb,color_pars_vertex:Kb,color_vertex:Zb,common:Jb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:e2,displacementmap_pars_vertex:t2,displacementmap_vertex:n2,emissivemap_fragment:i2,emissivemap_pars_fragment:r2,colorspace_fragment:s2,colorspace_pars_fragment:o2,envmap_fragment:a2,envmap_common_pars_fragment:l2,envmap_pars_fragment:c2,envmap_pars_vertex:u2,envmap_physical_pars_fragment:S2,envmap_vertex:d2,fog_vertex:h2,fog_pars_vertex:f2,fog_fragment:p2,fog_pars_fragment:m2,gradientmap_pars_fragment:g2,lightmap_pars_fragment:x2,lights_lambert_fragment:v2,lights_lambert_pars_fragment:y2,lights_pars_begin:_2,lights_toon_fragment:M2,lights_toon_pars_fragment:w2,lights_phong_fragment:b2,lights_phong_pars_fragment:E2,lights_physical_fragment:T2,lights_physical_pars_fragment:A2,lights_fragment_begin:C2,lights_fragment_maps:R2,lights_fragment_end:N2,lightprobes_pars_fragment:P2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:D2,logdepthbuf_pars_vertex:I2,logdepthbuf_vertex:U2,map_fragment:k2,map_pars_fragment:F2,map_particle_fragment:O2,map_particle_pars_fragment:B2,metalnessmap_fragment:z2,metalnessmap_pars_fragment:V2,morphinstance_vertex:H2,morphcolor_vertex:G2,morphnormal_vertex:j2,morphtarget_pars_vertex:W2,morphtarget_vertex:X2,normal_fragment_begin:q2,normal_fragment_maps:$2,normal_pars_fragment:Y2,normal_pars_vertex:K2,normal_vertex:Z2,normalmap_pars_fragment:J2,clearcoat_normal_fragment_begin:Q2,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:rE,premultiplied_alpha_fragment:sE,project_vertex:oE,dithering_fragment:aE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:hE,shadowmap_vertex:fE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:xE,skinnormal_vertex:vE,specularmap_fragment:yE,specularmap_pars_fragment:_E,tonemapping_fragment:SE,tonemapping_pars_fragment:ME,transmission_fragment:wE,transmission_pars_fragment:bE,uv_pars_fragment:EE,uv_pars_vertex:TE,uv_vertex:AE,worldpos_vertex:CE,background_vert:RE,background_frag:NE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:DE,cube_frag:IE,depth_vert:UE,depth_frag:kE,distance_vert:FE,distance_frag:OE,equirect_vert:BE,equirect_frag:zE,linedashed_vert:VE,linedashed_frag:HE,meshbasic_vert:GE,meshbasic_frag:jE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:qE,meshmatcap_frag:$E,meshnormal_vert:YE,meshnormal_frag:KE,meshphong_vert:ZE,meshphong_frag:JE,meshphysical_vert:QE,meshphysical_frag:eT,meshtoon_vert:tT,meshtoon_frag:nT,points_vert:iT,points_frag:rT,shadow_vert:sT,shadow_frag:oT,sprite_vert:aT,sprite_frag:lT},Ne={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},fi={basic:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([Ne.points,Ne.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([Ne.common,Ne.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([Ne.sprite,Ne.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([Ne.common,Ne.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([Ne.lights,Ne.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};fi.physical={uniforms:un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Cl={r:0,b:0,g:0},cT=new Pt,Hy=new et;Hy.set(-1,0,0,0,1,0,0,0,1);function uT(t,e,n,i,r,s){const o=new ot(0);let a=r===!0?0:1,l,c,f=null,p=0,h=null;function m(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const _=v.backgroundBlurriness>0;y=e.get(y,_)}return y}function x(v){let y=!1;const _=m(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(v,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Yc)?(c===void 0&&(c=new $e(new rn(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:oo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hy),c.material.toneMapped=dt.getTransfer(_.colorSpace)!==gt,(f!==_||p!==_.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,h=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $e(new ka(2,2),new Mi({name:"BackgroundMaterial",uniforms:oo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,h=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Cl,Oy(t)),n.buffers.color.setClear(Cl.r,Cl.g,Cl.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:x,addToRenderList:b,dispose:d}}function dT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(I,D,V,U,j){let Q=!1;const ee=p(I,U,V,D);s!==ee&&(s=ee,c(s.object)),Q=m(I,U,V,j),Q&&x(I,U,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,_(I,D,V,U),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function p(I,D,V,U){const j=U.wireframe===!0;let Q=i[D.id];Q===void 0&&(Q={},i[D.id]=Q);const ee=I.isInstancedMesh===!0?I.id:0;let $=Q[ee];$===void 0&&($={},Q[ee]=$);let z=$[V.id];z===void 0&&(z={},$[V.id]=z);let R=z[j];return R===void 0&&(R=h(l()),z[j]=R),R}function h(I){const D=[],V=[],U=[];for(let j=0;j<n;j++)D[j]=0,V[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:U,object:I,attributes:{},index:null}}function m(I,D,V,U){const j=s.attributes,Q=D.attributes;let ee=0;const $=V.getAttributes();for(const z in $)if($[z].location>=0){const A=j[z];let K=Q[z];if(K===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),A===void 0||A.attribute!==K||K&&A.data!==K.data)return!0;ee++}return s.attributesNum!==ee||s.index!==U}function x(I,D,V,U){const j={},Q=D.attributes;let ee=0;const $=V.getAttributes();for(const z in $)if($[z].location>=0){let A=Q[z];A===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(A=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(A=I.instanceColor));const K={};K.attribute=A,A&&A.data&&(K.data=A.data),j[z]=K,ee++}s.attributes=j,s.attributesNum=ee,s.index=U}function b(){const I=s.newAttributes;for(let D=0,V=I.length;D<V;D++)I[D]=0}function g(I){d(I,0)}function d(I,D){const V=s.newAttributes,U=s.enabledAttributes,j=s.attributeDivisors;V[I]=1,U[I]===0&&(t.enableVertexAttribArray(I),U[I]=1),j[I]!==D&&(t.vertexAttribDivisor(I,D),j[I]=D)}function v(){const I=s.newAttributes,D=s.enabledAttributes;for(let V=0,U=D.length;V<U;V++)D[V]!==I[V]&&(t.disableVertexAttribArray(V),D[V]=0)}function y(I,D,V,U,j,Q,ee){ee===!0?t.vertexAttribIPointer(I,D,V,j,Q):t.vertexAttribPointer(I,D,V,U,j,Q)}function _(I,D,V,U){b();const j=U.attributes,Q=V.getAttributes(),ee=D.defaultAttributeValues;for(const $ in Q){const z=Q[$];if(z.location>=0){let R=j[$];if(R===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(R=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(R=I.instanceColor)),R!==void 0){const A=R.normalized,K=R.itemSize,te=e.get(R);if(te===void 0)continue;const me=te.buffer,de=te.type,le=te.bytesPerElement,O=de===t.INT||de===t.UNSIGNED_INT||R.gpuType===Qf;if(R.isInterleavedBufferAttribute){const Y=R.data,ae=Y.stride,Te=R.offset;if(Y.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)d(z.location+pe,Y.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<z.locationSize;pe++)g(z.location+pe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let pe=0;pe<z.locationSize;pe++)y(z.location+pe,K/z.locationSize,de,A,ae*le,(Te+K/z.locationSize*pe)*le,O)}else{if(R.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)d(z.location+Y,R.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Y=0;Y<z.locationSize;Y++)g(z.location+Y);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Y=0;Y<z.locationSize;Y++)y(z.location+Y,K/z.locationSize,de,A,K*le,K/z.locationSize*Y*le,O)}}else if(ee!==void 0){const A=ee[$];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(z.location,A);break;case 3:t.vertexAttrib3fv(z.location,A);break;case 4:t.vertexAttrib4fv(z.location,A);break;default:t.vertexAttrib1fv(z.location,A)}}}}v()}function w(){C();for(const I in i){const D=i[I];for(const V in D){const U=D[V];for(const j in U){const Q=U[j];for(const ee in Q)f(Q[ee].object),delete Q[ee];delete U[j]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;const D=i[I.id];for(const V in D){const U=D[V];for(const j in U){const Q=U[j];for(const ee in Q)f(Q[ee].object),delete Q[ee];delete U[j]}}delete i[I.id]}function N(I){for(const D in i){const V=i[D];for(const U in V){const j=V[U];if(j[I.id]===void 0)continue;const Q=j[I.id];for(const ee in Q)f(Q[ee].object),delete Q[ee];delete j[I.id]}}}function S(I){for(const D in i){const V=i[D],U=I.isInstancedMesh===!0?I.id:0,j=V[U];if(j!==void 0){for(const Q in j){const ee=j[Q];for(const $ in ee)f(ee[$].object),delete ee[$];delete j[Q]}delete V[U],Object.keys(V).length===0&&delete i[D]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function hT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function fT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==ti&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const S=N===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Nn&&N!==mi&&!S&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ye("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:w,samples:E}}function pT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const x=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,y=v*4;let _=d.clippingState||null;l.value=_,_=f(x,h,y,m);for(let w=0;w!==y;++w)_[w]=n[w];d.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,x){const b=p!==null?p.length:0;let g=null;if(b!==0){if(g=l.value,x!==!0||g===null){const d=m+b*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,_=m;y!==b;++y,_+=4)o.copy(p[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Vs=4,mT=6,gT=20,xT=256,Do=new mp,v0=new ot;let nd=null,id=0,rd=0,sd=!1;const vT=new H,Ir=new H;class y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=vT}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Si,format:ti,colorSpace:Tc,depthBuffer:!1},r=_0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yT(s)),this._blurMaterial=ST(s,e,n),this._ggxMaterial=_T(s,e,n)}return r}_compileMaterial(e){const n=new $e(new gn,e);this._renderer.compile(n,Do)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(v0),p.toneMapping=yi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new rn,new Pi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(v0),d=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const w=this._cubeSize;Es(r,_*w,y>2?w:0,w,w),p.setRenderTarget(r),d&&p.render(b,l),p.render(e,l)}p.toneMapping=m,p.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Do)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),h=c*1.25,m=p*h,{_lodMax:x}=this,b=this._sizeLods[i],g=3*b*(i>x-Vs?i-x+Vs:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,Es(s,g,d,3*b,2*b),r.setRenderTarget(s),r.render(a,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Es(e,g,d,3*b,2*b),r.setRenderTarget(e),r.render(a,Do)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-Vs?r-this._lodMax+Vs:0),h=4*(this._cubeSize-f);Es(n,p,h,3*f,2*f),o.setRenderTarget(n),o.render(l,Do)}}function yT(t){const e=[],n=[];let i=t;const r=t-Vs+1+mT;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,m=3,x=new Float32Array(m*h*p),b=new Float32Array(m*h*p);for(let d=0;d<p;d++){const v=d%3*2/3-1,y=d>2?0:-1,_=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];x.set(_,m*h*d);for(let w=0;w<h;w++){const E=f[w*2]*2-1,N=f[w*2+1]*2-1;d===0?Ir.set(1,N,E):d===1?Ir.set(-E,1,-N):d===2?Ir.set(-E,N,1):d===3?Ir.set(-1,N,-E):d===4?Ir.set(-E,-1,N):Ir.set(E,N,-1),Ir.toArray(b,(d*h+w)*m)}}const g=new gn;g.setAttribute("position",new Vi(x,m)),g.setAttribute("outputDirection",new Vi(b,m)),n.push(new $e(g,null)),i>Vs&&i--}return{lodMeshes:n,sizeLods:e}}function _0(t,e,n){const i=new ri(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _T(t,e,n){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ST(t,e,n){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function S0(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function M0(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gy extends ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rn(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Bi});s.uniforms.tEquirect.value=n;const o=new $e(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=on),new bb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function MT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?o(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Au||m===Cu)if(e.has(h)){const x=e.get(h).texture;return a(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const b=new Gy(x.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,x=m===Au||m===Cu,b=m===Zr||m===ro;if(x||b){let g=n.get(h);const d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new y0(t)),g=x?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return x&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new y0(t)),g=x?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function a(h,m){return m===Au?h.mapping=Zr:m===Cu&&(h.mapping=ro),h}function l(h){let m=0;const x=6;for(let b=0;b<x;b++)h[b]!==void 0&&m++;return m===x}function c(h){const m=h.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function wT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$s("WebGLRenderer: "+i+" extension not supported."),r}}}function bT(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,x=p.attributes.position;let b=0;if(x===void 0)return;if(m!==null){const v=m.array;b=m.version;for(let y=0,_=v.length;y<_;y+=3){const w=v[y+0],E=v[y+1],N=v[y+2];h.push(w,E,E,N,N,w)}}else{const v=x.array;b=x.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const w=y+0,E=y+1,N=y+2;h.push(w,E,E,N,N,w)}}const g=new(x.count>=65535?Ay:Ty)(h,1);g.version=b;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function ET(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){t.drawElements(i,h,s,p*o),n.update(h,i,1)}function c(p,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,p*o,m),n.update(h,i,m))}function f(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,m);let b=0;for(let g=0;g<m;g++)b+=h[g];n.update(b,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function TT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AT(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let C=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),b===!0&&(y=3);let _=a.attributes.position.count*y,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*w*4*p),N=new wy(E,_,w,p);N.type=mi,N.needsUpdate=!0;const S=y*4;for(let L=0;L<p;L++){const I=g[L],D=d[L],V=v[L],U=_*w*4*L;for(let j=0;j<I.count;j++){const Q=j*S;m===!0&&(r.fromBufferAttribute(I,j),E[U+Q+0]=r.x,E[U+Q+1]=r.y,E[U+Q+2]=r.z,E[U+Q+3]=0),x===!0&&(r.fromBufferAttribute(D,j),E[U+Q+4]=r.x,E[U+Q+5]=r.y,E[U+Q+6]=r.z,E[U+Q+7]=0),b===!0&&(r.fromBufferAttribute(V,j),E[U+Q+8]=r.x,E[U+Q+9]=r.y,E[U+Q+10]=r.z,E[U+Q+11]=V.itemSize===4?r.w:1)}}h={count:p,texture:N,size:new Ee(_,w)},i.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function CT(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,p=c.geometry,h=e.get(c,p);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const RT={[ly]:"LINEAR_TONE_MAPPING",[cy]:"REINHARD_TONE_MAPPING",[uy]:"CINEON_TONE_MAPPING",[Jf]:"ACES_FILMIC_TONE_MAPPING",[hy]:"AGX_TONE_MAPPING",[fy]:"NEUTRAL_TONE_MAPPING",[dy]:"CUSTOM_TONE_MAPPING"};function NT(t,e,n,i,r,s){const o=new ri(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new gn;c.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const f=new xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new $e(c,f),h=new mp(-1,1,1,-1,0,1);let m=null,x=null,b=!1,g,d=null,v=[],y=!1;this.setSize=function(_,w){o.setSize(_,w),a!==null&&a.setSize(_,w),l!==null&&l.setSize(_,w);for(let E=0;E<v.length;E++){const N=v[E];N.setSize&&N.setSize(_,w)}},this.setEffects=function(_){v=_,y=v.length>0&&v[0].isRenderPass===!0;const w=o.width,E=o.height;v.length>0&&a===null&&(a=new ri(w,E,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new ri(w,E,{type:Si,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<v.length;N++){const S=v[N];S.setSize&&S.setSize(w,E)}},this.begin=function(_,w){if(b||_.toneMapping===yi&&v.length===0)return!1;if(d=w,w!==null){const E=w.width,N=w.height;(o.width!==E||o.height!==N)&&this.setSize(E,N)}return y===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=yi,!0},this.hasRenderPass=function(){return y},this.end=function(_,w){_.toneMapping=g,b=!0;let E=o,N=a;for(let S=0;S<v.length;S++){const C=v[S];C.enabled!==!1&&(C.render(_,N,E,w),C.needsSwap!==!1&&(E=N,N=N===a?l:a))}if(m!==_.outputColorSpace||x!==_.toneMapping){m=_.outputColorSpace,x=_.toneMapping,f.defines={},dt.getTransfer(m)===gt&&(f.defines.SRGB_TRANSFER="");const S=RT[x];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(d),_.render(p,h),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const jy=new fn,Yh=new Ea(1,1),Wy=new wy,Xy=new hw,qy=new Cy,w0=[],b0=[],E0=new Float32Array(16),T0=new Float32Array(9),A0=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=w0[r];if(s===void 0&&(s=new Float32Array(r),w0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=b0[e];n===void 0&&(n=new Int32Array(e),b0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function UT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;A0.set(i),t.uniformMatrix2fv(this.addr,!1,A0),Gt(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),Gt(n,i)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;E0.set(i),t.uniformMatrix4fv(this.addr,!1,E0),Gt(n,i)}}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function HT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yh.compareFunction=n.isReversedDepthBuffer()?op:sp,s=Yh):s=jy,n.setTexture2D(e||s,r)}function qT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xy,r)}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qy,r)}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wy,r)}function KT(t){switch(t){case 5126:return PT;case 35664:return LT;case 35665:return DT;case 35666:return IT;case 35674:return UT;case 35675:return kT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return VT;case 5125:return HT;case 36294:return GT;case 36295:return jT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(t,e){t.uniform1fv(this.addr,e)}function JT(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function QT(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function eA(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function tA(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nA(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iA(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rA(t,e){t.uniform1iv(this.addr,e)}function sA(t,e){t.uniform2iv(this.addr,e)}function oA(t,e){t.uniform3iv(this.addr,e)}function aA(t,e){t.uniform4iv(this.addr,e)}function lA(t,e){t.uniform1uiv(this.addr,e)}function cA(t,e){t.uniform2uiv(this.addr,e)}function uA(t,e){t.uniform3uiv(this.addr,e)}function dA(t,e){t.uniform4uiv(this.addr,e)}function hA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Yh:o=jy;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function fA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Xy,s[o])}function pA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qy,s[o])}function mA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wy,s[o])}function gA(t){switch(t){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KT(n.type)}}class vA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gA(n.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function C0(t,e){t.seq.push(e),t.map[e.id]=e}function _A(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const s=od.exec(i),o=od.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){C0(n,c===void 0?new xA(a,t,e):new vA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new yA(a),C0(n,p)),n=p}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);_A(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function R0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const SA=37297;let MA=0;function wA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const N0=new et;function bA(t){dt._getMatrix(N0,dt.workingColorSpace,t);const e=`mat3( ${N0.elements.map(n=>n.toFixed(4))} )`;switch(dt.getTransfer(t)){case Ac:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function P0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+wA(t.getShaderSource(e),a)}else return s}function EA(t,e){const n=bA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const TA={[ly]:"Linear",[cy]:"Reinhard",[uy]:"Cineon",[Jf]:"ACESFilmic",[hy]:"AgX",[fy]:"Neutral",[dy]:"Custom"};function AA(t,e){const n=TA[e];return n===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new H;function CA(){dt.getLuminanceCoefficients(Rl);const t=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function NA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function L0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(LA,IA)}const DA=new Map;function IA(t,e){let n=it[e];if(n===void 0){const i=DA.get(e);if(i!==void 0)n=it[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kh(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(t){return t.replace(UA,kA)}function kA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function U0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FA={[Gl]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function OA(t){return FA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[Zr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function zA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":BA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const VA={[ro]:"ENVMAP_MODE_REFRACTION"};function HA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":VA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[ay]:"ENVMAP_BLENDING_MULTIPLY",[CM]:"ENVMAP_BLENDING_MIX",[RM]:"ENVMAP_BLENDING_ADD"};function jA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":GA[t.combine]||"ENVMAP_BLENDING_NONE"}function WA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OA(n),c=zA(n),f=HA(n),p=jA(n),h=WA(n),m=RA(n),x=NA(s),b=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),d.length>0&&(d+=`
`)):(g=[U0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),d=[U0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?it.tonemapping_pars_fragment:"",n.toneMapping!==yi?AA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,EA("linearToOutputTexel",n.outputColorSpace),CA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Kh(o),o=L0(o,n),o=D0(o,n),a=Kh(a),a=L0(a,n),a=D0(a,n),o=I0(o),a=I0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+g+o,_=v+d+a,w=R0(r,r.VERTEX_SHADER,y),E=R0(r,r.FRAGMENT_SHADER,_);r.attachShader(b,w),r.attachShader(b,E),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N(I){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(w)||"",U=r.getShaderInfoLog(E)||"",j=D.trim(),Q=V.trim(),ee=U.trim();let $=!0,z=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,w,E);else{const R=P0(r,w,"vertex"),A=P0(r,E,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+R+`
`+A)}else j!==""?Ye("WebGLProgram: Program Info Log:",j):(Q===""||ee==="")&&(z=!1);z&&(I.diagnostics={runnable:$,programLog:j,vertexShader:{log:Q,prefix:g},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(w),r.deleteShader(E),S=new $l(r,b),C=PA(r,b)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(b,SA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}let qA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YA(e),n.set(e,i)),i}}class YA{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function KA(t){return t===Jr||t===bc||t===Ec}function ZA(t,e,n,i,r,s){const o=new by,a=new $A,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function b(S,C,L,I,D,V){const U=I.fog,j=D.geometry,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,$=e.get(S.envMap||Q,ee),z=$&&$.mapping===Yc?$.image.height:null,R=m[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const A=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=A!==void 0?A.length:0;let te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let me,de,le,O;if(R){const lt=fi[R];me=lt.vertexShader,de=lt.fragmentShader}else{me=S.vertexShader,de=S.fragmentShader;const lt=a.getVertexShaderStage(S),ht=a.getFragmentShaderStage(S);a.update(S,lt,ht),le=lt.id,O=ht.id}const Y=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),Te=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Ae=!!S.map,Xe=!!S.matcap,J=!!$,oe=!!S.aoMap,he=!!S.lightMap,ue=!!S.bumpMap&&S.wireframe===!1,fe=!!S.normalMap,ze=!!S.displacementMap,Ue=!!S.emissiveMap,qe=!!S.metalnessMap,Ke=!!S.roughnessMap,k=S.anisotropy>0,ut=S.clearcoat>0,nt=S.dispersion>0,P=S.retroreflectivity>0,M=S.iridescence>0,W=S.sheen>0,Z=S.transmission>0,ne=k&&!!S.anisotropyMap,ge=ut&&!!S.clearcoatMap,ye=ut&&!!S.clearcoatNormalMap,ie=ut&&!!S.clearcoatRoughnessMap,se=M&&!!S.iridescenceMap,we=M&&!!S.iridescenceThicknessMap,He=W&&!!S.sheenColorMap,Re=W&&!!S.sheenRoughnessMap,be=!!S.specularMap,Ve=!!S.specularColorMap,We=!!S.specularIntensityMap,Je=Z&&!!S.transmissionMap,B=Z&&!!S.thicknessMap,_e=!!S.gradientMap,re=!!S.alphaMap,Ce=S.alphaTest>0,Pe=!!S.alphaHash,ce=!!S.extensions;let Ge=yi;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const Oe={shaderID:R,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:de,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:O,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:Te,instancingColor:Te&&D.instanceColor!==null,instancingMorph:Te&&D.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:Xe,envMap:J,envMapMode:J&&$.mapping,envMapCubeUVHeight:z,aoMap:oe,lightMap:he,bumpMap:ue,normalMap:fe,displacementMap:ze,emissiveMap:Ue,normalMapObjectSpace:fe&&S.normalMapType===LM,normalMapTangentSpace:fe&&S.normalMapType===jh,packedNormalMap:fe&&S.normalMapType===jh&&KA(S.normalMap.format),metalnessMap:qe,roughnessMap:Ke,anisotropy:k,anisotropyMap:ne,clearcoat:ut,clearcoatMap:ge,clearcoatNormalMap:ye,clearcoatRoughnessMap:ie,dispersion:nt,retroreflection:P,iridescence:M,iridescenceMap:se,iridescenceThicknessMap:we,sheen:W,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:be,specularColorMap:Ve,specularIntensityMap:We,transmission:Z,transmissionMap:Je,thicknessMap:B,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Jo&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:Ce,alphaHash:Pe,combine:S.combine,mapUv:Ae&&x(S.map.channel),aoMapUv:oe&&x(S.aoMap.channel),lightMapUv:he&&x(S.lightMap.channel),bumpMapUv:ue&&x(S.bumpMap.channel),normalMapUv:fe&&x(S.normalMap.channel),displacementMapUv:ze&&x(S.displacementMap.channel),emissiveMapUv:Ue&&x(S.emissiveMap.channel),metalnessMapUv:qe&&x(S.metalnessMap.channel),roughnessMapUv:Ke&&x(S.roughnessMap.channel),anisotropyMapUv:ne&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:Ve&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:Je&&x(S.transmissionMap.channel),thicknessMapUv:B&&x(S.thicknessMap.channel),alphaMapUv:re&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(fe||k),vertexNormals:!!j.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(Ae||re),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&fe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:te,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ce&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&S.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function g(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)C.push(L),C.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(d(C,S),v(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function d(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numSunLights),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numSunLightShadows),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function y(S){const C=m[S.type];let L;if(C){const I=fi[C];L=pb.clone(I.uniforms)}else L=S.uniforms;return L}function _(S,C){let L=f.get(C);return L!==void 0?++L.usedTimes:(L=new XA(t,C,S,r),c.push(L),f.set(C,L)),L}function w(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function N(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:N}}function JA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function k0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function F0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,x,b,g,d){let v=t[e];return v===void 0?(v={id:h.id,object:h,geometry:m,material:x,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:d},t[e]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=x,v.materialVariant=o(h),v.groupOrder=b,v.renderOrder=h.renderOrder,v.z=g,v.group=d),e++,v}function l(h,m,x,b,g,d,v){v.reversedDepth===!0&&(g=-g);const y=a(h,m,x,b,g,d);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):n.push(y)}function c(h,m,x,b,g,d){const v=a(h,m,x,b,g,d);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):n.unshift(v)}function f(h,m){n.length>1&&n.sort(h||QA),i.length>1&&i.sort(m||k0),r.length>1&&r.sort(m||k0)}function p(){for(let h=e,m=t.length;h<m;h++){const x=t[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function eC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new F0,t.set(i,[o])):r>=s.length?(o=new F0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new ot};break;case"SpotLight":n={position:new H,direction:new H,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function nC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iC=0;function rC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sC(t){const e=new tC,n=nC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Pt,o=new Pt;function a(c){let f=0,p=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,x=0,b=0,g=0,d=0,v=0,y=0,_=0,w=0,E=0,N=0,S=0,C=0,L=0;c.sort(rC);for(let D=0,V=c.length;D<V;D++){const U=c[D],j=U.color,Q=U.intensity,ee=U.distance;let $=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Jr?$=U.shadow.map.texture:$=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=j.r*Q,p+=j.g*Q,h+=j.b*Q;else if(U.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(U.sh.coefficients[z],Q);L++}else if(U.isSunLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const R=U.shadow,A=n.get(U);A.shadowIntensity=R.intensity,A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[x]=A,i.sunShadowMap[x]=$;const K=R.getViewportCount();for(let te=0;te<K;te++)i.sunShadowMatrix[b+te]=R.getMatrix(te),i.sunShadowCascade[b+te]=R._cascadeData[te];b+=K,x++}i.sun[m]=z,m++}else if(U.isDirectionalLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const R=U.shadow,A=n.get(U);A.shadowIntensity=R.intensity,A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,i.directionalShadow[g]=A,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=U.shadow.matrix,w++}i.directional[g]=z,g++}else if(U.isSpotLight){const z=e.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(j).multiplyScalar(Q),z.distance=ee,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,i.spot[v]=z;const R=U.shadow;if(U.map&&(i.spotLightMap[S]=U.map,S++,R.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[v]=R.matrix,U.castShadow){const A=n.get(U);A.shadowIntensity=R.intensity,A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,i.spotShadow[v]=A,i.spotShadowMap[v]=$,N++}v++}else if(U.isRectAreaLight){const z=e.get(U);z.color.copy(j).multiplyScalar(Q),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=z,y++}else if(U.isPointLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),z.distance=U.distance,z.decay=U.decay,U.castShadow){const R=U.shadow,A=n.get(U);A.shadowIntensity=R.intensity,A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,A.shadowCameraNear=R.camera.near,A.shadowCameraFar=R.camera.far,i.pointShadow[d]=A,i.pointShadowMap[d]=$,i.pointShadowMatrix[d]=U.shadow.matrix,E++}i.point[d]=z,d++}else if(U.isHemisphereLight){const z=e.get(U);z.skyColor.copy(U.color).multiplyScalar(Q),z.groundColor.copy(U.groundColor).multiplyScalar(Q),i.hemi[_]=z,_++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==y||I.hemiLength!==_||I.numSunShadows!==x||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==N||I.numSpotMaps!==S||I.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=v,i.rectArea.length=y,i.point.length=d,i.hemi.length=_,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,I.sunLength=m,I.directionalLength=g,I.pointLength=d,I.spotLength=v,I.rectAreaLength=y,I.hemiLength=_,I.numSunShadows=x,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=N,I.numSpotMaps=S,I.numLightProbes=L,i.version=iC++)}function l(c,f){let p=0,h=0,m=0,x=0,b=0,g=0;const d=f.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const _=c[v];if(_.isSunLight){const w=i.sun[p];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),p++}else if(_.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),h++}else if(_.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),x++}else if(_.isRectAreaLight){const w=i.rectArea[b];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),o.identity(),s.copy(_.matrixWorld),s.premultiply(d),o.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),b++}else if(_.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:i}}function O0(t){const e=new sC(t),n=[],i=[],r=[];function s(h){p.camera=h,n.length=0,i.length=0,r.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function f(h){e.setupView(n,h)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function oC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new O0(t),e.set(r,[a])):s>=o.length?(a=new O0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],uC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],B0=new Pt,Io=new H,ad=new H;function dC(t,e,n){let i=new up;const r=new Ee,s=new Ee,o=new Ct,a=new yb,l=new _b,c={},f=n.maxTextureSize,p={[Kr]:bn,[bn]:Kr,[Di]:Di},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:aC,fragmentShader:lC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new gn;x.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $e(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let d=this.type;this.render=function(E,N,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ry&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Bi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=d!==this.type;V&&N.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(j=>j.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,j=E.length;U<j;U++){const Q=E[U],ee=Q.shadow;if(ee===void 0){Ye("WebGLShadowMap:",Q,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const $=ee.getFrameExtents();r.multiply($),s.copy(ee.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,ee.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,ee.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=z,ee.map===null||V===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Bo){if(Q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new ri(r.x,r.y,{format:Jr,type:Si,minFilter:on,magFilter:on,generateMipmaps:!1}),ee.map.texture.name=Q.name+".shadowMap",ee.map.depthTexture=new Ea(r.x,r.y,mi),ee.map.depthTexture.name=Q.name+".shadowMapDepth",ee.map.depthTexture.format=Xi,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Kt,ee.map.depthTexture.magFilter=Kt}else Q.isPointLight?(ee.map=new Gy(r.x),ee.map.depthTexture=new Pw(r.x,_i)):(ee.map=new ri(r.x,r.y),ee.map.depthTexture=new Ea(r.x,r.y,_i)),ee.map.depthTexture.name=Q.name+".shadowMap",ee.map.depthTexture.format=Xi,this.type===Gl?(ee.map.depthTexture.compareFunction=z?op:sp,ee.map.depthTexture.minFilter=on,ee.map.depthTexture.magFilter=on):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Kt,ee.map.depthTexture.magFilter=Kt);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==r.x||ee.map.height!==r.y)&&ee.map.setSize(r.x,r.y);const R=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();Q.isPointLight!==!0&&ee.updateMatrices(Q,S);for(let A=0;A<R;A++){const K=ee.getCamera(A);if(Q.isPointLight){const te=ee.camera,me=ee.matrix,de=Q.distance||te.far;de!==te.far&&(te.far=de,te.updateProjectionMatrix()),Io.setFromMatrixPosition(Q.matrixWorld),te.position.copy(Io),ad.copy(te.position),ad.add(cC[A]),te.up.copy(uC[A]),te.lookAt(ad),te.updateMatrixWorld(),me.makeTranslation(-Io.x,-Io.y,-Io.z),B0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(B0,te.coordinateSystem,te.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)t.setRenderTarget(ee.map,A),t.clear();else{A===0&&(t.setRenderTarget(ee.map),t.clear());const te=ee.getViewport(A);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),D.viewport(o)}i=ee.getFrustum(A),_(N,S,K,Q,this.type)}ee.isPointLightShadow!==!0&&this.type===Bo&&v(ee,S),ee.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,I)};function v(E,N){const S=e.update(b);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new ri(r.x,r.y,{format:Jr,type:Si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(N,null,S,h,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(N,null,S,m,b,null)}function y(E,N,S,C){let L=null;const I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)L=I;else if(L=S.isPointLight===!0?l:a,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const D=L.uuid,V=N.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let j=U[V];j===void 0&&(j=L.clone(),U[V]=j,N.addEventListener("dispose",w)),L=j}if(L.visible=N.visible,L.wireframe=N.wireframe,C===Bo?L.side=N.shadowSide!==null?N.shadowSide:N.side:L.side=N.shadowSide!==null?N.shadowSide:p[N.side],L.alphaMap=N.alphaMap,L.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,L.map=N.map,L.clipShadows=N.clipShadows,L.clippingPlanes=N.clippingPlanes,L.clipIntersection=N.clipIntersection,L.displacementMap=N.displacementMap,L.displacementScale=N.displacementScale,L.displacementBias=N.displacementBias,L.wireframeLinewidth=N.wireframeLinewidth,L.linewidth=N.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const D=t.properties.get(L);D.light=S}return L}function _(E,N,S,C,L){if(E.visible===!1)return;if(E.layers.test(N.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Bo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const V=e.update(E),U=E.material;if(Array.isArray(U)){const j=V.groups;for(let Q=0,ee=j.length;Q<ee;Q++){const $=j[Q],z=U[$.materialIndex];if(z&&z.visible){const R=y(E,z,C,L);E.onBeforeShadow(t,E,N,S,V,R,$),t.renderBufferDirect(S,null,V,R,E,$),E.onAfterShadow(t,E,N,S,V,R,$)}}}else if(U.visible){const j=y(E,U,C,L);E.onBeforeShadow(t,E,N,S,V,j,null),t.renderBufferDirect(S,null,V,j,E,null),E.onAfterShadow(t,E,N,S,V,j,null)}}const D=E.children;for(let V=0,U=D.length;V<U;V++)_(D[V],N,S,C,L)}function w(E){E.target.removeEventListener("dispose",w);for(const S in c){const C=c[S],L=E.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function hC(t,e){function n(){let B=!1;const _e=new Ct;let re=null;const Ce=new Ct(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!B&&(t.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,ce,Ge,Oe,lt){lt===!0&&(Pe*=Oe,ce*=Oe,Ge*=Oe),_e.set(Pe,ce,Ge,Oe),Ce.equals(_e)===!1&&(t.clearColor(Pe,ce,Ge,Oe),Ce.copy(_e))},reset:function(){B=!1,re=null,Ce.set(-1,0,0,0)}}}function i(){let B=!1,_e=!1,re=null,Ce=null,Pe=null;return{setReversed:function(ce){if(_e!==ce){const Ge=e.get("EXT_clip_control");ce?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),_e=ce;const Oe=Pe;Pe=null,this.setClear(Oe)}},getReversed:function(){return _e},setTest:function(ce){ce?Y(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(ce){re!==ce&&!B&&(t.depthMask(ce),re=ce)},setFunc:function(ce){if(_e&&(ce=jM[ce]),Ce!==ce){switch(ce){case sh:t.depthFunc(t.NEVER);break;case oh:t.depthFunc(t.ALWAYS);break;case ah:t.depthFunc(t.LESS);break;case _a:t.depthFunc(t.LEQUAL);break;case lh:t.depthFunc(t.EQUAL);break;case ch:t.depthFunc(t.GEQUAL);break;case uh:t.depthFunc(t.GREATER);break;case dh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=ce}},setLocked:function(ce){B=ce},setClear:function(ce){Pe!==ce&&(Pe=ce,_e&&(ce=1-ce),t.clearDepth(ce))},reset:function(){B=!1,re=null,Ce=null,Pe=null,_e=!1}}}function r(){let B=!1,_e=null,re=null,Ce=null,Pe=null,ce=null,Ge=null,Oe=null,lt=null;return{setTest:function(ht){B||(ht?Y(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(ht){_e!==ht&&!B&&(t.stencilMask(ht),_e=ht)},setFunc:function(ht,En,xn){(re!==ht||Ce!==En||Pe!==xn)&&(t.stencilFunc(ht,En,xn),re=ht,Ce=En,Pe=xn)},setOp:function(ht,En,xn){(ce!==ht||Ge!==En||Oe!==xn)&&(t.stencilOp(ht,En,xn),ce=ht,Ge=En,Oe=xn)},setLocked:function(ht){B=ht},setClear:function(ht){lt!==ht&&(t.clearStencil(ht),lt=ht)},reset:function(){B=!1,_e=null,re=null,Ce=null,Pe=null,ce=null,Ge=null,Oe=null,lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},p={},h={},m=new WeakMap,x=[],b=null,g=!1,d=null,v=null,y=null,_=null,w=null,E=null,N=null,S=new ot(0,0,0),C=0,L=!1,I=null,D=null,V=null,U=null,j=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=$>=2);let R=null,A={};const K=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),me=new Ct().fromArray(K),de=new Ct().fromArray(te);function le(B,_e,re,Ce){const Pe=new Uint8Array(4),ce=t.createTexture();t.bindTexture(B,ce),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<re;Ge++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(_e+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return ce}const O={};O[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(t.DEPTH_TEST),o.setFunc(_a),ue(!1),fe(km),Y(t.CULL_FACE),oe(Bi);function Y(B){f[B]!==!0&&(t.enable(B),f[B]=!0)}function ae(B){f[B]!==!1&&(t.disable(B),f[B]=!1)}function Te(B,_e){return h[B]!==_e?(t.bindFramebuffer(B,_e),h[B]=_e,B===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=_e),B===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function pe(B,_e){let re=x,Ce=!1;if(B){re=m.get(_e),re===void 0&&(re=[],m.set(_e,re));const Pe=B.textures;if(re.length!==Pe.length||re[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ge=Pe.length;ce<Ge;ce++)re[ce]=t.COLOR_ATTACHMENT0+ce;re.length=Pe.length,Ce=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(re)}function Ae(B){return b!==B?(t.useProgram(B),b=B,!0):!1}const Xe={[Ts]:t.FUNC_ADD,[dM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};Xe[fM]=t.MIN,Xe[pM]=t.MAX;const J={[mM]:t.ZERO,[gM]:t.ONE,[xM]:t.SRC_COLOR,[sy]:t.SRC_ALPHA,[wM]:t.SRC_ALPHA_SATURATE,[SM]:t.DST_COLOR,[yM]:t.DST_ALPHA,[vM]:t.ONE_MINUS_SRC_COLOR,[oy]:t.ONE_MINUS_SRC_ALPHA,[MM]:t.ONE_MINUS_DST_COLOR,[_M]:t.ONE_MINUS_DST_ALPHA,[bM]:t.CONSTANT_COLOR,[EM]:t.ONE_MINUS_CONSTANT_COLOR,[TM]:t.CONSTANT_ALPHA,[AM]:t.ONE_MINUS_CONSTANT_ALPHA};function oe(B,_e,re,Ce,Pe,ce,Ge,Oe,lt,ht){if(B===Bi){g===!0&&(ae(t.BLEND),g=!1);return}if(g===!1&&(Y(t.BLEND),g=!0),B!==uM){if(B!==d||ht!==L){if((v!==Ts||w!==Ts)&&(t.blendEquation(t.FUNC_ADD),v=Ts,w=Ts),ht)switch(B){case Jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fm:t.blendFunc(t.ONE,t.ONE);break;case Om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",B);break}else switch(B){case Jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Om:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",B);break}y=null,_=null,E=null,N=null,S.set(0,0,0),C=0,d=B,L=ht}return}Pe=Pe||_e,ce=ce||re,Ge=Ge||Ce,(_e!==v||Pe!==w)&&(t.blendEquationSeparate(Xe[_e],Xe[Pe]),v=_e,w=Pe),(re!==y||Ce!==_||ce!==E||Ge!==N)&&(t.blendFuncSeparate(J[re],J[Ce],J[ce],J[Ge]),y=re,_=Ce,E=ce,N=Ge),(Oe.equals(S)===!1||lt!==C)&&(t.blendColor(Oe.r,Oe.g,Oe.b,lt),S.copy(Oe),C=lt),d=B,L=!1}function he(B,_e){B.side===Di?ae(t.CULL_FACE):Y(t.CULL_FACE);let re=B.side===bn;_e&&(re=!re),ue(re),B.blending===Jo&&B.transparent===!1?oe(Bi):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ce=B.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){I!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),I=B)}function fe(B){B!==lM?(Y(t.CULL_FACE),B!==D&&(B===km?t.cullFace(t.BACK):B===cM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),D=B}function ze(B){B!==V&&(ee&&t.lineWidth(B),V=B)}function Ue(B,_e,re){B?(Y(t.POLYGON_OFFSET_FILL),(U!==_e||j!==re)&&(U=_e,j=re,o.getReversed()&&(_e=-_e),t.polygonOffset(_e,re))):ae(t.POLYGON_OFFSET_FILL)}function qe(B){B?Y(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function Ke(B){B===void 0&&(B=t.TEXTURE0+Q-1),R!==B&&(t.activeTexture(B),R=B)}function k(B,_e,re){re===void 0&&(R===null?re=t.TEXTURE0+Q-1:re=R);let Ce=A[re];Ce===void 0&&(Ce={type:void 0,texture:void 0},A[re]=Ce),(Ce.type!==B||Ce.texture!==_e)&&(R!==re&&(t.activeTexture(re),R=re),t.bindTexture(B,_e||O[B]),Ce.type=B,Ce.texture=_e)}function ut(){const B=A[R];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function M(){try{t.texSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function W(){try{t.texSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function ge(){try{t.texStorage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function ye(){try{t.texStorage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function ie(){try{t.texImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function se(){try{t.texImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function we(B){return p[B]!==void 0?p[B]:t.getParameter(B)}function He(B,_e){p[B]!==_e&&(t.pixelStorei(B,_e),p[B]=_e)}function Re(B){me.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),me.copy(B))}function be(B){de.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function Ve(B,_e){let re=c.get(_e);re===void 0&&(re=new WeakMap,c.set(_e,re));let Ce=re.get(B);Ce===void 0&&(Ce=t.getUniformBlockIndex(_e,B.name),re.set(B,Ce))}function We(B,_e){const Ce=c.get(_e).get(B);l.get(_e)!==Ce&&(t.uniformBlockBinding(_e,Ce,B.__bindingPointIndex),l.set(_e,Ce))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},R=null,A={},h={},m=new WeakMap,x=[],b=null,g=!1,d=null,v=null,y=null,_=null,w=null,E=null,N=null,S=new ot(0,0,0),C=0,L=!1,I=null,D=null,V=null,U=null,j=null,me.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:ae,bindFramebuffer:Te,drawBuffers:pe,useProgram:Ae,setBlending:oe,setMaterial:he,setFlipSided:ue,setCullFace:fe,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:Ke,bindTexture:k,unbindTexture:ut,compressedTexImage2D:nt,compressedTexImage3D:P,texImage2D:ie,texImage3D:se,pixelStorei:He,getParameter:we,updateUBOMapping:Ve,uniformBlockBinding:We,texStorage2D:ge,texStorage3D:ye,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:Re,viewport:be,reset:Je}}function fC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,f=new WeakMap,p=new Set;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,M){return x?new OffscreenCanvas(P,M):Cc("canvas")}function g(P,M,W){let Z=1;const ne=nt(P);if((ne.width>W||ne.height>W)&&(Z=W/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ge=Math.floor(Z*ne.width),ye=Math.floor(Z*ne.height);h===void 0&&(h=b(ge,ye));const ie=M?b(ge,ye):h;return ie.width=ge,ie.height=ye,ie.getContext("2d").drawImage(P,0,0,ge,ye),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ge+"x"+ye+")."),ie}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function d(P){return P.generateMipmaps}function v(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,M,W,Z,ne,ge=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye;Z&&(ye=e.get("EXT_texture_norm16"),ye||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=M;if(M===t.RED&&(W===t.FLOAT&&(ie=t.R32F),W===t.HALF_FLOAT&&(ie=t.R16F),W===t.UNSIGNED_BYTE&&(ie=t.R8),W===t.UNSIGNED_SHORT&&ye&&(ie=ye.R16_EXT),W===t.SHORT&&ye&&(ie=ye.R16_SNORM_EXT)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ie=t.R8UI),W===t.UNSIGNED_SHORT&&(ie=t.R16UI),W===t.UNSIGNED_INT&&(ie=t.R32UI),W===t.BYTE&&(ie=t.R8I),W===t.SHORT&&(ie=t.R16I),W===t.INT&&(ie=t.R32I)),M===t.RG&&(W===t.FLOAT&&(ie=t.RG32F),W===t.HALF_FLOAT&&(ie=t.RG16F),W===t.UNSIGNED_BYTE&&(ie=t.RG8),W===t.UNSIGNED_SHORT&&ye&&(ie=ye.RG16_EXT),W===t.SHORT&&ye&&(ie=ye.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ie=t.RG8UI),W===t.UNSIGNED_SHORT&&(ie=t.RG16UI),W===t.UNSIGNED_INT&&(ie=t.RG32UI),W===t.BYTE&&(ie=t.RG8I),W===t.SHORT&&(ie=t.RG16I),W===t.INT&&(ie=t.RG32I)),M===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),W===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),W===t.UNSIGNED_INT&&(ie=t.RGB32UI),W===t.BYTE&&(ie=t.RGB8I),W===t.SHORT&&(ie=t.RGB16I),W===t.INT&&(ie=t.RGB32I)),M===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),W===t.UNSIGNED_INT&&(ie=t.RGBA32UI),W===t.BYTE&&(ie=t.RGBA8I),W===t.SHORT&&(ie=t.RGBA16I),W===t.INT&&(ie=t.RGBA32I)),M===t.RGB&&(W===t.UNSIGNED_SHORT&&ye&&(ie=ye.RGB16_EXT),W===t.SHORT&&ye&&(ie=ye.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(ie=t.R11F_G11F_B10F)),M===t.RGBA){const se=ge?Ac:dt.getTransfer(ne);W===t.FLOAT&&(ie=t.RGBA32F),W===t.HALF_FLOAT&&(ie=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ie=se===gt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&ye&&(ie=ye.RGBA16_EXT),W===t.SHORT&&ye&&(ie=ye.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(P,M){let W;return P?M===null||M===_i||M===Ma?W=t.DEPTH24_STENCIL8:M===mi?W=t.DEPTH32F_STENCIL8:M===Sa&&(W=t.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_i||M===Ma?W=t.DEPTH_COMPONENT24:M===mi?W=t.DEPTH_COMPONENT32F:M===Sa&&(W=t.DEPTH_COMPONENT16),W}function E(P,M){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){const M=P.target;M.removeEventListener("dispose",N),C(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&p.delete(M)}function S(P){const M=P.target;M.removeEventListener("dispose",S),I(M)}function C(P){const M=i.get(P);if(M.__webglInit===void 0)return;const W=P.source,Z=m.get(W);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(P),Object.keys(Z).length===0&&m.delete(W)}i.remove(P)}function L(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const W=P.source,Z=m.get(W);delete Z[M.__cacheKey],o.memory.textures--}function I(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ne=0;ne<M.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let Z=0,ne=W.length;Z<ne;Z++){const ge=i.get(W[Z]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(P)}let D=0;function V(){D=0}function U(){return D}function j(P){D=P}function Q(){const P=D;return P>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function ee(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function $(P,M){const W=i.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const Z=P.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function z(P,M){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ae(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function R(P,M){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ae(W,P,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function A(P,M){const W=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Te(W,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const K={[hh]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[fh]:t.MIRRORED_REPEAT},te={[Kt]:t.NEAREST,[NM]:t.NEAREST_MIPMAP_NEAREST,[ol]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},me={[IM]:t.NEVER,[BM]:t.ALWAYS,[UM]:t.LESS,[sp]:t.LEQUAL,[kM]:t.EQUAL,[op]:t.GEQUAL,[FM]:t.GREATER,[OM]:t.NOTEQUAL};function de(P,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===Ru||M.magFilter===ol||M.magFilter===Vr||M.minFilter===on||M.minFilter===Ru||M.minFilter===ol||M.minFilter===Vr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,K[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,K[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,K[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==ol&&M.minFilter!==Vr||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const Z=M.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const ge=ee(M);if(ge!==P.__cacheKey){ne[ge]===void 0&&(ne[ge]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[ge].usedTimes++;const ye=ne[P.__cacheKey];ye!==void 0&&(ne[P.__cacheKey].usedTimes--,ye.usedTimes===0&&L(M)),P.__cacheKey=ge,P.__webglTexture=ne[ge].texture}return W}function O(P,M,W){return Math.floor(Math.floor(P/W)/M)}function Y(P,M,W,Z){const ge=P.updateRanges;if(ge.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,W,Z,M.data);else{ge.sort((He,Re)=>He.start-Re.start);let ye=0;for(let He=1;He<ge.length;He++){const Re=ge[ye],be=ge[He],Ve=Re.start+Re.count,We=O(be.start,M.width,4),Je=O(Re.start,M.width,4);be.start<=Ve+1&&We===Je&&O(be.start+be.count-1,M.width,4)===We?Re.count=Math.max(Re.count,be.start+be.count-Re.start):(++ye,ge[ye]=be)}ge.length=ye+1;const ie=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),we=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let He=0,Re=ge.length;He<Re;He++){const be=ge[He],Ve=Math.floor(be.start/4),We=Math.ceil(be.count/4),Je=Ve%M.width,B=Math.floor(Ve/M.width),_e=We,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Je,B,_e,re,W,Z,M.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ie),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,we)}}function ae(P,M,W){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=le(P,M),ge=M.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+W);const ye=i.get(ge);if(ge.version!==ye.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const re=dt.getPrimaries(dt.workingColorSpace),Ce=M.colorSpace===ur?null:dt.getPrimaries(M.colorSpace),Pe=M.colorSpace===ur||re===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let se=g(M.image,!1,r.maxTextureSize);se=ut(M,se);const we=s.convert(M.format,M.colorSpace),He=s.convert(M.type);let Re=_(M.internalFormat,we,He,M.normalized,M.colorSpace,M.isVideoTexture);de(Z,M);let be;const Ve=M.mipmaps,We=M.isVideoTexture!==!0,Je=ye.__version===void 0||ne===!0,B=ge.dataReady,_e=E(M,se);if(M.isDepthTexture)Re=w(M.format===Hr,M.type),Je&&(We?n.texStorage2D(t.TEXTURE_2D,1,Re,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,we,He,null));else if(M.isDataTexture)if(Ve.length>0){We&&Je&&n.texStorage2D(t.TEXTURE_2D,_e,Re,Ve[0].width,Ve[0].height);for(let re=0,Ce=Ve.length;re<Ce;re++)be=Ve[re],We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,we,He,be.data):n.texImage2D(t.TEXTURE_2D,re,Re,be.width,be.height,0,we,He,be.data);M.generateMipmaps=!1}else We?(Je&&n.texStorage2D(t.TEXTURE_2D,_e,Re,se.width,se.height),B&&Y(M,se,we,He)):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,we,He,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Re,Ve[0].width,Ve[0].height,se.depth);for(let re=0,Ce=Ve.length;re<Ce;re++)if(be=Ve[re],M.format!==ti)if(we!==null)if(We){if(B)if(M.layerUpdates.size>0){const Pe=x0(be.width,be.height,M.format,M.type);for(const ce of M.layerUpdates){const Ge=be.data.subarray(ce*Pe/be.data.BYTES_PER_ELEMENT,(ce+1)*Pe/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ce,be.width,be.height,1,we,Ge)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,se.depth,we,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Re,be.width,be.height,se.depth,0,be.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,se.depth,we,He,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Re,be.width,be.height,se.depth,0,we,He,be.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{We&&Je&&n.texStorage2D(t.TEXTURE_2D,_e,Re,Ve[0].width,Ve[0].height);for(let re=0,Ce=Ve.length;re<Ce;re++)be=Ve[re],M.format!==ti?we!==null?We?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,we,be.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Re,be.width,be.height,0,be.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,be.width,be.height,we,He,be.data):n.texImage2D(t.TEXTURE_2D,re,Re,be.width,be.height,0,we,He,be.data)}else if(M.isDataArrayTexture)if(We){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Re,se.width,se.height,se.depth),B)if(M.layerUpdates.size>0){const re=x0(se.width,se.height,M.format,M.type);for(const Ce of M.layerUpdates){const Pe=se.data.subarray(Ce*re/se.data.BYTES_PER_ELEMENT,(Ce+1)*re/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,se.width,se.height,1,we,He,Pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,He,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,we,He,se.data);else if(M.isData3DTexture)We?(Je&&n.texStorage3D(t.TEXTURE_3D,_e,Re,se.width,se.height,se.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,He,se.data)):n.texImage3D(t.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,we,He,se.data);else if(M.isFramebufferTexture){if(Je)if(We)n.texStorage2D(t.TEXTURE_2D,_e,Re,se.width,se.height);else{let re=se.width,Ce=se.height;for(let Pe=0;Pe<_e;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Re,re,Ce,0,we,He,null),re>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),se.parentNode!==re){re.appendChild(se),p.add(M),re.onpaint=Ce=>{const Pe=Ce.changedElements;for(const ce of p)Pe.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,se);else{const Pe=t.RGBA,ce=t.RGBA,Ge=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Pe,ce,Ge,se)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(We&&Je){const re=nt(Ve[0]);n.texStorage2D(t.TEXTURE_2D,_e,Re,re.width,re.height)}for(let re=0,Ce=Ve.length;re<Ce;re++)be=Ve[re],We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,we,He,be):n.texImage2D(t.TEXTURE_2D,re,Re,we,He,be);M.generateMipmaps=!1}else if(We){if(Je){const re=nt(se);n.texStorage2D(t.TEXTURE_2D,_e,Re,re.width,re.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,He,se)}else n.texImage2D(t.TEXTURE_2D,0,Re,we,He,se);d(M)&&v(Z),ye.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Te(P,M,W){if(M.image.length!==6)return;const Z=le(P,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const ge=i.get(ne);if(ne.version!==ge.__version||Z===!0){n.activeTexture(t.TEXTURE0+W);const ye=dt.getPrimaries(dt.workingColorSpace),ie=M.colorSpace===ur?null:dt.getPrimaries(M.colorSpace),se=M.colorSpace===ur||ye===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!we&&!He?Re[ce]=g(M.image[ce],!0,r.maxCubemapSize):Re[ce]=He?M.image[ce].image:M.image[ce],Re[ce]=ut(M,Re[ce]);const be=Re[0],Ve=s.convert(M.format,M.colorSpace),We=s.convert(M.type),Je=_(M.internalFormat,Ve,We,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,_e=ge.__version===void 0||Z===!0,re=ne.dataReady;let Ce=E(M,be);de(t.TEXTURE_CUBE_MAP,M);let Pe;if(we){B&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Je,be.width,be.height);for(let ce=0;ce<6;ce++){Pe=Re[ce].mipmaps;for(let Ge=0;Ge<Pe.length;Ge++){const Oe=Pe[Ge];M.format!==ti?Ve!==null?B?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Oe.width,Oe.height,Ve,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,Je,Oe.width,Oe.height,0,Oe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Oe.width,Oe.height,Ve,We,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,Je,Oe.width,Oe.height,0,Ve,We,Oe.data)}}}else{if(Pe=M.mipmaps,B&&_e){Pe.length>0&&Ce++;const ce=nt(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(He){B?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Ve,We,Re[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Re[ce].width,Re[ce].height,0,Ve,We,Re[ce].data);for(let Ge=0;Ge<Pe.length;Ge++){const lt=Pe[Ge].image[ce].image;B?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,lt.width,lt.height,Ve,We,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,Je,lt.width,lt.height,0,Ve,We,lt.data)}}else{B?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve,We,Re[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Ve,We,Re[ce]);for(let Ge=0;Ge<Pe.length;Ge++){const Oe=Pe[Ge];B?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,Ve,We,Oe.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,Je,Ve,We,Oe.image[ce])}}}d(M)&&v(t.TEXTURE_CUBE_MAP),ge.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pe(P,M,W,Z,ne,ge){const ye=s.convert(W.format,W.colorSpace),ie=s.convert(W.type),se=_(W.internalFormat,ye,ie,W.normalized,W.colorSpace),we=i.get(M),He=i.get(W);if(He.__renderTarget=M,!we.__hasExternalTextures){const Re=Math.max(1,M.width>>ge),be=Math.max(1,M.height>>ge);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ge,se,Re,be,M.depth,0,ye,ie,null):n.texImage2D(ne,ge,se,Re,be,0,ye,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,He.__webglTexture,0,qe(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,He.__webglTexture,ge),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(P,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const Z=M.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,ge=w(M.stencilBuffer,ne),ye=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(M),ge,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(M),ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,P)}else{const Z=M.textures;for(let ne=0;ne<Z.length;ne++){const ge=Z[ne],ye=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),se=_(ge.internalFormat,ye,ie,ge.normalized,ge.colorSpace);Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(M),se,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(M),se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(P,M,W){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",N)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),de(t.TEXTURE_CUBE_MAP,M.depthTexture);const we=s.convert(M.depthTexture.format),He=s.convert(M.depthTexture.type);let Re;M.depthTexture.format===Xi?Re=t.DEPTH_COMPONENT24:M.depthTexture.format===Hr&&(Re=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Re,M.width,M.height,0,we,He,null)}}else $(M.depthTexture,0);const ge=ne.__webglTexture,ye=qe(M),ie=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,se=M.depthTexture.format===Hr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xi)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,ge,0,ye):t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,ge,0);else if(M.depthTexture.format===Hr)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,ge,0,ye):t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(P){const M=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Z}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Xe(M.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?Xe(M.__webglFramebuffer[0],P,0):Xe(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ae(M.__webglDepthbuffer[Z],P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ge),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ge)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ae(M.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ge),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ge)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(P,M,W){const Z=i.get(P);M!==void 0&&pe(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&J(P)}function he(P){const M=P.texture,W=i.get(P),Z=i.get(M);P.addEventListener("dispose",S);const ne=P.textures,ge=P.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),ge){W.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ie]=[];for(let se=0;se<M.mipmaps.length;se++)W.__webglFramebuffer[ie][se]=t.createFramebuffer()}else W.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)W.__webglFramebuffer[ie]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ie=0,se=ne.length;ie<se;ie++){const we=i.get(ne[ie]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ke(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){const se=ne[ie];W.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ie]);const we=s.convert(se.format,se.colorSpace),He=s.convert(se.type),Re=_(se.internalFormat,we,He,se.normalized,se.colorSpace,P.isXRRenderTarget===!0),be=qe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Re,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,W.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),de(t.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)pe(W.__webglFramebuffer[ie][se],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else pe(W.__webglFramebuffer[ie],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ie=0,se=ne.length;ie<se;ie++){const we=ne[ie],He=i.get(we);let Re=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Re,He.__webglTexture),de(Re,we),pe(W.__webglFramebuffer,P,we,t.COLOR_ATTACHMENT0+ie,Re,0),d(we)&&v(Re)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,Z.__webglTexture),de(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)pe(W.__webglFramebuffer[se],P,M,t.COLOR_ATTACHMENT0,ie,se);else pe(W.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ie,0);d(M)&&v(ie),n.unbindTexture()}P.depthBuffer&&J(P)}function ue(P){const M=P.textures;for(let W=0,Z=M.length;W<Z;W++){const ne=M[W];if(d(ne)){const ge=y(P),ye=i.get(ne).__webglTexture;n.bindTexture(ge,ye),v(ge),n.unbindTexture()}}}const fe=[],ze=[];function Ue(P){if(P.samples>0){if(Ke(P)===!1){const M=P.textures,W=P.width,Z=P.height;let ne=t.COLOR_BUFFER_BIT;const ge=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(P),ie=M.length>1;if(ie)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const se=P.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<M.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const He=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,W,Z,0,0,W,Z,ne,t.NEAREST),l===!0&&(fe.length=0,ze.length=0,fe.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(fe.push(ge),ze.push(ge),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const He=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(P){return Math.min(r.maxSamples,P.samples)}function Ke(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(P){const M=o.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function ut(P,M){const W=P.colorSpace,Z=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Tc&&W!==ur&&(dt.getTransfer(W)===gt?(Z!==ti||ne!==Nn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",W)),M}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=A,this.rebindTextures=oe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pC(t,e){function n(i,r=ur){let s;const o=dt.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===ep)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===my)return t.BYTE;if(i===gy)return t.SHORT;if(i===Sa)return t.UNSIGNED_SHORT;if(i===Qf)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Si)return t.HALF_FLOAT;if(i===yy)return t.ALPHA;if(i===_y)return t.RGB;if(i===ti)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Hr)return t.DEPTH_STENCIL;if(i===Sy)return t.RED;if(i===np)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===ip)return t.RG_INTEGER;if(i===rp)return t.RGBA_INTEGER;if(i===jl||i===Wl||i===Xl||i===ql)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ph||i===mh||i===gh||i===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vh||i===yh||i===_h||i===Sh||i===Mh||i===bc||i===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vh||i===yh)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_h)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sh)return s.COMPRESSED_R11_EAC;if(i===Mh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===bc)return s.COMPRESSED_RG11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bh||i===Eh||i===Th||i===Ah||i===Ch||i===Rh||i===Nh||i===Ph||i===Lh||i===Dh||i===Ih||i===Uh||i===kh||i===Fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Th)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ah)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oh||i===Bh||i===zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oh)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vh||i===Hh||i===Ec||i===Gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ry(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mi({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",g=new xC,d={},v=n.getContextAttributes();let y=null,_=null;const w=[],E=[],N=new Ee;let S=null,C=null;const L=new Rn;L.viewport=new Ct;const I=new Rn;I.viewport=new Ct;const D=[L,I],V=new Eb;let U=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=w[O];return Y===void 0&&(Y=new ku,w[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=w[O];return Y===void 0&&(Y=new ku,w[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=w[O];return Y===void 0&&(Y=new ku,w[O]=Y),Y.getHandSpace()};function Q(O){const Y=E.indexOf(O.inputSource);if(Y===-1)return;const ae=w[Y];ae!==void 0&&(ae.update(O.inputSource,O.frame,c||o),ae.dispatchEvent({type:O.type,data:O.inputSource}))}function ee(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",$);for(let O=0;O<w.length;O++){const Y=E[O];Y!==null&&(E[O]=null,w[O].disconnect(Y))}U=null,j=null,g.reset();for(const O in d)delete d[O];if(e.setRenderTarget(y),m=null,h=null,p=null,r=null,_=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(N.width,N.height,!1),C!==null){const O=C.camera;O.fov=C.fov,O.zoom=C.zoom,O.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Te=null,pe=null;v.depth&&(pe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?Hr:Xi,Te=v.stencil?Ma:_i);const Ae={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ri(h.textureWidth,h.textureHeight,{format:ti,type:Nn,depthTexture:new Ea(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ri(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(O){for(let Y=0;Y<O.removed.length;Y++){const ae=O.removed[Y],Te=E.indexOf(ae);Te>=0&&(E[Te]=null,w[Te].disconnect(ae))}for(let Y=0;Y<O.added.length;Y++){const ae=O.added[Y];let Te=E.indexOf(ae);if(Te===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=E.length){E.push(ae),Te=Ae;break}else if(E[Ae]===null){E[Ae]=ae,Te=Ae;break}if(Te===-1)break}const pe=w[Te];pe&&pe.connect(ae)}}const z=new H,R=new H;function A(O,Y,ae){z.setFromMatrixPosition(Y.matrixWorld),R.setFromMatrixPosition(ae.matrixWorld);const Te=z.distanceTo(R),pe=Y.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,Xe=pe[14]/(pe[10]-1),J=pe[14]/(pe[10]+1),oe=(pe[9]+1)/pe[5],he=(pe[9]-1)/pe[5],ue=(pe[8]-1)/pe[0],fe=(Ae[8]+1)/Ae[0],ze=Xe*ue,Ue=Xe*fe,qe=Te/(-ue+fe),Ke=qe*-ue;if(Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ke),O.translateZ(qe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),pe[10]===-1)O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const k=Xe+qe,ut=J+qe,nt=ze-Ke,P=Ue+(Te-Ke),M=oe*J/ut*k,W=he*J/ut*k;O.projectionMatrix.makePerspective(nt,P,M,W,k,ut),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function K(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let Y=O.near,ae=O.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),V.near=I.near=L.near=Y,V.far=I.far=L.far=ae,(U!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,j=V.far),V.layers.mask=O.layers.mask|6,L.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const Te=O.parent,pe=V.cameras;K(V,Te);for(let Ae=0;Ae<pe.length;Ae++)K(pe[Ae],Te);pe.length===2?A(V,L,I):V.projectionMatrix.copy(L.projectionMatrix),C===null&&O.isPerspectiveCamera&&(C={camera:O,fov:O.fov,zoom:O.zoom}),te(O,V,Te)};function te(O,Y,ae){ae===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(ae.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ba*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(O){return d[O]};let me=null;function de(O,Y){if(f=Y.getViewerPose(c||o),x=Y,f!==null){const ae=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Te=!1;ae.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let J=0;J<ae.length;J++){const oe=ae[J];let he=null;if(m!==null)he=m.getViewport(oe);else{const fe=p.getViewSubImage(h,oe);he=fe.viewport,J===0&&(e.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(_))}let ue=D[J];ue===void 0&&(ue=new Rn,ue.layers.enable(J),ue.viewport=new Ct,D[J]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),J===0&&(V.matrix.copy(ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(ue)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=i.getBinding();const J=p.getDepthInformation(ae[0]);J&&J.isValid&&J.texture&&g.init(J,r.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),p=i.getBinding();for(let J=0;J<ae.length;J++){const oe=ae[J].camera;if(oe){let he=d[oe];he||(he=new Ry,d[oe]=he);const ue=p.getCameraImage(oe);he.sourceTexture=ue}}}}for(let ae=0;ae<w.length;ae++){const Te=E[ae],pe=w[ae];Te!==null&&pe!==void 0&&pe.update(Te,Y,c||o)}me&&me(O,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),x=null}const le=new Vy;le.setAnimationLoop(de),this.setAnimationLoop=function(O){me=O},this.dispose=function(){}}}const yC=new Pt,$y=new et;$y.set(-1,0,0,0,1,0,0,0,1);function _C(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Oy(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,y,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,_)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),b(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(yC.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($y),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const E=w.program;i.uniformBlockBinding(_,E)}function c(_,w){let E=r[_.id];E===void 0&&(g(_),E=f(_),r[_.id]=E,_.addEventListener("dispose",v));const N=w.program;i.updateUBOMapping(_,N);const S=e.render.frame;s[_.id]!==S&&(h(_),s[_.id]=S)}function f(_){const w=p();_.__bindingPointIndex=w;const E=t.createBuffer(),N=_.__size,S=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,N,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,E),E}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=r[_.id],E=_.uniforms,N=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let S=0,C=E.length;S<C;S++){const L=E[S];if(Array.isArray(L))for(let I=0,D=L.length;I<D;I++)m(L[I],S,I,N);else m(L,S,0,N)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,w,E,N){if(b(_,w,E,N)===!0){const S=_.__offset,C=_.value;if(Array.isArray(C)){let L=0;for(let I=0;I<C.length;I++){const D=C[I],V=d(D);x(D,_.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,_.__data)}}function x(_,w,E){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,E)}function b(_,w,E,N){const S=_.value,C=w+"_"+E;if(N[C]===void 0)return typeof S=="number"||typeof S=="boolean"?N[C]=S:ArrayBuffer.isView(S)?N[C]=S.slice():N[C]=S.clone(),!0;{const L=N[C];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return N[C]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function g(_){const w=_.uniforms;let E=0;const N=16;for(let C=0,L=w.length;C<L;C++){const I=Array.isArray(w[C])?w[C]:[w[C]];for(let D=0,V=I.length;D<V;D++){const U=I[D],j=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,ee=j.length;Q<ee;Q++){const $=j[Q],z=d($),R=E%N,A=R%z.boundary,K=R+A;E+=A,K!==0&&N-K<z.storage&&(E+=N-K),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=z.storage}}}const S=E%N;return S>0&&(E+=N-S),_.__size=E,_.__cache={},this}function d(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",_),w}function v(_){const w=_.target;w.removeEventListener("dispose",v);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const MC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function wC(){return ui===null&&(ui=new Rw(MC,16,16,Jr,Si),ui.name="DFG_LUT",ui.minFilter=on,ui.magFilter=on,ui.wrapS=ki,ui.wrapT=ki,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class bC{constructor(e={}){const{canvas:n=HM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const b=m,g=new Set([rp,ip,np]),d=new Set([Nn,_i,Sa,Ma,ep,tp]),v=new Uint32Array(4),y=new Int32Array(4),_=new H;let w=null,E=null;const N=[],S=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,D=null,V=null,U=null,j=null;this._outputColorSpace=zn;let Q=0,ee=0,$=null,z=-1,R=null;const A=new Ct,K=new Ct;let te=null;const me=new ot(0);let de=0,le=n.width,O=n.height,Y=1,ae=null,Te=null;const pe=new Ct(0,0,le,O),Ae=new Ct(0,0,le,O);let Xe=!1;const J=new up;let oe=!1,he=!1;const ue=new Pt,fe=new H,ze=new Ct,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ke(){return $===null?Y:1}let k=i;function ut(T,F){return n.getContext(T,F)}let nt,P,M,W,Z,ne,ge,ye,ie,se,we,He,Re,be,Ve,We,Je,B,_e,re,Ce,Pe,ce;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",lt,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",En,!1),k===null){const F="webgl2";if(k=ut(F,T),k===null)throw ut(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(T){throw n.removeEventListener("webglcontextlost",lt,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",En,!1),ft("WebGLRenderer: "+T.message),T}function Ge(){nt=new wT(k),nt.init(),Ce=new pC(k,nt),P=new fT(k,nt,e,Ce),M=new hC(k,nt),P.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),V=k.createFramebuffer(),U=k.createFramebuffer(),j=k.createFramebuffer(),W=new TT(k),Z=new JA,ne=new fC(k,nt,M,Z,P,Ce,W),ge=new MT(L),ye=new Cb(k),Pe=new dT(k,ye),ie=new bT(k,ye,W,Pe),se=new CT(k,ie,ye,Pe,W),B=new AT(k,P,ne),Ve=new pT(Z),we=new ZA(L,ge,nt,P,Pe,Ve),He=new _C(L,Z),Re=new eC,be=new oC(nt),Je=new uT(L,ge,M,se,x,l),We=new dC(L,se,P),ce=new SC(k,W,P,M),_e=new hT(k,nt,W),re=new ET(k,nt,W),W.programs=we.programs,L.capabilities=P,L.extensions=nt,L.properties=Z,L.renderLists=Re,L.shadowMap=We,L.state=M,L.info=W}b!==Nn&&(C=new NT(b,n.width,n.height,a,r,s));const Oe=new vC(L,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(le,O,!1))},this.getSize=function(T){return T.set(le,O)},this.setSize=function(T,F,X=!0){if(Oe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,O=F,n.width=Math.floor(T*Y),n.height=Math.floor(F*Y),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(le*Y,O*Y).floor()},this.setDrawingBufferSize=function(T,F,X){le=T,O=F,Y=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(b===Nn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,F,X,G){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,F,X,G),M.viewport(A.copy(pe).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,F,X,G){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,F,X,G),M.scissor(K.copy(Ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){M.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){Te=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let G=0;if(T){let q=!1;if($!==null){const Se=$.texture.format;q=g.has(Se)}if(q){const Se=$.texture.type,Ie=d.has(Se),Me=Je.getClearColor(),ke=Je.getClearAlpha(),Be=Me.r,tt=Me.g,Qe=Me.b;Ie?(v[0]=Be,v[1]=tt,v[2]=Qe,v[3]=ke,k.clearBufferuiv(k.COLOR,0,v)):(y[0]=Be,y[1]=tt,y[2]=Qe,y[3]=ke,k.clearBufferiv(k.COLOR,0,y))}else G|=k.COLOR_BUFFER_BIT}F&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){n.removeEventListener("webglcontextlost",lt,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",En,!1),Je.dispose(),Re.dispose(),be.dispose(),Z.dispose(),ge.dispose(),se.dispose(),Pe.dispose(),ce.dispose(),we.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",as),Oe.removeEventListener("sessionend",Oa),bi.stop()};function lt(T){T.preventDefault(),Hm("WebGLRenderer: Context Lost."),I=!0}function ht(){Hm("WebGLRenderer: Context Restored."),I=!1;const T=W.autoReset,F=We.enabled,X=We.autoUpdate,G=We.needsUpdate,q=We.type;Ge(),W.autoReset=T,We.enabled=F,We.autoUpdate=X,We.needsUpdate=G,We.type=q}function En(T){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xn(T){const F=T.target;F.removeEventListener("dispose",xn),Fa(F)}function Fa(T){Ar(T),Z.remove(T)}function Ar(T){const F=Z.get(T).programs;F!==void 0&&(F.forEach(function(X){we.releaseProgram(X)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,G,q,Se){F===null&&(F=Ue);const Ie=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=za(T,F,X,G,q);M.setMaterial(G,Ie);let ke=X.index,Be=1;if(G.wireframe===!0){if(ke=ie.getWireframeAttribute(X),ke===void 0)return;Be=2}const tt=X.drawRange,Qe=X.attributes.position;let Le=tt.start*Be,st=(tt.start+tt.count)*Be;Se!==null&&(Le=Math.max(Le,Se.start*Be),st=Math.min(st,(Se.start+Se.count)*Be)),ke!==null?(Le=Math.max(Le,0),st=Math.min(st,ke.count)):Qe!=null&&(Le=Math.max(Le,0),st=Math.min(st,Qe.count));const Tt=st-Le;if(Tt<0||Tt===1/0)return;Pe.setup(q,G,Me,X,ke);let vt,mt=_e;if(ke!==null&&(vt=ye.get(ke),mt=re,mt.setIndex(vt)),q.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*Ke()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(q.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*Ke()),q.isLineSegments?mt.setMode(k.LINES):q.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else q.isPoints?mt.setMode(k.POINTS):q.isSprite&&mt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Bt=q._multiDrawStarts,De=q._multiDrawCounts,kt=q._multiDrawCount,ct=ke?ye.get(ke).bytesPerElement:1,kn=Z.get(G).currentProgram.getUniforms();for(let oi=0;oi<kt;oi++)kn.setValue(k,"_gl_DrawID",oi),mt.render(Bt[oi]/ct,De[oi])}else if(q.isInstancedMesh)mt.renderInstances(Le,Tt,q.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,Bt);mt.renderInstances(Le,Tt,De)}else mt.render(Le,Tt)};function $i(T,F,X,G){D!==null&&T.isNodeMaterial&&D.setObject(G,T),oe===!0&&Ve.setState(T,X,!1),T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,cs(T,F,G),T.side=Kr,T.needsUpdate=!0,cs(T,F,G),T.side=Di):cs(T,F,G)}this.compile=function(T,F,X=null){X===null&&(X=T),D!==null&&D.renderStart(T,F,X),E=be.get(X),E.init(F),S.push(E),X.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),T!==X&&T.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),he=this.localClippingEnabled,oe=Ve.init(this.clippingPlanes,he),oe===!0&&Ve.setGlobalState(this.clippingPlanes,F),D!==null&&We.render(E.state.shadowsArray,X,F);const G=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){const Me=Se[Ie];$i(Me,X,F,q),G.add(Me)}else $i(Se,X,F,q),G.add(Se)}),E=S.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(T,F,X=null){const G=this.compile(T,F,X);return new Promise(q=>{function Se(){if(G.forEach(function(Ie){const ke=Z.get(Ie).currentProgram;(ke===void 0||ke.isReady())&&G.delete(Ie)}),G.size===0){q(T);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let os=null;function po(T){os&&os(T)}function as(){bi.stop()}function Oa(){bi.start()}const bi=new Vy;bi.setAnimationLoop(po),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){os=T,Oe.setAnimationLoop(T),T===null?bi.stop():bi.start()},Oe.addEventListener("sessionstart",as),Oe.addEventListener("sessionend",Oa),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,F);const X=Oe.enabled===!0&&Oe.isPresenting===!0,G=C!==null&&($===null||X)&&C.begin(L,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,F,$),E=be.get(T,S.length),E.init(F),E.state.textureUnits=ne.getTextureUnits(),S.push(E),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(ue,gi,F.reversedDepth),he=this.localClippingEnabled,oe=Ve.init(this.clippingPlanes,he),w=Re.get(T,N.length),w.init(),N.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){const Ie=L.xr.getDepthSensingMesh();Ie!==null&&Yi(Ie,F,-1/0,L.sortObjects)}Yi(T,F,0,L.sortObjects),w.finish(),D!==null&&D.updateLights(E.state.lightsArray),L.sortObjects===!0&&w.sort(ae,Te),qe=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,qe&&Je.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ve.beginShadows();const q=E.state.shadowsArray;if(We.render(q,T,F),oe===!0&&Ve.endShadows(),(G&&C.hasRenderPass())===!1){const Ie=w.opaque,Me=w.transmissive;if(E.setupLights(),F.isArrayCamera){const ke=F.cameras;if(Me.length>0)for(let Be=0,tt=ke.length;Be<tt;Be++){const Qe=ke[Be];Cr(Ie,Me,T,Qe)}qe&&Je.render(T);for(let Be=0,tt=ke.length;Be<tt;Be++){const Qe=ke[Be];mo(w,T,Qe,Qe.viewport)}}else Me.length>0&&Cr(Ie,Me,T,F),qe&&Je.render(T),mo(w,T,F)}$!==null&&ee===0&&(ne.updateMultisampleRenderTarget($),ne.updateRenderTargetMipmap($)),G&&C.end(L),T.isScene===!0&&T.onAfterRender(L,T,F),Pe.resetDefaultState(),z=-1,R=null,S.pop(),S.length>0?(E=S[S.length-1],ne.setTextureUnits(E.state.textureUnits),oe===!0&&Ve.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?w=N[N.length-1]:w=null,D!==null&&D.renderEnd()};function Yi(T,F,X,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(J)){G&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Ie=se.update(T),Me=T.material;Me.visible&&w.push(T,Ie,Me,X,ze.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(J))){const Ie=se.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ze.copy(Ie.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){const ke=Ie.groups;for(let Be=0,tt=ke.length;Be<tt;Be++){const Qe=ke[Be],Le=Me[Qe.materialIndex];Le&&Le.visible&&w.push(T,Ie,Le,X,ze.z,Qe,F)}}else Me.visible&&w.push(T,Ie,Me,X,ze.z,null,F)}}const Se=T.children;for(let Ie=0,Me=Se.length;Ie<Me;Ie++)Yi(Se[Ie],F,X,G)}function mo(T,F,X,G){const{opaque:q,transmissive:Se,transparent:Ie}=T;E.setupLightsView(X),oe===!0&&Ve.setGlobalState(L.clippingPlanes,X),G&&M.viewport(A.copy(G)),q.length>0&&ls(q,F,X),Se.length>0&&ls(Se,F,X),Ie.length>0&&ls(Ie,F,X),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Cr(T,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Le=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new ri(1,1,{generateMipmaps:!0,type:Le?Si:Nn,minFilter:Vr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Se=E.state.transmissionRenderTarget[G.id],Ie=G.viewport||A;Se.setSize(Ie.z*L.transmissionResolutionScale,Ie.w*L.transmissionResolutionScale);const Me=L.getRenderTarget(),ke=L.getActiveCubeFace(),Be=L.getActiveMipmapLevel();L.setRenderTarget(Se),L.getClearColor(me),de=L.getClearAlpha(),de<1&&L.setClearColor(16777215,.5),L.clear(),qe&&Je.render(X);const tt=L.toneMapping;L.toneMapping=yi;const Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),oe===!0&&Ve.setGlobalState(L.clippingPlanes,G),ls(T,X,G),ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let st=0,Tt=F.length;st<Tt;st++){const vt=F[st],{object:mt,geometry:Bt,material:De,group:kt}=vt;if(De.side===Di&&mt.layers.test(G.layers)){const ct=De.side;De.side=bn,De.needsUpdate=!0,go(mt,X,G,Bt,De,kt),De.side=ct,De.needsUpdate=!0,Le=!0}}Le===!0&&(ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se))}L.setRenderTarget(Me,ke,Be),L.setClearColor(me,de),Qe!==void 0&&(G.viewport=Qe),L.toneMapping=tt}function ls(T,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Se=T.length;q<Se;q++){const Ie=T[q],{object:Me,geometry:ke,group:Be}=Ie;let tt=Ie.material;tt.allowOverride===!0&&G!==null&&(tt=G),Me.layers.test(X.layers)&&go(Me,F,X,ke,tt,Be)}}function go(T,F,X,G,q,Se){D!==null&&q.isNodeMaterial&&D.setObject(T,q),T.onBeforeRender(L,F,X,G,q,Se),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(L,F,X,G,T,Se),q.transparent===!0&&q.side===Di&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,L.renderBufferDirect(X,F,G,q,T,Se),q.side=Kr,q.needsUpdate=!0,L.renderBufferDirect(X,F,G,q,T,Se),q.side=Di):L.renderBufferDirect(X,F,G,q,T,Se),T.onAfterRender(L,F,X,G,q,Se)}function cs(T,F,X){F.isScene!==!0&&(F=Ue);const G=Z.get(T),q=E.state.lights,Se=E.state.shadowsArray,Ie=q.state.version,Me=we.getParameters(T,q.state,Se,F,X,E.state.lightProbeGridArray),ke=we.getProgramCacheKey(Me);let Be=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ge.get(T.envMap||G.environment,tt),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",xn),Be=new Map,G.programs=Be);let Qe=Be.get(ke);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===Ie)return vo(T,Me),Qe}else Me.uniforms=we.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,X,Me),T.onBeforeCompile(Me,L),Qe=we.acquireProgram(Me,ke),Be.set(ke,Qe),G.uniforms=Me.uniforms;const Le=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Ve.uniform),vo(T,Me),G.needsLights=Ha(T),G.lightsStateVersion=Ie,G.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.sunLights.value=q.state.sun,Le.sunLightShadows.value=q.state.sunShadow,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.sunShadowMatrix.value=q.state.sunShadowMatrix,Le.sunShadowCascade.value=q.state.sunShadowCascade,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=Qe,G.uniformsList=null,Qe}function xo(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=$l.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function vo(T,F){const X=Z.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Ba(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=T.length;X<G;X++){const q=T[X];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function za(T,F,X,G,q){F.isScene!==!0&&(F=Ue),ne.resetTextureUnits();const Se=F.fog,Ie=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Me=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,ke=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=ge.get(G.envMap||Ie,ke),tt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let vt=yi;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(vt=L.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=mt!==void 0?mt.length:0,De=Z.get(G),kt=E.state.lights;if(oe===!0&&(he===!0||T!==R)){const _t=T===R&&G.id===z;Ve.setState(G,T,_t)}let ct=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==kt.state.version||De.outputColorSpace!==Me||q.isBatchedMesh&&De.batching===!1||!q.isBatchedMesh&&De.batching===!0||q.isBatchedMesh&&De.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&De.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&De.instancing===!1||!q.isInstancedMesh&&De.instancing===!0||q.isSkinnedMesh&&De.skinning===!1||!q.isSkinnedMesh&&De.skinning===!0||q.isInstancedMesh&&De.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&De.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&De.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&De.instancingMorph===!1&&q.morphTexture!==null||De.envMap!==Be||G.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ve.numPlanes||De.numIntersection!==Ve.numIntersection)||De.vertexAlphas!==tt||De.vertexTangents!==Qe||De.morphTargets!==Le||De.morphNormals!==st||De.morphColors!==Tt||De.toneMapping!==vt||De.morphTargetsCount!==Bt||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,De.__version=G.version);let kn=De.currentProgram;ct===!0&&(kn=cs(G,F,q),D&&G.isNodeMaterial&&D.onUpdateProgram(G,kn,De));let oi=!1,Ki=!1,us=!1;const yt=kn.getUniforms(),It=De.uniforms;if(M.useProgram(kn.program)&&(oi=!0,Ki=!0,us=!0),G.id!==z&&(z=G.id,Ki=!0),De.needsLights){const _t=Ba(E.state.lightProbeGridArray,q);De.lightProbeGrid!==_t&&(De.lightProbeGrid=_t,Ki=!0)}if(oi||R!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(k,"projectionMatrix",T.projectionMatrix),yt.setValue(k,"viewMatrix",T.matrixWorldInverse);const Ji=yt.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,fe.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Ki=!0,us=!0)}if(De.needsLights&&(kt.state.sunShadowMap.length>0&&yt.setValue(k,"sunShadowMap",kt.state.sunShadowMap,ne),kt.state.directionalShadowMap.length>0&&yt.setValue(k,"directionalShadowMap",kt.state.directionalShadowMap,ne),kt.state.spotShadowMap.length>0&&yt.setValue(k,"spotShadowMap",kt.state.spotShadowMap,ne),kt.state.pointShadowMap.length>0&&yt.setValue(k,"pointShadowMap",kt.state.pointShadowMap,ne)),q.isSkinnedMesh){yt.setOptional(k,q,"bindMatrix"),yt.setOptional(k,q,"bindMatrixInverse");const _t=q.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),yt.setValue(k,"boneTexture",_t.boneTexture,ne))}q.isBatchedMesh&&(yt.setOptional(k,q,"batchingTexture"),yt.setValue(k,"batchingTexture",q._matricesTexture,ne),yt.setOptional(k,q,"batchingIdTexture"),yt.setValue(k,"batchingIdTexture",q._indirectTexture,ne),yt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&yt.setValue(k,"batchingColorTexture",q._colorsTexture,ne));const Zi=X.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&B.update(q,X,kn),(Ki||De.receiveShadow!==q.receiveShadow)&&(De.receiveShadow=q.receiveShadow,yt.setValue(k,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(It.envMapIntensity.value=F.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=wC()),Ki){if(yt.setValue(k,"toneMappingExposure",L.toneMappingExposure),De.needsLights&&Va(It,us),Se&&G.fog===!0&&He.refreshFogUniforms(It,Se),He.refreshMaterialUniforms(It,G,Y,O,E.state.transmissionRenderTarget[T.id]),De.needsLights&&De.lightProbeGrid){const _t=De.lightProbeGrid;It.probesSH.value=_t.texture,It.probesMin.value.copy(_t.boundingBox.min),It.probesMax.value.copy(_t.boundingBox.max),It.probesResolution.value.copy(_t.resolution)}$l.upload(k,xo(De),It,ne)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($l.upload(k,xo(De),It,ne),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(k,"center",q.center),yt.setValue(k,"modelViewMatrix",q.modelViewMatrix),yt.setValue(k,"normalMatrix",q.normalMatrix),yt.setValue(k,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){const _t=G.uniformsGroups;for(let Ji=0,ds=_t.length;Ji<ds;Ji++){const Mp=_t[Ji];ce.update(Mp,kn),ce.bind(Mp,kn)}}return kn}function Va(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ha(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,F,X){const G=Z.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=F,Z.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const X=Z.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){$=T,Q=F,ee=X;let G=null,q=!1,Se=!1;if(T){const Me=Z.get(T);if(Me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,Me.__webglFramebuffer),A.copy(T.viewport),K.copy(T.scissor),te=T.scissorTest,M.viewport(A),M.scissor(K),M.setScissorTest(te),z=-1;return}else if(Me.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Me.__hasExternalTextures)ne.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const tt=T.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&Z.has(tt)&&(T.width!==tt.image.width||T.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Be=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?G=Be[F][X]:G=Be[F],q=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?G=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[X]:G=Be,A.copy(T.viewport),K.copy(T.scissor),te=T.scissorTest}else A.copy(pe).multiplyScalar(Y).floor(),K.copy(Ae).multiplyScalar(Y).floor(),te=Xe;if(X!==0&&(G=V),M.bindFramebuffer(k.FRAMEBUFFER,G)&&M.drawBuffers(T,G),M.viewport(A),M.scissor(K),M.setScissorTest(te),q){const Me=Z.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,X)}else if(Se){const Me=F;for(let ke=0;ke<T.textures.length;ke++){const Be=Z.get(T.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,Be.__webglTexture,X,Me)}}else if(T!==null&&X!==0){const Me=Z.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Me.__webglTexture,X)}z=-1};function yo(T){const F=Z.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=P.textureFormatReadable(T.format),F.__typeReadable=P.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,X,G,q,Se,Ie,Me=0){if(!(T&&T.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){M.bindFramebuffer(k.FRAMEBUFFER,ke);try{const Be=T.textures[Me],tt=Be.format,Qe=Be.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me);const Le=yo(Be);if(Le.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&X>=0&&X<=T.height-q&&k.readPixels(F,X,G,q,Ce.convert(tt),Ce.convert(Qe),Se)}finally{const Be=$!==null?Z.get($).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,G,q,Se,Ie,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke)if(F>=0&&F<=T.width-G&&X>=0&&X<=T.height-q){M.bindFramebuffer(k.FRAMEBUFFER,ke);const Be=T.textures[Me],tt=Be.format,Qe=Be.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me);const Le=yo(Be);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(F,X,G,q,Ce.convert(tt),Ce.convert(Qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Tt=$!==null?Z.get($).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Tt);const vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await GM(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(st),k.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){const G=Math.pow(2,-X),q=Math.floor(T.image.width*G),Se=Math.floor(T.image.height*G),Ie=F!==null?F.x:0,Me=F!==null?F.y:0;ne.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,Ie,Me,q,Se),M.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,G=null,q=0,Se=0){let Ie,Me,ke,Be,tt,Qe,Le,st,Tt;const vt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(X!==null)Ie=X.max.x-X.min.x,Me=X.max.y-X.min.y,ke=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,tt=X.min.y,Qe=X.isBox3?X.min.z:0;else{const It=Math.pow(2,-q);Ie=Math.floor(vt.width*It),Me=Math.floor(vt.height*It),T.isDataArrayTexture?ke=vt.depth:T.isData3DTexture?ke=Math.floor(vt.depth*It):ke=1,Be=0,tt=0,Qe=0}G!==null?(Le=G.x,st=G.y,Tt=G.z):(Le=0,st=0,Tt=0);const mt=Ce.convert(F.format),Bt=Ce.convert(F.type);let De;F.isData3DTexture?(ne.setTexture3D(F,0),De=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ne.setTexture2DArray(F,0),De=k.TEXTURE_2D_ARRAY):(ne.setTexture2D(F,0),De=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const kt=M.getParameter(k.UNPACK_ROW_LENGTH),ct=M.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=M.getParameter(k.UNPACK_SKIP_PIXELS),oi=M.getParameter(k.UNPACK_SKIP_ROWS),Ki=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),M.pixelStorei(k.UNPACK_SKIP_ROWS,tt),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const us=T.isDataArrayTexture||T.isData3DTexture,yt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const It=Z.get(T),Zi=Z.get(F),_t=Z.get(It.__renderTarget),Ji=Z.get(Zi.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,_t.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ds=0;ds<ke;ds++)us&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,q,Qe+ds),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,Se,Tt+ds)),k.blitFramebuffer(Be,tt,Ie,Me,Le,st,Ie,Me,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Z.has(T)){const It=Z.get(T),Zi=Z.get(F);M.bindFramebuffer(k.READ_FRAMEBUFFER,U),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,j);for(let _t=0;_t<ke;_t++)us?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.__webglTexture,q,Qe+_t):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,q),yt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zi.__webglTexture,Se,Tt+_t):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zi.__webglTexture,Se),q!==0?k.blitFramebuffer(Be,tt,Ie,Me,Le,st,Ie,Me,k.COLOR_BUFFER_BIT,k.NEAREST):yt?k.copyTexSubImage3D(De,Se,Le,st,Tt+_t,Be,tt,Ie,Me):k.copyTexSubImage2D(De,Se,Le,st,Be,tt,Ie,Me);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(De,Se,Le,st,Tt,Ie,Me,ke,mt,Bt,vt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(De,Se,Le,st,Tt,Ie,Me,ke,mt,vt.data):k.texSubImage3D(De,Se,Le,st,Tt,Ie,Me,ke,mt,Bt,vt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,Le,st,Ie,Me,mt,Bt,vt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,Le,st,vt.width,vt.height,mt,vt.data):k.texSubImage2D(k.TEXTURE_2D,Se,Le,st,Ie,Me,mt,Bt,vt);M.pixelStorei(k.UNPACK_ROW_LENGTH,kt),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),M.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),M.pixelStorei(k.UNPACK_SKIP_ROWS,oi),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Ki),Se===0&&F.generateMipmaps&&k.generateMipmap(De),M.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){Q=0,ee=0,$=null,M.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=dt._getUnpackColorSpace()}}const Yl=[{id:"tangerine",name:"Tangerine Cyber",tagline:"Signature Launch Edition",badge:"Iconic",category:"classic",bodyColor:1776930,accentColor:16739840,eyeColor:16753692,glowColor:16742144,screenColor:460810,roughness:.65,metalness:.12,accentHex:"#ff6e00",bodyHex:"#1b1d22",characterType:"default",faceStyle:"squircle",characterVoice:"Hello! I am ORoX, your conversational companion."},{id:"arctic",name:"Arctic Ceramic",tagline:"Ghost White & Ice Blue",badge:"Pure",category:"classic",bodyColor:15790837,accentColor:39423,eyeColor:55807,glowColor:49151,screenColor:659485,roughness:.28,metalness:.18,accentHex:"#0099ff",bodyHex:"#f0f2f5",characterType:"default",faceStyle:"squircle",characterVoice:"Arctic Edition activated. Crisp acoustic voice online."},{id:"obsidian",name:"Obsidian Noir",tagline:"Stealth Matte Titanium",badge:"Stealth",category:"classic",bodyColor:592397,accentColor:3882309,eyeColor:16777215,glowColor:14541547,screenColor:263431,roughness:.75,metalness:.45,accentHex:"#3b3d45",bodyHex:"#090a0d",characterType:"default",faceStyle:"squircle",characterVoice:"Stealth mode initialized. Ready for focused work."},{id:"synthwave",name:"Neon Tokyo",tagline:"Cyberpunk Hot Magenta & Cyan",badge:"Cyberpunk",category:"classic",bodyColor:1183268,accentColor:16711799,eyeColor:61695,glowColor:16711850,screenColor:591380,roughness:.4,metalness:.35,accentHex:"#ff0077",bodyHex:"#120e24",characterType:"default",faceStyle:"squircle",characterVoice:"Welcome to Neon Tokyo. Let the synthwave vibe flow."},{id:"matrix",name:"Matrix Protocol",tagline:"Tactical Carbon & Neon Lime",badge:"Hacker",category:"classic",bodyColor:988433,accentColor:1096065,eyeColor:65382,glowColor:65399,screenColor:264710,roughness:.5,metalness:.2,accentHex:"#10b981",bodyHex:"#0f1511",characterType:"default",faceStyle:"squircle",characterVoice:"Matrix Protocol loaded. Terminal neural compute ready."},{id:"gold",name:"24K Solar Gold",tagline:"Brushed Bronze & Champagne",badge:"Luxury",category:"classic",bodyColor:1840914,accentColor:15381256,eyeColor:16638023,glowColor:16096779,screenColor:854534,roughness:.3,metalness:.65,accentHex:"#eab308",bodyHex:"#1c1712",characterType:"default",faceStyle:"squircle",characterVoice:"Solar Gold Edition online. Elegance meets intelligence."},{id:"retro",name:"Retro 1984",tagline:"Vintage Almond & Crimson Red",badge:"Vintage",category:"classic",bodyColor:15130323,accentColor:15680580,eyeColor:16096779,glowColor:16347926,screenColor:1314828,roughness:.55,metalness:.08,accentHex:"#ef4444",bodyHex:"#e6ded3",characterType:"default",faceStyle:"squircle",characterVoice:"Booting 1984 floppy disc OS. Welcome to vintage computing!"},{id:"lavender",name:"Pastel Lavender",tagline:"Plum Violet & Bubblegum Pink",badge:"Kawaii",category:"classic",bodyColor:2169898,accentColor:11032055,eyeColor:16020150,glowColor:15485081,screenColor:919829,roughness:.45,metalness:.15,accentHex:"#a855f7",bodyHex:"#211c2a",characterType:"default",faceStyle:"squircle",characterVoice:"Hi bestie! Ready for a cozy day together?"}],Ho=[{id:"luffy",name:"Monkey D. Luffy (Straw Hat)",tagline:"Straw Hat Pirate, Scarlet Vest & Joyboy Smile",badge:"Anime Figure",category:"character",bodyColor:12063771,accentColor:14658357,eyeColor:16773316,glowColor:16750848,screenColor:656644,roughness:.6,metalness:.1,accentHex:"#dfab35",bodyHex:"#b8141b",characterType:"luffy",faceStyle:"squircle",characterVoice:"Ore wa Monkey D. Luffy! I'm gonna be King of the Pirates! Let's go on an adventure together!"},{id:"spiderman",name:"Spider-Hero Action Figure",tagline:"Web-Slinger Suit & Glowing Mask Lenses",badge:"Action Figure",category:"character",bodyColor:12519966,accentColor:998274,eyeColor:16777215,glowColor:16720452,screenColor:525322,roughness:.5,metalness:.15,accentHex:"#bf0a1e",bodyHex:"#0f3b82",characterType:"spiderman",faceStyle:"squircle",characterVoice:"With great power comes great companionship! Spider-ORoX ready for patrol."},{id:"sukuna",name:"Sukuna (Cursed King)",tagline:"Cursed Marks, Domain Aura & Crimson Eyes",badge:"Anime Figure",category:"character",bodyColor:1315096,accentColor:14222377,eyeColor:16711723,glowColor:8388629,screenColor:459012,roughness:.6,metalness:.25,accentHex:"#d90429",bodyHex:"#141118",characterType:"sukuna",faceStyle:"squircle",characterVoice:"Gambare, gambare! Stand proud, you are an incredible creator."},{id:"deadpool",name:"Deadpool Merc Edition",tagline:"Tactical Red/Black Suit & Playful Comic Mask",badge:"Action Figure",category:"character",bodyColor:10162462,accentColor:1184276,eyeColor:16777215,glowColor:16723524,screenColor:525062,roughness:.55,metalness:.2,accentHex:"#9b111e",bodyHex:"#121214",characterType:"deadpool",faceStyle:"squircle",characterVoice:"Maximum effort! Did somebody order chimichangas and witty banter on their desk?"},{id:"lofi",name:"Lofi Girl Study Edition",tagline:"Cozy Sage Hoodie, Headphones & Chill Eyes",badge:"Cozy Anime",category:"character",bodyColor:4020809,accentColor:14720830,eyeColor:16765286,glowColor:16556817,screenColor:922641,roughness:.7,metalness:.05,accentHex:"#e09f3e",bodyHex:"#3d5a49",characterType:"lofi",faceStyle:"squircle",characterVoice:"Put your headphones on. Let us relax and study with good beats."},{id:"ironman",name:"Iron Cyber Armor",tagline:"Hotrod Crimson Titanium & Arc-Reactor Visor",badge:"Action Figure",category:"character",bodyColor:8719640,accentColor:13938487,eyeColor:61695,glowColor:51455,screenColor:331026,roughness:.25,metalness:.75,accentHex:"#d4af37",bodyHex:"#850d18",characterType:"ironman",faceStyle:"squircle",characterVoice:"Jarvis, initiate desktop companion protocol. Arc reactor power at 100 percent."}],Ra=[...Yl,...Ho];function Fr(t,e,n){const i=new ss,r=t/2,s=e/2,o=Math.min(n,r,s);return i.moveTo(-r+o,-s),i.lineTo(r-o,-s),i.quadraticCurveTo(r,-s,r,-s+o),i.lineTo(r,s-o),i.quadraticCurveTo(r,s,r-o,s),i.lineTo(-r+o,s),i.quadraticCurveTo(-r,s,-r,s-o),i.lineTo(-r,-s+o),i.quadraticCurveTo(-r,-s,-r+o,-s),i}function EC(t,e,n,i,r,s){const o=Fr(t,e,n),a=new Xh,l=i/2,c=r/2,f=Math.min(s,l,c);return a.moveTo(-l+f,c),a.lineTo(l-f,c),a.quadraticCurveTo(l,c,l,c-f),a.lineTo(l,-c+f),a.quadraticCurveTo(l,-c,l-f,-c),a.lineTo(-l+f,-c),a.quadraticCurveTo(-l,-c,-l,-c+f),a.lineTo(-l,c-f),a.quadraticCurveTo(-l,c,-l+f,c),o.holes.push(a),o}function z0(){const t=new ss;return t.moveTo(0,.16),t.bezierCurveTo(.16,.28,.28,.16,.24,.02),t.bezierCurveTo(.2,-.1,.08,-.18,0,-.26),t.bezierCurveTo(-.08,-.18,-.2,-.1,-.24,.02),t.bezierCurveTo(-.28,.16,-.16,.28,0,.16),t}function V0(){const t=new ss;return t.moveTo(-.22,-.08),t.quadraticCurveTo(0,.2,.22,-.08),t.quadraticCurveTo(0,.1,-.22,-.08),t}function H0(){const t=new ss;return t.moveTo(-.22,.04),t.quadraticCurveTo(0,-.16,.22,.04),t.lineTo(.22,.08),t.lineTo(-.22,.08),t.closePath(),t}const Yy=({theme:t=Ra[0],reaction:e="idle",onTap:n,className:i=""})=>{const r=ve.useRef(null),[s,o]=ve.useState(!1),a=ve.useRef(null),l=ve.useRef(null),c=ve.useRef(null),f=ve.useRef(null),p=ve.useRef(null),h=ve.useRef(null),m=ve.useRef(null),x=ve.useRef(null),b=ve.useRef(null),g=ve.useRef(null),d=ve.useRef(null),v=ve.useRef(null),y=ve.useRef(null),_=ve.useRef(null),w=ve.useRef(null),E=ve.useRef(null),N=ve.useRef(null),S=ve.useRef(null),C=ve.useRef(null),L=ve.useRef(null),I=ve.useRef({x:0,y:0}),D=ve.useRef(!1),V=ve.useRef(e),U=ve.useRef(0),j=ve.useRef(0),Q=ve.useRef(!1);ve.useEffect(()=>{V.current=e,e==="spin"&&(Q.current=!0,U.current=0),ee(t)},[e,t]);const ee=z=>{if(h.current&&m.current){const A=V.current;let K,te;A==="love"?(K=new Bn(z0()),te=new Bn(z0())):A==="laugh"?(K=new Bn(V0()),te=new Bn(V0())):A==="sleep"?(K=new Bn(H0()),te=new Bn(H0())):(K=new Bn(Fr(.44,.5,.16)),te=new Bn(Fr(.44,.5,.16))),h.current.geometry.dispose(),m.current.geometry.dispose(),h.current.geometry=K,m.current.geometry=te,x.current&&b.current&&(x.current.visible=!0,b.current.visible=!0,x.current.geometry.dispose(),b.current.geometry.dispose(),x.current.geometry=K,b.current.geometry=te,x.current.scale.set(1.25,1.25,1),b.current.scale.set(1.25,1.25,1))}if(v.current)for(;v.current.children.length>0;){const A=v.current.children[0];v.current.remove(A)}if(y.current)for(;y.current.children.length>0;){const A=y.current.children[0];y.current.remove(A)}const R=z.characterType;if(R==="luffy"){if(v.current){const A=new hi;A.position.set(0,1.26,.08),A.rotation.x=-.12,A.rotation.z=.05;const K=new qt({color:14658357,roughness:.8,metalness:.05}),te=new $e(new $t(1.68,1.7,.07,32),K);A.add(te);const me=new $e(new $t(.96,1.02,.44,24),K);me.position.set(0,.22,0),A.add(me);const de=new qt({color:13112356,roughness:.45}),le=new $e(new $t(1.03,1.03,.12,24),de);le.position.set(0,.08,0),A.add(le),v.current.add(A)}if(y.current){const A=new qt({color:12063771,roughness:.7}),K=new $e(new rn(.36,.76,.08),A);K.position.set(-.35,.1,.82),y.current.add(K);const te=new $e(new rn(.36,.76,.08),A);te.position.set(.35,.1,.82),y.current.add(te);const me=new qt({color:14658357,roughness:.65}),de=new $e(new $t(.86,.9,.22,24),me);de.position.set(0,-.16,0),y.current.add(de);const le=new $e(new fp(.09,12,12),me);le.position.set(-.25,-.16,.86),y.current.add(le);const O=new $e(new rn(.12,.32,.04),me);O.position.set(-.27,-.3,.86),O.rotation.z=-.15,y.current.add(O);const Y=new qt({color:2379648,roughness:.75}),ae=new $e(new $t(.88,.92,.18,24),Y);ae.position.set(0,-.36,0),y.current.add(ae)}}else if(R==="spiderman"&&y.current){const A=new Pi({color:657935}),K=new $e(new $t(.08,.08,.22,12),A);K.position.set(0,.14,.88),K.rotation.x=Math.PI/2,y.current.add(K);const te=new Pi({color:657935});[-.14,-.06,.06,.14].forEach((le,O)=>{var Te,pe;const Y=new $e(new rn(.18,.025,.02),te);Y.position.set(-.12,.14+le,.88),Y.rotation.z=O<2?.35:-.35,(Te=y.current)==null||Te.add(Y);const ae=new $e(new rn(.18,.025,.02),te);ae.position.set(.12,.14+le,.88),ae.rotation.z=O<2?-.35:.35,(pe=y.current)==null||pe.add(ae)});const me=new qt({color:998274,roughness:.5}),de=new $e(new $t(.85,.88,.16,24),me);de.position.set(0,-.22,0),y.current.add(de)}else if(R==="sukuna"&&y.current){const A=new qt({color:16119287,roughness:.6}),K=new $e(new $t(.82,.94,.82,24),A);K.position.set(0,.02,0),y.current.add(K);const te=new qt({color:1118485,roughness:.8}),me=new $e(new $t(.86,.88,.22,24),te);me.position.set(0,-.15,0),y.current.add(me);const de=new Pi({color:787981}),le=new $e(new rn(.35,.04,.02),de);le.position.set(-.25,.18,.85),le.rotation.z=-.4,y.current.add(le);const O=new $e(new rn(.35,.04,.02),de);O.position.set(.25,.18,.85),O.rotation.z=.4,y.current.add(O)}else if(R==="deadpool"&&y.current){const A=new qt({color:1579036,roughness:.7}),K=new $e(new rn(1.25,.12,.04),A);K.position.set(0,.12,.84),K.rotation.z=.55,y.current.add(K);const te=new $e(new rn(1.25,.12,.04),A);te.position.set(0,.12,.85),te.rotation.z=-.55,y.current.add(te);const me=new qt({color:12632256,metalness:.8,roughness:.2}),de=new $e(new $t(.09,.09,.05,16),me);de.position.set(0,.12,.88),de.rotation.x=Math.PI/2,y.current.add(de);const le=new $e(new $t(.85,.89,.14,24),A);le.position.set(0,-.24,0),y.current.add(le)}else if(R==="lofi"&&y.current){const A=new qt({color:4020809,roughness:.85}),K=new Nc(.82,.12,12,32),te=new $e(K,A);te.rotation.x=Math.PI/2,te.position.set(0,.44,0),y.current.add(te);const me=new qt({color:3295804,roughness:.85}),de=new $e(new rn(.72,.32,.12),me);de.position.set(0,-.12,.84),y.current.add(de);const le=new Pi({color:15790837}),O=new $e(new $t(.02,.02,.35,8),le);O.position.set(-.16,.22,.86),y.current.add(O);const Y=new $e(new $t(.02,.02,.35,8),le);Y.position.set(.16,.22,.86),y.current.add(Y)}else if(R==="ironman"&&y.current){const A=new qt({color:13938487,metalness:.85,roughness:.2}),K=new $e(new rn(.9,.5,.08),A);K.position.set(0,.12,.82),y.current.add(K);const te=new qt({color:16766720,metalness:.9,roughness:.15}),me=new Nc(.22,.05,16,32),de=new $e(me,te);de.position.set(0,.12,.88),y.current.add(de);const le=new Pi({color:61695}),O=new $t(.16,.16,.06,24),Y=new $e(O,le);Y.position.set(0,.12,.89),Y.rotation.x=Math.PI/2,y.current.add(Y);const ae=new m0(61695,2,2.8);ae.position.set(0,.12,1.25),y.current.add(ae)}};ve.useEffect(()=>{t&&(_.current&&(_.current.color.setHex(t.bodyColor),_.current.roughness=t.roughness,_.current.metalness=t.metalness,_.current.needsUpdate=!0),w.current&&(w.current.color.setHex(t.accentColor),w.current.emissive.setHex(t.accentColor),w.current.needsUpdate=!0),E.current&&(E.current.color.setHex(t.screenColor),E.current.needsUpdate=!0),N.current&&(N.current.color.setHex(t.eyeColor),N.current.needsUpdate=!0),S.current&&(S.current.color.setHex(t.glowColor),S.current.needsUpdate=!0),C.current&&C.current.color.setHex(t.accentColor),L.current&&L.current.color.setHex(t.glowColor),ee(t))},[t]),ve.useEffect(()=>{const z=r.current;if(!z)return;const R=new _w,A=z.clientWidth||460,K=z.clientHeight||460,te=A/K,me=te<1?7.6/Math.min(1,te*1.12):7.6,de=new Rn(40,te,.1,100);de.position.set(0,0,Math.min(10.5,Math.max(7.2,me)));const le=new bC({alpha:!0,antialias:!0,powerPreference:"high-performance"});le.setSize(A,K),le.setPixelRatio(Math.min(window.devicePixelRatio,2)),le.toneMapping=Jf,le.toneMappingExposure=1.35,le.shadowMap.enabled=!0,le.shadowMap.type=ry,z.appendChild(le.domElement);const O=new wb(16777215,1.8);R.add(O);const Y=new td(16773858,2.8);Y.position.set(4,6,6),Y.castShadow=!0,Y.shadow.mapSize.width=1024,Y.shadow.mapSize.height=1024,R.add(Y);const ae=new td(13621503,1.2);ae.position.set(-6,2,4),R.add(ae);const Te=new td(t.accentColor,3.5);Te.position.set(0,3,-6),R.add(Te),C.current=Te;const pe=new m0(t.glowColor,1.2,5);pe.position.set(0,.4,2.5),R.add(pe),L.current=pe;const Ae=new qt({color:t.bodyColor,roughness:t.roughness,metalness:t.metalness});_.current=Ae;const Xe=new qt({color:t.accentColor,roughness:.35,metalness:.15,emissive:t.accentColor,emissiveIntensity:.28});w.current=Xe;const J=new vb({color:t.screenColor,roughness:.08,metalness:.05,clearcoat:1,clearcoatRoughness:.06,reflectivity:.95});E.current=J;const oe=new Pi({color:t.eyeColor,depthTest:!0,depthWrite:!1});N.current=oe;const he=new Pi({color:t.glowColor,transparent:!0,opacity:.45,depthWrite:!1});S.current=he;const ue=new hi;a.current=ue,ue.position.set(0,-.15,0),R.add(ue);const fe=new hi;l.current=fe,fe.position.set(0,.48,0),ue.add(fe);const ze=new hi;v.current=ze,fe.add(ze);const Ue=2.95,qe=2.3,Ke=1.05,k=1.95,ut=Fr(Ue,qe,Ke),nt={depth:k,bevelEnabled:!0,bevelSegments:10,steps:2,bevelSize:.36,bevelThickness:.36},P=new zs(ut,nt);P.center();const M=new $e(P,Ae);M.castShadow=!0,M.receiveShadow=!0,fe.add(M);const ge=Fr(2.14,1.48,.62),ye=new zs(ge,{depth:.05,bevelEnabled:!0,bevelSegments:6,bevelSize:.03,bevelThickness:.03});ye.center();const ie=new $e(ye,J);ie.position.set(0,0,1.35),ie.renderOrder=2,fe.add(ie);const se=EC(2.26,1.58,.68,2.06,1.38,.58),we=new zs(se,{depth:.06,bevelEnabled:!0,bevelSegments:5,bevelSize:.025,bevelThickness:.025});we.center();const He=new $e(we,Xe);He.position.set(0,0,1.37),He.renderOrder=3,fe.add(He);const Re=Fr(.44,.5,.16),be=new Bn(Re),Ve=new $e(be,oe);Ve.position.set(-.36,-.01,1.415),Ve.renderOrder=10,fe.add(Ve),h.current=Ve;const We=new $e(be,oe);We.position.set(.36,-.01,1.415),We.renderOrder=10,fe.add(We),m.current=We;const Je=new Bn(Fr(.62,.68,.24)),B=new $e(Je,he);B.position.set(-.36,-.01,1.41),B.renderOrder=9,fe.add(B),x.current=B;const _e=new $e(Je,he);_e.position.set(.36,-.01,1.41),_e.renderOrder=9,fe.add(_e),b.current=_e;const re=.44,Ce=.48,Pe=new ss;Pe.absarc(0,0,re,0,Math.PI*2,!1);const ce=new zs(Pe,{depth:Ce,bevelEnabled:!0,bevelSegments:8,bevelSize:.14,bevelThickness:.14});ce.center();const Ge=new $e(ce,Xe);Ge.rotation.y=Math.PI/2,Ge.position.set(-1.92,0,0),fe.add(Ge),g.current=Ge;const Oe=new $e(ce,Xe);Oe.rotation.y=-Math.PI/2,Oe.position.set(1.92,0,0),fe.add(Oe),d.current=Oe;const lt=new hi;c.current=lt,lt.position.set(0,-1.35,0),ue.add(lt);const ht=new hi;y.current=ht,lt.add(ht);const En=new $t(.78,.9,1.05,32),xn=new $e(En,Ae);xn.castShadow=!0,xn.receiveShadow=!0,lt.add(xn);const Fa=new Rc(.22,.42,16,16),Ar=new $e(Fa,Ae);Ar.position.set(-1,.18,0),Ar.rotation.z=Math.PI/8,Ar.castShadow=!0,lt.add(Ar),p.current=Ar;const $i=new $e(Fa,Ae);$i.position.set(1,.18,0),$i.rotation.z=-Math.PI/8,$i.castShadow=!0,lt.add($i),f.current=$i;const os=new Rc(.29,.48,16,16),po=new $e(os,Ae);po.position.set(-.46,-.68,0),po.castShadow=!0,lt.add(po);const as=new $e(os,Ae);as.position.set(.46,-.68,0),as.castShadow=!0,lt.add(as);const Oa=new ka(6,6),bi=new hb({opacity:.38}),Yi=new $e(Oa,bi);Yi.rotation.x=-Math.PI/2,Yi.position.y=-2.35,Yi.receiveShadow=!0,R.add(Yi),ee(t);const mo=X=>{const G=X.clientX/window.innerWidth*2-1,q=-(X.clientY/window.innerHeight)*2+1;I.current={x:G,y:q}},Cr=X=>{if(X.touches&&X.touches.length>0){const G=X.touches[0],q=G.clientX/window.innerWidth*2-1,Se=-(G.clientY/window.innerHeight)*2+1;I.current={x:q,y:Se}}};window.addEventListener("mousemove",mo),window.addEventListener("touchstart",Cr,{passive:!0}),window.addEventListener("touchmove",Cr,{passive:!0});const ls=setInterval(()=>{D.current=!0,setTimeout(()=>{D.current=!1},150)},3500);let go;const cs=new Tb,xo=()=>{go=requestAnimationFrame(xo);const X=cs.getElapsedTime(),G=V.current,q=Math.max(-.7,Math.min(.7,I.current.x)),Se=Math.max(-.6,Math.min(.6,I.current.y));let Ie=q*.42,Me=-Se*.25,ke=-q*.08,Be=q*.16,tt=-Se*.08,Qe=Math.sin(X*2.2)*.08,Le=D.current?.08:1,st=1;G==="nod"?(j.current+=.12,Me=-.22+Math.sin(j.current*7)*.18,Qe+=Math.sin(j.current*7)*.04,Le=1.15):G==="dance"?(Qe=Math.abs(Math.sin(X*8))*.28,Be=Math.sin(X*5)*.22,ke=Math.cos(X*5)*.15):G==="laugh"?(Qe+=Math.sin(X*22)*.07,Me=-.15,Le=.3):G==="love"?(ke=-.15,Me=-.08,Qe+=Math.sin(X*3)*.04,st=1.15):G==="sleep"?(Me=.22,Qe=-.2+Math.sin(X*1.2)*.03,Le=.08):G==="shock"?(Me=-.25,Qe=.18,Le=1.45,st=1.35):G==="spin"&&(U.current+=.08,Be=U.current*Math.PI*2,U.current>=1&&(V.current="idle",Q.current=!1,U.current=0,a.current&&(a.current.rotation.y=0))),l.current&&(l.current.rotation.y=Fn.lerp(l.current.rotation.y,Ie,.08),l.current.rotation.x=Fn.lerp(l.current.rotation.x,Me,.08),l.current.rotation.z=Fn.lerp(l.current.rotation.z,ke,.08)),a.current&&(Q.current?a.current.rotation.y=Be:a.current.rotation.y=Fn.lerp(a.current.rotation.y,Be,.05),a.current.rotation.x=Fn.lerp(a.current.rotation.x,tt,.05),a.current.position.y=Fn.lerp(a.current.position.y,Qe,.1));const Tt=Math.sin(X*2.2)*.03;p.current&&(p.current.rotation.z=Math.PI/8+Tt),f.current&&(f.current.rotation.z=-Math.PI/8-Tt);const vt=I.current.x*.06,mt=I.current.y*.04,Bt=-.36+vt,De=.36+vt,kt=-.01+mt;h.current&&m.current&&(h.current.position.x=Fn.lerp(h.current.position.x,Bt,.1),h.current.position.y=Fn.lerp(h.current.position.y,kt,.1),h.current.position.z=1.415,h.current.scale.y=Fn.lerp(h.current.scale.y,Le,.35),h.current.scale.x=st,m.current.position.x=Fn.lerp(m.current.position.x,De,.1),m.current.position.y=Fn.lerp(m.current.position.y,kt,.1),m.current.position.z=1.415,m.current.scale.y=Fn.lerp(m.current.scale.y,Le,.35),m.current.scale.x=st),x.current&&b.current&&(x.current.position.x=h.current?h.current.position.x:Bt,x.current.position.y=h.current?h.current.position.y:kt,x.current.position.z=1.41,x.current.scale.y=Le*1.25,x.current.scale.x=st*1.25,b.current.position.x=m.current?m.current.position.x:De,b.current.position.y=m.current?m.current.position.y:kt,b.current.position.z=1.41,b.current.scale.y=Le*1.25,b.current.scale.x=st*1.25);const ct=1+Math.sin(X*3.5)*.025;g.current&&d.current&&(g.current.scale.set(1,1,ct),d.current.scale.set(1,1,ct)),le.render(R,de)};xo();let vo=0,Ba=0,za=0;const Va=X=>{X.touches.length>0&&(vo=X.touches[0].clientX,Ba=X.touches[0].clientY,za=Date.now())},Ha=X=>{if(X.changedTouches.length>0){const G=Math.abs(X.changedTouches[0].clientX-vo),q=Math.abs(X.changedTouches[0].clientY-Ba),Se=Date.now()-za;G<14&&q<14&&Se<450&&(je.playNod(),n&&n())}};z.addEventListener("touchstart",Va,{passive:!0}),z.addEventListener("touchend",Ha,{passive:!0});const yo=(X,G)=>{if(X<=0||G<=0)return;const q=X/G;de.aspect=q;const Se=q<1?7.6/Math.min(1,q*1.12):7.6;de.position.z=Math.min(10.5,Math.max(7.2,Se)),de.updateProjectionMatrix(),le.setSize(X,G)};let T=null;typeof ResizeObserver<"u"&&z&&(T=new ResizeObserver(X=>{for(const G of X)G.contentRect&&yo(G.contentRect.width,G.contentRect.height)}),T.observe(z));const F=()=>{z&&yo(z.clientWidth,z.clientHeight)};return window.addEventListener("resize",F),()=>{clearInterval(ls),window.removeEventListener("mousemove",mo),window.removeEventListener("touchstart",Cr),window.removeEventListener("touchmove",Cr),window.removeEventListener("resize",F),z.removeEventListener("touchstart",Va),z.removeEventListener("touchend",Ha),T&&T.disconnect(),cancelAnimationFrame(go),z&&le.domElement&&z.removeChild(le.domElement),le.dispose()}},[]);const $=()=>{je.playNod(),n&&n()};return u.jsx("div",{ref:r,onClick:$,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{touchAction:"pan-y"},className:`relative w-full h-full select-none cursor-pointer transition-transform duration-300 ${s?"scale-[1.02]":"scale-100"} ${i}`,title:"Move your mouse or touch screen to watch ORoX track your gaze! Click to interact."})},TC=()=>{const[t,e]=ve.useState(!1),[n,i]=ve.useState(Ra[0]),[r,s]=ve.useState("idle"),[o,a]=ve.useState(null),l=()=>{e(!0),c("nod"),je.speak("Hey there! I am ORoX. I can't wait to hang out on your desk and chat!",()=>{},()=>{setTimeout(()=>e(!1),1500)})},c=p=>{switch(o&&clearTimeout(o),s(p),p){case"nod":je.playNod();break;case"dance":je.playDance();break;case"love":je.playLove();break;case"laugh":je.playLaugh();break;case"spin":je.playSpin();break;case"sleep":je.playSleep();break;default:je.playChirp()}if(p!=="sleep"){const h=setTimeout(()=>{s("idle")},3200);a(h)}},f=p=>{i(p),p.category==="character"&&p.characterType?je.playCharacterSound(p.characterType):je.playChirp()};return u.jsxs("section",{className:"relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700 opacity-25",style:{backgroundColor:n.accentHex}}),u.jsx("div",{className:"absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-orox-card border border-white/15 text-[10px] sm:text-xs font-mono text-orox-amber mb-5 sm:mb-8 shadow-glow-orange hover:border-orox-orange transition-all cursor-default max-w-full",children:[u.jsx("span",{className:"w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full animate-ping shrink-0",style:{backgroundColor:n.accentHex}}),u.jsx("span",{className:"font-bold text-white tracking-wider whitespace-nowrap uppercase",children:"PROJECT COMING SOON"}),u.jsx("span",{className:"text-slate-500 font-sans",children:"|"}),u.jsx("span",{className:"text-slate-300 tracking-wider truncate uppercase",children:"PERSONAL AI ROBOT"})]}),u.jsxs("h1",{className:"text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-5 sm:mb-8 font-display break-words",children:["The AI Robot That ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text transition-all duration-500 inline-block pb-1",style:{backgroundImage:`linear-gradient(to right, ${n.accentHex}, #FFA033, #FFD54F)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Talks, Listens & Understands."})]}),u.jsxs("p",{className:"text-slate-300 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8 sm:mb-12 px-1",children:["Meet ",u.jsx("strong",{className:"text-white font-bold",children:"ORoX"})," — the charismatic desktop companion equipped with real-time neural speech, expressive glowing OLED eyes, and interchangeable action figure armor."]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-16 px-1 sm:px-0",children:[u.jsxs("a",{href:"#suggestion",onClick:()=>je.playGreeting(),className:"w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 btn-attractive-primary cursor-pointer min-h-[48px] sm:min-h-[52px] text-center",children:[u.jsx(ns,{className:"w-4 h-4 text-black shrink-0"}),u.jsx("span",{children:"GRAB YOUR FIRST PERSONAL AI ROBOT"}),u.jsx(qf,{className:"w-4 h-4 shrink-0"})]}),u.jsxs("a",{href:"#simulator",onClick:()=>je.playClick(),className:"w-full sm:w-auto px-5 sm:px-9 py-3.5 sm:py-5 rounded-2xl text-slate-200 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 btn-attractive-secondary cursor-pointer min-h-[48px] sm:min-h-[52px] text-center",children:[u.jsx(ZS,{className:"w-4 h-4 text-orox-orange shrink-0"}),u.jsx("span",{children:"TRY LIVE VOICE DEMO"})]})]}),u.jsxs("div",{className:"relative w-full max-w-4xl mt-1 sm:mt-2 px-0",children:[u.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-28 rounded-[100%] blur-3xl pointer-events-none opacity-35 transition-colors duration-700",style:{backgroundColor:n.accentHex}}),u.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-14 border-b-2 rounded-[100%] pointer-events-none opacity-70 transition-colors duration-700",style:{borderColor:`${n.accentHex}88`}}),u.jsxs("div",{className:"relative bg-gradient-to-b from-[#161824]/90 via-[#10121A]/94 to-[#0A0B10]/98 p-3.5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3.5rem] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl group transition-all duration-300 hover:border-white/25 w-full",children:[u.jsxs("div",{className:"relative z-20 flex flex-col items-center gap-2 mb-2",children:[u.jsxs("div",{className:"px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs font-mono text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors shadow-sm pointer-events-none max-w-full truncate",children:[u.jsx("span",{className:`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full shrink-0 ${t?"bg-emerald-400":"animate-ping"}`,style:{backgroundColor:n.accentHex}}),u.jsx(HS,{className:"w-3.5 h-3.5 shrink-0",style:{color:n.accentHex}}),u.jsx("span",{className:"truncate uppercase tracking-wider",children:t?"OROX IS SPEAKING!":"TAP ROBOT OR MOVE TO INTERACT"})]}),u.jsx("div",{className:"w-full max-w-full overflow-x-auto no-scrollbar py-1 flex justify-start sm:justify-center px-1",children:u.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[10px] sm:text-[11px] font-mono shrink-0",children:[u.jsxs("button",{type:"button",onClick:()=>c("nod"),className:`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="nod"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx(GS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Nod"})]}),u.jsxs("button",{type:"button",onClick:()=>c("dance"),className:`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="dance"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx(JS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Dance"})]}),u.jsxs("button",{type:"button",onClick:()=>c("love"),className:`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="love"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx($c,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Love"})]}),u.jsxs("button",{type:"button",onClick:()=>c("laugh"),className:`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="laugh"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx(VS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Laugh"})]}),u.jsxs("button",{type:"button",onClick:()=>c("spin"),className:`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="spin"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx(eM,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Spin"})]}),u.jsxs("button",{type:"button",onClick:()=>c("sleep"),className:`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${r==="sleep"?"bg-white text-black font-bold shadow-md":"text-slate-300 hover:text-white"}`,children:[u.jsx(Uv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Nap"})]})]})})]}),u.jsx("div",{className:"relative z-10 my-1 sm:my-2 h-[290px] xs:h-[340px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center",children:u.jsx(Yy,{theme:n,reaction:r,onTap:l})}),u.jsxs("div",{className:"relative z-20 pt-3.5 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left",children:[u.jsxs("div",{className:"w-full sm:w-44 flex items-center justify-between sm:justify-start gap-2 text-xs font-mono text-slate-400",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"text-[11px] sm:text-xs",children:"COLOR:"}),u.jsx("span",{className:"text-white font-bold truncate max-w-[130px]",children:n.name})]}),u.jsx("a",{href:"#customizer",className:"sm:hidden text-[11px] font-mono text-orox-amber hover:text-white underline underline-offset-4 uppercase tracking-wider font-semibold",children:"BOX LAB →"})]}),u.jsx("div",{className:"w-full sm:flex-1 flex justify-center overflow-x-auto no-scrollbar py-0.5",children:u.jsx("div",{className:"flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center gap-1.5 p-1.5 bg-black/60 rounded-2xl sm:rounded-full border border-white/10 max-w-full shrink-0",children:Ra.map(p=>u.jsx("button",{type:"button",onClick:()=>f(p),title:`${p.name} (${p.tagline})`,className:`w-7 h-7 sm:w-6 sm:h-6 rounded-full flex items-center justify-center p-0.5 transition-all cursor-pointer shrink-0 ${n.id===p.id?"scale-115 border-2 border-white shadow-lg":"opacity-70 hover:opacity-100 hover:scale-110"}`,style:{backgroundColor:p.bodyHex},children:u.jsx("span",{className:"w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full",style:{backgroundColor:p.accentHex}})},p.id))})}),u.jsx("div",{className:"hidden sm:block sm:w-44 text-right shrink-0",children:u.jsx("a",{href:"#customizer",className:"text-xs font-mono text-orox-amber hover:text-white underline underline-offset-4 transition-colors uppercase tracking-wider inline-block font-semibold",children:"OPEN BOX LAB →"})})]}),u.jsxs("div",{className:"hidden lg:block absolute -left-8 top-16 p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-slow hover:translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-bold mb-1",style:{color:n.accentHex},children:[u.jsx(io,{className:"w-3.5 h-3.5 animate-pulse"}),u.jsx("span",{children:"360° ACOUSTIC EARS"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 leading-snug",children:"Dual resonant acoustic chambers tuned for human voice timbre."})]}),u.jsxs("div",{className:"hidden lg:block absolute -right-8 top-20 p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-delayed hover:-translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-bold mb-1",style:{color:n.accentHex},children:[u.jsx(Kf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"SUB-180MS LATENCY"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 leading-snug",children:"Bidirectional neural speech streaming with zero pause lag."})]}),u.jsxs("div",{className:"hidden lg:block absolute -left-8 top-[52%] p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-slow hover:translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-1",children:[u.jsx(Yf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"HARDWARE PRIVACY"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 leading-snug",children:"Physical mechanical mic disconnect circuit for total peace of mind."})]}),u.jsxs("div",{className:"hidden lg:block absolute -right-8 top-[52%] p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-delayed hover:-translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-1",children:[u.jsx(cv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"4-5H BATTERY RUN"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 leading-snug",children:"Continuous active conversation backup + 15W Qi desk dock included."})]})]})]}),u.jsx("div",{className:"mt-10 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-5xl",children:[{label:"VOICE LATENCY",value:"< 180 ms",detail:"Instant Natural Dialogue"},{label:"ACTIVE BATTERY",value:"4-5 Hours",detail:"+ Magnetic Qi Wireless Dock"},{label:"OLED FACES",value:"100+ Expressions",detail:"Custom Character Expressions"},{label:"FIRST DROP",value:"EARLY PASS",detail:"Priority Production Delivery"}].map((p,h)=>u.jsxs("div",{className:"bg-glass rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 text-center hover:border-white/25 hover:scale-[1.02] transition-all",children:[u.jsx("div",{className:"text-lg sm:text-2xl font-black font-display text-white mb-0.5 sm:mb-1",children:p.value}),u.jsx("div",{className:"text-[10px] sm:text-xs font-mono font-bold mb-0.5 sm:mb-1 tracking-wider",style:{color:n.accentHex},children:p.label}),u.jsx("div",{className:"text-[10px] sm:text-[11px] text-slate-400 font-mono",children:p.detail})]},h))})]})]})},AC=({onSelectThemeForWaitlist:t})=>{const[e,n]=ve.useState("character"),[i,r]=ve.useState(Ho[0]),[s,o]=ve.useState("idle"),[a,l]=ve.useState(!1),c=m=>{r(m),l(!1),m.category==="character"&&m.characterType?je.playCharacterSound(m.characterType):je.playChirp()},f=m=>{switch(o(m),m){case"nod":je.playNod();break;case"dance":je.playDance();break;case"laugh":je.playLaugh();break;case"love":je.playLove();break;case"sleep":je.playSleep();break;case"shock":je.playShock();break;case"spin":je.playSpin();break;default:je.playChirp()}m!=="sleep"&&setTimeout(()=>{o("idle")},3500)},p=()=>{l(!0),je.playGreeting(),t&&t(i);const m=document.getElementById("suggestion");m&&m.scrollIntoView({behavior:"smooth"})},h=e==="character"?Ho:Yl;return u.jsxs("section",{id:"customizer",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-25",style:{backgroundColor:i.accentHex}}),u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-white/15 text-xs font-mono uppercase tracking-widest text-orox-amber mb-6 shadow-glow-orange",children:[u.jsx(Dm,{className:"w-3.5 h-3.5 text-orox-orange animate-spin",style:{animationDuration:"6s"}}),u.jsx("span",{children:"[ 3D BOX LAB & ACTION FIGURE STUDIO ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Customize Your ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text transition-all duration-500",style:{backgroundImage:`linear-gradient(to right, ${i.accentHex}, #FFA033, #FFD54F)`},children:i.category==="character"?"Action Figure Edition":"ORoX Edition"})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"The iconic squircle head remains identical across all editions, while collectible cartoon action figure bodies (Spider-Hero, Sukuna Kimono, Deadpool Merc, Lofi Hoodie, Iron Armor) transform your desktop companion!"})]}),u.jsxs("div",{className:"bg-glass-card rounded-[2.5rem] sm:rounded-[3rem] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 backdrop-blur-2xl",children:[u.jsxs("div",{className:"lg:col-span-7 bg-[#0b0c10] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden min-h-[500px] sm:min-h-[560px]",children:[u.jsxs("div",{className:"w-full flex items-center justify-between z-10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-ping",style:{backgroundColor:i.accentHex}}),u.jsx("span",{className:"text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-semibold",children:i.name}),u.jsx("span",{className:"text-[10px] font-mono px-2.5 py-0.5 rounded-full border",style:{borderColor:`${i.accentHex}60`,backgroundColor:`${i.accentHex}20`,color:i.accentHex},children:i.badge})]}),u.jsx("div",{className:"text-xs font-mono text-slate-400",children:"3D PREVIEW"})]}),u.jsxs("div",{className:"w-full h-full my-auto flex items-center justify-center relative",children:[u.jsx(Yy,{theme:i,reaction:s,onTap:()=>f("nod"),className:"w-full h-[400px] sm:h-[450px]"}),u.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-slate-200 pointer-events-none whitespace-nowrap max-w-[92%] truncate text-center shadow-lg",children:"Move cursor to aim head • Click robot to interact"})]}),u.jsxs("div",{className:"z-10 pt-4 border-t border-white/10",children:[u.jsxs("div",{className:"text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2",children:[u.jsx(rM,{className:"w-3.5 h-3.5 text-orox-orange"}),u.jsx("span",{children:"Interactive Emotive Behaviors:"})]}),u.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2",children:[{mood:"nod",label:"Nod"},{mood:"dance",label:"Dance"},{mood:"love",label:"Love"},{mood:"laugh",label:"Laugh"},{mood:"spin",label:"Spin"},{mood:"shock",label:"Alert"},{mood:"sleep",label:"Sleep"}].map(m=>u.jsx("button",{type:"button",onClick:()=>f(m.mood),className:`p-2 rounded-xl text-xs font-mono font-medium flex flex-col items-center justify-center gap-1 transition-all cursor-pointer min-h-[46px] ${s===m.mood?"bg-orox-orange text-black font-bold shadow-glow-orange scale-105":"bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"}`,children:u.jsx("span",{className:"capitalize",children:m.label})},m.mood))})]})]}),u.jsxs("div",{className:"lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#12141A]/95 backdrop-blur-md",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"grid grid-cols-2 gap-2 p-1.5 bg-[#0A0B0E] rounded-2xl border border-white/10 mb-6",children:[u.jsxs("button",{type:"button",onClick:()=>{n("character"),c(Ho[0])},className:`py-2.5 px-3 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${e==="character"?"bg-orox-orange text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:[u.jsx(ns,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Action Figures (",Ho.length,")"]})]}),u.jsxs("button",{type:"button",onClick:()=>{n("classic"),c(Yl[0])},className:`py-2.5 px-3 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${e==="classic"?"bg-orox-orange text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:[u.jsx(Dm,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Industrial (",Yl.length,")"]})]})]}),u.jsxs("div",{className:"text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center justify-between",children:[u.jsx("span",{children:e==="character"?"Select Action Figure Body:":"Select Hardware Finish:"}),u.jsxs("span",{className:"text-[10px] text-slate-400",children:[h.length," Options"]})]}),u.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1 no-scrollbar",children:h.map(m=>{const x=i.id===m.id;return u.jsxs("button",{type:"button",onClick:()=>c(m),className:`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${x?"bg-white/10 border-white/40 shadow-lg scale-[1.01]":"bg-[#181A22] border-white/5 hover:border-white/20 hover:bg-[#1E212B]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl flex items-center justify-center border border-white/10 shrink-0 shadow-inner",style:{backgroundColor:m.bodyHex},children:u.jsx("span",{className:"w-4 h-4 rounded-full",style:{backgroundColor:m.accentHex}})}),u.jsxs("div",{className:"truncate",children:[u.jsxs("div",{className:"text-xs sm:text-sm font-semibold text-white truncate flex items-center gap-2",children:[u.jsx("span",{children:m.name}),m.category==="character"&&u.jsx("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded-sm shrink-0 uppercase",style:{backgroundColor:`${m.accentHex}25`,color:m.accentHex},children:"Armor"})]}),u.jsx("div",{className:"text-[11px] text-slate-400 truncate",children:m.tagline})]})]}),u.jsx("div",{className:"shrink-0 flex items-center",children:u.jsx("span",{className:`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${x?"border-white bg-orox-orange":"border-white/20"}`,children:x&&u.jsx("span",{className:"w-1.5 h-1.5 bg-black rounded-full"})})})]},m.id)})}),u.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 text-xs space-y-1.5",children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2",children:"Chassis Architecture:"}),u.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[u.jsx("span",{className:"text-slate-400",children:"Head Module:"}),u.jsx("span",{className:"text-white font-medium",children:"Standard ORoX Squircle with OLED Screen"})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[u.jsx("span",{className:"text-slate-400",children:"Body Chassis:"}),u.jsx("span",{className:"text-white font-medium",children:i.category==="character"?"Changeable Action Figure Armor":"Precision Anodized Matte Shell"})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[u.jsx("span",{className:"text-slate-400",children:"Audio Voice Timbre:"}),u.jsx("span",{className:"text-orox-amber font-mono font-medium truncate max-w-[200px]",children:i.characterVoice?"Character Neural Speech":"Pure Acoustic Companion"})]})]})]}),u.jsxs("div",{className:"mt-6 pt-5 border-t border-white/10",children:[u.jsxs("button",{type:"button",onClick:p,className:"w-full py-4 px-6 rounded-2xl text-black font-extrabold text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 btn-attractive-primary cursor-pointer shadow-lg",children:[u.jsx($f,{className:"w-4 h-4 text-black"}),u.jsx("span",{children:a?"EDITION SELECTED!":`SELECT ${i.name.toUpperCase()}`}),u.jsx(qf,{className:"w-4 h-4 text-black"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-mono text-center mt-2.5 uppercase tracking-wide",children:e==="character"?"★ Signature ORoX Head + Changeable Cartoon Body":"Precision Industrial Desktop Companion"})]})]})]})]})},Kl=["Round","Tall","Joy","Sleepy","Heart","Star","Pupil","Cat","Dizzy","Pixel","Grumpy","Sparkle","Droopy","Wink","Moon"],Zl=["Smile","Oh","Cat","Flat","Grin","Smirk","Wavy","Tongue","Dot","Frown"],Jl=["None","Blush","Tear","Sparkles","Sweat","Brows","Hearts","Zzz"],CC=["Sweet","Cosmic","Fluffy","Sneaky","Dreamy","Zesty","Cheeky","Silky","Turbo","Lunar"],RC=["Mochi","Bean","Pixel","Boba","Comet","Pudding","Ninja","Jelly","Neon","Cloud"];function vn(t){const e=(t%100+100)%100,n=Math.floor(e/15),i=e%15,r=(e*7+n)%10,s=(e*3+Math.floor(e/10))%8,o=22+e*13%9,a=9+e*7%6,l=CC[e%10],c=RC[Math.floor(e/10)],f=`${l} ${c}`;let p="expressive";i===4||s===1||s===6||r===0||r===4?p="joy":i===2||i===7||i===13||r===2||r===7?p="kawaii":i===8||i===9||i===10||s===4?p="cyber":(i===3||i===14||s===7)&&(p="chill");const h=Kl[i],m=Zl[r],x=Jl[s],b=`${h} eyes with a ${m.toLowerCase()} mouth${s>0?` and ${x.toLowerCase()} particle effects`:""}.`;return{index:e,id:`face-${e+1}`,name:f,adjective:l,noun:c,eyeType:i,mouthType:r,extraType:s,eyeName:h,mouthName:m,extraName:x,gap:o,eyeSize:a,category:p,description:b,tags:[p,e<12?"iconic":""]}}const NC=Array.from({length:100},(t,e)=>vn(e));vn(0),vn(2),vn(4),vn(7),vn(8),vn(14),vn(20),vn(33),vn(44),vn(66),vn(81),vn(99);const ld=NC,Zh=({expression:t,mochiFace:e,mochiIndex:n,customEye:i,customMouth:r,customExtra:s,accentHex:o="#FFA033",isTalking:a=!1,size:l="md",className:c="",onClick:f})=>{const[p,h]=ve.useState({x:0,y:0}),[m,x]=ve.useState(!1);ve.useEffect(()=>{const E=setInterval(()=>{x(!0),setTimeout(()=>x(!1),140)},3800+Math.random()*2e3);return()=>clearInterval(E)},[]);const b=E=>{const N=E.currentTarget.getBoundingClientRect(),S=N.left+N.width/2,C=N.top+N.height/2,L=Math.max(-1,Math.min(1,(E.clientX-S)/(N.width/2))),I=Math.max(-1,Math.min(1,(E.clientY-C)/(N.height/2)));h({x:L*6,y:I*4})},g=()=>{h({x:0,y:0})};let d=0,v=0,y=0;if(i!==void 0)d=i,v=r!==void 0?r:0,y=s!==void 0?s:0;else if(e)d=e.eyeType,v=e.mouthType,y=e.extraType;else if(n!==void 0){const E=vn(n);d=E.eyeType,v=E.mouthType,y=E.extraType}else if(t)switch(t){case"happy":d=2,v=0,y=1;break;case"curious":d=6,v=1,y=5;break;case"talking":d=0,v=1,y=0;break;case"thinking":d=9,v=3,y=4;break;case"loving":d=4,v=4,y=6;break;case"sleepy":d=3,v=3,y=7;break;case"surprised":d=11,v=1,y=3;break;default:d=0,v=0,y=0}a&&(v=1);const _={sm:"w-28 h-18 rounded-2xl p-2",md:"w-48 h-32 rounded-3xl p-3",lg:"w-72 h-44 rounded-[2rem] p-4",hero:"w-full max-w-[340px] sm:max-w-[420px] h-48 sm:h-60 rounded-[2.5rem] p-4 sm:p-5"}[l],w=`glow-${d}-${v}`;return u.jsxs("div",{onClick:f,onMouseMove:b,onMouseLeave:g,className:`relative inline-flex items-center justify-center bg-[#15161A] border-[3px] border-orox-orange shadow-glow-orange cursor-pointer transition-all duration-300 hover:scale-[1.02] select-none ${_} ${c}`,title:"Interactive OLED Display • Move cursor to guide eyes!",children:[u.jsxs("div",{className:"absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-10",children:[u.jsx("div",{className:"absolute -top-16 -left-16 w-52 h-52 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-xl transform rotate-12"}),u.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40"})]}),u.jsx("div",{className:"relative w-full h-full bg-[#08090C] rounded-[inherit] flex items-center justify-center overflow-hidden",children:u.jsxs("svg",{viewBox:"0 0 200 120",className:"w-full h-full",style:{filter:`drop-shadow(0 0 10px ${o}99)`},children:[u.jsx("defs",{children:u.jsxs("filter",{id:w,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[u.jsx("feGaussianBlur",{stdDeviation:"2",result:"blur"}),u.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})}),u.jsxs("g",{style:{transform:`translate(${p.x}px, ${p.y}px)`,transition:"transform 0.1s ease-out"},children:[y===1&&u.jsxs("g",{fill:"#FF4D6D",opacity:"0.85",children:[u.jsx("circle",{cx:"38",cy:"72",r:"2.5"}),u.jsx("circle",{cx:"44",cy:"74",r:"2.5"}),u.jsx("circle",{cx:"41",cy:"78",r:"2.5"}),u.jsx("circle",{cx:"162",cy:"72",r:"2.5"}),u.jsx("circle",{cx:"156",cy:"74",r:"2.5"}),u.jsx("circle",{cx:"159",cy:"78",r:"2.5"})]}),y===2&&u.jsx("path",{d:"M 148 70 C 148 65, 155 58, 155 58 C 155 58, 162 65, 162 70 C 162 74, 159 78, 155 78 C 151 78, 148 74, 148 70 Z",fill:"#00D2FF",className:"animate-bounce",opacity:"0.9"}),y===3&&u.jsxs("g",{fill:"#FFD166",className:"animate-pulse",children:[u.jsx("path",{d:"M 26 24 L 28 30 L 34 32 L 28 34 L 26 40 L 24 34 L 18 32 L 24 30 Z"}),u.jsx("path",{d:"M 174 20 L 176 25 L 181 27 L 176 29 L 174 34 L 172 29 L 167 27 L 172 25 Z"}),u.jsx("path",{d:"M 170 88 L 172 92 L 176 94 L 172 96 L 170 100 L 168 96 L 164 94 L 168 92 Z"})]}),y===4&&u.jsx("path",{d:"M 166 22 C 166 18, 172 12, 172 12 C 172 12, 178 18, 178 22 C 178 26, 175 28, 172 28 C 169 28, 166 26, 166 22 Z",fill:"#48CAE4",opacity:"0.95"}),y===5&&u.jsxs("g",{stroke:o,strokeWidth:"3",strokeLinecap:"round",children:[u.jsx("line",{x1:"50",y1:"26",x2:"82",y2:"22"}),u.jsx("line",{x1:"118",y1:"22",x2:"150",y2:"26"})]}),y===6&&u.jsxs("g",{fill:"#FF4D6D",className:"animate-pulse",children:[u.jsx("path",{d:"M 28 26 A 4 4 0 0 0 22 30 A 4 4 0 0 0 28 36 L 28 36 L 34 30 A 4 4 0 0 0 28 26 Z",transform:"scale(1.2)"}),u.jsx("path",{d:"M 150 18 A 4 4 0 0 0 144 22 A 4 4 0 0 0 150 28 L 150 28 L 156 22 A 4 4 0 0 0 150 18 Z",transform:"scale(1.1)"})]}),y===7&&u.jsxs("g",{fill:"#90E0EF",fontFamily:"monospace",fontWeight:"bold",className:"animate-pulse",children:[u.jsx("text",{x:"148",y:"32",fontSize:"12",children:"z"}),u.jsx("text",{x:"160",y:"24",fontSize:"16",children:"Z"}),u.jsx("text",{x:"176",y:"16",fontSize:"20",children:"Z"})]}),u.jsxs("g",{style:{transform:m?"scaleY(0.1)":"scaleY(1)",transformOrigin:"100px 52px",transition:"transform 0.08s ease"},children:[d===0&&u.jsxs("g",{fill:o,children:[u.jsx("rect",{x:"52",y:"32",width:"28",height:"38",rx:"14"}),u.jsx("rect",{x:"120",y:"32",width:"28",height:"38",rx:"14"}),u.jsx("rect",{x:"56",y:"36",width:"6",height:"6",rx:"2",fill:"#08090C"}),u.jsx("rect",{x:"124",y:"36",width:"6",height:"6",rx:"2",fill:"#08090C"})]}),d===1&&u.jsxs("g",{fill:o,children:[u.jsx("rect",{x:"54",y:"26",width:"24",height:"46",rx:"12"}),u.jsx("rect",{x:"122",y:"26",width:"24",height:"46",rx:"12"}),u.jsx("rect",{x:"58",y:"30",width:"6",height:"7",rx:"2",fill:"#08090C"}),u.jsx("rect",{x:"126",y:"30",width:"6",height:"7",rx:"2",fill:"#08090C"})]}),d===2&&u.jsxs("g",{stroke:o,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",children:[u.jsx("path",{d:"M 52 58 Q 66 32 80 58"}),u.jsx("path",{d:"M 120 58 Q 134 32 148 58"})]}),d===3&&u.jsxs("g",{fill:o,children:[u.jsx("path",{d:"M 52 48 Q 66 70 80 48 Z"}),u.jsx("path",{d:"M 120 48 Q 134 70 148 48 Z"}),u.jsx("line",{x1:"50",y1:"46",x2:"82",y2:"46",stroke:o,strokeWidth:"3",strokeLinecap:"round"}),u.jsx("line",{x1:"118",y1:"46",x2:"150",y2:"46",stroke:o,strokeWidth:"3",strokeLinecap:"round"})]}),d===4&&u.jsxs("g",{fill:"#FF3366",className:"animate-pulse",children:[u.jsx("path",{d:"M 66 65 C 66 65, 50 50, 50 40 A 10 10 0 0 1 66 32 A 10 10 0 0 1 82 40 C 82 50, 66 65, 66 65 Z"}),u.jsx("path",{d:"M 134 65 C 134 65, 118 50, 118 40 A 10 10 0 0 1 134 32 A 10 10 0 0 1 150 40 C 150 50, 134 65, 134 65 Z"})]}),d===5&&u.jsxs("g",{fill:"#FFD166",children:[u.jsx("polygon",{points:"66,28 70,42 84,42 73,50 77,64 66,56 55,64 59,50 48,42 62,42"}),u.jsx("polygon",{points:"134,28 138,42 152,42 141,50 145,64 134,56 123,64 127,50 116,42 130,42"})]}),d===6&&u.jsxs("g",{children:[u.jsx("rect",{x:"50",y:"32",width:"32",height:"38",rx:"16",fill:o}),u.jsx("rect",{x:"118",y:"32",width:"32",height:"38",rx:"16",fill:o}),u.jsx("circle",{cx:66+p.x*.8,cy:51+p.y*.8,r:"8",fill:"#08090C"}),u.jsx("circle",{cx:134+p.x*.8,cy:51+p.y*.8,r:"8",fill:"#08090C"}),u.jsx("circle",{cx:68+p.x*.8,cy:48+p.y*.8,r:"2.5",fill:"#FFFFFF"}),u.jsx("circle",{cx:136+p.x*.8,cy:48+p.y*.8,r:"2.5",fill:"#FFFFFF"})]}),d===7&&u.jsxs("g",{fill:o,children:[u.jsx("rect",{x:"52",y:"32",width:"28",height:"38",rx:"14"}),u.jsx("rect",{x:"120",y:"32",width:"28",height:"38",rx:"14"}),u.jsx("rect",{x:"64",y:"34",width:"4",height:"34",rx:"2",fill:"#08090C"}),u.jsx("rect",{x:"132",y:"34",width:"4",height:"34",rx:"2",fill:"#08090C"})]}),d===8&&u.jsxs("g",{stroke:o,strokeWidth:"5.5",strokeLinecap:"round",children:[u.jsx("line",{x1:"52",y1:"36",x2:"80",y2:"64"}),u.jsx("line",{x1:"80",y1:"36",x2:"52",y2:"64"}),u.jsx("line",{x1:"120",y1:"36",x2:"148",y2:"64"}),u.jsx("line",{x1:"148",y1:"36",x2:"120",y2:"64"})]}),d===9&&u.jsxs("g",{fill:o,children:[u.jsx("rect",{x:"52",y:"34",width:"28",height:"32",rx:"4"}),u.jsx("rect",{x:"120",y:"34",width:"28",height:"32",rx:"4"}),u.jsx("rect",{x:"58",y:"40",width:"5",height:"5",fill:"#08090C"}),u.jsx("rect",{x:"126",y:"40",width:"5",height:"5",fill:"#08090C"})]}),d===10&&u.jsxs("g",{fill:o,children:[u.jsx("path",{d:"M 50 34 L 82 46 L 82 66 L 50 56 Z"}),u.jsx("path",{d:"M 150 34 L 118 46 L 118 66 L 150 56 Z"}),u.jsx("rect",{x:"60",y:"44",width:"6",height:"6",fill:"#08090C"}),u.jsx("rect",{x:"128",y:"44",width:"6",height:"6",fill:"#08090C"})]}),d===11&&u.jsxs("g",{fill:o,children:[u.jsx("path",{d:"M 66 26 Q 66 50 82 50 Q 66 50 66 74 Q 66 50 50 50 Q 66 50 66 26 Z"}),u.jsx("path",{d:"M 134 26 Q 134 50 150 50 Q 134 50 134 74 Q 134 50 118 50 Q 134 50 134 26 Z"})]}),d===12&&u.jsxs("g",{fill:o,children:[u.jsx("path",{d:"M 50 50 L 82 36 L 82 58 L 50 68 Z"}),u.jsx("path",{d:"M 150 50 L 118 36 L 118 58 L 150 68 Z"}),u.jsx("rect",{x:"64",y:"44",width:"6",height:"6",fill:"#08090C"}),u.jsx("rect",{x:"124",y:"44",width:"6",height:"6",fill:"#08090C"})]}),d===13&&u.jsxs("g",{children:[u.jsx("path",{d:"M 52 56 Q 66 32 80 56",stroke:o,strokeWidth:"5.5",strokeLinecap:"round",fill:"none"}),u.jsx("rect",{x:"120",y:"32",width:"28",height:"38",rx:"14",fill:o}),u.jsx("rect",{x:"124",y:"36",width:"6",height:"6",rx:"2",fill:"#08090C"})]}),d===14&&u.jsxs("g",{stroke:o,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",children:[u.jsx("path",{d:"M 52 42 Q 66 66 80 42"}),u.jsx("path",{d:"M 120 42 Q 134 66 148 42"})]})]}),u.jsxs("g",{children:[v===0&&u.jsx("path",{d:"M 88 82 Q 100 94 112 82",stroke:o,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),v===1&&u.jsx("ellipse",{cx:"100",cy:"86",rx:"7",ry:a?"11":"8",fill:o,className:a?"animate-pulse":""}),v===2&&u.jsx("path",{d:"M 86 84 Q 93 92 100 86 Q 107 92 114 84",stroke:o,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),v===3&&u.jsx("line",{x1:"88",y1:"86",x2:"112",y2:"86",stroke:o,strokeWidth:"3.5",strokeLinecap:"round"}),v===4&&u.jsxs("g",{children:[u.jsx("path",{d:"M 84 82 Q 100 82 116 82 Q 100 102 84 82 Z",fill:o}),u.jsx("path",{d:"M 94 92 Q 100 98 106 92 Z",fill:"#FF3366"})]}),v===5&&u.jsx("path",{d:"M 88 88 Q 102 92 114 80",stroke:o,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),v===6&&u.jsx("path",{d:"M 86 86 Q 92 80 98 86 Q 104 92 114 86",stroke:o,strokeWidth:"3",strokeLinecap:"round",fill:"none"}),v===7&&u.jsxs("g",{children:[u.jsx("path",{d:"M 86 82 Q 100 92 114 82",stroke:o,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),u.jsx("rect",{x:"96",y:"85",width:"8",height:"9",rx:"4",fill:"#FF4D6D"}),u.jsx("line",{x1:"100",y1:"87",x2:"100",y2:"92",stroke:"#800020",strokeWidth:"1"})]}),v===8&&u.jsx("circle",{cx:"100",cy:"85",r:"3",fill:o}),v===9&&u.jsx("path",{d:"M 88 90 Q 100 78 112 90",stroke:o,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})]})]})]})})]})},PC=[{label:"Introduce yourself",prompt:"Hey ORoX, introduce yourself!",reply:"Beep-bloop! Hello there! I'm ORoX, your intelligent personal AI robot companion. I have dual 360° acoustic ear speakers, an emotive OLED screen face, and I'm built to talk, listen, and keep you company all day!",expression:"happy",clipKey:"intro"},{label:"Workday assistant",prompt:"How can you help me during deep work?",reply:"I run your pomodoro timers, remind you to hydrate, summarize your daily tasks, and talk through tough coding or creative problems with zero latency speech!",expression:"curious",clipKey:"workday"},{label:"Tell me a joke",prompt:"Tell me a joke or something fun!",reply:"Why was the robot never lonely? Because it was always programmed with great social algorithms! And did you know? My cute squircle head houses 100 expressive OLED micro-animations.",expression:"happy",clipKey:"joke"},{label:"Talk to Luffy",icon:"anchor",prompt:"Luffy, what is your dream?",reply:"I'm Monkey D. Luffy! Kaizoku ou ni, ore wa naru! I'm gonna be King of the Pirates! Grab some meat and let's set sail on an adventure together!",expression:"happy",clipKey:"luffy",persona:"luffy"},{label:"Privacy protection",prompt:"Is my microphone and voice data private?",reply:"100% private! My neural wake-word engine runs entirely on-device, and I have a physical hardware mic disconnect switch. Your thoughts stay between you and me.",expression:"loving",clipKey:"privacy"}],LC=()=>{const[t,e]=ve.useState([{sender:"orox",text:"Beep-boop! Hello friend! I am ORoX. Tap any topic below or ask me anything — I can speak to you with my sweet, real-time cute robot voice!",expression:"happy",clipKey:"intro"}]),[n,i]=ve.useState(""),[r,s]=ve.useState(!1),[o,a]=ve.useState(!1),[l,c]=ve.useState(!1),[f,p]=ve.useState("chibi"),[h,m]=ve.useState("neutral"),x=ve.useRef(null);ve.useEffect(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[t,o,r]);const b=y=>{switch(y){case"chibi":return{pitch:1.45,rate:1.1};case"sweet":return{pitch:1.35,rate:1.05};case"luffy":return{pitch:1.25,rate:1.15}}},g=(y,_="talking",w,E)=>{l&&(c(!1),je.setMuted(!1)),je.initContext(),s(!0),m(_);const S=b(w||f);je.speak(y,()=>{s(!0)},()=>{s(!1),m("neutral")},S,E)},d=(y,_,w="happy",E,N)=>{if(!y.trim())return;je.playClick();const S=[...t,{sender:"user",text:y}];e(S),i(""),a(!0),m("thinking"),setTimeout(()=>{a(!1);let C=_,L=w,I=E;if(!C){const D=y.toLowerCase();D.includes("price")||D.includes("cost")||D.includes("how much")?(C="ORoX is launching at an exclusive early-bird price of $199 (retail $299). Grab your first personal AI robot now to lock in the special launch discount!",L="happy",I="price"):D.includes("when")||D.includes("release")||D.includes("date")||D.includes("shipping")?(C="We are scheduled for initial shipment in Q4 2026! Be the first to grab your personal AI robot companion.",L="curious"):D.includes("color")||D.includes("orange")||D.includes("black")?(C="I come in our signature Matte Graphite with Tangerine Audio Ears, plus upcoming Cyber Neon, Stealth Mono, and collectible Action Figure bodies!",L="loving",I="colors"):D.includes("night")||D.includes("sleep")||D.includes("bed")?(C="Goodnight! I'll dim my OLED display to 5% amber and guard your desk while you sleep. Sweet dreams!",L="loving",I="night"):D.includes("hello")||D.includes("hi")||D.includes("hey")?(C="Hey friend! So great to meet you. I'm ready to hang out on your desk and chat whenever you need a spark of inspiration!",L="happy",I="intro"):(C="That's a great question! As your personal AI robot companion, I process natural voice conversations with zero latency. Once we launch, I'll be able to learn your daily workflow and converse about anything!",L="curious")}e(D=>[...D,{sender:"orox",text:C,expression:L,clipKey:I}]),g(C,L,N,I)},450)},v=()=>{const y=!l;c(y),je.setMuted(y),y?(je.stopSpeaking(),s(!1),m("neutral")):je.playGreeting()};return u.jsxs("section",{id:"simulator",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orox-orange/5 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(ns,{className:"w-3.5 h-3.5 text-orox-orange animate-spin",style:{animationDuration:"6s"}}),u.jsx("span",{children:"[ NEURAL SPEECH STREAMING SIMULATOR ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Talk to ",u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300",children:"ORoX"})," ",u.jsx("br",{className:"hidden sm:inline"}),"Right Now In Browser."]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"Experience our conversational neural engine with a cute robot voice. Turn on your audio to hear ORoX speak back to you!"})]}),u.jsxs("div",{className:"relative z-10 bg-glass-card rounded-3xl border border-white/10 shadow-glass overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0",children:[u.jsxs("div",{className:"lg:col-span-5 p-8 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0E1015]/60 relative",children:[u.jsxs("div",{className:"w-full flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),u.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-300",children:"Cute Robot Voice Online"})]}),u.jsxs("button",{onClick:v,className:`p-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-mono cursor-pointer ${l?"bg-rose-500/10 border-rose-500/30 text-rose-400":"bg-orox-orange/10 border-orox-orange/40 text-orox-amber hover:bg-orox-orange/20"}`,title:l?"Unmute voice output":"Mute voice output",children:[l?u.jsx(rh,{className:"w-4 h-4"}):u.jsx(io,{className:"w-4 h-4 animate-bounce"}),u.jsx("span",{children:l?"Muted":"Audio Active"})]})]}),u.jsxs("div",{className:"my-8 flex flex-col items-center",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute -inset-4 bg-orox-orange/20 rounded-[3rem] blur-xl opacity-70 animate-pulse-slow"}),u.jsx(Zh,{size:"lg",expression:h,isTalking:r,onClick:()=>{je.playChirp(),g("Bloop-bloop! You touched my screen! I love cute chats and hanging out on your desk.","loving",void 0,"giggle")}})]}),u.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[u.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Current Emotion:"}),u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-orox-orange/15 border border-orox-orange/30 text-orox-amber font-semibold",children:o?"THINKING...":r?"VOCALIZING...":h})]}),u.jsxs("div",{className:"mt-4 flex items-center justify-center gap-1.5 h-8",children:[u.jsx("span",{className:`w-1 bg-orox-orange rounded-full transition-all duration-150 ${r?"animate-audio-bar-1":"h-1.5 opacity-40"}`}),u.jsx("span",{className:`w-1 bg-orox-amber rounded-full transition-all duration-150 ${r?"animate-audio-bar-2":"h-2 opacity-40"}`}),u.jsx("span",{className:`w-1.5 bg-orox-orange rounded-full transition-all duration-150 ${r?"animate-audio-bar-3":"h-3 opacity-40"}`}),u.jsx("span",{className:`w-1 bg-orox-amber rounded-full transition-all duration-150 ${r?"animate-audio-bar-4":"h-2 opacity-40"}`}),u.jsx("span",{className:`w-1 bg-orox-orange rounded-full transition-all duration-150 ${r?"animate-audio-bar-5":"h-1.5 opacity-40"}`})]})]}),u.jsxs("div",{className:"w-full mt-3 p-3 rounded-2xl bg-[#13161F] border border-white/10",children:[u.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold",children:"Cute Voice Persona:"}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"chibi",label:"Chibi"},{id:"sweet",label:"Sweet"},{id:"luffy",label:"Luffy",icon:"anchor"}].map(y=>u.jsxs("button",{type:"button",onClick:()=>{p(y.id),je.playChirp()},className:`py-1.5 px-2 rounded-xl text-[11px] font-mono font-medium transition-all cursor-pointer text-center flex items-center justify-center gap-1 ${f===y.id?"bg-orox-orange text-black font-extrabold shadow-sm":"bg-white/5 hover:bg-white/10 text-slate-300"}`,children:[u.jsx("span",{children:y.label}),y.icon==="anchor"&&u.jsx(Eu,{className:"w-3 h-3 text-amber-400 shrink-0"})]},y.id))})]}),u.jsxs("div",{className:"w-full mt-3 space-y-2",children:[u.jsxs("button",{type:"button",onClick:()=>{f==="luffy"?g("Ore wa Monkey D. Luffy! Kaizoku ou ni, ore wa naru! Grab some meat and let's set sail on an adventure together!","happy","luffy","luffy"):g("Beep-boop! Hello friend! I am ORoX, your first personal AI robot companion with sweet acoustic neural speech!","happy",f,"intro")},className:"w-full py-2.5 px-3.5 rounded-xl bg-orox-card hover:bg-[#20232C] border border-white/10 hover:border-orox-orange/50 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.01]",children:[u.jsx(Vv,{className:"w-3.5 h-3.5 text-orox-orange fill-orox-orange"}),u.jsx("span",{children:"Test Cute Voice Synthesis"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[u.jsxs("button",{type:"button",onClick:()=>g("Hehe! You're doing incredible today! Keep shining bright!","loving","sweet","cheer"),className:"py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer",children:[u.jsx($c,{className:"w-3 h-3 text-rose-400 fill-rose-400"}),u.jsx("span",{children:"Sweet Cheer"})]}),u.jsxs("button",{type:"button",onClick:()=>g("Ore wa Monkey D. Luffy! I'm gonna be King of the Pirates! Gomu Gomu no... Rocket!","happy","luffy","luffy"),className:"py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer",children:[u.jsx(Eu,{className:"w-3 h-3 text-amber-400"}),u.jsx("span",{children:"Luffy Shout"})]})]})]})]}),u.jsxs("div",{className:"lg:col-span-7 flex flex-col h-[480px] sm:h-[520px] bg-[#12141A]/90 p-4 sm:p-6",children:[u.jsxs("div",{ref:x,className:"flex-1 overflow-y-auto space-y-4 pr-1 sm:pr-2",children:[t.map((y,_)=>u.jsxs("div",{className:`flex items-start gap-2.5 sm:gap-3 ${y.sender==="user"?"justify-end":"justify-start"}`,children:[y.sender==="orox"&&u.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0 mt-0.5",children:u.jsx(dv,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-orox-orange"})}),u.jsxs("div",{className:`max-w-[85%] sm:max-w-[82%] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${y.sender==="user"?"bg-orox-orange text-black font-semibold rounded-br-none shadow-md":"bg-[#1C1F28] text-slate-200 border border-white/10 rounded-bl-none shadow-sm"}`,children:[u.jsx("p",{children:y.text}),y.sender==="orox"&&!l&&u.jsxs("button",{type:"button",onClick:()=>g(y.text,y.expression||"happy",void 0,y.clipKey),className:"mt-2 inline-flex items-center gap-1 text-[11px] font-mono text-orox-amber/80 hover:text-orox-amber transition-colors cursor-pointer",children:[u.jsx(io,{className:"w-3 h-3"}),u.jsx("span",{children:"Replay cute speech"})]})]})]},_)),o&&u.jsxs("div",{className:"flex items-start gap-2.5 sm:gap-3",children:[u.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0",children:u.jsx(ih,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-orox-orange animate-spin"})}),u.jsxs("div",{className:"bg-[#1C1F28] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl rounded-bl-none border border-white/10 flex items-center gap-2",children:[u.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"ORoX is processing voice tokens..."}),u.jsxs("div",{className:"flex gap-1",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orox-orange animate-bounce"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orox-amber animate-bounce [animation-delay:0.2s]"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orox-orange animate-bounce [animation-delay:0.4s]"})]})]})]})]}),u.jsxs("div",{className:"pt-3 pb-2 border-t border-white/5",children:[u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2",children:"Tap a sample topic:"}),u.jsx("div",{className:"flex flex-wrap gap-2 py-0.5",children:PC.map((y,_)=>u.jsxs("button",{type:"button",onClick:()=>d(y.prompt,y.reply,y.expression,y.clipKey,y.persona),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181A22] hover:bg-orox-orange/15 border border-white/5 hover:border-orox-orange/40 text-[11px] sm:text-xs text-slate-300 hover:text-orox-amber transition-all duration-150 cursor-pointer",children:[y.icon==="anchor"&&u.jsx(Eu,{className:"w-3 h-3 text-amber-400 shrink-0"}),u.jsx("span",{children:y.label})]},_))})]}),u.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(n)},className:"mt-2.5 sm:mt-3 flex items-center gap-2",children:[u.jsx("div",{className:"relative flex-1",children:u.jsx("input",{type:"text",value:n,onChange:y=>i(y.target.value),placeholder:"Type anything to ask ORoX...",className:"w-full bg-[#1A1D26] border border-white/10 focus:border-orox-orange focus:ring-1 focus:ring-orox-orange/50 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 min-h-[44px]"})}),u.jsx("button",{type:"submit",disabled:!n.trim(),className:"p-3 sm:p-3.5 rounded-xl btn-attractive-primary text-black font-extrabold disabled:opacity-40 transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer min-h-[44px] min-w-[44px]",title:"Send to ORoX",children:u.jsx(Xv,{className:"w-4 h-4 text-black"})})]})]})]})]})},DC=()=>{const[t,e]=ve.useState(0),[n,i]=ve.useState(!1),[r,s]=ve.useState("iconic"),[o,a]=ve.useState(""),[l,c]=ve.useState(0),[f,p]=ve.useState(0),[h,m]=ve.useState(0),x=ld[t]||ld[0];ve.useEffect(()=>{let w=null;return n&&(w=setInterval(()=>{e(E=>(E+1)%100)},1400)),()=>{w&&clearInterval(w)}},[n]),ve.useEffect(()=>{const w=E=>{E.target instanceof HTMLInputElement||E.target instanceof HTMLTextAreaElement||(E.key==="ArrowRight"||E.key==="n"?b():E.key==="ArrowLeft"||E.key==="p"?g():E.key===" "||E.key==="r"?(E.preventDefault(),d()):E.key==="a"&&v())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]);const b=()=>{je.playClick(),e(w=>(w+1)%100)},g=()=>{je.playClick(),e(w=>(w-1+100)%100)},d=()=>{je.playChirp();const w=Math.floor(Math.random()*100);e(w)},v=()=>{je.playClick(),i(!n)},y=w=>{je.playClick(),e(w)},_=ld.filter(w=>{if(o.trim()){const E=o.toLowerCase();return w.name.toLowerCase().includes(E)||w.eyeName.toLowerCase().includes(E)||w.mouthName.toLowerCase().includes(E)||w.extraName.toLowerCase().includes(E)||String(w.index+1).includes(E)}return r==="iconic"?w.tags.includes("iconic"):r==="joy"?w.tags.includes("joy"):r==="kawaii"?w.tags.includes("kawaii"):r==="cyber"?w.tags.includes("cyber"):r==="chill"?w.tags.includes("chill"):!0});return u.jsxs("section",{id:"emotions",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-orox-orange/10 rounded-full blur-[180px] pointer-events-none"}),u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(Im,{className:"w-3.5 h-3.5 text-orox-orange animate-pulse"}),u.jsx("span",{children:"[ MOCHI 100 OLED FACE LAB & EXPRESSION MATRIX ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["100 Emotive OLED Faces. ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300",children:"A Soulful Digital Persona."})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"Inspired by our Arduino OLED micro-companion architecture: 15 optical eye types, 10 mouth geometries, and 8 animated particle extras creating 100 distinct living personas."})]}),u.jsxs("div",{className:"bg-glass-card rounded-[2.5rem] sm:rounded-[3rem] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 backdrop-blur-2xl",children:[u.jsxs("div",{className:"lg:col-span-5 bg-[#0b0c10] p-6 sm:p-10 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative",children:[u.jsxs("div",{className:"w-full flex items-center justify-between z-10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"}),u.jsxs("span",{className:"text-xs font-mono text-white uppercase tracking-wider font-semibold",children:["FACE #",r==="custom"?"CUSTOM":x.index+1]})]}),u.jsx("div",{className:"text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber uppercase font-bold",children:r==="custom"?"CUSTOM MIX":x.name})]}),u.jsxs("div",{className:"my-6 sm:my-8 flex flex-col items-center justify-center w-full",children:[u.jsx("div",{className:"relative p-2",children:u.jsx(Zh,{size:"hero",mochiFace:r==="custom"?void 0:x,customEye:r==="custom"?l:void 0,customMouth:r==="custom"?f:void 0,customExtra:r==="custom"?h:void 0,onClick:()=>je.playChirp()})}),u.jsx("div",{className:"mt-3 px-3.5 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300 uppercase tracking-wide",children:"Move cursor to guide gaze • Tap to blink"})]}),u.jsxs("div",{className:"w-full bg-[#11131a] rounded-2xl p-4 border border-white/10 text-left font-mono text-[11px] space-y-1.5 z-10",children:[u.jsxs("div",{className:"text-slate-400 flex justify-between items-center text-[10px]",children:[u.jsx("span",{children:"SERIAL READOUT:"}),u.jsx("span",{className:"text-emerald-400 font-mono",children:"115200 BAUD"})]}),u.jsx("div",{className:"text-white text-xs truncate font-medium",children:r==="custom"?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-orox-amber font-bold",children:"#CUSTOM"})," • ",Kl[l]," eyes • ",Zl[f]," mouth • ",Jl[h]]}):u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:"text-orox-amber font-bold",children:["#",x.index+1," ",x.name]})," | ",x.eyeName," eyes, ",x.mouthName," mouth, ",x.extraName]})}),u.jsx("div",{className:"text-[10px] text-slate-400",children:r==="custom"?"User-generated custom facial parameters.":x.description})]}),u.jsxs("div",{className:"w-full pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2 z-10",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{type:"button",onClick:g,className:"p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1 transition-all cursor-pointer font-bold",title:"Previous Face (Key: p)",children:[u.jsx(BS,{className:"w-4 h-4"}),u.jsx("span",{className:"hidden sm:inline",children:"PREV"})]}),u.jsxs("button",{type:"button",onClick:b,className:"p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1 transition-all cursor-pointer font-bold",title:"Next Face (Key: n)",children:[u.jsx("span",{className:"hidden sm:inline",children:"NEXT"}),u.jsx(xv,{className:"w-4 h-4"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{type:"button",onClick:d,className:"p-2.5 rounded-xl bg-orox-orange/20 border border-orox-orange/40 hover:bg-orox-orange/30 text-orox-amber font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold",title:"Random Expression (Key: r)",children:[u.jsx(nM,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"RANDOM"})]}),u.jsxs("button",{type:"button",onClick:v,className:`p-2.5 rounded-xl font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold ${n?"bg-emerald-500 text-black font-extrabold shadow-lg animate-pulse":"bg-white/10 hover:bg-white/20 text-white"}`,title:"Toggle Auto Cycle (Key: a)",children:[n?u.jsx(QS,{className:"w-3.5 h-3.5"}):u.jsx(Vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:n?"PAUSE":"AUTO"})]})]})]})]}),u.jsxs("div",{className:"lg:col-span-7 bg-[#12141c] p-6 sm:p-8 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"flex flex-wrap gap-1.5 p-1.5 bg-[#0a0b10] rounded-2xl border border-white/10 mb-5",children:[{id:"iconic",label:"Top 12",icon:u.jsx(ns,{className:"w-3 h-3"})},{id:"joy",label:"Joy & Love",icon:u.jsx($c,{className:"w-3 h-3"})},{id:"kawaii",label:"Kawaii :3",icon:u.jsx(kS,{className:"w-3 h-3"})},{id:"cyber",label:"Cyber",icon:u.jsx(Kf,{className:"w-3 h-3"})},{id:"chill",label:"Chill & Zzz",icon:u.jsx(Uv,{className:"w-3 h-3"})},{id:"all",label:"All 100",icon:u.jsx(XS,{className:"w-3 h-3"})},{id:"custom",label:"Mixer",icon:u.jsx(Im,{className:"w-3 h-3"})}].map(w=>u.jsxs("button",{type:"button",onClick:()=>{s(w.id),je.playClick()},className:`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer font-semibold ${r===w.id?"bg-gradient-to-r from-orox-orange to-amber-500 text-black font-extrabold shadow-md scale-[1.02]":"text-slate-400 hover:text-white"}`,children:[w.icon,u.jsx("span",{children:w.label})]},w.id))}),r!=="custom"&&u.jsxs("div",{className:"mb-5 bg-[#171923] p-3.5 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-300 mb-2 font-medium",children:[u.jsxs("span",{children:["EXPRESSION INDEX: #",t+1," / 100"]}),u.jsx("span",{className:"text-orox-amber font-bold",children:x.name})]}),u.jsx("input",{type:"range",min:"0",max:"99",value:t,onChange:w=>e(parseInt(w.target.value,10)),className:"w-full accent-[#FF7A00] cursor-pointer h-2 bg-[#0A0B0E] rounded-lg"})]}),r==="all"&&u.jsxs("div",{className:"relative mb-4",children:[u.jsx(tM,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-3"}),u.jsx("input",{type:"text",value:o,onChange:w=>a(w.target.value),placeholder:"Search by name (e.g. 'Mochi', 'Cosmic', 'Pixel') or # number...",className:"w-full bg-[#171923] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-orox-orange"})]}),r!=="custom"?u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1",children:_.map(w=>{const E=t===w.index;return u.jsxs("button",{type:"button",onClick:()=>y(w.index),className:`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-150 cursor-pointer ${E?"bg-orox-orange/20 border-orox-orange shadow-glow-orange scale-[1.02]":"bg-[#181a24] border-white/5 hover:bg-[#202230] hover:border-white/15"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("span",{className:"text-[10px] font-mono text-orox-amber font-bold",children:["#",w.index+1]}),u.jsx("div",{className:"w-12 h-8 rounded-lg bg-black/60 p-0.5 flex items-center justify-center overflow-hidden border border-white/10",children:u.jsx(Zh,{size:"sm",mochiFace:w,className:"scale-[0.45] origin-center"})})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-bold text-white truncate font-display",children:w.name}),u.jsxs("div",{className:"text-[10px] font-mono text-slate-400 truncate uppercase mt-0.5",children:[w.eyeName," • ",w.mouthName]})]})]},w.id)})}):u.jsxs("div",{className:"space-y-4 max-h-[400px] overflow-y-auto pr-1",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold",children:["1. Optical Eye Geometry (",Kl[l],"):"]}),u.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-5 gap-1.5",children:Kl.map((w,E)=>u.jsx("button",{type:"button",onClick:()=>{c(E),je.playChirp()},className:`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${l===E?"bg-orox-orange text-black font-extrabold shadow-sm":"bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5"}`,children:w},w))})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold",children:["2. Vocal Mouth Geometry (",Zl[f],"):"]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-1.5",children:Zl.map((w,E)=>u.jsx("button",{type:"button",onClick:()=>{p(E),je.playChirp()},className:`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${f===E?"bg-orox-orange text-black font-extrabold shadow-sm":"bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5"}`,children:w},w))})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold",children:["3. Particle Extras (",Jl[h],"):"]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:Jl.map((w,E)=>u.jsx("button",{type:"button",onClick:()=>{m(E),je.playChirp()},className:`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${h===E?"bg-orox-orange text-black font-extrabold shadow-sm":"bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5"}`,children:w},w))})]})]})]}),u.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 font-medium",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(FS,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"90HZ LOW-PERSISTENCE OLED GLASS"})]}),u.jsx("span",{className:"text-orox-amber font-bold",children:"100% PROTOCOL COMPATIBLE"})]})]})]})]})},cd=[{id:"studio",title:"Precision Physical Architecture",subtitle:"Industrial Design & Aesthetics",tag:"Hardware Spotlight",image:"/orox-robot-transparent.png",description:"Designed with a tactile matte graphite polycarbonate chassis and high-visibility acoustic orange ear speakers. Balanced to sit sturdily on any workspace without slipping.",bulletPoints:["Dual 360° directional sound chambers tuned for human vocal timbre","Matte soft-touch anodized exterior with zero fingerprint adhesion","Integrated quad-microphone beamforming array for crystal-clear pick up","Weighted silicone anti-slip base with magnetic Qi charging coils"]},{id:"desk",title:"The Ultimate Desk Co-Pilot",subtitle:"Daily Productivity & Deep Work",tag:"Workspace Lifestyle",image:"/orox-desk.jpg",description:"Place ORoX next to your laptop or workstation. Whether you need a pomodoro timer, instant code review sounding board, or gentle reminders, ORoX keeps your energy high.",bulletPoints:["Voice-activated pomodoro timers with subtle ambient chimes","Instant calendar briefing and meeting preparation notes","Acts as an interactive rubber-duck debugging sounding board","Distraction-free: No intrusive social feeds or popups"]},{id:"night",title:"Calm Evening & Bedside Serenity",subtitle:"Sleep Tracking & Morning Gentle Wake",tag:"Nightstand Mode",image:"/orox-night.jpg",description:"At night, ORoX enters ultra-dim nightstand mode. Enjoy soothing conversational sleep stories, binaural soundscapes, and gentle sunrise wake tones.",bulletPoints:["OLED eyes dim to 10% amber night-light glow to preserve circadian rhythms","Interactive bedtime storytelling & calming mindfulness breathing","Simulated acoustic sunrise wake-up melodies instead of jarring alarms","Mic auto-sleep mode ensures zero nocturnal processing"]}],IC=()=>{const[t,e]=ve.useState("studio"),n=cd.find(r=>r.id===t)||cd[0],i=r=>{e(r),je.playClick()};return u.jsxs("section",{id:"design",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",children:[u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(US,{className:"w-3.5 h-3.5 text-orox-orange animate-pulse"}),u.jsx("span",{children:"[ INDUSTRIAL DESIGN & LIFESTYLE SHOWCASE ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Crafted for Your Space. ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300",children:"Engineered to Perfection."})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"Explore ORoX in the studio and real environments. Every curve, acoustic speaker port, and glow line was purpose-built."}),u.jsx("div",{className:"mt-8 inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#14161E] border border-white/10 gap-1.5 sm:gap-2 max-w-full",children:cd.map(r=>u.jsx("button",{onClick:()=>i(r.id),className:`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${t===r.id?"bg-orox-orange text-black shadow-glow-orange":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:r.tag},r.id))})]}),u.jsxs("div",{className:"bg-glass-card rounded-3xl border border-white/10 shadow-glass overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto",children:[u.jsxs("div",{className:"lg:col-span-7 relative bg-[#090A0D] min-h-[280px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center overflow-hidden group",children:[u.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-contain p-4 sm:p-8 transition-transform duration-700 group-hover:scale-105"}),u.jsxs("div",{className:"absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-orox-orange animate-pulse"}),u.jsx("span",{children:"ORoX Prototype • Real Scale"})]})]}),u.jsxs("div",{className:"lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center bg-[#101218]",children:[u.jsx("div",{className:"text-xs font-mono uppercase tracking-wider text-orox-amber font-semibold mb-2",children:n.subtitle}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-4 font-display",children:n.title}),u.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-6",children:n.description}),u.jsx("div",{className:"space-y-3 pt-4 border-t border-white/10",children:n.bulletPoints.map((r,s)=>u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"w-5 h-5 rounded-full bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0 mt-0.5",children:u.jsx(xv,{className:"w-3.5 h-3.5 text-orox-orange"})}),u.jsx("span",{className:"text-xs sm:text-sm text-slate-300",children:r})]},s))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[u.jsx($f,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Certified Acoustic Chambers"})]}),u.jsx("a",{href:"#suggestion",className:"text-xs font-mono font-semibold text-orox-amber hover:text-white underline underline-offset-4 transition-colors",children:"Grab Your Robot →"})]})]})]})]})},UC=()=>u.jsxs("section",{id:"features",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",children:[u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(ns,{className:"w-3.5 h-3.5 text-orox-orange animate-pulse"}),u.jsx("span",{children:"[ HARDWARE & AI INNOVATION ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Engineered to Speak. ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300",children:"Built to Truly Connect."})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"ORoX combines cutting-edge edge-AI compute, 4–5 hour active battery life, and friendly emotive OLED mechanics."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:[u.jsxs("div",{className:"md:col-span-2 bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300",children:[u.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-orox-orange/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-orox-orange/20 transition-all duration-500"}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6 shadow-glow-orange",children:u.jsx(Kf,{className:"w-6 h-6"})}),u.jsx("div",{className:"inline-block text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2",children:"Ultra-Low Latency Speech"}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-3 font-display",children:"Under 180ms Conversational Latency"}),u.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl",children:"No robotic 3-second thinking pauses. ORoX streams voice tokens immediately, allowing natural interruptions, banter, and fluid back-and-forth dialogue just like talking to a friend beside you."}),u.jsxs("div",{className:"bg-[#0C0D12] p-4 rounded-2xl border border-white/5 space-y-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[u.jsxs("span",{className:"text-white font-semibold flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-orox-orange animate-ping"}),"ORoX Neural Speech Pipeline"]}),u.jsx("span",{className:"text-orox-amber font-bold",children:"178 ms (Natural)"})]}),u.jsx("div",{className:"w-full h-2.5 bg-white/5 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-orox-orange to-amber-400 w-[18%] rounded-full shadow-[0_0_8px_#FF7A00]"})})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-500 mb-1",children:[u.jsx("span",{children:"Standard Cloud Voice Assistants"}),u.jsx("span",{children:"1,850 ms (Awkward Lag)"})]}),u.jsx("div",{className:"w-full h-2 bg-white/5 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-slate-600 w-[85%] rounded-full opacity-40"})})]})]})]}),u.jsxs("div",{className:"bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6",children:u.jsx(io,{className:"w-6 h-6"})}),u.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2",children:"Acoustic Resonance"}),u.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-3 font-display",children:"Tangerine 360° Ear Monitors"}),u.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:"The high-visibility orange side capsules aren't just for looks. They house custom dual-cone dynamic drivers calibrated for warm, crisp voice fidelity."})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400",children:[u.jsx("span",{children:"Range: 60Hz - 22kHz"}),u.jsx("span",{className:"text-orox-amber font-semibold",children:"Lossless Clarity"})]})]}),u.jsxs("div",{className:"bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6",children:u.jsx($S,{className:"w-6 h-6"})}),u.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2",children:"Hardware Killswitch"}),u.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-3 font-display",children:"Physical Privacy Sentinel"}),u.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:"Never worry about hidden eavesdropping. A mechanical tactile switch physically cuts power to the microphone array with LED confirmation."})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400",children:[u.jsx(Yf,{className:"w-4 h-4"}),u.jsx("span",{children:"Zero Audio Storage Guarantee"})]})]}),u.jsxs("div",{className:"bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6",children:u.jsx(WS,{className:"w-6 h-6"})}),u.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2",children:"Continuous Empathy"}),u.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-3 font-display",children:"Adaptive Memory & Humor"}),u.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:"ORoX remembers your work projects, hobbies, and sense of humor. Over days and months, conversations evolve into an authentic friendship."})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400",children:[u.jsx("span",{children:"Local Encrypted Graph"}),u.jsx("span",{className:"text-orox-amber",children:"Personalized"})]})]}),u.jsxs("div",{className:"bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-6 shadow-glow-orange",children:u.jsx(cv,{className:"w-6 h-6"})}),u.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2",children:"DESK + MOBILE BACKUP"}),u.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-3 font-display",children:"4–5 Hour Battery + Qi Dock"}),u.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:"Enjoy 4–5 hours of active conversational companion playtime on the go. When at your workstation, simply set ORoX onto its sleek magnetic 15W Qi charging pad for seamless 24/7 continuous desk presence."})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400",children:[u.jsx("span",{children:"Fast Charge 0-80%: 30m"}),u.jsx("span",{className:"text-amber-400 font-semibold font-mono text-[11px]",children:"24/7 QI DESK STANDBY"})]})]})]})]});var gp={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),A=R.getContext("2d");A.fillRect(0,0,1,1);var K=R.transferToImageBitmap();A.createPattern(K,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var A=n.exports.Promise,K=A!==void 0?A:e.Promise;return typeof K=="function"?new K(R):(R(l,l),null)}var f=function(R,A){return{transform:function(K){if(R)return K;if(A.has(K))return A.get(K);var te=new OffscreenCanvas(K.width,K.height),me=te.getContext("2d");return me.drawImage(K,0,0),A.set(K,te),te},clear:function(){A.clear()}}}(a,new Map),p=function(){var R=Math.floor(16.666666666666668),A,K,te={},me=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(de){var le=Math.random();return te[le]=requestAnimationFrame(function O(Y){me===Y||me+R-1<Y?(me=Y,delete te[le],de()):te[le]=requestAnimationFrame(O)}),le},K=function(de){te[de]&&cancelAnimationFrame(te[de])}):(A=function(de){return setTimeout(de,R)},K=function(de){return clearTimeout(de)}),{frame:A,cancel:K}}(),h=function(){var R,A,K={};function te(me){function de(le,O){me.postMessage({options:le||{},callback:O})}me.init=function(O){var Y=O.transferControlToOffscreen();me.postMessage({canvas:Y},[Y])},me.fire=function(O,Y,ae){if(A)return de(O,null),A;var Te=Math.random().toString(36).slice(2);return A=c(function(pe){function Ae(Xe){Xe.data.callback===Te&&(delete K[Te],me.removeEventListener("message",Ae),A=null,f.clear(),ae(),pe())}me.addEventListener("message",Ae),de(O,Te),K[Te]=Ae.bind(null,{data:{callback:Te}})}),A},me.reset=function(){me.postMessage({reset:!0});for(var O in K)K[O](),delete K[O]}}return function(){if(R)return R;if(!i&&s){var me=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([me])))}catch(de){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",de),null}te(R)}return R}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(R,A){return A?A(R):R}function b(R){return R!=null}function g(R,A,K){return x(R&&b(R[A])?R[A]:m[A],K)}function d(R){return R<0?0:Math.floor(R)}function v(R,A){return Math.floor(Math.random()*(A-R))+R}function y(R){return parseInt(R,16)}function _(R){return R.map(w)}function w(R){var A=String(R).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:y(A.substring(0,2)),g:y(A.substring(2,4)),b:y(A.substring(4,6))}}function E(R){var A=g(R,"origin",Object);return A.x=g(A,"x",Number),A.y=g(A,"y",Number),A}function N(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function S(R){var A=R.getBoundingClientRect();R.width=A.width,R.height=A.height}function C(R){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=R,A}function L(R,A,K,te,me,de,le,O,Y){R.save(),R.translate(A,K),R.rotate(de),R.scale(te,me),R.arc(0,0,1,le,O,Y),R.restore()}function I(R){var A=R.angle*(Math.PI/180),K=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-A+(.5*K-Math.random()*K),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function D(R,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var K=A.tick++/A.totalTicks,te=A.x+A.random*A.tiltCos,me=A.y+A.random*A.tiltSin,de=A.wobbleX+A.random*A.tiltCos,le=A.wobbleY+A.random*A.tiltSin;if(R.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-K)+")",R.beginPath(),o&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))R.fill(ee(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(de-te)*.1,Math.abs(le-me)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var O=Math.PI/10*A.wobble,Y=Math.abs(de-te)*.1,ae=Math.abs(le-me)*.1,Te=A.shape.bitmap.width*A.scalar,pe=A.shape.bitmap.height*A.scalar,Ae=new DOMMatrix([Math.cos(O)*Y,Math.sin(O)*Y,-Math.sin(O)*ae,Math.cos(O)*ae,A.x,A.y]);Ae.multiplySelf(new DOMMatrix(A.shape.matrix));var Xe=R.createPattern(f.transform(A.shape.bitmap),"no-repeat");Xe.setTransform(Ae),R.globalAlpha=1-K,R.fillStyle=Xe,R.fillRect(A.x-Te/2,A.y-pe/2,Te,pe),R.globalAlpha=1}else if(A.shape==="circle")R.ellipse?R.ellipse(A.x,A.y,Math.abs(de-te)*A.ovalScalar,Math.abs(le-me)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):L(R,A.x,A.y,Math.abs(de-te)*A.ovalScalar,Math.abs(le-me)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var J=Math.PI/2*3,oe=4*A.scalar,he=8*A.scalar,ue=A.x,fe=A.y,ze=5,Ue=Math.PI/ze;ze--;)ue=A.x+Math.cos(J)*he,fe=A.y+Math.sin(J)*he,R.lineTo(ue,fe),J+=Ue,ue=A.x+Math.cos(J)*oe,fe=A.y+Math.sin(J)*oe,R.lineTo(ue,fe),J+=Ue;else R.moveTo(Math.floor(A.x),Math.floor(A.y)),R.lineTo(Math.floor(A.wobbleX),Math.floor(me)),R.lineTo(Math.floor(de),Math.floor(le)),R.lineTo(Math.floor(te),Math.floor(A.wobbleY));return R.closePath(),R.fill(),A.tick<A.totalTicks}function V(R,A,K,te,me){var de=A.slice(),le=R.getContext("2d"),O,Y,ae=c(function(Te){function pe(){O=Y=null,le.clearRect(0,0,te.width,te.height),f.clear(),me(),Te()}function Ae(){i&&!(te.width===r.width&&te.height===r.height)&&(te.width=R.width=r.width,te.height=R.height=r.height),!te.width&&!te.height&&(K(R),te.width=R.width,te.height=R.height),le.clearRect(0,0,te.width,te.height),de=de.filter(function(Xe){return D(le,Xe)}),de.length?O=p.frame(Ae):pe()}O=p.frame(Ae),Y=pe});return{addFettis:function(Te){return de=de.concat(Te),ae},canvas:R,promise:ae,reset:function(){O&&p.cancel(O),Y&&Y()}}}function U(R,A){var K=!R,te=!!g(A||{},"resize"),me=!1,de=g(A,"disableForReducedMotion",Boolean),le=s&&!!g(A||{},"useWorker"),O=le?h():null,Y=K?N:S,ae=R&&O?!!R.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,pe;function Ae(J,oe,he){for(var ue=g(J,"particleCount",d),fe=g(J,"angle",Number),ze=g(J,"spread",Number),Ue=g(J,"startVelocity",Number),qe=g(J,"decay",Number),Ke=g(J,"gravity",Number),k=g(J,"drift",Number),ut=g(J,"colors",_),nt=g(J,"ticks",Number),P=g(J,"shapes"),M=g(J,"scalar"),W=!!g(J,"flat"),Z=E(J),ne=ue,ge=[],ye=R.width*Z.x,ie=R.height*Z.y;ne--;)ge.push(I({x:ye,y:ie,angle:fe,spread:ze,startVelocity:Ue,color:ut[ne%ut.length],shape:P[v(0,P.length)],ticks:nt,decay:qe,gravity:Ke,drift:k,scalar:M,flat:W}));return pe?pe.addFettis(ge):(pe=V(R,ge,Y,oe,he),pe.promise)}function Xe(J){var oe=de||g(J,"disableForReducedMotion",Boolean),he=g(J,"zIndex",Number);if(oe&&Te)return c(function(Ue){Ue()});K&&pe?R=pe.canvas:K&&!R&&(R=C(he),document.body.appendChild(R)),te&&!ae&&Y(R);var ue={width:R.width,height:R.height};O&&!ae&&O.init(R),ae=!0,O&&(R.__confetti_initialized=!0);function fe(){if(O){var Ue={getBoundingClientRect:function(){if(!K)return R.getBoundingClientRect()}};Y(Ue),O.postMessage({resize:{width:Ue.width,height:Ue.height}});return}ue.width=ue.height=null}function ze(){pe=null,te&&(me=!1,e.removeEventListener("resize",fe)),K&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,ae=!1)}return te&&!me&&(me=!0,e.addEventListener("resize",fe,!1)),O?O.fire(J,ue,ze):Ae(J,ue,ze)}return Xe.reset=function(){O&&O.reset(),pe&&pe.reset()},Xe}var j;function Q(){return j||(j=U(null,{useWorker:!0,resize:!0})),j}function ee(R,A,K,te,me,de,le){var O=new Path2D(R),Y=new Path2D;Y.addPath(O,new DOMMatrix(A));var ae=new Path2D;return ae.addPath(Y,new DOMMatrix([Math.cos(le)*me,Math.sin(le)*me,-Math.sin(le)*de,Math.cos(le)*de,K,te])),ae}function $(R){if(!o)throw new Error("path confetti are not supported in this browser");var A,K;typeof R=="string"?A=R:(A=R.path,K=R.matrix);var te=new Path2D(A),me=document.createElement("canvas"),de=me.getContext("2d");if(!K){for(var le=1e3,O=le,Y=le,ae=0,Te=0,pe,Ae,Xe=0;Xe<le;Xe+=2)for(var J=0;J<le;J+=2)de.isPointInPath(te,Xe,J,"nonzero")&&(O=Math.min(O,Xe),Y=Math.min(Y,J),ae=Math.max(ae,Xe),Te=Math.max(Te,J));pe=ae-O,Ae=Te-Y;var oe=10,he=Math.min(oe/pe,oe/Ae);K=[he,0,0,he,-Math.round(pe/2+O)*he,-Math.round(Ae/2+Y)*he]}return{type:"path",path:A,matrix:K}}function z(R){var A,K=1,te="#000000",me='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?A=R:(A=R.text,K="scalar"in R?R.scalar:K,me="fontFamily"in R?R.fontFamily:me,te="color"in R?R.color:te);var de=10*K,le=""+de+"px "+me,O=new OffscreenCanvas(de,de),Y=O.getContext("2d");Y.font=le;var ae=Y.measureText(A),Te=Math.ceil(ae.actualBoundingBoxRight+ae.actualBoundingBoxLeft),pe=Math.ceil(ae.actualBoundingBoxAscent+ae.actualBoundingBoxDescent),Ae=2,Xe=ae.actualBoundingBoxLeft+Ae,J=ae.actualBoundingBoxAscent+Ae;Te+=Ae+Ae,pe+=Ae+Ae,O=new OffscreenCanvas(Te,pe),Y=O.getContext("2d"),Y.font=le,Y.fillStyle=te,Y.fillText(A,Xe,J);var oe=1/K;return{type:"bitmap",bitmap:O.transferToImageBitmap(),matrix:[oe,0,0,oe,-Te*oe/2,-pe*oe/2]}}n.exports=function(){return Q().apply(this,arguments)},n.exports.reset=function(){Q().reset()},n.exports.create=U,n.exports.shapeFromPath=$,n.exports.shapeFromText=z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),gp,!1);const G0=gp.exports;gp.exports.create;const kC=[{id:"1",category:"body",categoryLabel:"Action Figure Body",title:"Goku Super Saiyan Armor Body",description:"Orange martial arts gi body with glowing golden aura energy ring and weighted boots.",upvotes:428,status:"In Engineering"},{id:"2",category:"voice",categoryLabel:"Cute Voice & Persona",title:"Playful Chibi Anime Robot Voice",description:`High-pitched cheerful chirps and cute morning wake-up lines like "Ohayo! Let's build something cool today!"`,upvotes:562,status:"Community Favorite"},{id:"3",category:"hardware",categoryLabel:"Desk Hardware",title:"MagSafe Angled Desk Stand with Clock Mode",description:"Magnetic desk dock that tilts ORoX at a 45-degree angle so the OLED face functions as a glanceable desktop clock.",upvotes:315,status:"In Engineering"},{id:"4",category:"body",categoryLabel:"Action Figure Body",title:"Batman Tactical Knight Armor",description:"Matte black Kevlar body plating with utility belt and tiny bat wing ear fins.",upvotes:289,status:"Under Review"},{id:"5",category:"ai",categoryLabel:"AI Skills",title:"Spotify Audio Reactive Dance Sync",description:"Real-time beat matching where ORoX bobs its squircle head and pulses its acoustic ears to your music.",upvotes:491,status:"Community Favorite"}],j0=[{id:"body",label:"Action Figure Body",icon:"🎭"},{id:"voice",label:"Cute Voice & Persona",icon:"🗣️"},{id:"hardware",label:"Desk Hardware",icon:"⚡"},{id:"ai",label:"AI Skills & Routines",icon:"🧠"}],FC=[{text:"Dragon Ball Goku Body",cat:"body"},{text:"Cute Japanese Chibi Voice",cat:"voice"},{text:"Desktop Nightstand Clock Stand",cat:"hardware"},{text:"Naruto Sage Mode Kimono",cat:"body"},{text:"Beat-Matched Dance Routine",cat:"ai"}],OC=({preselectedTheme:t})=>{const[e,n]=ve.useState("body"),[i,r]=ve.useState(""),[s,o]=ve.useState(""),[a,l]=ve.useState(""),[c,f]=ve.useState(kC),[p,h]=ve.useState(new Set),[m,x]=ve.useState(!1),[b,g]=ve.useState(!1),[d,v]=ve.useState(""),[y,_]=ve.useState(!1),[w,E]=ve.useState(!1),N=t||Ra[0],S=D=>{je.playChirp(),f(V=>V.map(U=>{if(U.id===D){const j=p.has(D),Q=new Set(p);return j?(Q.delete(D),{...U,upvotes:U.upvotes-1}):(Q.add(D),{...U,upvotes:U.upvotes+1})}return U})),h(V=>{const U=new Set(V);return U.has(D)?U.delete(D):U.add(D),U})},C=(D,V)=>{je.playClick(),n(V),l(U=>U?`${U}, ${D}`:D)},L=async D=>{var j;if(D.preventDefault(),!a.trim()||b)return;g(!0),je.playGreeting();const V=((j=j0.find(Q=>Q.id===e))==null?void 0:j.label)||"Community Suggestion";try{await fetch("https://formsubmit.co/ajax/oroxrobot@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`New ORoX Robot Suggestion [${V}]: ${i||"Community Member"}`,name:i||"Anonymous Community Member",contact:s||"Not provided",category:V,suggestion:a,selectedRobotEdition:N.name,submittedAt:new Date().toLocaleString()})})}catch(Q){console.log("Suggestion mail submission processed",Q)}try{G0({particleCount:50,spread:60,origin:{y:.7},colors:["#FF7A00","#FFA033","#FFD54F","#00f0ff"]})}catch{}const U={id:String(Date.now()),category:e,categoryLabel:V,title:i?`${i}'s Idea`:"New Community Suggestion",description:a,upvotes:1,status:"Under Review"};f([U,...c]),x(!0),g(!1),je.speak("Beep boop! Thank you for the awesome suggestion! It has been dispatched directly to oroxrobot@gmail.com and our engineering team.",()=>{},()=>{})},I=async D=>{if(D.preventDefault(),!(!d.trim()||w)){E(!0),je.playGreeting();try{await fetch("https://formsubmit.co/ajax/oroxrobot@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`New ORoX Priority Robot Request: ${d}`,email:d,themeInterest:N.name,submittedAt:new Date().toLocaleString()})})}catch(V){console.log("Waitlist mail submission processed",V)}try{G0({particleCount:80,spread:70,origin:{y:.6},colors:["#FF7A00","#FFA033","#FFD54F"]})}catch{}E(!1),_(!0)}};return u.jsxs("section",{id:"suggestion",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[200px] pointer-events-none transition-all duration-700 opacity-20",style:{backgroundColor:N.accentHex}}),u.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(KS,{className:"w-3.5 h-3.5 text-orox-orange animate-pulse"}),u.jsx("span",{children:"[ COMMUNITY LAB & SUGGESTION BOX ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Shape the Future of ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text transition-all duration-500",style:{backgroundImage:`linear-gradient(to right, ${N.accentHex}, #FFA033, #FFD54F)`},children:"ORoX Companion Robots."})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed",children:"What action figure bodies, cute voice personas, or desk accessories should we build next? Drop your ideas directly to our engineers or upvote community concepts below!"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto relative z-10",children:[u.jsx("div",{className:"lg:col-span-6 bg-glass-card rounded-[2rem] p-6 sm:p-8 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col justify-between",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(qS,{className:"w-5 h-5 text-orox-orange"}),u.jsx("h3",{className:"text-lg font-bold text-white font-display",children:"Drop a Suggestion"})]}),u.jsx("span",{className:"text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber uppercase font-semibold",children:"Open to Everyone"})]}),u.jsxs("div",{className:"mb-5",children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold",children:"1. Select Category:"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:j0.map(D=>u.jsxs("button",{type:"button",onClick:()=>{n(D.id),je.playClick()},className:`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all cursor-pointer ${e===D.id?"bg-orox-orange/25 border-orox-orange text-white shadow-glow-orange font-bold":"bg-[#14161E] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"}`,children:[u.jsx("span",{className:"text-base",children:D.icon}),u.jsx("span",{className:"truncate",children:D.label})]},D.id))})]}),u.jsxs("div",{className:"mb-5",children:[u.jsx("span",{className:"text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wide",children:"Quick ideas from community:"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:FC.map((D,V)=>u.jsxs("button",{type:"button",onClick:()=>C(D.text,D.cat),className:"px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] text-slate-300 hover:text-orox-amber transition-colors cursor-pointer",children:["+ ",D.text]},V))})]}),u.jsxs("form",{onSubmit:L,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold",children:"2. Your Name (Optional):"}),u.jsx("input",{type:"text",value:i,onChange:D=>r(D.target.value),placeholder:"e.g. Alex, CyberFan",className:"w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold",children:"Contact Email/Phone:"}),u.jsx("input",{type:"text",value:s,onChange:D=>o(D.target.value),placeholder:"e.g. you@gmail.com / phone",className:"w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold",children:"3. Your Suggestion Idea:"}),u.jsx("textarea",{rows:4,value:a,onChange:D=>l(D.target.value),placeholder:"Describe your character body design, voice lines, or hardware accessory...",className:"w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none"})]}),u.jsx("button",{type:"submit",disabled:!a.trim()||b,className:"w-full py-4 rounded-xl btn-attractive-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-40 transition-all",children:b?u.jsxs(u.Fragment,{children:[u.jsx(ih,{className:"w-4 h-4 text-black animate-spin"}),u.jsx("span",{children:"DISPATCHING TO OROXROBOT@GMAIL.COM..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Xv,{className:"w-4 h-4 text-black"}),u.jsx("span",{children:"SUBMIT SUGGESTION TO LAB"})]})}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 pt-1",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(Hl,{className:"w-3.5 h-3.5 text-orox-orange"}),u.jsxs("span",{children:["Delivers directly to: ",u.jsx("strong",{className:"text-white",children:"oroxrobot@gmail.com"})]})]}),u.jsx("a",{href:`mailto:oroxrobot@gmail.com?subject=ORoX%20Suggestion%20[${encodeURIComponent(e)}]&body=Hi%20ORoX%20Team,%0D%0A%0D%0AMy%20suggestion%20is:%0D%0A${encodeURIComponent(a||"My idea is...")}`,className:"text-orox-amber hover:underline shrink-0",children:"Send via Mail App →"})]}),m&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2 animate-fade-in font-medium",children:[u.jsx(Lm,{className:"w-4 h-4 shrink-0"}),u.jsxs("span",{children:["Your suggestion has been dispatched to ",u.jsx("strong",{className:"text-white underline",children:"oroxrobot@gmail.com"})," and added to the community voting pool!"]})]})]})]})}),u.jsxs("div",{className:"lg:col-span-6 bg-glass-card rounded-[2rem] p-6 sm:p-8 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx($c,{className:"w-5 h-5 text-rose-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-display",children:"Community Top Ideas"})]}),u.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:[c.length," Active Ideas"]})]}),u.jsx("div",{className:"space-y-3 max-h-[460px] overflow-y-auto pr-1 no-scrollbar",children:c.map(D=>{const V=p.has(D.id);return u.jsxs("div",{className:"p-4 rounded-2xl bg-[#11131A] border border-white/10 hover:border-white/20 transition-all flex items-start justify-between gap-4",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-semibold uppercase",children:D.categoryLabel}),u.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${D.status==="In Engineering"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":D.status==="Community Favorite"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"bg-white/5 text-slate-400"}`,children:D.status})]}),u.jsx("h4",{className:"text-sm font-bold text-white font-display mb-1",children:D.title}),u.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:D.description})]}),u.jsxs("button",{type:"button",onClick:()=>S(D.id),className:`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer shrink-0 min-w-[54px] ${V?"bg-rose-500/25 border-rose-500 text-rose-300 font-bold scale-105 shadow-md":"bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"}`,title:V?"Remove Upvote":"Upvote this idea",children:[u.jsx(iM,{className:`w-4 h-4 ${V?"fill-rose-400 text-rose-400":""}`}),u.jsx("span",{className:"text-xs font-mono font-bold",children:D.upvotes})]})]},D.id)})})]}),u.jsx("div",{className:"mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 text-center",children:"★ Engineers review top 5 ideas weekly for 3D modeling and prototyping"})]})]}),u.jsx("div",{className:"mt-10 max-w-6xl mx-auto relative z-10",children:u.jsxs("div",{className:"p-5 sm:p-6 rounded-3xl bg-[#12141C] border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5",children:[u.jsxs("div",{className:"flex items-center gap-3.5 text-left",children:[u.jsx("div",{className:"w-11 h-11 rounded-2xl bg-orox-orange/20 border border-orox-orange/40 flex items-center justify-center text-orox-orange shrink-0 shadow-glow-orange",children:u.jsx(Hl,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-sm font-bold text-white font-display",children:"Direct Engineering & Feedback Contact"}),u.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Have custom ideas, partnership proposals, or urgent questions? Reach our team directly."})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 w-full md:w-auto",children:[u.jsxs("a",{href:"mailto:oroxrobot@gmail.com",className:"px-4 py-2.5 rounded-xl bg-white/5 hover:bg-orox-orange/20 border border-white/10 hover:border-orox-orange/50 text-white hover:text-orox-amber transition-all flex items-center gap-2 font-mono text-xs cursor-pointer",title:"Email oroxrobot@gmail.com",children:[u.jsx(Hl,{className:"w-4 h-4 text-orox-orange"}),u.jsx("span",{children:"oroxrobot@gmail.com"})]}),u.jsxs("a",{href:"tel:01763609992",className:"px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 font-mono text-xs cursor-pointer",title:"Call 01763609992",children:[u.jsx(wc,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"01763609992"})]}),u.jsxs("a",{href:"tel:01939161125",className:"px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 font-mono text-xs cursor-pointer",title:"Call 01939161125",children:[u.jsx(wc,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"01939161125"})]})]})]})}),u.jsx("div",{className:"mt-12 sm:mt-14 max-w-4xl mx-auto relative z-10",children:u.jsxs("div",{className:"bg-gradient-to-r from-[#171924] via-[#1c1f2c] to-[#171924] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-center relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orox-orange/10 rounded-full blur-[90px] pointer-events-none"}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mx-auto mb-4 shadow-glow-orange",children:u.jsx(dv,{className:"w-6 h-6"})}),u.jsx("h3",{className:"text-2xl sm:text-4xl font-black text-white font-display mb-3",children:"Grab Your First Personal AI Robot."}),u.jsx("p",{className:"text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-6 leading-relaxed",children:"Be the very first to welcome ORoX to your desk when production ships. Receive release alerts, special pricing, and first access to new action figure armor drops!"}),y?u.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm max-w-md mx-auto flex items-center justify-center gap-2 font-medium",children:[u.jsx(Lm,{className:"w-5 h-5 shrink-0"}),u.jsxs("span",{children:["You're on the priority list! We'll alert you at ",d," the instant ORoX drops."]})]}):u.jsxs("form",{onSubmit:I,className:"flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto",children:[u.jsx("input",{type:"email",required:!0,value:d,onChange:D=>v(D.target.value),placeholder:"Enter your email address...",className:"w-full bg-[#0E1017] border border-white/15 focus:border-orox-orange rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all min-h-[48px]"}),u.jsx("button",{type:"submit",disabled:w,className:"w-full sm:w-auto px-6 py-3.5 rounded-2xl btn-attractive-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg min-h-[48px] disabled:opacity-50",children:w?u.jsxs(u.Fragment,{children:[u.jsx(ih,{className:"w-4 h-4 text-black animate-spin"}),u.jsx("span",{children:"SAVING..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(ns,{className:"w-4 h-4 text-black shrink-0"}),u.jsx("span",{children:"GRAB YOUR ROBOT"}),u.jsx(qf,{className:"w-4 h-4 text-black shrink-0"})]})})]}),u.jsxs("div",{className:"mt-4 flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(Yf,{className:"w-3.5 h-3.5 text-emerald-400"}),"No Spam Ever"]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Unsubscribe Anytime"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"100% Free Notification"})]})]})})]})},BC=[{q:"When will ORoX officially ship?",a:"We are currently finalizing tooling and compliance testing. Pre-orders open in Q3 2026, with initial fulfillment starting in Q4 2026. Early supporters receive priority access to grab their personal AI robot with exclusive launch pricing."},{q:"Does ORoX require a mandatory monthly subscription?",a:"No! ORoX includes lifetime access to our core on-device voice companion, conversational memory, alarms, timers, and offline abilities for free. An optional Pro tier ($4.99/mo) will be available later for advanced multi-device syncing and custom third-party API integrations, but the robot is 100% usable right out of the box with zero subscription."},{q:"How does ORoX converse with almost zero latency?",a:"ORoX utilizes a dual-tier neural architecture: lightweight wake-word and acoustic processing happen instantaneously on its dedicated on-device Edge NPU coprocessor, while streaming conversational tokens are transferred over low-latency neural pipelines, achieving a conversational response time under 180ms."},{q:"How does the hardware privacy kill switch work?",a:'Unlike software "mute" buttons that simply tell the operating system to ignore audio, ORoX features a physical mechanical disconnect switch that breaks the electrical circuit directly between the power rail and the microphone sensors. When engaged, a bright hardware LED confirms zero electrical signal can reach the microphones.'},{q:"Can ORoX operate while disconnected from Wi-Fi?",a:"Yes. In offline mode, ORoX can tell time, run pomodoro timers, play local acoustic white noise, express emotional reactions to touch, and run local voice commands. Full conversational banter and web knowledge lookup require a 2.4/5GHz Wi-Fi connection."},{q:"How long does the battery last and how does charging work?",a:"ORoX features a high-density lithium cell providing 4–5 hours of continuous active conversational dialogue and movement away from power. Every ORoX includes our sleek 15W Magnetic Qi Wireless Charging Dock — simply place ORoX on the dock at your desk or nightstand for uninterrupted 24/7 companion presence."},{q:"Can I swap the body armor with Action Figure characters?",a:"Yes! The Action Figure Special Editions feature a modular quick-release chassis architecture. You can easily snap on custom character bodies (Spider-Hero, Sukuna Cursed Kimono, Deadpool Merc Armor, Lofi Cozy Hoodie, Iron Cyber Titanium) while keeping the same iconic ORoX squircle head and glowing OLED screen!"},{q:"What is included in the box with my robot?",a:"Every ORoX includes: The ORoX AI Robot, 15W Magnetic Fast Qi Charging Dock, Braided USB-C Power Cable (1.8m), Quickstart Guide, and an exclusive Collector Certificate with your device serial number."}],zC=()=>{const[t,e]=ve.useState(0),n=i=>{je.playClick(),e(t===i?null:i)};return u.jsxs("section",{id:"faq",className:"py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange",children:[u.jsx(zS,{className:"w-3.5 h-3.5 text-orox-orange animate-pulse"}),u.jsx("span",{children:"[ COMMUNITY QUESTIONS & COMPANION SPECS ]"})]}),u.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display",children:["Frequently Asked ",u.jsx("br",{className:"hidden sm:inline"}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300",children:"Questions."})]}),u.jsx("p",{className:"text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed",children:"Everything you need to know about the ORoX companion robot, 4–5 hour battery backup, action figure editions, and launch timeline."})]}),u.jsx("div",{className:"space-y-4",children:BC.map((i,r)=>{const s=t===r;return u.jsxs("div",{className:"bg-glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200",children:[u.jsxs("button",{onClick:()=>n(r),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors min-h-[56px]",children:[u.jsx("span",{className:"text-base sm:text-lg font-bold text-white font-display",children:i.q}),u.jsx("span",{className:`p-2 rounded-xl bg-white/5 text-orox-orange transition-transform duration-200 shrink-0 ${s?"rotate-180 bg-orox-orange/20":""}`,children:u.jsx(OS,{className:"w-4 h-4"})})]}),s&&u.jsx("div",{className:"px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 animate-fade-in",children:i.a})]},r)})})]})},VC=()=>{const t=()=>{je.playChirp(),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs("footer",{className:"border-t border-white/10 bg-[#08090C] py-16 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 mb-12",children:[u.jsxs("div",{className:"md:col-span-4",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#14161E] border-2 border-orox-orange flex items-center justify-center shadow-glow-orange",children:u.jsxs("div",{className:"flex gap-1",children:[u.jsx("span",{className:"w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow"}),u.jsx("span",{className:"w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow"})]})}),u.jsx("span",{className:"text-xl font-extrabold text-white font-display tracking-tight",children:"ORoX"}),u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/30 text-orox-amber font-semibold",children:"COMING SOON"})]}),u.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-5",children:"The intelligent conversational companion robot. Crafted with warm acoustics, glowing emotive eyes, and sub-180ms neural voice responses."}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),u.jsx("span",{children:"Tooling & Prototyping Phase • Shipping Q4 2026"})]})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4",children:"Navigation"}),u.jsxs("ul",{className:"space-y-2.5 text-xs sm:text-sm",children:[u.jsx("li",{children:u.jsx("a",{href:"#customizer",className:"hover:text-orox-amber transition-colors",children:"3D Themes"})}),u.jsx("li",{children:u.jsx("a",{href:"#simulator",className:"hover:text-orox-amber transition-colors",children:"Voice Demo"})}),u.jsx("li",{children:u.jsx("a",{href:"#emotions",className:"hover:text-orox-amber transition-colors",children:"Face Studio"})}),u.jsx("li",{children:u.jsx("a",{href:"#design",className:"hover:text-orox-amber transition-colors",children:"Design & Build"})}),u.jsx("li",{children:u.jsx("a",{href:"#features",className:"hover:text-orox-amber transition-colors",children:"Tech Pillars"})}),u.jsx("li",{children:u.jsx("a",{href:"#suggestion",className:"hover:text-orox-amber transition-colors",children:"Suggestions"})})]})]}),u.jsxs("div",{className:"md:col-span-3",children:[u.jsxs("h4",{className:"text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4 flex items-center gap-2",children:[u.jsx(jS,{className:"w-3.5 h-3.5 text-orox-orange"}),u.jsx("span",{children:"Contact & Support"})]}),u.jsxs("ul",{className:"space-y-3 text-xs sm:text-sm",children:[u.jsxs("li",{children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5",children:"Official Email"}),u.jsxs("a",{href:"mailto:oroxrobot@gmail.com",className:"text-white hover:text-orox-amber transition-colors flex items-center gap-2 group font-medium",title:"Send email to oroxrobot@gmail.com",children:[u.jsx(Hl,{className:"w-4 h-4 text-orox-orange group-hover:scale-110 transition-transform shrink-0"}),u.jsx("span",{className:"break-all font-mono",children:"oroxrobot@gmail.com"})]})]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5",children:"Hotline & WhatsApp"}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("a",{href:"tel:01763609992",className:"text-slate-200 hover:text-orox-amber transition-colors flex items-center gap-2 group font-mono",title:"Call 01763609992",children:[u.jsx(wc,{className:"w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0"}),u.jsx("span",{children:"01763609992"})]}),u.jsxs("a",{href:"tel:01939161125",className:"text-slate-200 hover:text-orox-amber transition-colors flex items-center gap-2 group font-mono",title:"Call 01939161125",children:[u.jsx(wc,{className:"w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0"}),u.jsx("span",{children:"01939161125"})]})]})]}),u.jsx("li",{className:"pt-1",children:u.jsx("span",{className:"text-[11px] font-mono text-slate-400 leading-tight block",children:"Direct Robotics Inquiries, Feedback & Launch Assistance"})})]})]}),u.jsxs("div",{className:"md:col-span-3",children:[u.jsxs("h4",{className:"text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4 flex items-center gap-1.5",children:[u.jsx($f,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Privacy & Trust"})]}),u.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mb-4",children:"An AI in your personal space must be trustworthy by default. ORoX includes hardware mic isolation, local wake words, and transparent on-device processing."}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between",children:[u.jsx("span",{children:"Pre-order Security"}),u.jsx("span",{className:"font-mono text-orox-amber font-semibold",children:"Zero Risk • 100% Free"})]})]})]}),u.jsxs("div",{className:"max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500",children:[u.jsxs("div",{children:["© ",new Date().getFullYear()," ORoX Robotics Inc. All rights reserved. • Contact: oroxrobot@gmail.com"]}),u.jsxs("button",{onClick:t,className:"flex items-center gap-1.5 text-slate-400 hover:text-orox-amber transition-colors cursor-pointer",children:[u.jsx("span",{children:"Back to top"}),u.jsx(IS,{className:"w-3.5 h-3.5"})]})]})]})};function HC(){const[t,e]=ve.useState(Ra[0]);return u.jsxs("div",{className:"min-h-screen bg-orox-dark text-slate-100 bg-ambient-radial selection:bg-orox-orange selection:text-black overflow-x-hidden w-full",children:[u.jsx(aM,{}),u.jsxs("main",{className:"relative z-10 flex flex-col w-full overflow-x-hidden",children:[u.jsx(TC,{}),u.jsx(AC,{onSelectThemeForWaitlist:n=>e(n)}),u.jsx(LC,{}),u.jsx(DC,{}),u.jsx(IC,{}),u.jsx(UC,{}),u.jsx(OC,{preselectedTheme:t}),u.jsx(zC,{})]}),u.jsx(VC,{})]})}iv(document.getElementById("root")).render(u.jsx(ve.StrictMode,{children:u.jsx(HC,{})}));
