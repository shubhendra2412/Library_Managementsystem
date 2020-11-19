// Copyright (c) 2020, shubhendra and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	setup: function(frm) {
		console.log("setup");
		console.log(frm);
	},

	refresh: function(frm) {
		console.log(frm);
	}
});
