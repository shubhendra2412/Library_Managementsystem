// Copyright (c) 2020, shubhendra and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {


	setup: function(frm) {
		console.log('setup');
		console.log(frm);

	},
	refresh: function(frm) {
		console.log('refresh');
		console.log(frm);
	

    },
    after_save: function(frm) {
		frappe.msgprint("article saved");
	},

	article_name: function(frm) {
		console.log(frm.doc.article_name);
	}
	

    

});
