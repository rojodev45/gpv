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
        $(function() {
            $('.nav-item.dropdown:first-child').hover(function() {
                $('#top_menu_collapse').css({
                    backgroundColor: 'rgb(26 45 62 / 75%)',
                    width: '90%'
                });
            }, function() {
                $('#top_menu_collapse').css({
                    backgroundColor: '',
                    width: 'fit-content'
                });
            });
        });
        $(".read-more").click(function(){
            var readMoreText = "...Plus";
            var readLessText = "Afficher moins";
            var $shortElem = $(this).parent().find(".text.short");
            var $fullElem = $(this).parent().find(".text.full");

            if($shortElem.is(":visible"))
            {
                $shortElem.hide();
                $fullElem.show();
                $(this).text(readLessText);
            }
            else
            {
                $shortElem.show();
                $fullElem.hide();
                $(this).text(readMoreText);
            }
        });
    });
});
