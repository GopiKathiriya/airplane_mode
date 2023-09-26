import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data

def get_columns():
    columns = [
        {
            'fieldname': 'flight',
            'label': 'Flight',
            'fieldtype': 'Link',
            'options': 'Airplane Flight' 
        },
        {
            'fieldname': 'flight_price',
            'label': 'Flight Price',
            'fieldtype': 'Currency'
        },
    ]
    return columns

def get_data(filters):
    data = []

    tickets = frappe.get_all("Airplane Ticket", filters=filters, fields=["flight", "flight_price"])

    for ticket in tickets:
        data.append([ticket.flight, ticket.flight_price])

    return data
