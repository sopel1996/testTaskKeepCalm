//TODO: сделать нормальное подключение fancybox и разобраться с ошибкой в нем
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 30 ,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });