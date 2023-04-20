from odoo import fields, models, api


class CrmLeadInherit(models.Model):
    _inherit = "crm.lead"

    description = fields.Html('Cookie', default='<div class="cookie">')