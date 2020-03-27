$('.article--gallery--inner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: true,
    draggable: true,
    touchMove: true,
    fade: true,
    // rtl: set_rtl,
    cssEase: 'linear',
    // prevArrow: '<div class="gallery--navigation--button gallery--previous"><img src="' + image_url + '/va-gallery-previous.svg' + '" alt="previous"></div>',
    // nextArrow: '<div class="gallery--navigation--button gallery--next"><img src="' + image_url + '/va-gallery-next.svg" alt="previous"></div>',
    // appendArrows: slick_gallery.siblings('.article--gallery--meta').find('.gallery--navigation'),
    responsive: [{
        breakpoint: 1240,
        settings: {
            dots: true
        },
        breakpoint: 400,
        settings: {
            adaptiveHeight: false,
            // centerMode: true,
            // variableWidth: true,
            // lazyLoad: 'progressive',
            // prevArrow: '<div class="gallery--navigation--button gallery--previous"><img src="' + image_url + '/va-gallery-previous-thick.svg' + '" alt="previous"></div>',
            // nextArrow: '<div class="gallery--navigation--button gallery--next"><img src="' + image_url + '/va-gallery-next-thick.svg" alt="previous"></div>'
        }
    }]
})