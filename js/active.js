$(document).ready(function() {


    // slider-active

    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // project-active

    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    // blog-area

    $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    // video popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

})