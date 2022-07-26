const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 30 ,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
    Thumbs: false,
    Toolbar: false,
    closeButton: "top",
  });