/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Core","sap/ui/core/Configuration"],function(e,t,i){"use strict";var r=e.Orientation;var a=t.getLibraryResourceBundle("sap.ui.layout");var o={apiVersion:2};o.render=function(e,t){var a=t.getOrientation()===r.Horizontal,o=a?"sapUiLoSplitterH":"sapUiLoSplitterV",n=i.getAnimationMode(),s=n!==i.AnimationMode.none&&n!==i.AnimationMode.minimal;e.openStart("div",t).class("sapUiLoSplitter").class(o);if(s&&!t._liveResize){e.class("sapUiLoSplitterAnimated")}e.style("width",t.getWidth()).style("height",t.getHeight()).openEnd();this.renderContentAreas(e,t);e.close("div")};o.renderContentAreas=function(e,t){var i=t.getId(),a=t.getOrientation()===r.Horizontal,n=a?"width":"height",s=t._getContentAreas(),p=s.length,l=t.getCalculatedSizes();s.forEach(function(r,s){var d=r.getLayoutData(),c="0";if(l[s]){c=l[s]+"px"}else if(d){c=d.getSize()}e.openStart("section",i+"-content-"+s).style(n,c).class("sapUiLoSplitterContent").openEnd();e.renderControl(r);e.close("section");if(s<p-1){o.renderBar(e,a,t.getId()+"-splitbar-"+s,"sapUiLoSplitterBar")}});e.openStart("div",i+"-overlay").class("sapUiLoSplitterOverlay").openEnd();o.renderBar(e,a,i+"-overlayBar","sapUiLoSplitterOverlayBar");e.close("div")};o.renderBar=function(e,t,i,r){e.openStart("div",i).attr("role","separator").attr("title",a.getText("SPLITTER_MOVE")).attr("aria-orientation",t?"vertical":"horizontal").attr("tabindex",0).class(r).openEnd();o.renderBarGripAndDecorations(e,t);e.close("div")};o.renderBarGripAndDecorations=function(e,t){var i=t?"sap-icon://vertical-grip":"sap-icon://horizontal-grip";e.openStart("div").class("sapUiLoSplitterBarDecorationBefore").openEnd().close("div");e.openStart("div").class("sapUiLoSplitterBarGrip").openEnd().icon(i,["sapUiLoSplitterBarGripIcon"]).close("div");e.openStart("div").class("sapUiLoSplitterBarDecorationAfter").openEnd().close("div")};return o},true);
//# sourceMappingURL=SplitterRenderer.js.map