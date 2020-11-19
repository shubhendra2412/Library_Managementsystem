# -*- coding: utf-8 -*-
# Copyright (c) 2020, shubhendra and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class LibraryMembership(Document):
	def before_submit(self):
		exists = frappe.db.exists(
			"Library Membership",
			{
				"library_member": self.library_member,
				"docstatus": 1,
				"to_date": (">", self.from_date),
			},
		)
		if exists:
			frappe.throw("Membership already exists")
