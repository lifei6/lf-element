import{d as x,c as k,w as h2,h as j8,o as v,a as H,b as S,n as G8,g as X8,u,m as F2,e as K4,r as D,i as z1,f as _,j as M,k as d,l as w2,p as y,q as F,s as c1,t as S3,v as yi,x as f4,y as M0,z as wi,A as z,B as n2,C as O,D as Y8,E as K8,F as Q8,T as V1,G as Z8,_ as T,H as Ni,I as Si,J as ki,K as Q4,L as M1,M as q2,N as J,O as c2,P as a1,Q as b4,R as k3,S as Z4,U as J8,V as Ai,W as _i,X as l2,Y as W,Z as a2,$ as c5,a0 as A3,a1 as a5,a2 as _3,a3 as Pi,a4 as Ti,a5 as x4,a6 as e5,a7 as r5,a8 as $i,a9 as Bi,aa as Fi,ab as s5,ac as n5,ad as Di,ae as i5}from"./framework.DRSb6gpS.js";var t5=typeof global=="object"&&global&&global.Object===Object&&global,Ri=typeof self=="object"&&self&&self.Object===Object&&self,p2=t5||Ri||Function("return this")(),g2=p2.Symbol,o5=Object.prototype,Ei=o5.hasOwnProperty,Oi=o5.toString,b1=g2?g2.toStringTag:void 0;function Ii(c){var a=Ei.call(c,b1),e=c[b1];try{c[b1]=void 0;var r=!0}catch{}var s=Oi.call(c);return r&&(a?c[b1]=e:delete c[b1]),s}var Ui=Object.prototype,Wi=Ui.toString;function qi(c){return Wi.call(c)}var ji="[object Null]",Gi="[object Undefined]",C0=g2?g2.toStringTag:void 0;function n1(c){return c==null?c===void 0?Gi:ji:C0&&C0 in Object(c)?Ii(c):qi(c)}function i1(c){return c!=null&&typeof c=="object"}var Xi="[object Symbol]";function P3(c){return typeof c=="symbol"||i1(c)&&n1(c)==Xi}function l5(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var j2=Array.isArray,Yi=1/0,g0=g2?g2.prototype:void 0,L0=g0?g0.toString:void 0;function f5(c){if(typeof c=="string")return c;if(j2(c))return l5(c,f5)+"";if(P3(c))return L0?L0.call(c):"";var a=c+"";return a=="0"&&1/c==-Yi?"-0":a}var Ki=/\s/;function Qi(c){for(var a=c.length;a--&&Ki.test(c.charAt(a)););return a}var Zi=/^\s+/;function Ji(c){return c&&c.slice(0,Qi(c)+1).replace(Zi,"")}function E2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var b0=NaN,ct=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,et=/^0o[0-7]+$/i,rt=parseInt;function x0(c){if(typeof c=="number")return c;if(P3(c))return b0;if(E2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=E2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=Ji(c);var e=at.test(c);return e||et.test(c)?rt(c.slice(2),e?2:8):ct.test(c)?b0:+c}function m5(c){return c}var st="[object AsyncFunction]",nt="[object Function]",it="[object GeneratorFunction]",tt="[object Proxy]";function v5(c){if(!E2(c))return!1;var a=n1(c);return a==nt||a==it||a==st||a==tt}var m4=p2["__core-js_shared__"],y0=function(){var c=/[^.]+$/.exec(m4&&m4.keys&&m4.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function ot(c){return!!y0&&y0 in c}var lt=Function.prototype,ft=lt.toString;function t1(c){if(c!=null){try{return ft.call(c)}catch{}try{return c+""}catch{}}return""}var mt=/[\\^$.*+?()[\]{}|]/g,vt=/^\[object .+?Constructor\]$/,ut=Function.prototype,ht=Object.prototype,pt=ut.toString,dt=ht.hasOwnProperty,Ht=RegExp("^"+pt.call(dt).replace(mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zt(c){if(!E2(c)||ot(c))return!1;var a=v5(c)?Ht:vt;return a.test(t1(c))}function Vt(c,a){return c==null?void 0:c[a]}function o1(c,a){var e=Vt(c,a);return zt(e)?e:void 0}var y4=o1(p2,"WeakMap");function Mt(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var Ct=800,gt=16,Lt=Date.now;function bt(c){var a=0,e=0;return function(){var r=Lt(),s=gt-(r-e);if(e=r,s>0){if(++a>=Ct)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}function xt(c){return function(){return c}}var z3=function(){try{var c=o1(Object,"defineProperty");return c({},"",{}),c}catch{}}(),yt=z3?function(c,a){return z3(c,"toString",{configurable:!0,enumerable:!1,value:xt(a),writable:!0})}:m5,wt=bt(yt);function u5(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}var Nt=9007199254740991,St=/^(?:0|[1-9]\d*)$/;function kt(c,a){var e=typeof c;return a=a??Nt,!!a&&(e=="number"||e!="symbol"&&St.test(c))&&c>-1&&c%1==0&&c<a}function h5(c,a,e){a=="__proto__"&&z3?z3(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function p5(c,a){return c===a||c!==c&&a!==a}var At=Object.prototype,_t=At.hasOwnProperty;function d5(c,a,e){var r=c[a];(!(_t.call(c,a)&&p5(r,e))||e===void 0&&!(a in c))&&h5(c,a,e)}function Pt(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var t=a[n],o=void 0;o===void 0&&(o=c[t]),s?h5(e,t,o):d5(e,t,o)}return e}var w0=Math.max;function Tt(c,a,e){return a=w0(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=w0(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=r[s];return t[a]=e(i),Mt(c,this,t)}}var $t=9007199254740991;function H5(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=$t}function J4(c){return c!=null&&H5(c.length)&&!v5(c)}var Bt=Object.prototype;function z5(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||Bt;return c===e}function Ft(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var Dt="[object Arguments]";function N0(c){return i1(c)&&n1(c)==Dt}var V5=Object.prototype,Rt=V5.hasOwnProperty,Et=V5.propertyIsEnumerable,M5=N0(function(){return arguments}())?N0:function(c){return i1(c)&&Rt.call(c,"callee")&&!Et.call(c,"callee")};function Ot(){return!1}var C5=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S0=C5&&typeof module=="object"&&module&&!module.nodeType&&module,It=S0&&S0.exports===C5,k0=It?p2.Buffer:void 0,Ut=k0?k0.isBuffer:void 0,g5=Ut||Ot,Wt="[object Arguments]",qt="[object Array]",jt="[object Boolean]",Gt="[object Date]",Xt="[object Error]",Yt="[object Function]",Kt="[object Map]",Qt="[object Number]",Zt="[object Object]",Jt="[object RegExp]",co="[object Set]",ao="[object String]",eo="[object WeakMap]",ro="[object ArrayBuffer]",so="[object DataView]",no="[object Float32Array]",io="[object Float64Array]",to="[object Int8Array]",oo="[object Int16Array]",lo="[object Int32Array]",fo="[object Uint8Array]",mo="[object Uint8ClampedArray]",vo="[object Uint16Array]",uo="[object Uint32Array]",q={};q[no]=q[io]=q[to]=q[oo]=q[lo]=q[fo]=q[mo]=q[vo]=q[uo]=!0;q[Wt]=q[qt]=q[ro]=q[jt]=q[so]=q[Gt]=q[Xt]=q[Yt]=q[Kt]=q[Qt]=q[Zt]=q[Jt]=q[co]=q[ao]=q[eo]=!1;function ho(c){return i1(c)&&H5(c.length)&&!!q[n1(c)]}function c6(c){return function(a){return c(a)}}var L5=typeof exports=="object"&&exports&&!exports.nodeType&&exports,y1=L5&&typeof module=="object"&&module&&!module.nodeType&&module,po=y1&&y1.exports===L5,v4=po&&t5.process,h1=function(){try{var c=y1&&y1.require&&y1.require("util").types;return c||v4&&v4.binding&&v4.binding("util")}catch{}}(),A0=h1&&h1.isTypedArray,Ho=A0?c6(A0):ho,zo=Object.prototype,Vo=zo.hasOwnProperty;function b5(c,a){var e=j2(c),r=!e&&M5(c),s=!e&&!r&&g5(c),n=!e&&!r&&!s&&Ho(c),i=e||r||s||n,t=i?Ft(c.length,String):[],o=t.length;for(var l in c)(a||Vo.call(c,l))&&!(i&&(l=="length"||s&&(l=="offset"||l=="parent")||n&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||kt(l,o)))&&t.push(l);return t}function x5(c,a){return function(e){return c(a(e))}}var Mo=x5(Object.keys,Object),Co=Object.prototype,go=Co.hasOwnProperty;function Lo(c){if(!z5(c))return Mo(c);var a=[];for(var e in Object(c))go.call(c,e)&&e!="constructor"&&a.push(e);return a}function bo(c){return J4(c)?b5(c):Lo(c)}function xo(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var yo=Object.prototype,wo=yo.hasOwnProperty;function No(c){if(!E2(c))return xo(c);var a=z5(c),e=[];for(var r in c)r=="constructor"&&(a||!wo.call(c,r))||e.push(r);return e}function So(c){return J4(c)?b5(c,!0):No(c)}var ko=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ao=/^\w*$/;function _o(c,a){if(j2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||P3(c)?!0:Ao.test(c)||!ko.test(c)||a!=null&&c in Object(a)}var P1=o1(Object,"create");function Po(){this.__data__=P1?P1(null):{},this.size=0}function To(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var $o="__lodash_hash_undefined__",Bo=Object.prototype,Fo=Bo.hasOwnProperty;function Do(c){var a=this.__data__;if(P1){var e=a[c];return e===$o?void 0:e}return Fo.call(a,c)?a[c]:void 0}var Ro=Object.prototype,Eo=Ro.hasOwnProperty;function Oo(c){var a=this.__data__;return P1?a[c]!==void 0:Eo.call(a,c)}var Io="__lodash_hash_undefined__";function Uo(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=P1&&a===void 0?Io:a,this}function e1(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}e1.prototype.clear=Po;e1.prototype.delete=To;e1.prototype.get=Do;e1.prototype.has=Oo;e1.prototype.set=Uo;function Wo(){this.__data__=[],this.size=0}function T3(c,a){for(var e=c.length;e--;)if(p5(c[e][0],a))return e;return-1}var qo=Array.prototype,jo=qo.splice;function Go(c){var a=this.__data__,e=T3(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():jo.call(a,e,1),--this.size,!0}function Xo(c){var a=this.__data__,e=T3(a,c);return e<0?void 0:a[e][1]}function Yo(c){return T3(this.__data__,c)>-1}function Ko(c,a){var e=this.__data__,r=T3(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function A2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}A2.prototype.clear=Wo;A2.prototype.delete=Go;A2.prototype.get=Xo;A2.prototype.has=Yo;A2.prototype.set=Ko;var T1=o1(p2,"Map");function Qo(){this.size=0,this.__data__={hash:new e1,map:new(T1||A2),string:new e1}}function Zo(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function $3(c,a){var e=c.__data__;return Zo(a)?e[typeof a=="string"?"string":"hash"]:e.map}function Jo(c){var a=$3(this,c).delete(c);return this.size-=a?1:0,a}function cl(c){return $3(this,c).get(c)}function al(c){return $3(this,c).has(c)}function el(c,a){var e=$3(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function G2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}G2.prototype.clear=Qo;G2.prototype.delete=Jo;G2.prototype.get=cl;G2.prototype.has=al;G2.prototype.set=el;var rl="Expected a function";function a6(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(rl);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(a6.Cache||G2),e}a6.Cache=G2;var sl=500;function nl(c){var a=a6(c,function(r){return e.size===sl&&e.clear(),r}),e=a.cache;return a}var il=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/\\(\\)?/g,ol=nl(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(il,function(e,r,s,n){a.push(s?n.replace(tl,"$1"):r||e)}),a});function ll(c){return c==null?"":f5(c)}function e6(c,a){return j2(c)?c:_o(c,a)?[c]:ol(ll(c))}var fl=1/0;function y5(c){if(typeof c=="string"||P3(c))return c;var a=c+"";return a=="0"&&1/c==-fl?"-0":a}function ml(c,a){a=e6(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[y5(a[e++])];return e&&e==r?c:void 0}function r6(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var _0=g2?g2.isConcatSpreadable:void 0;function vl(c){return j2(c)||M5(c)||!!(_0&&c&&c[_0])}function ul(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=vl),s||(s=[]);++n<i;){var t=c[n];e(t)?r6(s,t):s[s.length]=t}return s}function hl(c){var a=c==null?0:c.length;return a?ul(c):[]}function pl(c){return wt(Tt(c,void 0,hl),c+"")}var w5=x5(Object.getPrototypeOf,Object),dl="[object Object]",Hl=Function.prototype,zl=Object.prototype,N5=Hl.toString,Vl=zl.hasOwnProperty,Ml=N5.call(Object);function Cl(c){if(!i1(c)||n1(c)!=dl)return!1;var a=w5(c);if(a===null)return!0;var e=Vl.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&N5.call(e)==Ml}function gl(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function Ll(){this.__data__=new A2,this.size=0}function bl(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function xl(c){return this.__data__.get(c)}function yl(c){return this.__data__.has(c)}var wl=200;function Nl(c,a){var e=this.__data__;if(e instanceof A2){var r=e.__data__;if(!T1||r.length<wl-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new G2(r)}return e.set(c,a),this.size=e.size,this}function C1(c){var a=this.__data__=new A2(c);this.size=a.size}C1.prototype.clear=Ll;C1.prototype.delete=bl;C1.prototype.get=xl;C1.prototype.has=yl;C1.prototype.set=Nl;var S5=typeof exports=="object"&&exports&&!exports.nodeType&&exports,P0=S5&&typeof module=="object"&&module&&!module.nodeType&&module,Sl=P0&&P0.exports===S5,T0=Sl?p2.Buffer:void 0;T0&&T0.allocUnsafe;function kl(c,a){return c.slice()}function Al(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function k5(){return[]}var _l=Object.prototype,Pl=_l.propertyIsEnumerable,$0=Object.getOwnPropertySymbols,Tl=$0?function(c){return c==null?[]:(c=Object(c),Al($0(c),function(a){return Pl.call(c,a)}))}:k5,$l=Object.getOwnPropertySymbols,Bl=$l?function(c){for(var a=[];c;)r6(a,Tl(c)),c=w5(c);return a}:k5;function Fl(c,a,e){var r=a(c);return j2(c)?r:r6(r,e(c))}function A5(c){return Fl(c,So,Bl)}var w4=o1(p2,"DataView"),N4=o1(p2,"Promise"),S4=o1(p2,"Set"),B0="[object Map]",Dl="[object Object]",F0="[object Promise]",D0="[object Set]",R0="[object WeakMap]",E0="[object DataView]",Rl=t1(w4),El=t1(T1),Ol=t1(N4),Il=t1(S4),Ul=t1(y4),x2=n1;(w4&&x2(new w4(new ArrayBuffer(1)))!=E0||T1&&x2(new T1)!=B0||N4&&x2(N4.resolve())!=F0||S4&&x2(new S4)!=D0||y4&&x2(new y4)!=R0)&&(x2=function(c){var a=n1(c),e=a==Dl?c.constructor:void 0,r=e?t1(e):"";if(r)switch(r){case Rl:return E0;case El:return B0;case Ol:return F0;case Il:return D0;case Ul:return R0}return a});var Wl=Object.prototype,ql=Wl.hasOwnProperty;function jl(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&ql.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var O0=p2.Uint8Array;function s6(c){var a=new c.constructor(c.byteLength);return new O0(a).set(new O0(c)),a}function Gl(c,a){var e=s6(c.buffer);return new c.constructor(e,c.byteOffset,c.byteLength)}var Xl=/\w*$/;function Yl(c){var a=new c.constructor(c.source,Xl.exec(c));return a.lastIndex=c.lastIndex,a}var I0=g2?g2.prototype:void 0,U0=I0?I0.valueOf:void 0;function Kl(c){return U0?Object(U0.call(c)):{}}function Ql(c,a){var e=s6(c.buffer);return new c.constructor(e,c.byteOffset,c.length)}var Zl="[object Boolean]",Jl="[object Date]",cf="[object Map]",af="[object Number]",ef="[object RegExp]",rf="[object Set]",sf="[object String]",nf="[object Symbol]",tf="[object ArrayBuffer]",of="[object DataView]",lf="[object Float32Array]",ff="[object Float64Array]",mf="[object Int8Array]",vf="[object Int16Array]",uf="[object Int32Array]",hf="[object Uint8Array]",pf="[object Uint8ClampedArray]",df="[object Uint16Array]",Hf="[object Uint32Array]";function zf(c,a,e){var r=c.constructor;switch(a){case tf:return s6(c);case Zl:case Jl:return new r(+c);case of:return Gl(c);case lf:case ff:case mf:case vf:case uf:case hf:case pf:case df:case Hf:return Ql(c);case cf:return new r;case af:case sf:return new r(c);case ef:return Yl(c);case rf:return new r;case nf:return Kl(c)}}var Vf="[object Map]";function Mf(c){return i1(c)&&x2(c)==Vf}var W0=h1&&h1.isMap,Cf=W0?c6(W0):Mf,gf="[object Set]";function Lf(c){return i1(c)&&x2(c)==gf}var q0=h1&&h1.isSet,bf=q0?c6(q0):Lf,_5="[object Arguments]",xf="[object Array]",yf="[object Boolean]",wf="[object Date]",Nf="[object Error]",P5="[object Function]",Sf="[object GeneratorFunction]",kf="[object Map]",Af="[object Number]",T5="[object Object]",_f="[object RegExp]",Pf="[object Set]",Tf="[object String]",$f="[object Symbol]",Bf="[object WeakMap]",Ff="[object ArrayBuffer]",Df="[object DataView]",Rf="[object Float32Array]",Ef="[object Float64Array]",Of="[object Int8Array]",If="[object Int16Array]",Uf="[object Int32Array]",Wf="[object Uint8Array]",qf="[object Uint8ClampedArray]",jf="[object Uint16Array]",Gf="[object Uint32Array]",U={};U[_5]=U[xf]=U[Ff]=U[Df]=U[yf]=U[wf]=U[Rf]=U[Ef]=U[Of]=U[If]=U[Uf]=U[kf]=U[Af]=U[T5]=U[_f]=U[Pf]=U[Tf]=U[$f]=U[Wf]=U[qf]=U[jf]=U[Gf]=!0;U[Nf]=U[P5]=U[Bf]=!1;function u3(c,a,e,r,s,n){var i;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!E2(c))return c;var t=j2(c);if(t)i=jl(c);else{var o=x2(c),l=o==P5||o==Sf;if(g5(c))return kl(c);if(o==T5||o==_5||l&&!s)i={};else{if(!U[o])return s?c:{};i=zf(c,o)}}n||(n=new C1);var m=n.get(c);if(m)return m;n.set(c,i),bf(c)?c.forEach(function(p){i.add(u3(p,a,e,p,c,n))}):Cf(c)&&c.forEach(function(p,V){i.set(V,u3(p,a,e,V,c,n))});var f=A5,h=t?void 0:f(c);return u5(h||c,function(p,V){h&&(V=p,p=c[V]),d5(i,V,u3(p,a,e,V,c,n))}),i}function Xf(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),t=i.length;t--;){var o=i[++s];if(e(n[o],o,n)===!1)break}return a}}var Yf=Xf();function Kf(c,a){return c&&Yf(c,a,bo)}function Qf(c,a){return function(e,r){if(e==null)return e;if(!J4(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var Zf=Qf(Kf),u4=function(){return p2.Date.now()},Jf="Expected a function",cm=Math.max,am=Math.min;function em(c,a,e){var r,s,n,i,t,o,l=0,m=!1,f=!1,h=!0;if(typeof c!="function")throw new TypeError(Jf);a=x0(a)||0,E2(e)&&(m=!!e.leading,f="maxWait"in e,n=f?cm(x0(e.maxWait)||0,a):n,h="trailing"in e?!!e.trailing:h);function p(B){var E=r,K=s;return r=s=void 0,l=B,i=c.apply(K,E),i}function V(B){return l=B,t=setTimeout(C,a),m?p(B):i}function b(B){var E=B-o,K=B-l,X=a-E;return f?am(X,n-K):X}function L(B){var E=B-o,K=B-l;return o===void 0||E>=a||E<0||f&&K>=n}function C(){var B=u4();if(L(B))return g(B);t=setTimeout(C,b(B))}function g(B){return t=void 0,h&&r?p(B):(r=s=void 0,i)}function N(){t!==void 0&&clearTimeout(t),l=0,r=o=s=t=void 0}function $(){return t===void 0?i:g(u4())}function P(){var B=u4(),E=L(B);if(r=arguments,s=this,o=B,E){if(t===void 0)return V(o);if(f)return clearTimeout(t),t=setTimeout(C,a),p(o)}return t===void 0&&(t=setTimeout(C,a)),i}return P.cancel=N,P.flush=$,P}function rm(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function sm(c){return typeof c=="function"?c:m5}function nm(c,a){var e=j2(c)?u5:Zf;return e(c,sm(a))}function im(c,a){return a.length<2?c:ml(c,gl(a,0,-1))}function tm(c,a){return a=e6(a,c),c=im(c,a),c==null||delete c[y5(rm(a))]}function om(c){return Cl(c)?void 0:c}var lm=1,fm=2,mm=4,vm=pl(function(c,a){var e={};if(c==null)return e;var r=!1;a=l5(a,function(n){return n=e6(n,c),r||(r=n.length>1),n}),Pt(c,A5(c),e),r&&(e=u3(e,lm|fm|mm,om));for(var s=a.length;s--;)tm(e,a[s]);return e}),um="Expected a function";function hm(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(um);return E2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),em(c,a,{leading:r,maxWait:a,trailing:s})}const pm=c=>e=>nm(c,r=>e.use(r)),g1=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c);const dm=new Map([["info","circle-info"],["success","check-circle"],["warning","circle-exclamation"],["danger","circle-xmark"],["error","circle-xmark"]]),B3=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e};function j0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function w(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?j0(Object(e),!0).forEach(function(r){Z(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):j0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function V3(c){"@babel/helpers - typeof";return V3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},V3(c)}function Hm(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function zm(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Vm(c,a,e){return a&&zm(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function Z(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function n6(c,a){return Cm(c)||Lm(c,a)||$5(c,a)||xm()}function W1(c){return Mm(c)||gm(c)||$5(c)||bm()}function Mm(c){if(Array.isArray(c))return k4(c)}function Cm(c){if(Array.isArray(c))return c}function gm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Lm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function $5(c,a){if(c){if(typeof c=="string")return k4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return k4(c,a)}}function k4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function bm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G0=function(){},i6={},B5={},F5=null,D5={mark:G0,measure:G0};try{typeof window<"u"&&(i6=window),typeof document<"u"&&(B5=document),typeof MutationObserver<"u"&&(F5=MutationObserver),typeof performance<"u"&&(D5=performance)}catch{}var ym=i6.navigator||{},X0=ym.userAgent,Y0=X0===void 0?"":X0,O2=i6,G=B5,K0=F5,c3=D5;O2.document;var _2=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",R5=~Y0.indexOf("MSIE")||~Y0.indexOf("Trident/"),a3,e3,r3,s3,n3,N2="___FONT_AWESOME___",A4=16,E5="fa",O5="svg-inline--fa",r1="data-fa-i2svg",_4="data-fa-pseudo-element",wm="data-fa-pseudo-element-pending",t6="data-prefix",o6="data-icon",Q0="fontawesome-i2svg",Nm="async",Sm=["HTML","HEAD","STYLE","SCRIPT"],I5=function(){try{return!0}catch{return!1}}(),j="classic",Y="sharp",l6=[j,Y];function q1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[j]}})}var $1=q1((a3={},Z(a3,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Z(a3,Y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),a3)),B1=q1((e3={},Z(e3,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(e3,Y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),e3)),F1=q1((r3={},Z(r3,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(r3,Y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),r3)),km=q1((s3={},Z(s3,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(s3,Y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),s3)),Am=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,U5="fa-layers-text",_m=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pm=q1((n3={},Z(n3,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(n3,Y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),n3)),W5=[1,2,3,4,5,6,7,8,9,10],Tm=W5.concat([11,12,13,14,15,16,17,18,19,20]),$m=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},D1=new Set;Object.keys(B1[j]).map(D1.add.bind(D1));Object.keys(B1[Y]).map(D1.add.bind(D1));var Bm=[].concat(l6,W1(D1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q2.GROUP,Q2.SWAP_OPACITY,Q2.PRIMARY,Q2.SECONDARY]).concat(W5.map(function(c){return"".concat(c,"x")})).concat(Tm.map(function(c){return"w-".concat(c)})),w1=O2.FontAwesomeConfig||{};function Fm(c){var a=G.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Dm(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(G&&typeof G.querySelector=="function"){var Rm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rm.forEach(function(c){var a=n6(c,2),e=a[0],r=a[1],s=Dm(Fm(e));s!=null&&(w1[r]=s)})}var q5={styleDefault:"solid",familyDefault:"classic",cssPrefix:E5,replacementClass:O5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};w1.familyPrefix&&(w1.cssPrefix=w1.familyPrefix);var p1=w(w({},q5),w1);p1.autoReplaceSvg||(p1.observeMutations=!1);var A={};Object.keys(q5).forEach(function(c){Object.defineProperty(A,c,{enumerable:!0,set:function(e){p1[c]=e,N1.forEach(function(r){return r(A)})},get:function(){return p1[c]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(a){p1.cssPrefix=a,N1.forEach(function(e){return e(A)})},get:function(){return p1.cssPrefix}});O2.FontAwesomeConfig=A;var N1=[];function Em(c){return N1.push(c),function(){N1.splice(N1.indexOf(c),1)}}var T2=A4,z2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Om(c){if(!(!c||!_2)){var a=G.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=G.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return G.head.insertBefore(a,r),c}}var Im="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R1(){for(var c=12,a="";c-- >0;)a+=Im[Math.random()*62|0];return a}function L1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function f6(c){return c.classList?L1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function j5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Um(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(j5(c[e]),'" ')},"").trim()}function F3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function m6(c){return c.size!==z2.size||c.x!==z2.x||c.y!==z2.y||c.rotate!==z2.rotate||c.flipX||c.flipY}function Wm(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:l}}function qm(c){var a=c.transform,e=c.width,r=e===void 0?A4:e,s=c.height,n=s===void 0?A4:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&R5?o+="translate(".concat(a.x/T2-r/2,"em, ").concat(a.y/T2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/T2,"em), calc(-50% + ").concat(a.y/T2,"em)) "):o+="translate(".concat(a.x/T2,"em, ").concat(a.y/T2,"em) "),o+="scale(".concat(a.size/T2*(a.flipX?-1:1),", ").concat(a.size/T2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var jm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function G5(){var c=E5,a=O5,e=A.cssPrefix,r=A.replacementClass,s=jm;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var Z0=!1;function h4(){A.autoAddCss&&!Z0&&(Om(G5()),Z0=!0)}var Gm={mixout:function(){return{dom:{css:G5,insertCss:h4}}},hooks:function(){return{beforeDOMElementCreation:function(){h4()},beforeI2svg:function(){h4()}}}},S2=O2||{};S2[N2]||(S2[N2]={});S2[N2].styles||(S2[N2].styles={});S2[N2].hooks||(S2[N2].hooks={});S2[N2].shims||(S2[N2].shims=[]);var m2=S2[N2],X5=[],Xm=function c(){G.removeEventListener("DOMContentLoaded",c),M3=1,X5.map(function(a){return a()})},M3=!1;_2&&(M3=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),M3||G.addEventListener("DOMContentLoaded",Xm));function Ym(c){_2&&(M3?setTimeout(c,0):X5.push(c))}function j1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?j5(c):"<".concat(a," ").concat(Um(r),">").concat(n.map(j1).join(""),"</").concat(a,">")}function J0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var p4=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=e,o,l,m;for(r===void 0?(o=1,m=a[n[0]]):(o=0,m=r);o<i;o++)l=n[o],m=t(m,a[l],l,a);return m};function Km(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function P4(c){var a=Km(c);return a.length===1?a[0].toString(16):null}function Qm(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function c8(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function T4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=c8(a);typeof m2.hooks.addPack=="function"&&!s?m2.hooks.addPack(c,c8(a)):m2.styles[c]=w(w({},m2.styles[c]||{}),n),c==="fas"&&T4("fa",a)}var i3,t3,o3,f1=m2.styles,Zm=m2.shims,Jm=(i3={},Z(i3,j,Object.values(F1[j])),Z(i3,Y,Object.values(F1[Y])),i3),v6=null,Y5={},K5={},Q5={},Z5={},J5={},cv=(t3={},Z(t3,j,Object.keys($1[j])),Z(t3,Y,Object.keys($1[Y])),t3);function av(c){return~Bm.indexOf(c)}function ev(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!av(s)?s:null}var c7=function(){var a=function(n){return p4(f1,function(i,t,o){return i[o]=p4(t,n,{}),i},{})};Y5=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),K5=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),J5=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in f1||A.autoFetchSvg,r=p4(Zm,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});Q5=r.names,Z5=r.unicodes,v6=D3(A.styleDefault,{family:A.familyDefault})};Em(function(c){v6=D3(c.styleDefault,{family:A.familyDefault})});c7();function u6(c,a){return(Y5[c]||{})[a]}function rv(c,a){return(K5[c]||{})[a]}function Z2(c,a){return(J5[c]||{})[a]}function a7(c){return Q5[c]||{prefix:null,iconName:null}}function sv(c){var a=Z5[c],e=u6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function I2(){return v6}var h6=function(){return{prefix:null,iconName:null,rest:[]}};function D3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?j:e,s=$1[r][c],n=B1[r][c]||B1[r][s],i=c in m2.styles?c:null;return n||i||null}var a8=(o3={},Z(o3,j,Object.keys(F1[j])),Z(o3,Y,Object.keys(F1[Y])),o3);function R3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},Z(a,j,"".concat(A.cssPrefix,"-").concat(j)),Z(a,Y,"".concat(A.cssPrefix,"-").concat(Y)),a),i=null,t=j;(c.includes(n[j])||c.some(function(l){return a8[j].includes(l)}))&&(t=j),(c.includes(n[Y])||c.some(function(l){return a8[Y].includes(l)}))&&(t=Y);var o=c.reduce(function(l,m){var f=ev(A.cssPrefix,m);if(f1[m]?(m=Jm[t].includes(m)?km[t][m]:m,i=m,l.prefix=m):cv[t].indexOf(m)>-1?(i=m,l.prefix=D3(m,{family:t})):f?l.iconName=f:m!==A.replacementClass&&m!==n[j]&&m!==n[Y]&&l.rest.push(m),!s&&l.prefix&&l.iconName){var h=i==="fa"?a7(l.iconName):{},p=Z2(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!f1.far&&f1.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},h6());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===Y&&(f1.fass||A.autoFetchSvg)&&(o.prefix="fass",o.iconName=Z2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=I2()||"fas"),o}var nv=function(){function c(){Hm(this,c),this.definitions={}}return Vm(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=w(w({},e.definitions[t]||{}),i[t]),T4(t,i[t]);var o=F1[j][t];o&&T4(o,i[t]),c7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,l=i.icon,m=l[2];e[t]||(e[t]={}),m.length>0&&m.forEach(function(f){typeof f=="string"&&(e[t][f]=l)}),e[t][o]=l}),e}}]),c}(),e8=[],m1={},v1={},iv=Object.keys(v1);function tv(c,a){var e=a.mixoutsTo;return e8=c,m1={},Object.keys(v1).forEach(function(r){iv.indexOf(r)===-1&&delete v1[r]}),e8.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),V3(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){m1[i]||(m1[i]=[]),m1[i].push(n[i])})}r.provides&&r.provides(v1)}),e}function $4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=m1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function s1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=m1[c]||[];s.forEach(function(n){n.apply(null,e)})}function k2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return v1[c]?v1[c].apply(null,a):void 0}function B4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||I2();if(a)return a=Z2(e,a)||a,J0(e7.definitions,e,a)||J0(m2.styles,e,a)}var e7=new nv,ov=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,s1("noAuto")},lv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _2?(s1("beforeI2svg",a),k2("pseudoElements2svg",a),k2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Ym(function(){mv({autoReplaceSvgRoot:e}),s1("watch",a)})}},fv={icon:function(a){if(a===null)return null;if(V3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=D3(a[0]);return{prefix:r,iconName:Z2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(A.cssPrefix,"-"))>-1||a.match(Am))){var s=R3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||I2(),iconName:Z2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=I2();return{prefix:n,iconName:Z2(n,a)||a}}}},t2={noAuto:ov,config:A,dom:lv,parse:fv,library:e7,findIconDefinition:B4,toHtml:j1},mv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?G:e;(Object.keys(m2.styles).length>0||A.autoFetchSvg)&&_2&&A.autoReplaceSvg&&t2.dom.i2svg({node:r})};function E3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return j1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(_2){var r=G.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function vv(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(m6(i)&&e.found&&!r.found){var t=e.width,o=e.height,l={x:t/o/2,y:.5};s.style=F3(w(w({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function uv(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(A.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},s),{},{id:i}),children:r}]}]}function p6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,l=c.maskId,m=c.titleId,f=c.extra,h=c.watchable,p=h===void 0?!1:h,V=r.found?r:e,b=V.width,L=V.height,C=s==="fak",g=[A.replacementClass,n?"".concat(A.cssPrefix,"-").concat(n):""].filter(function(X){return f.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(f.classes).join(" "),N={children:[],attributes:w(w({},f.attributes),{},{"data-prefix":s,"data-icon":n,class:g,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(L)})},$=C&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/L*16*.0625,"em")}:{};p&&(N.attributes[r1]=""),o&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(m||R1())},children:[o]}),delete N.attributes.title);var P=w(w({},N),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:t,styles:w(w({},$),f.styles)}),B=r.found&&e.found?k2("generateAbstractMask",P)||{children:[],attributes:{}}:k2("generateAbstractIcon",P)||{children:[],attributes:{}},E=B.children,K=B.attributes;return P.children=E,P.attributes=K,t?uv(P):vv(P)}function r8(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,l=w(w(w({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[r1]="");var m=w({},i.styles);m6(s)&&(m.transform=qm({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var f=F3(m);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function hv(c){var a=c.content,e=c.title,r=c.extra,s=w(w(w({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=F3(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var d4=m2.styles;function F4(c){var a=c[0],e=c[1],r=c.slice(4),s=n6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var pv={found:!1,width:512,height:512};function dv(c,a){!I5&&!A.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function D4(c,a){var e=a;return a==="fa"&&A.styleDefault!==null&&(a=I2()),new Promise(function(r,s){if(k2("missingIconAbstract"),e==="fa"){var n=a7(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&d4[a]&&d4[a][c]){var i=d4[a][c];return r(F4(i))}dv(c,a),r(w(w({},pv),{},{icon:A.showMissingIcons&&c?k2("missingIconAbstract")||{}:{}}))})}var s8=function(){},R4=A.measurePerformance&&c3&&c3.mark&&c3.measure?c3:{mark:s8,measure:s8},x1='FA "6.5.2"',Hv=function(a){return R4.mark("".concat(x1," ").concat(a," begins")),function(){return r7(a)}},r7=function(a){R4.mark("".concat(x1," ").concat(a," ends")),R4.measure("".concat(x1," ").concat(a),"".concat(x1," ").concat(a," begins"),"".concat(x1," ").concat(a," ends"))},d6={begin:Hv,end:r7},h3=function(){};function n8(c){var a=c.getAttribute?c.getAttribute(r1):null;return typeof a=="string"}function zv(c){var a=c.getAttribute?c.getAttribute(t6):null,e=c.getAttribute?c.getAttribute(o6):null;return a&&e}function Vv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(A.replacementClass)}function Mv(){if(A.autoReplaceSvg===!0)return p3.replace;var c=p3[A.autoReplaceSvg];return c||p3.replace}function Cv(c){return G.createElementNS("http://www.w3.org/2000/svg",c)}function gv(c){return G.createElement(c)}function s7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Cv:gv:e;if(typeof c=="string")return G.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(s7(i,{ceFn:r}))}),s}function Lv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var p3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(s7(s),e)}),e.getAttribute(r1)===null&&A.keepOriginalSource){var r=G.createComment(Lv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~f6(e).indexOf(A.replacementClass))return p3.replace(a);var s=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===A.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return j1(t)}).join(`
`);e.setAttribute(r1,""),e.innerHTML=i}};function i8(c){c()}function n7(c,a){var e=typeof a=="function"?a:h3;if(c.length===0)e();else{var r=i8;A.mutateApproach===Nm&&(r=O2.requestAnimationFrame||i8),r(function(){var s=Mv(),n=d6.begin("mutate");c.map(s),n(),e()})}}var H6=!1;function i7(){H6=!0}function E4(){H6=!1}var C3=null;function t8(c){if(K0&&A.observeMutations){var a=c.treeCallback,e=a===void 0?h3:a,r=c.nodeCallback,s=r===void 0?h3:r,n=c.pseudoElementsCallback,i=n===void 0?h3:n,t=c.observeMutationsRoot,o=t===void 0?G:t;C3=new K0(function(l){if(!H6){var m=I2();L1(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!n8(f.addedNodes[0])&&(A.searchPseudoElements&&i(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&A.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&n8(f.target)&&~$m.indexOf(f.attributeName))if(f.attributeName==="class"&&zv(f.target)){var h=R3(f6(f.target)),p=h.prefix,V=h.iconName;f.target.setAttribute(t6,p||m),V&&f.target.setAttribute(o6,V)}else Vv(f.target)&&s(f.target)})}}),_2&&C3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bv(){C3&&C3.disconnect()}function xv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function yv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=R3(f6(c));return s.prefix||(s.prefix=I2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=rv(s.prefix,c.innerText)||u6(s.prefix,P4(c.innerText))),!s.iconName&&A.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function wv(c){var a=L1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return A.autoA11y&&(e?a["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||R1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Nv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function o8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=yv(c),r=e.iconName,s=e.prefix,n=e.rest,i=wv(c),t=$4("parseNodeAttributes",{},c),o=a.styleParser?xv(c):[];return w({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:z2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Sv=m2.styles;function t7(c){var a=A.autoReplaceSvg==="nest"?o8(c,{styleParser:!1}):o8(c);return~a.extra.classes.indexOf(U5)?k2("generateLayersText",c,a):k2("generateSvgReplacementMutation",c,a)}var U2=new Set;l6.map(function(c){U2.add("fa-".concat(c))});Object.keys($1[j]).map(U2.add.bind(U2));Object.keys($1[Y]).map(U2.add.bind(U2));U2=W1(U2);function l8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_2)return Promise.resolve();var e=G.documentElement.classList,r=function(f){return e.add("".concat(Q0,"-").concat(f))},s=function(f){return e.remove("".concat(Q0,"-").concat(f))},n=A.autoFetchSvg?U2:l6.map(function(m){return"fa-".concat(m)}).concat(Object.keys(Sv));n.includes("fa")||n.push("fa");var i=[".".concat(U5,":not([").concat(r1,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(r1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=L1(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=d6.begin("onTree"),l=t.reduce(function(m,f){try{var h=t7(f);h&&m.push(h)}catch(p){I5||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise(function(m,f){Promise.all(l).then(function(h){n7(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),m()})}).catch(function(h){o(),f(h)})})}function kv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;t7(c).then(function(e){e&&n7([e],a)})}function Av(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:B4(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:B4(s||{})),c(r,w(w({},e),{},{mask:s}))}}var _v=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?z2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,l=e.maskId,m=l===void 0?null:l,f=e.title,h=f===void 0?null:f,p=e.titleId,V=p===void 0?null:p,b=e.classes,L=b===void 0?[]:b,C=e.attributes,g=C===void 0?{}:C,N=e.styles,$=N===void 0?{}:N;if(a){var P=a.prefix,B=a.iconName,E=a.icon;return E3(w({type:"icon"},a),function(){return s1("beforeDOMElementCreation",{iconDefinition:a,params:e}),A.autoA11y&&(h?g["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(V||R1()):(g["aria-hidden"]="true",g.focusable="false")),p6({icons:{main:F4(E),mask:o?F4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:B,transform:w(w({},z2),s),symbol:i,title:h,maskId:m,titleId:V,extra:{attributes:g,styles:$,classes:L}})})}},Pv={mixout:function(){return{icon:Av(_v)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=l8,e.nodeCallback=kv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?G:r,n=e.callback,i=n===void 0?function(){}:n;return l8(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,l=r.symbol,m=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,V){Promise.all([D4(s,t),m.iconName?D4(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var L=n6(b,2),C=L[0],g=L[1];p([e,p6({icons:{main:C,mask:g},prefix:t,iconName:s,transform:o,symbol:l,maskId:f,title:n,titleId:i,extra:h,watchable:!0})])}).catch(V)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=F3(t);o.length>0&&(s.style=o);var l;return m6(i)&&(l=k2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},Tv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return E3({type:"layer"},function(){s1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(W1(n)).join(" ")},children:i}]})}}}},$v={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,m=r.styles,f=m===void 0?{}:m;return E3({type:"counter",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),hv({content:e.toString(),title:n,extra:{attributes:l,styles:f,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(W1(t))}})})}}}},Bv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?z2:s,i=r.title,t=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,m=r.attributes,f=m===void 0?{}:m,h=r.styles,p=h===void 0?{}:h;return E3({type:"text",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),r8({content:e,transform:w(w({},z2),n),title:t,extra:{attributes:f,styles:p,classes:["".concat(A.cssPrefix,"-layers-text")].concat(W1(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(R5){var l=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();t=m.width/l,o=m.height/l}return A.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,r8({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},Fv=new RegExp('"',"ug"),f8=[1105920,1112319];function Dv(c){var a=c.replace(Fv,""),e=Qm(a,0),r=e>=f8[0]&&e<=f8[1],s=a.length===2?a[0]===a[1]:!1;return{value:P4(s?a[0]:a),isSecondary:r||s}}function m8(c,a){var e="".concat(wm).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=L1(c.children),i=n.filter(function(E){return E.getAttribute(_4)===a})[0],t=O2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(_m),l=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&m!=="none"&&m!==""){var f=t.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?Y:j,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B1[h][o[2].toLowerCase()]:Pm[h][l],V=Dv(f),b=V.value,L=V.isSecondary,C=o[0].startsWith("FontAwesome"),g=u6(p,b),N=g;if(C){var $=sv(b);$.iconName&&$.prefix&&(g=$.iconName,p=$.prefix)}if(g&&!L&&(!i||i.getAttribute(t6)!==p||i.getAttribute(o6)!==N)){c.setAttribute(e,N),i&&c.removeChild(i);var P=Nv(),B=P.extra;B.attributes[_4]=a,D4(g,p).then(function(E){var K=p6(w(w({},P),{},{icons:{main:E,mask:h6()},prefix:p,iconName:N,extra:B,watchable:!0})),X=G.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(X,c.firstChild):c.appendChild(X),X.outerHTML=K.map(function(Q){return j1(Q)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/VPLocalSearchBox.O4ChWOb9.js","assets/chunks/framework.DRSb6gpS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}