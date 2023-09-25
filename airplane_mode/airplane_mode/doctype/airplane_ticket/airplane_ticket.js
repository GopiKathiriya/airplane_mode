// Copyright (c) 2023, airplane_mode and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Ticket', {
    refresh: function(frm) {
        frm.add_custom_button(__('Set Seat Number'), function() {
            frappe.prompt({
                label: __('Enter Seat Number'),
                fieldname: 'seat_number',
                fieldtype: 'Data',
                reqd: 1,
            }, function(values) {
                if (values.seat_number) {
                    frm.set_value('seat', values.seat_number);
                }
            }, ('Set Seat Number'), ('Set'));
        });
    }
});

