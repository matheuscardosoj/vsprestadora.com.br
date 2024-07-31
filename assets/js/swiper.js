const swiperServicos = new Swiper('.servicos__card__carrousel', {
    direction: 'horizontal',

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    autoplay: {
        delay: 2000
    },

    slidesPerView: 1,

    setWrapperSize: true,

    grabCursor: true
});


const swiperClientes = new Swiper('.clientes__carrousel', {
    direction: 'horizontal',

    loop: true,

    autoplay: {
        delay: 2000
    },

    slidesPerView: 3,

    setWrapperSize: true,

    grabCursor: true
});
