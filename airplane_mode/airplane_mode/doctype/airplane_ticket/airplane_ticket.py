import frappe
from frappe.model.document import Document

class AirplaneTicket(Document):
    def before_save(self):
        # Initialize total amount to the flight price
        total_amount = self.flight_price or 0

        
        for item in self.get("Airplane Ticket Add-on Item"):
            total_amount += item.amount or 0
            frappe.throw("Hello")
        # Set the calculated total amount
        self.total_amount = total_amount
