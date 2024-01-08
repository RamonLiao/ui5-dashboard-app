/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/Device","sap/ui/core/InvisibleText"],function(e,t,r){"use strict";var n=e.FacetFilterType;var i={apiVersion:2};i.render=function(e,t){if(t.getType()===n.Light||t.getShowSummaryBar()){i.renderSummaryBar(e,t)}else{i.renderSimpleFlow(e,t)}};i.renderSimpleFlow=function(e,r){e.openStart("div",r);e.class("sapMFF");e.accessibilityState({role:"toolbar",roledescription:r._bundle.getText("FACETFILTER_TITLE")});if(r._lastScrolling){e.class("sapMFFScrolling")}else{e.class("sapMFFNoScrolling")}if(r.getShowReset()){e.class("sapMFFResetSpacer")}e.openEnd();if(t.system.desktop){e.renderControl(r._getScrollingArrow("left"))}e.openStart("div",r.getId()+"-head");e.class("sapMFFHead");e.openEnd();i.renderFacetFilterListButtons(r,e);if(r.getShowPersonalization()){i.renderAddFilterButton(r,e)}e.close("div");if(t.system.desktop){e.renderControl(r._getScrollingArrow("right"))}if(r.getShowReset()){e.openStart("div");e.class("sapMFFResetDiv");e.openEnd();e.renderControl(r.getAggregation("resetButton"));e.close("div")}e.close("div")};i.renderSummaryBar=function(e,t){e.openStart("div",t);e.class("sapMFF");e.openEnd();e.renderControl(t.getAggregation("summaryBar"));e.close("div")};i.getAriaAnnouncement=function(e,t){return r.getStaticId("sap.m",t||"FACETFILTER_"+e.toUpperCase())};i.renderFacetFilterListButtons=function(e,t){var r=e._getSequencedLists(),o=r.length,a=e.getShowPersonalization(),s=a&&e.getType()===n.Simple,d=s?o+1:o,l,c;for(c=0;c<o;c++){var g=r[c].getItems().length>0,u=r[c].getActive(),F=e._bCheckForAddListBtn&&(g||u);if(!e._bCheckForAddListBtn||F){l=e._getButtonForList(r[c]);i.addPositionInfoForButton(e,l,c+1,d);if(a){l.addAriaDescribedBy(i.getAriaAnnouncement("ARIA_REMOVE"))}t.renderControl(l);if(a){t.renderControl(e._getFacetRemoveIcon(r[c]))}}}return this};i.renderAddFilterButton=function(e,t){var r=e.getAggregation("addFacetButton"),n=e._getSequencedLists().length+1;i.addPositionInfoForButton(e,r,n,n);t.renderControl(r);return this};i.addPositionInfoForButton=function(e,t,r,n){var o=i.createStaticPositioningLabel(e,r,n);i.clearOldPositioningLabels(e,t);t.addAriaDescribedBy(o);return this};i.clearOldPositioningLabels=function(e,t){var r=t.removeAllAriaDescribedBy(),n=this.getAriaAnnouncement("ARIA_REMOVE"),i;r.forEach(function(e){if(n===e){return}i=sap.ui.getCore().byId(e);i&&i.destroy()});return this};i.createStaticPositioningLabel=function(e,t,n){var i=sap.ui.getCore().getLibraryResourceBundle("sap.m"),o=i.getText("FACETFILTER_ARIA_FACET_FILTER"),a=i.getText("FACETFILTERLIST_ARIA_POSITION",[t,n]),s=new r({text:o+" "+a}).toStatic();e._aOwnedLabels.push(s.getId());return s};return i},true);
//# sourceMappingURL=FacetFilterRenderer.js.map