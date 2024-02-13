const swiper = new Swiper('.swiper',  {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.s1.swiper-button-next',
      prevEl: '.s1.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
      },
      // when window width is >= 480px
      // 481: {
      //   slidesPerView: 'auto',
      //   spaceBetween: 0,
      //   centeredSlides: true,
      // },
      659: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
      },
      768: {
        slidesPerView: '2',
        spaceBetween: 80,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: '2',
        spaceBetween: 0,
        centeredSlides: true,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
  });
  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.s1.swiper-button-next',
      prevEl: '.s1.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: false,
      },
      // when window width is >= 480px
      // 481: {
      //   slidesPerView: 'auto',
      //   spaceBetween: 0,
      //   centeredSlides: true,
      // },
     
    },
  });


function closeMenu(){
  document.getElementById('body-burger').classList.remove('open');


}

document.getElementById('burger-menu').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('body-burger').classList.add('open');
})

document.getElementById('burger-menu_close').addEventListener('click', function(e){
  e.preventDefault();
 closeMenu()
})



let links = document.getElementsByClassName('burger-menu_modern-skills');
// console.log(links);
for (let elem of links) {
  elem.addEventListener("click", function(e){
    e.preventDefault();
    let link = e.target;
    let linkTarget = document.querySelector(link.getAttribute('href'));
    linkTarget.scrollIntoView({
            behavior: 'smooth'
        });
    closeMenu();
  })
}





let ancors = document.getElementsByClassName('link_scroll');
for (let elem of ancors) {
  elem.addEventListener("click", function(e){
    e.preventDefault();
    let link = e.target;
    let linkTarget = document.querySelector(link.getAttribute('href'));
    linkTarget.scrollIntoView({
            behavior: 'smooth'
        });
  })
}



