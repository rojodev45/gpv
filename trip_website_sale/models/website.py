from odoo import api, fields, models, _


class WebsiteTrip(models.Model):
    _inherit = 'website'

    def get_blow_of_heart(self):
        domain = [('blow_of_heart', '=', True)]
        res = self.env['product.template'].sudo().search(domain)
        return res
