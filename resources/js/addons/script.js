 // Banner Section
var owl = $('.banner-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      dots: false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });



   // Banner Section
var owl = $('.testimonial-carousel');
  owl.owlCarousel({
      items:5,
      loop:true,
      margin:10,
      autoplay:true,
      dots: false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5
        }
    }
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });











// Product Detail Page
$(document).ready(function() {
  var detailslider = $("#detailslider");
  var detailthumb = $("#detailthumb");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;
  detailslider.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false, 
      dots: false,
      loop: true,
      responsiveRefreshRate: 200
  }).on('changed.owl.carousel', syncPosition);
  detailthumb
      .on('initialized.owl.carousel', function() {
          detailthumb.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: true,
          item: 4,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, 
        navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);
      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }
      detailthumb
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = detailthumb.find('.owl-item.active').length - 1;
      var start = detailthumb.find('.owl-item.active').first().index();
      var end = detailthumb.find('.owl-item.active').last().index();
      if (current > end) {
          detailthumb.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
          detailthumb.data('owl.carousel').to(current - onscreen, 100, true);
      }
  }
  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          detailslider.data('owl.carousel').to(number, 100, true);
      }
  }
  detailthumb.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      detailslider.data('owl.carousel').to(number, 300, true);
  });


      $(".qtyminus").on("click",function(){
          var now = $(".qty").val();
          if ($.isNumeric(now)){
              if (parseInt(now) -1> 0)
              { now--;}
              $(".qty").val(now);
          }
      })            
      $(".qtyplus").on("click",function(){
          var now = $(".qty").val();
          if ($.isNumeric(now)){
              $(".qty").val(parseInt(now)+1);
          }
      });
});


// Product Price Range
$(document).ready(function(){
  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeValue");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
});



// Navebar Fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 



(function ($) {
  $(document).ready(function() {
  $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 500, title: true, tint: '#333', Xoffset: 15});
  $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
  $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
  $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
  $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});

  //Integration with hammer.js
  var isTouchSupported = 'ontouchstart' in window;

  if (isTouchSupported) {
  //If touch device
  $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
  var xzoom = $(this).data('xzoom');
  xzoom.eventunbind();
  });

  $('.xzoom, .xzoom2, .xzoom3').each(function() {
  var xzoom = $(this).data('xzoom');
  $(this).hammer().on("tap", function(event) {
  event.pageX = event.gesture.center.pageX;
  event.pageY = event.gesture.center.pageY;
  var s = 1, ls;

  xzoom.eventmove = function(element) {
  element.hammer().on('drag', function(event) {
  event.pageX = event.gesture.center.pageX;
  event.pageY = event.gesture.center.pageY;
  xzoom.movezoom(event);
  event.gesture.preventDefault();
      });
      }

      xzoom.eventleave = function(element) {
      element.hammer().on('tap', function(event) {
      xzoom.closezoom();
      });
      }
      xzoom.openzoom(event);
      });
      });

      $('.xzoom4').each(function() {
      var xzoom = $(this).data('xzoom');
      $(this).hammer().on("tap", function(event) {
      event.pageX = event.gesture.center.pageX;
      event.pageY = event.gesture.center.pageY;
      var s = 1, ls;

      xzoom.eventmove = function(element) {
      element.hammer().on('drag', function(event) {
      event.pageX = event.gesture.center.pageX;
      event.pageY = event.gesture.center.pageY;
      xzoom.movezoom(event);
      event.gesture.preventDefault();
      });
      }

      var counter = 0;
      xzoom.eventclick = function(element) {
      element.hammer().on('tap', function() {
      counter++;
      if (counter == 1) setTimeout(openfancy,300);
      event.gesture.preventDefault();
      });
      }

      function openfancy() {
      if (counter == 2) {
      xzoom.closezoom();
      $.fancybox.open(xzoom.gallery().cgallery);
      } else {
      xzoom.closezoom();
      }
      counter = 0;
      }
      xzoom.openzoom(event);
      });
      });

      $('.xzoom5').each(function() {
      var xzoom = $(this).data('xzoom');
      $(this).hammer().on("tap", function(event) {
      event.pageX = event.gesture.center.pageX;
      event.pageY = event.gesture.center.pageY;
      var s = 1, ls;

      xzoom.eventmove = function(element) {
      element.hammer().on('drag', function(event) {
      event.pageX = event.gesture.center.pageX;
      event.pageY = event.gesture.center.pageY;
      xzoom.movezoom(event);
      event.gesture.preventDefault();
      });
      }

      var counter = 0;
      xzoom.eventclick = function(element) {
      element.hammer().on('tap', function() {
      counter++;
      if (counter == 1) setTimeout(openmagnific,300);
      event.gesture.preventDefault();
      });
      }

      function openmagnific() {
      if (counter == 2) {
      xzoom.closezoom();
      var gallery = xzoom.gallery().cgallery;
      var i, images = new Array();
      for (i in gallery) {
      images[i] = {src: gallery[i]};
      }
      $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
      } else {
      xzoom.closezoom();
      }
      counter = 0;
      }
      xzoom.openzoom(event);
      });
      });

      } else {
      //If not touch device

      //Integration with fancybox plugin
      $('#xzoom-fancy').bind('click', function(event) {
      var xzoom = $(this).data('xzoom');
      xzoom.closezoom();
      $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
      event.preventDefault();
      });

      //Integration with magnific popup plugin
      $('#xzoom-magnific').bind('click', function(event) {
      var xzoom = $(this).data('xzoom');
      xzoom.closezoom();
      var gallery = xzoom.gallery().cgallery;
      var i, images = new Array();
      for (i in gallery) {
      images[i] = {src: gallery[i]};
      }
      $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
      event.preventDefault();
      });
      }
      });
      })(jQuery);





function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

magnify("myimage", 6);








