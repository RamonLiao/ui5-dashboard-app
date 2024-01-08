sap.ui.define(
  ["ui5/dashboardapp/controller/BaseController", "sap/ui/model/json/JSONModel"],
  (BaseController, JSONModel) => {
    "use strict";

    return BaseController.extend("ui5.dashboardapp.controller.Dashboard", {
      onInit: function () {
        const imgUrl = sap.ui.require.toUrl(
          "ui5/dashboardapp/images/work-smart.jpg"
        );

        this.getView().setModel(
          new JSONModel({
            avatarImg: imgUrl,
          }),
          "images"
        );

        this.getView().setModel(
          new JSONModel({
            acSlotAssigned: {
              text: "A/C Slot Assigned",
              value: 1,
              state: "Success",
            },
            assignedWorkOrders: {
              text: "Assigned Work Orders",
              value: 13,
              state: "Warning",
            },
            clockedOnJobs: {
              text: "Clocked On Jobs",
              value: 0,
              state: "Success",
            },
            missingTimesheets: {
              text: "Missing Timesheets",
              value: 3,
              state: "Error",
            },
          }),
          "employeeStats"
        );
      },
    });
  }
);
