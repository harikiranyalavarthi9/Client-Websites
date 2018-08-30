jQuery(document).ready(function() {
    "use strict";


    /* ------- Preloader ------ */
    jQuery(window).load(function() {
        jQuery(".status").fadeOut();
        jQuery(".preloader").delay(50).fadeOut("slow");
    });


    /* -------- Appears Menu ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function() {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* --------- One Page Navigation -------- */
    $('#cssmenu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });

    /* ---------- Wow Js ---------- */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 250, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
    });
    wow.init();

    /*--------Client----------*/
    //Owl Carousel
    $('#clients-carousel').owlCarousel({
        items: 4,
        itemsTablet: 3,
        margin: 90,
        stagePadding: 90,
        smartSpeed: 450,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 2],
        itemsMobile: [479, 1],
    });

    /* --------- Scroll Up --------- */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 5000, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: true, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 99998 // Z-Index for the overlay
    });

    /* ---------- lightbox ---------- */
    $('.featured-work-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.flickr-gallery-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* --------- Carousel Slider ---------- */

    // Feature Works
    $("#teams").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [520, 1],
        autoPlay: 5000
    });

    /* ------------ Stellar ----------- */
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });

    /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');

    // filter items on button click
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });


    $('#portfolio-filter ul li a').on('click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    var $optionSets = $('#portfolio-filter ul'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.on('click', function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('#portfolio-filter ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    /* ------------ Home Slider ------------- */
    $('#slider').sliderPro({
        width: '100%',
        height: 768,
        fade: true,
        waitForLayers: true,
        buttons: true,
        autoplay: true,
        autoScaleLayers: false,
        slideAnimationDuration: 1500,
        breakpoints: {
            800: {
                height: 480
            }
        }
    });


});


/*      Hide Navbar */
// Hide Header on on scroll down

$(function() {
    var nav_offset = $('.navbar').offset().top; 

    $(window).on('scroll load', function() {
        var now_offset = $(window).scrollTop();
        if (now_offset >= 500) {
            $('.navbar').css('background-color', '#404040');
            $('#logo').css('width', '70px').css('height', '60px');
            $('#socialTop').css('display', 'none');
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('#logo').css('width', '190px').css('height', '130px');
            $('#socialTop').css('display', 'block');
        }
    });
});

$(function() { 
    $(window).on('scroll load', function() {
            $('.navbarc').css('background-color', '#404040');
            $('#logoc').css('width', '70px').css('height', '60px');
            $('#socialTopc').css('display', 'none');
    });
});

$.validator.setDefaults({
    submitHandler: function() {
        alert("Thank you for your message, we will reach back to you soon.");
    }
});

$().ready(function() {
    // validate the comment form when it is submitted
    // validate signup form on keyup and submit
    $("#Form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please select at least 5 words",
        }
    });

});
