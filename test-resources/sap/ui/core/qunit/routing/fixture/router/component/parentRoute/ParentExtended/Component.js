sap.ui.define([
	'qunit/router/component/parentRoute/Parent/Component'
], function(ParentComponent) {
	"use strict";

	var Component = ParentComponent.extend("qunit.router.component.parentRoute.ParentExtended.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});

	return Component;

});
