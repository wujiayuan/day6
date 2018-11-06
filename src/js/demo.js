require(['jquery', 'swiper', 'better'], function($, swiper, better) {
    new swiper('.swiper-container', {
        pagination: {
            el: ".swiper-pagination"
        }
    })
})