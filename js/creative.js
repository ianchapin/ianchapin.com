(function ($) {
    "use strict"; // Start of use strict
    
    // Fade In
    fadeIn();
    
    // Smooth Scrolling
    smoothScroll();
    
    // Collapse Navbar
    collapseNav();
    
    // Scroll Reveal
    scrollReveal();

    // Magnific Popups
    magnific();
    
    // Parallax Elements
    if($(document).width() > 1024) {
        $(window).scroll(function() {
            parallax();
        });
    }
    
    // Social Media Coin
    smCoin();
    
    //===========================================================================
    // Fade In
    //===========================================================================
    
    function fadeIn() {
        
        $(document).ready(function(){
            $('.masthead p, .navbar li').hide().fadeIn(2500);
            $('h1, h2, h3, h4, h5, p:not(.headline)').hide().fadeIn(1000);
            $('.about-me').hide().fadeIn(2000);
        });
        
    }
    
    //===========================================================================
    // Smooth Scrolling
    //===========================================================================
    
    function smoothScroll() {
        
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 127)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 128
        });
        
    }
    
    //===========================================================================
    // Collapse Navbar
    //===========================================================================
    
    function collapseNav() {
        
        var navbarCollapse = function () {
            if ($('#mainNav').offset().top > 0) {
                $('#mainNav').addClass('navbar-shrink');
            } else {
                $('#mainNav').removeClass('navbar-shrink');
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
        
    }
    
    //===========================================================================
    // Scroll Reveal
    //===========================================================================
    
    function scrollReveal() {
        
        window.sr = ScrollReveal();
        
        sr.reveal('.sr-services1', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 200);
        sr.reveal('.sr-services2', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 200);
        sr.reveal('.sr-services3', {
            duration: 600,
            scale: 0.,
            distance: '0px'
        }, 200);
        
        sr.reveal('.sr-social', {
            rotate: { x: 360, y: 0, z: 0 },
            duration: 1000,
            scale: 0.9,
            distance: '0px'
        }, 200);
        
        sr.reveal('.sr-button', {
            duration: 1000,
            delay: 200
        });
        
        sr.reveal('.sr-contact', {
            duration: 600,
            scale: 0.3,
            distance: '0px',
            reset: true
        }, 300);
        
    }
    
    //===========================================================================
    // Magnific Popups
    //===========================================================================
    
    function magnific() {
        
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
        
    }
    
    //===========================================================================
    // Parallax
    //===========================================================================
    
    function parallax() {
        
        var wScroll = $(window).scrollTop();
        
        $('.parallax-top').css('background-position-y', -100+(wScroll * -0.6)+'px');
        
        $('.parallax-bottom').css('background-position-y', 275+(wScroll * -0.1)+'px');
    }
    
    //===========================================================================
    // Social Media Coin
    //===========================================================================

})(jQuery); // End of use strict
