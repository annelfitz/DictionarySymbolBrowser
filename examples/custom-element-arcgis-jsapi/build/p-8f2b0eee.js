import{cW as t}from"./p-dc4230e0.js";import{a as n,t as r}from"./p-eb53cb9f.js";function u(t){const n=t[0],r=t[1],u=t[2];return Math.sqrt(n*n+r*r+u*u)}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function a(t,n,r,u){return t[0]=n,t[1]=r,t[2]=u,t}function e(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function c(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function i(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function h(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function M(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function s(t,n){const r=n[0]-t[0],u=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(r*r+u*u+o*o)}function f(t,n){const r=n[0]-t[0],u=n[1]-t[1],o=n[2]-t[2];return r*r+u*u+o*o}function l(t){const n=t[0],r=t[1],u=t[2];return n*n+r*r+u*u}function d(t,n){const r=n[0],u=n[1],o=n[2];let a=r*r+u*u+o*o;return a>0&&(a=1/Math.sqrt(a),t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a),t}function m(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function p(t,n,r){const u=n[0],o=n[1],a=n[2],e=r[0],c=r[1],i=r[2];return t[0]=o*i-a*c,t[1]=a*e-u*i,t[2]=u*c-o*e,t}function b(t,n,r,u){const o=n[0],a=n[1],e=n[2];return t[0]=o+u*(r[0]-o),t[1]=a+u*(r[1]-a),t[2]=e+u*(r[2]-e),t}function q(t,n,r){const u=n[0],o=n[1],a=n[2];return t[0]=r[0]*u+r[4]*o+r[8]*a+r[12],t[1]=r[1]*u+r[5]*o+r[9]*a+r[13],t[2]=r[2]*u+r[6]*o+r[10]*a+r[14],t}function g(t,n,r){const u=n[0],o=n[1],a=n[2];return t[0]=u*r[0]+o*r[3]+a*r[6],t[1]=u*r[1]+o*r[4]+a*r[7],t[2]=u*r[2]+o*r[5]+a*r[8],t}function v(t,n,r){const u=r[0],o=r[1],a=r[2],e=n[0],c=n[1],i=n[2];let h=o*i-a*c,M=a*e-u*i,s=u*c-o*e,f=o*s-a*M,l=a*h-u*s,d=u*M-o*h;const m=2*r[3];return h*=m,M*=m,s*=m,f*=2,l*=2,d*=2,t[0]=e+h+f,t[1]=c+M+l,t[2]=i+s+d,t}const _=t(),j=t();function x(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}let y=u;Object.freeze({__proto__:null,length:u,copy:o,set:a,add:e,subtract:c,multiply:i,divide:h,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t},max:function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:M,scaleAndAdd:function(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t[2]=n[2]+r[2]*u,t},distance:s,squaredDistance:f,squaredLength:l,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:d,dot:m,cross:p,lerp:b,hermite:function(t,n,r,u,o,a){const e=a*a,c=e*(2*a-3)+1,i=e*(a-2)+a,h=e*(a-1),M=e*(3-2*a);return t[0]=n[0]*c+r[0]*i+u[0]*h+o[0]*M,t[1]=n[1]*c+r[1]*i+u[1]*h+o[1]*M,t[2]=n[2]*c+r[2]*i+u[2]*h+o[2]*M,t},bezier:function(t,n,r,u,o,a){const e=1-a,c=e*e,i=a*a,h=c*e,M=3*a*c,s=3*i*e,f=i*a;return t[0]=n[0]*h+r[0]*M+u[0]*s+o[0]*f,t[1]=n[1]*h+r[1]*M+u[1]*s+o[1]*f,t[2]=n[2]*h+r[2]*M+u[2]*s+o[2]*f,t},random:function(t,n){n=n||1;const u=2*r()*Math.PI,o=2*r()-1,a=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(u)*a,t[1]=Math.sin(u)*a,t[2]=o*n,t},transformMat4:q,transformMat3:g,transformQuat:v,rotateX:function(t,n,r,u){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[0],a[1]=o[1]*Math.cos(u)-o[2]*Math.sin(u),a[2]=o[1]*Math.sin(u)+o[2]*Math.cos(u),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},rotateY:function(t,n,r,u){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[2]*Math.sin(u)+o[0]*Math.cos(u),a[1]=o[1],a[2]=o[2]*Math.cos(u)-o[0]*Math.sin(u),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},rotateZ:function(t,n,r,u){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[0]*Math.cos(u)-o[1]*Math.sin(u),a[1]=o[0]*Math.sin(u)+o[1]*Math.cos(u),a[2]=o[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},angle:function(t,n){o(_,t),o(j,n),d(_,_),d(j,j);const r=m(_,j);return r>1?0:r<-1?Math.PI:Math.acos(r)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:x,equals:function(t,r){const u=t[0],o=t[1],a=t[2],e=r[0],c=r[1],i=r[2];return Math.abs(u-e)<=n*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(o-c)<=n*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(a-i)<=n*Math.max(1,Math.abs(a),Math.abs(i))},sub:c,mul:i,div:h,dist:s,sqrDist:f,len:y,sqrLen:l});export{x as F,q as I,g as L,v as P,y as Y,p as _,c,M as d,h as i,d as j,a as o,l as p,s as q,o as r,u as s,e as u,f as x,b as y,m as z}