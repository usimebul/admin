"use strict"; // Start of use strict
var rootPath = "";

(function($) {
    var elements = $("[include-html]");

    elements.each(function(index, element) {
        (function() {
            var src = element.getAttribute("include-html");
            $.get(src, function(data, status) {
                if (status === "success") element.innerHTML = data;
                else element.innerHTML = "Page not found";
                element.removeAttribute('include-html');
            })
        })();
    });
})(jQuery);


window.onload = function() {
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });


    // Active current sidebar menu.
    var path = window.location.pathname;
    $(".collapse-item").each(function(index, element) {
        var collapseItem = $(element);
        if (collapseItem.attr('href') === path) {
            collapseItem.addClass('active');
            collapseItem.parent().parent().addClass('show');
            collapseItem.parent().parent().parent().addClass('active');
            collapseItem.parent().parent().parent().children('a').removeClass('collapsed');
        }
    });

    $(".collapse-item, .nav-link[href!='#']").each(function(index, element){
        var href = $(element).attr("href");
        
    })
}

// SPA using hash

var root = $('#app-root');

function router(path) {
    var hash = location.hash.replace('#', '');
    if (!hash) hash = "home";
    $.get(hash + ".html", function(data, status) {
        if (status === "success")
            root.html(data);
        else {
            $.get(rootPath + "/404.html", function(data, status) {
                root.html(data);
            })
        }
    }).fail(function() {
        $.get(rootPath + "/404.html", function(data, status) {
            root.html(data);
        })
    }).always(function() {
        // Add breadcrumb
        var urls = window.location.href.split('/');
        var breadcrumbWrapper = $("#breadcrumb-wrapper");

        breadcrumbWrapper.html("");

        var url = ""
        for (var i = 4; i < urls.length; i++) {
            if (["secukit-nxs", "secukit-html5"].includes(urls[i]))
                breadcrumbWrapper.append("<li class='breadcrumb-item'><span>Client Toolkits</span></li>");

            url = urls[i].replace('#', '');
            if (url === "" || url === this.undefined)
                break;

            breadcrumbWrapper.append("<li class='breadcrumb-item'><span>" + url + "</span></li>");
        }

        $("#top-navbar").children().each(function(index, element) {
            var navItem = $(element);
            navItem.removeClass('active');

            var href = navItem.children('a').attr('href').replace('#', '');

            if (href === hash || (href === "" && hash === "home")) {
                navItem.addClass('active');
            }
        });;
    });
}

window.onhashchange = router;
window.addEventListener('DOMContentLoaded', router);
