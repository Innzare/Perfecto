$('.feedback .slider').slick({
    dots: true,
    infinite: false,
    speed: 700,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1824,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 778,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let list = document.querySelector('header .header-wrapper div.head-menu-list')

function burgerListOpen(icon) {
    list.classList.add("open")
}

function burgerListClose(icon) {
    list.classList.remove("open")
}