var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView:4,
        },
        768: {
          slidesPerView:2,
        },
        280: {
          slidesPerView:1,
        }
      },
  });

  var swipers = new Swiper(".mySwipers", {
    slidesPerView: 4,
    autoplay:true,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView:4,
        },
        768: {
          slidesPerView:2,
        },
        280: {
          slidesPerView:1,
        }
      },
  });
