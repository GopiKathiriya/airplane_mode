// Copyright (c) 2023, airplane_mode and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Revenue report"] = {
	"filters": [
		{
			'fieldname': 'flight',
            'label': 'Flight',
            'fieldtype': 'Link',
            'optinos':'Airplane Flight'
		},
		{
            'fieldname': 'flight_price',
            'label': 'Flight Price',
            'fieldtype': 'Currency'
        },
	


	]
};

