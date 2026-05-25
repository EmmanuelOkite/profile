document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggle = document.querySelector('#mobileNavToggle');
  const navbar = document.querySelector('#navbar');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      mobileNavToggle.classList.toggle('bi-list');
      mobileNavToggle.classList.toggle('bi-x-lg');
    });
  }

  /**
   * Hide mobile nav on link click
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    navbarlink.addEventListener('click', () => {
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x-lg');
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider
   */
  new Swiper('.slides-1', {
    speed: 600, loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto', pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  new Swiper('.slides-3', {
    speed: 600, loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto', pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 320: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 3 } }
  });

  new Swiper('.gallery-slider', {
    speed: 400, loop: true, centeredSlides: true, autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto', pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
    breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 640: { slidesPerView: 3, spaceBetween: 20 }, 992: { slidesPerView: 5, spaceBetween: 20 } }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
  }
  window.addEventListener('load', aos_init);
});
