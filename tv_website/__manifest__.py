# Copyright 2022 eTech SA
# License AGPL-3.0
{
    "name": "tv-website",
    "description": """
        Odoo application for tv website""",
    "author": "eTech",
    "website": "https://www.etechconsulting-mg.com",
    "category": "",
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
        # "views/contact_template.xml",
        "views/devis_template.xml",
        "views/terre_voyage_template.xml",
    ],
    'assets': {
        'web.assets_frontend': [
            'tv_website/static/src/scss/terre_voyage.scss',
            'tv_website/static/src/css/main.min.css',
            'tv_website/static/src/css/owl.carousel.css',
            'tv_website/static/src/css/owl.carousel.min.css',
            'tv_website/static/src/css/owl.theme.default.css',
            'tv_website/static/src/js/jquery-ui-1.11.1/jquery-ui.min.js',
            'tv_website/static/src/js/owl.carousel.js',
            'tv_website/static/src/js/owl.carousel.min.js',
            'tv_website/static/src/js/terre_voyage.js',
        ]
    },    "application": True,
}
