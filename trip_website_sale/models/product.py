from odoo import fields, models


class ProductTemplate(models.Model):
    _inherit = "product.template"

    blow_of_heart = fields.Boolean(string="Blow of heart")
    duration = fields.Integer(string='Duration', default=12)
    web_introduction = fields.Text(string="Introduction")
    web_tag_text = fields.Text(string='Tag H1')


class ProductPublicCategory(models.Model):
    _inherit = "product.public.category"

    res_continents_id = fields.Many2one('res.continents', string='Continents')
    website_group = fields.Selection(
        [
            ('suggestion', 'Suggestion'),
            ('country', 'Country'),
            ('multiple_country', 'Multiple Country'),
            ('rivers', 'Rivers'),
            ('themes', 'Themes'),
            ('race', 'Race'),
        ], string="Category Group")

