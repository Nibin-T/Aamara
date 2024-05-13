/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. page scroll
  4. navigation
  5. animate elements
  6. home fadeOut animation
  7. slick slider
  8. facts counter
  9. skills bar
  10. google maps zoom ON/OFF
  11. owl carousel
  12. swiper slider
  13. magnificPopup
  14. clone function
  15. items selector
  16. datepicker
  17. Select2
  18. toggle blog panels
  19. contact form
    19.1. contact modal
  20. reservation form
  21. blog comment form
*/


$(function() {
    "use strict";
	
    var hasRefreshed = false;

    function hardRefresh() {
        window.location.reload(true);
    }

	
    $(window).on("load", function() {

        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
        $(".hero-bg").addClass("hero-bg-show");
        
        // var hasRefreshed = sessionStorage.getItem('hasRefreshed');
        // if (!hasRefreshed) {
        //     // Perform hard refresh
        //     hardRefresh();
        //     // Set flag in sessionStorage to indicate refresh has been performed
        //     sessionStorage.setItem('hasRefreshed', true);
        // }

    });

    

    // 3. page scroll
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
            if (target.length) {
                if ($(window).width() < 768) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 69
                    }, 1000);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 69
                    }, 1000);
                }
                return false;
            }
        }
    });
	
    $("#reservation-button").click(function() {
        window.location.href = 'https://reservations.tangohq.com/reservation/new/92bcc4d6-d59b-427a-b6dd-47766d5168fb'
      });

    // 4. navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 79
    });
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();

    });
	
    $(window).on("scroll", function() {
        // 5. animate elements
        if ($(this).scrollTop() > 50) {
            $(".border-top").addClass("top-position-primary");
			$(".navbar-bg-switch").addClass("navbar-bg-switch-color");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".to-top-arrow").addClass("show");
			$(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".border-top").removeClass("top-position-primary");
			$(".navbar-bg-switch").removeClass("navbar-bg-switch-color");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".to-top-arrow").removeClass("show");
			$(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 6. home fadeOut animation
    });
	
    // 7. slick slider
    $(".slick-left, .slick-right-alternative").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800
    });
	
    // 8. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 9. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
    $(".show-skillbar-2").appear(function() {
        $(".skillbar-2").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 10. google maps zoom ON/OFF
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
	
    // 11. owl carousel
    $(".owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 50
            },
            880: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $(".owl-carousel-testimonials").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
    $(".owl-carousel-inside").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-inside',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 50
            },
            880: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $(".owl-carousel-news").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-1").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-2").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
	$("#owl-carousel-news-3").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
	$("#owl-carousel-news-4").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-4',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });

    // 12. 3d image
    jQuery(document).ready(function ($) {
        //Items
        var $card = $(".card");
        var $container = $(".containerImage");
        var $title = $(".title");
        var $bike = $(".bike img");
        var $purchase = $(".purchase");
        var $description = $(".info h3");

        //Moving Animation Event
        $container.on("mousemove", function (e) {
            let xAxis = (window.innerWidth / 2 - e.clientX) / 25;
            let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
            $card.css("transform", `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
        });

        //Animate on Hover
        $container.hover(function () {
            $card.toggleClass("has-transform");
            /*$title.toggleClass("has-transform");*/
            $bike.toggleClass("has-transform");
            /*$purchase.toggleClass("has-transform");*/
            $description.toggleClass("has-transform");
        });

        //Pop Back on mouseleave
        $container.on("mouseleave", function () {
            $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
        });
    });


    // 12. swiper slider
    var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: true,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
		scrollbar: false
    });
    var swiper2 = new Swiper(".swiper-container-wrapper .swiper-container.swiper2", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false
    });
    var swiper4 = new Swiper(".swiper-container-wrapper .swiper-container.swiper4", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: true,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
		scrollbar: false,
		centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 0,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var swiper5 = new Swiper(".swiper-container-wrapper .swiper-container.swiper5", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
		scrollbar: false,
		slidesPerView: 2,
        slidesPerColumn: 2
    });
	
    // 13. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-gallery-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 14. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(3).appendTo(".vertical-lines-wrapper");
	
    // 15. items selector
    const buttons = document.querySelectorAll(".item-button");
    const menus = document.querySelectorAll(".menu");
    function handleClick(e) {
        e.preventDefault();
        const targetMenu = document.querySelector(`#${this.dataset.target}`);
        menus.forEach(menu => {
            menu.classList.remove("menu-visible");
            targetMenu.classList.add("menu-visible");
        });
    }
    buttons.forEach(button => button.addEventListener("click", handleClick));
    
    // 16. datepicker
    $(".datepicker").datepicker({
        orientation: "auto"
    });
	
	// 17. Select2
    $(".select2").select2({
        minimumResultsForSearch: Infinity
    });
	
	// 18. toggle blog panels
    $(".blog-side-launcher").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".blog-side-launch, .blog-side-text").on("click", function() {
        $(".panel-from-left-blog, .panel-overlay-from-right-blog").removeClass("open");
    });
	
    // 19. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    // 19.1. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function(e) {
        e.preventDefault();
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
        } else {
            $(".contact-modal").addClass("open");
        }
    });
	
    document.addEventListener('DOMContentLoaded', function() {
        // Get references to the navbar toggle button and reservation button
        var navbarToggleButton = document.getElementById('navbar-toggle-button');
        var reservationButton = document.querySelector('.reservation-button-nav-bar');
    
        // Add click event listener to the navbar toggle button
        navbarToggleButton.addEventListener('click', function() {
            // Check if the navbar is expanded or collapsed
            var isExpanded = navbarToggleButton.getAttribute('aria-expanded') === 'true';
    
            // Toggle the class on the reservation button based on the navbar state
            if (isExpanded) {
                reservationButton.classList.remove('hidden-xs');
            } else {
                reservationButton.classList.add('visible-xs');
            }
        });
    });
    

    $('.contact-submit-button').click(function(){
        var $this = $(this);
        var $form = $this.closest('form');
        var filled = true;
        
        $form.find('.requiredField').each(function(){
            if ($(this).val().trim() === '') {
                filled = false;
                return false; // exits the loop early if any field is empty
            }
        });
        
        if (filled) {
            $this.text('Submitted!');
        }
    });
    
	// 20. reservation form
    $("form#form-2").on("submit", function() {
        $("form#form-2 .error-r").remove();
        var s = !1;
        if ($(".requiredField-r").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error-r">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error-r">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form-2 input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form-2").slideUp("fast", function() {
                    $(this).before('<div class="success-r">Your reservation has been received.</div>');
                });
            });
        }
        return !1;
    });
	
	// 21. blog comment form
    $("form#form-3").on("submit", function() {
        $("form#form-3 .error-c").remove();
        var s = !1;
        if ($(".requiredField-c").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error-c">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error-c">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form-3 input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form-3").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	
});