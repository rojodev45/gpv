# Copyright 2023 eTech SA
# License AGPL-3.0

{
    "name": "Trip website sale",
    "description": """
        customisation website sale for Terre Voyages""",
    "author": "eTech",
    "website": "https://www.etechconsulting-mg.com",
    "category": "",
    "version": "16.0.1.0.0",
    "license": "AGPL-3",
    "depends": [
        "website_sale",
    ],
    "data": [
        "data/data.xml",
        "security/ir.model.access.csv",
        "views/product_and_category_view.xml",
        "views/res_continents_view.xml",
    ],
    'assets': {
        },
    "application": True,
}
