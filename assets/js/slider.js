const blogSlider = new Swiper('.blogs-lists', {
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    breakpoints: {
        '768': {
            slidesPerView: 3,
        },
        '1024': {
            slidesPerView: 3,
        },
        '1600': {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: '.blogs-button-next',
        prevEl: '.blogs-button-prev',
    },
    scrollbar: {
        el: '.blog-scrollbar',
    },
});
const productSlider = new Swiper('.products-lists', {
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    breakpoints: {
        '768': {
            slidesPerView: 3,
        },
        '1024': {
            slidesPerView: 3,
        },
        '1600': {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
    },
    scrollbar: {
        el: '.product-scrollbar',
    },
});