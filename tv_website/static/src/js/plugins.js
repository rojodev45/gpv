$.validator.addMethod('customphone', function (value, element) {
    return this.optional(element) || /^\d{10}$/.test(value) || /^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/.test(value);
}, "Veuillez fournir un numéro de téléphone valide.");

$.validator.addMethod('postalCode', function (value, element) {
    return this.optional(element) || /^\d{5}$/.test(value);
}, "Veuillez fournir un code postal valide.");


var loader = $('#pageloader');
jQuery().ajaxStart(function() {
    loader.show();
}).ajaxStop(function() {
    loader.hide();
}).ajaxError(function(a, b, e) {
    throw e;
});

/* ==============================================
 Gallerie page width 100% (images) home Bottom
 =============================================== */
$('#slides').superslides({
    animation: 'fade',
    pagination:true
});

/* =================================
 Show More and Show Less Text in Div
====================================*/

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

// Load More Button on Survey Review in Destination and Products
$(".survey-read-more").click(function(){
    var readMoreText = "Plus d'avis";
    var readLessText = "Moins d'avis";
    if ($(this).parent().parent().find(".article_survey_hidden").is(":visible")) {
        $(this).parent().parent().find(".article_survey_hidden").hide();
        $(this).text(readMoreText);
    }
    else{
        $(this).parent().parent().find(".article_survey_hidden").show()
        $(this).text(readLessText);
    }
});

//set accordion section on page
$("#accordion" ).accordion({heightStyle: "content"});


// minimized_elements.each(function(){
//     var t = $(this).html();
//     if(t.length < minimized_elements_value) return;

//     $(this).html(
//         t.slice(0,minimized_elements_value)+'<span class="more_text_dot">... </span><a href="#" class="more_text" style="color:blue; margin: 0;">Plus</a>'+
//         '<span class="less_text" style="display:none;">'+ t.slice(minimized_elements_value,t.length)+' <a href="#" class="less" style="margin: 0;color:blue;display:none;">Afficher moins</a></span>'
//     );
    
// });


// $('a.more_text', minimized_elements).click(function(event){
//     event.preventDefault();
//     $(this).hide().prev().hide();
//     $(this).next().show()
//     $('a.less').show()
// });

// $('a.less', minimized_elements).click(function(event){
    
//     event.preventDefault();
//     $('a.more_text').show()
//     $('a.less').hide()
//     $('span.more_text_dot').show()
//     $('span.less_text').hide()

// });


/* ==============================================
 Flex Slider Home Main
 =============================================== */

//~ $(window).load(function(){

    //~ 'use strict';

    //~ $('.flexslider').flexslider({
        //~ animation: "slide",
        //~ selector: ".home-slides > li",
        //~ controlNav: true,
        //~ directionNav: false ,
        //~ direction: "vertical",
        //~ start: function(slider){
            //~ $('body').removeClass('loading');
        //~ }
    //~ });
//~ });


/* ==============================================
 Flex Slider home Bottom
 =============================================== *

 $(window).load(function(){

 'use strict';

 $('.post-slide').flexslider({
 animation: "fade",
 selector: ".post-slides > .item",
 controlNav: true,
 directionNav: false ,
 direction: "vertical",
 start: function(slider){
 $('body').removeClass('loading');
 }
 });
 });

 /* ==============================================
 GalleryFull
 =============================================== */
$(function() {
    $('#slidesFull').superslides({
        play: false,
        inherit_height_from: '#sliderContenter',
        pagination: true,
        hashchange: true
    });

    $('#slidesFull').superslides('stop');
});

/* ==============================================
 Drop Down Menu Fade Effect
 =============================================== */

$('.nav-toggle').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(400);
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(400)
});

/* ==============================================
 Drop Down Menu For Mobile
 =============================================== */

$('.mobile-toggle').hover(function() {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400);
}, function() {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400)
});

/* ==============================================
 Flex Slider Testimonials
 =============================================== */

//~ $(window).load(function(){

    //~ 'use strict';

    //~ $('.testimonial').flexslider({
        //~ animation: "fade",
        //~ selector: ".testimonials .monial",
        //~ controlNav: false,
        //~ directionNav: true ,
        //~ slideshowSpeed: 7000,
        //~ direction: "horizontal",
        //~ start: function(slider){
            //~ $('body').removeClass('loading');
        //~ }
    //~ });
//~ });



/* ==============================================
 Scroll Navigation
 =============================================== */

$(function() {
    $('.scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('#navigation').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
});

/* ==============================================
 Our Works / isotope Scripts
 ===============================================	*/

$(window).load(function(){

    //~ var $container = $('.items');

    //~ $container.isotope({
        //~ itemSelector : '.work'
    //~ });


    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
        } else {
            // otherwise, apply new options
            $container.isotope( options );
        }

        return false;
    });


});

/* ==============================================
 Page Loader
 =============================================== */

'use strict';

$(window).load(function() {
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(1200).fadeOut("slow");
});

/* ==============================================
 Parallax Calling
 =============================================== */


( function ( $ ) {
    'use strict';
    //~ $(document).ready(function(){
        //~ $(window).bind('load', function () {
            //~ parallaxInit();
        //~ });
        //~ function parallaxInit() {
            //~ testMobile = isMobile.any();
            //~ if (testMobile == null)
            //~ {
                //~ /*$('.image1').parallax("50%", 0.5);
                 //~ $('.image2').parallax("50%", 0.5);
                 //~ $('.image3').parallax("50%", 0.5);
                 //~ $('.image4').parallax("50%", 0.5);*/
                //~ $('.parallax').parallax("50%", 0.5);
                //~ $('.parallax1').parallax("50%", 0.5);
                //~ $('.parallax2').parallax("50%", 0.5);
                //~ $('.parallax3').parallax("50%", 0.5);
                //~ $('.parallax4').parallax("50%", 0.5);
                //~ $('.defaultimg').parallax("50%", 0.5);
            //~ }
        //~ }
        //~ parallaxInit();
    //~ });
//Mobile Detect
    var testMobile;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
}( jQuery ));

/* ==============================================
 Carousel Slider
 =============================================== */

$(document).ready(function($) {
    'use strict';
    //~ $(".slide-boxes").owlCarousel({
        //~ // Navigation
        //~ navigation : false,
        //~ navigationText : ["prev","next"],
        //~ rewindNav : false,
        //~ scrollPerPage : false,
        //~ autoPlay : false,

        //~ //Pagination
        //~ pagination : false,
        //~ paginationNumbers: false,
    //~ });
    
  if ( !$(".slide-boxes").hasClass('owl-loaded') ){
    $(".slide-boxes").owlCarousel({
        nav: false,
        items: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 30,
            },
        },
    });
 }
});

jQuery(document).ready(function () {

        /* Produit*/
        $("input.star_rate_option_value").rating({
            starCaptions: function(val) {
                return '<span class="linedeco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> '+val+'/5 <span class="linedeco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
            },
            starCaptionClasses: function(val) {
                if (val < 3) {
                    //   return 'hide';
                } else {
                    // return 'hide';
                }
            },
            readonly: true,
            showClear: false,
            showCaption: true
        });

    /*Avis clients*/
    $("#totalrating").rating({
        starCaptions: function(val) {
            return '<span class="linedeco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> '+val+'/5 <span class="linedeco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
        },
        starCaptionClasses: function(val) {
            if (val < 3) {
                //   return 'hide';
            } else {
                // return 'hide';
            }
        },
        readonly: true,
        showClear: false,
        showCaption: true
    });

    $("#avis1").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis2").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis3").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis4").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis5").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis6").rating({readonly: true, showClear: false, showCaption: false});
    $("#avis7").rating({readonly: true, showClear: false, showCaption: false});

});



/* ==============================================
 Navigation Menu, Sticky
 =============================================== */

//~ $(window).load(function(){
    //~ 'use strict';
    //~ $("#navigation").sticky({ topSpacing: 0 });
//~ });

/* --- Menu Classique --- */
function menu_close_allsub(){

    $('#destinations').fadeOut();
    $('.menu_dest a').removeClass('active');
    $('#themes').fadeOut();
    $('.menu_them a').removeClass('active');
    $('.menu_bateaux a').removeClass('active');

}
$(document).ready(function() {

    ////////// MENU DESTINATION ///////////
    $('.menu_dest').hover(
        function () {

            $('#themes').fadeOut(500);
            $('.menu_them a').removeClass('active');
            $('.menu_bateaux a').removeClass('active');
            if($('#destinations').delay(600).stop( true, true ).is(":hidden")){
                $('#destinations').fadeIn(500);}
            $('.menu_dest a').addClass('active');

        },
        function () {
            $('#destinations').hover(
                function(){if($('#destinations').delay(600).stop( true, true ).is(":hidden")){$(this).fadeIn(500);}},
                function(){$(this).delay(100).fadeOut(500); $('.menu_dest a').removeClass('active');}
            );
        }
    );

    ////////// MENU THEME //////////////

    $('.menu_them').hover(
        function () {
            $('#destinations').fadeOut(500);
            $('.menu_dest a').removeClass('active');
            if($('#themes').delay(600).stop( true, true ).is(":hidden")){
                $('#themes').fadeIn(500);}
            $('.menu_them a').addClass('active');
        },
        function () {
            $('#themes').hover(
                function(){if($('#themes').delay(600).stop( true, true ).is(":hidden")){$(this).fadeIn(500);}},
                function(){$(this).delay(100).fadeOut(500); $('.menu_them a').removeClass('active');}
            );
        }
    );


    $('.menu_devis').hover(function() {menu_close_allsub()});
    $('.menu_conseil').hover(function() {menu_close_allsub()});
    $('#navigation').hover(function() {menu_close_allsub()});
    $('#logo').hover(function() {menu_close_allsub()});
    $('.menu_offer').hover(function() {menu_close_allsub();});
    $('.menu_bateaux').hover(function() {menu_close_allsub();});
});

/*  Menu Mobile */

//~ $(document).ready(function() {
    //~ $('#left-menu').sidr({
        //~ name: 'sidr-left',
        //~ side: 'left' // By default
    //~ });
    //~ $('#center-menu').sidr({
        //~ name: 'sidr-center',
        //~ side: 'left' // By default
    //~ });
    //~ $('#right-menu').sidr({
        //~ name: 'sidr-right',
        //~ side: 'right'
    //~ });




    //~ $('#ret-right').sidr({
        //~ name: 'sidr-right',
        //~ side: 'right'
    //~ });


    //~ $('#ret-left').sidr({
        //~ name: 'sidr-left',
        //~ side: 'left' // By default
    //~ });
    //~ $('#ret-center').sidr({
        //~ name: 'sidr-center',
        //~ side: 'left' // By default
    //~ });

    //~ $('.sidr-item li').click(function(){
        //~ $('+ li ul', this).toggleClass('visible');
    //~ });


//~ });

//~ $( window ).resize(function() {
    //~ $.sidr('close', 'sidr-left');
    //~ $.sidr('close', 'sidr-center');
    //~ $.sidr('close', 'sidr-right');
//~ });



//~ $( document ).ready(function() {

    //~ $('.mbutton').click(function(){
        //~ $(this).toggleClass('mopen');
    //~ });


//~ });





/* ==============================================
 Load Project
 =============================================== *//*
$('.carousel').on('slide.bs.carousel', function () {
    'use strict';
    $('.carousel').carousel({
        interval: 3000
    })
})*/

/* ==============================================
 Video Script
 =============================================== */

//~ jQuery(function(){
    //~ jQuery(".player").mb_YTPlayer();
//~ });

/* ==============================================
 Revolution Slider
 =============================================== */

//~ var revapi;

//~ jQuery(document).ready(function() {

    //~ revapi = jQuery('.tp-banner').revolution(
        //~ {
            //~ delay:8000,
            //~ startwidth:1170,
            //~ startheight:500,
            //~ hideThumbs:10,
            //~ fullWidth:"off",
            //~ forceFullWidth:"off",
            //~ navigationType : "none"

        //~ });

//~ });	//ready



/* ==============================================
 Revolution Slider Ful Screen
 =============================================== */

//~ var revapi;

//~ jQuery(document).ready(function() {

    //~ setTimeout(function(){
        //~ $("#produits a[href='/voyage-nil']").click();
    //~ }, 500);

    //~ revapi = jQuery('.tp-banner-fs').revolution(
        //~ {
            //~ delay:15000,
            //~ startwidth:1170,
            //~ startheight:500,
            //~ hideThumbs:10,
            //~ fullWidth:"off",
            //~ fullScreen:"on",
            //~ fullScreenOffsetContainer: ""
        //~ });

//~ });	//ready

/* ==============================================
 Fit Videos
 =============================================== */
//~ $(window).load(function(){
    //~ $(".fit-vids").fitVids();
//~ });

/* ==============================================
 Back To Top Button
 =============================================== */

$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

/* ==============================================
 Count Factors
 =============================================== */


//~ jQuery(function() {
    //~ $(".facts").appear(function(){
        //~ $('.facts').each(function(){
            //~ var dataperc;
            //~ dataperc = $(this).attr('data-perc'),
                //~ $(this).find('.factor').delay(6000).countTo({
                    //~ from: 50,
                    //~ to: dataperc,
                    //~ speed: 3000,
                    //~ refreshInterval: 50,

                //~ });
        //~ });
    //~ });
//~ });

/* ==============================================
 Infinite scroll
 =============================================== */


/*Galerie*
 $('.more').ScrollAppear({
 TriggerType : "scroll",
 ElementAffect: '.hide',
 AddClass: 'visible',
 ElementsToShow : 6,
 });
 /**/

/*Pays this work*/
if ($('.showmore').length > 0){
    $('.showmore').ScrollAppear({
        TriggerType : "click",
        ElementAffect: 'li.product',
        AddClass: 'showthis',
        ElementsToShow : 6,
    });
    // gestion des hr auto
    $('.product hr').removeClass();
    $('.product.showthis:eq(0) hr').addClass('hide');
    $('.product.showthis:eq(1) hr').addClass('hidden-md').addClass('hidden-lg');
    $('#listFleuve .product.showthis:eq(1) hr').delay(500).removeClass('hidden-md').removeClass('hidden-lg');
}

/* ==============================================
 Select change to url
 =============================================== */

// bind change event to select
function bindFilter(show) {
    // default value
    show = typeof show !== 'undefined' ? show : "0";
    $('.product.showthis').fadeOut("slow", function() {
        $('.product.showthis').removeClass('showthis');
        $('.product').removeAttr("style");
    });

    if (show != 0) {
        window.location.hash = encodeURIComponent(show); // ajoute une encre à l'url

        $(".product[data-tags*='" + show + "']:lt(6)").fadeIn(
            "slow",
            function() {
                $(".product[data-tags*='" + show + "']:lt(6)").addClass(
                    'showthis');
            });

        if ($(".product[data-tags*='" + show + "']").length > 6) {
            $('.showmore').removeClass('hide');
            $('.showmore').ScrollAppear({
                TriggerType : "click",
                ElementAffect : ".product[data-tags*='" + show + "']",
                AddClass : 'showthis',
                TriggerIntent : true,
                ElementsToShow : 6
            });
        } else {
            $('.showmore').addClass('hide');
        }

        $('.product hr').removeClass();
        $(".product[data-tags*='" + show + "']:eq(0) hr").addClass('hide');
        $(".product[data-tags*='" + show + "']:eq(1) hr").addClass('hidden-md')
            .addClass('hidden-lg');
        // $('#listFleuve .product.showthis:eq(1) hr').delay(500).removeClass('hidden-md').removeClass('hidden-lg');
    } 
    else {
        window.location.hash = ''; //supprime l'encre
        $(".product:lt(6)").fadeIn("slow", function() {
            $(".product:lt(6)").addClass('showthis');
        });

        if ($('.product').length > 6) {
            $('.showmore').removeClass('hide');
            $('.showmore').ScrollAppear({
                TriggerType : "click",
                ElementAffect : 'li.product',
                AddClass : 'showthis',
                TriggerIntent : true,
                ElementsToShow : 6
            });
        } else {
            $('.showmore').addClass('hide');
        }

        $('.product hr').removeClass();
        $('.product:eq(0) hr').addClass('hide');
        $('.product:eq(1) hr').addClass('hidden-md').addClass('hidden-lg');
        // $('#listFleuve .product.showthis:eq(1) hr').delay(500).removeClass('hidden-md').removeClass('hidden-lg');
    }
    return false;
}

$(function() {

    // select tags liste dynamique
    var listeTags = [];
    var listeUniqueTags = [];
    $("#listproduct .product[data-tags]").map(
        function() {
            listeTags.push.apply(listeTags, $(this).attr('data-tags')
                .split(', '));
        });

    for (i = 0; i < listeTags.length; i++) {
        if (jQuery.inArray(listeTags[i], listeUniqueTags) === -1)
            listeUniqueTags.push(listeTags[i]);
    }
    if ($('#dynamic_select option').length == 0) {
        // si on est sur la page pays ou theme avec plus de 6 produits et tags > 1 => crée dynamiquement le select
        if ( ($('#pays[data-page="Pays"]').length || $('#pays[data-page="Themes"]').length ) && $('.product').length > 6 && listeUniqueTags.length > 0) {
            filtreName = $('#pays[data-page="Pays"]').length ? "thématique" : "pays";
            listeUniqueTags.sort();
            selectedListeTags = '<form class="text-center Menupays" style="margin-top:5px;"><div class="row inner text-center" style="padding-top: 5px;padding-bottom: 0px;">Filtrer par ' + filtreName + ' <select id="dynamic_select"><option value="0">Tous les voyages</option></div></form>';
            for (i = 0; i < listeUniqueTags.length; i++) {
                selectedListeTags += '<option value="' + listeUniqueTags[i] + '">'
                + listeUniqueTags[i] + '</option>';
            }
            selectedListeTags += '</select></div></form>';
            $('#listproduct').before(selectedListeTags);
        }
    }

    $('#dynamic_select').bind('change', function() {
        bindFilter($(this).val());
    });

    $('.dynamic_select_redirect').bind('change', function() {
        var show = $(this).val(); // get selected value
        window.location.href = show;
        return false;
    });

    // si on est sur la page pays ou theme filtre la page en fonction de l'encre contenu dans l'url
    if (location.hash != "" && ($('#pays[data-page="Pays"]').length > 0  || $('#pays[data-page="Themes"]').length > 0 )) {
        var target = decodeURIComponent(location.hash.split("#")[1]);
        if (jQuery.inArray(target, listeUniqueTags) !== -1) {
            bindFilter(target);
            $('#dynamic_select option[value="' + target + '"]').attr(
                "selected", "selected");
        }
    }

});

$('li.product').click(function() {
    window.location.href = $(this).attr('data-url');
});

/* ==============================================
 Header slide fix descriptif
 =============================================== */

$('a.UPDesc').click(function() {
    $('.Content-descriptif-post-img').toggleClass('Up');
});

/* ==============================================
 Devis page
 =============================================== */

$(function(){
    if ( $('input#date_depart').length ) {
        $( "input#date_depart" ).datepicker();
    }
    // set input hidden name='titre_circuit'
    if ( $('#titre_circuit').length ) {
        $("input[name='titre_circuit']").val( $('#titre_circuit').html() );
    }

    //get a reference to the select element

    var $selectDestinations = $('#destination');
    var $selectPays = $('select#pays');
    //request the JSON data and parse into the select element
    $.getJSON('/terre_voyages/static/src/js/country.json', function(data){
        var selectedValues = new Array();

        //iterate over the data and append a select option
        $.each(data, function(key, val){
            $selectDestinations.append('<option value="' + val + '" >' + val+ '</option>');
            $selectPays.append('<option value="' + val + '" >' + val+ '</option>');
        });

        var cont = 0;
        $(".loadPaysSelect2").each(function(){
            selectedValues[cont] = $(this).attr("data-tags");
            cont ++;
        });
        $selectDestinations.val(selectedValues).select2();

        var DefPays = new Array();
        DefPays[0] = "France";
        $selectPays.val(DefPays);
    });

});


(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null  // callback method for when the element finishes updating
    };

    /* ==============================================
     galerie fullpage
     =============================================== */

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "fade",
            selector: ".slides > .item",
            controlNav: false,
            directionNav: true ,
            smoothHeight: true,
            direction: "vertical",
            animationLoop: false,
            slideshow: false,
            video: true,
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
    });

    /* ==============================================
     Infos Pays - Presse - Insciption & assurances
     =============================================== */

    $( document ).ready(function() {
        if($( "#contentTabSlide" ).is(':visible')){
            $( "#contentTabSlide" ).tabs({
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "slide",
                    duration: 500
                }
            }) ;
        }
    });

})(jQuery);

/* ==============================================
 INFO COOKIE
 =============================================== */
// data from the __utmz cookie
function get_query_string_paramerer(param) {
    var regex = new RegExp("[?&]"+encodeURIComponent(param)+"=([^&]*)");
    var match = regex.exec(location.search);
    if(match) {
        return decodeURIComponent(match[1]);
    }
    else {
        return '-';
    }
}

function get_utm(){
    var session = new Object();
    session['source']   = get_query_string_paramerer('utm_source');     // campaign source
    session['support']  = get_query_string_paramerer('utm_medium');     // campaign medium
    session['campaign'] = get_query_string_paramerer('utm_campaign');   // campaign name
    session['term']     = get_query_string_paramerer('utm_term');       // campaign term (keyword)
    session['content']  = get_query_string_paramerer('utm_content');    // campaign content
    // Google AdWords - The gclid is ONLY present when auto tagging has been enabled.
    var gclid = get_query_string_paramerer('gclid');
    if (gclid != "-") {
        session['source']  = 'google';
        session['support'] = 'cpc';
    }
    // Referer
    if(document.referrer>0)
        session['referer'] = document.referrer;
    // Date
    var fDate = new Date();
    var d = fDate.getDate();
    var m =  fDate.getMonth();
    m += 1;  // JavaScript months are 0-11
    var y = fDate.getFullYear();
    var H = fDate.getHours();
    var i = fDate.getMinutes();
    var s = fDate.getSeconds();
    var formatedDate = y+ ":" + m + ":" + d +" " + H + ":" + i + ":" + s;
    session['date'] = formatedDate;
    return session;
}

// $( document ).ready(function() {
//     var jsonstr = JSON.stringify(get_utm());
//     var request = $.ajax({
//         type: "GET",
//         url: "https://r.terre-voyages.com/cookie/tvsas",
//         //       url: "cookie/tvsasCookie",
//         cache: false,
//         data: {"tvsas" : jsonstr},
//         dataType: "jsonp",
//         crossDomain: true
//     });
//     request.done(function( msg ) {
//         $("input[name='cookie']").val( msg );
//     });
// });

//page confirmation
var postEmailValue = get_query_string_paramerer('email');
if ( postEmailValue != '-'){
    $("#contactpage form#newsletterpage input[name='email']").val( postEmailValue );
    $("#contactpage #postEmailValue").html( postEmailValue );
}

// bind change event to select Destination and River for Boat
function bindFiltercateg(show) {
    // default value
    show = typeof show !== 'undefined' ? show : "0";
    $('.bateaux_list_item.showthis').fadeOut("slow", function() {
        $('.bateaux_list_item.showthis').removeClass('showthis');
        $('.bateaux_list_item').removeAttr("style");
    });

    if (show != 0) {
        // window.location.hash = encodeURIComponent(show); // ajoute une encre à l'url
        for (var i=0; i<show.length; i++){ 
            $(".bateaux_list_item[data-tags*='" + show[i].id + "']").fadeIn(
                "slow",
                function() {
                    for (var j=0; j<show.length; j++){ 
                        $(".bateaux_list_item[data-tags*='" + show[j].id + "']").addClass(
                            'showthis'
                        );
                }
            });

            $(".bateaux_list_item[data-tags*='" + show[i].name + "']:eq(0) hr").addClass('hide');
            $(".bateaux_list_item[data-tags*='" + show[i].name + "']:eq(1) hr").addClass('hidden-md')
                 .addClass('hidden-lg');
        }

    } else {
        window.location.hash = ''; //supprime l'encre
        $(".bateaux_list_item").fadeIn("slow", function() {
            $(".bateaux_list_item").addClass('showthis');
        });

        $('.bateaux_list_item:eq(0) hr').addClass('hide');
        $('.bateaux_list_item:eq(1) hr').addClass('hidden-md').addClass('hidden-lg');
    }
    return false;
}


$(function() {

    $('#fleuves_list_categ, #destination_list_categ').on('change', function() {
        var destination_id = 'False';
        var fleuves_id = 'False';
        var fleuves_list = $('#fleuves_list_categ');
        var destination_list = $('#destination_list_categ');
        url = "/action_get_bateaux/"
        if (this.id == "destination_list_categ") {
            var destination_id = this.value ? this.value : 'False';
            url = url + destination_id;
            fleuves_list.val('');
        }
        if (this.id == "fleuves_list_categ") {
            var fleuves_id = this.value ? this.value : 'False';
            url = url + fleuves_id;
            destination_list.val('');
        }
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            success: function(data) {
                if (data.length > 0){
                    bindFiltercateg(data);
                }
                // else {
                //     bindFiltercateg('');
                // }
                else if ( data.length == 0  && ! url.includes("False")){
                    bindFiltercateg('None');
                }
                if (url.includes("False")) {
                    bindFiltercateg('');
                }
            }
        });
    });
});
