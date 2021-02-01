(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {

    var swiper = new Swiper('.investment_plan .swiper-container', {
      centeredSlides: true, 
      slidesPerView: 5,
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true, 
      spaceBetween: 0,  
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        }, 
        480: {
          slidesPerView: 1,
        },
      },
      });
  
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                Tooltip
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    $('[data-toggle="tooltip"]').tooltip();

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                  Wow js
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    // var wow = new WOW({
    //   boxClass: "wow", // animated element css class (default is wow)
    //   animateClass: "animated", // animation css class (default is animated)
    //   offset: 0, // distance to the element when triggering the animation (default is 0)
    //   mobile: true, // trigger animations on mobile devices (default is true)
    //   live: true, // act on asynchronously loaded content (default is true)
    //   delay: 300,
    //   duration: 600,
    //   callback: function (box) {
    //     // the callback is fired every time an animation is started
    //     // the argument that is passed in is the DOM node being animated
    //   },
    //   scrollContainer: null, // optional scroll container selector, otherwise use window,
    //   resetAnimation: true, // reset animation on end (default is true)
    // });
    // wow.init();

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                  wd slider
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
        var mySwiper = new Swiper(".wd_slider .swiper-container", {
          direction: "horizontal",
          slidesPerView: 4,
          loop: true,
          slidesPerColumn: 2,
          centeredSlides: false,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1200: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            992: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 1,
              centeredSlides: false,
            },
          },
        });


    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                Custom dropdown 2
      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    $(".custom_select").each(function () {
      var classes = $(this).attr("class"),
        name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template +=
        '<div class="custom_select_trigger">' +
        $(this).attr("data-value") +
        "</div>";
      template += '<ul class="custom_options">';
      $(this)
        .find("option")
        .each(function () {
          template +=
            '<li class="custom_option ' +
            $(this).attr("class") +
            '" data-value="' +
            $(this).attr("value") +
            '">' +
            $(this).html() +
            "</li>";
        });
      template += "</ul></div>";

      $(this).wrap('<div class="custom_select_wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom_select_trigger").on("click", function () {
      $("html").on("click", function () {
        $(".custom_select").removeClass("opened");
      });
      $(this).parents(".custom_select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom_option").on("click", function () {
      $(this)
        .parents(".custom_select_wrapper")
        .find("#calc_plan")
        .val($(this).data("value"));
      $(this)
        .parents(".custom_options")
        .find(".custom_option")
        .removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom_select").removeClass("opened");
      $(this)
        .parents(".custom_select")
        .find(".custom_select_trigger")
        .text($(this).text());
    });




  });

  jQuery(window).on("load", function () {});
})(jQuery);
