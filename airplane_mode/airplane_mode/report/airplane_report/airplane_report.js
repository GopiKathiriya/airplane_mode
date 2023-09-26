// Copyright (c) 2023, airplane_mode and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Airplane report"] = {
	"filters": [
		{
			'fieldname': 'airline',
            'label': 'Airline',
            'fieldtype': 'Link',
            'optinos':'airline'
		},
		{
            'fieldname': 'count',
            'label': 'Count',
            'fieldtype': 'Int'
        },

	]
};


