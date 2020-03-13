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

    jQuery('.nav-tab .nav-item').hover(function() {
        var paneIndex = jQuery(this).index();

        jQuery(this).closest('.nav-tab').next().find('.nav-pane').eq(paneIndex).addClass('active');
        jQuery('li.nav-item.dropdown').removeClass('active');
        jQuery(this).closest('li.nav-item.dropdown').addClass('active');
    }, function() {
        jQuery(this).closest('li.nav-item.dropdown').removeClass('active');
        jQuery('.nav-tab').next().find('.nav-pane').removeClass('active');
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

    $('.col-md-cus-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-cus-thumbnail'
    });

    $('.slider-cus-thumbnail').slick({
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        verticalSwiping: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.col-md-cus-7',
        focusOnSelect: true
    });

});