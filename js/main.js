(function ($) {
  "use strict";

  /*===========================================
        Table of contents
    01. On Load And On Resize Function
    02. Mobile Menu
    03. Sticky fix
    04. Scroll To Top
    05. Popup Sidebar and Search Box
    06. Counter Up Active
    07. Hero Slider Active
    08. Nice Select
    09. Latest Project Slider
    10. Team Slider Active
    11. Featured Slider Active
    12. Price Table Slider
    13. Testomonial Sliders
    14. Blog Slider
    15. Brand Slider
    16. Team Social Hover Effect
    17. Set Background Color
    18. Service Slider
    19. Galley
    20. Widget Slider 
    21. Scroll Down
    22. Contact Form Slider
    23. MIssion Slider Active
    24. FAQ Parent Class Add
    25. Date & Time Picker
    26. Branch Information Slider & Toggler
    27. Progress Bar
    28. Service Details Slider
    29. Twenty Twenty Img Handle
    30. Button Animation
    31. Product Image Slider
    32. Quantity Adder
    33. Rating Input Class Add
    34. Product Ship Another Toggle
    35. AOS Scroll Animation
    36. One Page Nav
    37. Isotop Active
    37. Right Click Disable
    38. Inspect Element Disable
    39. Google Map Active
    

    =============================================*/


  /*---------- 01. On Load And On Resize Function  ----------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut('slow');
    setTimeout(function(){
      aosAnimation();
    }, 5000)
  });

  $(window).on('resize', function () {
    aosAnimation();
  });



  /*----------- 02. Mobile Menu ----------*/
  function mobielMenu() {
    // Active The Menu
    let mobileMenu = {
      menuActive: '.main-menu',
      menuContainer: '.mobile-menu',
      meanScreenWidth: 992,
      subMenuContainer: 'li.menu-item-has-children',
      mainWrapper: '.mobile-menu-wrapper',
      areaWrapper: '.mean-menu-area',
      openBtn: '.menuToggleBtn',
      clsBtn: '.mobileMenucls'
    }

    // Transfer the object with short form
    let opt = $.extend(mobileMenu),
      menu = $(opt.menuActive),
      container = $(opt.menuContainer),
      subMenu = opt.subMenuContainer + '> ul',
      dropDownBtn = opt.subMenuContainer + '> a';
    // Show Mean Menu
    function meanMenu() {
      menu.css('display', 'none');
      container.html(menu.html());
      // Hide the menu By default
      $(subMenu).css('display', 'none');
      // Mobile Menu Dropdown
      $(dropDownBtn).each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          $(this).parent().toggleClass('show');
          $(this).next('ul').slideToggle(300);
          $(this).next('ul').toggleClass('open');
        })
      });
    }
    // Show Orginal Menu
    function menuOrginal() {
      menu.css('display', '');
      $(subMenu).css('display', '');
      $(opt.mainWrapper).removeClass('menu-visible');
      container.html('')
    }
    // Current Windows Size
    let screenWidth = $(window).width();
    // Check Screen Size
    function screenChecker() {
      if (screenWidth < opt.meanScreenWidth) {
        meanMenu();
      } else {
        menuOrginal();
      }
    };
    screenChecker();
    // Check On windows Resize
    $(window).on('resize', function () {
      screenWidth = $(window).width();
      screenChecker();
    });


    // Menu Wrapper
    var menuWrap = $(opt.mainWrapper);
    var menuArea = $(opt.areaWrapper);

    // Menu Open
    $(opt.openBtn).on('click', function () {
      menuWrap.addClass('menu-visible');
    })

    // Menu Close
    $(opt.clsBtn).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      menuWrap.removeClass('menu-visible');
      autoMenuCls();
    });

    // Outside Click Hide
    menuWrap.on('click', function (e) {
      e.stopPropagation();
      $(this).removeClass('menu-visible');
      autoMenuCls();
    });
    menuArea.on('click', function (e) {
      e.stopPropagation();
      menuWrap.addClass('menu-visible')
    });

    // Auto Close Sub Menu On Click Cls Btn
    function autoMenuCls() {
      if ($(subMenu).hasClass('open')) {
        $(subMenu).removeClass('open');
        $(subMenu).slideUp(300);
        $(opt.subMenuContainer).removeClass('show');
      }
    }

  }
  mobielMenu();



  /*---------- 03. Sticky fix ----------*/
  var lastScrollTop = '';
  function stickyMenu($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();
    if ($(window).scrollTop() > 600) {
      if (st > lastScrollTop) {
        // hide sticky menu on scroll down
        $targetMenu.removeClass($toggleClass);

      } else {
        // active sticky menu on scroll up
        $targetMenu.addClass($toggleClass);
      };
    } else {
      $targetMenu.removeClass($toggleClass);
    };

    lastScrollTop = st;
  };

  $(window).on("scroll", function () {
    stickyMenu($('.sticky-header'), "active");

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').addClass('show');
    } else {
      $('.scrollToTop').removeClass('show');
    }

  });



  /*---------- 04. Scroll To Top ----------*/
  $('.scrollToTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 4000);
    return false;
  })




  /*---------- 05. Popup Sidebar and Search Box ----------*/
  function popupSideMenu() {
    // Sidebar Popup
    $('.sidebarToggler').on('click', function (e) {
      e.preventDefault();
      $('.sidemenu-wrapper').addClass('show');
    });
    $('.sidemenu-wrapper').on('click', function (e) {
      e.stopPropagation();
      $('.sidemenu-wrapper').removeClass('show')
    });
    $('.sidemenu-wrapper > div').on('click', function (e) {
      e.stopPropagation();
      $('.sidemenu-wrapper').addClass('show')
    });
    $('.sideMenuCls').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sidemenu-wrapper').removeClass('show');
    });


    // Search Box Popup
    $('.searchBoxTggler').on('click', function (e) {
      e.preventDefault();
      $('.popup-search-box').addClass('show');
    });
    $('.popup-search-box').on('click', function (e) {
      e.stopPropagation();
      $('.popup-search-box').removeClass('show');
    });
    $('.popup-search-box form').on('click', function (e) {
      e.stopPropagation();
      $('.popup-search-box').addClass('show');
    });
    $('.searchClose').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('.popup-search-box').removeClass('show');
    });
  };
  popupSideMenu();


  /*----------- 06. Counter Up Active ----------*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });



  /*----------- 07. Hero Slider Active ----------*/
  // Home 1 Slider
  $('.hero-slider-active').layerSlider({
    pauseOnHover: false,
    navPrevNext: false,
    navStartStop: false,
    navButtons: false,
    hoverPrevNext: true,
    hoverBottomNav: true,
    loop: true,
    autostart: false,
    height: 1000,
    responsiveUnder: 1480,
    layersContainer: 1480,
    skinsPath: 'layerslider/skins/',
    showCircleTimer: false,

  });


  // Home 2 Slider
  $('.hero-slider2-active').layerSlider({
    pauseOnHover: false,
    navPrevNext: false,
    navStartStop: false,
    hoverPrevNext: true,
    hoverBottomNav: true,
    navButtons: true,
    thumbnailNavigation: 'disabled',
    loop: true,
    autostart: false,
    height: 1000,
    responsiveUnder: 1480,
    layersContainer: 1480,
    skinsPath: 'layerslider/skins/',
    showCircleTimer: false,

  });


  // Home 3 Slider
  $('.hero-slider3-active').layerSlider({
    pauseOnHover: false,
    navPrevNext: true,
    hoverPrevNext: true,
    hoverBottomNav: true,
    navStartStop: false,
    navButtons: false,
    loop: true,
    autostart: false,
    height: 1200,
    responsiveUnder: 1480,
    layersContainer: 1480,
    skinsPath: 'layerslider/skins/',
    showCircleTimer: false,

  });

  // Home 3 Slider
  $('.hero-slider4-active').layerSlider({
    pauseOnHover: false,
    navPrevNext: true,
    hoverPrevNext: true,
    hoverBottomNav: true,
    navStartStop: false,
    navButtons: false,
    loop: true,
    autostart: false,
    height: 700,
    responsiveUnder: 1480,
    layersContainer: 1480,
    skinsPath: 'layerslider/skins/',
    showCircleTimer: false,

  });







  /*----------- 08. Nice Select ----------*/
  $('.select2').select2();




  /*----------- 09. Latest Project Slider ----------*/
  $('.latProject-slider-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  /*----------- 10. Team Slider Active ----------*/
  // Team Slider For Layout 1
  $('.team-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Team Slider For Layout 2 
  $('.team-slider2-active').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev skew type2"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next skew type2"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Team Slider For Layout 2 
  $('.team-slider3-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });






  /*----------- 11. Featured Slider Active ----------*/
  $('.featured-slider-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });






  /*----------- 12. Price Table Slider ----------*/
  // Pricing  Layout 1 
  $('.priceTable-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    centerMode: true,
    centerPadding: '5px',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Pricing  Layout 2 
  $('.priceTable-slider2-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




  // Pricing  Layout 3
  $('.priceTable-slider3-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // Pricing Layout 4 
  $('.priceTable-slider4-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });







  /*----------- 13. Testomonial Sliders ----------*/
  // Testomonial Slider Layout 1 
  $('.testomonal-slider1').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          speed: 1000
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Testomonial Slider Layout 2
  $('.testomonial-slider2-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    fade: true,
    dots: false,
    infinite: true,
    asNavFor: '.testomonial-avatar-nav'
  });

  $('.testomonial-avatar-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    asNavFor: '.testomonial-slider2-active',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    arrows: false,
    infinite: true,
    variableWidth: true,
  });


  // Testomonial Slider Layout 3 
  $('.testomonial-slider3-active').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });



  // Testomonial Slider Layout 4
  $('.testomonal-slider4-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Testomonial Slider Layout 5
  $('.testomonal-slider5-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });






  /*----------- 14. Blog Slider ----------*/
  // Blog Layout 1 Slider
  $('.blog-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // Blog Layout 2 Slider
  $('.popular-blog').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev skew type2"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next skew type2"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.latest-blog-area',
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.latest-blog-area').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev skew type2"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next skew type2"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.popular-blog',
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Blog Slider Layout 3
  $('.blog-slider3-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Blog Slider Layout 4
  $('.blog-slider4-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Blog Image Slider
  $('.blog-img-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  /*----------- 15. Brand Slider ----------*/
  $('.brand-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.brand-slider2-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




  /*----------- 16. Team Social Hover Effect ----------*/
  $('.member-link').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $(this).prev('ul.hover-link').addClass('show');
      $(this).addClass('hide');
    });
    $(this).on('mouseover', function () {
      $(this).prev('ul.hover-link').addClass('show');
      $(this).addClass('hide');
    })
  });
  $('.team-member').on('mouseleave', function () {
    if ($('ul.hover-link').hasClass('show')) {
      $('ul.hover-link.show').removeClass('show')
      $('.member-link.hide').removeClass('hide')
    }
  })



  /*---------- 17.Set Background Image ----------*/
  if ($('.background-image').length > 0) {
    $('.background-image').each(function () {
      var src = $(this).attr('data-img');
      $(this).css({
        'background-image': 'url(' + src + ')'
      });
    });
  };




  /*----------- 18. Service Slider ----------*/
  // Service Slider 1
  $('.service-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev skew type2"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next skew type2"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Service Slider 1
  $('.service-slider2-active').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
          arrows: true,
          slidesToShow: 3,
        }
      }, {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  /*----------- 19. Galley ----------*/
  // Gallery Slider Layout 1
  $('.gallery-slider1-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 700,
    fade: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*----------- 20. Widget Slider ----------*/

  // Blog Image Widget Slider 
  $('.blogimg-wid-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  // Comment Widget Slide
  $('.comment-widget-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });



  /*---------- 21. Scroll Down ----------*/
  function smoothScrollDown() {
    $('.scroll-down').each(function () {
      $(this).on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
          }, 1500);
        }
      });
    })
  };
  smoothScrollDown();



  /*---------- 22. Contact Form Slider ----------*/
  $('.contactForm-slide-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1670,
      settings: {
        dots: false
      }
    }]
  });




  /*---------- 23. MIssion Slider Active ----------*/
  $('.mission-slider-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




  /*---------- 24. FAQ Parent Class Add ----------*/
  function faqClassAdd() {
    $('.faq-title button').each(function () {
      $(this).on('click', function () {
        var wrapper = $(this).parent().parent().parent();
        if (wrapper.hasClass('open')) {
          wrapper.removeClass('open')
        } else {
          $('.single-faq.open').removeClass('open')
          wrapper.addClass('open')
        }
      })
    });
  }
  faqClassAdd();




  /*---------- 25. Date & Time Picker ----------*/
  // Time And Date Picker
  $('.dateTime-pick').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'y-m-d H:i',
    hours12: false,
    step: 30
  });

  // Only Date Picker
  $('.date-pick').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'y-m-d',
    step: 10
  });

  // Only Time Picker
  $('.time-pick').datetimepicker({
    datepicker: false,
    timepicker: true,
    format: 'H:i',
    hours12: false,
    step: 10
  });




  /*---------- 26. Branch Information Slider & Toggler ----------*/
  // Branch Information slider
  $('.branchInfo-slider-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // On Slide Hide the open officer info box 
  $('.branchInfo-slider-active').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.officer-info-box.show').removeClass('show')
  });

  // Branch Officer Toggler
  function officerBoxToggler() {
    $('.officer-info-toggler').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        var box = $(this).next('.officer-info-box');
        if (box.hasClass('show')) {
          box.removeClass('show')
        } else {
          $('.officer-info-box.show').removeClass('show')
          box.addClass('show')
        }
      })
    });
  }
  officerBoxToggler();



  /*---------- 27. Progress Bar ----------*/
  // Circle Progress Bar Active
  function circleBarActive(){
    var  circleProgressWidth = 110;
    var  circleThickness = 7;
    var windowWidth = $(window).width();

    if (windowWidth < 768) {
      circleProgressWidth = 100;
      circleThickness = 4;
    } else {
      circleProgressWidth = 110;
      circleThickness = 8;
    }
    
    $('.circle-progress').circleProgress({
      size: circleProgressWidth,
      thickness: circleThickness,
      startAngle: -1.6,
      fill: '#0046e2',
      emptyFill: '#f4f4f4'
    }).on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).find('span').text(stepValue.toFixed(2).substr(2) + '%');
    });
  };
  circleBarActive();

  // Progress Bar Active
  $('.bar-progress .progress-value').each(function(){
    var width = $(this).attr('data-value');
    $(this).css('width', width + '%')
  })




/*---------- 28. Service Details Slider ----------*/
  $('.service-img-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    asNavFor: '.service-img-slide-nav',
  });
  $('.service-img-slide-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.service-img-slide',
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
    }]
  });




/*---------- 29. Twenty Twenty Img Handler ----------*/




/*---------- 30. Button Animation ----------*/
  function buttonAnimation(btn){
    $(btn).each(function () {
      var text = $(this).html();
      $(this).html('')
      $(this).prepend('<span class="btn-text">' + text + '</span><span class="btn-bg"></span>')
    })
    var effectElement = 'span.btn-bg';
    if ($(btn).length > 0) {
      $(btn).on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        if ($(this).find(effectElement)) {
          $(this).find(effectElement).css({
            top: relY,
            left: relX,
          });
        }
      });
      $(btn).on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        if ($(this).find(effectElement)) {
          $(this).find(effectElement).css({
            top: relY,
            left: relX,
          });
        }
      });
    };
  };
  buttonAnimation('.primary-btn');





/*---------- 31. Product Image Slider ----------*/
  $('.product-img-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    speed: 700,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
  });


  $('.product-details-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    speed: 700,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
    asNavFor: '.product-details-thumb'
  });

  $('.product-details-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 700,
    focusOnSelect: true,
    asNavFor: '.product-details-img',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }]
  });



  /*----------- 32. Quantity Adder ----------*/
  $('.quantity-plus').each(function () {
    $(this).on('click', function () {
      var $qty = $(this).siblings(".qty-input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    })
  });

  $('.quantity-minus').each(function () {
    $(this).on('click', function () {
      var $qty = $(this).siblings(".qty-input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });
  })



  /*----------- 33. Rating Input Class Add ----------*/
  if ($('.vs-rating-input').length > 0){
    $('.vs-rating-input').each(function () {
      $(this).find('span').on('click', function () {
        $('.vs-rating-input span').addClass('active');
        $(this).nextAll('span').removeClass('active');
      });
    });
  };



  /*----------- 34. Product Ship Another Toggle ----------*/
  $('#buyerShipAnother').on('change', function () {
    if ($(this).is(':checked')) {
      $('.vs-billing-differentAddress').slideDown();
    } else {
      $('.vs-billing-differentAddress').slideUp();
    }
  });




  /*----------- 35. AOS Scroll Animation ----------*/
  function aosAnimation() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
      // offset: 100,
      delay: 300,
      once: true,
    });

    var animateLeft = $('[data-aos="fade-left"]');
    var animateRight = $('[data-aos="fade-right"]');
    if ($(window).width() < 1600) {
      if (animateLeft.length > 0) {
        animateLeft.each(function () {
          $(this).attr("data-aos", "fade-up");
          $(this).addClass('aos-left');
        });
      };
      if (animateRight.length > 0) {
        animateRight.each(function () {
          $(this).attr("data-aos", "fade-up");
          $(this).addClass('aos-right');
        });
      };
    }
    if ($(window).width() > 1610) {
      if ($('.aos-left').length > 0) {
        $('.aos-left').each(function () {
          $(this).attr("data-aos", "fade-left");
          $(this).removeClass('aos-left');
        });
      };
      if ($('.aos-right').length > 0) {
        $('.aos-right').each(function () {
          $(this).attr("data-aos", "fade-right");
          $(this).removeClass('aos-right');
        });
      };
    }
  };
  aosAnimation();


  /*----------- 36. One Page Nav ----------*/
  function onePageNav(element) {
    if ($(element).length > 0) {
      $(element).each(function () {
        $(this).find('a').each(function () {
          $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: target.offset().top - 10
              }, 1000);
            };
            
          });
        });
      })
    }
  };
  onePageNav('.main-menu, .onepage-nav, .mobile-menu');
  
  
  /*----------- 37. Isotop Active ----------*/
  $('.filter-active').imagesLoaded(function () {
    var $grid = $('.filter-active').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      filter: '*',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    })

    // filter items on button click
    $('.filter-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    // Menu Active Class 
    $('.filter-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

  })




  /*----------- 37. Right Click Disable ----------*/
  // window.addEventListener('contextmenu', function (e) {
  //   // do something here... 
  //   e.preventDefault();
  // }, false);


  /*----------- 38. Inspect Element Disable ----------*/
  // document.onkeydown = function (e) {
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //     return false;
  //   }
  // }



  /*----------- 39. Google Map Active ----------*/

  // Google Map For Footer 1
  function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": .2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('footer-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
    });
  }
  if ($('#footer-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
  }




  /*----------- Google Map For Contact Map --------------------*/

  function contactMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": .2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('google-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
    });
  }
  if ($('#google-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', contactMap);
  }
	
	


















})(jQuery);