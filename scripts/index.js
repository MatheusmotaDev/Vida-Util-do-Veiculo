var swiper = new Swiper('.home-slider', {
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop:true,
    centeredSlides:true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


})


let login = document.querySelector ('.login-form');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
}
