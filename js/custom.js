jQuery(document).ready(function() {
    jQuery('#mega-canvas-close-link').on('click', function(e) {
        jQuery('#sidebar').removeClass('active');

    });
    jQuery(window).scroll(function() {
        var windowScroll = jQuery(window).scrollTop();
        if (windowScroll >= 60) {
            jQuery('.demo-7').addClass('sticky');
        } else {
            jQuery('.demo-7').removeClass('sticky');
        }
    });
    //mega-canvas-link
    jQuery('#mega-canvas-link').on('click', function(e) {
        jQuery(this).toggleClass('active');
        jQuery('#sidebar').toggleClass('active');
        jQuery('.main-panel-container').toggleClass('show');
    });
    jQuery('.dropdown-menu .dropdown-toggle').on('click', function(e) {
        if (!jQuery(this).next().hasClass('show')) {
            jQuery(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        jQuery(this).next(".dropdown-menu").toggleClass('show');
        return false;
    });
    //for product mega menu
    jQuery('.product-heading').click(function() {
        if (!jQuery(this).next().hasClass('active')) {
            jQuery('.product-dropdown-list').removeClass('active');
            jQuery(this).next().addClass('active');
        } else if (jQuery(this).next().hasClass('active')) {
            jQuery(this).next().removeClass('active');
        }
        return false;
    });
    //for shop mega menu
    jQuery('.shop-heading').on('click', function() {
        if (!jQuery(this).parent().parent().next().hasClass('active')) {
            jQuery('.shop-dropdown-list').removeClass('active');
            jQuery(this).parent().parent().next().addClass('active');
        } else if (jQuery(this).parent().parent().next().hasClass('active')) {
            jQuery(this).parent().parent().next().removeClass('active');
        }
        return false;
    });
    //search link
    jQuery('#search-link').click(function(e) {
        e.preventDefault();
        jQuery('.search-wrapper').slideDown('slow');
    });
    jQuery('#search-close').click(function() {
        jQuery('.search-wrapper').slideUp('slow');
    });
    jQuery('#offcanvas-link').click(function(e) {
        e.preventDefault();
        jQuery('.mega-offcanvas').addClass('active');
    });
    jQuery('.off-canvas-close').click(function() {
        jQuery('.mega-offcanvas').removeClass('active');
    });
    //for vertical mega menu
    jQuery('[ data-toggle="collapse"]').on("click", function() {
        if (jQuery(this).find('submenu').hasClass('show')) {
            jQuery(this).find('submenu').removeClass('show');
        }

    });
    jQuery('.brands-navtab a').click(function(e) {
        e.preventDefault();
        jQuery(this).parent().parents('.dropdown-menu').addClass('active')
    });
    jQuery('.carousel-control-prev ,.carousel-control-next').click(function(e) {
        e.preventDefault();
        jQuery(this).parent().parents('.dropdown-menu').addClass('active')

    });
    jQuery('.bars').click(function() {
        jQuery('#sidebar').toggleClass('active');
        jQuery(this).toggleClass('active');
    });

    /*--------- for navigation  ----------*/

    jQuery('.nav-tab .nav-item').off('hover');
    jQuery('.nav-tab .nav-item').hover(function() {
            var navItem = jQuery(this);
            var paneIndex = jQuery(this).index();
            var navTab = navItem.closest('.nav-tab');
            var navPane = navTab.next().find('.nav-pane');
            var paneToActive = navPane.eq(paneIndex);

            navTab.find('.nav-item').removeClass('active');
            navItem.addClass('active');
            navPane.removeClass('active'); // remove all existing pane active class 
            paneToActive.addClass('active'); // active relative pane
            navItem.closest('li.nav-item.dropdown').addClass('active');
        },
        function() {
            var navItem = jQuery(this);
            var paneIndex = jQuery(this).index();
            var navTab = navItem.closest('.nav-tab');
            navTab.find('.nav-item').removeClass('active')
        }
    );

    jQuery(document).on('mouseleave', '.nav-pane', function() {
        jQuery(this).removeClass('active');
        jQuery(this).closest('.submenu').find('.nav-item').removeClass('active');
        jQuery(this).closest('li.nav-item.dropdown').removeClass('active');
    });

    jQuery('#mega-canvas-link').on('click', function(e) {
        // jQuery(this).toggleClass('active');
        jQuery('.bottom-collapse').toggleClass('active');
        jQuery('.bottom-collapse').toggleClass('show');
    });

    /*--------- on scroll stick header  ----------*/

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("header").addClass('smaller-header');
        } else {
            $("header").removeClass("smaller-header");
        }
    });
    // $('.slider-body').slick({
    //     centerMode: true,
    //     infinite: true,
    //     slidesToShow: 2,
    //     adaptiveHeight: true,
    //     slidesToScroll: 1,
    //     cssEase: 'linear',
    //     arrows: false

    // });
    if ($(window).width() < 768) {
        $('.mobile-slider').slick({
            centerMode: true,
            centerPadding: '5%',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            cssEase: 'linear',
            arrows: false

        });
    }

    $('.section-slider').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    centerPadding: '10%'
                }
            }

        ]

    });


    $(document).on('init', '.col-md-cus-7', function(event, slick) {
        var customSlide = $(event.target).closest('section').find('.slider-cus-thumbnail').find('.custom-slide');
        initialSlideIndex = slick.currentSlide;
        customSlide.eq(initialSlideIndex).addClass('active-slide');
    });

    $('.col-md-cus-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(document).on('afterChange', '.col-md-cus-7', function(event, slick, current) {
        var customSlide = $(event.target).closest('section').find('.slider-cus-thumbnail').find('.custom-slide');
        customSlide.removeClass('active-slide')
        customSlide.eq(current).addClass('active-slide');
    });

    $(document).on('click', '.slider-cus-thumbnail .custom-slide', function() {
        var currentIndex = $(this).index();

        $(event.target).closest('section').find('.col-md-cus-7').slick('slickGoTo', currentIndex);
    });
});

$(document).ready(function() {
    (function($) {
        console.clear();

        // stickit - shr-soc-mda
        var header = $('header');
        var customSocialIcon = $('.custom-social-icon')
        var articleShareBlock = customSocialIcon.find('.article-share-block');
        var shrSocialMedia = customSocialIcon.find('.shr-soc-mda');
        var shrSocialMediaHt = customSocialIcon.outerHeight();
        var shrSocialMediaOffsetTop = customSocialIcon.offset().top;
        var shrSocialMediaScrollArea = customSocialIcon.outerHeight() + shrSocialMediaOffsetTop;
        var documentHt = $(document).outerHeight();

        var shrSocialMediaSticky = $('.shr-soc-mda').sticky({
            topSpacing: shrSocialMediaOffsetTop,
            bottomSpacing: documentHt - shrSocialMediaScrollArea
        });

        var articleSlider = $('.article-slider');

        articleSlider.on('init', function(event, slick) {
            var count = slick.$slides.length;
            var activeSlide = slick.currentSlide + 1;

            $(event.target).closest('.article-gallery-item').find('.slider-count').text(activeSlide);
            $(event.target).closest('.article-gallery-item').find('.slider-totalcount').text(count);
        });

        var slickOptions = {
            arrows: false,
            dots: false,
            fade: true
        };

        articleSlider.slick(slickOptions);

        articleSlider.on('afterChange', function(event, slick, current) {
            var activeSlide = current + 1;
            $(event.target).closest('.article-gallery-item').find('.slider-count').text(activeSlide);
        });

        $(document).on('click', '.article-options .prev-btn', function() {
            $(this).closest('.article-gallery-item').find(".article-slider").slick('slickPrev');
        });

        $(document).on('click', '.article-options .next-btn', function() {
            $(this).closest('.article-gallery-item').find(".article-slider").slick('slickNext');
        });

        var beforeText = "";

        $(document).on('click', '.article-gallery-item .btn-outline-view', function() {
            var articleGalleryItem = $(this).closest('.article-gallery-item');
            var articleSlideItem = $(this).closest('.article-slide-item');
            var btnOutlineview = articleGalleryItem.find('.btn-outline-view');
            var articleOptions = articleGalleryItem.find('.article-options');
            var articleOptionWidth = articleOptions.outerWidth(true);

            if (!articleSlider.hasClass('article-grid')) {
                beforeText = $(this).text();
                articleSlider.addClass('article-grid');
                articleSlider.slick('unslick');
                btnOutlineview.text('View as slideshow');

                articleOptions.animate({
                    right: "-" + articleOptionWidth
                });
                articleShareBlock.find('.slider-option-sm').removeClass('d-none');

            } else {
                articleSlider.removeClass('article-grid');

                slickOptions.initialSlide = $(this).closest('.article-slide-item').index();
                articleSlider.slick(slickOptions);
                articleOptions.animate({
                    right: 0
                });


                btnOutlineview.text(beforeText);
                articleShareBlock.find('.slider-option-sm').addClass('d-none');
            }

            $('html,body').animate({
                scrollTop: articleSlideItem.offset().top - header.outerHeight()
            });
        });

        $(window).on('scroll', function() {
            if (articleSlider.hasClass('article-grid')) {

                var headerFixedPositon = header.hasClass('smaller-header') ? header.outerHeight(true) : 0;
                var windowScroll = $(window).scrollTop();
                var articleGridItem = $('.article-grid .article-slide-item');
                var articleOptions = articleShareBlock.find('.slider-option-sm');
                var sliderCount = articleOptions.find('.slider-count');
                var sliderTotalCount = articleOptions.find('.slider-totalcount');
                var totalGridItem = articleGridItem.length;

                if (sliderTotalCount.text() != totalGridItem) {
                    sliderTotalCount.text(totalGridItem);
                }

                articleGridItem.each(function() {
                    var itemOffSetTop = $(this).offset().top - headerFixedPositon - 1;
                    var itemOuterHeight = $(this).outerHeight(true);
                    var itemScrollArea = itemOuterHeight + itemOffSetTop;

                    if (windowScroll >= itemOffSetTop && windowScroll <= itemScrollArea) {
                        var itemIndex = $(this).index() + 1;

                        if (sliderCount.text() != itemIndex) {
                            sliderCount.text(itemIndex);
                        }
                    }
                });
            }
        });

        $(document).on('click', '.btn-grid-sm', function(event) {
            event.preventDefault();
            $('.btn-outline-view').eq(0).click();
        });

        $(document).on('click', '.slider-list-view .post-main', function() {
            var slideTo = $(this).closest('.article-slide-item').index();
            $('.slider-options-collapse .btn-grid').trigger('click');
            articleSlider.slick('slickGoTo', slideTo);
        });

        $(document).on('click', '.article-options .btn-grid', function(event) {
            event.preventDefault();
            var articleOptions = $(this).closest('.article-options');

            if (!articleOptions.hasClass('slider-options-collapse')) {
                articleOptions.addClass('slider-options-collapse');
                articleSlider.slick('unslick');
                articleSlider.addClass('slider-list-view');
                $('.slider-list-view').slimscroll({
                    height: "auto",
                    alwaysVisible: true
                });

            } else {
                articleOptions.removeClass('slider-options-collapse');
                articleSlider.slick(slickOptions);
                $('.slider-list-view').slimscroll({
                    destroy: true
                }).attr('style', '');

                articleSlider.removeClass('slider-list-view');
            }
        });

    })(jQuery);
});