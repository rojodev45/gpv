from odoo import http
from odoo.http import request
import json


class ControllerFooter(http.Controller):

    @http.route('/messageus', auth='user', website=True, csrf=False, methods=['POST'])
    def messageus(self, **post):
        vals = {}
        message = False
        if post.get("message"):
            message = json.dumps(post, indent=4)
            message = message.replace('{', '').replace("'", '').replace('"', '')
            message = post.get('message') + message
        Trips = http.request.env['crm.lead'].search([])
        vals = {
            "contact_name": post.get('contact_name'),
            "email_from": post.get('email'),
            "name": "Message [Footer]",
            "type": "lead",
            "description": message if message else post.get('message'),
        }

        Trips.sudo().create(vals)
        return http.request.redirect('#')
