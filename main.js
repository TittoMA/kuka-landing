$(document).ready(function () {
  $('header')
    .find('.btn-menu')
    .click(function () {
      $('header').find('nav').toggleClass('show');
      changeIcon();
    });
});

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
