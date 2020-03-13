     $(document).ready(function() {
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