# Copyright 2022 eTech SA
# License AGPL-3.0

from odoo import http
import json


class Website(http.Controller):
    @http.route('/devis', auth='user', website="True")
    def estimate_template(self, **kw):
        values = {}
        return http.request.render("theme_gpv.estimate_template", values)

    @http.route('/a-propos', auth='user', website="True")
    def terre_voyage_template(self, **kw):
        values = {}
        return http.request.render("theme_gpv.terre_voyage_template", values)

    @http.route('/contact-tv', auth='user', website="True")
    def contact_tv_template(self, **kw):
        values = {}
        return http.request.render("theme_gpv.contact_tv_template", values)
