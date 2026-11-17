"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=q(function(w,u){
var c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),f=require('@stdlib/ndarray-base-numel-dimension/dist'),p=require('@stdlib/ndarray-base-clip-upper-index/dist'),o=require('@stdlib/ndarray-base-stride/dist'),x=require('@stdlib/ndarray-base-offset/dist'),g=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-gfind-last-index/dist').ndarray;function I(i,r,t){var e,n,a;if(a=i[0],e=c(i[1]),n=f(a,0),e=p(e,e<0?n:n-1),e<0)return-1;return m(e+1,g(a),o(a,0),x(a),s,null);function s(d,l){return r.call(t,d,e-l,a)}}u.exports=I
});var D=v();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
