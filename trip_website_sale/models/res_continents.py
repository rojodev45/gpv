from odoo import fields, models


class ResContinents(models.Model):
    _name = "res.continents"
    _description = "Continents"

    name = fields.Char(string='Continent Name', translate=True, required=True)
    display_name = fields.Char(string="Display name", translate=True)
    sequence = fields.Integer(string='Sequence')
