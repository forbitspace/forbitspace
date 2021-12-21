// add class

$(".main-menu-btn").on("click", function () {
  $(this).addClass("active");
  $(".main-menu").addClass("active");
});

$(".main-menu-overlay").on("click", function () {
  $(".main-menu-btn").removeClass("active");
  $(".main-menu").removeClass("active");
});

// slide

$(".slide-website").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 6000,
  pauseOnFocus: false,
  focusOnSelect: true,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "50px",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".home-event-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnFocus: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
});

$(".slide-optimization").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnFocus: false,
  speed: 1200,
  prevArrow: $(".js-prev-1"),
  nextArrow: $(".js-next-1"),
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: true,
      },
    },
  ],
});

$(".slide-ourteam").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 6000,
  pauseOnFocus: true,
  focusOnSelect: true,
  speed: 1200,
  prevArrow: $(".js-prev"),
  nextArrow: $(".js-next"),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      },
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      },
    },
  ],
});

$(function () {
  $(".btn-js").on("click", function () {
    $(this).parent().find(".btn-js.active").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  $(".btn-js").on("click", function () {
    $(this).parent().find(".btn-js.active").removeClass("active");
    $(this).addClass("active");
  });
});

var rev = $(".rev_slider");
rev
  .on("init", function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      next2 = cur.next().next(),
      prev = cur.prev(),
      prev2 = cur.prev().prev();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev2.addClass("slick-sprev2");
    next2.addClass("slick-snext2");
    cur
      .removeClass("slick-snext")
      .removeClass("slick-sprev")
      .removeClass("slick-snext2")
      .removeClass("slick-sprev2");
    slick.$prev = prev;
    slick.$next = next;
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    console.log("beforeChange");
    var cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass("slick-sprev");
    slick.$next.removeClass("slick-snext");
    slick.$prev.prev().removeClass("slick-sprev2");
    slick.$next.next().removeClass("slick-snext2");
    (next = cur.next()), (prev = cur.prev());
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev.prev().addClass("slick-sprev2");
    next.next().addClass("slick-snext2");
    slick.$prev = prev;
    slick.$next = next;
    cur
      .removeClass("slick-next")
      .removeClass("slick-sprev")
      .removeClass("slick-next2")
      .removeClass("slick-sprev2");
  });

rev.slick({
  speed: 1000,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  swipe: true,
  customPaging: function (slider, i) {
    return "";
  },
  /*infinite: false,*/
});
// tab
$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".smoothscroll-top").addClass("show");
    } else {
      $(".smoothscroll-top").removeClass("show");
    }
  });

  $(".smoothscroll-top").on("click", scrollToTop);
});

function scrollToTop() {
  verticalOffset = typeof verticalOffset != "undefined" ? verticalOffset : 0;
  element = $("body");
  offset = element.offset();
  offsetTop = offset.top;
  $("html, body").animate({ scrollTop: offsetTop }, 600, "linear");
}

// slide-banner-top

//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight();

$(window).scroll(function () {
  if ($(window).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $(".m-backtotop").addClass("active");

    //Just some cool text changes
    $("h1 span").text("TA-DA! Now hover it and hit dat!");
  } else {
    //Removes active class to make button visible
    $(".m-backtotop").removeClass("active");

    //Just some cool text changes
    $("h1 span").text("(start scrolling)");
  }
});

//Scrolls the user to the top of the page again
$(".m-backtotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(".open-popup-link").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "mfp-fade",
  callbacks: {
    open: function () {
      console.log(this.content);
      this.content.find(".slick-slider").slick("setPosition");
    },
    close: function () {},
  },
});

// tab accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function () {
  $(".c-tab__nav ul li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".c-tab__nav ul li").removeClass("active");
    $(".c-tab__content").removeClass("active");

    $(this).addClass("active");
    $("." + tab_id).addClass("active");
  });
});

$(document).ready(function () {
  $(".dropdown-list").click(function () {
    $(".dropdown-child").toggleClass("visible");
  });
});
/*$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
*/
$(function () {
  var fx = function fx() {
    $(".count").each(function (i, el) {
      var data = parseInt(this.dataset.n, 10);
      var props = {
        from: {
          count: 0,
        },
        to: {
          count: data,
        },
      };
      $(props.from).animate(props.to, {
        duration: 3000 * 1,
        step: function (now, fx) {
          $(el).text(Math.ceil(now));
        },
        complete: function () {
          if (el.dataset.sym !== undefined) {
            el.textContent = el.textContent.concat(el.dataset.sym);
          }
        },
      });
    });
  };

  var reset = function reset() {
    //console.log($(this).scrollTop())
    if ($(this).scrollTop() > 5470) {
      $(this).off("scroll");
      fx();
    }
  };

  $(window).on("scroll", reset);
});
