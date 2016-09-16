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
			
			millionFormatter : function (sValue) {
				return sValue / 1000000;
			},
			thousundFormatter : function (sValue) {
				return sValue / 1000;
			}, 
			pathFormatter : function () {
				var sPath = this.getView().getBindingContext("loansView").getPath();
				return sPath + "/loansSet";
			},
			
			loanFormatter : function(sValue) {
				return Number.parseInt(sValue, 10).toString();
			},
			
			formatMapUrl: function(sStreet, sCity, sCountry) {
				var sResult = "";
				var sQuery = sStreet + "," + sCity + "," + sCountry;
				sResult = "https://maps.googleapis.com/maps/api/staticmap?center=" + sQuery + "&zoom=13&size=600x600&maptype=roadmap&markers=color:red|label:*|" + sQuery + "&key=AIzaSyDeTzkaVtoWwVpzrb23cgpl95iKCHrcq2A";
				return sResult;
			}
			
		};

	}
);