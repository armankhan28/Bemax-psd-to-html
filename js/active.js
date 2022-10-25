$(document).ready(function() {

    
// menu
$('#menu-active').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "767"
});

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
            768:{
                items:2
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
    // testi-area

    $('.testi-active').owlCarousel({
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


    // brand area

    $('.brand-active').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        navText:['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })



    // video popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

      
// sticky
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 5) {
        $(".header-area").removeClass("sticky");
    } else {
        $(".header-area").addClass("sticky");
    }
   });



  

      // scrollToTop
 $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

});






})



