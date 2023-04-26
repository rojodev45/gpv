# Copyright 2022 eTech SA
# License AGPL-3.0
{
    "name": "Theme GPV",
    "description": """
        Odoo application for tv website""",
    "author": "eTech",
    "website": "https://www.etechconsulting-mg.com",
    "category": "Theme",
    "version": "16.0.1.0.0",
    "license": "AGPL-3",
    "depends": [
        "base",
        "website",
        "trip_website_sale",
    ],
    "data": [
        "views/layout_template.xml",
        "views/home_template.xml",
        "views/contact_template.xml",
        "views/devis_template.xml",
        "views/terre_voyage_template.xml",
        "views/product_template.xml",
        "views/product_single_template.xml",
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_gpv/static/src/css/destination.css',
            'theme_gpv/static/src/scss/terre_voyage.scss',
            'theme_gpv/static/src/css/main.min.css',
            'theme_gpv/static/src/css/owl.carousel.css',
            'theme_gpv/static/src/css/owl.carousel.min.css',
            'theme_gpv/static/src/css/owl.theme.default.css',
            'theme_gpv/static/src/js/jquery-ui-1.11.1/jquery-ui.min.js',
            'theme_gpv/static/src/js/owl.carousel.js',
            'theme_gpv/static/src/js/owl.carousel.min.js',
            'theme_gpv/static/src/js/terre_voyage.js',
        ]
    },    "application": True,
}
