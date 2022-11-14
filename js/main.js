"use strict";

$(function () {
  /*---------- ハンバーガーメニュー ----------*/
  const hamburger = $(".js_hamburger");
  const nav = $(".js_nav");

  hamburger.on("click", function () {
    $(this).find(".js_hamburger_bar").toggleClass("is_active");
    nav.toggleClass("is_active");
    $(".js_body").toggleClass("is_hidden");
    $(".js_header-logo").toggleClass("is_active");
  });

    /*---------- トップに戻るボタン ----------*/
    const pageTop = $(".js_page-top");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > $(window).height()) {
        pageTop.addClass("is_active");
      } else {
        pageTop.removeClass("is_active");
      }
    });

    pageTop.on("click", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        800
      );
    });

        /*---------- 画面転移 ----------*/
    $(window).on('load',function(){
      $(".m_splash-logo").delay(1200).fadeOut('slow');
      $(".m_splash").delay(1500).fadeOut('slow',function(){
          $('body').addClass('appear');
      });

      $('.m_splashbg').on('animationend', function() {
      });
  });
                /*---------- フリップボックス ----------*/
    $('.top_skill-item').click(function () {
      var flipbox = $(this).find('.top_skill_flip-box-inner');
      if ($(flipbox).hasClass('flip-box-inner-open')) {
          $(flipbox).removeClass('flip-box-inner-open').addClass('flip-box-inner-close');
      }
      else {
          $(flipbox).removeClass('flip-box-inner-close').addClass('flip-box-inner-open');
      }
    });

    $(document).on('ready', function() {
      $(".js_works").slick({
        centerMode: true,
        centerPadding: '5%',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
      });
    });

                /*---------- テキストがふわっと ----------*/
    $(".about_strength").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is_active");
      } else {
        $(this).stop().removeClass("is_active");
      }
    });

    $(".about_strength_txts").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is_active");
      } else {
        $(this).stop().removeClass("is_active");
      }
    });

    $(".about_strength").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is_active");
      } else {
        $(this).stop().removeClass("is_active");
      }
    });
  });

    /*---------- gsap----------*/
gsap.fromTo(
  ".js_skill",
  {
    y: 400,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
    duration: 3,
    ease: "Power4.inOut",

    scrollTrigger: {
      trigger: ".js_skill-trigger",
      start: "top center",
    },
    stagger: {
      each: 1.2,
      from: "start",
    },
  }
);

gsap
  .timeline()
  .fromTo(".js_copy", 5, { x: -120, opacity: 0 }, { x: 30, opacity: 1 })

  function TextRandomAnimeControl() {
	$('.TextRandomAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appearRandomtext");

		} else {
			$(this).removeClass("appearRandomtext");
		}
	});
};

// slick
  $(document).on('ready', function() {
    $("js_works").slick({
      autoplay: true,
      autoplaySpeed: 1500,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
    });
  });