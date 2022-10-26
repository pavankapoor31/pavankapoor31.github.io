$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });
});

// toggling menu/navbar
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass('active');
});

function toggleClass() {
  $('.navbar .menu').toggleClass('active');
}
