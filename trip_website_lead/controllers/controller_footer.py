from odoo import http
from odoo.http import request
import json
from datetime import datetime


class ControllerFooter(http.Controller):

    @http.route([
        '/messageus',
        '/contact-us',
        '/asking-quote',
        '/emailing',
    ], auth='user', website=True, csrf=False, methods=['POST'])
    def create_lead(self, **post):
        vals = {}
        Trip = http.request.env['crm.lead']
        form_type = post.get('form_type')
        print(post)
        if form_type == "Contact":
            vals = {
                "form_type": form_type,
                "contact_name": post.get('contact_name'),
                "email_from": post.get('email'),
                "phone": post.get("telephone"),
                "name": "Contact request",
                "type": "lead",
                "description": post.get('desc_projet'),
            }
        elif form_type == "Emailing":
            vals = {
                "form_type": form_type,
                "email_from": post.get('email'),
                "name": "Emailing",
                "type": "lead",
            }
        elif form_type == "Message":
            vals = {
                "form_type": form_type,
                "contact_name": post.get('contact_name'),
                "email_from": post.get('email'),
                "name": "Message [Footer]",
                "type": "lead",
                "description": post.get('message'),
            }
        elif form_type == 'Quotation':
            vals = {
                "form_type": form_type,
                "name": "Asking Quotation",
                "circuit_title": post.get('titre_circuit'),
                "cookies": post.get('cookies'),
                "destination": post.get('destination'),
                "departure_date": datetime.strptime(post.get('date_depart'), "%d/%m/%Y").date(),
                "flexible_date": True if post.get('date_flexible') == 'on' else False,
                "flight_included": True if post.get('vol_inclus') == 'on' else False,
                "duration": post.get('duree'),
                "budget": post.get('budget'),
                "adult_nbr": post.get('nb_adulte'),
                "child_nbr": post.get('nb_enfant'),
                "golfer_nbr": post.get('nb_golfeurs'),
                "desc_project": post.get('desc_projet'),
                "non_golfer_nbr": post.get('nb_non_golfeurs'),
                "contact_name": " ".join([v for v in [post.get('civilite'), post.get('nom'), post.get('prenom')] if v]),
                "zip": post.get('code_postal'),
                "city": post.get('ville'),
                "country": post.get('pays'),
                "phone": post.get('telephone'),
                "email_from": post.get('email'),
            }

        Trip.create(vals)
        return http.request.redirect('#')