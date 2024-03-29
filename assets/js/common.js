$(document).ready(function () {
  $('.header_menu_ham .ham_btn').click(function () {
    $('.header_menu_ham').addClass('active');
  });
  $('.header_menu_ham .ham_close').click(function () {
    $('.header_menu_ham').removeClass('active');
  });

  const swiper = new Swiper('.swiper-container', {
    //기본 셋팅
    //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
    direction: 'vertical',
    //한번에 보여지는 페이지 숫자
    slidesPerView: 1,
    //페이지와 페이지 사이의 간격
    // spaceBetween: 30,
    //드레그 기능 true 사용가능 false 사용불가
    debugger: false,
    //마우스 휠기능 true 사용가능 false 사용불가
    mousewheel: false,
    //반복 기능 true 사용가능 false 사용불가
    loop: true,
    //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
    centeredSlides: true,
    // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    // effect: 'fade',
    speed: 1000,
    //자동 스크를링
    autoplay: {
      //시간 1000 이 1초
      delay: 3500,
      disableOnInteraction: false,
    },
    //페이징
    pagination: {
      //페이지 기능
      el: '.swiper-pagination',
      //클릭 가능여부
      clickable: true,
    },
    //방향표
    navigation: {
      //다음페이지 설정
      nextEl: '.swiper-button-next',
      //이전페이지 설정
      prevEl: '.swiper-button-prev',
    },
  });
  var head = $('#header').load('./include/header.html');
  console.log(head);
  // $('#footer').load('/footer.html');
});

$(window).scroll(function () {
  var ani = $('.blend_img').offset();
  if ($(window).scrollTop() > ani.top) {
    $('.blend_img').removeClass('on');
    $('.blend_txt').removeClass('on');
  } else {
    $('.blend_img').addClass('on');
    $('.blend_txt').addClass('on');
  }
  if ($(window).scrollTop() > 700) {
    $('.season_txt').addClass('on');
  }
  if ($(window).scrollTop() > 2000) {
    $('.store_txt').addClass('on');
  } else {
    $('.store_txt').removeClass('on');
  }
});
