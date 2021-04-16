try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    require('jquery-mousewheel');
    require('owl.carousel');
} catch (e) {
}

jQuery(document).ready(function ($) {
    const owlConfig = {
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    };


    // Portfolio Carousel
    let owlPortfolio = $('.portfolio-carousel');
    owlPortfolio.owlCarousel(owlConfig);
    owlPortfolio.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlPortfolio.trigger('next.owl');
        } else {
            owlPortfolio.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('.portfolio-carousel-next').click(function () {
        owlPortfolio.trigger('next.owl');
    });
    $('.portfolio-carousel-prev').click(function () {
        owlPortfolio.trigger('prev.owl');
    });


    // Press Carousel
    let owlPress = $('.press-carousel');
    owlPress.owlCarousel({...owlConfig, margin: 30});
    owlPress.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlPress.trigger('next.owl');
        } else {
            owlPress.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('.press-carousel-next').click(function () {
        owlPress.trigger('next.owl');
    });
    $('.press-carousel-prev').click(function () {
        owlPress.trigger('prev.owl');
    });
});
