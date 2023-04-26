from odoo import models


class WebsiteTrip(models.Model):
    _inherit = 'website'

    def get_blow_of_heart(self):
        domain = [('blow_of_heart', '=', True)]
        res = self.env['product.template'].sudo().search(domain)
        return res

    def get_continents(self):
        res = self.env['res.continents'].sudo().search([])
        return res

    def get_destination_by_continent(self, continent=None):
        if not continent:
            return []
        domain = [("website_group", "=", "country"), ("res_continents_id", "=", continent.id), ("parent_id", "=", None)]
        category_ids = self.env['product.public.category'].search(domain)
        return category_ids
