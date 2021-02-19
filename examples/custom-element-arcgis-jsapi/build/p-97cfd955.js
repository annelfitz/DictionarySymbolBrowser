import"./p-476cf7c4.js";import{D as e,E as r,w as t,F as i,f as s,x as a,aI as n,K as o,L as l,y as u,b as c,U as p,Z as d}from"./p-ab028778.js";import"./p-2ef6e039.js";import"./p-7575e94f.js";import{P as m}from"./p-c6c7c9c2.js";import{i as f}from"./p-77b9029e.js";import{c as y,n as h,e as B}from"./p-201a5204.js";import b from"./p-f16fbea1.js";import{c as v}from"./p-2710de6b.js";import"./p-35f05b11.js";function j(e){return b.fromJSON(e).features.map((e=>e.geometry))}let g=class extends l{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return j(e)}readIncidents(e){return j(e)}readPointBarriers(e,r){return j(r.barriers)}readPolylineBarriers(e){return j(e)}readPolygonBarriers(e){return j(e)}readRoutes(e){return function(e){return e.features.map((r=>{const t=u.fromJSON(e.spatialReference),i=n.fromJSON(r);return c(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)}};e([r({type:[v]})],g.prototype,"directions",void 0),e([r({type:[t]})],g.prototype,"facilities",void 0),e([i("facilities")],g.prototype,"readFacilities",null),e([r({type:[t]})],g.prototype,"incidents",void 0),e([i("incidents")],g.prototype,"readIncidents",null),e([r({type:[y]})],g.prototype,"messages",void 0),e([r({type:[t]})],g.prototype,"pointBarriers",void 0),e([i("pointBarriers",["barriers"])],g.prototype,"readPointBarriers",null),e([r({type:[s]})],g.prototype,"polylineBarriers",void 0),e([i("polylineBarriers")],g.prototype,"readPolylineBarriers",null),e([r({type:[a]})],g.prototype,"polygonBarriers",void 0),e([i("polygonBarriers")],g.prototype,"readPolygonBarriers",null),e([r({type:[n]})],g.prototype,"routes",void 0),e([i("routes")],g.prototype,"readRoutes",null),g=e([o("esri.tasks.support.ClosestFacilitySolveResult")],g);var A=g;const P=B({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let F=class extends(h(f)){constructor(e){super(e),this.url=null}solve(e,r){const t=[],i=[],s={},a={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,i,"incidents.features",s),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,i,"facilities.features",s),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,i,"pointBarriers.features",s),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,i,"polylineBarriers.features",s),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,i,"polygonBarriers.features",s),m(i).then((e=>{for(const r in s){const i=s[r];t.push(r),a[r]=e.slice(i[0],i[1])}return this._isInputGeometryZAware(a,t)?this.getServiceDescription():p({dontCheck:!0})})).then((i=>{("dontCheck"in i?i.dontCheck:i.hasZ)||this._dropZValuesOffInputGeometry(a,t);for(const r in a)a[r].forEach(((t,i)=>{e.get(r)[i].geometry=t}));let s={query:{...this.parsedUrl.query,f:"json",...P.toQueryParams(e)}};return(this.requestOptions||r)&&(s={...this.requestOptions,...r,...s}),d(`${this.parsedUrl.path}/solveClosestFacility`,s)})).then((e=>A.fromJSON(e.data)))}_collectGeometries(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}};e([r()],F.prototype,"url",void 0),F=e([o("esri.tasks.ClosestFacilityTask")],F);var R=F;export default R;