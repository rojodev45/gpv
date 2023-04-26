//Hamburger menu Toggler
document.addEventListener("click", function (e) {
//     Hamburger menu
    if (e.target.classList.contains("hamburger-toggle")) {
        //~ e.target.children[0].classList.toggle("active");
    }else{
        u = $(".js-layout-close-megamenu");
        u.length && $(".js-layout-close-megamenu").click();
    }
});


// Mobile Menu
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button
$(".btn-close").click(function(e){
    $(".header .navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});

// nav active class add remove
$(".nav-link").click(function () {
    // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
    if ($(this).hasClass("active")) {
        $(".nav-link").removeClass("active");
    }
    // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
    else {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    }
});
// dropdown open close
$("#main_nav").find(".dropdown a").click(function () {
    // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
    //if ($(this).hasClass("active")) {
        //$(".dropdown").removeClass("open");
    //}
    //// Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
    //else {
        //$(".dropdown").removeClass("open");
        //$(this).addClass("open");
    //}
    $(this).toggleClass("active");
});
// Mega wrapper show hide js
$(function() {
    $('.mega').hover(function() {
        $('#parent').css('background-color', 'rgb(26 45 62 / 75%)');
    }, function() {
        // on mouseout, reset the background colour
        $('#parent').css('background-color', '');
    });
});

//  Owl carousel
$(document).ready(function () {
    $(".home_slide_box").owlCarousel({
        nav: true,
        items: 3,
        loop: true,
        margin: 15,
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
});

//  Owl carousel
$(document).ready(function () {
    $(".home_slide_box_next").owlCarousel({
        nav: true,
        items: 3,
        loop: true,
        margin: 20,
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
});


// navbar js
function genericReady() {
    var u,
        c = $(".hamburger"),
        i = $(".header .navbar"),
        n = $(".js-megamenu"),
        t = window.getComputedStyle(document.body, ":after").getPropertyValue("content"),
        o,
        h,
        v,
        g,
        y,
        p,
        s,
        w,
        b;
    objectFitImages();
    var k = function () {
            n.hasClass("in") && n.collapse("hide");
        },
        tt = function () {
            i.addClass("navbar--compact");
        },
        it = function () {
            i.removeClass("navbar--compact");
        },
        f = function (n) {
            w = n.attr("href");
            s = a.length !== 0 ? $(".navbar").height() + a.height() + 10 : $(".navbar").height() + 10;
            (t !== '"screen-md"' && (t !== '"screen-lg"' || n.hasClass("js-product-fiche-scrollTo"))) || (s += $(".js-product-tabs").height() + 30);
            $("html, body").animate({ scrollTop: $(w).offset().top - s }, 200);
        },
        r = n.find(".level-1-item.item-default");
    n.find(".level-1-item").hover(
        function () {
            r.length > 0 && !$(this).hasClass(".item-default") && (r.addClass("item-default-disable"), r.removeClass("item-default"));
        },
        function () {
            r.length > 0 && (r.removeClass("item-default-disable"), r.addClass("item-default"));
        }
    );
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
        $(".level-1-item > a").each(function () {
            $(this).on("click", function () {
                var n = $(this).parent();
                return (
                    $(this).attr("href") == "#"
                        ? $(this).attr("data-click-state") == 1
                            ? ($(this).attr("data-click-state", 0),
                              $(this).next(".level-2").height(0),
                              $(this).children(".icon-arrow-right").show(),
                              $(this).children(".icon-arrow-left").removeClass("show"),
                              $(this).blur(),
                              $(".level-1-item").removeClass("hidden-link"))
                            : ($(this).attr("data-click-state", 1),
                              $(this).next(".level-2").height("100%"),
                              $(this).children(".icon-arrow-right").hide(),
                              $(this).children(".icon-arrow-left").toggleClass("show"),
                              $(".level-1-item").addClass("hidden-link"),
                              n.removeClass("hidden-link").addClass("active-link"))
                        : (window.location = $(this).attr("href")),
                    !1
                );
            });
        });
    $(".menu-button").on("click", function () {
        n.collapse("toggle");
        $("body").hasClass("menu-burger-open") ? ($("body").removeClass("menu-burger-open"), i.css("position", "")) : ($("body").addClass("menu-burger-open"), i.css("position", ""), n.find(".item-default").click());

    });
    n.on("hide.bs.collapse", function () {
        u = $(".js-layout-close-megamenu");
        u.length && u.remove();
        c.removeClass("active");
        i.removeClass("navbar-open");
    });
    n.on("show.bs.collapse", function () {
        c.addClass("active");
        i.addClass("navbar-open");
        u = $(".js-layout-close-megamenu");
        u.length || $("body").append('<span class="js-layout-close-megamenu"></span>');
    });

    $("body").on("click", ".js-layout-close-megamenu", function () {
        k();
    });
}
function mainReady() {
    genericReady();
}
$("document").ready(function () {
    mainReady();
    $(function() {
        $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

        $( ".master" ).slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true
        });
    });
});

/* =================================
 Show More and Show Less Text in Div
====================================*/

// var minimized_elements = $('div.more_link_option');

var minimized_elements_value = $('input.more_link_option_value').val();
var maxChars = minimized_elements_value;
var ellipsis = "...";
$(".article").each(function() {
    var text = $(this).find(".text.full").text();
    var html = $(this).find(".text.full").html();
    if(text.length > maxChars)
    {
        var shortHtml = html.substring(0, maxChars - 3);
        $(this).find(".text.short").html(shortHtml);
    }else{
        var shortHtml = html.substring(0, maxChars);
        $(this).find(".text.short").html(shortHtml);
        $(".read-more").hide()
    }
});
