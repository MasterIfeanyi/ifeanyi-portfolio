// Reviews
$('#blog-carousel').owlCarousel({
    loop:true,
    margin:28,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3.5
        }
    }
})