function changeIcon() {
  if ($('header').find('nav').hasClass('show')) {
    $('header').find('.header__btn-menu').html(`
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      `);
  } else {
    $('header').find('.header__btn-menu').html(`
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
      </svg>
    `);
  }
}

function checkVisible() {
  let scrollPos = $(window).scrollTop();
  let windowHeight = window.innerHeight;

  $('.scroll-animate').each(function () {
    let offsetTop = $(this).offset().top;
    let elementHeight = $(this).outerHeight();
    const offset = elementHeight * 0.1;

    let visiblePercent = ((windowHeight - (offsetTop - scrollPos + offset)) / elementHeight) * 100;
    visiblePercent = Math.min(100, Math.max(0, visiblePercent));

    $(this).css({
      opacity: visiblePercent / 100,
      transform: 'translateY(' + 40 * (1 - visiblePercent / 100) + 'px)',
    });
  });
}
function changeAccordionIcon() {
  $('.faq__accordion').each(function () {
    if ($(this).find('.faq__accordion-content').hasClass('show')) {
      $(this).find('.faq__accordion-toggle-btn').css({
        rotate: '180deg',
      });
    } else {
      $(this).find('.faq__accordion-toggle-btn').css({
        rotate: '0deg',
      });
    }
  });
}

function accordionToggle() {
  $('.faq__accordion').each(function () {
    const accordion = $(this);
    $(this)
      .find('.faq__accordion-toggle')
      .click(function () {
        if (accordion.find('.faq__accordion-content').hasClass('show')) {
          $('.faq__accordion-content').removeClass('show');
        } else {
          $('.faq__accordion-content').removeClass('show');
          accordion.find('.faq__accordion-content').toggleClass('show');
        }
        changeAccordionIcon();
      });
  });
}

function toggleMore() {
  const dots = $('.about__content').find('.about__dots')[0];
  const moreText = $('.about__content').find('.about__text-more')[0];
  const btnText = $('.about__content').find('.about__btn-more')[0];

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.maxHeight = 0;
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.maxHeight = '500px';
  }
}

$(document).ready(function () {
  $('header')
    .find('.header__btn-menu')
    .click(function () {
      $('header').find('nav').toggleClass('show');
      changeIcon();
    });

  accordionToggle();
  checkVisible();
  $(window).scroll(function () {
    checkVisible();
  });
});
