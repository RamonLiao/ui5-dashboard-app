/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/IconPool","./TabStripItem","sap/m/ImageHelper"],function(e,t,i,r){"use strict";var a=e.extend("sap.m.TabContainerItem",{metadata:{properties:{name:{type:"string",group:"Misc",defaultValue:""},additionalText:{type:"string",group:"Misc",defaultValue:""},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconTooltip:{type:"string",group:"Accessibility",defaultValue:null},key:{type:"string",group:"Data",defaultValue:null},modified:{type:"boolean",group:"Misc",defaultValue:false}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,defaultValue:null},_image:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{itemPropertyChanged:{parameters:{itemChanged:{type:"sap.m.TabContainerItem"},propertyKey:{type:"string"},propertyValue:{type:"any"}}}},dnd:{draggable:true,droppable:false}}});a.prototype.setProperty=function(t,i,r){this.fireItemPropertyChanged({itemChanged:this,propertyKey:t,propertyValue:i});return e.prototype.setProperty.call(this,t,i,r)};a.prototype.setIcon=function(e,t){var i,a=["sapMTabContIcon"],o=this.getAggregation("_image"),n=this.getId()+"-img",p=!!(this.getName()||this.getAdditionalText());if(!e){this.setProperty("icon",e,t);if(o){this.destroyAggregation("_image")}return this}if(this.getIcon()!==e){this.setProperty("icon",e,t);i={src:e,id:n,decorative:p,tooltip:this.getIconTooltip()};o=r.getImageControl(n,o,undefined,i,a);this.setAggregation("_image",o,t)}return this};a.prototype._getImage=function(){return this.getAggregation("_image")};return a});
//# sourceMappingURL=TabContainerItem.js.map