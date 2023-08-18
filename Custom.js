
$(document).ready(function(){

    // menu

	  var open = $(".mobile-menu-icon");
    var clos = $(".mobile-menu-clos");
    var menu = $(".mobile-menu");
	

	open.click(function() {
		menu.addClass("active-menu-mobile");
    open.addClass("active-icon");
    clos.removeClass("active-icon");
	});
	

	clos.click(function() {
		menu.removeClass("active-menu-mobile");
    open.removeClass("active-icon");
    clos.addClass("active-icon");
	});

	
    // sliders

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    });

    $('.slider-2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    $('.zoom-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    });    

    $('.link-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    });    


    // zoom imgs 

    var zoomin = $(".portfolio-links .fa-plus");
    var zoomout = $(".zoom-clos");
    var zoomimg = $(".zoom-imgs");

    zoomin.click(function() {
      zoomimg.addClass("zoom-img-active");
      zoomout.removeClass("active-icon");
    });

    zoomout.click(function() {
      zoomimg.removeClass("zoom-img-active");
      zoomout.addClass("active-icon");
    });


    // link img

    // (1)
    var linkin = $(".img-1 .portfolio-links .fa-link");
    var linkout = $(".link-clos");
    var linkimg = $(".diners-link");

    linkin.click(function() {
      linkimg.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });

    // (2)
    var linkin2 = $(".img-2 .portfolio-links .fa-link");
    var linkimg2 = $(".debute-club-link");

    linkin2.click(function() {
      linkimg2.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg2.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });

    // (3)
    var linkin3 = $(".img-3 .portfolio-links .fa-link");
    var linkimg3 = $(".grow-flows-link");

    linkin3.click(function() {
      linkimg3.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg3.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });

    // (4)
    var linkin4 = $(".img-4 .portfolio-links .fa-link");
    var linkimg4 = $(".imast-link");

    linkin4.click(function() {
      linkimg4.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg4.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });

    // (5)
    var linkin5 = $(".img-5 .portfolio-links .fa-link");
    var linkimg5 = $(".king-power-link");

    linkin5.click(function() {
      linkimg5.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg5.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });

    // (6)
    var linkin6 = $(".img-6 .portfolio-links .fa-link");
    var linkimg6 = $(".email-pages-link");

    linkin6.click(function() {
      linkimg6.addClass("link-img-active");
      linkout.removeClass("active-icon");
    });

    linkout.click(function() {
      linkimg6.removeClass("link-img-active");
      linkout.addClass("active-icon");
    });


    // prevent default on anker

    var ankr = $(".portfolio-links a");

    ankr.click(function(event) {
      event.preventDefault();
    });


    // // Whatsapp button

    // var btn = $(".Bubble__BubbleComponent-sc");
    // var box = $(".Window__WindowComponent-sc-1wwhwms-1");

    // btn.click(function() {
    //     box.toggleClass("active-box");
    // });

    // var btn2 = $(".jquJIT-2");

    // btn2.click(function() {
    //     box.removeClass("active-box");
    // });


    // numbers

    function startNumberDisplay(initialNumber, maxNumber, intervalDuration, displayClass) {
        let currentNumber = initialNumber;

        function displayNumber() {
            const elements = document.getElementsByClassName(displayClass);
            for (let i = 0; i < elements.length; i++) {
                elements[i].textContent = currentNumber;
            }

            if (currentNumber >= maxNumber) {
                clearInterval(interval);
            } else {
                currentNumber++;
            }
        }

        const interval = setInterval(displayNumber, intervalDuration);
    }
    
    startNumberDisplay(1, 232, 4, "purecounter"); 
    startNumberDisplay(1, 521, 3, "purecounter-2");
    startNumberDisplay(1, 1463, 0.1, "purecounter-3");
    startNumberDisplay(1, 24, 10, "purecounter-4");


    // progress bars

    function moveProgressBar(selector, targetWidth) {
        const progressBar = document.querySelector(selector);
        let width = 0;
        const increment = (targetWidth / 100) * 10;
        const interval = setInterval(() => {
          width += increment;
          progressBar.style.width = `${width}%`;
          if (width >= targetWidth) {
            clearInterval(interval);
          }
        }, 10);
      }
  
      function onProgressBarVisible() {
        const progressBarSection = document.querySelector('.skills-content');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              moveProgressBar('.html', 100);
              moveProgressBar('.css', 100);
              moveProgressBar('.js', 85);
              moveProgressBar('.php', 55);
              moveProgressBar('.liquid', 92);
              moveProgressBar('.s-w', 98);
              moveProgressBar('.ps', 70);
              moveProgressBar('.sql', 90);
              observer.unobserve(entry.target);
            }
          });
        });
  
        observer.observe(progressBarSection);
      }
  
      onProgressBarVisible();


});







// $(document).ready(function() {

//   // Menu

//   var open = $(".mobile-menu-icon");
//   var clos = $(".mobile-menu-clos");
//   var menu = $(".mobile-menu");

//   open.click(function() {
//     menu.addClass("active-menu-mobile");
//     open.addClass("active-icon");
//     clos.removeClass("active-icon");
//   });

//   clos.click(function() {
//     menu.removeClass("active-menu-mobile");
//     open.removeClass("active-icon");
//     clos.addClass("active-icon");
//   });

//   // Sliders

//   function initializeSlider(selector, slidesToShow) {
//     $(selector).slick({
//       dots: true,
//       infinite: true,
//       speed: 300,
//       slidesToShow: slidesToShow,
//       slidesToScroll: 1,
//       autoplay: true
//     });
//   }

//   initializeSlider('.slider', 3);
//   initializeSlider('.slider-2', 1);
//   initializeSlider('.zoom-slider', 1);
//   initializeSlider('.link-slider', 1);

//   // Zoom images

//   var zoomin = $(".portfolio-links .fa-plus");
//   var zoomout = $(".zoom-clos");
//   var zoomimg = $(".zoom-imgs");

//   zoomin.click(function() {
//     zoomimg.addClass("zoom-img-active");
//     zoomout.removeClass("active-icon");
//   });

//   zoomout.click(function() {
//     zoomimg.removeClass("zoom-img-active");
//     zoomout.addClass("active-icon");
//   });

//   // Link images

//   function initializeLinkImage(linkin, linkimg) {
//     linkin.click(function() {
//       linkimg.addClass("link-img-active");
//       linkout.removeClass("active-icon");
//     });

//     linkout.click(function() {
//       linkimg.removeClass("link-img-active");
//       linkout.addClass("active-icon");
//     });
//   }

//   var linkout = $(".link-clos");
//   initializeLinkImage($(".img-1 .portfolio-links .fa-link"), $(".diners-link"));
//   initializeLinkImage($(".img-2 .portfolio-links .fa-link"), $(".debute-club-link"));
//   initializeLinkImage($(".img-3 .portfolio-links .fa-link"), $(".grow-flows-link"));
//   initializeLinkImage($(".img-4 .portfolio-links .fa-link"), $(".imast-link"));
//   initializeLinkImage($(".img-5 .portfolio-links .fa-link"), $(".king-power-link"));
//   initializeLinkImage($(".img-6 .portfolio-links .fa-link"), $(".email-pages-link"));

//   // Prevent default on anchor clicks

//   var ankr = $(".portfolio-links a");

//   ankr.click(function(event) {
//     event.preventDefault();
//   });

//   // Numbers

//   function startNumberDisplay(initialNumber, maxNumber, intervalDuration, displayClass) {
//     let currentNumber = initialNumber;

//     function displayNumber() {
//       const elements = document.getElementsByClassName(displayClass);
//       for (let i = 0; i < elements.length; i++) {
//         elements[i].textContent = currentNumber;
//       }

//       if (currentNumber >= maxNumber) {
//         clearInterval(interval);
//       } else {
//         currentNumber++;
//       }
//     }

//     const interval = setInterval(displayNumber, intervalDuration);
//   }

//   startNumberDisplay(1, 232, 4, "purecounter");
//   startNumberDisplay(1, 521, 3, "purecounter-2");
//   startNumberDisplay(1, 1463, 0.1, "purecounter-3");
//   startNumberDisplay(1, 24, 10, "purecounter-4");

//   // Progress bars

//   function moveProgressBar(selector, targetWidth) {
//     const progressBar = document.querySelector(selector);
//     let width = 0;
//     const increment = (targetWidth / 100) * 10;
//     const interval = setInterval(() => {
//       width += increment;
//       progressBar.style.width = `${width}%`;
//       if (width >= targetWidth) {
//         clearInterval(interval);
//       }
//     }, 10);
//   }

//   function onProgressBarVisible() {
//     const progressBarSection = document.querySelector('.skills-content');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           moveProgressBar('.html', 100);
//           moveProgressBar('.css', 100);
//           moveProgressBar('.js', 85);
//           moveProgressBar('.php', 55);
//           moveProgressBar('.liquid', 92);
//           moveProgressBar('.s-w', 98);
//           moveProgressBar('.ps', 70);
//           moveProgressBar('.sql', 90);
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     observer.observe(progressBarSection);
//   }

//   onProgressBarVisible();

//   // Whatsapp

//   var btn = $(".Bubble__BubbleComponent-sc");
//   var box = $(".Window__WindowComponent-sc-1wwhwms-1");

//   btn.click(function() {
//     box.toggleClass("active-box");
//   });

//   var btn2 = $(".jquJIT-2");

//   btn2.click(function() {
//     box.removeClass("active-box");
//   });

// });
