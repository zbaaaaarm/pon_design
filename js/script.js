$(function() {
  // スクロールでヘッダーの背景色追加
  var header = $('.header');
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(); 
    if (scroll > 65) {
      $(header).addClass("active");
    } else {
      $(header).removeClass("active");
    };
  });

  // モバイルメニュー
  $('.btn-menu').click(function() {
    var menutype = $(this).find('span').text();
    if (menutype === "menu") {
      $('.mobile-nav').addClass('active');
      $(this).find('span').text("close");
    } else {
      $('.mobile-nav').removeClass('active');
      $(this).find('span').text("menu");
    };
  });

  // Swiper
  var swiper;
  swiper = new Swiper ('.swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});