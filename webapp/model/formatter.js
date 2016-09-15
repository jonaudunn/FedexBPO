sap.ui.define([
	"sap/ui/core/format/NumberFormat"
	] , function (NumberFormat) {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},
			
			decimalFormatter : function (sValue) {
				var oFormat = NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				}); //Returns a NumberFormat instance for float
				return oFormat.parse(sValue);
			},
			
			pathFormatter : function () {
				var sPath = this.getView().getBindingContext("loansView").getPath();
				return sPath + "/loansSet";
			}

			
		};

	}
);