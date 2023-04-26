from odoo import fields, models, api, _


class CrmLeadInherit(models.Model):
    _inherit = "crm.lead"

    cookies = fields.Html('Cookie', default='<div class="cookie">')

    destination = fields.Char(_('Destination'))
    circuit_title = fields.Char(_('Title Circuit'))
    departure_date = fields.Date(_('Departure Date'))
    flexible_date = fields.Boolean(_('Flexible Date'))
    flight_included = fields.Boolean(_('Flight Included'))
    duration = fields.Integer(_('Duration'))
    adult_nbr = fields.Integer(_('Adult Number'))
    child_nbr = fields.Integer(_('Child Number'))
    golfer_nbr = fields.Integer(_('Golfer Number'))
    non_golfer_nbr = fields.Integer(_('Non-Golfer Number'))
    budget = fields.Integer(_('Budget'))
    desc_project = fields.Text(_('Description Project'))
    country = fields.Char(_('Country'))
    form_type = fields.Char(_('Form Type'), readonly=True)
