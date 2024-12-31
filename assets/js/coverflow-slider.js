const swiperBgImg = document.querySelector(".swiper-bg-img");

var swiperCoverflow = new Swiper(".coverflow", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 35,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

swiperCoverflow.on('slideChangeTransitionEnd', function (e) {
    e.slides.forEach(currentSlide => {
        if (currentSlide.classList.contains("swiper-slide-active")) {
            swiperBgImg.src = `./assets/imgs/${currentSlide.dataset.backgroundImage}`;
        }
    });
});

swiperCoverflow.on('slideChange', function (e) {
    e.slides.forEach(currentSlide => {
        if (currentSlide.classList.contains("swiper-slide-active")) {
            swiperBgImg.src = `./assets/imgs/${currentSlide.dataset.backgroundImage}`;
        }
    });
});