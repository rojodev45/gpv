from odoo import fields, models, _


class ResContinents(models.Model):
    _name = "res.continent"

    name = fields.Char(string='Continent Name', translate=True, required=True)
    display_name = fields.Char(string="Display name")
    sequence = fields.Integer(string='Sequence')


class ProductTemplate(models.Model):
    _inherit = "product.template"

    blow_of_heart = fields.Boolean(string="Blow of heart")
    duration = fields.Integer(string='Duration', default=12)
    web_introduction = fields.Text(string="Introduction")
    web_tag_text = fields.Text(string='Tag H1')

