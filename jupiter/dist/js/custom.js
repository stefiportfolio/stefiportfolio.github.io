// $('.go-up-wrap').on('click',function() {
//     $('html,body').animate({
//       scrollTop: 0
//     }, 600);
// });

$('header .nav-icon').on('click', function() {
  if ($('.cd-primary-nav').hasClass('is-visible')) {
    $('.cd-primary-nav').removeClass('is-visible');
  } else {
    $('.cd-primary-nav').addClass('is-visible');
  }
});

$('.close-wrapper').on('click', function() {
  if ($('.cd-primary-nav').hasClass('is-visible')) {
    $('.cd-primary-nav').removeClass('is-visible');
  }
});