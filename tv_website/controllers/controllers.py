# Copyright 2022 eTech SA
# License AGPL-3.0

from odoo import http
import json


class Website(http.Controller):
    @http.route('/devis', auth='user', website="True")
    def estimate_template(self, **kw):
        values = {}
        return http.request.render("tv_website.estimate_template", values)

    @http.route('/a-propos', auth='user', website="True")
    def terre_voyage_template(self, **kw):
        values = {}
        return http.request.render("tv_website.terre_voyage_template", values)

<<<<<<< HEAD
    @http.route('/contact-tv', auth='user', website="True")
    def contact_tv_template(self, **kw):
        values = {}
        return http.request.render("tv_website.contact_tv_template", values)
=======
>>>>>>> 1e8fe2997638c3526b5c7f01c2d13ac763f1c3c3
