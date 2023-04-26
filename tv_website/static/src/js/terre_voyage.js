odoo.define('jam_portal.profile_controller', function(require) {
    "use strict";
    $(document).ready(function(){
        $('#owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            items: 3,
        });
    });

    $('#cg').on('change keyup', function() {
        var thisVal = $(this).val(); $('#modal_emailnews').val() == thisVal
        }
});
});
