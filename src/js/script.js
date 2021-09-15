// TOGGLE ACCORDEON //
document.querySelector('.faq-accordeon').addEventListener('click', (event) => {
  if (event.target.closest('.faq-accordeon__item')){
    event.target.closest('.faq-accordeon__item').classList.toggle('faq-accordeon__item--active')
  }
});


// BURGER & SCROLL-BLOCK & CLOSE MENU TO CLICK ANY ITEM OR BURGER FILL//
const burger = document.querySelector('.btn__burger');

burger.addEventListener('click', (event) => {

  const header = document.querySelector('.section-header'),
  mainNavigation = document.getElementById('main-navigation'),
  menuItems = document.querySelectorAll('.nav-wrapper__item'),
  socialItems = document.querySelectorAll('.socials-wrapper__item'),
  logoHeader = document.getElementById('logo'),
  btnHeader = document.getElementById('btn-header'),
  clickableItems = [...menuItems, ...socialItems, logoHeader, btnHeader];

  // SHOW & HIDE NAVIGATION 2 CLICK BURGER //
  header.classList.toggle('section-header_active');
  burger.classList.toggle('btn__burger_active');


  // TOGGLE SCROLL //
  const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
  }

  const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
    mainNavigation.style.paddingRight = scrollWidth;
  }
  const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
    mainNavigation.style.paddingRight = '';
  }

  if (header.classList.contains('section-header_active')) {
    hideScroll();
  } else {
    showScroll();
  }

// ESCAPE SCROLL-TOGGLING, IF USER START TO RESIZE WINDOW //
  const resetScrollToggle = () => {
    header.classList.remove('section-header_active');
    burger.classList.remove('btn__burger_active');
    showScroll();
  };

  window.addEventListener('resize', resetScrollToggle);

  // ESCAPE SCROLL-TOGGLING, IF USER CLICK FILL //
  header.addEventListener('click', (e) => {
    if ((e.offsetX > header.offsetWidth) || (e.offsetY > header.offsetHeight)) {
      resetScrollToggle();
    }
  });

  // ESCAPE SCROLL-TOGGLING, IF USER CLICK ANY MENU-ITEM //
  clickableItems.forEach(item => {
    item.addEventListener('click', resetScrollToggle);
  });

});

new Swiper('.section-hero-image', {
  loop: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-25%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.slider-blog', {
  loop: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Swiper('.section-quotes__right', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 64,
  initialSlide: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

