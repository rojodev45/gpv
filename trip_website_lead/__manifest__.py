# Copyright 2023 eTech SA
# License AGPL-3.0

{
    "name": "GPV - Lead",
    "description": """
        Odoo application for GPV""",
    "author": "eTech",
    "website": "https://www.etechconsulting-mg.com",
    "category": "",
    "version": "16.0.1.0.0",
    "license": "AGPL-3",
    "depends": [
        "base",
        "crm",
        "gpv_theme_customize",
    ],
    "data": [
        "views/crm_lead_view_form_inherit.xml",
    ],
    'assets': {
        },
    "application": True,
}
