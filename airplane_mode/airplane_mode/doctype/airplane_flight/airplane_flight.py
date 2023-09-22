# Copyright (c) 2023, airplane_mode and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class AirplaneFlight(WebsiteGenerator):
	def on_submit(self):
		if self.status == "Scheduled":
			self.status = "Completed"