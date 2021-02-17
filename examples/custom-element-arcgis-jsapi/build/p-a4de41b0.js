import{a9 as e,W as t,ae as r,m as i,bc as s,l as n,D as a,E as o,y as l,F as c,z as u,b9 as d,K as h,aQ as p,b as m,a3 as y,O as f,M as v,bI as w,a1 as g,i as S}from"./p-dc4230e0.js";import b from"./p-540c739d.js";import{f as j}from"./p-f1856c76.js";import{p as x}from"./p-5e52b0f8.js";import{d as R,p as _,m as I,h as N,y as O,f as T}from"./p-6a7ee25c.js";import{getSiblingOfSameTypeI as A}from"./p-e7885fe3.js";function U(){const e=F.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16);return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}const F=e.crypto||e.msCrypto;function P(e){return e&&"getAtOrigin"in e&&"originOf"in e}function q(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&P(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}async function E(e,s,n){if(!s||!s.resources)return;const a=s.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=s.portalItem;const o=new Set(s.resources.toKeep.map((e=>e.resource.path))),l=new Set,c=[];o.forEach((t=>{a.delete(t),e.paths.push(t)}));for(const t of s.resources.toUpdate)if(a.delete(t.resource.path),o.has(t.resource.path)||l.has(t.resource.path)){const{resource:r,content:i,finish:s,error:a}=t,o=A(r,U());e.paths.push(o.path),c.push($({resource:o,content:i,finish:s,error:a},n))}else e.paths.push(t.resource.path),c.push(L(t,n)),l.add(t.resource.path);for(const t of s.resources.toAdd)c.push($(t,n)),e.paths.push(t.resource.path);if(a.forEach((e=>{const t=s.portalItem.resourceFromPath(e);c.push(t.portalItem.removeResource(t).catch((()=>{})))})),0===c.length)return;const u=await t(c);r(n);const d=u.filter((e=>"error"in e)).map((e=>e.error));if(d.length>0)throw new i("save:resources","Failed to save one or more resources",{errors:d})}async function $(e,t){const r=await s(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function L(e,t){const r=await s(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const K=n.getLogger("esri.layers.mixins.SceneService"),M=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this._debouncedSaveOperations=p((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return l.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new l(i):null}}readFullExtent(e,t){const r=t.store,i=this._readSpatialReference(t);return null==i||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((e=>e<C))?null:new u({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:i})}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"",s={major:Number.NaN,minor:Number.NaN,versionString:i},n=i.split(".");return n.length>=2&&(s.major=parseInt(n[0],10),s.minor=parseInt(n[1],10)),s}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return R(this.url,t.name);let i=t.name;if(!i&&this.url){const e=_(this.url);m(e)&&(i=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(i=r+" - "+i),I(i)}set url(e){const t=N(this,e,K);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){O(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=y(e);return null!=this.layerId&&T(t.path)&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _verifyRootNodeAndUpdateExtent(e,t){if(e)try{return this._updateExtentFromRootPage(e,await this._fetchRootPage(e,t))}catch(e){}return this._updateExtentFromRootNode(await this._fetchRootNode(t))}async _fetchRootPage(e,t){if(!e)return f();const r=Math.floor(e.rootIndex/e.nodesPerPage),i=`${this.parsedUrl.path}/nodepages/${r}`;return(await v(i,{responseType:"json",signal:t})).data}_updateExtentFromRootPage(e,t){if(null==t||null==t.nodes)throw new i("sceneservice:invalid-node-page","Inavlid node page.");const r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new i("sceneservice:invalid-node-page","Inavlid node page.");if(r.obb.center[0]<C)return;const s=r.obb.halfSize,n=r.obb.center[2],a=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-a,this.fullExtent.zmax=n+a}_updateExtentFromRootNode(e){if(null==e||null==this.fullExtent||this.fullExtent.hasZ)return;if(!Array.isArray(e.mbs)||4!==e.mbs.length||e.mbs[0]<C)return;const t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}async _fetchRootNode(e){if(!this.rootNode)return;const t=w(this.parsedUrl.path,this.rootNode);try{return(await v(t,{query:{f:"json"},responseType:"json",signal:e})).data}catch(e){throw new i("sceneservice:root-node-missing","Root node missing.",{error:e,url:t})}}async _fetchService(e){if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await v(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const t of i)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...J,...t};let s=b.from(e);s||(K.error("_saveAs(): requires a portal item parameter"),await f(new i("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),s.id&&(s=s.clone(),s.id=null);const n=s.portal||g.getDefault();await this._ensureLoadBeforeSave(),s.type=D,s.portal=n;const a={origin:"portal-item",url:null,messages:[],portal:n,portalItem:s,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,a)]};return await S(a.resources.pendingOperations),await this._validateAgainstJSONSchema(o,a,r),s.url=this.url,s.title||(s.title=this.title),this._updateTypeKeywords(s,r,1),await n._signIn(),await n.user.addItem({item:s,folder:r&&r.folder,data:o}),await E(this.resourceReferences,a,null),this.portalItem=s,q(a),a.portalItem=s,s}async _save(e){const t={...J,...e};this.portalItem||(K.error("_save(): requires the .portalItem property to be set"),await f(new i("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==D&&(K.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+D),await f(new i("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${D}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&y(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||g.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write(null,r)]};return await S(r.resources.pendingOperations),await this._validateAgainstJSONSchema(s,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:s}),await E(this.resourceReferences,r,null),q(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){let s=t.messages.filter((e=>"error"===e.type)).map((e=>new i(e.name,e.message,e.details)));if(r&&r.validationOptions.ignoreUnsupported&&(s=s.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),r.validationOptions.enabled||k){const t=(await import("./p-e2373b45.js")).validate(e,r.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(K.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===r.validationOptions.failPolicy){const e=t.map((e=>new i("sceneservice:schema-validation",e))).concat(s);throw new i("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(s.length>0)throw new i("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}};return a([o({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),a([o({type:l})],t.prototype,"spatialReference",void 0),a([c("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),a([o({type:u})],t.prototype,"fullExtent",void 0),a([c("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),a([o({readOnly:!0,type:j})],t.prototype,"heightModelInfo",void 0),a([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),a([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),a([o({readOnly:!0})],t.prototype,"version",void 0),a([c("version",["store.version"])],t.prototype,"readVersion",null),a([o({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([o({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),a([o({type:String})],t.prototype,"title",void 0),a([c("portal-item","title")],t.prototype,"readTitlePortalItem",null),a([c("service","title",["name"])],t.prototype,"readTitleService",null),a([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),a([o(x)],t.prototype,"url",null),a([d("url")],t.prototype,"writeUrl",null),a([o({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),a([o({readOnly:!0})],t.prototype,"store",void 0),a([o({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=a([h("esri.layers.mixins.SceneService")],t),t},C=-1e38,k=!1,D="Scene Service",J={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};export{M as T,P as i,U as o}