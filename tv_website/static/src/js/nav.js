function stickyCta() {
    if ($(".sticky-cta").length > 0) {
        var t = $(".nav-tabs").offset().top,
            n = $(window),
            i = function () {
                n.scrollTop() >= t && $(".sticky-cta, .syntheseproduit-sticky").addClass("stick-it");
                n.scrollTop() < t && $(".sticky-cta, .syntheseproduit-sticky").removeClass("stick-it");
            };
        i();
        n.scroll(function () {
            i();
        });
    }
}
function mySelection() {
    var n, t;
    $.cookie("myselection") != null &&
        ((n = $.cookie("myselection", { path: "/" })),
        n == null || n == "" ? ($("#yourSelectionNoLink").show(), $("#yourSelectionLink").hide()) : n != null && ((t = n.split("_")), $("#nbMySelection").append(t.length), $("#yourSelectionLink").show(), $("#yourSelectionNoLink").hide()));
}
function setCookies(n, t, i, r, u, f) {
    var e = $.cookie(n, { path: "/" }),
        s,
        o;
    e == null || e == ""
        ? ($.cookie(n, i, { expires: u, path: "/" }), $("#nbMySelection").empty().append(1), $("#yourSelectionLink").show(), $("#yourSelectionNoLink").hide(), $("#addToMySelection" + t).hide(), $("#productAlreadySelected" + t).show())
        : e.indexOf(i) != -1 ||
          ((o = e.split("_")),
          o.length < maxselection
              ? ((i = e + "_" + i),
                $.cookie(n, i, { expires: u, path: "/" }),
                (s = $.cookie(n, { path: "/" })),
                s != null && ((o = s.split("_")), $("#nbMySelection").empty().append(o.length), $("#yourSelectionLink").show(), $("#yourSelectionNoLink").hide(), $("#addToMySelection" + t).hide(), $("#productAlreadySelected" + t).show()))
              : jAlert("Merci de ne s&eacute;lectionner que " + maxselection + " circuits au maximum"));
    f;
}
function deleteCookiesAll(n, t) {
    $.cookie(n, "", { expires: t, path: "/" });
    $('span[id*="addToMySelection"]').show();
    $('span[id*="productAlreadySelected"]').hide();
    $("#yourSelectionNoLink").show();
    $("#yourSelectionLink").hide();
}
function InitCookies() {
    var n = $.cookie("myselection", { path: "/" }),
        t,
        i;
    if (n != undefined && n != null && n != "")
        if (n.indexOf("_") != -1) {
            if (((t = n.split("_")), t != undefined && t != null && t.length > 0)) for (i = 0; i < t.length; i++) setAddLabel(t[i]);
        } else setAddLabel(n);
}
function deleteCookies(n, t, i, r, u, f) {
    var e = $.cookie(n, { path: "/" }),
        s = t + "_",
        h = "_" + t,
        o;
    e != null &&
        e != "" &&
        ((e = e.replace(s, "")), (e = e.replace(h, "")), (e = e.replace(t, "")), $.cookie(n, e, { expires: u, path: "/" }), (strCookie = $.cookie(n, { path: "/" })), strCookie != null && strCookie != "" && (o = strCookie.split("_")));
    f && (strCookie != null && strCookie != "" && o.length < 5, $("#vSelection" + t).remove());
    $("#addToMySelection" + t).show();
    $("#productAlreadySelected" + t).hide();
    strCookie != null && strCookie != "" ? $("#nbMySelection").empty().append(o.length) : ($("#yourSelectionNoLink").show(), $("#yourSelectionLink").hide());
}
function setAddLabel(n) {
    var t = $.cookie("myselection", { path: "/" });
    t != null && t != "" && (t.indexOf(n) != -1 ? ($("#addToMySelection" + n).hide(), $("#productAlreadySelected" + n).show()) : ($("#addToMySelection" + n).show(), $("#productAlreadySelected" + n).hide()));
}
function sliderStrateActus() {
    if ((console.log("loaded"), $(".strate-banner").length > 0)) {
        console.log("strate banner is here");
        var n = $(".strate-banner");
        n.owlCarousel({
            loop: !0,
            mouseDrag: !1,
            navSpeed: 800,
            smartSpeed: 800,
            dotsSpeed: 800,
            navClass: ["nav-button nav-prev icon-arrow-left", "nav-button nav-next icon-arrow-right"],
            navText: [""],
            dotsClass: "nav-dots",
            dotClass: "dot-item",
            lazyLoad: !0,
            items: 1,
            dotsEach: 1,
            responsive: { 0: { dots: !0, nav: !1 }, 768: { dots: !0, nav: !1 }, 1024: { dots: !0, nav: !1 }, 1025: { dots: !1, nav: !0 } },
        });
    }
}
function sliderStrateProduits() {
    if ($(".strate-produit").length > 0) {
        var n = $(".strate-produit");
        main.sliderResponsive(n, 3, { responsive: { 0: { slideBy: 1 }, 768: { slideBy: 2 }, 1024: { slideBy: 3 }, 1025: { slideBy: 3 } } });
    }
}
function sliderBonsplans() {
    if ($(".bons-plans").length > 0) {
        var n = $(".bons-plans");
        main.sliderResponsive(n, 3);
    }
}
function sliderLrUnivers() {
    if ($(".slider-reinsurance").length > 0) {
        var n = $(".slider-reinsurance");
        main.slider(n, 1, { items: 1, dots: !0, nav: !1, autoplay: !0, autoplayTimeout: 6e3, autoplayHoverPause: !0 });
    }
}
function sliderExplorateurs() {
    if ($(".slider-explorateurs").length > 0) {
        var n = $(".slider-explorateurs");
        main.sliderResponsive(n, 3);
    } else alert("Aucun slider Explorateur");
}
function sliderAvis() {
    if ($(".slider-avis").length > 0) {
        var n = $(".slider-avis");
        n.find(".avis").length >= 1 &&
            (n.find(".thumbnail").unwrap(),
            n.addClass("owl-carousel"),
            n.owlCarousel({
                loop: !0,
                mouseDrag: !1,
                navSpeed: 800,
                smartSpeed: 800,
                dotsSpeed: 800,
                margin: 30,
                navClass: ["nav-button nav-prev icon-arrow-left", "nav-button nav-next icon-arrow-right"],
                navText: [""],
                dotsClass: "nav-dots",
                dotClass: "dot-item",
                lazyLoad: !0,
                responsive: { 0: { items: 1, dots: !0, nav: !1 }, 768: { items: 1, dots: !0, nav: !1, dotsEach: 1 }, 1024: { items: 1, dots: !0, nav: !1, dotsEach: 1 }, 1025: { items: 1, dots: !1, nav: !0 } },
            }));
    }
}
function sliderExtensions() {
    if ($(".slider-extensions").length > 0) {
        var n = $(".slider-extensions");
        main.sliderResponsive(n, 3);
    }
}
function genericReady() {
    function d(n, t, i, r) {
        var u = $("#" + i).val(),
            f;
        u == "" && (u = "{}");
        f = u.indexOf("," + n) != -1 || u.indexOf("{" + n) != -1 || u.indexOf(n + "}") != -1;
        r && !f
            ? (u = u == "{}" ? u.replace("}", n + "}") : u.replace("}", "," + n + "}"))
            : !r &&
              f &&
              (u = u
                  .replace("{" + n + ",", "{")
                  .replace("{" + n, "{")
                  .replace("," + n + "}", "}")
                  .replace(n + "}", "}")
                  .replace("," + n, ""));
        u = u.replace("{", "").replace("}", "");
        u = "{" + u + "}";
        $("#" + i).val(u);
    }
    var e;
    document.cookie.indexOf("InscriAdvize=") >= 0 && ($.cookie("InscriAdvize") == "true" || ((e = new Date()), e.setTime(e.getTime() + 3888e6), (document.cookie = "InscriAdvize=true;path=/;expires=" + e.toGMTString())));
    var u,
        c = $(".icon-menu"),
        i = $(".navbar"),
        n = $(".js-megamenu"),
        l = $(".search-wrapper"),
        a = $(".syntheseproduit-sticky"),
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
        nt = function () {
            l.hasClass("search-wrapper-show") &&
                (l.removeClass("search-wrapper-show"), $("body").removeClass("body-search"), t === '"screen-xs"' && ($(".search-icon").removeClass("hide"), $(".navbar-search.icon-search-close").removeClass("show")));
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
        $("body").hasClass("menu-burger-open") ? ($("body").removeClass("menu-burger-open"), i.css("position", "")) : ($("body").addClass("menu-burger-open"), i.css("position", "fixed"), n.find(".item-default").click());
        nt();
    });
    n.on("hide.bs.collapse", function () {
        u = $(".js-layout-close-megamenu");
        u.length && u.remove();
        c.removeClass("open");
        i.removeClass("navbar-open");
    });
    n.on("show.bs.collapse", function () {
        c.addClass("open");
        i.addClass("navbar-open");
        u = $(".js-layout-close-megamenu");
        u.length || $("body").append('<span class="js-layout-close-megamenu"></span>');
    });
    $("body").on("click", ".js-layout-close-megamenu", function () {
        k();
    });
    $(".js-display-searchbar").on("click", function () {
        $(".search-wrapper").toggleClass("search-wrapper-show");
        $("body").toggleClass("body-search");
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ($(".search-icon").toggleClass("hide"), $(".navbar-search.icon-search-close").toggleClass("show"));
        k();
    });
    $(document).mouseup(function (n) {
        var t = $(".main-search-form, .datepicker ");
        t.is(n.target) || t.has(n.target).length !== 0 || ($("#dropdownCountry").removeClass("show"), $("#dropdownTheme").removeClass("show"));
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            ($(".search-wrapper-show").hasClass("nothomepage") && !t.is(n.target) && t.has(n.target).length === 0 && ($(".nothomepage").removeClass("search-wrapper-show"), $("body").removeClass("body-search")));
    });
    i.length && ((o = $(".js-nav-sticky-target")), (h = 550), (v = 450), (g = 20), o.length && ((y = o.height()), (p = o.offset().top), (h = y + p), (v = h - 100)));
    navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry|iPad/i)
        ? $(".form-control.js-datepicker").each(function () {
              $(this).attr("type", "date");
          })
        : $(".form-control.js-datepicker").length && ($(".form-control.js-datepicker").attr("autocomplete", "off"), $(".form-control.js-datepicker").datepicker({ language: "fr", autoclose: !0 }));
    $(".js-trigger-popover-hover").popover({
        trigger: "hover",
        html: !0,
        content: function () {
            return $(this).find(".content-popover").html();
        },
    });
    $(".js-trigger-popover-click").popover({
        html: !0,
        content: function () {
            return $(this).find(".content-popover").html();
        },
    });
    t === '"screen-xs"' && ((b = $(".js-cloneto-readmore-content")), $(".js-clonetoTarget-readmore-content").find(".row:first-child").before(b));
    $(".js-filtermore-button").on("click", function () {
        $(this).next(".js-filtermore-content").toggleClass("show");
    });
    $(".js-display-filter").on("click", function () {
        $(".sticky-filters").toggleClass("show");
        $(".sticky-filters").hasClass("show") ? $(".js-display-filter").text("Cacher les filtres") : $(".js-display-filter").text("Filtrer");
    });
    $(".js-open-and-scrollto").on("click", function (n) {
        $(this).attr("href")[0] == "#" && (n.stopPropagation(), n.preventDefault());
        $(this).tab("show");
        f($(this));
        $(".js-toInactive").removeClass("active");
        $(".js-toActive").addClass("active");
    });
    $("a.nf-review, a.carousel-review, a.js-product-fiche-scrollTo").on("click", function (n) {
        $(this).attr("href")[0] == "#" && (n.stopPropagation(), n.preventDefault());
        f($(this));
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
        $(this).hasClass("nav--modal") || f($(this));
    });
    $(".js-product-fiche-tableTitle span").on("click", function () {
        $(".js-product-fiche-tableTitle span").not(this).parent().removeClass("active");
        $(this).parent().toggleClass("active");
    });
    (t === '"screen-xs"' || t === "") && ($(".product-fiche-right h4").hide(), $(".product-fiche-right h5").hide());
    $(".js-product-fiche-right-upperTitle").on("click", function () {
        var n = $(this);
        (t === '"screen-xs"' || t === "") &&
            ($(".js-product-fiche-right-upperTitle").not($(this)).nextUntil("h3").slideUp(),
            setTimeout(function () {
                f(n);
                $(n).nextUntil("h3").slideToggle();
            }, 300));
    });
    $(".js-product-fiche-scrollTo").on("click", function () {
        f($(this));
    });
    $(".js-salleEmbarquement-withMe").on("click", function (n) {
        n.stopPropagation();
        $(this).parent("tr").toggleClass("expanded");
        $(this).parent("tr").next().toggle();
    });
    $(".jsbd-newsletter-expand").on("click", function () {
        var t = $(this).text(),
            n = { textOpen: "Créer une alerte", textClose: "Fermer" };
        t === n.textOpen ? $(this).text(n.textClose) : $(this).text(n.textOpen);
        $(this).parents(".newsletterAlert").find(".newsletterAlert-body").slideToggle();
    });
    $("#map-name").length &&
        $.cachedScript("/Content/js/app.js").done(function () {
            $(".svgmap-loader").fadeOut();
        });
    $(".modal").on("hidden.bs.modal", function () {
        var n = this.querySelector("iframe"),
            t = this.querySelector("video"),
            i;
        n && ((i = n.src), (n.src = i));
        t && t.pause();
    });
    initLoryModal();
    initLory();
    $(".js-readmore-toadd").each(function () {
        $(this).addClass("js-readmore-content");
    });
    readMore();
    $("[data-clampedwidth]").each(function () {
        var n = $(this),
            i = n.data("clampedwidth"),
            t = function () {
                var t =
                    $(i).width() - parseInt(n.css("paddingLeft")) - parseInt(n.css("paddingRight")) - parseInt(n.css("marginLeft")) - parseInt(n.css("marginRight")) - parseInt(n.css("borderLeftWidth")) - parseInt(n.css("borderRightWidth"));
                n.css("width", t);
            };
        t();
        $(window).resize(t);
    });
    $("#sticky-box").length &&
        $("#sticky-box").affix({
            offset: {
                top: $("#sticky-box").offset().top - 70,
                bottom: function () {
                    if ($(".js-sticky-limit-bottom").length)
                        var n = $(document).height(),
                            t = $(".js-sticky-limit-bottom").offset().top,
                            i = n - t + 20;
                    else
                        var r = $("#pre-footer").outerHeight(!0) || 0,
                            u = $("#footer").outerHeight(!0) || 0,
                            i = r + u + 40;
                    return (this.bottom = i);
                },
            },
        });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
        $(window).resize();
        $("#sticky-box-tab").length &&
            $("#sticky-box-tab").affix({
                offset: {
                    top: $("#sticky-box-tab").offset().top - 70,
                    bottom: function () {
                        $("#sticky-box-tab").closest(".container").nextUntil($("#footer").next()).wrapAll("<div id='wrapAll' />");
                        var n = $("#wrapAll").outerHeight(!0) || 0,
                            t = n + 40;
                        return (this.bottom = t);
                    },
                },
            });
    });
    $(".js-btn-quote1").on("click", function () {
        $(this).closest(".thumbnail").toggleClass("thumbnail-extension--added");
        var n = $(this).data("code"),
            t = $(this).data("textadd"),
            i = $(this).data("textdelete");
        $(this).closest(".thumbnail").hasClass("thumbnail-extension--added") ? ($(this).text(i), d(n, "Extension", "Extensions", !0)) : ($(this).text(t), d(n, "Extension", "Extensions", !1));
    });
    $(".js-display-cart").on("click", function () {
        $(".js-panier-mobile").toggleClass("expanded");
        $(".js-panier-mobile").hasClass("expanded") ? $(this).text("Fermer le panier") : $(this).text("Voir le panier");
    });
    $(window).on("scroll", function () {
        var n = $(window).scrollTop();
        n > 300 ? $(".backToTopContainer").addClass("show") : $(".backToTopContainer").removeClass("show");
    });
    $(".js-backToTop").on("click", function (n) {
        n.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 700);
    });
    $(".js-tableTitle-content").on("click", function () {
        $(this)
            .parent()
            .parent()
            .parent()
            .children("li")
            .each(function () {
                $(this).is(".active") && ($(this).children("span").children("span").removeClass("icon-arrow-down"), $(this).children("span").children("span").addClass("icon-arrow-right"), $(this).removeClass("active"));
            });
        $(this).parent().parent().toggleClass("active");
        $(this).removeClass("icon-arrow-right");
        $(this).addClass("icon-arrow-down");
    });
    $(".js-tableTitle-content").on("mouseover", function () {
        $(this).parent().parent().is(".active") || ($(this).removeClass("icon-arrow-right"), $(this).addClass("icon-arrow-down"));
    });
    $(".js-tableTitle-content").on("mouseout", function () {
        $(this).parent().parent().is(".active") || ($(this).removeClass("icon-arrow-down"), $(this).addClass("icon-arrow-right"));
    });
}
function mainHome() {
    var t;
    if (
        ((window.videoHeader = function () {
            var n = document.createElement("script"),
                t = document.getElementsByTagName("script")[0];
            n.src = "https://www.youtube.com/iframe_api";
            t.parentNode.insertBefore(n, t);
        }),
        (window.onPlayerReady = function (n) {
            n.target.playVideo();
            n.target.mute();
        }),
        (window.onYouTubeIframeAPIReady = function () {
            var n = "muC5u_m84iI";
            window.player = new window.YT.Player("ytplayer", {
                height: "100%",
                width: "100%",
                videoId: n,
                playerVars: { autoplay: 1, rel: 0, showinfo: 0, showsearch: 0, controls: 0, loop: 1, enablejsapi: 1, playlist: n, iv_load_policy: 3 },
                events: { onReady: window.onPlayerReady },
            });
        }),
        (t = window.getComputedStyle(document.body, ":after").getPropertyValue("content")),
        t === '"screen-lg"' || t === '"screen-xl"')
    ) {
        var n = $("#video-home"),
            i = n.data("autoplay") === !0 ? "autoplay" : "",
            r = n.data("loop") === !0 ? "loop" : "",
            u = n.data("muted") === !0 ? "muted" : "",
            f = n.data("mp4") !== !1 ? '<source src="' + n.data("mp4") + '" type="video/mp4"></source>' : "",
            e = n.data("webm") !== !1 ? '<source src="' + n.data("webm") + '.webm" type="video/webm"></source>' : "",
            o = "<video " + i + " " + r + " " + u + ">" + f + e;
        n.append(o);
    }
}
function mainUnivers() {
    $(".js-filter input, .slider").on("click", function () {
        $(this).attr("id") != "DateFilter" &&
            ($(".result").addClass("filtering"),
            window.setTimeout(function () {
                $(".result").removeClass("filtering");
            }, 1e3));
    });
    $("section").hasClass("submenu") && $(".sticky-filters").css("top", "80px");
    window.Modernizr.touchevents ||
        $(".js-result-item-right-avis")
            .mouseenter(function () {
                $(this).closest(".result-item").find(".result-item-avis").addClass("hover");
            })
            .mouseleave(function () {
                $(this).closest(".result-item").find(".result-item-avis").removeClass("hover");
            });
}
function readMore() {
    $(".js-readmore-button").each(function () {
        var i = $(this),
            u = i.closest(".js-readmore-context"),
            o = u.find("h2 small span"),
            t = u.find(".js-readmore-content"),
            r = t.data("readmore-height"),
            n,
            f,
            e;
        if (
            (r == undefined && (r = u.data("readmore-height")),
            r == undefined && (r = 4),
            (n = t.data("readmore-height-ori")),
            n == undefined && (n = u.data("readmore-height-ori")),
            n == undefined && (n = t.height()),
            (f = u.data("duration-open")),
            f == undefined && (f = u.data("duration")),
            f == undefined && (f = 1e3),
            (e = u.data("duration-close")),
            e == undefined && (e = u.data("duration")),
            e == undefined && (e = 500),
            (n = (n + "").slice(-1) == "%" || n == "auto" ? n : n + "px"),
            parseInt(r) >= parseInt(n) && !((n + "").slice(-1) == "%" || n == "auto") && (r = n),
            t.css("height", r + "rem"),
            t.css("overflow", "hidden"),
            t.css("display", "block"),
            i.css("display", "inline-block"),
            r == n)
        )
            i.hide();
        else
            i.on("click", function () {
                t.hasClass("js-readmore--expanded")
                    ? t.animate(
                          { height: r + "rem" },
                          {
                              queue: !1,
                              duration: e,
                              complete: function () {
                                  i.text(i.data("text-ori"));
                                  t.removeClass("js-readmore--expanded");
                              },
                          }
                      )
                    : t.animate(
                          { height: n },
                          {
                              queue: !1,
                              duration: f,
                              complete: function () {
                                  i.data("text-ori", i.text());
                                  i.text(i.data("text-swap"));
                                  t.addClass("js-readmore--expanded");
                              },
                          }
                      );
            });
    });
}
function cropText() {
    if ($(".js-readmore").length > 0) {
        var t = $(".js-readmore p").first(),
            i = $(".js-readmore .js-readmore-text").outerHeight(!0),
            n = t.outerHeight(!0),
            r = $(".js-readmore .read-more");
        $(".js-readmore .js-readmore-text").css("height", n);
        r.on("click", function () {
            event.preventDefault();
            $(this).hasClass("open")
                ? ($(".js-readmore .js-readmore-text").css("height", n), $(this).html("Lire la suite"), $(this).removeClass("open"))
                : ($(this).addClass("open"), $(".js-readmore .js-readmore-text").css("height", i), $(this).html("Fermer"));
        });
    }
}
function initLoryModal() {
    function a(n, t) {
        n.reset();
        t.classList.add(o);
    }
    function v(n, t) {
        t.classList.remove(o);
        n.slideTo(0);
    }
    function y(n, t) {
        for (var i = 0; i < n; i++) (h = e.cloneNode()), t.appendChild(h);
        t.childNodes[0].classList.add("active");
    }
    function p(n, t, i) {
        for (var r = 0; r < n; r++)
            t.childNodes[r].addEventListener("click", function (n) {
                c[i].slideTo(Array.prototype.indexOf.call(t.childNodes, n.target));
            });
    }
    function w(n, t) {
        for (var i = 0, r = n.childNodes.length; i < r; i++) n.childNodes[i].classList.remove("active");
        n.childNodes[t.detail.currentSlide - 1].classList.add("active");
    }
    function b(n) {
        for (var t = 0, i = n.childNodes.length; t < i; t++) n.childNodes[t].classList.remove("active");
        n.childNodes[0].classList.add("active");
    }
    var l = window.lory,
        f = document.querySelectorAll(".js-diaporama"),
        e = document.createElement("li"),
        o = "diaporama--shown",
        t,
        s,
        h,
        r,
        c = [],
        n,
        u,
        i;
    for (e.classList.add("diaporama-dot"), t = 0, s = f.length; t < s; t++) {
        n = f[t];
        u = n.querySelectorAll(".js-diaporama-slide").length;
        i = n.querySelector(".js-diaporama-dots");
        n.addEventListener("before.lory.init", y.bind(null, u, i));
        n.addEventListener("after.lory.init", p.bind(null, u, i, t));
        n.addEventListener("after.lory.slide", w.bind(null, i));
        n.addEventListener("on.lory.resize", b.bind(null, i));
        r = l(n, { enableMouseEvents: !0, infinite: 1, classNameFrame: "js-diaporama-frame", classNameSlideContainer: "js-diaporama-slides", classNamePrevCtrl: "js-diaporama-prev", classNameNextCtrl: "js-diaporama-next" });
        c[t] = r;
        $(n).closest(".modal").on("shown.bs.modal", a.bind(null, r, n)).on("hidden.bs.modal", v.bind(null, r, n));
    }
}
function initLory() {
    for (var u = window.lory, t = document.querySelectorAll(".js-resultSlider"), r, n = 0, i = t.length; n < i; n++)
        (r = t[n]),
            u(r, {
                slidesToScroll: 1,
                enableMouseEvents: !0,
                infinite: 0,
                rewind: !1,
                classNameFrame: "js-resultSlider-frame",
                classNameSlideContainer: "js-resultSlider-slides",
                classNamePrevCtrl: "js-resultSlider-prev",
                classNameNextCtrl: "js-resultSlider-next",
            });
}
function isEmail(n) {
    var t = new RegExp("^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$", "i");
    return t.test(n);
}
function SaveEmail() {
    var t = !1,
        n,
        i;
    if (($(".textErrorIn").hide(), (n = $("#newsletter-email").val()), n != "" && isEmail(n) ? $("#newsletter-email").removeClass("error") : ($("#newsletter-email").addClass("error"), (t = !0)), (i = "/NewsLetter/SetEmail"), t == !0))
        return $("#textError").css("display", "block"), $("#textError").append("<p id='textErrorIn' class='textErrorIn'>Merci de bien vouloir mettre une adresse valide</p>"), !1;
    $.ajax({
        url: i,
        data: { email: n },
        type: "POST",
        success: function (n) {
            var t = $("#newsletter-email").val(),
                i,
                r,
                u;
            n == "2"
                ? ((i = '<img src="http://track.effiliation.com/servlet/effi.lead?id=660014758&ref=' + t + '" width="0" height="0" /> '),
                  $("#trekmag").append(i),
                  $("#textError").css("display", "block"),
                  (r = '<p id="textErrorIn" class="textErrorIn">Votre demande a été prise en compte.<br />Vous recevrez désormais tous nos bons plans à  l\'adresse ' + t + "<br />La tribu Nomade</p> "),
                  $("#textError").append(r))
                : ($("#textError").css("display", "block"), (u = '<p id="textErrorIn" class="textErrorIn">Vous àªtes déjà  inscrit avec l\'adresse email ' + t + ".</p>"), $("#textError").append(u));
        },
        error: function () {},
    });
}
function mainReady() {
    mainReadyLoadedNumber++;
    genericReady();
    sliderAvis();
    mySelection();
    InitCookies();
    $("body").hasClass("homepage") && (mainHome(), sliderStrateActus(), sliderBonsplans());
    $("body").hasClass("univers") && (mainUnivers(), mainReadyLoadedOnce || (sliderLrUnivers(), sliderBonsplans(), sliderStrateProduits()), cropText());
    $("body").hasClass("produit") && (stickyCta(), sliderExtensions());
    $("body").hasClass("generic") && sliderExtensions();
    $("body").hasClass("explorateur") && sliderExplorateurs();
    $("body").hasClass("brochures") && cropText();
    mainReadyLoadedOnce = !0;
}
function CallExtension(n) {
    $.ajax({
        type: "Get",
        url: "/Produit/FicheModal",
        data: { code: n },
        error: function () {},
        success: function (n) {
            $("#bodyExtensionModal").html(n);
            $("#idModalExtension").modal("show");
            readMore();
        },
    });
}
function GetHMP(n, t) {
    return $("#HMP_" + n).length ? $("#HMP_" + n).attr("data-" + t) : "";
}
function GetHMP_Avis(n) {
    return GetHMP("Avis", n);
}
function GetNextPageAvis(n, t, i, r) {
    var e = GetHMP_Avis("type"),
        o = GetHMP_Avis("slug"),
        f;
    r = r || window.event;
    var s = r.target || r.srcElement,
        h = s.parentElement.id,
        u = $("#" + h),
        c = u.find("a");
    u.html($("<img>").attr("src", "/Content/Img/loading.gif"));
    f = "/Avis/GetNextPageAvis";
    $.ajax({
        url: f,
        type: "POST",
        data: { actualBlock: n, nextBlock: t, pageSize: i, type: e, slug: o },
        async: !0,
        success: function (i) {
            $("#Page" + t).html(i);
            $("#idShow" + n).hide();
            $("#idShow" + t).show();
            $("#idShow" + t).focus();
            readMore();
        },
        error: function (n, t, i) {
            Console.log(i);
        },
    });
}
function getRadioVal(n) {
    for (var r = n.length, i = "", t = 0; t < r; t++)
        if (n[t].checked) {
            i = n[t].value;
            break;
        }
    return i;
}
function compteNbCar() {
    var t = 700,
        n = document.formAvis,
        i = n.Avis.value.length;
    i < t ? (n.CharRestant.value = t - i) : ((n.CharRestant.value = 0), (n.Avis.value = n.Avis.value.substring(0, t)));
}
function ValidateAvis() {
    var t = "",
        n = document.forms.formAvis,
        i,
        u,
        r;
    if (!n) return !1;
    for (
        i = [],
            InitLabelClass(),
            u = !1,
            n.age.value.length > 0 && (t += BuildErrorMessage(n.age, "- votre �ge (chiffre uniquement).\n", "isInt")),
            getRadioVal(n.note) == "" && ((t += "- Votre note\n"), (i[i.length] = GetLabelFor(n.notes.id))),
            getRadioVal(n.note) == "1" ? ((document.getElementById("asterisc").innerHTML = "*"), (t += BuildErrorMessage(n.Avis, "- votre appr�ciation sur ce voyage.\n"))) : (document.getElementById("asterisc").innerHTML = ""),
            n.acceptation && !n.acceptation.checked && ((t += "- Vous devez accepter les conditions d'utilisation !\n"), (i[i.length] = GetLabelFor(n.acceptation.id))),
            r = 0;
        r < i.length;
        r++
    )
        i[r] && (i[r].className = "error");
    return t != "" ? ((t = "Les information suivantes semblent �tre manquantes ou incorrectes :\n" + t), alert(t), !1) : !0;
}
function ShowHideAvis(n, t, i) {
    $(document).ready(function () {
        $(n) &&
            $(i) &&
            $(t) &&
            (document.getElementById(n).style.display == "none"
                ? ($("#" + t).hide(), $("#" + n).show(), $("#" + i).attr("src", "/Content/img/rep_off.jpg"), $("#__" + n).show(), $("#___" + n).hide())
                : ($("#" + t).show(), $("#" + n).hide(), $("#" + i).attr("src", "/Content/img/rep_on.jpg"), $("#___" + n).show(), $("#__" + n).hide()));
    });
}
function getIeElementsByName(n) {
    var u, i, r, t;
    if (navigator.appName.indexOf("Explorer") > 0) {
        for (i = document.all, u = i.length, r = [], t = 0; t < u; t++) i[t].name == n && (r[r.length] = i[t]);
        return r;
    }
    return document.getElementsByName(n);
}
function GetHMP(n, t) {
    return $("#HMP_" + n).length ? $("#HMP_" + n).attr("data-" + t) : "";
}
function GetHMP_HCContexte(n) {
    return GetHMP("HCContexte", n);
}
function GetHMP_HCResultContexte(n) {
    return GetHMP("HCResultContexte", n);
}
function UpdateFilter(n, t) {
    UpdateFilterProducts(n, t);
}
function UpdateFilterProducts(n, t) {
    var i;
    t == "1" && sessionStorage.getItem("onglet") ? (i = sessionStorage.getItem("onglet")) : $("#Onglet2Radio").hasClass("active") && (i = "2");
    $.ajax({
        url: "/HC/SparkowProducts",
        data: { FapiUrl: n },
        type: "POST",
        success: function (t) {
            if (t != null && t != "") {
                $("#SparkowProducts").html(t);
                UpdateFilterFilters(n);
                i == "2" && ($("#Onglet2Radio").addClass("active"), $("#Onglet1Radio").removeClass("active"), $("#BlockLN").show(), $("#BlockAC").hide());
                var r = $("#FieldProductListTotal").val(),
                    u = $("#ProductListTotal").text();
                r != undefined && $("#ProductListTotal").text(r);
            }
        },
    });
}
function UpdateFilterFilters(n) {
    var t, i, r;
    $("#Onglet2Radio").is(":checked") && (t = "2");
    sessionStorage.setItem("filter", n);
    i = GetHMP_HCContexte("NameContext");
    r = GetHMP_HCContexte("Context");
    $.ajax({
        url: "/HC/SparkowFilters",
        data: { FapiUrl: n, NameContext: i, Context: r },
        type: "POST",
        success: function (n) {
            $("#SparkowFilters").html(n);
            t == "2" && ($("#Onglet1Radio").prop("checked", !1), $("#Onglet2Radio").prop("checked", !0), $("html, body").animate({ scrollTop: $("#listeVoyages").offset().top }, 1e3), sessionStorage.setItem("onglet", 2));
            sliderLrUnivers();
            jsContexte();
        },
    });
}
function SetOnglet(n) {
    var t = 1;
    n == 1
        ? ((t = 2),
          $(".petit-groupe").addClass("active"),
          $(".sur-mesure").removeClass("active"),
          $("#Onglet1Radio").prop("checked", !0),
          $("#Onglet2Radio").prop("checked", !1),
          $("#BlockAC").show(),
          $("#BlockLN").hide(),
          $("html, body").animate({ scrollTop: $("#listeVoyages").offset().top }, 1e3),
          sessionStorage.setItem("onglet", 1))
        : ($(".petit-groupe").removeClass("active"),
          $(".sur-mesure").addClass("active"),
          $("#Onglet1Radio").prop("checked", !1),
          $("#Onglet2Radio").prop("checked", !0),
          $("#BlockLN").show(),
          $("#BlockAC").hide(),
          $("html, body").animate({ scrollTop: $("#listeVoyages").offset().top }, 1e3),
          sessionStorage.setItem("onglet", 2));
}
function jsContexte() {
    $("#Onglet1").on("click", function () {
        SetOnglet(1, !1);
    });
    $("#Onglet2").on("click", function () {
        SetOnglet(2, !1);
    });
    $("#Onglet1Radio").on("click", function () {
        SetOnglet(1, !1);
    });
    $("#Onglet2Radio").on("click", function () {
        SetOnglet(2, !1);
    });
    jsContexteFilter();
}
function jsContexteFilter() {
    function r(n) {
        var t = n.getFullYear() + "-" + ("0" + (n.getMonth() + 1)).slice(-2) + "-" + ("0" + n.getDate()).slice(-2);
        return $.inArray(t, i) != -1 ? { classes: "highlighted" } : { classes: "disabled day" };
    }
    function u(n) {
        var u = $("#" + n).data("startdate"),
            f = $("#" + n).data("enddate"),
            t = $("#" + n).data("availabledates");
        t != "" && t != undefined && (i = t.split(","));
        $("#" + n).datepicker("destroy");
        n == "" || u == undefined || f == undefined ? $("#" + n).datepicker({ language: "fr", autoclose: !0, beforeShowDay: r }) : $("#" + n).datepicker({ language: "fr", autoclose: !0, startDate: u, endDate: f, beforeShowDay: r });
    }
    function f() {
        var n = $("#DateFilter").data("removeurl");
        n != undefined && n != "" && filtering(n);
    }
    var n, t, i;
    initLory();
    sethrefs();
    showHideFilters();
    n = $("#filtrePays .checkbox").length;
    n > 5 &&
        ((t = $("#filtrePays .checkbox:gt(5)")),
        t.hide(),
        $("#filtrePays").append('<div class="loadMore">Tout afficher  (' + n + ")</div>"),
        $(".loadMore").click(function () {
            $(".loadMore").hasClass("expanded") ? ($(".loadMore").text("Tout afficher (" + n + ")"), t.hide(), $(".loadMore").removeClass("expanded")) : ($(".loadMore").text("Réduire"), t.show(), $(".loadMore").toggleClass("expanded"));
        }));
    $(".js-slider").each(function () {
        var n = $(this).attr("id"),
            r = $(this).data("fapi"),
            t = $(this).data("unit"),
            i = $(this).data("type");
        if (i == "2") {
            $("#" + n).slider({ tooltip: "hide", id: "div" + n });
            $("#" + n).on("slide", function (i) {
                $(".js-" + n + "-min").text(i.value[0] + t);
                $(".js-" + n + "-max").text(i.value[1] + t);
            });
        } else
            $("#" + n).slider({
                tooltip: "always",
                tooltip_position: "bottom",
                formatter: function (n) {
                    return n + "  " + t;
                },
                id: "div" + n,
            });
    });
    $(".js-filter input, .slider").on("click", function () {
        var t = $(this).attr("id"),
            i,
            r,
            n,
            u;
        if (t != undefined && ((t = t.replace("div", "")), (i = $("#" + t).data("fapi")), (r = $("#" + t).data("filter")), t != undefined && i != undefined && i != "" && r != undefined)) {
            if (r == "slider") {
                if (((n = $("#" + t).data("value")), (u = $("#" + t).data("type")), u == undefined || n == undefined)) return;
                if (u == "2") {
                    if (n.indexOf(",") <= 0) return;
                    if (((n = n.split(",")), n.length != 2)) return;
                    i = i.replace("{0}", n[0]).replace("{1}", n[1]);
                } else i = i.replace("{0}", n);
            }
            filtering(i);
        }
    });
    i = [""];
    navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry|iPad/i)
        ? $("#DateFilter").each(function () {
              $(this).attr("type", "date");
              var n = $(this).attr("id") == undefined ? "" : $(this).attr("id");
              u(n);
          })
        : $("#DateFilter").each(function () {
              var n = $(this).attr("id") == undefined ? "" : $(this).attr("id");
              u(n);
          });
    $("#DateFilterRAZ").on("click", function () {
        $("#DateFilter").datepicker("setDate", null);
    });
    $("#DateFilter, #MargeFilter").on("change", function () {
        var n = $("#DateFilter").datepicker("getDate"),
            i,
            r,
            t,
            u,
            e;
        if (n != undefined && n != "") {
            if (((i = $("#DateFilter").data("fapi")), i == undefined || i == "")) return;
            r = isInt($("#MargeFilter").val());
            t = n;
            r != undefined &&
                r > 0 &&
                ((Date.prototype.addDays = function (n) {
                    var t = new Date(this.valueOf());
                    return t.setDate(t.getDate() + n), t;
                }),
                (Date.prototype.removeDays = function (n) {
                    var t = new Date(this.valueOf());
                    return t.setDate(t.getDate() - n), t;
                }),
                (n = n.removeDays(r)),
                (t = t.addDays(r)));
            u = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
            e = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
            i = i.replace("{0}", convertDate(n)).replace("{1}", convertDate(t));
            filtering(i);
        } else f();
    });
    window.location.pathname == "/voyages/inspiration/explorers" && jsTranslate();
}
function showHideFilters() {
    $.getScript("/Content/lib/simplebar/3.1.3/simplebar.min.js", function () {});
    $("input[type=checkbox]").each(function () {
        this.checked && $(this).prev().addClass("active");
    });
    $(".js-showmore-filters").each(function () {
        var i = $(this),
            u = i.closest(".js-showmore-context"),
            n = u.find(".js-showmore-content"),
            r = !1,
            t;
        n.find("input[type=checkbox]").each(function () {
            this.checked && ($(this).prev().addClass("active"), (r = !0));
        });
        t = n.height() + 15;
        r == !0
            ? (n.height(t),
              t > 280 && (n.attr("data-simplebar", ""), n.css({ "max-height": "280px", "overflow-y": "auto", "margin-bottom": "15px" }), new SimpleBar(n[0], { autoHide: !1 })),
              n.addClass("js-showmore-expanded"),
              i.addClass("js-showmore-active"))
            : n.height(0);
        i.on("click", function () {
            n.hasClass("js-showmore-expanded")
                ? (t > 280 && n.css({ "margin-bottom": "inherit" }), n.height(0), n.removeClass("js-showmore-expanded"), i.removeClass("js-showmore-active"))
                : (t > 280 && (n.attr("data-simplebar", ""), n.css({ "max-height": "280px", "overflow-y": "auto", "margin-bottom": "15px" }), new SimpleBar(n[0], { autoHide: !1 })),
                  n.height(t),
                  n.addClass("js-showmore-expanded"),
                  i.addClass("js-showmore-active"));
        });
    });
}
function isInt(n) {
    if (n == null || n == undefined) return 0;
    var i = n.match(/\d+$/),
        t = 0;
    return i && (t = i[0]), (t = parseInt(t, 10)), t > 0 ? t : 0;
}
function filtering(n) {
    $(".result").addClass("filtering");
    window.setTimeout(function () {
        UpdateFilter(n);
        $(".result").removeClass("filtering");
    }, 500);
}
function convertDate(n) {
    function i(n) {
        return n < 10 ? "0" + n : n;
    }
    var t = new Date(n);
    return [t.getFullYear(), i(t.getMonth() + 1), i(t.getDate())].join("-");
}
function MenuEditi() {
    var n = $("input[name=multiContent]").val(),
        i,
        t;
    n != null &&
        n != "" &&
        n.indexOf(prefixeNoeud) >= 0 &&
        ((i = "1"), (t = window.location.hash), t != null && t != "" && t.indexOf("#" + prefixe) >= 0 && (i = t.replace("#" + prefixe, "")), $("#" + n + i).removeClass("fontnormal"), $("#" + n + i).addClass("nbTypo2"));
}
function setClassNoeaud(n) {
    if (n != null && n != "" && n.indexOf(prefixeNoeud) > 0) {
        var t = n.replace(prefixeNoeud, "");
        $("a[name=" + prefixeNoeud + "]").each(function () {
            $(this).attr("id") == n
                ? ($("#" + prefixeNoeud + t).removeClass("fontnormal"), $("#" + prefixeNoeud + t).addClass("nbTypo2"))
                : ($("#" + prefixeNoeud + t).removeClass("nbTypo2"), $("#" + prefixeNoeud + t).addClass("fontnormal"));
        });
    }
}
function GetNextPage(n, t, i, r, u) {
    var e = u || window.event,
        o = e.target || e.srcElement,
        s = o.parentElement.id,
        h = $("#" + s);
    h.html($("<img>").attr("src", "/Content/Img/loading.gif"));
    var c = GetHMP_HCResultContexte("FapiUrl"),
        l = r == "LN" ? "PageNomade" : "Page",
        a = r == "LN" ? "Main_LibreNomade" : "Main",
        f = n + 1;
    $.ajax({
        url: "/HC/GetNextPage",
        data: { urlNext: t, id: n, zone: a, FapiUrl: c, page: l },
        type: "POST",
        success: function (t) {
            $("#Page" + r + f).html(t);
            $("#idShow" + r + n).hide();
            $("#idShow" + r + f).show();
            $("#idShow" + r + f).focus();
            mainReady();
            sethrefs();
        },
    });
}
function affichedetail(n) {
    var t = "detail_" + n;
    $("#" + t).toggle("slow");
}
function chargerdetail(n) {
    var t = "detail_" + n,
        i = $("#" + t).attr("role"),
        r;
    i == t + "on"
        ? $("#" + t).attr("role", t + "off")
        : (i != t + "off" &&
              ((r = "/HC/ChargerDetailProduct"),
              $.ajax({
                  url: r,
                  data: { codeCircuit: n },
                  type: "POST",
                  success: function (n) {
                      $("#" + t).html(n);
                  },
              })),
          $("#" + t).attr("role", t + "on"));
}
function GetgarantedCheck(n) {
    var t = $("#nbpaxMoteur" + n).is(":checked");
    return t ? $("#nbpaxMoteur").prev().addClass("active") : $("#nbpaxMoteur").prev().removeClass("active"), t ? 1 : 0;
}
function SetgarantedCheck(n, t) {
    var i = n > 0;
    $("#nbpaxMoteur" + t).prop("checked", i);
}
function GerePriorityCritere() {
    traitement || LoadSearchEngineHome();
}
function GerePriorityCritereRwd(n, t) {
    if (t == "M") {
        var i = traitement;
        traitement = !0;
        n == priorityzone
            ? $("select#CountryHomeSearch").val($("select#CountryHomeSearchM").val())
            : n == prioritytheme
            ? $("select#ThemeHomeSearch").val($("select#ThemeHomeSearchM").val())
            : n == prioritydate
            ? $("#dateHomeSearch").val($("#dateHomeSearchM").val())
            : n == prioritybonplan && SetgarantedCheck(GetgarantedCheck(t), "");
        traitement = i;
    }
    GerePriorityCritere(n);
}
function FnLoadgGeo(n) {
    for (var r = $("#CountryHomeSearch").val(), i = '<option value="">Destinations</option>', t = 0; t < n.length; t++)
        i += n[t].Value == r ? '<option value="' + n[t].Value + '" selected="selected">' + n[t].Text + "</option>" : '<option value="' + n[t].Value + '">' + n[t].Text + "</option>";
    $("select#CountryHomeSearch").html(i);
}
function FnLoadgTheme(n) {
    for (var i = '<option value="">Activités</option>', t = 0; t < n.length; t++)
        i += n[t].Value == theme ? '<option value="' + n[t].Value + '" selected="selected">' + n[t].Text + "</option>" : '<option value="' + n[t].Value + '" >' + n[t].Text + "</option>";
    $("select#ThemeHomeSearch").html(i);
}
function FnLoadgDate(n) {
    var t = n != null ? n.split("@") : "";
    t != null && t.length == 2 && ((daysToEnable = t[0].split("|")), (monthsToEnable = t[1]));
    initdatepicker();
}
function initdatepicker() {
    $("#dateHomeSearch").datepicker("destroy");
    var n = traitement;
    traitement = !0;
    $("#dateHomeSearch").datepicker({ language: "fr", autoclose: !0, beforeShowDay: disableSpecificDates });
    $("#dateHomeSearchM").val($("#dateHomeSearch").val());
    $("#dateHomeSearchM").datepicker("destroy");
    $("#dateHomeSearchM").datepicker({ language: "fr", autoclose: !0, beforeShowDay: disableSpecificDates });
    traitement = n;
}
function disableSpecificDates(n) {
    var t = n.getMonth(),
        i = n.getDate(),
        r = n.getFullYear();
    return $.inArray(i + "-" + (t + 1) + "-" + r, daysToEnable) != -1 ? { enabled: !0, classes: "highlighted" } : { enabled: !0 };
}
function FnLoadgNumber(n) {
    var r = $("#dateHomeSearch").val(),
        t = n.split("|"),
        u = t[0],
        i = t[1],
        f = t[2];
    if (((diasbled = !1), i == "__")) {
        $("#libelleCircuit").html("Je recherche");
        $("#libelleCircuitM").html("Je recherche");
        diasbled = !0;
        return;
    }
    compteur < 2 && i == 0 && r != ""
        ? ($("#dateHomeSearch").val(""), GerePriorityCritere(prioritydate), (compteur = compteur + 1))
        : (i == 1 ? ($("#libelleCircuit").html("voir le voyage"), $("#libelleCircuitM").html("voir le voyage")) : ($("#libelleCircuit").html("Je recherche"), $("#libelleCircuitM").html("Je recherche")), $("#HiddenUrl2").val(t[0]));
}
function LoadSearchEngineHome() {
    var t = $("#ThemeHomeSearch ").val(),
        n = $("#CountryHomeSearch").val(),
        i = $("#dateHomeSearch").val(),
        r = !1,
        u = GetgarantedCheck("");
    n == "" && (i == "" || i == "Date de départ") && t == "" && u != 1 && ($("#libelleCircuit").html("Je recherche"), $("#libelleCircuitM").html("Je recherche"), (r = !0), $("#dvCircuit").fadeTo("slow", 0.3), $("#numberCircuit2").html(""));
    $.ajax({
        url: "/SearchEngine/GetGeoThemeDateForSearchEngine",
        data: { geoCode: n, ThemeCode: t, Date: i, garanti: u },
        type: "POST",
        success: function (i) {
            for (var f, o = "", s = "", e = 0, h = !1, c, l, u = 0; u < i.length; u++) {
                switch (i[u].Value) {
                    case "_1_":
                        e = 1;
                        break;
                    case "_2_":
                        e = 2;
                        break;
                    case "_3_":
                        e = 3;
                        l = i[u].Text;
                        break;
                    case "_4_":
                        e = 4;
                        c = i[u].Text;
                        break;
                    case "_6_":
                        e = 6;
                        h = i[u].Text == "1";
                }
                e == 1 && i[u].Value != "_1_"
                    ? $("#CountryHomeSearch").find(".dropdown-scroll")
                        ? ((f = i[u].Value == n ? ' class="selected"' : ""),
                          (o +=
                              '<li class= "new-country" data-original-index="' +
                              [u] +
                              '" data-value="' +
                              i[u].Value +
                              '" tabindex="0"' +
                              f +
                              '><a tabindex="0" role="option" data-tokens="null" aria-disabled="false" aria-selected="false">' +
                              i[u].Text +
                              "</a></li>"))
                        : ((f = i[u].Value == n ? ' selected="selected"' : ""), (o += '<option value="' + i[u].Value + '" ' + f + ">" + i[u].Text + "</option>"))
                    : e == 2 &&
                      i[u].Value != "_2_" &&
                      ($("#ThemeHomeSearch").find(".dropdown-scroll")
                          ? ((f = i[u].Value == n ? ' class="selected"' : ""),
                            (s +=
                                '<li data-original-index="' +
                                [u] +
                                '" data-value="' +
                                i[u].Value +
                                '" tabindex="0"' +
                                f +
                                '><a tabindex="0" role="option" data-tokens="null" aria-disabled="false" aria-selected="false">' +
                                i[u].Text +
                                "</a></li>"))
                          : ((f = i[u].Value == t ? ' selected="selected"' : ""), (s += '<option value="' + i[u].Value + '" ' + f + ">" + i[u].Text + "</option>")));
            }
            traitement = !0;
            $(".country-dropdown .dropdown-scroll").html(o);
            $(".theme-dropdown .dropdown-scroll").html(s);
            countryClick();
            themeClick();
            keyupChange();
            $("select#ThemeHomeSearchM").html(s);
            $("#CountryHomeSearchM").html(o);
            SetgarantedCheck(h, "M");
            SetgarantedCheck(h, "");
            FnLoadgDate(l);
            r == !1 && FnLoadgNumber(c);
            traitement = !1;
        },
    });
}
function countryClick() {
    $(".country-dropdown .dropdown-content li").each(function () {
        $(this).click(function () {
            $("#CountryHomeSearch").val($(this).attr("data-value"));
            $(this).addClass("active");
            $(".destination-text").text($(this).text());
            GerePriorityCritereRwd(0, "");
        });
    });
}
function themeClick() {
    $(".theme-dropdown .dropdown-content li").each(function () {
        $(this).click(function () {
            $("#ThemeHomeSearch").val($(this).attr("data-value"));
            $(this).addClass("active");
            $(".theme-text").text($(this).text());
            GerePriorityCritereRwd(1, "");
        });
    });
}
function keyupChange() {
    $("#inputCountry").on("keyup", function (n) {
        n.which == 40
            ? ($(".country-show:not(:last).new-country-hover").removeClass("new-country-hover").nextAll(".country-show").first().addClass("new-country-hover"),
              $(".dropdown-scroll").scrollTop(0),
              $(".dropdown-scroll").scrollTop($(".new-country-hover:first").position().top - $(".dropdown-scroll").height()))
            : n.which == 38
            ? ($(".country-show:not(:first).new-country-hover").removeClass("new-country-hover").prevAll(".country-show").first().addClass("new-country-hover"),
              $(".dropdown-scroll").scrollTop(0),
              $(".dropdown-scroll").scrollTop($(".new-country-hover:first").position().top - $(".dropdown-scroll").height()))
            : n.keyCode === 13
            ? (n.preventDefault(),
              console.log("enter"),
              $(".country-show").each(function () {
                  $(this).hasClass("new-country-hover") &&
                      ($("#CountryHomeSearch").val($(this).attr("data-value")),
                      $(this).children("a").addClass("active"),
                      $("#dropdownCountry").removeClass("show"),
                      $(".destination-text").text($(this).children("a").text()),
                      $("#CountryHomeSearch option").val($(this).children("a").attr("data-value")).trigger("change"),
                      GerePriorityCritereRwd(0, ""));
              }))
            : filterFunction();
    });
}
function RechercheLoad2() {
    var t = $("#MoteurContainer").val(),
        n;
    if (t == "no") {
        traitement = !0;
        $("#dateHomeSearch").val("Date de départ");
        traitement = !1;
        $("#pluscrit").html('<img src="/Content/Img/plusCriteres.png">');
        LoadSearchEngineHome();
        return;
    }
    $("#pluscrit").html("");
    n = "/SearchEngine/GetCurrentFilter";
    $.ajax({
        url: n,
        type: "POST",
        success: function (n) {
            var r, i, t, u, f, e, o;
            if (n != undefined) {
                for (traitement = !0, r = n.split("&"), i = 0; i < r.length; i++)
                    if (((t = r[i].split("=")), t.length == 2))
                        switch (t[0]) {
                            case "zone":
                            case "pays":
                            case "region":
                                u = t[0] == "zone" ? "1_" + t[1] : t[0] == "pays" ? "2_" + t[1] : t[0] == "region" ? "3_" + t[1] : t[1];
                                f = '<option value="' + u + '" selected="selected">Destinations</option>';
                                $("select#CountryHomeSearch").html(f);
                                break;
                            case "theme":
                                e = '<option value="' + t[1] + '" selected="selected">Activités</option>';
                                $("select#ThemeHomeSearch").html(e);
                                break;
                            case "dateDepart":
                                o = t[1].replace("/", "-").replace("/", "-");
                                $("#dateHomeSearch").val(o);
                                break;
                            case "bonplan":
                                SetgarantedCheck(t[1] == "departsgarantis", "");
                        }
                traitement = !1;
            }
            LoadSearchEngineHome();
        },
    });
}
function GoSearch2() {
    var n = $("#HiddenUrl2").val();
    (n == null || n == "") && (n = "/voyages/inspiration/recherche");
    (n.toLowerCase().indexOf("datedepart") != -1 || n.toLowerCase().indexOf("departsgarantis") != -1) && (n = n + "#listeVoyages");
    window.location = n;
}
function filterFunction() {
    var u, f, t, n, r, e, i;
    for (
        u = document.getElementById("inputCountry"),
            f = u.value
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
            e = document.getElementById("dropdownCountry"),
            t = e.getElementsByTagName("a"),
            r = !0,
            n = 0;
        n < t.length;
        n++
    )
        (i = t[n].textContent || t[n].innerText),
            (i = i.normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
            i.toUpperCase().indexOf(f) > -1
                ? (r ? (t[n].parentNode.classList.add("new-country-hover"), (r = !1)) : t[n].parentNode.classList.remove("new-country-hover"), t[n].parentNode.classList.remove("country-hide"), t[n].parentNode.classList.add("country-show"))
                : (t[n].parentNode.classList.add("country-hide"), t[n].parentNode.classList.remove("country-show"), t[n].parentNode.classList.remove("new-country-hover"));
}
var maxselection, main, mainReadyLoadedOnce, mainReadyLoadedNumber, prefixe, prefixeNoeud;
jQuery.cachedScript = function (n, t) {
    return (t = $.extend(t || {}, { dataType: "script", cache: !0, url: n })), jQuery.ajax(t);
};
jQuery.forEachProp = function (n, t) {
    for (var r = Object.keys(n), i = 0; i < r.length; i++) t(r[i], n[r[i]]);
};
jQuery.ObjectAssign = function (n, t) {
    var i = t || {},
        r = t;
    return (
        jQuery.forEachProp(n, function (n, t) {
            var f = typeof t,
                u = i.hasOwnProperty(n),
                e = u ? typeof i[n] : "not_found";
            r[n] = f == "object" && e == "object" ? $.ObjectAssign(t, i[n]) : u ? i[n] : t;
        }),
        r
    );
};
maxselection = 30;
main = {
    stickyBox: function () {
        $("#sticky-box").length &&
            $("#sticky-box").affix({
                offset: {
                    top: $("#sticky-box").offset().top - 70,
                    bottom: function () {
                        if ($(".js-sticky-limit-bottom").length)
                            var n = $(document).height(),
                                t = $(".js-sticky-limit-bottom").offset().top,
                                i = n - t + 20;
                        else
                            var r = $("#pre-footer").outerHeight(!0) || 0,
                                u = $("#footer").outerHeight(!0) || 0,
                                i = r + u + 40;
                        return (this.bottom = i);
                    },
                },
            });
    },
    slider: function (n, t, i) {
        var r, u;
        n.find(".thumbnail ").length >= t &&
            (n.find(".thumbnail").unwrap(),
            n.addClass("owl-carousel"),
            (i = i || {}),
            (r = {
                loop: !0,
                mouseDrag: !1,
                navSpeed: 800,
                smartSpeed: 800,
                dotsSpeed: 800,
                margin: 30,
                navClass: ["nav-button nav-prev icon-arrow-left", "nav-button nav-next icon-arrow-right"],
                navText: [""],
                dotsClass: "nav-dots",
                dotClass: "dot-item",
                lazyLoad: !0,
            }),
            console.log("slider:"),
            console.log(r),
            console.log(i),
            (u = $.ObjectAssign(r, i)),
            console.log(u),
            n.owlCarousel(u));
    },
    sliderResponsive: function (n, t, i) {
        i = i || {};
        var r = $.ObjectAssign({ responsive: { 0: { items: 1, dots: !0, nav: !1 }, 768: { items: 2, dots: !0, nav: !1, dotsEach: 1 }, 1024: { items: 3, dots: !0, nav: !1, dotsEach: 1 }, 1025: { items: 3, dots: !1, nav: !0 } } }, i);
        main.slider(n, t, r);
    },
};
mainReadyLoadedOnce = !1;
mainReadyLoadedNumber = 0;
$("document").ready(function () {
    mainReady();
    $(".js-resultSlider-slide").on("click", function () {
        var n = $(this).closest(".result-item").find(".result-item-right").data("href");
        window.location = n;
    });
});
$(document).ready(function () {
    $('div[id*="ExtensionCode"] .clickable').on("click", function () {
        CallExtension($(this).closest(".thumbnail--extension").data("code"));
    });
});
$(document).ready(function () {
    $("#expertise").change(function () {
        var n = $("#expertise").val(),
            t = GetHMP_Avis("type"),
            i = GetHMP_Avis("slug");
        $.ajax({
            url: "/Avis/GetAvisFilter",
            data: { grade: n, type: t, slug: i },
            type: "POST",
            success: function (n) {
                $(".avis").next("br").remove();
                $("div.avis-wrapper").remove();
                $(".filteredResult").html(n);
            },
        });
    });
    $("#formAlerte").on("submit", function (n) {
        n.preventDefault();
    });
    $("#submitAlerte").on("click", function (n) {
        var s, h;
        n.preventDefault();
        var t = $("#errorAlerte"),
            i = $(this),
            u = "> valider un alerte";
        i.text("validation ... ");
        i.prop("disabled", !0);
        t.removeClass("alert-success");
        var f = $("#dateDepart").val(),
            e = $("#dateFin").val(),
            o = $("#newsletter-email").val(),
            c = $("#cbox-newsletter").is(":checked"),
            l = $("#codeProduit").val(),
            a = $("#NbPassager").val(),
            r = "";
        (f.length != 10 || e.length != 10) && (r = "&bull; Dates<br/>");
        s = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        s.test(o) || (r = r + "&bull; Email");
        r.length > 0
            ? (t.html("Les information suivantes semblent &ecirc;tre manquantes ou incorrectes :<br/>" + r), t.show(), i.prop("disabled", !1), i.text(u))
            : ((h = "/Alerte/SetAlerte"),
              $.ajax({
                  url: h,
                  type: "POST",
                  data: { dateDepartAlerte: f, dateFinAlerte: e, emailAlerte: o, isOptinAlerte: c, codeProduitAlerte: l, NbPassager: a },
                  async: !0,
                  success: function (n) {
                      n.result == "success"
                          ? (t.html(n.message), t.removeClass("alert-danger").addClass("alert-success"), t.delay(2e3).fadeOut(), i.prop("disabled", !1), t.show())
                          : n.result == "error" && (t.removeClass("alert-success").addClass("alert-danger"), i.prop("disabled", !1), t.html(n.errorMessage), t.show());
                      i.text(u);
                  },
                  error: function () {
                      i.prop("disabled", !1);
                      t.removeClass("alert-success").addClass("alert-danger");
                      t.html("Internal Error");
                      t.show();
                      i.text(u);
                  },
              }));
    });
});
$("document").ready(function () {
    jsContexte();
    MenuEditi();
    sessionStorage.getItem("fapiurl") == GetHMP_HCResultContexte("FapiUrl")
        ? (sessionStorage.getItem("filter") && sessionStorage.getItem("filter") !== GetHMP_HCResultContexte("FapiUrl") && UpdateFilter(sessionStorage.getItem("filter"), 1),
          sessionStorage.getItem("onglet") && SetOnglet(sessionStorage.getItem("onglet")))
        : sessionStorage.clear();
    sessionStorage.setItem("fapiurl", GetHMP_HCResultContexte("FapiUrl"));
});
prefixe = "contentzone";
prefixeNoeud = "noeud";
var priorityzone = 0,
    prioritytheme = 1,
    prioritydate = 2,
    prioritybonplan = 3,
    priorityInit = 4,
    traitement = !0,
    daysToEnable = [],
    monthsToEnable = [],
    compteur = 0,
    diasbled = !0;
$(document).ready(function () {
    $("#CountryHomeSearch").length > 0 &&
        (RechercheLoad2(),
        (traitement = !1),
        $("#CountryHomeSearchM").change(function () {
            GerePriorityCritereRwd(0, "M");
        }),
        $("#CountryHomeSearch").change(function () {
            GerePriorityCritereRwd(0, "");
        }),
        $("#ThemeHomeSearchM").change(function () {
            GerePriorityCritereRwd(1, "M");
        }),
        $("#ThemeHomeSearch").change(function () {
            GerePriorityCritereRwd(1, "");
        }),
        $("#dateHomeSearchM").change(function () {
            GerePriorityCritereRwd(2, "M");
        }),
        $("#dateHomeSearch").change(function () {
            GerePriorityCritereRwd(2, "");
        }),
        $("#nbpaxMoteurM").change(function () {
            GerePriorityCritereRwd(3, "M");
        }),
        $("#nbpaxMoteur").change(function () {
            GerePriorityCritereRwd(3, "");
        }),
        $("#submitHomeSearchM").click(function () {
            GoSearch2();
        }),
        $("#submitHomeSearch").click(function () {
            GoSearch2();
        }),
        $(".country-dropdown").click(function (n) {
            $("#dropdownCountry").toggleClass("show");
            $("#dropdownTheme").removeClass("show");
            $("#inputCountry").focus();
            n.stopPropagation();
        }),
        $(".theme-dropdown").click(function (n) {
            $("#dropdownCountry").removeClass("show");
            $("#dropdownTheme").toggleClass("show");
            n.stopPropagation();
        }),
        $("#inputCountry").click(function () {
            $("#dropdownCountry").removeClass("show");
        }),
        $("#inputTheme").click(function () {
            $("#dropdownTheme").removeClass("show");
        }),
        $(".carousel-fixed, .container, .strate").click(function () {
            $("#dropdownCountry").removeClass("show");
            $("#dropdownTheme").removeClass("show");
        }));
});
