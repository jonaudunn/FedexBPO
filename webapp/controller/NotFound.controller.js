sap.ui.define([
		"is/applicon/test/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("is.applicon.test.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);