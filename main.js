function changeIcon() {
  if ($('header').find('nav').hasClass('show')) {
    $('header').find('.btn-menu').html(`
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      `);
  } else {
    $('header').find('.btn-menu').html(`
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

    console.log('off', offset);
    console.log('elheight', elementHeight);
    $(this).css({
      opacity: visiblePercent / 100,
      transform: 'translateY(' + 40 * (1 - visiblePercent / 100) + 'px)',
    });
  });
}

$(document).ready(function () {
  $('header')
    .find('.btn-menu')
    .click(function () {
      $('header').find('nav').toggleClass('show');
      changeIcon();
    });

  checkVisible();
  $(window).scroll(function () {
    checkVisible();
  });
});
