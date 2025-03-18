(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kp={exports:{}},El={},Zp={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Xg=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),qg=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Qg=Symbol.for("react.memo"),Jg=Symbol.for("react.lazy"),cd=Symbol.iterator;function e1(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,em={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=em,this.updater=n||Qp}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tm(){}tm.prototype=Cs.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=em,this.updater=n||Qp}var nf=tf.prototype=new tm;nf.constructor=tf;Jp(nf,Cs.prototype);nf.isPureReactComponent=!0;var ud=Array.isArray,nm=Object.prototype.hasOwnProperty,rf={current:null},im={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nm.call(e,i)&&!im.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:t,key:s,ref:o,props:r,_owner:rf.current}}function t1(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function n1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fd=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n1(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case Wg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ql(o,0):i,ud(r)?(n="",t!=null&&(n=t.replace(fd,"$&/")+"/"),La(r,e,n,"",function(c){return c})):r!=null&&(sf(r)&&(r=t1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ql(s,a);o+=La(s,e,n,l,r)}else if(l=e1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ql(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Da={transition:null},r1={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:rf};function sm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Cs;Xe.Fragment=Xg;Xe.Profiler=Yg;Xe.PureComponent=tf;Xe.StrictMode=jg;Xe.Suspense=Zg;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;Xe.act=sm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nm.call(e,l)&&!im.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:qg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$g,_context:t},t.Consumer=t};Xe.createElement=rm;Xe.createFactory=function(t){var e=rm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Kg,render:t}};Xe.isValidElement=sf;Xe.lazy=function(t){return{$$typeof:Jg,_payload:{_status:-1,_result:t},_init:i1}};Xe.memo=function(t,e){return{$$typeof:Qg,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Xe.unstable_act=sm;Xe.useCallback=function(t,e){return qt.current.useCallback(t,e)};Xe.useContext=function(t){return qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return qt.current.useEffect(t,e)};Xe.useId=function(){return qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return qt.current.useRef(t)};Xe.useState=function(t){return qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return qt.current.useTransition()};Xe.version="18.3.1";Zp.exports=Xe;var Re=Zp.exports;const s1=Gg(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=Re,a1=Symbol.for("react.element"),l1=Symbol.for("react.fragment"),c1=Object.prototype.hasOwnProperty,u1=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f1={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c1.call(e,i)&&!f1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a1,type:t,key:s,ref:o,props:r,_owner:u1.current}}El.Fragment=l1;El.jsx=om;El.jsxs=om;Kp.exports=El;var xe=Kp.exports,Jc={},am={exports:{}},hn={},lm={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var Y=I.length;I.push(j);e:for(;0<Y;){var ne=Y-1>>>1,de=I[ne];if(0<r(de,j))I[ne]=j,I[Y]=de,Y=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],Y=I.pop();if(Y!==j){I[0]=Y;e:for(var ne=0,de=I.length,ge=de>>>1;ne<ge;){var W=2*(ne+1)-1,B=I[W],ee=W+1,J=I[ee];if(0>r(B,Y))ee<de&&0>r(J,B)?(I[ne]=J,I[ee]=Y,ne=ee):(I[ne]=B,I[W]=Y,ne=W);else if(ee<de&&0>r(J,Y))I[ne]=J,I[ee]=Y,ne=ee;else break e}}return j}function r(I,j){var Y=I.sortIndex-j.sortIndex;return Y!==0?Y:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,g=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(I){if(x=!1,m(I),!_)if(n(l)!==null)_=!0,K(R);else{var j=n(c);j!==null&&Q(S,j.startTime-I)}}function R(I,j){_=!1,x&&(x=!1,f(P),P=-1),g=!0;var Y=h;try{for(m(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!D());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var de=ne(d.expirationTime<=j);j=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),m(j)}else i(l);d=n(l)}if(d!==null)var ge=!0;else{var W=n(c);W!==null&&Q(S,W.startTime-j),ge=!1}return ge}finally{d=null,h=Y,g=!1}}var A=!1,T=null,P=-1,E=5,y=-1;function D(){return!(t.unstable_now()-y<E)}function U(){if(T!==null){var I=t.unstable_now();y=I;var j=!0;try{j=T(!0,I)}finally{j?b():(A=!1,T=null)}}else A=!1}var b;if(typeof p=="function")b=function(){p(U)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=U,b=function(){X.postMessage(null)}}else b=function(){v(U,0)};function K(I){T=I,A||(A=!0,b())}function Q(I,j){P=v(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,K(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var Y=h;h=j;try{return I()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=h;h=I;try{return j()}finally{h=Y}},t.unstable_scheduleCallback=function(I,j,Y){var ne=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ne+Y:ne):Y=ne,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,I={id:u++,callback:j,priorityLevel:I,startTime:Y,expirationTime:de,sortIndex:-1},Y>ne?(I.sortIndex=Y,e(c,I),n(l)===null&&I===n(c)&&(x?(f(P),P=-1):x=!0,Q(S,Y-ne))):(I.sortIndex=de,e(l,I),_||g||(_=!0,K(R))),I},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(I){var j=h;return function(){var Y=h;h=j;try{return I.apply(this,arguments)}finally{h=Y}}}})(cm);lm.exports=cm;var d1=lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=Re,dn=d1;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var um=new Set,co={};function Er(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(co[t]=e,t=0;t<e.length;t++)um.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=Object.prototype.hasOwnProperty,p1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},hd={};function m1(t){return eu.call(hd,t)?!0:eu.call(dd,t)?!1:p1.test(t)?hd[t]=!0:(dd[t]=!0,!1)}function g1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v1(t,e,n,i){if(e===null||typeof e>"u"||g1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,af);Dt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,af);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,af);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v1(e,n,r,i)&&(n=null),i||r===null?m1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),pd=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=pd&&t[pd]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Kl;function Ys(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Zl=!1;function Ql(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function _1(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Yr:return"Portal";case tu:return"Profiler";case cf:return"StrictMode";case nu:return"Suspense";case iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case fm:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ff:return e=t.displayName||null,e!==null?e:ru(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return ru(t(e))}catch{}}return null}function x1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ru(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y1(t){var e=pm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=y1(t))}function mm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=pm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function su(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function md(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gm(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function ou(t,e){gm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?au(t,e.type,n):e.hasOwnProperty("defaultValue")&&au(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function au(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if($s(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function vm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S1=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){S1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function Sm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ym(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M1=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uu(t,e){if(e){if(M1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hu=null,ls=null,cs=null;function xd(t){if(t=Io(t)){if(typeof hu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Rl(e),hu(t.stateNode,t.type,e))}}function Mm(t){ls?cs?cs.push(t):cs=[t]:ls=t}function Em(){if(ls){var t=ls,e=cs;if(cs=ls=null,xd(t),e)for(t=0;t<e.length;t++)xd(e[t])}}function Tm(t,e){return t(e)}function Am(){}var Jl=!1;function wm(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Tm(t,e,n)}finally{Jl=!1,(ls!==null||cs!==null)&&(Am(),Em())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var i=Rl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var pu=!1;if(li)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{pu=!1}function E1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Js=!1,Xa=null,ja=!1,mu=null,T1={onError:function(t){Js=!0,Xa=t}};function A1(t,e,n,i,r,s,o,a,l){Js=!1,Xa=null,E1.apply(T1,arguments)}function w1(t,e,n,i,r,s,o,a,l){if(A1.apply(this,arguments),Js){if(Js){var c=Xa;Js=!1,Xa=null}else throw Error(se(198));ja||(ja=!0,mu=c)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yd(t){if(Tr(t)!==t)throw Error(se(188))}function C1(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yd(r),t;if(s===i)return yd(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Rm(t){return t=C1(t),t!==null?Pm(t):null}function Pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pm(t);if(e!==null)return e;t=t.sibling}return null}var bm=dn.unstable_scheduleCallback,Sd=dn.unstable_cancelCallback,R1=dn.unstable_shouldYield,P1=dn.unstable_requestPaint,mt=dn.unstable_now,b1=dn.unstable_getCurrentPriorityLevel,hf=dn.unstable_ImmediatePriority,Lm=dn.unstable_UserBlockingPriority,Ya=dn.unstable_NormalPriority,L1=dn.unstable_LowPriority,Dm=dn.unstable_IdlePriority,Tl=null,Wn=null;function D1(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:U1,I1=Math.log,N1=Math.LN2;function U1(t){return t>>>=0,t===0?32:31-(I1(t)/N1|0)|0}var Xo=64,jo=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $a(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qs(a):(s&=o,s!==0&&(i=qs(s)))}else o=n&~r,o!==0?i=qs(o):s!==0&&(i=qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function O1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=O1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Im(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function z1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Nm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Um,mf,Om,Fm,zm,vu=!1,Yo=[],Ui=null,Oi=null,Fi=null,ho=new Map,po=new Map,Pi=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Fs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function B1(t,e,n,i,r){switch(e){case"focusin":return Ui=Fs(Ui,t,e,n,i,r),!0;case"dragenter":return Oi=Fs(Oi,t,e,n,i,r),!0;case"mouseover":return Fi=Fs(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,Fs(ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Fs(po.get(s)||null,t,e,n,i,r)),!0}return!1}function km(t){var e=fr(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){Om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);du=i,n.target.dispatchEvent(i),du=null}else return e=Io(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ed(t,e,n){Ia(t)&&n.delete(e)}function H1(){vu=!1,Ui!==null&&Ia(Ui)&&(Ui=null),Oi!==null&&Ia(Oi)&&(Oi=null),Fi!==null&&Ia(Fi)&&(Fi=null),ho.forEach(Ed),po.forEach(Ed)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,vu||(vu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,H1)))}function mo(t){function e(r){return zs(r,t)}if(0<Yo.length){zs(Yo[0],t);for(var n=1;n<Yo.length;n++){var i=Yo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&zs(Ui,t),Oi!==null&&zs(Oi,t),Fi!==null&&zs(Fi,t),ho.forEach(e),po.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)km(n),n.blockedOn===null&&Pi.shift()}var us=mi.ReactCurrentBatchConfig,qa=!0;function V1(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=1,gf(t,e,n,i)}finally{Qe=r,us.transition=s}}function G1(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=4,gf(t,e,n,i)}finally{Qe=r,us.transition=s}}function gf(t,e,n,i){if(qa){var r=_u(t,e,n,i);if(r===null)uc(t,e,i,Ka,n),Md(t,i);else if(B1(r,t,e,n,i))i.stopPropagation();else if(Md(t,i),e&4&&-1<k1.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&Um(s),s=_u(t,e,n,i),s===null&&uc(t,e,i,Ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uc(t,e,i,null,n)}}var Ka=null;function _u(t,e,n,i){if(Ka=null,t=df(i),t=fr(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function Bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case hf:return 1;case Lm:return 4;case Ya:case L1:return 16;case Dm:return 536870912;default:return 16}default:return 16}}var Di=null,vf=null,Na=null;function Hm(){if(Na)return Na;var t,e=vf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Na=r.slice(t,1<i?1-i:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Td(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:Td,this.isPropagationStopped=Td,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=pn(Rs),Do=dt({},Rs,{view:0,detail:0}),W1=pn(Do),tc,nc,ks,Al=dt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(tc=t.screenX-ks.screenX,nc=t.screenY-ks.screenY):nc=tc=0,ks=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Ad=pn(Al),X1=dt({},Al,{dataTransfer:0}),j1=pn(X1),Y1=dt({},Do,{relatedTarget:0}),ic=pn(Y1),$1=dt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=pn($1),K1=dt({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z1=pn(K1),Q1=dt({},Rs,{data:0}),wd=pn(Q1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tv[t])?!!e[t]:!1}function xf(){return nv}var iv=dt({},Do,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rv=pn(iv),sv=dt({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=pn(sv),ov=dt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),av=pn(ov),lv=dt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=pn(lv),uv=dt({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=pn(uv),dv=[9,13,27,32],yf=li&&"CompositionEvent"in window,eo=null;li&&"documentMode"in document&&(eo=document.documentMode);var hv=li&&"TextEvent"in window&&!eo,Vm=li&&(!yf||eo&&8<eo&&11>=eo),Rd=" ",Pd=!1;function Gm(t,e){switch(t){case"keyup":return dv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function pv(t,e){switch(t){case"compositionend":return Wm(e);case"keypress":return e.which!==32?null:(Pd=!0,Rd);case"textInput":return t=e.data,t===Rd&&Pd?null:t;default:return null}}function mv(t,e){if(qr)return t==="compositionend"||!yf&&Gm(t,e)?(t=Hm(),Na=vf=Di=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vm&&e.locale!=="ko"?null:e.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gv[t.type]:e==="textarea"}function Xm(t,e,n,i){Mm(i),e=Za(e,"onChange"),0<e.length&&(n=new _f("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var to=null,go=null;function vv(t){n0(t,0)}function wl(t){var e=Qr(t);if(mm(e))return t}function _v(t,e){if(t==="change")return e}var jm=!1;if(li){var rc;if(li){var sc="oninput"in document;if(!sc){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),sc=typeof Ld.oninput=="function"}rc=sc}else rc=!1;jm=rc&&(!document.documentMode||9<document.documentMode)}function Dd(){to&&(to.detachEvent("onpropertychange",Ym),go=to=null)}function Ym(t){if(t.propertyName==="value"&&wl(go)){var e=[];Xm(e,go,t,df(t)),wm(vv,e)}}function xv(t,e,n){t==="focusin"?(Dd(),to=e,go=n,to.attachEvent("onpropertychange",Ym)):t==="focusout"&&Dd()}function yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(go)}function Sv(t,e){if(t==="click")return wl(e)}function Mv(t,e){if(t==="input"||t==="change")return wl(e)}function Ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Un=typeof Object.is=="function"?Object.is:Ev;function vo(t,e){if(Un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!eu.call(e,r)||!Un(t[r],e[r]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,e){var n=Id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qm(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tv(t){var e=qm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(i!==null&&Sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nd(n,s);var o=Nd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Av=li&&"documentMode"in document&&11>=document.documentMode,Kr=null,xu=null,no=null,yu=!1;function Ud(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||Kr==null||Kr!==Wa(i)||(i=Kr,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),no&&vo(no,i)||(no=i,i=Za(xu,"onSelect"),0<i.length&&(e=new _f("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},oc={},Km={};li&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Cl(t){if(oc[t])return oc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Km)return oc[t]=e[n];return t}var Zm=Cl("animationend"),Qm=Cl("animationiteration"),Jm=Cl("animationstart"),e0=Cl("transitionend"),t0=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){t0.set(t,e),Er(e,[t])}for(var ac=0;ac<Od.length;ac++){var lc=Od[ac],wv=lc.toLowerCase(),Cv=lc[0].toUpperCase()+lc.slice(1);qi(wv,"on"+Cv)}qi(Zm,"onAnimationEnd");qi(Qm,"onAnimationIteration");qi(Jm,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(e0,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function Fd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w1(i,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,c),s=l}}}if(ja)throw t=mu,ja=!1,mu=null,t}function it(t,e){var n=e[Au];n===void 0&&(n=e[Au]=new Set);var i=t+"__bubble";n.has(i)||(i0(e,t,2,!1),n.add(i))}function cc(t,e,n){var i=0;e&&(i|=4),i0(n,t,i,e)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Ko]){t[Ko]=!0,um.forEach(function(n){n!=="selectionchange"&&(Rv.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ko]||(e[Ko]=!0,cc("selectionchange",!1,e))}}function i0(t,e,n,i){switch(Bm(e)){case 1:var r=V1;break;case 4:r=G1;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wm(function(){var c=s,u=df(n),d=[];e:{var h=t0.get(t);if(h!==void 0){var g=_f,_=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":g=rv;break;case"focusin":_="focus",g=ic;break;case"focusout":_="blur",g=ic;break;case"beforeblur":case"afterblur":g=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=j1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=av;break;case Zm:case Qm:case Jm:g=q1;break;case e0:g=cv;break;case"scroll":g=W1;break;case"wheel":g=fv;break;case"copy":case"cut":case"paste":g=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Cd}var x=(e&4)!==0,v=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var p=c,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=fo(p,f),S!=null&&x.push(xo(p,S,m)))),v)break;p=p.return}0<x.length&&(h=new g(h,_,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==du&&(_=n.relatedTarget||n.fromElement)&&(fr(_)||_[ci]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?fr(_):null,_!==null&&(v=Tr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(x=Ad,S="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(x=Cd,S="onPointerLeave",f="onPointerEnter",p="pointer"),v=g==null?h:Qr(g),m=_==null?h:Qr(_),h=new x(S,p+"leave",g,n,u),h.target=v,h.relatedTarget=m,S=null,fr(u)===c&&(x=new x(f,p+"enter",_,n,u),x.target=m,x.relatedTarget=v,S=x),v=S,g&&_)t:{for(x=g,f=_,p=0,m=x;m;m=wr(m))p++;for(m=0,S=f;S;S=wr(S))m++;for(;0<p-m;)x=wr(x),p--;for(;0<m-p;)f=wr(f),m--;for(;p--;){if(x===f||f!==null&&x===f.alternate)break t;x=wr(x),f=wr(f)}x=null}else x=null;g!==null&&zd(d,h,g,x,!1),_!==null&&v!==null&&zd(d,v,_,x,!0)}}e:{if(h=c?Qr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=_v;else if(bd(h))if(jm)R=Mv;else{R=yv;var A=xv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Sv);if(R&&(R=R(t,c))){Xm(d,R,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&au(h,"number",h.value)}switch(A=c?Qr(c):window,t){case"focusin":(bd(A)||A.contentEditable==="true")&&(Kr=A,xu=c,no=null);break;case"focusout":no=xu=Kr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Ud(d,n,u);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":Ud(d,n,u)}var T;if(yf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qr?Gm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Vm&&n.locale!=="ko"&&(qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&qr&&(T=Hm()):(Di=u,vf="value"in Di?Di.value:Di.textContent,qr=!0)),A=Za(c,P),0<A.length&&(P=new wd(P,t,null,n,u),d.push({event:P,listeners:A}),T?P.data=T:(T=Wm(n),T!==null&&(P.data=T)))),(T=hv?pv(t,n):mv(t,n))&&(c=Za(c,"onBeforeInput"),0<c.length&&(u=new wd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}n0(d,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fo(t,n),s!=null&&i.unshift(xo(t,s,r)),s=fo(t,e),s!=null&&i.push(xo(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=fo(n,s),l!=null&&o.unshift(xo(n,l,a))):r||(l=fo(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Pv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function kd(t){return(typeof t=="string"?t:""+t).replace(Pv,`
`).replace(bv,"")}function Zo(t,e,n){if(e=kd(e),kd(t)!==e&&n)throw Error(se(425))}function Qa(){}var Su=null,Mu=null;function Eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(Iv)}:Tu;function Iv(t){setTimeout(function(){throw t})}function fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ps,yo="__reactProps$"+Ps,ci="__reactContainer$"+Ps,Au="__reactEvents$"+Ps,Nv="__reactListeners$"+Ps,Uv="__reactHandles$"+Ps;function fr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hd(t);t!==null;){if(n=t[Hn])return n;t=Hd(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Hn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Rl(t){return t[yo]||null}var wu=[],Jr=-1;function Ki(t){return{current:t}}function st(t){0>Jr||(t.current=wu[Jr],wu[Jr]=null,Jr--)}function tt(t,e){Jr++,wu[Jr]=t.current,t.current=e}var ji={},Ht=Ki(ji),Jt=Ki(!1),_r=ji;function vs(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Ja(){st(Jt),st(Ht)}function Vd(t,e,n){if(Ht.current!==ji)throw Error(se(168));tt(Ht,e),tt(Jt,n)}function r0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,x1(t)||"Unknown",r));return dt({},n,i)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,_r=Ht.current,tt(Ht,t),tt(Jt,Jt.current),!0}function Gd(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=r0(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(Ht),tt(Ht,t)):st(Jt),tt(Jt,n)}var ni=null,Pl=!1,dc=!1;function s0(t){ni===null?ni=[t]:ni.push(t)}function Ov(t){Pl=!0,s0(t)}function Zi(){if(!dc&&ni!==null){dc=!0;var t=0,e=Qe;try{var n=ni;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,Pl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),bm(hf,Zi),r}finally{Qe=e,dc=!1}}return null}var es=[],ts=0,tl=null,nl=0,_n=[],xn=0,xr=null,ri=1,si="";function or(t,e){es[ts++]=nl,es[ts++]=tl,tl=t,nl=e}function o0(t,e,n){_n[xn++]=ri,_n[xn++]=si,_n[xn++]=xr,xr=t;var i=ri;t=si;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-In(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function Mf(t){t.return!==null&&(or(t,1),o0(t,1,0))}function Ef(t){for(;t===tl;)tl=es[--ts],es[ts]=null,nl=es[--ts],es[ts]=null;for(;t===xr;)xr=_n[--xn],_n[xn]=null,si=_n[--xn],_n[xn]=null,ri=_n[--xn],_n[xn]=null}var fn=null,un=null,lt=!1,Dn=null;function a0(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,un=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,un=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(lt){var e=un;if(e){var n=e;if(!Wd(t,e)){if(Cu(t))throw Error(se(418));e=zi(n.nextSibling);var i=fn;e&&Wd(t,e)?a0(i,n):(t.flags=t.flags&-4097|2,lt=!1,fn=t)}}else{if(Cu(t))throw Error(se(418));t.flags=t.flags&-4097|2,lt=!1,fn=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Qo(t){if(t!==fn)return!1;if(!lt)return Xd(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eu(t.type,t.memoizedProps)),e&&(e=un)){if(Cu(t))throw l0(),Error(se(418));for(;e;)a0(t,e),e=zi(e.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=fn?zi(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=un;t;)t=zi(t.nextSibling)}function _s(){un=fn=null,lt=!1}function Tf(t){Dn===null?Dn=[t]:Dn.push(t)}var Fv=mi.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Jo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jd(t){var e=t._init;return e(t._payload)}function c0(t){function e(f,p){if(t){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function i(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function r(f,p){return f=Vi(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,p,m,S){return p===null||p.tag!==6?(p=xc(m,f.mode,S),p.return=f,p):(p=r(p,m),p.return=f,p)}function l(f,p,m,S){var R=m.type;return R===$r?u(f,p,m.props.children,S,m.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&jd(R)===p.type)?(S=r(p,m.props),S.ref=Bs(f,p,m),S.return=f,S):(S=Va(m.type,m.key,m.props,null,f.mode,S),S.ref=Bs(f,p,m),S.return=f,S)}function c(f,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=yc(m,f.mode,S),p.return=f,p):(p=r(p,m.children||[]),p.return=f,p)}function u(f,p,m,S,R){return p===null||p.tag!==7?(p=vr(m,f.mode,S,R),p.return=f,p):(p=r(p,m),p.return=f,p)}function d(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xc(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vo:return m=Va(p.type,p.key,p.props,null,f.mode,m),m.ref=Bs(f,null,p),m.return=f,m;case Yr:return p=yc(p,f.mode,m),p.return=f,p;case wi:var S=p._init;return d(f,S(p._payload),m)}if($s(p)||Us(p))return p=vr(p,f.mode,m,null),p.return=f,p;Jo(f,p)}return null}function h(f,p,m,S){var R=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(f,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:return m.key===R?l(f,p,m,S):null;case Yr:return m.key===R?c(f,p,m,S):null;case wi:return R=m._init,h(f,p,R(m._payload),S)}if($s(m)||Us(m))return R!==null?null:u(f,p,m,S,null);Jo(f,m)}return null}function g(f,p,m,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(p,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vo:return f=f.get(S.key===null?m:S.key)||null,l(p,f,S,R);case Yr:return f=f.get(S.key===null?m:S.key)||null,c(p,f,S,R);case wi:var A=S._init;return g(f,p,m,A(S._payload),R)}if($s(S)||Us(S))return f=f.get(m)||null,u(p,f,S,R,null);Jo(p,S)}return null}function _(f,p,m,S){for(var R=null,A=null,T=p,P=p=0,E=null;T!==null&&P<m.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var y=h(f,T,m[P],S);if(y===null){T===null&&(T=E);break}t&&T&&y.alternate===null&&e(f,T),p=s(y,p,P),A===null?R=y:A.sibling=y,A=y,T=E}if(P===m.length)return n(f,T),lt&&or(f,P),R;if(T===null){for(;P<m.length;P++)T=d(f,m[P],S),T!==null&&(p=s(T,p,P),A===null?R=T:A.sibling=T,A=T);return lt&&or(f,P),R}for(T=i(f,T);P<m.length;P++)E=g(T,f,P,m[P],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),p=s(E,p,P),A===null?R=E:A.sibling=E,A=E);return t&&T.forEach(function(D){return e(f,D)}),lt&&or(f,P),R}function x(f,p,m,S){var R=Us(m);if(typeof R!="function")throw Error(se(150));if(m=R.call(m),m==null)throw Error(se(151));for(var A=R=null,T=p,P=p=0,E=null,y=m.next();T!==null&&!y.done;P++,y=m.next()){T.index>P?(E=T,T=null):E=T.sibling;var D=h(f,T,y.value,S);if(D===null){T===null&&(T=E);break}t&&T&&D.alternate===null&&e(f,T),p=s(D,p,P),A===null?R=D:A.sibling=D,A=D,T=E}if(y.done)return n(f,T),lt&&or(f,P),R;if(T===null){for(;!y.done;P++,y=m.next())y=d(f,y.value,S),y!==null&&(p=s(y,p,P),A===null?R=y:A.sibling=y,A=y);return lt&&or(f,P),R}for(T=i(f,T);!y.done;P++,y=m.next())y=g(T,f,P,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),p=s(y,p,P),A===null?R=y:A.sibling=y,A=y);return t&&T.forEach(function(U){return e(f,U)}),lt&&or(f,P),R}function v(f,p,m,S){if(typeof m=="object"&&m!==null&&m.type===$r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:e:{for(var R=m.key,A=p;A!==null;){if(A.key===R){if(R=m.type,R===$r){if(A.tag===7){n(f,A.sibling),p=r(A,m.props.children),p.return=f,f=p;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&jd(R)===A.type){n(f,A.sibling),p=r(A,m.props),p.ref=Bs(f,A,m),p.return=f,f=p;break e}n(f,A);break}else e(f,A);A=A.sibling}m.type===$r?(p=vr(m.props.children,f.mode,S,m.key),p.return=f,f=p):(S=Va(m.type,m.key,m.props,null,f.mode,S),S.ref=Bs(f,p,m),S.return=f,f=S)}return o(f);case Yr:e:{for(A=m.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=r(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=yc(m,f.mode,S),p.return=f,f=p}return o(f);case wi:return A=m._init,v(f,p,A(m._payload),S)}if($s(m))return _(f,p,m,S);if(Us(m))return x(f,p,m,S);Jo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=r(p,m),p.return=f,f=p):(n(f,p),p=xc(m,f.mode,S),p.return=f,f=p),o(f)):n(f,p)}return v}var xs=c0(!0),u0=c0(!1),il=Ki(null),rl=null,ns=null,Af=null;function wf(){Af=ns=rl=null}function Cf(t){var e=il.current;st(il),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){rl=t,Af=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(rl===null)throw Error(se(308));ns=t,rl.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var dr=null;function Rf(t){dr===null?dr=[t]:dr.push(t)}function f0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function Yd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,g=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=dt({},d,h);break e;case 2:Ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=o,t.lanes=o,t.memoizedState=d}}function $d(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var No={},Xn=Ki(No),So=Ki(No),Mo=Ki(No);function hr(t){if(t===No)throw Error(se(174));return t}function bf(t,e){switch(tt(Mo,e),tt(So,t),tt(Xn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cu(e,t)}st(Xn),tt(Xn,e)}function ys(){st(Xn),st(So),st(Mo)}function h0(t){hr(Mo.current);var e=hr(Xn.current),n=cu(e,t.type);e!==n&&(tt(So,t),tt(Xn,n))}function Lf(t){So.current===t&&(st(Xn),st(So))}var ut=Ki(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=[];function Df(){for(var t=0;t<hc.length;t++)hc[t]._workInProgressVersionPrimary=null;hc.length=0}var Fa=mi.ReactCurrentDispatcher,pc=mi.ReactCurrentBatchConfig,yr=0,ft=null,St=null,Ct=null,al=!1,io=!1,Eo=0,zv=0;function Ut(){throw Error(se(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Un(t[n],e[n]))return!1;return!0}function Nf(t,e,n,i,r,s){if(yr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?Vv:Gv,t=n(i,r),io){s=0;do{if(io=!1,Eo=0,25<=s)throw Error(se(301));s+=1,Ct=St=null,e.updateQueue=null,Fa.current=Wv,t=n(i,r)}while(io)}if(Fa.current=ll,e=St!==null&&St.next!==null,yr=0,Ct=St=ft=null,al=!1,e)throw Error(se(300));return t}function Uf(){var t=Eo!==0;return Eo=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ft.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function An(){if(St===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?ft.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(se(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ft.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function To(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=An(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ft.lanes|=u,Sr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Un(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=An(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Un(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p0(){}function m0(t,e){var n=ft,i=An(),r=e(),s=!Un(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Of(_0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Ao(9,v0.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(se(349));yr&30||g0(n,e,r)}return r}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v0(t,e,n,i){e.value=n,e.getSnapshot=i,x0(e)&&y0(t)}function _0(t,e,n){return n(function(){x0(e)&&y0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Un(t,n)}catch{return!0}}function y0(t){var e=ui(t,1);e!==null&&Nn(e,t,1,-1)}function qd(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=Hv.bind(null,ft,t),[e.memoizedState,t]}function Ao(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function S0(){return An().memoizedState}function za(t,e,n,i){var r=zn();ft.flags|=t,r.memoizedState=Ao(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&If(i,o.deps)){r.memoizedState=Ao(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ao(1|e,n,s,i)}function Kd(t,e){return za(8390656,8,t,e)}function Of(t,e){return bl(2048,8,t,e)}function M0(t,e){return bl(4,2,t,e)}function E0(t,e){return bl(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A0(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,T0.bind(null,e,t),n)}function Ff(){}function w0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function C0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R0(t,e,n){return yr&21?(Un(n,e)||(n=Im(),ft.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function kv(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=pc.transition;pc.transition={};try{t(!1),e()}finally{Qe=n,pc.transition=i}}function P0(){return An().memoizedState}function Bv(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))L0(e,n);else if(n=f0(t,e,n,i),n!==null){var r=jt();Nn(n,t,i,r),D0(n,e,i)}}function Hv(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))L0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Un(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f0(t,e,r,i),n!==null&&(r=jt(),Nn(n,t,i,r),D0(n,e,i))}}function b0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function L0(t,e){io=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var ll={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Vv={readContext:Tn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Bv.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:qd,useDebugValue:Ff,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=qd(!1),e=t[0];return t=kv.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=zn();if(lt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Rt===null)throw Error(se(349));yr&30||g0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kd(_0.bind(null,i,s,t),[t]),i.flags|=2048,Ao(9,v0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(lt){var n=si,i=ri;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gv={readContext:Tn,useCallback:w0,useContext:Tn,useEffect:Of,useImperativeHandle:A0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:mc,useRef:S0,useState:function(){return mc(To)},useDebugValue:Ff,useDeferredValue:function(t){var e=An();return R0(e,St.memoizedState,t)},useTransition:function(){var t=mc(To)[0],e=An().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:P0,unstable_isNewReconciler:!1},Wv={readContext:Tn,useCallback:w0,useContext:Tn,useEffect:Of,useImperativeHandle:A0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:gc,useRef:S0,useState:function(){return gc(To)},useDebugValue:Ff,useDeferredValue:function(t){var e=An();return St===null?e.memoizedState=t:R0(e,St.memoizedState,t)},useTransition:function(){var t=gc(To)[0],e=An().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:P0,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Hi(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Nn(e,t,r,i),Oa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Hi(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Nn(e,t,r,i),Oa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Hi(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Nn(e,t,i,n),Oa(e,t,i))}};function Zd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function I0(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=en(e)?_r:Ht.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Lu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=en(e)?_r:Ht.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=_1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xv=typeof WeakMap=="function"?WeakMap:Map;function N0(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ul||(ul=!0,Vu=i),Du(t,e)},n}function U0(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Du(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=s_.bind(null,t,e,n),e.then(t,t))}function eh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function th(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var jv=mi.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?u0(e,null,n,i):xs(e,t.child,n,i)}function nh(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=Nf(t,e,n,i,s,r),n=Uf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(lt&&n&&Mf(e),e.flags|=1,Wt(t,e,i,r),e.child)}function ih(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O0(t,e,s,i,r)):(t=Va(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function O0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,fi(t,e,r)}return Iu(t,e,n,i,r)}function F0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(rs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(rs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(rs,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(rs,ln),ln|=i;return Wt(t,e,r,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Iu(t,e,n,i,r){var s=en(n)?_r:Ht.current;return s=vs(e,s),fs(e,r),n=Nf(t,e,n,i,s,r),i=Uf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(lt&&i&&Mf(e),e.flags|=1,Wt(t,e,n,r),e.child)}function rh(t,e,n,i,r){if(en(n)){var s=!0;el(e)}else s=!1;if(fs(e,r),e.stateNode===null)ka(t,e),I0(e,n,i),Lu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=en(n)?_r:Ht.current,c=vs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qd(e,o,i,c),Ci=!1;var h=e.memoizedState;o.state=h,sl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Ci?(typeof u=="function"&&(bu(e,n,u,i),l=e.memoizedState),(a=Ci||Zd(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=en(n)?_r:Ht.current,l=vs(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Qd(e,o,i,l),Ci=!1,h=e.memoizedState,o.state=h,sl(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Jt.current||Ci?(typeof g=="function"&&(bu(e,n,g,i),_=e.memoizedState),(c=Ci||Zd(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nu(t,e,n,i,s,r)}function Nu(t,e,n,i,r,s){z0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gd(e,n,!1),fi(t,e,s);i=e.stateNode,jv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&Gd(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?Vd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vd(t,e.context,!1),bf(t,e.containerInfo)}function sh(t,e,n,i,r){return _s(),Tf(r),e.flags|=256,Wt(t,e,n,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function B0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ut,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ou(n),e.memoizedState=Uu,t):zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Yv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ou(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,i){return i!==null&&Tf(i),xs(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vc(Error(se(422))),ea(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=Ou(o),e.memoizedState=Uu,s);if(!(e.mode&1))return ea(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=vc(s,i,void 0),ea(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),Nn(i,t,r,-1))}return Wf(),i=vc(Error(se(421))),ea(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=o_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=zi(r.nextSibling),fn=e,lt=!0,Dn=null,t!==null&&(_n[xn++]=ri,_n[xn++]=si,_n[xn++]=xr,ri=t.id,si=t.overflow,xr=e),e=zf(e,i.children),e.flags|=4096,e)}function oh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pu(t.return,e,n)}function _c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function H0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&oh(t,n,e);else if(t.tag===19)oh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $v(t,e,n){switch(e.tag){case 3:k0(e),_s();break;case 5:h0(e);break;case 1:en(e.type)&&el(e);break;case 4:bf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?B0(t,e,n):(tt(ut,ut.current&1),t=fi(t,e,n),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return H0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,F0(t,e,n)}return fi(t,e,n)}var V0,Fu,G0,W0;V0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fu=function(){};G0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hr(Xn.current);var s=null;switch(n){case"input":r=su(t,r),i=su(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=lu(t,r),i=lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Qa)}uu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Hs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qv(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return en(e.type)&&Ja(),Ot(e),null;case 3:return i=e.stateNode,ys(),st(Jt),st(Ht),Df(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Xu(Dn),Dn=null))),Fu(t,e),Ot(e),null;case 5:Lf(e);var r=hr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)G0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ot(e),null}if(t=hr(Xn.current),Qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ks.length;r++)it(Ks[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":md(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":vd(i,s),it("invalid",i)}uu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,t),r=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Go(i),gd(i,s,!0);break;case"textarea":Go(i),_d(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[yo]=i,V0(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ks.length;r++)it(Ks[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":md(t,i),r=su(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),it("invalid",t);break;case"textarea":vd(t,i),r=lu(t,i),it("invalid",t);break;default:r=i}uu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&lf(t,s,l,o))}switch(n){case"input":Go(t),gd(t,i,!1);break;case"textarea":Go(t),_d(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)W0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=hr(Mo.current),hr(Xn.current),Qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ot(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&un!==null&&e.mode&1&&!(e.flags&128))l0(),_s(),e.flags|=98560,s=!1;else if(s=Qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Hn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Dn!==null&&(Xu(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ys(),Fu(t,e),t===null&&_o(e.stateNode.containerInfo),Ot(e),null;case 10:return Cf(e.type._context),Ot(e),null;case 17:return en(e.type)&&Ja(),Ot(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Hs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ol(t),o!==null){for(e.flags|=128,Hs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>Ms&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ot(e),null}else 2*mt()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=ut.current,tt(ut,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Kv(t,e){switch(Ef(e),e.tag){case 1:return en(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),st(Jt),st(Ht),Df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return ys(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var ta=!1,kt=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,he=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function zu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var ah=!1;function Qv(t,e){if(Su=qa,t=qm(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:t,selectionRange:n},qa=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:bn(e.type,x),v);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=ah,ah=!1,_}function ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zu(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X0(t){var e=t.alternate;e!==null&&(t.alternate=null,X0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[yo],delete e[Au],delete e[Nv],delete e[Uv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j0(t){return t.tag===5||t.tag===3||t.tag===4}function lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,n),t=t.sibling;t!==null;)Bu(t,e,n),t=t.sibling}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var Pt=null,Ln=!1;function xi(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:kt||is(n,e);case 6:var i=Pt,r=Ln;Pt=null,xi(t,e,n),Pt=i,Ln=r,Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?fc(t.parentNode,n):t.nodeType===1&&fc(t,n),mo(t)):fc(Pt,n.stateNode));break;case 4:i=Pt,r=Ln,Pt=n.stateNode.containerInfo,Ln=!0,xi(t,e,n),Pt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zu(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!kt&&(is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,xi(t,e,n),kt=i):xi(t,e,n);break;default:xi(t,e,n)}}function ch(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zv),e.forEach(function(i){var r=a_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Ln=!1;break e;case 3:Pt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Pt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Pt===null)throw Error(se(160));Y0(s,o,r),Pt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,t),e=e.sibling}function $0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Fn(t),i&4){try{ro(3,t,t.return),Dl(3,t)}catch(x){ht(t,t.return,x)}try{ro(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:wn(e,t),Fn(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(wn(e,t),Fn(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{uo(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gm(r,s),fu(a,o);var c=fu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Sm(r,d):u==="dangerouslySetInnerHTML"?xm(r,d):u==="children"?uo(r,d):lf(r,u,d,c)}switch(a){case"input":ou(r,s);break;case"textarea":vm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?as(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(wn(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(wn(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:wn(e,t),Fn(t);break;case 13:wn(e,t),Fn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=mt())),i&4&&ch(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||u,wn(e,t),kt=c):wn(e,t),Fn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(d=he=u;he!==null;){switch(h=he,g=h.child,h.tag){case 0:case 11:case 14:case 15:ro(4,h,h.return);break;case 1:is(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:is(h,h.return);break;case 22:if(h.memoizedState!==null){fh(d);continue}}g!==null?(g.return=h,he=g):fh(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ym("display",o))}catch(x){ht(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ht(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wn(e,t),Fn(t),i&4&&ch(t);break;case 21:break;default:wn(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uo(r,""),i.flags&=-33);var s=lh(t);Hu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lh(t);Bu(t,a,o);break;default:throw Error(se(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jv(t,e,n){he=t,q0(t)}function q0(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=ta;var c=kt;if(ta=o,(kt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?dh(r):l!==null?(l.return=o,he=l):dh(r);for(;s!==null;)he=s,q0(s),s=s.sibling;he=r,ta=a,kt=c}uh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):uh(t)}}function uh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$d(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$d(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}kt||e.flags&512&&ku(e)}catch(h){ht(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function fh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function dh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{ku(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{ku(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var e_=Math.ceil,cl=mi.ReactCurrentDispatcher,kf=mi.ReactCurrentOwner,En=mi.ReactCurrentBatchConfig,$e=0,Rt=null,yt=null,Lt=0,ln=0,rs=Ki(0),Mt=0,wo=null,Sr=0,Il=0,Bf=0,so=null,Zt=null,Hf=0,Ms=1/0,ti=null,ul=!1,Vu=null,Bi=null,na=!1,Ii=null,fl=0,oo=0,Gu=null,Ba=-1,Ha=0;function jt(){return $e&6?mt():Ba!==-1?Ba:Ba=mt()}function Hi(t){return t.mode&1?$e&2&&Lt!==0?Lt&-Lt:Fv.transition!==null?(Ha===0&&(Ha=Im()),Ha):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Bm(t.type)),t):1}function Nn(t,e,n,i){if(50<oo)throw oo=0,Gu=null,Error(se(185));Lo(t,n,i),(!($e&2)||t!==Rt)&&(t===Rt&&(!($e&2)&&(Il|=n),Mt===4&&bi(t,Lt)),tn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ms=mt()+500,Pl&&Zi()))}function tn(t,e){var n=t.callbackNode;F1(t,e);var i=$a(t,t===Rt?Lt:0);if(i===0)n!==null&&Sd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sd(n),e===1)t.tag===0?Ov(hh.bind(null,t)):s0(hh.bind(null,t)),Dv(function(){!($e&6)&&Zi()}),n=null;else{switch(Nm(i)){case 1:n=hf;break;case 4:n=Lm;break;case 16:n=Ya;break;case 536870912:n=Dm;break;default:n=Ya}n=ig(n,K0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K0(t,e){if(Ba=-1,Ha=0,$e&6)throw Error(se(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=$a(t,t===Rt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=$e;$e|=2;var s=Q0();(Rt!==t||Lt!==e)&&(ti=null,Ms=mt()+500,gr(t,e));do try{i_();break}catch(a){Z0(t,a)}while(!0);wf(),cl.current=s,$e=r,yt!==null?e=0:(Rt=null,Lt=0,e=Mt)}if(e!==0){if(e===2&&(r=gu(t),r!==0&&(i=r,e=Wu(t,r))),e===1)throw n=wo,gr(t,0),bi(t,i),tn(t,mt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!t_(r)&&(e=dl(t,i),e===2&&(s=gu(t),s!==0&&(i=s,e=Wu(t,s))),e===1))throw n=wo,gr(t,0),bi(t,i),tn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ar(t,Zt,ti);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=Hf+500-mt(),10<e)){if($a(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tu(ar.bind(null,t,Zt,ti),e);break}ar(t,Zt,ti);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*e_(i/1960))-i,10<i){t.timeoutHandle=Tu(ar.bind(null,t,Zt,ti),i);break}ar(t,Zt,ti);break;case 5:ar(t,Zt,ti);break;default:throw Error(se(329))}}}return tn(t,mt()),t.callbackNode===n?K0.bind(null,t):null}function Wu(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Xu(e)),t}function Xu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function t_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Un(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~Bf,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function hh(t){if($e&6)throw Error(se(327));ds();var e=$a(t,0);if(!(e&1))return tn(t,mt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=gu(t);i!==0&&(e=i,n=Wu(t,i))}if(n===1)throw n=wo,gr(t,0),bi(t,e),tn(t,mt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Zt,ti),tn(t,mt()),null}function Vf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ms=mt()+500,Pl&&Zi())}}function Mr(t){Ii!==null&&Ii.tag===0&&!($e&6)&&ds();var e=$e;$e|=1;var n=En.transition,i=Qe;try{if(En.transition=null,Qe=1,t)return t()}finally{Qe=i,En.transition=n,$e=e,!($e&6)&&Zi()}}function Gf(){ln=rs.current,st(rs)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lv(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ja();break;case 3:ys(),st(Jt),st(Ht),Df();break;case 5:Lf(i);break;case 4:ys();break;case 13:st(ut);break;case 19:st(ut);break;case 10:Cf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(Rt=t,yt=t=Vi(t.current,null),Lt=ln=e,Mt=0,wo=null,Bf=Il=Sr=0,Zt=so=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}dr=null}return t}function Z0(t,e){do{var n=yt;try{if(wf(),Fa.current=ll,al){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}al=!1}if(yr=0,Ct=St=ft=null,io=!1,Eo=0,kf.current=null,n===null||n.return===null){Mt=1,wo=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=eh(o);if(g!==null){g.flags&=-257,th(g,o,a,s,e),g.mode&1&&Jd(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Jd(s,c,e),Wf();break e}l=Error(se(426))}}else if(lt&&a.mode&1){var v=eh(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),th(v,o,a,s,e),Tf(Ss(l,a));break e}}s=l=Ss(l,a),Mt!==4&&(Mt=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=N0(s,l,e);Yd(s,f);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bi===null||!Bi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=U0(s,a,e);Yd(s,S);break e}}s=s.return}while(s!==null)}eg(n)}catch(R){e=R,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function Q0(){var t=cl.current;return cl.current=ll,t===null?ll:t}function Wf(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(Sr&268435455)&&!(Il&268435455)||bi(Rt,Lt)}function dl(t,e){var n=$e;$e|=2;var i=Q0();(Rt!==t||Lt!==e)&&(ti=null,gr(t,e));do try{n_();break}catch(r){Z0(t,r)}while(!0);if(wf(),$e=n,cl.current=i,yt!==null)throw Error(se(261));return Rt=null,Lt=0,Mt}function n_(){for(;yt!==null;)J0(yt)}function i_(){for(;yt!==null&&!R1();)J0(yt)}function J0(t){var e=ng(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?eg(t):yt=e,kf.current=null}function eg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kv(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=qv(n,e,ln),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function ar(t,e,n){var i=Qe,r=En.transition;try{En.transition=null,Qe=1,r_(t,e,n,i)}finally{En.transition=r,Qe=i}return null}function r_(t,e,n,i){do ds();while(Ii!==null);if($e&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z1(t,s),t===Rt&&(yt=Rt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,ig(Ya,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=Qe;Qe=1;var a=$e;$e|=4,kf.current=null,Qv(t,n),$0(n,t),Tv(Mu),qa=!!Su,Mu=Su=null,t.current=n,Jv(n),P1(),$e=a,Qe=o,En.transition=s}else t.current=n;if(na&&(na=!1,Ii=t,fl=r),s=t.pendingLanes,s===0&&(Bi=null),D1(n.stateNode),tn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ul)throw ul=!1,t=Vu,Vu=null,t;return fl&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Gu?oo++:(oo=0,Gu=t):oo=0,Zi(),null}function ds(){if(Ii!==null){var t=Nm(fl),e=En.transition,n=Qe;try{if(En.transition=null,Qe=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,fl=0,$e&6)throw Error(se(331));var r=$e;for($e|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:ro(8,u,s)}var d=u.child;if(d!==null)d.return=u,he=d;else for(;he!==null;){u=he;var h=u.sibling,g=u.return;if(X0(u),u===c){he=null;break}if(h!==null){h.return=g,he=h;break}he=g}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var p=t.current;for(he=p;he!==null;){o=he;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,he=m;else e:for(o=p;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(R){ht(a,a.return,R)}if(a===o){he=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,he=S;break e}he=a.return}}if($e=r,Zi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Tl,t)}catch{}i=!0}return i}finally{Qe=n,En.transition=e}}return!1}function ph(t,e,n){e=Ss(n,e),e=N0(t,e,1),t=ki(t,e,1),e=jt(),t!==null&&(Lo(t,1,e),tn(t,e))}function ht(t,e,n){if(t.tag===3)ph(t,t,n);else for(;e!==null;){if(e.tag===3){ph(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Ss(n,t),t=U0(e,t,1),e=ki(e,t,1),t=jt(),e!==null&&(Lo(e,1,t),tn(e,t));break}}e=e.return}}function s_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Lt&n)===n&&(Mt===4||Mt===3&&(Lt&130023424)===Lt&&500>mt()-Hf?gr(t,0):Bf|=n),tn(t,e)}function tg(t,e){e===0&&(t.mode&1?(e=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):e=1);var n=jt();t=ui(t,e),t!==null&&(Lo(t,e,n),tn(t,n))}function o_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tg(t,n)}function a_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),tg(t,n)}var ng;ng=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,$v(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,lt&&e.flags&1048576&&o0(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(t,e),t=e.pendingProps;var r=vs(e,Ht.current);fs(e,n),r=Nf(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,el(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,Lu(e,i,t,n),e=Nu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Mf(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=c_(i),t=bn(i,t),r){case 0:e=Iu(null,e,i,t,n);break e;case 1:e=rh(null,e,i,t,n);break e;case 11:e=nh(null,e,i,t,n);break e;case 14:e=ih(null,e,i,bn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Iu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),rh(t,e,i,r,n);case 3:e:{if(k0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d0(t,e),sl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(se(423)),e),e=sh(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(se(424)),e),e=sh(t,e,i,n,r);break e}else for(un=zi(e.stateNode.containerInfo.firstChild),fn=e,lt=!0,Dn=null,n=u0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=fi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return h0(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Eu(i,r)?o=null:s!==null&&Eu(i,s)&&(e.flags|=32),z0(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return B0(t,e,n);case 4:return bf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),nh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(il,i._currentValue),i._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===r.children&&!Jt.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=Tn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),ih(t,e,i,r,n);case 15:return O0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),ka(t,e),e.tag=1,en(i)?(t=!0,el(e)):t=!1,fs(e,n),I0(e,i,r),Lu(e,i,r,n),Nu(null,e,i,!0,t,n);case 19:return H0(t,e,n);case 22:return F0(t,e,n)}throw Error(se(156,e.tag))};function ig(t,e){return bm(t,e)}function l_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new l_(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c_(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===ff)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return vr(n.children,r,s,e);case cf:o=8,r|=8;break;case tu:return t=Sn(12,n,e,r|2),t.elementType=tu,t.lanes=s,t;case nu:return t=Sn(13,n,e,r),t.elementType=nu,t.lanes=s,t;case iu:return t=Sn(19,n,e,r),t.elementType=iu,t.lanes=s,t;case hm:return Nl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fm:o=10;break e;case dm:o=9;break e;case uf:o=11;break e;case ff:o=14;break e;case wi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,i,r,s,o,a,l){return t=new u_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function f_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rg(t){if(!t)return ji;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(en(n))return r0(t,n,e)}return e}function sg(t,e,n,i,r,s,o,a,l){return t=jf(n,i,!0,t,r,s,o,a,l),t.context=rg(null),n=t.current,i=jt(),r=Hi(n),s=ai(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Lo(t,r,i),tn(t,i),t}function Ul(t,e,n,i){var r=e.current,s=jt(),o=Hi(r);return n=rg(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,o),t!==null&&(Nn(t,r,o,s),Oa(t,r,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){mh(t,e),(t=t.alternate)&&mh(t,e)}function d_(){return null}var og=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}Ol.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Ul(t,e,null,null)};Ol.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Ul(null,t,null,null)}),e[ci]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&km(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gh(){}function h_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hl(o);s.call(c)}}var o=sg(e,i,t,0,null,!1,!1,"",gh);return t._reactRootContainer=o,t[ci]=o.current,_o(t.nodeType===8?t.parentNode:t),Mr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hl(l);a.call(c)}}var l=jf(t,0,!1,null,null,!1,!1,"",gh);return t._reactRootContainer=l,t[ci]=l.current,_o(t.nodeType===8?t.parentNode:t),Mr(function(){Ul(e,l,n,i)}),l}function zl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hl(o);a.call(l)}}Ul(e,o,t,r)}else o=h_(n,e,t,r,i);return hl(o)}Um=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(pf(e,n|1),tn(e,mt()),!($e&6)&&(Ms=mt()+500,Zi()))}break;case 13:Mr(function(){var i=ui(t,1);if(i!==null){var r=jt();Nn(i,t,1,r)}}),Yf(t,1)}};mf=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=jt();Nn(e,t,134217728,n)}Yf(t,134217728)}};Om=function(t){if(t.tag===13){var e=Hi(t),n=ui(t,e);if(n!==null){var i=jt();Nn(n,t,e,i)}Yf(t,e)}};Fm=function(){return Qe};zm=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};hu=function(t,e,n){switch(e){case"input":if(ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rl(i);if(!r)throw Error(se(90));mm(i),ou(i,r)}}}break;case"textarea":vm(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Tm=Vf;Am=Mr;var p_={usingClientEntryPoint:!1,Events:[Io,Qr,Rl,Mm,Em,Vf]},Vs={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m_={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rm(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Tl=ia.inject(m_),Wn=ia}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(se(200));return f_(t,e,null,n)};hn.createRoot=function(t,e){if(!qf(t))throw Error(se(299));var n=!1,i="",r=og;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,_o(t.nodeType===8?t.parentNode:t),new $f(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Rm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Mr(t)};hn.hydrate=function(t,e,n){if(!Fl(e))throw Error(se(200));return zl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=og;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sg(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ol(e)};hn.render=function(t,e,n){if(!Fl(e))throw Error(se(200));return zl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Fl(t))throw Error(se(40));return t._reactRootContainer?(Mr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};hn.unstable_batchedUpdates=Vf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return zl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag)}catch(t){console.error(t)}}ag(),am.exports=hn;var g_=am.exports,vh=g_;Jc.createRoot=vh.createRoot,Jc.hydrateRoot=vh.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="164",Cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v_=0,_h=1,__=2,lg=1,x_=2,ei=3,Yi=0,Yt=1,ii=2,Gi=0,hs=1,xh=2,yh=3,Sh=4,y_=5,cr=100,S_=101,M_=102,E_=103,T_=104,A_=200,w_=201,C_=202,R_=203,ju=204,Yu=205,P_=206,b_=207,L_=208,D_=209,I_=210,N_=211,U_=212,O_=213,F_=214,z_=0,k_=1,B_=2,pl=3,H_=4,V_=5,G_=6,W_=7,cg=0,X_=1,j_=2,Wi=0,Y_=1,$_=2,q_=3,K_=4,Z_=5,Q_=6,J_=7,ug=300,Es=301,Ts=302,$u=303,qu=304,kl=306,Ku=1e3,pr=1001,Zu=1002,Mn=1003,ex=1004,ra=1005,cn=1006,Sc=1007,mr=1008,di=1009,tx=1010,nx=1011,fg=1012,dg=1013,As=1014,Ni=1015,Bl=1016,hg=1017,pg=1018,Uo=1020,ix=35902,rx=1021,sx=1022,Gn=1023,ox=1024,ax=1025,ps=1026,Co=1027,mg=1028,gg=1029,lx=1030,vg=1031,_g=1033,Mc=33776,Ec=33777,Tc=33778,Ac=33779,Mh=35840,Eh=35841,Th=35842,Ah=35843,wh=36196,Ch=37492,Rh=37496,Ph=37808,bh=37809,Lh=37810,Dh=37811,Ih=37812,Nh=37813,Uh=37814,Oh=37815,Fh=37816,zh=37817,kh=37818,Bh=37819,Hh=37820,Vh=37821,wc=36492,Gh=36494,Wh=36495,cx=36283,Xh=36284,jh=36285,Yh=36286,ux=3200,fx=3201,dx=0,hx=1,Li="",kn="srgb",Qi="srgb-linear",Zf="display-p3",Hl="display-p3-linear",ml="linear",rt="srgb",gl="rec709",vl="p3",Pr=7680,$h=519,px=512,mx=513,gx=514,xg=515,vx=516,_x=517,xx=518,yx=519,qh=35044,sa=35048,Kh="300 es",oi=2e3,_l=2001;class Ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zh=1234567;const ao=Math.PI/180,Ro=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function Qf(t,e){return(t%e+e)%e}function Sx(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Mx(t,e,n){return t!==e?(n-t)/(e-t):0}function lo(t,e,n){return(1-n)*t+n*e}function Ex(t,e,n,i){return lo(t,e,1-Math.exp(-n*i))}function Tx(t,e=1){return e-Math.abs(Qf(t,e*2)-e)}function Ax(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function wx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Cx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Rx(t,e){return t+Math.random()*(e-t)}function Px(t){return t*(.5-Math.random())}function bx(t){t!==void 0&&(Zh=t);let e=Zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lx(t){return t*ao}function Dx(t){return t*Ro}function Ix(t){return(t&t-1)===0&&t!==0}function Nx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ux(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ox(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),g=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*g,a*c);break;case"YXY":t.set(l*g,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Fx={DEG2RAD:ao,RAD2DEG:Ro,generateUUID:bs,clamp:Bt,euclideanModulo:Qf,mapLinear:Sx,inverseLerp:Mx,lerp:lo,damp:Ex,pingpong:Tx,smoothstep:Ax,smootherstep:wx,randInt:Cx,randFloat:Rx,randFloatSpread:Px,seededRandom:bx,degToRad:Lx,radToDeg:Dx,isPowerOfTwo:Ix,ceilPowerOfTwo:Nx,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:Ox,normalize:Vt,denormalize:jr};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],g=i[5],_=i[8],x=r[0],v=r[3],f=r[6],p=r[1],m=r[4],S=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*p+l*R,s[3]=o*v+a*m+l*A,s[6]=o*f+a*S+l*T,s[1]=c*x+u*p+d*R,s[4]=c*v+u*m+d*A,s[7]=c*f+u*S+d*T,s[2]=h*x+g*p+_*R,s[5]=h*v+g*m+_*A,s[8]=h*f+g*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,g=c*s-o*l,_=n*d+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ze;function yg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Po(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zx(){const t=Po("canvas");return t.style.display="block",t}const Qh={};function kx(t){t in Qh||(Qh[t]=!0,console.warn(t))}const Jh=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ep=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[Qi]:{transfer:ml,primaries:gl,toReference:t=>t,fromReference:t=>t},[kn]:{transfer:rt,primaries:gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:ml,primaries:vl,toReference:t=>t.applyMatrix3(ep),fromReference:t=>t.applyMatrix3(Jh)},[Zf]:{transfer:rt,primaries:vl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ep),fromReference:t=>t.applyMatrix3(Jh).convertLinearToSRGB()}},Bx=new Set([Qi,Hl]),et={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Bx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=oa[e].toReference,r=oa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oa[t].primaries},getTransfer:function(t){return t===Li?ml:oa[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class Hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Po("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Po("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vx=0;class Sg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pc(r[o].image)):s.push(Pc(r[o]))}else s=Pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gx=0;class $t extends Ar{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=pr,r=pr,s=cn,o=mr,a=Gn,l=di,c=$t.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=bs(),this.name="",this.source=new Sg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ku:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ku:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ug;$t.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],g=l[5],_=l[9],x=l[2],v=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-v)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+v)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(g+1)/2,R=(f+1)/2,A=(u+h)/4,T=(d+x)/4,P=(_+v)/4;return m>S&&m>R?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let p=Math.sqrt((v-_)*(v-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(v-_)/p,this.y=(d-x)/p,this.z=(h-u)/p,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends Ar{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Wx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mg extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eg extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==g||u!==_){let v=1-a;const f=l*h+c*g+u*_+d*x,p=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const R=Math.sqrt(m),A=Math.atan2(R,f*p);v=Math.sin(v*A)/R,a=Math.sin(a*A)/R}const S=a*p;if(l=l*v+h*S,c=c*v+g*S,u=u*v+_*S,d=d*v+x*S,v===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*g-c*h,e[n+1]=l*_+u*h+c*d-a*g,e[n+2]=c*_+u*g+a*h-l*d,e[n+3]=u*_-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*g*_,this._y=c*g*d-h*u*_,this._z=c*u*_+h*g*d,this._w=c*u*d-h*g*_;break;case"YXZ":this._x=h*u*d+c*g*_,this._y=c*g*d-h*u*_,this._z=c*u*_-h*g*d,this._w=c*u*d+h*g*_;break;case"ZXY":this._x=h*u*d-c*g*_,this._y=c*g*d+h*u*_,this._z=c*u*_+h*g*d,this._w=c*u*d-h*g*_;break;case"ZYX":this._x=h*u*d-c*g*_,this._y=c*g*d+h*u*_,this._z=c*u*_-h*g*d,this._w=c*u*d+h*g*_;break;case"YZX":this._x=h*u*d+c*g*_,this._y=c*g*d+h*u*_,this._z=c*u*_-h*g*d,this._w=c*u*d-h*g*_;break;case"XZY":this._x=h*u*d-c*g*_,this._y=c*g*d-h*u*_,this._z=c*u*_+h*g*d,this._w=c*u*d+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new N,tp=new hi;class Oo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),la.subVectors(this.max,Gs),Lr.subVectors(e.a,Gs),Dr.subVectors(e.b,Gs),Ir.subVectors(e.c,Gs),yi.subVectors(Dr,Lr),Si.subVectors(Ir,Dr),er.subVectors(Lr,Ir);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-er.z,er.y,yi.z,0,-yi.x,Si.z,0,-Si.x,er.z,0,-er.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-er.y,er.x,0];return!Lc(n,Lr,Dr,Ir,la)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Lr,Dr,Ir,la))?!1:(ca.crossVectors(yi,Si),n=[ca.x,ca.y,ca.z],Lc(n,Lr,Dr,Ir,la))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new N,new N,new N,new N,new N,new N,new N,new N],Cn=new N,aa=new Oo,Lr=new N,Dr=new N,Ir=new N,yi=new N,Si=new N,er=new N,Gs=new N,la=new N,ca=new N,tr=new N;function Lc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xx=new Oo,Ws=new N,Dc=new N;class Fo{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Xx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Dc)),this.expandByPoint(Ws.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new N,Ic=new N,ua=new N,Mi=new N,Nc=new N,fa=new N,Uc=new N;class Vl{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ic.copy(e).add(n).multiplyScalar(.5),ua.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Ic);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ua),a=Mi.dot(this.direction),l=-Mi.dot(ua),c=Mi.lengthSq(),u=Math.abs(1-o*o);let d,h,g,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ic).addScaledVector(ua,h),g}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){Nc.subVectors(n,e),fa.subVectors(i,e),Uc.crossVectors(Nc,fa);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(Mi,fa));if(l<0)return null;const c=a*this.direction.dot(Nc.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,g,_,x,v){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,g,_,x,v)}set(e,n,i,r,s,o,a,l,c,u,d,h,g,_,x,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=g,f[7]=_,f[11]=x,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,g=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=g+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,g=l*d,_=c*u,x=c*d;n[0]=h+x*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=g*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,g=l*d,_=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,g=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=_*c-g,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=_*d+g,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=g*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jx,e,Yx)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),da.crossVectors(on,Ei),r[0]=Ei.x,r[4]=da.x,r[8]=on.x,r[1]=Ei.y,r[5]=da.y,r[9]=on.y,r[2]=Ei.z,r[6]=da.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],g=i[13],_=i[2],x=i[6],v=i[10],f=i[14],p=i[3],m=i[7],S=i[11],R=i[15],A=r[0],T=r[4],P=r[8],E=r[12],y=r[1],D=r[5],U=r[9],b=r[13],k=r[2],X=r[6],K=r[10],Q=r[14],I=r[3],j=r[7],Y=r[11],ne=r[15];return s[0]=o*A+a*y+l*k+c*I,s[4]=o*T+a*D+l*X+c*j,s[8]=o*P+a*U+l*K+c*Y,s[12]=o*E+a*b+l*Q+c*ne,s[1]=u*A+d*y+h*k+g*I,s[5]=u*T+d*D+h*X+g*j,s[9]=u*P+d*U+h*K+g*Y,s[13]=u*E+d*b+h*Q+g*ne,s[2]=_*A+x*y+v*k+f*I,s[6]=_*T+x*D+v*X+f*j,s[10]=_*P+x*U+v*K+f*Y,s[14]=_*E+x*b+v*Q+f*ne,s[3]=p*A+m*y+S*k+R*I,s[7]=p*T+m*D+S*X+R*j,s[11]=p*P+m*U+S*K+R*Y,s[15]=p*E+m*b+S*Q+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],g=e[14],_=e[3],x=e[7],v=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+x*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*u-s*l*u)+v*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],g=e[11],_=e[12],x=e[13],v=e[14],f=e[15],p=d*v*c-x*h*c+x*l*g-a*v*g-d*l*f+a*h*f,m=_*h*c-u*v*c-_*l*g+o*v*g+u*l*f-o*h*f,S=u*x*c-_*d*c+_*a*g-o*x*g-u*a*f+o*d*f,R=_*d*l-u*x*l-_*a*h+o*x*h+u*a*v-o*d*v,A=n*p+i*m+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=p*T,e[1]=(x*h*s-d*v*s-x*r*g+i*v*g+d*r*f-i*h*f)*T,e[2]=(a*v*s-x*l*s+x*r*c-i*v*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*T,e[4]=m*T,e[5]=(u*v*s-_*h*s+_*r*g-n*v*g-u*r*f+n*h*f)*T,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*f-n*l*f)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(_*d*s-u*x*s-_*i*g+n*x*g+u*i*f-n*d*f)*T,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*g-n*a*g)*T,e[12]=R*T,e[13]=(u*x*r-_*d*r+_*i*h-n*x*h-u*i*v+n*d*v)*T,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*v-n*a*v)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,g=s*u,_=s*d,x=o*u,v=o*d,f=a*d,p=l*c,m=l*u,S=l*d,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*R,r[1]=(g+S)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(g-S)*A,r[5]=(1-(h+f))*A,r[6]=(v+p)*A,r[7]=0,r[8]=(_+m)*T,r[9]=(v-p)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/o,d=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=oi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===oi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===_l)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=oi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*u;let _,x;if(a===oi)_=(o+s)*d,x=-2*d;else if(a===_l)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new N,Rn=new pt,jx=new N(0,0,0),Yx=new N(1,1,1),Ei=new N,da=new N,on=new N,np=new pt,ip=new hi;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $x=0;const rp=new N,Ur=new hi,Zn=new pt,ha=new N,Xs=new N,qx=new N,Kx=new hi,sp=new N(1,0,0),op=new N(0,1,0),ap=new N(0,0,1),lp={type:"added"},Zx={type:"removed"},Or={type:"childadded",child:null},Oc={type:"childremoved",child:null};class nn extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new N,n=new pi,i=new hi,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,n){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ha.copy(e):ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Xs,ha,this.up):Zn.lookAt(ha,Xs,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lp),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zx),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lp),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new N(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new N,Qn=new N,Fc=new N,Jn=new N,Fr=new N,zr=new N,cp=new N,zc=new N,kc=new N,Bc=new N;class Vn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),Qn.subVectors(i,n),Fc.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(Qn),l=Pn.dot(Fc),c=Qn.dot(Qn),u=Qn.dot(Fc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),Qn.subVectors(e,n),Pn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),zr.subVectors(s,i),zc.subVectors(e,i);const l=Fr.dot(zc),c=zr.dot(zc);if(l<=0&&c<=0)return n.copy(i);kc.subVectors(e,r);const u=Fr.dot(kc),d=zr.dot(kc);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Fr,o);Bc.subVectors(e,s);const g=Fr.dot(Bc),_=zr.dot(Bc);if(_>=0&&g<=_)return n.copy(s);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(zr,a);const v=u*_-g*d;if(v<=0&&d-u>=0&&g-_>=0)return cp.subVectors(s,r),a=(d-u)/(d-u+(g-_)),n.copy(r).addScaledVector(cp,a);const f=1/(v+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(Fr,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Qf(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hc(o,s,e+1/3),this.g=Hc(o,s,e),this.b=Hc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=Tg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Bt(zt.r*255,0,255))*65536+Math.round(Bt(zt.g*255,0,255))*256+Math.round(Bt(zt.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=kn){et.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(pa);const i=lo(Ti.h,pa.h,n),r=lo(Ti.s,pa.s,n),s=lo(Ti.l,pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new We;We.NAMES=Tg;let Qx=0;class zo extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=hs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Yu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Yu&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gl extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,ma=new Ce;class gt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ma.fromBufferAttribute(this,n),ma.applyMatrix3(e),this.setXY(n,ma.x,ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class Ag extends gt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wg extends gt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends gt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Jx=0;const vn=new pt,Vc=new nn,kr=new N,an=new Oo,js=new Oo,wt=new N;class rn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?wg:Ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(an.min,js.min),an.expandByPoint(wt),wt.addVectors(an.max,js.max),an.expandByPoint(wt)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),wt.add(kr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,u=new N,d=new N,h=new Ce,g=new Ce,_=new Ce,x=new N,v=new N;function f(P,E,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,E),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),g.sub(h),_.sub(h);const D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(D),v.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(x),a[E].add(x),a[y].add(x),l[P].add(v),l[E].add(v),l[y].add(v))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let P=0,E=p.length;P<E;++P){const y=p[P],D=y.start,U=y.count;for(let b=D,k=D+U;b<k;b+=3)f(e.getX(b+0),e.getX(b+1),e.getX(b+2))}const m=new N,S=new N,R=new N,A=new N;function T(P){R.fromBufferAttribute(r,P),A.copy(R);const E=a[P];m.copy(E),m.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(A,E);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,m.x,m.y,m.z,D)}for(let P=0,E=p.length;P<E;++P){const y=p[P],D=y.start,U=y.count;for(let b=D,k=D+U;b<k;b+=3)T(e.getX(b+0)),T(e.getX(b+1)),T(e.getX(b+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),x=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*u;for(let f=0;f<u;f++)h[_++]=c[g++]}return new gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,g=d.length;h<g;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new pt,nr=new Vl,ga=new Fo,fp=new N,Br=new N,Hr=new N,Vr=new N,Gc=new N,va=new N,_a=new Ce,xa=new Ce,ya=new Ce,dp=new N,hp=new N,pp=new N,Sa=new N,Ma=new N;class Xt extends nn{constructor(e=new rn,n=new Gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Gc.fromBufferAttribute(d,e),o?va.addScaledVector(Gc,u):va.addScaledVector(Gc.sub(n),u))}n.add(va)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(ga.containsPoint(nr.origin)===!1&&(nr.intersectSphere(ga,fp)===null||nr.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(up.copy(s).invert(),nr.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const v=h[_],f=o[v.materialIndex],p=Math.max(v.start,g.start),m=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let S=p,R=m;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Ea(this,f,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let v=_,f=x;v<f;v+=3){const p=a.getX(v),m=a.getX(v+1),S=a.getX(v+2);r=Ea(this,o,e,i,c,u,d,p,m,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const v=h[_],f=o[v.materialIndex],p=Math.max(v.start,g.start),m=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=p,R=m;S<R;S+=3){const A=S,T=S+1,P=S+2;r=Ea(this,f,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let v=_,f=x;v<f;v+=3){const p=v,m=v+1,S=v+2;r=Ea(this,o,e,i,c,u,d,p,m,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function ey(t,e,n,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ma);return c<n.near||c>n.far?null:{distance:c,point:Ma.clone(),object:t}}function Ea(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Br),t.getVertexPosition(l,Hr),t.getVertexPosition(c,Vr);const u=ey(t,e,n,i,Br,Hr,Vr,Sa);if(u){r&&(_a.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),u.uv=Vn.getInterpolation(Sa,Br,Hr,Vr,_a,xa,ya,new Ce)),s&&(_a.fromBufferAttribute(s,a),xa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),u.uv1=Vn.getInterpolation(Sa,Br,Hr,Vr,_a,xa,ya,new Ce)),o&&(dp.fromBufferAttribute(o,a),hp.fromBufferAttribute(o,l),pp.fromBufferAttribute(o,c),u.normal=Vn.getInterpolation(Sa,Br,Hr,Vr,dp,hp,pp,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Vn.getNormal(Br,Hr,Vr,d.normal),u.face=d}return u}class ko extends rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(d,2));function _(x,v,f,p,m,S,R,A,T,P,E){const y=S/T,D=R/P,U=S/2,b=R/2,k=A/2,X=T+1,K=P+1;let Q=0,I=0;const j=new N;for(let Y=0;Y<K;Y++){const ne=Y*D-b;for(let de=0;de<X;de++){const ge=de*y-U;j[x]=ge*p,j[v]=ne*m,j[f]=k,c.push(j.x,j.y,j.z),j[x]=0,j[v]=0,j[f]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(de/T),d.push(1-Y/P),Q+=1}}for(let Y=0;Y<P;Y++)for(let ne=0;ne<T;ne++){const de=h+ne+X*Y,ge=h+ne+X*(Y+1),W=h+(ne+1)+X*(Y+1),B=h+(ne+1)+X*Y;l.push(de,ge,B),l.push(ge,W,B),I+=6}a.addGroup(g,I,E),g+=I,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function ty(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ny={clone:ws,merge:Gt};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ed extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new N,mp=new Ce,gp=new Ce;class yn extends ed{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,mp,gp),n.subVectors(gp,mp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Wr=1;class sy extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Gr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Gr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Gr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Gr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Gr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Gr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rg extends $t{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oy extends $i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ko(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Xt(r,s),a=n.minFilter;return n.minFilter===mr&&(n.minFilter=cn),new sy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Wc=new N,ay=new N,ly=new ze;class Ri{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wc.subVectors(i,n).cross(ay.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ly.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Fo,Ta=new N;class Pg{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],g=r[8],_=r[9],x=r[10],v=r[11],f=r[12],p=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,v-g,S-f).normalize(),i[1].setComponents(l+s,h+c,v+g,S+f).normalize(),i[2].setComponents(l+o,h+u,v+_,S+p).normalize(),i[3].setComponents(l-o,h-u,v-_,S-p).normalize(),i[4].setComponents(l-a,h-d,v-x,S-m).normalize(),n===oi)i[5].setComponents(l+a,h+d,v+x,S+m).normalize();else if(n===_l)i[5].setComponents(a,d,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cy(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let g=0,_=h.length;g<_;g++){const x=h[g];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wl extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,g=[],_=[],x=[],v=[];for(let f=0;f<u;f++){const p=f*h-o;for(let m=0;m<c;m++){const S=m*d-s;_.push(S,-p,0),x.push(0,0,1),v.push(m/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let p=0;p<a;p++){const m=p+c*f,S=p+c*(f+1),R=p+1+c*(f+1),A=p+1+c*f;g.push(m,S,A),g.push(S,R,A)}this.setIndex(g),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
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
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
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
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
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
#endif`,Ty=`#ifdef USE_BUMPMAP
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,nS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,iS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,yS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DS=`#ifdef USE_NORMALMAP
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
#endif`,IS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,$S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`#include <common>
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
}`,gM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vM=`#define DISTANCE
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
}`,_M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
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
}`,MM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,TM=`uniform vec3 diffuse;
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
}`,AM=`#define LAMBERT
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
}`,wM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,CM=`#define MATCAP
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
}`,RM=`#define MATCAP
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
}`,PM=`#define NORMAL
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
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LM=`#define PHONG
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
}`,DM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,IM=`#define STANDARD
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
}`,NM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,UM=`#define TOON
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
}`,OM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,FM=`uniform float size;
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
}`,zM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,VM=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:uy,alphahash_pars_fragment:fy,alphamap_fragment:dy,alphamap_pars_fragment:hy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:vy,batching_pars_vertex:_y,batching_vertex:xy,begin_vertex:yy,beginnormal_vertex:Sy,bsdfs:My,iridescence_fragment:Ey,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Py,color_pars_fragment:by,color_pars_vertex:Ly,color_vertex:Dy,common:Iy,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Uy,displacementmap_pars_vertex:Oy,displacementmap_vertex:Fy,emissivemap_fragment:zy,emissivemap_pars_fragment:ky,colorspace_fragment:By,colorspace_pars_fragment:Hy,envmap_fragment:Vy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:nS,envmap_vertex:jy,fog_vertex:Yy,fog_pars_vertex:$y,fog_fragment:qy,fog_pars_fragment:Ky,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:Qy,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:eS,lights_pars_begin:tS,lights_toon_fragment:iS,lights_toon_pars_fragment:rS,lights_phong_fragment:sS,lights_phong_pars_fragment:oS,lights_physical_fragment:aS,lights_physical_pars_fragment:lS,lights_fragment_begin:cS,lights_fragment_maps:uS,lights_fragment_end:fS,logdepthbuf_fragment:dS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:pS,logdepthbuf_vertex:mS,map_fragment:gS,map_pars_fragment:vS,map_particle_fragment:_S,map_particle_pars_fragment:xS,metalnessmap_fragment:yS,metalnessmap_pars_fragment:SS,morphinstance_vertex:MS,morphcolor_vertex:ES,morphnormal_vertex:TS,morphtarget_pars_vertex:AS,morphtarget_vertex:wS,normal_fragment_begin:CS,normal_fragment_maps:RS,normal_pars_fragment:PS,normal_pars_vertex:bS,normal_vertex:LS,normalmap_pars_fragment:DS,clearcoat_normal_fragment_begin:IS,clearcoat_normal_fragment_maps:NS,clearcoat_pars_fragment:US,iridescence_pars_fragment:OS,opaque_fragment:FS,packing:zS,premultiplied_alpha_fragment:kS,project_vertex:BS,dithering_fragment:HS,dithering_pars_fragment:VS,roughnessmap_fragment:GS,roughnessmap_pars_fragment:WS,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:jS,shadowmap_vertex:YS,shadowmask_pars_fragment:$S,skinbase_vertex:qS,skinning_pars_vertex:KS,skinning_vertex:ZS,skinnormal_vertex:QS,specularmap_fragment:JS,specularmap_pars_fragment:eM,tonemapping_fragment:tM,tonemapping_pars_fragment:nM,transmission_fragment:iM,transmission_pars_fragment:rM,uv_pars_fragment:sM,uv_pars_vertex:oM,uv_vertex:aM,worldpos_vertex:lM,background_vert:cM,background_frag:uM,backgroundCube_vert:fM,backgroundCube_frag:dM,cube_vert:hM,cube_frag:pM,depth_vert:mM,depth_frag:gM,distanceRGBA_vert:vM,distanceRGBA_frag:_M,equirect_vert:xM,equirect_frag:yM,linedashed_vert:SM,linedashed_frag:MM,meshbasic_vert:EM,meshbasic_frag:TM,meshlambert_vert:AM,meshlambert_frag:wM,meshmatcap_vert:CM,meshmatcap_frag:RM,meshnormal_vert:PM,meshnormal_frag:bM,meshphong_vert:LM,meshphong_frag:DM,meshphysical_vert:IM,meshphysical_frag:NM,meshtoon_vert:UM,meshtoon_frag:OM,points_vert:FM,points_frag:zM,shadow_vert:kM,shadow_frag:BM,sprite_vert:HM,sprite_frag:VM},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Bn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Bn.physical={uniforms:Gt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Aa={r:0,b:0,g:0},rr=new pi,GM=new pt;function WM(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,d=null,h=0,g=null;function _(p){let m=p.isScene===!0?p.background:null;return m&&m.isTexture&&(m=(p.backgroundBlurriness>0?n:e).get(m)),m}function x(p){let m=!1;const S=_(p);S===null?f(a,l):S&&S.isColor&&(f(S,1),m=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function v(p,m){const S=_(m);S&&(S.isCubeTexture||S.mapping===kl)?(u===void 0&&(u=new Xt(new ko(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ws(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rr.copy(m.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GM.makeRotationFromEuler(rr)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(d!==S||h!==S.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Xt(new Wl(2,2),new On({name:"BackgroundMaterial",uniforms:ws(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,m){p.getRGB(Aa,Cg(t)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(a,l)},render:x,addToRenderList:v}}function XM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,D,U,b,k){let X=!1;const K=d(b,U,D);s!==K&&(s=K,c(s.object)),X=g(y,b,U,k),X&&_(y,b,U,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(y,D,U,b),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,D,U){const b=U.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let K=X[b];return K===void 0&&(K=h(l()),X[b]=K),K}function h(y){const D=[],U=[],b=[];for(let k=0;k<n;k++)D[k]=0,U[k]=0,b[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:b,object:y,attributes:{},index:null}}function g(y,D,U,b){const k=s.attributes,X=D.attributes;let K=0;const Q=U.getAttributes();for(const I in Q)if(Q[I].location>=0){const Y=k[I];let ne=X[I];if(ne===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;K++}return s.attributesNum!==K||s.index!==b}function _(y,D,U,b){const k={},X=D.attributes;let K=0;const Q=U.getAttributes();for(const I in Q)if(Q[I].location>=0){let Y=X[I];Y===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),k[I]=ne,K++}s.attributes=k,s.attributesNum=K,s.index=b}function x(){const y=s.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function v(y){f(y,0)}function f(y,D){const U=s.newAttributes,b=s.enabledAttributes,k=s.attributeDivisors;U[y]=1,b[y]===0&&(t.enableVertexAttribArray(y),b[y]=1),k[y]!==D&&(t.vertexAttribDivisor(y,D),k[y]=D)}function p(){const y=s.newAttributes,D=s.enabledAttributes;for(let U=0,b=D.length;U<b;U++)D[U]!==y[U]&&(t.disableVertexAttribArray(U),D[U]=0)}function m(y,D,U,b,k,X,K){K===!0?t.vertexAttribIPointer(y,D,U,k,X):t.vertexAttribPointer(y,D,U,b,k,X)}function S(y,D,U,b){x();const k=b.attributes,X=U.getAttributes(),K=D.defaultAttributeValues;for(const Q in X){const I=X[Q];if(I.location>=0){let j=k[Q];if(j===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const Y=j.normalized,ne=j.itemSize,de=e.get(j);if(de===void 0)continue;const ge=de.buffer,W=de.type,B=de.bytesPerElement,ee=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===dg;if(j.isInterleavedBufferAttribute){const J=j.data,ve=J.stride,Te=j.offset;if(J.isInstancedInterleavedBuffer){for(let O=0;O<I.locationSize;O++)f(I.location+O,J.meshPerAttribute);y.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let O=0;O<I.locationSize;O++)v(I.location+O);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let O=0;O<I.locationSize;O++)m(I.location+O,ne/I.locationSize,W,Y,ve*B,(Te+ne/I.locationSize*O)*B,ee)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)f(I.location+J,j.meshPerAttribute);y.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<I.locationSize;J++)v(I.location+J);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let J=0;J<I.locationSize;J++)m(I.location+J,ne/I.locationSize,W,Y,ne*B,ne/I.locationSize*J*B,ee)}}else if(K!==void 0){const Y=K[Q];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(I.location,Y);break;case 3:t.vertexAttrib3fv(I.location,Y);break;case 4:t.vertexAttrib4fv(I.location,Y);break;default:t.vertexAttrib1fv(I.location,Y)}}}}p()}function R(){P();for(const y in i){const D=i[y];for(const U in D){const b=D[U];for(const k in b)u(b[k].object),delete b[k];delete D[U]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const U in D){const b=D[U];for(const k in b)u(b[k].object),delete b[k];delete D[U]}delete i[y.id]}function T(y){for(const D in i){const U=i[D];if(U[y.id]===void 0)continue;const b=U[y.id];for(const k in b)u(b[k].object),delete b[k];delete U[y.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:v,disableUnusedAttributes:p}}function jM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];n.update(g,i,1)}}function l(c,u,d,h){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Gn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:S,maxSamples:R}}function $M(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ri,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,g){const _=d.clippingPlanes,x=d.clipIntersection,v=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!v)s?u(null):c();else{const p=s?0:i,m=p*4;let S=f.clippingState||null;l.value=S,S=u(_,h,m,g);for(let R=0;R!==m;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,g,_){const x=d!==null?d.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const f=g+x*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<f)&&(v=new Float32Array(f));for(let m=0,S=g;m!==x;++m,S+=4)o.copy(d[m]).applyMatrix4(p,a),o.normal.toArray(v,S),v[S+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function qM(t){let e=new WeakMap;function n(o,a){return a===$u?o.mapping=Es:a===qu&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$u||a===qu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class KM extends ed{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,vp=[.125,.215,.35,.446,.526,.582],ur=20,Xc=new KM,_p=new We;let jc=null,Yc=0,$c=0,qc=!1;const lr=(1+Math.sqrt(5))/2,Xr=1/lr,xp=[new N(-lr,Xr,0),new N(lr,Xr,0),new N(-Xr,0,lr),new N(Xr,0,lr),new N(0,lr,-Xr),new N(0,lr,Xr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Yc,$c),this._renderer.xr.enabled=qc,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Bl,format:Gn,colorSpace:Qi,depthBuffer:!1},r=Sp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZM(s)),this._blurMaterial=QM(s,e,n)}return r}_compileMaterial(e){const n=new Xt(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(_p),u.toneMapping=Wi,u.autoClear=!1;const g=new Gl({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new Xt(new ko,g);let x=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,x=!0):(g.color.copy(_p),x=!0);for(let f=0;f<6;f++){const p=f%3;p===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):p===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const m=this._cubeSize;wa(r,p*m,f>2?m:0,m,m),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xp[(r-s-1)%xp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xt(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ur-1),x=s/_,v=isFinite(s)?1+Math.floor(u*x):ur;v>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ur}`);const f=[];let p=0;for(let T=0;T<ur;++T){const P=T/x,E=Math.exp(-P*P/2);f.push(E),T===0?p+=E:T<v&&(p+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/p;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=_,h.mipInt.value=m-i;const S=this._sizeLods[r],R=3*S*(r>m-ss?r-m+ss:0),A=4*(this._cubeSize-S);wa(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Xc)}}function ZM(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+vp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ss?l=vp[o-t+ss-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,_=6,x=3,v=2,f=1,p=new Float32Array(x*_*g),m=new Float32Array(v*_*g),S=new Float32Array(f*_*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];p.set(E,x*_*A),m.set(h,v*_*A);const y=[A,A,A,A,A,A];S.set(y,f*_*A)}const R=new rn;R.setAttribute("position",new gt(p,x)),R.setAttribute("uv",new gt(m,v)),R.setAttribute("faceIndex",new gt(S,f)),e.push(R),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sp(t,e,n){const i=new $i(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QM(t,e,n){const i=new Float32Array(ur),r=new N(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Mp(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ep(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$u||l===qu,u=l===Es||l===Ts;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new yp(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(n===null&&(n=new yp(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function eE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let v=0,f=x.length;v<f;v++)e.remove(x[v])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const x=g[_];for(let v=0,f=x.length;v<f;v++)e.update(x[v],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,_=d.attributes.position;let x=0;if(g!==null){const p=g.array;x=g.version;for(let m=0,S=p.length;m<S;m+=3){const R=p[m+0],A=p[m+1],T=p[m+2];h.push(R,A,A,T,T,R)}}else if(_!==void 0){const p=_.array;x=_.version;for(let m=0,S=p.length/3-1;m<S;m+=3){const R=m+0,A=m+1,T=m+2;h.push(R,A,A,T,T,R)}}else return;const v=new(yg(h)?wg:Ag)(h,1);v.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,v)}function u(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function nE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function c(h,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,h*o,_),n.update(g,i,_))}function u(h,g,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_;v++)this.render(h[v]/o,g[v]);else{x.multiDrawElementsWEBGL(i,g,0,s,h,0,_);let v=0;for(let f=0;f<_;f++)v+=g[f];n.update(v,i,1)}}function d(h,g,_,x){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<h.length;f++)c(h[f]/o,g[f],x[f]);else{v.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,x,0,_);let f=0;for(let p=0;p<_;p++)f+=g[p];for(let p=0;p<x.length;p++)n.update(f,i,x[p])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function iE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rE(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*d),P=new Mg(T,R,A,d);P.type=Ni,P.needsUpdate=!0;const E=S*4;for(let D=0;D<d;D++){const U=f[D],b=p[D],k=m[D],X=R*A*4*D;for(let K=0;K<U.count;K++){const Q=K*E;_===!0&&(r.fromBufferAttribute(U,K),T[X+Q+0]=r.x,T[X+Q+1]=r.y,T[X+Q+2]=r.z,T[X+Q+3]=0),x===!0&&(r.fromBufferAttribute(b,K),T[X+Q+4]=r.x,T[X+Q+5]=r.y,T[X+Q+6]=r.z,T[X+Q+7]=0),v===!0&&(r.fromBufferAttribute(k,K),T[X+Q+8]=r.x,T[X+Q+9]=r.y,T[X+Q+10]=r.z,T[X+Q+11]=k.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ce(R,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function sE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Lg extends $t{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ps,u!==ps&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ps&&(i=As),i===void 0&&u===Co&&(i=Uo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dg=new $t,Ig=new Lg(1,1);Ig.compareFunction=xg;const Ng=new Mg,Ug=new Eg,Og=new Rg,Tp=[],Ap=[],wp=new Float32Array(16),Cp=new Float32Array(9),Rp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Ap[e];n===void 0&&(n=new Int32Array(e),Ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function lE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function cE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function uE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Rp.set(i),t.uniformMatrix2fv(this.addr,!1,Rp),Tt(n,i)}}function fE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Cp.set(i),t.uniformMatrix3fv(this.addr,!1,Cp),Tt(n,i)}}function dE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;wp.set(i),t.uniformMatrix4fv(this.addr,!1,wp),Tt(n,i)}}function hE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function mE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function vE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function SE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ig:Dg;n.setTexture2D(e||s,r)}function ME(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ug,r)}function EE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Og,r)}function TE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ng,r)}function AE(t){switch(t){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return hE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return _E;case 36295:return xE;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return TE}}function wE(t,e){t.uniform1fv(this.addr,e)}function CE(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function RE(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function PE(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function bE(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LE(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DE(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IE(t,e){t.uniform1iv(this.addr,e)}function NE(t,e){t.uniform2iv(this.addr,e)}function UE(t,e){t.uniform3iv(this.addr,e)}function OE(t,e){t.uniform4iv(this.addr,e)}function FE(t,e){t.uniform1uiv(this.addr,e)}function zE(t,e){t.uniform2uiv(this.addr,e)}function kE(t,e){t.uniform3uiv(this.addr,e)}function BE(t,e){t.uniform4uiv(this.addr,e)}function HE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dg,s[o])}function VE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ug,s[o])}function GE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Og,s[o])}function WE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ng,s[o])}function XE(t){switch(t){case 5126:return wE;case 35664:return CE;case 35665:return RE;case 35666:return PE;case 35674:return bE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return IE;case 35667:case 35671:return NE;case 35668:case 35672:return UE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return zE;case 36295:return kE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}class jE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AE(n.type)}}class YE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XE(n.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Pp(t,e){t.seq.push(e),t.map[e.id]=e}function qE(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),o=Kc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pp(n,c===void 0?new jE(a,t,e):new YE(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $E(a),Pp(n,d)),n=d}}}class Ga{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KE=37297;let ZE=0;function QE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function JE(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===vl&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===vl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Hl:return[i,"LinearTransferOETF"];case kn:case Zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+QE(t.getShaderSource(e),o)}else return r}function eT(t,e){const n=JE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tT(t,e){let n;switch(e){case Y_:n="Linear";break;case $_:n="Reinhard";break;case q_:n="OptimizedCineon";break;case K_:n="ACESFilmic";break;case Q_:n="AgX";break;case J_:n="Neutral";break;case Z_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function iT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zs(t){return t!==""}function Dp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(t){return t.replace(sT,aT)}const oT=new Map;function aT(t,e){let n=Fe[e];if(n===void 0){const i=oT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qu(n)}const lT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(t){return t.replace(lT,cT)}function cT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Up(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function uT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function hT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case X_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function pT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=uT(n),c=fT(n),u=dT(n),d=hT(n),h=pT(n),g=nT(n),_=iT(s),x=r.createProgram();let v,f,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(v=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Wi?tT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,eT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Qu(o),o=Dp(o,n),o=Ip(o,n),a=Qu(a),a=Dp(a,n),a=Ip(a,n),o=Np(o),a=Np(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const m=p+v+o,S=p+f+a,R=bp(r,r.VERTEX_SHADER,m),A=bp(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(D){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),b=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(A).trim();let X=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const Q=Lp(r,R,"vertex"),I=Lp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Q+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(b===""||k==="")&&(K=!1);K&&(D.diagnostics={runnable:X,programLog:U,vertexShader:{log:b,prefix:v},fragmentShader:{log:k,prefix:f}})}r.deleteShader(R),r.deleteShader(A),P=new Ga(r,x),E=rT(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,KE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let gT=0;class vT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _T(e),n.set(e,i)),i}}class _T{constructor(e){this.id=gT++,this.code=e,this.usedTimes=0}}function xT(t,e,n,i,r,s,o){const a=new Jf,l=new vT,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function v(E,y,D,U,b){const k=U.fog,X=b.geometry,K=E.isMeshStandardMaterial?U.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),I=Q&&Q.mapping===kl?Q.image.height:null,j=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=Y!==void 0?Y.length:0;let de=0;X.morphAttributes.position!==void 0&&(de=1),X.morphAttributes.normal!==void 0&&(de=2),X.morphAttributes.color!==void 0&&(de=3);let ge,W,B,ee;if(j){const Ke=Bn[j];ge=Ke.vertexShader,W=Ke.fragmentShader}else ge=E.vertexShader,W=E.fragmentShader,l.update(E),B=l.getVertexShaderID(E),ee=l.getFragmentShaderID(E);const J=t.getRenderTarget(),ve=b.isInstancedMesh===!0,Te=b.isBatchedMesh===!0,O=!!E.map,ke=!!E.matcap,me=!!Q,qe=!!E.aoMap,Ae=!!E.lightMap,Ge=!!E.bumpMap,De=!!E.normalMap,je=!!E.displacementMap,ot=!!E.emissiveMap,L=!!E.metalnessMap,w=!!E.roughnessMap,q=E.anisotropy>0,Z=E.clearcoat>0,ie=E.dispersion>0,re=E.iridescence>0,Me=E.sheen>0,ue=E.transmission>0,ce=q&&!!E.anisotropyMap,Pe=Z&&!!E.clearcoatMap,ae=Z&&!!E.clearcoatNormalMap,Se=Z&&!!E.clearcoatRoughnessMap,Ye=re&&!!E.iridescenceMap,Ee=re&&!!E.iridescenceThicknessMap,pe=Me&&!!E.sheenColorMap,Ie=Me&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Je=!!E.specularColorMap,Ue=!!E.specularIntensityMap,M=ue&&!!E.transmissionMap,F=ue&&!!E.thicknessMap,H=!!E.gradientMap,te=!!E.alphaMap,oe=E.alphaTest>0,Ne=!!E.alphaHash,He=!!E.extensions;let ct=Wi;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ct=t.toneMapping);const At={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:ge,fragmentShader:W,defines:E.defines,customVertexShaderID:B,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Te,instancing:ve,instancingColor:ve&&b.instanceColor!==null,instancingMorph:ve&&b.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qi,alphaToCoverage:!!E.alphaToCoverage,map:O,matcap:ke,envMap:me,envMapMode:me&&Q.mapping,envMapCubeUVHeight:I,aoMap:qe,lightMap:Ae,bumpMap:Ge,normalMap:De,displacementMap:h&&je,emissiveMap:ot,normalMapObjectSpace:De&&E.normalMapType===hx,normalMapTangentSpace:De&&E.normalMapType===dx,metalnessMap:L,roughnessMap:w,anisotropy:q,anisotropyMap:ce,clearcoat:Z,clearcoatMap:Pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:ie,iridescence:re,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:Me,sheenColorMap:pe,sheenRoughnessMap:Ie,specularMap:Be,specularColorMap:Je,specularIntensityMap:Ue,transmission:ue,transmissionMap:M,thicknessMap:F,gradientMap:H,opaque:E.transparent===!1&&E.blending===hs&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:oe,alphaHash:Ne,combine:E.combine,mapUv:O&&x(E.map.channel),aoMapUv:qe&&x(E.aoMap.channel),lightMapUv:Ae&&x(E.lightMap.channel),bumpMapUv:Ge&&x(E.bumpMap.channel),normalMapUv:De&&x(E.normalMap.channel),displacementMapUv:je&&x(E.displacementMap.channel),emissiveMapUv:ot&&x(E.emissiveMap.channel),metalnessMapUv:L&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:ce&&x(E.anisotropyMap.channel),clearcoatMapUv:Pe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:Be&&x(E.specularMap.channel),specularColorMapUv:Je&&x(E.specularColorMap.channel),specularIntensityMapUv:Ue&&x(E.specularIntensityMap.channel),transmissionMapUv:M&&x(E.transmissionMap.channel),thicknessMapUv:F&&x(E.thicknessMap.channel),alphaMapUv:te&&x(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(De||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!X.attributes.uv&&(O||te),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,useLegacyLights:t._useLegacyLights,decodeVideoTexture:O&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ii,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:He&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(p(y,E),m(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function p(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function m(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const y=_[E.type];let D;if(y){const U=Bn[y];D=ny.clone(U.uniforms)}else D=E.uniforms;return D}function R(E,y){let D;for(let U=0,b=u.length;U<b;U++){const k=u[U];if(k.cacheKey===y){D=k,++D.usedTimes;break}}return D===void 0&&(D=new mT(t,y,E,s),u.push(D)),D}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:P}}function yT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ST(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Op(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,_,x,v){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:g,groupOrder:_,renderOrder:d.renderOrder,z:x,group:v},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=v),e++,f}function a(d,h,g,_,x,v){const f=o(d,h,g,_,x,v);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(d,h,g,_,x,v){const f=o(d,h,g,_,x,v);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||ST),i.length>1&&i.sort(h||Op),r.length>1&&r.sort(h||Op)}function u(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function MT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fp,t.set(i,[o])):r>=s.length?(o=new Fp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ET(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new We};break;case"SpotLight":n={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function TT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AT=0;function wT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CT(t){const e=new ET,n=TT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new pt,o=new pt;function a(c,u){let d=0,h=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,x=0,v=0,f=0,p=0,m=0,S=0,R=0,A=0,T=0,P=0;c.sort(wT);const E=u===!0?Math.PI:1;for(let D=0,U=c.length;D<U;D++){const b=c[D],k=b.color,X=b.intensity,K=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=k.r*X*E,h+=k.g*X*E,g+=k.b*X*E;else if(b.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(b.sh.coefficients[I],X);P++}else if(b.isDirectionalLight){const I=e.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity*E),b.castShadow){const j=b.shadow,Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[_]=Y,i.directionalShadowMap[_]=Q,i.directionalShadowMatrix[_]=b.shadow.matrix,m++}i.directional[_]=I,_++}else if(b.isSpotLight){const I=e.get(b);I.position.setFromMatrixPosition(b.matrixWorld),I.color.copy(k).multiplyScalar(X*E),I.distance=K,I.coneCos=Math.cos(b.angle),I.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),I.decay=b.decay,i.spot[v]=I;const j=b.shadow;if(b.map&&(i.spotLightMap[A]=b.map,A++,j.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[v]=j.matrix,b.castShadow){const Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=Q,R++}v++}else if(b.isRectAreaLight){const I=e.get(b);I.color.copy(k).multiplyScalar(X),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=I,f++}else if(b.isPointLight){const I=e.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity*E),I.distance=b.distance,I.decay=b.decay,b.castShadow){const j=b.shadow,Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[x]=Y,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=b.shadow.matrix,S++}i.point[x]=I,x++}else if(b.isHemisphereLight){const I=e.get(b);I.skyColor.copy(b.color).multiplyScalar(X*E),I.groundColor.copy(b.groundColor).multiplyScalar(X*E),i.hemi[p]=I,p++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==_||y.pointLength!==x||y.spotLength!==v||y.rectAreaLength!==f||y.hemiLength!==p||y.numDirectionalShadows!==m||y.numPointShadows!==S||y.numSpotShadows!==R||y.numSpotMaps!==A||y.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=v,i.rectArea.length=f,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=R+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,y.directionalLength=_,y.pointLength=x,y.spotLength=v,y.rectAreaLength=f,y.hemiLength=p,y.numDirectionalShadows=m,y.numPointShadows=S,y.numSpotShadows=R,y.numSpotMaps=A,y.numLightProbes=P,i.version=AT++)}function l(c,u){let d=0,h=0,g=0,_=0,x=0;const v=u.matrixWorldInverse;for(let f=0,p=c.length;f<p;f++){const m=c[f];if(m.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),d++}else if(m.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),g++}else if(m.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(m.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(m.width*.5,0,0),S.halfHeight.set(0,m.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(m.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),h++}else if(m.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function zp(t){const e=new CT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zp(t),e.set(r,[a])):s>=o.length?(a=new zp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class PT extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IT(t,e,n){let i=new Pg;const r=new Ce,s=new Ce,o=new bt,a=new PT({depthPacking:fx}),l=new bT,c={},u=n.maxTextureSize,d={[Yi]:Yt,[Yt]:Yi,[ii]:ii},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:LT,fragmentShader:DT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lg;let f=this.type;this.render=function(A,T,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const b=f!==ei&&this.type===ei,k=f===ei&&this.type!==ei;for(let X=0,K=A.length;X<K;X++){const Q=A[X],I=Q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||b===!0||k===!0){const ne=this.type!==ei?{minFilter:Mn,magFilter:Mn}:{};I.map!==null&&I.map.dispose(),I.map=new $i(r.x,r.y,ne),I.map.texture.name=Q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Y=I.getViewportCount();for(let ne=0;ne<Y;ne++){const de=I.getViewport(ne);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),U.viewport(o),I.updateMatrices(Q,ne),i=I.getFrustum(),S(T,P,I.camera,Q,this.type)}I.isPointLightShadow!==!0&&this.type===ei&&p(I,P),I.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(E,y,D)};function p(A,T){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,g,x,null)}function m(A,T,P,E){let y=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,b=T.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let X=k[b];X===void 0&&(X=y.clone(),k[b]=X,T.addEventListener("dispose",R)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,E===ei?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=t.properties.get(y);U.light=P}return y}function S(A,T,P,E,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const b=e.update(A),k=A.material;if(Array.isArray(k)){const X=b.groups;for(let K=0,Q=X.length;K<Q;K++){const I=X[K],j=k[I.materialIndex];if(j&&j.visible){const Y=m(A,j,E,y);A.onBeforeShadow(t,A,T,P,b,Y,I),t.renderBufferDirect(P,null,b,Y,A,I),A.onAfterShadow(t,A,T,P,b,Y,I)}}}else if(k.visible){const X=m(A,k,E,y);A.onBeforeShadow(t,A,T,P,b,X,null),t.renderBufferDirect(P,null,b,X,A,null),A.onAfterShadow(t,A,T,P,b,X,null)}}const U=A.children;for(let b=0,k=U.length;b<k;b++)S(U[b],T,P,E,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function NT(t){function e(){let M=!1;const F=new bt;let H=null;const te=new bt(0,0,0,0);return{setMask:function(oe){H!==oe&&!M&&(t.colorMask(oe,oe,oe,oe),H=oe)},setLocked:function(oe){M=oe},setClear:function(oe,Ne,He,ct,At){At===!0&&(oe*=ct,Ne*=ct,He*=ct),F.set(oe,Ne,He,ct),te.equals(F)===!1&&(t.clearColor(oe,Ne,He,ct),te.copy(F))},reset:function(){M=!1,H=null,te.set(-1,0,0,0)}}}function n(){let M=!1,F=null,H=null,te=null;return{setTest:function(oe){oe?ee(t.DEPTH_TEST):J(t.DEPTH_TEST)},setMask:function(oe){F!==oe&&!M&&(t.depthMask(oe),F=oe)},setFunc:function(oe){if(H!==oe){switch(oe){case z_:t.depthFunc(t.NEVER);break;case k_:t.depthFunc(t.ALWAYS);break;case B_:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case H_:t.depthFunc(t.EQUAL);break;case V_:t.depthFunc(t.GEQUAL);break;case G_:t.depthFunc(t.GREATER);break;case W_:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=oe}},setLocked:function(oe){M=oe},setClear:function(oe){te!==oe&&(t.clearDepth(oe),te=oe)},reset:function(){M=!1,F=null,H=null,te=null}}}function i(){let M=!1,F=null,H=null,te=null,oe=null,Ne=null,He=null,ct=null,At=null;return{setTest:function(Ke){M||(Ke?ee(t.STENCIL_TEST):J(t.STENCIL_TEST))},setMask:function(Ke){F!==Ke&&!M&&(t.stencilMask(Ke),F=Ke)},setFunc:function(Ke,vt,nt){(H!==Ke||te!==vt||oe!==nt)&&(t.stencilFunc(Ke,vt,nt),H=Ke,te=vt,oe=nt)},setOp:function(Ke,vt,nt){(Ne!==Ke||He!==vt||ct!==nt)&&(t.stencilOp(Ke,vt,nt),Ne=Ke,He=vt,ct=nt)},setLocked:function(Ke){M=Ke},setClear:function(Ke){At!==Ke&&(t.clearStencil(Ke),At=Ke)},reset:function(){M=!1,F=null,H=null,te=null,oe=null,Ne=null,He=null,ct=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],g=null,_=!1,x=null,v=null,f=null,p=null,m=null,S=null,R=null,A=new We(0,0,0),T=0,P=!1,E=null,y=null,D=null,U=null,b=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=K>=2);let I=null,j={};const Y=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),de=new bt().fromArray(Y),ge=new bt().fromArray(ne);function W(M,F,H,te){const oe=new Uint8Array(4),Ne=t.createTexture();t.bindTexture(M,Ne),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<H;He++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(F,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(F+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Ne}const B={};B[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),s.setFunc(pl),Ge(!1),De(_h),ee(t.CULL_FACE),qe(Gi);function ee(M){c[M]!==!0&&(t.enable(M),c[M]=!0)}function J(M){c[M]!==!1&&(t.disable(M),c[M]=!1)}function ve(M,F){return u[M]!==F?(t.bindFramebuffer(M,F),u[M]=F,M===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=F),M===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=F),!0):!1}function Te(M,F){let H=h,te=!1;if(M){H=d.get(F),H===void 0&&(H=[],d.set(F,H));const oe=M.textures;if(H.length!==oe.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Ne=0,He=oe.length;Ne<He;Ne++)H[Ne]=t.COLOR_ATTACHMENT0+Ne;H.length=oe.length,te=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,te=!0);te&&t.drawBuffers(H)}function O(M){return g!==M?(t.useProgram(M),g=M,!0):!1}const ke={[cr]:t.FUNC_ADD,[S_]:t.FUNC_SUBTRACT,[M_]:t.FUNC_REVERSE_SUBTRACT};ke[E_]=t.MIN,ke[T_]=t.MAX;const me={[A_]:t.ZERO,[w_]:t.ONE,[C_]:t.SRC_COLOR,[ju]:t.SRC_ALPHA,[I_]:t.SRC_ALPHA_SATURATE,[L_]:t.DST_COLOR,[P_]:t.DST_ALPHA,[R_]:t.ONE_MINUS_SRC_COLOR,[Yu]:t.ONE_MINUS_SRC_ALPHA,[D_]:t.ONE_MINUS_DST_COLOR,[b_]:t.ONE_MINUS_DST_ALPHA,[N_]:t.CONSTANT_COLOR,[U_]:t.ONE_MINUS_CONSTANT_COLOR,[O_]:t.CONSTANT_ALPHA,[F_]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(M,F,H,te,oe,Ne,He,ct,At,Ke){if(M===Gi){_===!0&&(J(t.BLEND),_=!1);return}if(_===!1&&(ee(t.BLEND),_=!0),M!==y_){if(M!==x||Ke!==P){if((v!==cr||m!==cr)&&(t.blendEquation(t.FUNC_ADD),v=cr,m=cr),Ke)switch(M){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.ONE,t.ONE);break;case yh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}f=null,p=null,S=null,R=null,A.set(0,0,0),T=0,x=M,P=Ke}return}oe=oe||F,Ne=Ne||H,He=He||te,(F!==v||oe!==m)&&(t.blendEquationSeparate(ke[F],ke[oe]),v=F,m=oe),(H!==f||te!==p||Ne!==S||He!==R)&&(t.blendFuncSeparate(me[H],me[te],me[Ne],me[He]),f=H,p=te,S=Ne,R=He),(ct.equals(A)===!1||At!==T)&&(t.blendColor(ct.r,ct.g,ct.b,At),A.copy(ct),T=At),x=M,P=!1}function Ae(M,F){M.side===ii?J(t.CULL_FACE):ee(t.CULL_FACE);let H=M.side===Yt;F&&(H=!H),Ge(H),M.blending===hs&&M.transparent===!1?qe(Gi):qe(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const te=M.stencilWrite;o.setTest(te),te&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),ot(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):J(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(M){E!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),E=M)}function De(M){M!==v_?(ee(t.CULL_FACE),M!==y&&(M===_h?t.cullFace(t.BACK):M===__?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):J(t.CULL_FACE),y=M}function je(M){M!==D&&(X&&t.lineWidth(M),D=M)}function ot(M,F,H){M?(ee(t.POLYGON_OFFSET_FILL),(U!==F||b!==H)&&(t.polygonOffset(F,H),U=F,b=H)):J(t.POLYGON_OFFSET_FILL)}function L(M){M?ee(t.SCISSOR_TEST):J(t.SCISSOR_TEST)}function w(M){M===void 0&&(M=t.TEXTURE0+k-1),I!==M&&(t.activeTexture(M),I=M)}function q(M,F,H){H===void 0&&(I===null?H=t.TEXTURE0+k-1:H=I);let te=j[H];te===void 0&&(te={type:void 0,texture:void 0},j[H]=te),(te.type!==M||te.texture!==F)&&(I!==H&&(t.activeTexture(H),I=H),t.bindTexture(M,F||B[M]),te.type=M,te.texture=F)}function Z(){const M=j[I];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Me(){try{t.texSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Se(){try{t.texStorage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ye(){try{t.texImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(M){de.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),de.copy(M))}function Ie(M){ge.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),ge.copy(M))}function Be(M,F){let H=l.get(F);H===void 0&&(H=new WeakMap,l.set(F,H));let te=H.get(M);te===void 0&&(te=t.getUniformBlockIndex(F,M.name),H.set(M,te))}function Je(M,F){const te=l.get(F).get(M);a.get(F)!==te&&(t.uniformBlockBinding(F,te,M.__bindingPointIndex),a.set(F,te))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,j={},u={},d=new WeakMap,h=[],g=null,_=!1,x=null,v=null,f=null,p=null,m=null,S=null,R=null,A=new We(0,0,0),T=0,P=!1,E=null,y=null,D=null,U=null,b=null,de.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ee,disable:J,bindFramebuffer:ve,drawBuffers:Te,useProgram:O,setBlending:qe,setMaterial:Ae,setFlipSided:Ge,setCullFace:De,setLineWidth:je,setPolygonOffset:ot,setScissorTest:L,activeTexture:w,bindTexture:q,unbindTexture:Z,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Je,texStorage2D:ae,texStorage3D:Se,texSubImage2D:Me,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:Pe,scissor:pe,viewport:Ie,reset:Ue}}function UT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return g?new OffscreenCanvas(L,w):Po("canvas")}function x(L,w,q){let Z=1;const ie=ot(L);if((ie.width>q||ie.height>q)&&(Z=q/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(Z*ie.width),Me=Math.floor(Z*ie.height);d===void 0&&(d=_(re,Me));const ue=w?_(re,Me):d;return ue.width=re,ue.height=Me,ue.getContext("2d").drawImage(L,0,0,re,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+Me+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function v(L){return L.generateMipmaps&&L.minFilter!==Mn&&L.minFilter!==cn}function f(L){t.generateMipmap(L)}function p(L,w,q,Z,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===t.RED&&(q===t.FLOAT&&(re=t.R32F),q===t.HALF_FLOAT&&(re=t.R16F),q===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.R8UI),q===t.UNSIGNED_SHORT&&(re=t.R16UI),q===t.UNSIGNED_INT&&(re=t.R32UI),q===t.BYTE&&(re=t.R8I),q===t.SHORT&&(re=t.R16I),q===t.INT&&(re=t.R32I)),w===t.RG&&(q===t.FLOAT&&(re=t.RG32F),q===t.HALF_FLOAT&&(re=t.RG16F),q===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.RG8UI),q===t.UNSIGNED_SHORT&&(re=t.RG16UI),q===t.UNSIGNED_INT&&(re=t.RG32UI),q===t.BYTE&&(re=t.RG8I),q===t.SHORT&&(re=t.RG16I),q===t.INT&&(re=t.RG32I)),w===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),w===t.RGBA){const Me=ie?ml:et.getTransfer(Z);q===t.FLOAT&&(re=t.RGBA32F),q===t.HALF_FLOAT&&(re=t.RGBA16F),q===t.UNSIGNED_BYTE&&(re=Me===rt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function m(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mn&&L.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function S(L){const w=L.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&u.delete(w)}function R(L){const w=L.target;w.removeEventListener("dispose",R),P(w)}function A(L){const w=i.get(L);if(w.__webglInit===void 0)return;const q=L.source,Z=h.get(q);if(Z){const ie=Z[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(L),Object.keys(Z).length===0&&h.delete(q)}i.remove(L)}function T(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const q=L.source,Z=h.get(q);delete Z[w.__cacheKey],o.memory.textures--}function P(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let ie=0;ie<w.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)t.deleteFramebuffer(w.__webglFramebuffer[Z]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=L.textures;for(let Z=0,ie=q.length;Z<ie;Z++){const re=i.get(q[Z]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(q[Z])}i.remove(L)}let E=0;function y(){E=0}function D(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function U(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function b(L,w){const q=i.get(L);if(L.isVideoTexture&&De(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(q,L,w);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+w)}function k(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){de(q,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+w)}function X(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){de(q,L,w);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+w)}function K(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){ge(q,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+w)}const Q={[Ku]:t.REPEAT,[pr]:t.CLAMP_TO_EDGE,[Zu]:t.MIRRORED_REPEAT},I={[Mn]:t.NEAREST,[ex]:t.NEAREST_MIPMAP_NEAREST,[ra]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},j={[px]:t.NEVER,[yx]:t.ALWAYS,[mx]:t.LESS,[xg]:t.LEQUAL,[gx]:t.EQUAL,[xx]:t.GEQUAL,[vx]:t.GREATER,[_x]:t.NOTEQUAL};function Y(L,w){if(w.type===Ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===cn||w.magFilter===Sc||w.magFilter===ra||w.magFilter===mr||w.minFilter===cn||w.minFilter===Sc||w.minFilter===ra||w.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,Q[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,Q[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,Q[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,I[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,I[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==ra&&w.minFilter!==mr||w.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ne(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",S));const Z=w.source;let ie=h.get(Z);ie===void 0&&(ie={},h.set(Z,ie));const re=U(w);if(re!==L.__cacheKey){ie[re]===void 0&&(ie[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ie[re].usedTimes++;const Me=ie[L.__cacheKey];Me!==void 0&&(ie[L.__cacheKey].usedTimes--,Me.usedTimes===0&&T(w)),L.__cacheKey=re,L.__webglTexture=ie[re].texture}return q}function de(L,w,q){let Z=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=ne(L,w),re=w.source;n.bindTexture(Z,L.__webglTexture,t.TEXTURE0+q);const Me=i.get(re);if(re.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+q);const ue=et.getPrimaries(et.workingColorSpace),ce=w.colorSpace===Li?null:et.getPrimaries(w.colorSpace),Pe=w.colorSpace===Li||ue===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=x(w.image,!1,r.maxTextureSize);ae=je(w,ae);const Se=s.convert(w.format,w.colorSpace),Ye=s.convert(w.type);let Ee=p(w.internalFormat,Se,Ye,w.colorSpace,w.isVideoTexture);Y(Z,w);let pe;const Ie=w.mipmaps,Be=w.isVideoTexture!==!0,Je=Me.__version===void 0||ie===!0,Ue=re.dataReady,M=m(w,ae);if(w.isDepthTexture)Ee=t.DEPTH_COMPONENT16,w.type===Ni?Ee=t.DEPTH_COMPONENT32F:w.type===As?Ee=t.DEPTH_COMPONENT24:w.type===Uo&&(Ee=t.DEPTH24_STENCIL8),Je&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ee,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Se,Ye,null));else if(w.isDataTexture)if(Ie.length>0){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,M,Ee,Ie[0].width,Ie[0].height);for(let F=0,H=Ie.length;F<H;F++)pe=Ie[F],Be?Ue&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,Se,Ye,pe.data):n.texImage2D(t.TEXTURE_2D,F,Ee,pe.width,pe.height,0,Se,Ye,pe.data);w.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,M,Ee,ae.width,ae.height),Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,Ye,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Se,Ye,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,M,Ee,Ie[0].width,Ie[0].height,ae.depth);for(let F=0,H=Ie.length;F<H;F++)pe=Ie[F],w.format!==Gn?Se!==null?Be?Ue&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ae.depth,Se,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,Ee,pe.width,pe.height,ae.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ae.depth,Se,Ye,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,Ee,pe.width,pe.height,ae.depth,0,Se,Ye,pe.data)}else{Be&&Je&&n.texStorage2D(t.TEXTURE_2D,M,Ee,Ie[0].width,Ie[0].height);for(let F=0,H=Ie.length;F<H;F++)pe=Ie[F],w.format!==Gn?Se!==null?Be?Ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,Se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,F,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ue&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,Se,Ye,pe.data):n.texImage2D(t.TEXTURE_2D,F,Ee,pe.width,pe.height,0,Se,Ye,pe.data)}else if(w.isDataArrayTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,M,Ee,ae.width,ae.height,ae.depth),Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ye,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,Se,Ye,ae.data);else if(w.isData3DTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_3D,M,Ee,ae.width,ae.height,ae.depth),Ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ye,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,Se,Ye,ae.data);else if(w.isFramebufferTexture){if(Je)if(Be)n.texStorage2D(t.TEXTURE_2D,M,Ee,ae.width,ae.height);else{let F=ae.width,H=ae.height;for(let te=0;te<M;te++)n.texImage2D(t.TEXTURE_2D,te,Ee,F,H,0,Se,Ye,null),F>>=1,H>>=1}}else if(Ie.length>0){if(Be&&Je){const F=ot(Ie[0]);n.texStorage2D(t.TEXTURE_2D,M,Ee,F.width,F.height)}for(let F=0,H=Ie.length;F<H;F++)pe=Ie[F],Be?Ue&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,Se,Ye,pe):n.texImage2D(t.TEXTURE_2D,F,Ee,Se,Ye,pe);w.generateMipmaps=!1}else if(Be){if(Je){const F=ot(ae);n.texStorage2D(t.TEXTURE_2D,M,Ee,F.width,F.height)}Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ye,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ee,Se,Ye,ae);v(w)&&f(Z),Me.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ge(L,w,q){if(w.image.length!==6)return;const Z=ne(L,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+q);const re=i.get(ie);if(ie.version!==re.__version||Z===!0){n.activeTexture(t.TEXTURE0+q);const Me=et.getPrimaries(et.workingColorSpace),ue=w.colorSpace===Li?null:et.getPrimaries(w.colorSpace),ce=w.colorSpace===Li||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let H=0;H<6;H++)!Pe&&!ae?Se[H]=x(w.image[H],!0,r.maxCubemapSize):Se[H]=ae?w.image[H].image:w.image[H],Se[H]=je(w,Se[H]);const Ye=Se[0],Ee=s.convert(w.format,w.colorSpace),pe=s.convert(w.type),Ie=p(w.internalFormat,Ee,pe,w.colorSpace),Be=w.isVideoTexture!==!0,Je=re.__version===void 0||Z===!0,Ue=ie.dataReady;let M=m(w,Ye);Y(t.TEXTURE_CUBE_MAP,w);let F;if(Pe){Be&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,M,Ie,Ye.width,Ye.height);for(let H=0;H<6;H++){F=Se[H].mipmaps;for(let te=0;te<F.length;te++){const oe=F[te];w.format!==Gn?Ee!==null?Be?Ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,0,0,oe.width,oe.height,Ee,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,Ie,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,0,0,oe.width,oe.height,Ee,pe,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,Ie,oe.width,oe.height,0,Ee,pe,oe.data)}}}else{if(F=w.mipmaps,Be&&Je){F.length>0&&M++;const H=ot(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,M,Ie,H.width,H.height)}for(let H=0;H<6;H++)if(ae){Be?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Se[H].width,Se[H].height,Ee,pe,Se[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ie,Se[H].width,Se[H].height,0,Ee,pe,Se[H].data);for(let te=0;te<F.length;te++){const Ne=F[te].image[H].image;Be?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,0,0,Ne.width,Ne.height,Ee,pe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,Ie,Ne.width,Ne.height,0,Ee,pe,Ne.data)}}else{Be?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ee,pe,Se[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ie,Ee,pe,Se[H]);for(let te=0;te<F.length;te++){const oe=F[te];Be?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,0,0,Ee,pe,oe.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,Ie,Ee,pe,oe.image[H])}}}v(w)&&f(t.TEXTURE_CUBE_MAP),re.__version=ie.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function W(L,w,q,Z,ie,re){const Me=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),ce=p(q.internalFormat,Me,ue,q.colorSpace);if(!i.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>re),Se=Math.max(1,w.height>>re);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,re,ce,ae,Se,w.depth,0,Me,ue,null):n.texImage2D(ie,re,ce,ae,Se,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,i.get(q).__webglTexture,0,Ae(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,i.get(q).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(L,w,q){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let Z=t.DEPTH_COMPONENT24;if(q||Ge(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ni?Z=t.DEPTH_COMPONENT32F:ie.type===As&&(Z=t.DEPTH_COMPONENT24));const re=Ae(w);Ge(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,Z,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,Z,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const Z=Ae(w);q&&Ge(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,w.width,w.height):Ge(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const Z=w.textures;for(let ie=0;ie<Z.length;ie++){const re=Z[ie],Me=s.convert(re.format,re.colorSpace),ue=s.convert(re.type),ce=p(re.internalFormat,Me,ue,re.colorSpace),Pe=Ae(w);q&&Ge(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ce,w.width,w.height):Ge(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,ce,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ce,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),b(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,ie=Ae(w);if(w.depthTexture.format===ps)Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Co)Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function J(L){const w=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ee(w.__webglFramebuffer,L)}else if(q){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]=t.createRenderbuffer(),B(w.__webglDepthbuffer[Z],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),B(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(L,w,q){const Z=i.get(L);w!==void 0&&W(Z.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&J(L)}function Te(L){const w=L.texture,q=i.get(L),Z=i.get(w);L.addEventListener("dispose",R);const ie=L.textures,re=L.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=w.version,o.memory.textures++),re){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let ce=0;ce<w.mipmaps.length;ce++)q.__webglFramebuffer[ue][ce]=t.createFramebuffer()}else q.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)q.__webglFramebuffer[ue]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,ce=ie.length;ue<ce;ue++){const Pe=i.get(ie[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Ge(L)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const ce=ie[ue];q.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Pe=s.convert(ce.format,ce.colorSpace),ae=s.convert(ce.type),Se=p(ce.internalFormat,Pe,ae,ce.colorSpace,L.isXRRenderTarget===!0),Ye=Ae(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Se,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),B(q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(t.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)W(q.__webglFramebuffer[ue][ce],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else W(q.__webglFramebuffer[ue],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,ce=ie.length;ue<ce;ue++){const Pe=ie[ue],ae=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),Y(t.TEXTURE_2D,Pe),W(q.__webglFramebuffer,L,Pe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),v(Pe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),Y(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)W(q.__webglFramebuffer[ce],L,w,t.COLOR_ATTACHMENT0,ue,ce);else W(q.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,ue,0);v(w)&&f(ue),n.unbindTexture()}L.depthBuffer&&J(L)}function O(L){const w=L.textures;for(let q=0,Z=w.length;q<Z;q++){const ie=w[q];if(v(ie)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ie).__webglTexture;n.bindTexture(re,Me),f(re),n.unbindTexture()}}}const ke=[],me=[];function qe(L){if(L.samples>0){if(Ge(L)===!1){const w=L.textures,q=L.width,Z=L.height;let ie=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(L),ue=w.length>1;if(ue)for(let ce=0;ce<w.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Pe=i.get(w[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,q,Z,0,0,q,Z,ie,t.NEAREST),l===!0&&(ke.length=0,me.length=0,ke.push(t.COLOR_ATTACHMENT0+ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ke.push(re),me.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,me)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<w.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Pe=i.get(w[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ae(L){return Math.min(r.maxSamples,L.samples)}function Ge(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function je(L,w){const q=L.colorSpace,Z=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Qi&&q!==Li&&(et.getTransfer(q)===rt?(Z!==Gn||ie!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=y,this.setTexture2D=b,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=ve,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ge}function OT(t,e){function n(i,r=Li){let s;const o=et.getTransfer(r);if(i===di)return t.UNSIGNED_BYTE;if(i===hg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ix)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tx)return t.BYTE;if(i===nx)return t.SHORT;if(i===fg)return t.UNSIGNED_SHORT;if(i===dg)return t.INT;if(i===As)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===Bl)return t.HALF_FLOAT;if(i===rx)return t.ALPHA;if(i===sx)return t.RGB;if(i===Gn)return t.RGBA;if(i===ox)return t.LUMINANCE;if(i===ax)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Co)return t.DEPTH_STENCIL;if(i===mg)return t.RED;if(i===gg)return t.RED_INTEGER;if(i===lx)return t.RG;if(i===vg)return t.RG_INTEGER;if(i===_g)return t.RGBA_INTEGER;if(i===Mc||i===Ec||i===Tc||i===Ac)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===Eh||i===Th||i===Ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===Ch||i===Rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wh||i===Ch)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ph||i===bh||i===Lh||i===Dh||i===Ih||i===Nh||i===Uh||i===Oh||i===Fh||i===zh||i===kh||i===Bh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ph)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ih)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cx||i===Xh||i===jh||i===Yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class FT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zT={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),f=this._getHandJoint(c,x);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new os;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BT=`
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

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new On({vertexShader:kT,fragmentShader:BT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xt(new Wl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class VT extends Ar{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,g=null,_=null;const x=new HT,v=n.getContextAttributes();let f=null,p=null;const m=[],S=[],R=new Ce;let A=null;const T=new yn;T.layers.enable(1),T.viewport=new bt;const P=new yn;P.layers.enable(2),P.viewport=new bt;const E=[T,P],y=new FT;y.layers.enable(1),y.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let B=m[W];return B===void 0&&(B=new Zc,m[W]=B),B.getTargetRaySpace()},this.getControllerGrip=function(W){let B=m[W];return B===void 0&&(B=new Zc,m[W]=B),B.getGripSpace()},this.getHand=function(W){let B=m[W];return B===void 0&&(B=new Zc,m[W]=B),B.getHandSpace()};function b(W){const B=S.indexOf(W.inputSource);if(B===-1)return;const ee=m[B];ee!==void 0&&(ee.update(W.inputSource,W.frame,c||o),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let W=0;W<m.length;W++){const B=S[W];B!==null&&(S[W]=null,m[W].disconnect(B))}D=null,U=null,x.reset(),e.setRenderTarget(f),g=null,h=null,d=null,r=null,p=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const B={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),p=new $i(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,ee=null,J=null;v.depth&&(J=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=v.stencil?Co:ps,ee=v.stencil?Uo:As);const ve={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new $i(h.textureWidth,h.textureHeight,{format:Gn,type:di,depthTexture:new Lg(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(W){for(let B=0;B<W.removed.length;B++){const ee=W.removed[B],J=S.indexOf(ee);J>=0&&(S[J]=null,m[J].disconnect(ee))}for(let B=0;B<W.added.length;B++){const ee=W.added[B];let J=S.indexOf(ee);if(J===-1){for(let Te=0;Te<m.length;Te++)if(Te>=S.length){S.push(ee),J=Te;break}else if(S[Te]===null){S[Te]=ee,J=Te;break}if(J===-1)break}const ve=m[J];ve&&ve.connect(ee)}}const K=new N,Q=new N;function I(W,B,ee){K.setFromMatrixPosition(B.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const J=K.distanceTo(Q),ve=B.projectionMatrix.elements,Te=ee.projectionMatrix.elements,O=ve[14]/(ve[10]-1),ke=ve[14]/(ve[10]+1),me=(ve[9]+1)/ve[5],qe=(ve[9]-1)/ve[5],Ae=(ve[8]-1)/ve[0],Ge=(Te[8]+1)/Te[0],De=O*Ae,je=O*Ge,ot=J/(-Ae+Ge),L=ot*-Ae;B.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(L),W.translateZ(ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=O+ot,q=ke+ot,Z=De-L,ie=je+(J-L),re=me*ke/q*w,Me=qe*ke/q*w;W.projectionMatrix.makePerspective(Z,ie,re,Me,w,q),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,B){B===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(B.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),y.near=P.near=T.near=W.near,y.far=P.far=T.far=W.far,(D!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,U=y.far,T.near=D,T.far=U,P.near=D,P.far=U,T.updateProjectionMatrix(),P.updateProjectionMatrix(),W.updateProjectionMatrix());const B=W.parent,ee=y.cameras;j(y,B);for(let J=0;J<ee.length;J++)j(ee[J],B);ee.length===2?I(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),Y(W,y,B)};function Y(W,B,ee){ee===null?W.matrix.copy(B.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(B.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(B.projectionMatrix),W.projectionMatrixInverse.copy(B.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ro*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let ne=null;function de(W,B){if(u=B.getViewerPose(c||o),_=B,u!==null){const ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let J=!1;ee.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let Te=0;Te<ee.length;Te++){const O=ee[Te];let ke=null;if(g!==null)ke=g.getViewport(O);else{const qe=d.getViewSubImage(h,O);ke=qe.viewport,Te===0&&(e.setRenderTargetTextures(p,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(p))}let me=E[Te];me===void 0&&(me=new yn,me.layers.enable(Te),me.viewport=new bt,E[Te]=me),me.matrix.fromArray(O.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(O.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ke.x,ke.y,ke.width,ke.height),Te===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(me)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Te=d.getDepthInformation(ee[0]);Te&&Te.isValid&&Te.texture&&x.init(e,Te,r.renderState)}}for(let ee=0;ee<m.length;ee++){const J=S[ee],ve=m[ee];J!==null&&ve!==void 0&&ve.update(J,B,c||o)}x.render(e,y),ne&&ne(W,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const ge=new bg;ge.setAnimationLoop(de),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}const sr=new pi,GT=new pt;function WT(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,Cg(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,p,m,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(v,f):f.isMeshToonMaterial?(s(v,f),d(v,f)):f.isMeshPhongMaterial?(s(v,f),u(v,f)):f.isMeshStandardMaterial?(s(v,f),h(v,f),f.isMeshPhysicalMaterial&&g(v,f,S)):f.isMeshMatcapMaterial?(s(v,f),_(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),x(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,p,m):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Yt&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Yt&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const p=e.get(f),m=p.envMap,S=p.envMapRotation;if(m&&(v.envMap.value=m,sr.copy(S),sr.x*=-1,sr.y*=-1,sr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),v.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(sr)),v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*R,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,p,m){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*p,v.scale.value=m*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function d(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function h(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function g(v,f,p){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=p.texture,v.transmissionSamplerSize.value.set(p.width,p.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,f){f.matcap&&(v.matcap.value=f.matcap)}function x(v,f){const p=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(p.matrixWorld),v.nearDistance.value=p.shadow.camera.near,v.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,m){const S=m.program;i.uniformBlockBinding(p,S)}function c(p,m){let S=r[p.id];S===void 0&&(_(p),S=u(p),r[p.id]=S,p.addEventListener("dispose",v));const R=m.program;i.updateUBOMapping(p,R);const A=e.render.frame;s[p.id]!==A&&(h(p),s[p.id]=A)}function u(p){const m=d();p.__bindingPointIndex=m;const S=t.createBuffer(),R=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function d(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(p){const m=r[p.id],S=p.uniforms,R=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,y=P.length;E<y;E++){const D=P[E];if(g(D,A,E,R)===!0){const U=D.__offset,b=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let X=0;X<b.length;X++){const K=b[X],Q=x(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,U+k,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,m,S,R){const A=p.value,T=m+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(p){const m=p.uniforms;let S=0;const R=16;for(let T=0,P=m.length;T<P;T++){const E=Array.isArray(m[T])?m[T]:[m[T]];for(let y=0,D=E.length;y<D;y++){const U=E[y],b=Array.isArray(U.value)?U.value:[U.value];for(let k=0,X=b.length;k<X;k++){const K=b[k],Q=x(K),I=S%R;I!==0&&R-I<Q.boundary&&(S+=R-I),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Q.storage}}}const A=S%R;return A>0&&(S+=R-A),p.__size=S,p.__cache={},this}function x(p){const m={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(m.boundary=4,m.storage=4):p.isVector2?(m.boundary=8,m.storage=8):p.isVector3||p.isColor?(m.boundary=16,m.storage=12):p.isVector4?(m.boundary=16,m.storage=16):p.isMatrix3?(m.boundary=48,m.storage=48):p.isMatrix4?(m.boundary=64,m.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),m}function v(p){const m=p.target;m.removeEventListener("dispose",v);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function f(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class jT{constructor(e={}){const{canvas:n=zx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,v=null;const f=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const m=this;let S=!1,R=0,A=0,T=null,P=-1,E=null;const y=new bt,D=new bt;let U=null;const b=new We(0);let k=0,X=n.width,K=n.height,Q=1,I=null,j=null;const Y=new bt(0,0,X,K),ne=new bt(0,0,X,K);let de=!1;const ge=new Pg;let W=!1,B=!1;const ee=new pt,J=new N,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return T===null?Q:1}let O=i;function ke(C,z){return n.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",M,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",H,!1),O===null){const z="webgl2";if(O=ke(z,C),O===null)throw ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let me,qe,Ae,Ge,De,je,ot,L,w,q,Z,ie,re,Me,ue,ce,Pe,ae,Se,Ye,Ee,pe,Ie,Be;function Je(){me=new eE(O),me.init(),pe=new OT(O,me),qe=new YM(O,me,e,pe),Ae=new NT(O),Ge=new iE(O),De=new yT,je=new UT(O,me,Ae,De,qe,pe,Ge),ot=new qM(m),L=new JM(m),w=new cy(O),Ie=new XM(O,w),q=new tE(O,w,Ge,Ie),Z=new sE(O,q,w,Ge),Se=new rE(O,qe,je),ce=new $M(De),ie=new xT(m,ot,L,me,qe,Ie,ce),re=new WT(m,De),Me=new MT,ue=new RT(me),ae=new WM(m,ot,L,Ae,Z,h,l),Pe=new IT(m,Z,qe),Be=new XT(O,Ge,qe,Ae),Ye=new jM(O,me,Ge),Ee=new nE(O,me,Ge),Ge.programs=ie.programs,m.capabilities=qe,m.extensions=me,m.properties=De,m.renderLists=Me,m.shadowMap=Pe,m.state=Ae,m.info=Ge}Je();const Ue=new VT(m,O);this.xr=Ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(X,K,!1))},this.getSize=function(C){return C.set(X,K)},this.setSize=function(C,z,$=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,K=z,n.width=Math.floor(C*Q),n.height=Math.floor(z*Q),$===!0&&(n.style.width=C+"px",n.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(X*Q,K*Q).floor()},this.setDrawingBufferSize=function(C,z,$){X=C,K=z,Q=$,n.width=Math.floor(C*$),n.height=Math.floor(z*$),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,z,$,V){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,z,$,V),Ae.viewport(y.copy(Y).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,z,$,V){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,z,$,V),Ae.scissor(D.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Ae.setScissorTest(de=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(C=!0,z=!0,$=!0){let V=0;if(C){let G=!1;if(T!==null){const fe=T.texture.format;G=fe===_g||fe===vg||fe===gg}if(G){const fe=T.texture.type,_e=fe===di||fe===As||fe===fg||fe===Uo||fe===hg||fe===pg,ye=ae.getClearColor(),we=ae.getClearAlpha(),be=ye.r,Oe=ye.g,Ve=ye.b;_e?(g[0]=be,g[1]=Oe,g[2]=Ve,g[3]=we,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=be,_[1]=Oe,_[2]=Ve,_[3]=we,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}z&&(V|=O.DEPTH_BUFFER_BIT),$&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",M,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",H,!1),Me.dispose(),ue.dispose(),De.dispose(),ot.dispose(),L.dispose(),Z.dispose(),Ie.dispose(),Be.dispose(),ie.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ke),Ue.removeEventListener("sessionend",vt),nt.stop()};function M(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Ge.autoReset,z=Pe.enabled,$=Pe.autoUpdate,V=Pe.needsUpdate,G=Pe.type;Je(),Ge.autoReset=C,Pe.enabled=z,Pe.autoUpdate=$,Pe.needsUpdate=V,Pe.type=G}function H(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const z=C.target;z.removeEventListener("dispose",te),oe(z)}function oe(C){Ne(C),De.remove(C)}function Ne(C){const z=De.get(C).programs;z!==void 0&&(z.forEach(function($){ie.releaseProgram($)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,$,V,G,fe){z===null&&(z=ve);const _e=G.isMesh&&G.matrixWorld.determinant()<0,ye=kg(C,z,$,V,G);Ae.setMaterial(V,_e);let we=$.index,be=1;if(V.wireframe===!0){if(we=q.getWireframeAttribute($),we===void 0)return;be=2}const Oe=$.drawRange,Ve=$.attributes.position;let _t=Oe.start*be,It=(Oe.start+Oe.count)*be;fe!==null&&(_t=Math.max(_t,fe.start*be),It=Math.min(It,(fe.start+fe.count)*be)),we!==null?(_t=Math.max(_t,0),It=Math.min(It,we.count)):Ve!=null&&(_t=Math.max(_t,0),It=Math.min(It,Ve.count));const sn=It-_t;if(sn<0||sn===1/0)return;Ie.setup(G,V,ye,$,we);let $n,Ze=Ye;if(we!==null&&($n=w.get(we),Ze=Ee,Ze.setIndex($n)),G.isMesh)V.wireframe===!0?(Ae.setLineWidth(V.wireframeLinewidth*Te()),Ze.setMode(O.LINES)):Ze.setMode(O.TRIANGLES);else if(G.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Ae.setLineWidth(Le*Te()),G.isLineSegments?Ze.setMode(O.LINES):G.isLineLoop?Ze.setMode(O.LINE_LOOP):Ze.setMode(O.LINE_STRIP)}else G.isPoints?Ze.setMode(O.POINTS):G.isSprite&&Ze.setMode(O.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?Ze.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):Ze.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ze.renderInstances(_t,sn,G.count);else if($.isInstancedBufferGeometry){const Le=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Is=Math.min($.instanceCount,Le);Ze.renderInstances(_t,sn,Is)}else Ze.render(_t,sn)};function He(C,z,$){C.transparent===!0&&C.side===ii&&C.forceSinglePass===!1?(C.side=Yt,C.needsUpdate=!0,Bo(C,z,$),C.side=Yi,C.needsUpdate=!0,Bo(C,z,$),C.side=ii):Bo(C,z,$)}this.compile=function(C,z,$=null){$===null&&($=C),v=ue.get($),v.init(z),p.push(v),$.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),C!==$&&C.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights(m._useLegacyLights);const V=new Set;return C.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const ye=fe[_e];He(ye,$,G),V.add(ye)}else He(fe,$,G),V.add(fe)}),p.pop(),v=null,V},this.compileAsync=function(C,z,$=null){const V=this.compile(C,z,$);return new Promise(G=>{function fe(){if(V.forEach(function(_e){De.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){G(C);return}setTimeout(fe,10)}me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ct=null;function At(C){ct&&ct(C)}function Ke(){nt.stop()}function vt(){nt.start()}const nt=new bg;nt.setAnimationLoop(At),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){ct=C,Ue.setAnimationLoop(C),C===null?nt.stop():nt.start()},Ue.addEventListener("sessionstart",Ke),Ue.addEventListener("sessionend",vt),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(z),z=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,z,T),v=ue.get(C,p.length),v.init(z),p.push(v),ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ge.setFromProjectionMatrix(ee),B=this.localClippingEnabled,W=ce.init(this.clippingPlanes,B),x=Me.get(C,f.length),x.init(),f.push(x),gi(C,z,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(I,j);const $=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;$&&ae.addToRenderList(x,C),this.info.render.frame++,W===!0&&ce.beginShadows();const V=v.state.shadowsArray;Pe.render(V,C,z),W===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,fe=x.transmissive;if(v.setupLights(m._useLegacyLights),z.isArrayCamera){const _e=z.cameras;if(fe.length>0)for(let ye=0,we=_e.length;ye<we;ye++){const be=_e[ye];vi(G,fe,C,be)}$&&ae.render(C);for(let ye=0,we=_e.length;ye<we;ye++){const be=_e[ye];mn(x,C,be,be.viewport)}}else fe.length>0&&vi(G,fe,C,z),$&&ae.render(C),mn(x,C,z);T!==null&&(je.updateMultisampleRenderTarget(T),je.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(m,C,z),Ie.resetDefaultState(),P=-1,E=null,p.pop(),p.length>0?(v=p[p.length-1],W===!0&&ce.setGlobalState(m.clippingPlanes,v.state.camera)):v=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function gi(C,z,$,V){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ge.intersectsSprite(C)){V&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const _e=Z.update(C),ye=C.material;ye.visible&&x.push(C,_e,ye,$,J.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ge.intersectsObject(C))){const _e=Z.update(C),ye=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),J.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),J.copy(_e.boundingSphere.center)),J.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(ye)){const we=_e.groups;for(let be=0,Oe=we.length;be<Oe;be++){const Ve=we[be],_t=ye[Ve.materialIndex];_t&&_t.visible&&x.push(C,_e,_t,$,J.z,Ve)}}else ye.visible&&x.push(C,_e,ye,$,J.z,null)}}const fe=C.children;for(let _e=0,ye=fe.length;_e<ye;_e++)gi(fe[_e],z,$,V)}function mn(C,z,$,V){const G=C.opaque,fe=C.transmissive,_e=C.transparent;v.setupLightsView($),W===!0&&ce.setGlobalState(m.clippingPlanes,$),V&&Ae.viewport(y.copy(V)),G.length>0&&Yn(G,z,$),fe.length>0&&Yn(fe,z,$),_e.length>0&&Yn(_e,z,$),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function vi(C,z,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[V.id]===void 0&&(v.state.transmissionRenderTarget[V.id]=new $i(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Bl:di,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const fe=v.state.transmissionRenderTarget[V.id],_e=V.viewport||y;fe.setSize(_e.z,_e.w);const ye=m.getRenderTarget();m.setRenderTarget(fe),m.getClearColor(b),k=m.getClearAlpha(),k<1&&m.setClearColor(16777215,.5),m.clear();const we=m.toneMapping;m.toneMapping=Wi;const be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),v.setupLightsView(V),W===!0&&ce.setGlobalState(m.clippingPlanes,V),Yn(C,$,V),je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe),me.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ve=0,_t=z.length;Ve<_t;Ve++){const It=z[Ve],sn=It.object,$n=It.geometry,Ze=It.material,Le=It.group;if(Ze.side===ii&&sn.layers.test(V.layers)){const Is=Ze.side;Ze.side=Yt,Ze.needsUpdate=!0,Ds(sn,$,V,$n,Ze,Le),Ze.side=Is,Ze.needsUpdate=!0,Oe=!0}}Oe===!0&&(je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe))}m.setRenderTarget(ye),m.setClearColor(b,k),be!==void 0&&(V.viewport=be),m.toneMapping=we}function Yn(C,z,$){const V=z.isScene===!0?z.overrideMaterial:null;for(let G=0,fe=C.length;G<fe;G++){const _e=C[G],ye=_e.object,we=_e.geometry,be=V===null?_e.material:V,Oe=_e.group;ye.layers.test($.layers)&&Ds(ye,z,$,we,be,Oe)}}function Ds(C,z,$,V,G,fe){C.onBeforeRender(m,z,$,V,G,fe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(m,z,$,V,C,fe),G.transparent===!0&&G.side===ii&&G.forceSinglePass===!1?(G.side=Yt,G.needsUpdate=!0,m.renderBufferDirect($,z,V,G,C,fe),G.side=Yi,G.needsUpdate=!0,m.renderBufferDirect($,z,V,G,C,fe),G.side=ii):m.renderBufferDirect($,z,V,G,C,fe),C.onAfterRender(m,z,$,V,G,fe)}function Bo(C,z,$){z.isScene!==!0&&(z=ve);const V=De.get(C),G=v.state.lights,fe=v.state.shadowsArray,_e=G.state.version,ye=ie.getParameters(C,G.state,fe,z,$),we=ie.getProgramCacheKey(ye);let be=V.programs;V.environment=C.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(C.isMeshStandardMaterial?L:ot).get(C.envMap||V.environment),V.envMapRotation=V.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,be===void 0&&(C.addEventListener("dispose",te),be=new Map,V.programs=be);let Oe=be.get(we);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===_e)return od(C,ye),Oe}else ye.uniforms=ie.getUniforms(C),C.onBuild($,ye,m),C.onBeforeCompile(ye,m),Oe=ie.acquireProgram(ye,we),be.set(we,Oe),V.uniforms=ye.uniforms;const Ve=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ce.uniform),od(C,ye),V.needsLights=Hg(C),V.lightsStateVersion=_e,V.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function sd(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Ga.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function od(C,z){const $=De.get(C);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function kg(C,z,$,V,G){z.isScene!==!0&&(z=ve),je.resetTextureUnits();const fe=z.fog,_e=V.isMeshStandardMaterial?z.environment:null,ye=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,we=(V.isMeshStandardMaterial?L:ot).get(V.envMap||_e),be=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Oe=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ve=!!$.morphAttributes.position,_t=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let sn=Wi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(sn=m.toneMapping);const $n=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ze=$n!==void 0?$n.length:0,Le=De.get(V),Is=v.state.lights;if(W===!0&&(B===!0||C!==E)){const gn=C===E&&V.id===P;ce.setState(V,C,gn)}let at=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Is.state.version||Le.outputColorSpace!==ye||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==we||V.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==be||Le.vertexTangents!==Oe||Le.morphTargets!==Ve||Le.morphNormals!==_t||Le.morphColors!==It||Le.toneMapping!==sn||Le.morphTargetsCount!==Ze)&&(at=!0):(at=!0,Le.__version=V.version);let Ji=Le.currentProgram;at===!0&&(Ji=Bo(V,z,G));let ad=!1,Ns=!1,jl=!1;const Nt=Ji.getUniforms(),_i=Le.uniforms;if(Ae.useProgram(Ji.program)&&(ad=!0,Ns=!0,jl=!0),V.id!==P&&(P=V.id,Ns=!0),ad||E!==C){Nt.setValue(O,"projectionMatrix",C.projectionMatrix),Nt.setValue(O,"viewMatrix",C.matrixWorldInverse);const gn=Nt.map.cameraPosition;gn!==void 0&&gn.setValue(O,J.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Ns=!0,jl=!0)}if(G.isSkinnedMesh){Nt.setOptional(O,G,"bindMatrix"),Nt.setOptional(O,G,"bindMatrixInverse");const gn=G.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(O,"boneTexture",gn.boneTexture,je))}G.isBatchedMesh&&(Nt.setOptional(O,G,"batchingTexture"),Nt.setValue(O,"batchingTexture",G._matricesTexture,je));const Yl=$.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&Se.update(G,$,Ji),(Ns||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Nt.setValue(O,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_i.envMap.value=we,_i.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(_i.envMapIntensity.value=z.environmentIntensity),Ns&&(Nt.setValue(O,"toneMappingExposure",m.toneMappingExposure),Le.needsLights&&Bg(_i,jl),fe&&V.fog===!0&&re.refreshFogUniforms(_i,fe),re.refreshMaterialUniforms(_i,V,Q,K,v.state.transmissionRenderTarget[C.id]),Ga.upload(O,sd(Le),_i,je)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ga.upload(O,sd(Le),_i,je),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(O,"center",G.center),Nt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(O,"normalMatrix",G.normalMatrix),Nt.setValue(O,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let $l=0,Vg=gn.length;$l<Vg;$l++){const ld=gn[$l];Be.update(ld,Ji),Be.bind(ld,Ji)}}return Ji}function Bg(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Hg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,z,$){De.get(C.texture).__webglTexture=z,De.get(C.depthTexture).__webglTexture=$;const V=De.get(C);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=$===void 0,V.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const $=De.get(C);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,$=0){T=C,R=z,A=$;let V=!0,G=null,fe=!1,_e=!1;if(C){const we=De.get(C);we.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?je.setupRenderTarget(C):we.__hasExternalTextures&&je.rebindTextures(C,De.get(C.texture).__webglTexture,De.get(C.depthTexture).__webglTexture);const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Oe=De.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?G=Oe[z][$]:G=Oe[z],fe=!0):C.samples>0&&je.useMultisampledRTT(C)===!1?G=De.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[$]:G=Oe,y.copy(C.viewport),D.copy(C.scissor),U=C.scissorTest}else y.copy(Y).multiplyScalar(Q).floor(),D.copy(ne).multiplyScalar(Q).floor(),U=de;if(Ae.bindFramebuffer(O.FRAMEBUFFER,G)&&V&&Ae.drawBuffers(C,G),Ae.viewport(y),Ae.scissor(D),Ae.setScissorTest(U),fe){const we=De.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,$)}else if(_e){const we=De.get(C.texture),be=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,$||0,be)}P=-1},this.readRenderTargetPixels=function(C,z,$,V,G,fe,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ae.bindFramebuffer(O.FRAMEBUFFER,ye);try{const we=C.texture,be=we.format,Oe=we.type;if(!qe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-V&&$>=0&&$<=C.height-G&&O.readPixels(z,$,V,G,pe.convert(be),pe.convert(Oe),fe)}finally{const we=T!==null?De.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,z,$=0){const V=Math.pow(2,-$),G=Math.floor(z.image.width*V),fe=Math.floor(z.image.height*V);je.setTexture2D(z,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,C.x,C.y,G,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(C,z,$,V=0){const G=z.image.width,fe=z.image.height,_e=pe.convert($.format),ye=pe.convert($.type);je.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),z.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,C.x,C.y,G,fe,_e,ye,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,_e,z.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,C.x,C.y,_e,ye,z.image),V===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,z,$,V,G=0){const fe=C.max.x-C.min.x,_e=C.max.y-C.min.y,ye=C.max.z-C.min.z,we=pe.convert(V.format),be=pe.convert(V.type);let Oe;if(V.isData3DTexture)je.setTexture3D(V,0),Oe=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)je.setTexture2DArray(V,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Ve=O.getParameter(O.UNPACK_ROW_LENGTH),_t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),It=O.getParameter(O.UNPACK_SKIP_PIXELS),sn=O.getParameter(O.UNPACK_SKIP_ROWS),$n=O.getParameter(O.UNPACK_SKIP_IMAGES),Ze=$.isCompressedTexture?$.mipmaps[G]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,C.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,C.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Oe,G,z.x,z.y,z.z,fe,_e,ye,we,be,Ze.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,G,z.x,z.y,z.z,fe,_e,ye,we,Ze.data):O.texSubImage3D(Oe,G,z.x,z.y,z.z,fe,_e,ye,we,be,Ze),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,sn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$n),G===0&&V.generateMipmaps&&O.generateMipmap(Oe),Ae.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?je.setTextureCube(C,0):C.isData3DTexture?je.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?je.setTexture2DArray(C,0):je.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Ae.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Hl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fg extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zg extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kp=new pt,Ju=new Vl,Ca=new Fo,Ra=new N;class YT extends nn{constructor(e=new rn,n=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;kp.copy(r).invert(),Ju.copy(e.ray).applyMatrix4(kp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,x=g;_<x;_++){const v=c.getX(_);Ra.fromBufferAttribute(d,v),Bp(Ra,v,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,x=g;_<x;_++)Ra.fromBufferAttribute(d,_),Bp(Ra,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bp(t,e,n,i,r,s,o){const a=Ju.distanceSqToPoint(t);if(a<n){const l=new N;Ju.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class nd extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new N,h=new N,g=[],_=[],x=[],v=[];for(let f=0;f<=i;f++){const p=[],m=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+m*a),d.y=e*Math.cos(o+m*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+m*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),v.push(A+S,1-m),p.push(c++)}u.push(p)}for(let f=0;f<i;f++)for(let p=0;p<n;p++){const m=u[f][p+1],S=u[f][p],R=u[f+1][p],A=u[f+1][p+1];(f!==0||o>0)&&g.push(m,S,A),(f!==i-1||l<Math.PI)&&g.push(S,R,A)}this.setIndex(g),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Hp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class $T{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return _}return null}}}const qT=new $T;class id{constructor(e){this.manager=e!==void 0?e:qT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}id.DEFAULT_MATERIAL_NAME="__DEFAULT";class KT extends id{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Po("img");function l(){u(),Hp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZT extends id{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new KT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}const Vp=new pt;class QT{constructor(e,n,i=0,r=1/0){this.ray=new Vl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Vp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vp),this}intersectObject(e,n=!0,i=[]){return ef(e,this,i,n),i.sort(Gp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ef(e[r],this,i,n);return i.sort(Gp),i}}function Gp(t,e){return t.distance-e.distance}function ef(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)ef(r[s],e,n,!0)}}class Wp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const Xp={type:"change"},Qc={type:"start"},jp={type:"end"},Pa=new Vl,Yp=new Ri,JT=Math.cos(70*Fx.DEG2RAD);class eA extends Ar{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Pe),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xp),i.update(),s=r.NONE},this.update=function(){const M=new N,F=new hi().setFromUnitVectors(e.up,new N(0,1,0)),H=F.clone().invert(),te=new N,oe=new hi,Ne=new N,He=2*Math.PI;return function(At=null){const Ke=i.object.position;M.copy(Ke).sub(i.target),M.applyQuaternion(F),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&U(y(At)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let vt=i.minAzimuthAngle,nt=i.maxAzimuthAngle;isFinite(vt)&&isFinite(nt)&&(vt<-Math.PI?vt+=He:vt>Math.PI&&(vt-=He),nt<-Math.PI?nt+=He:nt>Math.PI&&(nt-=He),vt<=nt?a.theta=Math.max(vt,Math.min(nt,a.theta)):a.theta=a.theta>(vt+nt)/2?Math.max(vt,a.theta):Math.min(nt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let gi=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Y(a.radius);else{const mn=a.radius;a.radius=Y(a.radius*c),gi=mn!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(H),Ke.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let mn=null;if(i.object.isPerspectiveCamera){const vi=M.length();mn=Y(vi*c);const Yn=vi-mn;i.object.position.addScaledVector(S,Yn),i.object.updateMatrixWorld(),gi=!!Yn}else if(i.object.isOrthographicCamera){const vi=new N(R.x,R.y,0);vi.unproject(i.object);const Yn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),gi=Yn!==i.object.zoom;const Ds=new N(R.x,R.y,0);Ds.unproject(i.object),i.object.position.sub(Ds).add(vi),i.object.updateMatrixWorld(),mn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;mn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(mn).add(i.object.position):(Pa.origin.copy(i.object.position),Pa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Pa.direction))<JT?e.lookAt(i.target):(Yp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Pa.intersectPlane(Yp,i.target))))}else if(i.object.isOrthographicCamera){const mn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),mn!==i.object.zoom&&(i.object.updateProjectionMatrix(),gi=!0)}return c=1,A=!1,gi||te.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o||Ne.distanceToSquared(i.target)>o?(i.dispatchEvent(Xp),te.copy(i.object.position),oe.copy(i.object.quaternion),Ne.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ye),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",q),i.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Pe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Wp,l=new Wp;let c=1;const u=new N,d=new Ce,h=new Ce,g=new Ce,_=new Ce,x=new Ce,v=new Ce,f=new Ce,p=new Ce,m=new Ce,S=new N,R=new Ce;let A=!1;const T=[],P={};let E=!1;function y(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function D(M){const F=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*F)}function U(M){l.theta-=M}function b(M){l.phi-=M}const k=function(){const M=new N;return function(H,te){M.setFromMatrixColumn(te,0),M.multiplyScalar(-H),u.add(M)}}(),X=function(){const M=new N;return function(H,te){i.screenSpacePanning===!0?M.setFromMatrixColumn(te,1):(M.setFromMatrixColumn(te,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(H),u.add(M)}}(),K=function(){const M=new N;return function(H,te){const oe=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;M.copy(Ne).sub(i.target);let He=M.length();He*=Math.tan(i.object.fov/2*Math.PI/180),k(2*H*He/oe.clientHeight,i.object.matrix),X(2*te*He/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(H*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),X(te*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(M,F){if(!i.zoomToCursor)return;A=!0;const H=i.domElement.getBoundingClientRect(),te=M-H.left,oe=F-H.top,Ne=H.width,He=H.height;R.x=te/Ne*2-1,R.y=-(oe/He)*2+1,S.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function ne(M){d.set(M.clientX,M.clientY)}function de(M){j(M.clientX,M.clientX),f.set(M.clientX,M.clientY)}function ge(M){_.set(M.clientX,M.clientY)}function W(M){h.set(M.clientX,M.clientY),g.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;U(2*Math.PI*g.x/F.clientHeight),b(2*Math.PI*g.y/F.clientHeight),d.copy(h),i.update()}function B(M){p.set(M.clientX,M.clientY),m.subVectors(p,f),m.y>0?Q(D(m.y)):m.y<0&&I(D(m.y)),f.copy(p),i.update()}function ee(M){x.set(M.clientX,M.clientY),v.subVectors(x,_).multiplyScalar(i.panSpeed),K(v.x,v.y),_.copy(x),i.update()}function J(M){j(M.clientX,M.clientY),M.deltaY<0?I(D(M.deltaY)):M.deltaY>0&&Q(D(M.deltaY)),i.update()}function ve(M){let F=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),F=!0;break}F&&(M.preventDefault(),i.update())}function Te(M){if(T.length===1)d.set(M.pageX,M.pageY);else{const F=Je(M),H=.5*(M.pageX+F.x),te=.5*(M.pageY+F.y);d.set(H,te)}}function O(M){if(T.length===1)_.set(M.pageX,M.pageY);else{const F=Je(M),H=.5*(M.pageX+F.x),te=.5*(M.pageY+F.y);_.set(H,te)}}function ke(M){const F=Je(M),H=M.pageX-F.x,te=M.pageY-F.y,oe=Math.sqrt(H*H+te*te);f.set(0,oe)}function me(M){i.enableZoom&&ke(M),i.enablePan&&O(M)}function qe(M){i.enableZoom&&ke(M),i.enableRotate&&Te(M)}function Ae(M){if(T.length==1)h.set(M.pageX,M.pageY);else{const H=Je(M),te=.5*(M.pageX+H.x),oe=.5*(M.pageY+H.y);h.set(te,oe)}g.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;U(2*Math.PI*g.x/F.clientHeight),b(2*Math.PI*g.y/F.clientHeight),d.copy(h)}function Ge(M){if(T.length===1)x.set(M.pageX,M.pageY);else{const F=Je(M),H=.5*(M.pageX+F.x),te=.5*(M.pageY+F.y);x.set(H,te)}v.subVectors(x,_).multiplyScalar(i.panSpeed),K(v.x,v.y),_.copy(x)}function De(M){const F=Je(M),H=M.pageX-F.x,te=M.pageY-F.y,oe=Math.sqrt(H*H+te*te);p.set(0,oe),m.set(0,Math.pow(p.y/f.y,i.zoomSpeed)),Q(m.y),f.copy(p);const Ne=(M.pageX+F.x)*.5,He=(M.pageY+F.y)*.5;j(Ne,He)}function je(M){i.enableZoom&&De(M),i.enablePan&&Ge(M)}function ot(M){i.enableZoom&&De(M),i.enableRotate&&Ae(M)}function L(M){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",q)),!Ie(M)&&(Ee(M),M.pointerType==="touch"?ae(M):Z(M)))}function w(M){i.enabled!==!1&&(M.pointerType==="touch"?Se(M):ie(M))}function q(M){switch(pe(M),T.length){case 0:i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",q),i.dispatchEvent(jp),s=r.NONE;break;case 1:const F=T[0],H=P[F];ae({pointerId:F,pageX:H.x,pageY:H.y});break}}function Z(M){let F;switch(M.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Cr.DOLLY:if(i.enableZoom===!1)return;de(M),s=r.DOLLY;break;case Cr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;ge(M),s=r.PAN}else{if(i.enableRotate===!1)return;ne(M),s=r.ROTATE}break;case Cr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;ne(M),s=r.ROTATE}else{if(i.enablePan===!1)return;ge(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qc)}function ie(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(M);break;case r.DOLLY:if(i.enableZoom===!1)return;B(M);break;case r.PAN:if(i.enablePan===!1)return;ee(M);break}}function re(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Qc),J(Me(M)),i.dispatchEvent(jp))}function Me(M){const F=M.deltaMode,H={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(F){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return M.ctrlKey&&!E&&(H.deltaY*=10),H}function ue(M){M.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",ce,{passive:!0,capture:!0}))}function ce(M){M.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",ce,{passive:!0,capture:!0}))}function Pe(M){i.enabled===!1||i.enablePan===!1||ve(M)}function ae(M){switch(Be(M),T.length){case 1:switch(i.touches.ONE){case Rr.ROTATE:if(i.enableRotate===!1)return;Te(M),s=r.TOUCH_ROTATE;break;case Rr.PAN:if(i.enablePan===!1)return;O(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(M),s=r.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;qe(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qc)}function Se(M){switch(Be(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ge(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;je(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(M),i.update();break;default:s=r.NONE}}function Ye(M){i.enabled!==!1&&M.preventDefault()}function Ee(M){T.push(M.pointerId)}function pe(M){delete P[M.pointerId];for(let F=0;F<T.length;F++)if(T[F]==M.pointerId){T.splice(F,1);return}}function Ie(M){for(let F=0;F<T.length;F++)if(T[F]==M.pointerId)return!0;return!1}function Be(M){let F=P[M.pointerId];F===void 0&&(F=new Ce,P[M.pointerId]=F),F.set(M.pageX,M.pageY)}function Je(M){const F=M.pointerId===T[0]?T[1]:T[0];return P[F]}i.domElement.addEventListener("contextmenu",Ye),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",q),i.domElement.addEventListener("wheel",re,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}const tA=()=>`
varying vec4 world_position;
varying vec2 vUv;

void main() {
  world_position = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,rd=`

uniform vec3 signals[SIGNAL_COUNT];
uniform float signalIntensities[SIGNAL_COUNT];
uniform float signalChannels[SIGNAL_COUNT];
uniform int signalCount;
uniform vec3 aabbs[AABB_COUNT];
uniform int aabbCount;
uniform vec3 planes[PLANE_COUNT];
uniform int planeCount;

float decay(float d, float intensity, float wallLoss) {
  float A = 36.8;
  float B = 43.8;
  float C = 20.0;
  float f = 2.4;
  float loss = A * (log(d) / log(10.0)) + B + C * (log(f / 5.0) / log(10.0)) + wallLoss;
  float result = intensity - loss;

  return (clamp(result, -60.0, -30.0) + 60.0) / 30.0;
}


// adapted from intersectCube in https://github.com/evanw/webgl-path-tracing/blob/master/webgl-path-tracing.js
// compute the near and far intersections of the cube (stored in the x and y components) using the slab method
// no intersection means vec.x > vec.y (really tNear > tFar)
vec2 intersectAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
  vec3 tMin = (boxMin - rayOrigin) / rayDir;
  vec3 tMax = (boxMax - rayOrigin) / rayDir;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

float PointInOrOn(vec3 P1, vec3 P2, vec3 A, vec3 B) {
  vec3 CP1 = cross(B - A, P1 - A);
  vec3 CP2 = cross(B - A, P2 - A);
  return step(0.0, dot(CP1, CP2));
}

bool PointInTriangle(vec3 px, vec3 p0, vec3 p1, vec3 p2) {
  return PointInOrOn(px, p0, p1, p2) * PointInOrOn(px, p1, p2, p0) * PointInOrOn(px, p2, p0, p1) < 1e-3;
}

vec3 IntersectPlane(vec3 rayOrigin, vec3 rayDir, vec3 p0, vec3 p1, vec3 p2) {
  vec3 D = rayDir;
  vec3 N = cross(p1 - p0, p2 - p0);
  vec3 X = rayOrigin + D * dot(p0 - rayOrigin, N) / dot(D, N);
  return X;
}

bool pointOnRay(vec3 point, vec3 rayOrigin, vec3 rayDir) {
  vec3 intersectionDir = normalize(rayOrigin - point);
  return dot(intersectionDir, rayDir) < (1.0 - 1e-3);
}

bool intersect(vec3 origin, vec3 rayDir, vec3 p0, vec3 p1, vec3 p2, float maxDistance) {
  vec3 x = IntersectPlane(origin, rayDir, p0, p1, p2);
  bool noIntersections = PointInTriangle(x, p0, p1, p2) || !pointOnRay(x, origin, rayDir) || distance(x, origin) > maxDistance - 1e-3;
  return !noIntersections;
}

vec3 hsvToRgb(float h, float s, float v) {
  if (s == 0.0) {
    return vec3(v, v, v);
  }

  float h6 = h * 6.0;
  int i = int(floor(h6));
  float f = h6 - float(i);
  float p = v * (1.0 - s);
  float q = v * (1.0 - f * s);
  float t = v * (1.0 - (1.0 - f) * s);

  if (i == 0) {
    return vec3(v, t, p);
  } else if (i == 1) {
    return vec3(q, v, p);
  } else if (i == 2) {
    return vec3(p, v, t);
  } else if (i == 3) {
    return vec3(p, q, v);
  } else if (i == 4) {
    return vec3(t, p, v);
  } else {
    return vec3(v, p, q);
  }
}

vec2 rotate(vec2 v, float angle) {
  float cosA = cos(angle);
  float sinA = sin(angle);

  return vec2(
    v.x * cosA - v.y * sinA,
    v.x * sinA + v.y * cosA
  );
}

float pointToLineDistance(vec2 point) {
  float x0 = point.x;
  float y0 = point.y;

  float A = 1.0;
  float B = -1.0;
  float C = 0.0;

  return abs(A * x0 + B * y0 + C) / sqrt(A * A + B * B);
}

vec3 getIndicesMapColor(vec2 fragCoord, float anglePercentage, float gridSize, float signalIndex) {
  vec3 bgColor = vec3(0.0, 0.0, 0.0);

  float x = mod(fragCoord.x, gridSize) / gridSize;
  float y = mod(fragCoord.y, gridSize) / gridSize;

  if (distance(vec2(x, y), vec2(0.5, 0.5)) > 0.4) {
    return bgColor;
  }

  vec2 direction = rotate(vec2(x - 0.5, y - 0.5), anglePercentage * 3.1415926535897932384626433832795) + vec2(0.5, 0.5);
  bool isLineFragment = pointToLineDistance(direction) < 0.05;

  if (isLineFragment) {
    return hsvToRgb(signalIndex, 1.0, 1.0);
  }

  return bgColor;
}

struct Result {
  vec4 signalColor;
  float density;
};

Result getSignalDensity(vec4 world_position, vec2 indexMapCoordinate) {
  float maxSignalIndex = 1.0;
  vec3 color = vec3(0.0, 0.0, 0.0);
  float density = 1e-6;
  for (int signalIndex = 0; signalIndex < signalCount; signalIndex++) {
    float wallDistance = 0.0;
    vec3 signalPosition = signals[signalIndex].xyz;
    vec3 rayDir = normalize(world_position.xyz - signalPosition);

    float totalDistance = distance(world_position.xyz, signalPosition);

    for (int aabbIndex = 0; aabbIndex < aabbCount; aabbIndex++) {
      vec2 nearFar = intersectAABB(signalPosition, rayDir, aabbs[2 * aabbIndex], aabbs[2 * aabbIndex + 1]);
      bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0 || nearFar.x > totalDistance - 1e-3;
      if (noIntersections) {
        continue;
      }

      wallDistance += nearFar.y - nearFar.x;
    }

    for (int planeIndex = 0; planeIndex < planeCount; planeIndex++) {
      vec3 min = planes[2 * planeIndex];
      vec3 max = planes[2 * planeIndex + 1];

      vec3 p0 = min;
      vec3 p1 = vec3(max.x, min.y, max.z);
      vec3 p2 = max;
      vec3 p3 = vec3(min.x, max.y, min.z);

      if (!intersect(signalPosition, rayDir, p0, p1, p2, totalDistance) && !intersect(signalPosition, rayDir, p3, p0, p2, totalDistance)) {
        continue;
      }

      wallDistance += 0.15;
    }

    float wallDecay = wallDistance * 5.0;
    float newDensity = decay(totalDistance, signalIntensities[signalIndex], wallDecay);

    if (newDensity > density) {
      density = newDensity;
      maxSignalIndex = float(signalIndex) / float(signalCount);
    }
    if (newDensity > 1e-3)
      color += getIndicesMapColor(indexMapCoordinate, signalChannels[signalIndex], 0.5, float(signalIndex) / float(signalCount));
  }
  bool isBackground = distance(color, vec3(0.0)) < 1e-3;

  Result result;
  result.signalColor = vec4(isBackground ? hsvToRgb(maxSignalIndex, 1.0, 0.3) : color, 1.0);
  result.density = density;
  return result;
}
`,nA=(t,e,n)=>`
#define SIGNAL_COUNT ${t}
#define AABB_COUNT ${e*2}
#define PLANE_COUNT ${n*2}

${rd}

uniform sampler2D map;
uniform vec2 mapScale;
uniform vec2 mapOffset;
uniform bool isSignalIndex;
uniform bool isHeatmapColor;

varying vec2 vUv;
varying vec4 world_position;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 opacityToHSV(float opacity) {
  float minHue = 0.7;
  float maxHue = 0.0;
  float hue = mix(minHue, maxHue, opacity);
  return hsv2rgb(vec3(hue, 1.0, 1.0));
}

void main() {
  vec4 color = texture2D(map, (world_position.xz * mapScale) + mapOffset);
  if (!isHeatmapColor && !isSignalIndex) {
    gl_FragColor = color;
    return;
  }

  Result result = getSignalDensity(world_position, vUv);
  if (result.density < 1e-5) {
    gl_FragColor = color;
    return;
  }
  vec4 visualizedDensity = isSignalIndex ? result.signalColor : vec4(opacityToHSV(result.density), 1.0);
  gl_FragColor = mix(color, visualizedDensity, 0.4);
}
`;class xl extends On{static _getUniformLimitation(){return{MAX_SIGNAL_COUNT:15,MAX_AABB_COUNT:25,MAX_PLANE_COUNT:80}}constructor(){const{MAX_SIGNAL_COUNT:e,MAX_AABB_COUNT:n,MAX_PLANE_COUNT:i}=xl._getUniformLimitation();super({uniforms:{isHeatmapColor:{value:!0},isSignalIndex:{value:!1},mapScale:{value:new Ce(1,1)},mapOffset:{value:new Ce(0,0)},map:{value:null},planeCount:{value:0},aabbCount:{value:0},signalCount:{value:0},signalIntensities:{value:Array(e).fill(10)},signalChannels:{value:Array(e).fill(0)},signals:{value:Array(e).fill(new N)},aabbs:{value:Array(n*2).fill(new N)},planes:{value:Array(i*2).fill(new N)}},vertexShader:tA(),fragmentShader:nA(e,n,i)})}setUniforms({isHeatmapColor:e,isSignalIndex:n,planeCount:i,aabbCount:r,signalCount:s,signals:o,signalIntensities:a,signalChannels:l,aabbs:c,planes:u,map:d,mapScale:h,mapOffset:g}){const{MAX_SIGNAL_COUNT:_,MAX_AABB_COUNT:x,MAX_PLANE_COUNT:v}=xl._getUniformLimitation(),f=p=>p!==void 0;f(e)&&(this.uniforms.isHeatmapColor.value=e),f(n)&&(this.uniforms.isSignalIndex.value=n),f(i)&&(this.uniforms.planeCount.value=i),f(r)&&(this.uniforms.aabbCount.value=r),f(s)&&(this.uniforms.signalCount.value=s),a&&(this.uniforms.signalIntensities.value=[...a,...Array(_-a.length).fill(0)]),l&&(this.uniforms.signalChannels.value=[...l,...Array(_-l.length).fill(0)]),o&&(this.uniforms.signals.value=[...o,...Array(_-o.length).fill(new N)]),c&&(this.uniforms.aabbs.value=[...c,...Array(x*2-c.length).fill(new N)]),u&&(this.uniforms.planes.value=[...u,...Array(v*2-u.length).fill(new N)]),d&&(this.uniforms.map.value=d),h&&(this.uniforms.mapScale.value=h),g&&(this.uniforms.mapOffset.value=g)}}const $p=({width:t,height:e,depth:n,center:i,quaternion:r})=>{const s=[[0,0],[0,1],[1,0],[1,1],[1,0],[0,1]],o=[[0,0],[1,0],[0,1],[1,1],[0,1],[1,0]],a=new N(-t/2,-e/2,-n/2),l=[...s.flatMap(u=>new N().fromArray([u[0]*t,e,u[1]*n]).add(a).applyQuaternion(r).add(i).toArray()),...s.flatMap(u=>new N().fromArray([u[0]*t,u[1]*e,0]).add(a).applyQuaternion(r).add(i).toArray()),...s.flatMap(u=>new N().fromArray([0,u[0]*e,u[1]*n]).add(a).applyQuaternion(r).add(i).toArray()),...o.flatMap(u=>new N().fromArray([u[0]*t,u[1]*e,n]).add(a).applyQuaternion(r).add(i).toArray()),...o.flatMap(u=>new N().fromArray([t,u[0]*e,u[1]*n]).add(a).applyQuaternion(r).add(i).toArray())],c=[...s.flatMap(([u,d])=>[u*t,d*n]),...s.flatMap(([u,d])=>[u*t,d*e]),...s.flatMap(([u,d])=>[u*e,d*n]),...o.flatMap(([u,d])=>[u*t,d*e]),...o.flatMap(([u,d])=>[u*e,d*n])];return{vertices:l,uvs:c}};class iA extends rn{constructor(){super(),this.aabbArray=[],this.PLANE_THICKNESS=.08,this.planeArray=[],this.width=0,this.length=0}_updateGeometry(){const e=this.aabbArray.map(([c,u])=>{const d=Math.abs(u[0]-c[0]),h=Math.abs(u[1]-c[1]),g=Math.abs(u[2]-c[2]),_=new N((u[0]+c[0])/2,(u[1]+c[1])/2,(u[2]+c[2])/2),{vertices:x,uvs:v}=$p({width:d,height:h,depth:g,center:_,quaternion:new hi(0,0,0,1)});return{vertices:x,uvs:v}}),n=e.flatMap(c=>c.vertices),i=e.flatMap(c=>c.uvs),r=this.planeArray.map(([c,u])=>{const d=new pt().lookAt(new N(c[0],0,c[2]),new N(u[0],0,u[2]),new N(0,1,0)),h=new hi().setFromRotationMatrix(d),g=new Ce(u[0]-c[0],u[2]-c[2]).length(),_=u[1]-c[1],x=new N((u[0]+c[0])/2,(u[1]+c[1])/2,(u[2]+c[2])/2),{vertices:v,uvs:f}=$p({width:this.PLANE_THICKNESS,height:_,depth:g,center:x,quaternion:h});return{vertices:v,uvs:f}}),s=r.flatMap(c=>c.vertices),o=r.flatMap(c=>c.uvs),{floorVertices:a,floorUvs:l}=(()=>{const c=[[1,0,1],[1,0,-1],[-1,0,1],[1,0,-1],[-1,0,-1],[-1,0,1]].flatMap(([d,h,g])=>[d*this.width/2,h,g*this.length/2]).flat(),u=[[1,1],[1,0],[0,1],[1,0],[0,0],[0,1]].flatMap(([d,h])=>[d*this.width,h*this.length]).flat();return{floorVertices:c,floorUvs:u}})();this.setAttribute("position",new gt(new Float32Array([...a,...n,...s]),3)),this.setAttribute("uv",new gt(new Float32Array([...l,...i,...o]),2))}setFloor(e,n){this.width=e,this.length=n,this._updateGeometry()}setAABB(e){e&&(this.aabbArray=e,this._updateGeometry())}setPlane(e){e&&(this.planeArray=e,this._updateGeometry())}}class rA extends Xt{constructor(e,n,i=!1,r=!1,s=1e4){const o=new rn;super(o,n),this.isMarchingCubes=!0;const a=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(p){this.resolution=p,this.isolation=80,this.size=p,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const m=s*3;this.positionArray=new Float32Array(m*3);const S=new gt(this.positionArray,3);S.setUsage(sa),o.setAttribute("position",S),this.normalArray=new Float32Array(m*3);const R=new gt(this.normalArray,3);if(R.setUsage(sa),o.setAttribute("normal",R),this.enableUvs){this.uvArray=new Float32Array(m*2);const A=new gt(this.uvArray,2);A.setUsage(sa),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(m*3);const A=new gt(this.colorArray,3);A.setUsage(sa),o.setAttribute("color",A)}o.boundingSphere=new Fo(new N,1)};function d(p,m,S){return p+(m-p)*S}function h(p,m,S,R,A,T,P,E,y,D){const U=(S-P)/(E-P),b=a.normal_cache;l[m+0]=R+U*a.delta,l[m+1]=A,l[m+2]=T,c[m+0]=d(b[p+0],b[p+3],U),c[m+1]=d(b[p+1],b[p+4],U),c[m+2]=d(b[p+2],b[p+5],U),u[m+0]=d(a.palette[y*3+0],a.palette[D*3+0],U),u[m+1]=d(a.palette[y*3+1],a.palette[D*3+1],U),u[m+2]=d(a.palette[y*3+2],a.palette[D*3+2],U)}function g(p,m,S,R,A,T,P,E,y,D){const U=(S-P)/(E-P),b=a.normal_cache;l[m+0]=R,l[m+1]=A+U*a.delta,l[m+2]=T;const k=p+a.yd*3;c[m+0]=d(b[p+0],b[k+0],U),c[m+1]=d(b[p+1],b[k+1],U),c[m+2]=d(b[p+2],b[k+2],U),u[m+0]=d(a.palette[y*3+0],a.palette[D*3+0],U),u[m+1]=d(a.palette[y*3+1],a.palette[D*3+1],U),u[m+2]=d(a.palette[y*3+2],a.palette[D*3+2],U)}function _(p,m,S,R,A,T,P,E,y,D){const U=(S-P)/(E-P),b=a.normal_cache;l[m+0]=R,l[m+1]=A,l[m+2]=T+U*a.delta;const k=p+a.zd*3;c[m+0]=d(b[p+0],b[k+0],U),c[m+1]=d(b[p+1],b[k+1],U),c[m+2]=d(b[p+2],b[k+2],U),u[m+0]=d(a.palette[y*3+0],a.palette[D*3+0],U),u[m+1]=d(a.palette[y*3+1],a.palette[D*3+1],U),u[m+2]=d(a.palette[y*3+2],a.palette[D*3+2],U)}function x(p){const m=p*3;a.normal_cache[m]===0&&(a.normal_cache[m+0]=a.field[p-1]-a.field[p+1],a.normal_cache[m+1]=a.field[p-a.yd]-a.field[p+a.yd],a.normal_cache[m+2]=a.field[p-a.zd]-a.field[p+a.zd])}function v(p,m,S,R,A){const T=R+1,P=R+a.yd,E=R+a.zd,y=T+a.yd,D=T+a.zd,U=R+a.yd+a.zd,b=T+a.yd+a.zd;let k=0;const X=a.field[R],K=a.field[T],Q=a.field[P],I=a.field[y],j=a.field[E],Y=a.field[D],ne=a.field[U],de=a.field[b];X<A&&(k|=1),K<A&&(k|=2),Q<A&&(k|=8),I<A&&(k|=4),j<A&&(k|=16),Y<A&&(k|=32),ne<A&&(k|=128),de<A&&(k|=64);const ge=sA[k];if(ge===0)return 0;const W=a.delta,B=p+W,ee=m+W,J=S+W;ge&1&&(x(R),x(T),h(R*3,0,A,p,m,S,X,K,R,T)),ge&2&&(x(T),x(y),g(T*3,3,A,B,m,S,K,I,T,y)),ge&4&&(x(P),x(y),h(P*3,6,A,p,ee,S,Q,I,P,y)),ge&8&&(x(R),x(P),g(R*3,9,A,p,m,S,X,Q,R,P)),ge&16&&(x(E),x(D),h(E*3,12,A,p,m,J,j,Y,E,D)),ge&32&&(x(D),x(b),g(D*3,15,A,B,m,J,Y,de,D,b)),ge&64&&(x(U),x(b),h(U*3,18,A,p,ee,J,ne,de,U,b)),ge&128&&(x(E),x(U),g(E*3,21,A,p,m,J,j,ne,E,U)),ge&256&&(x(R),x(E),_(R*3,24,A,p,m,S,X,j,R,E)),ge&512&&(x(T),x(D),_(T*3,27,A,B,m,S,K,Y,T,D)),ge&1024&&(x(y),x(b),_(y*3,30,A,B,ee,S,I,de,y,b)),ge&2048&&(x(P),x(U),_(P*3,33,A,p,ee,S,Q,ne,P,U)),k<<=4;let ve,Te,O,ke=0,me=0;for(;ba[k+me]!=-1;)ve=k+me,Te=ve+1,O=ve+2,f(l,c,u,3*ba[ve],3*ba[Te],3*ba[O]),me+=3,ke++;return ke}function f(p,m,S,R,A,T){const P=a.count*3;if(a.positionArray[P+0]=p[R],a.positionArray[P+1]=p[R+1],a.positionArray[P+2]=p[R+2],a.positionArray[P+3]=p[A],a.positionArray[P+4]=p[A+1],a.positionArray[P+5]=p[A+2],a.positionArray[P+6]=p[T],a.positionArray[P+7]=p[T+1],a.positionArray[P+8]=p[T+2],a.material.flatShading===!0){const E=(m[R+0]+m[A+0]+m[T+0])/3,y=(m[R+1]+m[A+1]+m[T+1])/3,D=(m[R+2]+m[A+2]+m[T+2])/3;a.normalArray[P+0]=E,a.normalArray[P+1]=y,a.normalArray[P+2]=D,a.normalArray[P+3]=E,a.normalArray[P+4]=y,a.normalArray[P+5]=D,a.normalArray[P+6]=E,a.normalArray[P+7]=y,a.normalArray[P+8]=D}else a.normalArray[P+0]=m[R+0],a.normalArray[P+1]=m[R+1],a.normalArray[P+2]=m[R+2],a.normalArray[P+3]=m[A+0],a.normalArray[P+4]=m[A+1],a.normalArray[P+5]=m[A+2],a.normalArray[P+6]=m[T+0],a.normalArray[P+7]=m[T+1],a.normalArray[P+8]=m[T+2];if(a.enableUvs){const E=a.count*2;a.uvArray[E+0]=p[R+0],a.uvArray[E+1]=p[R+2],a.uvArray[E+2]=p[A+0],a.uvArray[E+3]=p[A+2],a.uvArray[E+4]=p[T+0],a.uvArray[E+5]=p[T+2]}a.enableColors&&(a.colorArray[P+0]=S[R+0],a.colorArray[P+1]=S[R+1],a.colorArray[P+2]=S[R+2],a.colorArray[P+3]=S[A+0],a.colorArray[P+4]=S[A+1],a.colorArray[P+5]=S[A+2],a.colorArray[P+6]=S[T+0],a.colorArray[P+7]=S[T+1],a.colorArray[P+8]=S[T+2]),a.count+=3}this.addBall=function(p,m,S,R,A,T){const P=Math.sign(R);R=Math.abs(R);const E=T!=null;let y=new We(p,m,S);if(E)try{y=T instanceof We?T:Array.isArray(T)?new We(Math.min(Math.abs(T[0]),1),Math.min(Math.abs(T[1]),1),Math.min(Math.abs(T[2]),1)):new We(T)}catch{y=new We(p,m,S)}const D=this.size*Math.sqrt(R/A),U=S*this.size,b=m*this.size,k=p*this.size;let X=Math.floor(U-D);X<1&&(X=1);let K=Math.floor(U+D);K>this.size-1&&(K=this.size-1);let Q=Math.floor(b-D);Q<1&&(Q=1);let I=Math.floor(b+D);I>this.size-1&&(I=this.size-1);let j=Math.floor(k-D);j<1&&(j=1);let Y=Math.floor(k+D);Y>this.size-1&&(Y=this.size-1);let ne,de,ge,W,B,ee,J,ve,Te,O,ke;for(ge=X;ge<K;ge++)for(B=this.size2*ge,ve=ge/this.size-S,Te=ve*ve,de=Q;de<I;de++)for(W=B+this.size*de,J=de/this.size-m,O=J*J,ne=j;ne<Y;ne++)if(ee=ne/this.size-p,ke=R/(1e-6+ee*ee+O+Te)-A,ke>0){this.field[W+ne]+=ke*P;const me=Math.sqrt((ne-k)*(ne-k)+(de-b)*(de-b)+(ge-U)*(ge-U))/D,qe=1-me*me*me*(me*(me*6-15)+10);this.palette[(W+ne)*3+0]+=y.r*qe,this.palette[(W+ne)*3+1]+=y.g*qe,this.palette[(W+ne)*3+2]+=y.b*qe}},this.addPlaneX=function(p,m){const S=this.size,R=this.yd,A=this.zd,T=this.field;let P,E,y,D,U,b,k,X=S*Math.sqrt(p/m);for(X>S&&(X=S),P=0;P<X;P++)if(b=P/S,D=b*b,U=p/(1e-4+D)-m,U>0)for(E=0;E<S;E++)for(k=P+E*R,y=0;y<S;y++)T[A*y+k]+=U},this.addPlaneY=function(p,m){const S=this.size,R=this.yd,A=this.zd,T=this.field;let P,E,y,D,U,b,k,X,K=S*Math.sqrt(p/m);for(K>S&&(K=S),E=0;E<K;E++)if(b=E/S,D=b*b,U=p/(1e-4+D)-m,U>0)for(k=E*R,P=0;P<S;P++)for(X=k+P,y=0;y<S;y++)T[A*y+X]+=U},this.addPlaneZ=function(p,m){const S=this.size,R=this.yd,A=this.zd,T=this.field;let P,E,y,D,U,b,k,X,K=S*Math.sqrt(p/m);for(K>S&&(K=S),y=0;y<K;y++)if(b=y/S,D=b*b,U=p/(1e-4+D)-m,U>0)for(k=A*y,E=0;E<S;E++)for(X=k+E*R,P=0;P<S;P++)T[X+P]+=U},this.setCell=function(p,m,S,R){const A=this.size2*S+this.size*m+p;this.field[A]=R},this.getCell=function(p,m,S){const R=this.size2*S+this.size*m+p;return this.field[R]},this.blur=function(p=1){const m=this.field,S=m.slice(),R=this.size,A=this.size2;for(let T=0;T<R;T++)for(let P=0;P<R;P++)for(let E=0;E<R;E++){const y=A*E+R*P+T;let D=S[y],U=1;for(let b=-1;b<=1;b+=2){const k=b+T;if(!(k<0||k>=R))for(let X=-1;X<=1;X+=2){const K=X+P;if(!(K<0||K>=R))for(let Q=-1;Q<=1;Q+=2){const I=Q+E;if(I<0||I>=R)continue;const j=A*I+R*K+k,Y=S[j];U++,D+=p*(Y-D)/U}}}m[y]=D}},this.reset=function(){for(let p=0;p<this.size3;p++)this.normal_cache[p*3]=0,this.field[p]=0,this.palette[p*3]=this.palette[p*3+1]=this.palette[p*3+2]=0},this.update=function(){this.count=0;const p=this.size-2;for(let m=1;m<p;m++){const S=this.size2*m,R=(m-this.halfsize)/this.halfsize;for(let A=1;A<p;A++){const T=S+this.size*A,P=(A-this.halfsize)/this.halfsize;for(let E=1;E<p;E++){const y=(E-this.halfsize)/this.halfsize,D=T+E;v(y,P,R,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const sA=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ba=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);class oA extends rA{constructor(e,n,i){const r=new Gl({side:Yt,opacity:.3,transparent:!0});super(n,r,!0,!0,1e5),this._samplesY=e,this._samplesXZ=n,this._material=r,this.position.set(0,i[1]/2,0),this.scale.set(i[0]/2,i[1]/2,i[2]/2)}setIsoValue(e){this.isolation=e*255;const n=new We;n.setHSL(e,1,.5),this.material.color=n,this.update()}updateFromColors(e){this.reset(),new Array(this._samplesXZ).fill(0).flatMap((n,i)=>new Array(this._samplesXZ**2).fill(0).map((r,s)=>[s%this._samplesXZ,i,Math.floor(s/this._samplesXZ)])).forEach(([n,i,r])=>{const s=Math.floor(i/this._samplesXZ*this._samplesY)*this._samplesXZ**2+r*this._samplesXZ+n,o=[n,i,r].some(a=>a<=1||a>=this._samplesXZ-2);this.setCell(n,i,r,o?0:e[s*4])}),this.update()}}const aA=()=>`
varying vec3 vRayDirection;
varying vec3 vRayOrigin;

void main() {
  vec4 viewPos = inverse(projectionMatrix) * vec4(position, 1.0);
  vec4 cameraPosition = inverse(viewMatrix) * vec4(0.0, 0.0, 0.0, 1.0);
  vec4 worldPosition = inverse(viewMatrix) * vec4(viewPos.xy, -1.0, 1.0);
  vec3 rayDirection = normalize(worldPosition.xyz - cameraPosition.xyz);
  vRayDirection = rayDirection;
  vRayOrigin = cameraPosition.xyz;

  gl_Position = projectionMatrix * vec4(viewPos.xy, -1.0, 1.0);
}
`,lA=(t,e,n)=>`
#define SIGNAL_COUNT ${t}
#define AABB_COUNT ${e*2}
#define PLANE_COUNT ${n*2}

uniform vec3 volumeSize;
uniform float isoValue;
uniform vec3 color;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

${rd}

bool isRayOriginInAABB(vec3 vRayOrigin, vec3 aabbmin, vec3 aabbmax) {
  bool insideX = (vRayOrigin.x >= aabbmin.x) && (vRayOrigin.x <= aabbmax.x);
  bool insideY = (vRayOrigin.y >= aabbmin.y) && (vRayOrigin.y <= aabbmax.y);
  bool insideZ = (vRayOrigin.z >= aabbmin.z) && (vRayOrigin.z <= aabbmax.z);
  return insideX && insideY && insideZ;
}
    
void main() {
  vec3 aabbmin = vec3(-volumeSize.x / 2.0, 0.0, -volumeSize.z / 2.0);
  vec3 aabbmax = vec3(volumeSize.x / 2.0, volumeSize.y, volumeSize.z / 2.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    if (intersection.x < 0.0) {
      if (isRayOriginInAABB(vRayOrigin, aabbmin, aabbmax)) {
        intersection.x = 1e-3;
      } else {
        discard;
      }
    }

    float nearestWall = 1e6;
    for (int aabbIndex = 0; aabbIndex < aabbCount; aabbIndex++) {
      vec2 nearFar = intersectAABB(vRayOrigin, vRayDirection, aabbs[2 * aabbIndex], aabbs[2 * aabbIndex + 1]);
      bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0;
      if (noIntersections) {
        continue;
      }
      if(nearFar.x < nearestWall){
        nearestWall = nearFar.x;
      }
    }
    intersection.x = min(intersection.x,nearestWall);
    intersection.y = min(intersection.y,nearestWall);

    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    vec4 latestColor = vec4(0.0);
    for (float i = 0.0; i < 1.0; i += 1e-1) {
      vec3 point = entryPoint + entryToExit * i;
      Result result = getSignalDensity(vec4(point, 1.0), vec2(0.0));
      float value = result.density;

      vec4 color = vec4(0.0);
      if (value > 0.95) {
        color = vec4(1.0, 0.0, 0.0, 0.5);
      } else if (value > 0.5) {
        color = vec4(0.0, 1.0, 0.0, 0.5);
      } else if (value > 1e-6) {
        color = vec4(0.0, 0.0, 1.0, 0.5);
      }

      if (distance(latestColor, color) < 1e-3 || distance(color, vec4(0.0)) < 1e-3) {
        continue;
      }

      latestColor = color;

      gl_FragColor.rgb += (1.0 - gl_FragColor.a) * color.a * color.rgb;
      gl_FragColor.a += (1.0 - gl_FragColor.a) * color.a;

      if (gl_FragColor.a >= 0.95) {
        return;
      }
    }
  }
}

`,cA=()=>`
uniform sampler3D dataTexture;
uniform vec3 volumeSize;
uniform float isoValue;
uniform vec3 color;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

// adapted from intersectCube in https://github.com/evanw/webgl-path-tracing/blob/master/webgl-path-tracing.js
// compute the near and far intersections of the cube (stored in the x and y components) using the slab method
// no intersection means vec.x > vec.y (really tNear > tFar)
vec2 intersectAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
  vec3 tMin = (boxMin - rayOrigin) / rayDir;
  vec3 tMax = (boxMax - rayOrigin) / rayDir;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

void main() {
  vec3 aabbmin = vec3(-volumeSize.x / 2.0, 0.0, -volumeSize.z / 2.0);
  vec3 aabbmax = vec3(volumeSize.x / 2.0, volumeSize.y, volumeSize.z / 2.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    if (intersection.x < 0.0) {
      intersection.x = 1e-3;
    }

    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    vec4 latestColor = vec4(0.0);
    for (float i = 0.0; i < 1.0; i += 2e-2) {
      vec3 point = entryPoint + entryToExit * i;

      vec3 coord = vec3(point.x / volumeSize.x + 0.5, point.z / volumeSize.z + 0.5, point.y / volumeSize.y);
      float value = texture(dataTexture, coord).x;

      vec4 color = vec4(0.0);
      if (value > 0.95) {
        color = vec4(1.0, 0.0, 0.0, 0.5);
      } else if (value > 0.5) {
        color = vec4(0.0, 1.0, 0.0, 0.5);
      } else if (value > 0.2) {
        color = vec4(0.0, 0.0, 1.0, 0.5);
      }

      if (distance(latestColor, color) < 1e-3 || distance(color, vec4(0.0)) < 1e-3) {
        continue;
      }

      latestColor = color;

      gl_FragColor.rgb += (1.0 - gl_FragColor.a) * color.a * color.rgb;
      gl_FragColor.a += (1.0 - gl_FragColor.a) * color.a;

      if (gl_FragColor.a >= 0.95) {
        return;
      }
    }
  }
}
`;class yl extends On{static _getUniformLimitation(){return{MAX_SIGNAL_COUNT:15,MAX_AABB_COUNT:25,MAX_PLANE_COUNT:80}}constructor(e){const{MAX_SIGNAL_COUNT:n,MAX_AABB_COUNT:i,MAX_PLANE_COUNT:r}=yl._getUniformLimitation();super({transparent:!0,uniforms:{dataTexture:{value:null},volumeSize:{value:new N(1,1,1)},isoValue:{value:.8},color:{value:new We},planeCount:{value:0},aabbCount:{value:0},signalCount:{value:0},signalIntensities:{value:Array(n).fill(10)},signals:{value:Array(n).fill(new N)},aabbs:{value:Array(i*2).fill(new N)},planes:{value:Array(r*2).fill(new N)}},vertexShader:aA(),fragmentShader:e?lA(n,i,r):cA()})}setUniforms({volumeSize:e,isoValue:n,planeCount:i,aabbCount:r,signalCount:s,signals:o,signalIntensities:a,aabbs:l,planes:c}){const{MAX_SIGNAL_COUNT:u,MAX_AABB_COUNT:d,MAX_PLANE_COUNT:h}=yl._getUniformLimitation(),g=_=>_!==void 0;if(g(e)&&(this.uniforms.volumeSize.value=new N().fromArray(e)),g(n)){this.uniforms.isoValue.value=n;const _=new We;_.setHSL(n,1,.5),this.uniforms.color.value=_}g(i)&&(this.uniforms.planeCount.value=i),g(r)&&(this.uniforms.aabbCount.value=r),g(s)&&(this.uniforms.signalCount.value=s),a&&(this.uniforms.signalIntensities.value=[...a,...Array(u-a.length).fill(0)]),o&&(this.uniforms.signals.value=[...o,...Array(u-o.length).fill(new N)]),l&&(this.uniforms.aabbs.value=[...l,...Array(d*2-l.length).fill(new N)]),c&&(this.uniforms.planes.value=[...c,...Array(h*2-c.length).fill(new N)])}setDataTexture(e){this.uniforms.dataTexture.value&&this.uniforms.dataTexture.value.dispose(),this.uniforms.dataTexture.value=e}}class qp extends Xt{constructor(e,n,i,r){const s=new rn,o=new Float32Array([-1,-1,-1,1,-1,-1,-1,1,-1,1,1,-1]);s.setIndex([0,1,2,3,2,1]),s.setAttribute("position",new gt(o,3));const a=new yl(r);super(s,a),this._samplesY=e,this._samplesXZ=n,this._sampleScale=i,this.frustumCulled=!1,a.setUniforms({volumeSize:i})}setUniforms(e){this.material.setUniforms(e)}updateTexture3D(e){const n=new Array(this._samplesY).fill(0).flatMap((s,o)=>new Array(this._samplesXZ**2).fill(0).map((a,l)=>[l%this._samplesXZ,o,Math.floor(l/this._samplesXZ)])).map(([s,o,a])=>{const l=o*this._samplesXZ**2+a*this._samplesXZ+s;return e[l*4]}),i=new Uint8Array(n),r=new Eg(i,this._samplesXZ,this._samplesXZ,this._samplesY);r.format=mg,r.type=di,r.minFilter=cn,r.magFilter=cn,r.needsUpdate=!0,this.material.setDataTexture(r)}setIsoValue(e){this.material.setUniforms({isoValue:e})}}const uA=()=>`
varying vec4 world_position;

void main() {
  world_position = modelMatrix * vec4(position, 1.0);
  gl_Position = vec4(uv*2.0-1.0, 1.0, 1.0);
}
`,fA=(t,e,n)=>`
#define SIGNAL_COUNT ${t}
#define AABB_COUNT ${e*2}
#define PLANE_COUNT ${n*2}

${rd}

varying vec4 world_position;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 opacityToHSV(float opacity) {
  float minHue = 0.7;
  float maxHue = 0.0;
  float hue = mix(minHue, maxHue, opacity);
  return hsv2rgb(vec3(hue, 1.0, 1.0));
}

void main() {
  Result result = getSignalDensity(world_position, vec2(0.0));
  // gl_FragColor = vec4(result.density, result.density, result.density, 1.0);
  gl_FragColor = vec4(opacityToHSV(result.density), 1.0);
}
`;class Sl extends On{static _getUniformLimitation(){return{MAX_SIGNAL_COUNT:15,MAX_AABB_COUNT:25,MAX_PLANE_COUNT:80}}constructor(){const{MAX_SIGNAL_COUNT:e,MAX_AABB_COUNT:n,MAX_PLANE_COUNT:i}=Sl._getUniformLimitation();super({uniforms:{planeCount:{value:0},aabbCount:{value:0},signalCount:{value:0},signalIntensities:{value:Array(e).fill(10)},signals:{value:Array(e).fill(new N)},aabbs:{value:Array(n*2).fill(new N)},planes:{value:Array(i*2).fill(new N)}},vertexShader:uA(),fragmentShader:fA(e,n,i)})}setUniforms({planeCount:e,aabbCount:n,signalCount:i,signals:r,signalIntensities:s,aabbs:o,planes:a}){const{MAX_SIGNAL_COUNT:l,MAX_AABB_COUNT:c,MAX_PLANE_COUNT:u}=Sl._getUniformLimitation(),d=h=>h!==void 0;d(e)&&(this.uniforms.planeCount.value=e),d(n)&&(this.uniforms.aabbCount.value=n),d(i)&&(this.uniforms.signalCount.value=i),s&&(this.uniforms.signalIntensities.value=[...s,...Array(l-s.length).fill(0)]),r&&(this.uniforms.signals.value=[...r,...Array(l-r.length).fill(new N)]),o&&(this.uniforms.aabbs.value=[...o,...Array(c*2-o.length).fill(new N)]),a&&(this.uniforms.planes.value=[...a,...Array(u*2-a.length).fill(new N)])}}class dA{constructor(e,n,i){this._samplesXZ=n,this._texturesPerAxis=Math.ceil(Math.sqrt(e));const r=[-i[0]/2,0,-i[2]/2];this._renderMesh=this._createRenderMesh(e,i,r),this._points=this._createVisulizePoints(e,n,i,r);const s=this._texturesPerAxis*n;this._renderTarget=new $i(s,s),this.object=new os,this.object.add(this._points)}_createVisulizePoints(e,n,i,r){const s=new rn,o=((c,u,d)=>new Array(c[1]).fill(0).flatMap((h,g)=>new Array(c[2]*c[0]).fill(0).map((_,x)=>[x%c[0],g,Math.floor(x/c[0])])).map(h=>h.map((g,_)=>g/c[_])).map(h=>h.map((g,_)=>g*u[_]+d[_])))([n,e,n],i,r);s.setAttribute("position",new gt(new Float32Array(o.flat()),3));const a=new zg({vertexColors:!0});return a.size=.1,new YT(s,a)}_createRenderMesh(e,n,i){const r=new Array(e).fill(0).map((g,_)=>{const x=_/e;return[[1,x,1],[0,x,1],[1,x,0],[1,x,0],[0,x,1],[0,x,0],[1,x,1],[1,x,0],[0,x,1],[1,x,0],[0,x,0],[0,x,1]]}),s=r.flat().flatMap(g=>g.map((_,x)=>_*n[x]+i[x])),o=Math.ceil(Math.sqrt(e)),a=1/o,l=r.flatMap((g,_)=>{const x=_%o,v=Math.floor(_/o);return g.flatMap(([p,m,S])=>[p/o+x*a,S/o+v*a])}),c=new rn,u=new Sl;c.setAttribute("position",new gt(new Float32Array(s),3)),c.setAttribute("uv",new gt(new Float32Array(l),2));const d=new Xt(c,u),h=new Fg;return h.add(d),{object:h,material:u}}sample(e){e.setRenderTarget(this._renderTarget),e.render(this._renderMesh.object,new ed),e.setRenderTarget(null);const n=new Array(this._texturesPerAxis**2).fill(0).reduce((i,r,s)=>{const o=new Uint8Array(4*this._samplesXZ*this._samplesXZ),a=s%this._texturesPerAxis*this._samplesXZ,l=Math.floor(s/this._texturesPerAxis)*this._samplesXZ;return e.readRenderTargetPixels(this._renderTarget,a,l,this._samplesXZ,this._samplesXZ,o),[...i,...o]},[]);return this._points.geometry.setAttribute("color",new gt(new Float32Array(n.map(i=>i/255)),4)),n}setUniforms(e){this._renderMesh.material.setUniforms(e)}}let hA=class{constructor(){this._renderer=null,this._camera=null,this._raycaster=new QT,this._scene=new Fg;const e=20,n=3,i=4**2,r=25,s=[e,n,e];this.uniformSampler3D=new dA(i,r,s),this.isosurface=new oA(i,r,s),this.heatmapMaterial=new xl,this.roomGeometry=new iA,this.roomGeometry.setFloor(e,e);const o=new Xt(this.roomGeometry,this.heatmapMaterial);this._scene.add(o),this.volumeRendering=new qp(i,r,s),this.volumeRenderingWoTexture3d=new qp(i,r,s,!0),this._billboardGroup=new os,this._scene.add(this._billboardGroup)}_updateSamples(){if(!this._renderer)return;let e;this.uniformSampler3D._points.parent&&(e||(e=this.uniformSampler3D.sample(this._renderer))),this.isosurface.parent&&(e||(e=this.uniformSampler3D.sample(this._renderer)),this.isosurface.updateFromColors(e)),this.volumeRendering.parent&&(e||(e=this.uniformSampler3D.sample(this._renderer)),this.volumeRendering.updateTexture3D(e))}_updateConfig(e){this.heatmapMaterial.setUniforms(e),this.uniformSampler3D.setUniforms(e),this.volumeRenderingWoTexture3d.setUniforms(e),this._updateSamples()}getWorldPositionFromScreen(e){this._raycaster.setFromCamera(new Ce().fromArray([e[0]*2-1,-e[1]*2+1]),this._camera);const n=this._raycaster.intersectObjects(this._scene.children,!0);if(n.length>0){const i=n[0];return new N().addVectors(i.point,i.face.normal.multiplyScalar(.1)).toArray()}return null}setSignal(e){e&&(e.forEach(n=>{const i=new nd(.1,16,16),r=new Gl({color:0,wireframe:!0});new Xt(i,r).position.fromArray(n)}),this._updateConfig({signalCount:e.length,signals:e.map(n=>new N().fromArray(n))}))}setAABB(e){e&&(this.roomGeometry.setAABB(e),this._updateConfig({aabbCount:e.length,aabbs:e.flatMap(([n,i])=>[new N().fromArray(n),new N().fromArray(i)])}))}setPlane(e){e&&(this.roomGeometry.setPlane(e),this._updateConfig({planeCount:e.length*2,planes:e.flatMap(([n,i])=>[new N().fromArray(n),new N().fromArray(i)])}))}setIsPointcloud(e){var n;e?(this._scene.add(this.uniformSampler3D._points),this._updateSamples()):(n=this.uniformSampler3D._points.parent)==null||n.remove(this.uniformSampler3D._points)}setIsRealTimeVolumeRendering(e){var n;e?this._scene.add(this.volumeRenderingWoTexture3d):(n=this.volumeRenderingWoTexture3d.parent)==null||n.remove(this.volumeRenderingWoTexture3d)}setIsVolumeRendering(e){var n;e?(this._scene.add(this.volumeRendering),this._updateSamples()):(n=this.volumeRendering.parent)==null||n.remove(this.volumeRendering)}setIsIsosurface(e){var n;e?(this._scene.add(this.isosurface),this._updateSamples()):(n=this.isosurface.parent)==null||n.remove(this.isosurface)}setIsoValue(e){this.isosurface.setIsoValue(e),this.volumeRendering.setIsoValue(e),this.volumeRenderingWoTexture3d.setIsoValue(e)}setIsHeatmapColor(e){this._updateConfig({isHeatmapColor:e})}setIsSignalIndex(e){this._updateConfig({isSignalIndex:e})}setSignalIntensities(e){this._updateConfig({signalIntensities:e})}setSignalChannels(e){this._updateConfig({signalChannels:e})}setTexture(e,n,i){if(e){const r=new ZT().load(e);this._updateConfig({map:r})}n&&i&&this._updateConfig({mapScale:new Ce().fromArray(n),mapOffset:new Ce().fromArray(i)})}setBillboard(e){this._billboardGroup.clear(),e.forEach(n=>{const i=new Xt;i.frustumCulled=!1,i.position.fromArray(n.position),i.onBeforeRender=(r,s,o)=>{const a=i.position.clone().project(o);a.z>1?n.onViewportChange(-1,-1):n.onViewportChange(a.x/2+.5,-a.y/2+.5)},this._billboardGroup.add(i)})}init(e){const n=new jT({canvas:e,alpha:!0}),i=new yn(75,window.innerWidth/window.innerHeight,.001,1e3),r=new eA(i,n.domElement);i.position.set(-10,20,-10),r.update();let s=0;const o=()=>{s=requestAnimationFrame(o),r.update(),n.render(this._scene,i)},a=()=>{cancelAnimationFrame(s)},l=(c,u)=>{e.width=c,e.height=u,n.setSize(c,u),i.aspect=c/u,i.updateProjectionMatrix()};return o(),this._camera=i,this._renderer=n,this._updateSamples(),{resizeCanvas:l,dispose:a}}};const pA=({texture:t,textCoordScale:e,textCoordSoffset:n,isPointcloud:i,isIsosurface:r,isVolumeRendering:s,isRealTimeVolumeRendering:o,isoValue:a,isHeatmapColor:l,isSignalIndex:c,signalIntensities:u,signalChannels:d,signals:h,aabbs:g,planes:_,labels:x,children:v},f)=>{const p=Re.useRef(new hA),m=Re.useRef(null),S=Re.useRef(null);return Re.useEffect(()=>{p.current.setTexture(void 0,e,n)},[e,n]),Re.useEffect(()=>{p.current.setTexture(t)},[t]),Re.useEffect(()=>{p.current.setIsPointcloud(i)},[i]),Re.useEffect(()=>{p.current.setIsIsosurface(r)},[r]),Re.useEffect(()=>{p.current.setIsVolumeRendering(s)},[s]),Re.useEffect(()=>{p.current.setIsRealTimeVolumeRendering(o)},[o]),Re.useEffect(()=>{p.current.setIsoValue(a)},[a]),Re.useEffect(()=>{p.current.setIsHeatmapColor(l)},[l]),Re.useEffect(()=>{p.current.setIsSignalIndex(c)},[c]),Re.useEffect(()=>{p.current.setSignalIntensities(u)},[u]),Re.useEffect(()=>{p.current.setSignalChannels(d)},[d]),Re.useEffect(()=>{p.current.setSignal(h)},[h]),Re.useEffect(()=>{p.current.setAABB(g)},[g]),Re.useEffect(()=>{p.current.setPlane(_)},[_]),Re.useEffect(()=>{const R=S.current,{resizeCanvas:A,dispose:T}=p.current.init(R),P=()=>{const E=m.current.clientWidth,y=m.current.clientHeight;A(E,y)};return P(),window.addEventListener("resize",P),f&&(f.current=p.current),()=>{window.removeEventListener("resize",P),T()}},[]),Re.useEffect(()=>{p.current.setBillboard(x.map(R=>({position:R.position,onViewportChange:R.onViewportChange})))},[h]),xe.jsxs("div",{ref:m,style:{width:"100%",height:"100%",overflow:"hidden",position:"relative"},children:[xe.jsx("canvas",{ref:S}),v]})},mA=Re.forwardRef(pA),gA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2056%2056'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M%2027.9999%2051.9063%20C%2041.0546%2051.9063%2051.9063%2041.0781%2051.9063%2028%20C%2051.9063%2014.9453%2041.0312%204.0937%2027.9765%204.0937%20C%2014.8983%204.0937%204.0937%2014.9453%204.0937%2028%20C%204.0937%2041.0781%2014.9218%2051.9063%2027.9999%2051.9063%20Z%20M%2021.2499%2041.0781%20C%2018.6718%2041.0781%2017.3593%2039.7656%2017.3593%2037.1172%20L%2017.3593%2017.9922%20C%2017.3593%2015.3672%2018.6718%2014.0312%2021.2499%2014.0312%20L%2026.8983%2014.0312%20L%2026.8983%2023.4766%20C%2026.8983%2025.0937%2027.6718%2025.8437%2029.2890%2025.8437%20L%2038.5702%2025.8437%20L%2038.5702%2037.1172%20C%2038.5702%2039.7422%2037.2812%2041.0781%2034.6796%2041.0781%20Z%20M%2029.4765%2023.9453%20C%2029.0312%2023.9453%2028.7968%2023.7109%2028.7968%2023.2656%20L%2028.7968%2014.1719%20C%2029.3124%2014.2422%2029.8514%2014.6172%2030.4374%2015.2266%20L%2037.3749%2022.3047%20C%2037.9843%2022.9141%2038.3593%2023.4297%2038.4296%2023.9453%20Z'/%3e%3c/svg%3e",vA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3egithub%3c/title%3e%3crect%20width='24'%20height='24'%20fill='none'/%3e%3cpath%20d='M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z'/%3e%3c/svg%3e",_A="/coverage-visualizer/assets/floorplan-DauAK5Vw.png",xA=({power:t,channel:e,onPowerChanged:n,onChannelChange:i,isMoving:r,setIsMoving:s,onDelete:o,id:a})=>xe.jsxs("div",{onPointerMove:l=>l.stopPropagation(),onPointerDown:l=>l.stopPropagation(),style:{gap:"10px",display:"grid",gridTemplateColumns:"auto auto",padding:"10px",border:"1px solid gray",borderRadius:"10px",background:"rgba(255, 255, 255, 0.8)"},children:[xe.jsx("span",{children:`Id- ${a}`}),xe.jsx("button",{onClick:o,children:"Delete"}),xe.jsx("label",{htmlFor:"power",children:`Power: ${t.toFixed(0).padStart(2,0)}`}),xe.jsx(Ml,{id:"power",min:.001,max:24,step:.1,onChange:n,value:t}),xe.jsx("label",{htmlFor:"channel",children:`Channel: ${e.toFixed(0).padStart(2,0)}`}),xe.jsx(Ml,{id:"channel",min:1,max:14,step:1,onChange:i,value:e}),xe.jsx("span",{children:"Position"}),xe.jsx("button",{onClick:()=>s(l=>!l),children:r?"OK":"Edit"})]}),Ml=t=>xe.jsx("input",{style:{width:"70px"},type:"range",...t}),yA=[[[1.02,0,-10],[1.45,3,1.2]],[[-4.6,0,.73],[1.02,3,1.2]],[[-9.55,0,.73],[-7.1,3,1.2]],[[3.85,0,-10],[4.25,3,-4]],[[3.85,0,-.6],[4.25,3,.55]],[[4.25,0,.12],[8.34,3,.55]],[[-9.65,0,8.2],[-6.8,3,8.7]],[[-3.75,0,8.2],[2.5,3,8.7]],[[5.55,0,8.2],[8.34,3,8.7]],[[1.02,3,-10],[-9.65,0,-9.55]],[[8.34,3,-10],[4.25,0,-9.55]],[[-10,3,8.7],[-9.55,0,-10]],[[8.34,0,-10],[8.75,3,8.7]]],SA=[[[-5.1,0,2.2],[-3.1,.3,7.35]],[[-3.1,0,2.2],[-2.5,1,7.35]],[[1.45,.8,2.5],[4,1,5.2]],[[-2.1,1,-9.55],[-8.4,0,-3.5]],[[1.02,1,-9.55],[-.75,0,-2.9]]],MA=t=>{const n=-Math.PI/2+.1;return[[[-7.1+2.5*Math.cos(0*t+n*(1-t)),0,.73+2.5*Math.sin(0*t+n*(1-t))],[-7.1,3,.73]],[[4.05,0,-.6],[4.05,3,-.6+-1.7*t+0*(1-t)]],[[-6.8,0,8.5],[-3.75,3,8.5]],[[2.5,0,8.5],[5.55,3,8.5]]]},EA=()=>{const t=Re.useRef(null),[e,n]=Re.useState(0),[i,r]=Re.useState(!1),[s,o]=Re.useState(!1),[a,l]=Re.useState(!1),[c,u]=Re.useState([]),[d,h]=Re.useState(!1),[g,_]=Re.useState(!1),[x,v]=Re.useState(!1),[f,p]=Re.useState(!1),[m,S]=Re.useState(!0),[R,A]=Re.useState(!0),[T,P]=Re.useState(.5),[E,y]=Re.useState(.5),[D,U]=Re.useState([10,10]),[b,k]=Re.useState([1,6]),[X,K]=Re.useState([[0,1.1,-4],[0,2,8.1]]),[Q,I]=Re.useState([]),[j,Y]=Re.useState([]);Re.useEffect(()=>{let B=[];m&&(B=[...B,...SA]),R&&(B=[...B,...yA]),I(B)},[m,R]),Re.useEffect(()=>{Y(MA(T))},[T]);const ne=B=>ee=>{const J=parseFloat(ee.target.value),ve=[...D];ve[B]=J,U(ve)},de=B=>ee=>{const J=parseInt(ee.target.value),ve=[...b];ve[B]=J,k(ve)},ge=X.map((B,ee)=>({position:B,onViewportChange:(J,ve)=>u(Te=>{const O=[...Te];return O[ee]=[J,ve],O})})),W=B=>{const ee=B.target.getBoundingClientRect(),J=(event.clientX-ee.left)/ee.width,ve=(event.clientY-ee.top)/ee.height,Te=t.current.getWorldPositionFromScreen([J,ve]);Te&&K(O=>{const ke=[...O];return ke[e]=Te,ke})};return xe.jsxs("div",{style:{width:"100%",height:"100%"},onPointerDown:B=>{i&&B.target instanceof HTMLCanvasElement&&(W(B),r(!1))},onPointerMove:B=>{i&&B.target instanceof HTMLCanvasElement&&W(B)},children:[xe.jsx(mA,{ref:t,texture:_A,textCoordScale:[1/20,1/20],textCoordSoffset:[.5,.5],isPointcloud:s,isIsosurface:a,isVolumeRendering:d,isRealTimeVolumeRendering:g,isoValue:E,isHeatmapColor:x,isSignalIndex:f,signalIntensities:D,signalChannels:b.map(B=>B/14),signals:X,aabbs:Q,planes:j,labels:ge,children:c.map((B,ee)=>xe.jsx("div",{onPointerMove:J=>J.stopPropagation(),onPointerDown:()=>n(e===ee?null:ee),style:{userSelect:"none",pointerEvents:e===ee&&i?"none":"auto",position:"absolute",left:`${B[0]*100}%`,top:`${B[1]*100}%`,border:`1px solid ${e===ee?"red":"gray"}`,transform:"translate(-50%, -50%)",background:e===ee&&i?"rgba(255, 0, 0, 0.4)":"rgba(255, 255, 255, 0.8)",width:"30px",height:"30px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:xe.jsx("span",{children:ee})},ee))}),xe.jsxs("div",{onPointerMove:B=>B.stopPropagation(),onPointerDown:B=>B.stopPropagation(),style:{position:"fixed",right:"0",top:"0",gap:"10px",padding:"10px",margin:"10px",display:"flex",flexDirection:"column"},children:[xe.jsx("button",{onClick:()=>{U(B=>[...B,10]),k(B=>[...B,6]),K(B=>[...B,[0,0,0]]),n(X.length),r(!0)},children:"Add New Signal"}),Number.isInteger(e)&&xe.jsx(xA,{id:e,onDelete:()=>{const B=ee=>ee.filter((J,ve)=>ve!==e);U(B),k(B),K(B),u([]),r(!1),n(null)},power:D[e],channel:b[e],onPowerChanged:ne(e),onChannelChange:de(e),isMoving:i,setIsMoving:r})]}),xe.jsxs("div",{style:{position:"fixed",left:"0",top:"50px",display:"flex",flexDirection:"column",gap:"10px",padding:"10px"},children:[xe.jsx("a",{href:"https://github.com/yushiang-demo/coverage-visualizer",children:xe.jsx("img",{width:"40px",src:vA})}),xe.jsx("a",{href:"./doc/",children:xe.jsx("img",{width:"40px",src:gA})})]}),xe.jsxs("div",{style:{position:"fixed",bottom:"0",padding:"20px",margin:"10px",border:"1px solid gray",borderRadius:"10px",background:"rgba(255, 255, 255, 0.8)",display:"grid",gridTemplateColumns:"auto auto",gap:"20px"},children:[xe.jsxs("div",{children:[xe.jsx("h4",{children:"Visualization"}),xe.jsx("input",{type:"checkbox",id:"heatmapColor",onChange:B=>v(B.target.checked),checked:x}),xe.jsx("label",{htmlFor:"heatmapColor",children:"Heatmap"}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"signalIndex",onChange:B=>p(B.target.checked),checked:f}),xe.jsx("label",{htmlFor:"signalIndex",children:"Index map"}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"pointcloud",onChange:B=>o(B.target.checked),checked:s}),xe.jsx("label",{htmlFor:"pointcloud",children:"Pointcloud"}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"isosurface",onChange:B=>l(B.target.checked),checked:a}),xe.jsx("label",{htmlFor:"isosurface",children:"Isosurface"}),xe.jsx(Ml,{id:"isoValue",min:.2,max:1,step:.01,onChange:B=>y(B.target.value),value:E}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"VolumeRendering",onChange:B=>h(B.target.checked),checked:d}),xe.jsx("label",{htmlFor:"VolumeRendering",children:"Volume Rendering"}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"RealTimeVolumeRendering",onChange:B=>_(B.target.checked),checked:g}),xe.jsx("label",{htmlFor:"RealTimeVolumeRendering",children:"Real-Time Volume Rendering"})]}),xe.jsxs("div",{children:[xe.jsx("h4",{children:"Layout"}),xe.jsx("input",{type:"checkbox",id:"wall",onChange:B=>A(B.target.checked),checked:R}),xe.jsx("label",{htmlFor:"wall",children:"has wall"}),xe.jsx("br",{}),xe.jsx("input",{type:"checkbox",id:"furniture",onChange:B=>S(B.target.checked),checked:m}),xe.jsx("label",{htmlFor:"furniture",children:"has furniture"}),xe.jsx("br",{}),xe.jsx("label",{htmlFor:"door",children:"Door"}),xe.jsx(Ml,{id:"door",min:.001,max:1,step:.01,onChange:B=>P(B.target.value),value:T})]})]})]})};Jc.createRoot(document.getElementById("root")).render(xe.jsx(s1.StrictMode,{children:xe.jsx(EA,{})}));
