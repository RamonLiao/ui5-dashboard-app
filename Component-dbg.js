sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
  (UIComponent, JSONModel, Device) => {
    "use strict";

    return UIComponent.extend("ui5.dashboardapp.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        // set device model
        const oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay"); // read-only; By default, models in SAPUI5 are bidirectional (TwoWay).
        this.setModel(oDeviceModel, "device");

        // create the views based on the url/hash
        this.getRouter().initialize();
      },

      getContentDensityClass() {
        return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
      },
    });
  }
);
