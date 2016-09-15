jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"is/applicon/test/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"is/applicon/test/test/integration/pages/Worklist",
		"is/applicon/test/test/integration/pages/Object",
		"is/applicon/test/test/integration/pages/NotFound",
		"is/applicon/test/test/integration/pages/Browser",
		"is/applicon/test/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "is.applicon.test.view."
	});

	sap.ui.require([
		"is/applicon/test/test/integration/WorklistJourney",
		"is/applicon/test/test/integration/ObjectJourney",
		"is/applicon/test/test/integration/NavigationJourney",
		"is/applicon/test/test/integration/NotFoundJourney",
		"is/applicon/test/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});