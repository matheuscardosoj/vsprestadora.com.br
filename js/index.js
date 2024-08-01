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

    grabCursor: true,
});

// Deixe o slidePerView em 3 por padrão e quando for diminuindo a tela, diminua o slidePerView

const swiperClientes = new Swiper('.clientes__carrousel', {
    direction: 'horizontal',

    loop: true,

    autoplay: {
        delay: 2000
    },

    slidesPerView: 1,

    setWrapperSize: true,

    grabCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 1
        },

        1024: {
            slidesPerView: 2
        },

        1440: {
            slidesPerView: 3
        }
    }
});
